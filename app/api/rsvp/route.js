import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

    if (!scriptUrl) {
      throw new Error("GOOGLE_SCRIPT_URL belum di-setting di .env.local");
    }

    const response = await fetch(scriptUrl, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
    });

    const responseText = await response.text();

    if (response.ok) {
      try {
        const json = JSON.parse(responseText);
        if (json.status === 'success') {
          return NextResponse.json({ success: true, message: 'RSVP berhasil terkirim!' });
        } else {
          throw new Error(`Script error: ${json.message || responseText}`);
        }
      } catch {
        throw new Error(`Response tidak valid: ${responseText}`);
      }
    } else {
      throw new Error(`Google nolak (Status ${response.status}): ${responseText}`);
    }

  } catch (error) {
    console.error("=== API RSVP ERROR ===", error.message);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

    if (!scriptUrl) {
      throw new Error("GOOGLE_SCRIPT_URL belum di-setting");
    }

    const response = await fetch(scriptUrl, {
      method: 'GET',
      redirect: 'follow',
      cache: 'no-store',
    });

    const text = await response.text();
    const data = JSON.parse(text);

    return NextResponse.json({ success: true, data });

  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
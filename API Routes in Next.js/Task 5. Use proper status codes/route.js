import { NextResponse } from 'next/server';

export async function POST(req) {
  const { name, message } = await req.json();

  // Validate required fields
  if (!name || !message) {
    return NextResponse.json(
      { error: 'Name and message are required.' },
      { status: 400 }
    );
  }

  // Success response
  return NextResponse.json(
    {
      success: true,
      message: `Thank you ${name}! Your message has been received.`,
      data: {
        name,
        message,
      },
    },
    { status: 201 }
  );
}
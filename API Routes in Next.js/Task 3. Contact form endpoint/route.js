import { NextResponse } from 'next/server';

export async function POST(req) {
  const { name, message } = await req.json();

  return NextResponse.json({
    success: true,
    message: `Thank you ${name}! Your message has been received.`,
    data: {
      name,
      message
    }
  });
}
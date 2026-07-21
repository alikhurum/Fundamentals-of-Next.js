import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    name: 'Tayyeb Ahmad',
    age: 20
  });
}
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
  const { id } = params;

  return NextResponse.json({
    id: id,
    name: `Product ${id}`,
    price: 99.99,
    description: `This is the description for Product ${id}.`
  });
}
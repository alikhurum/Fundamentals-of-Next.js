import { NextResponse } from 'next/server';

// In-memory database
let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
];

// GET - Return all users
export async function GET() {
  return NextResponse.json(users);
}

// POST - Add a new user
export async function POST(req) {
  const { name, email } = await req.json();

  // Basic validation
  if (!name || !email) {
    return NextResponse.json(
      { error: 'Name and email are required.' },
      { status: 400 }
    );
  }

  const newUser = {
    id: users.length + 1,
    name,
    email,
  };

  users.push(newUser);

  return NextResponse.json(newUser, { status: 201 });
}
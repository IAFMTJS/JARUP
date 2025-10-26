import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET(request: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db('jarup');
    const users = await db.collection('users').find({}).limit(10).toArray();
    
    return NextResponse.json(users);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const userData = await request.json();
    const client = await clientPromise;
    const db = client.db('jarup');
    
    const result = await db.collection('users').insertOne({
      ...userData,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    
    return NextResponse.json({ id: result.insertedId, ...userData });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
  }
}


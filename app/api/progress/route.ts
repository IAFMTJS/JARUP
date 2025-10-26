import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    
    const client = await clientPromise;
    const db = client.db('jarup');
    
    if (userId) {
      const progress = await db.collection('userProgress').findOne({ userId });
      return NextResponse.json(progress);
    }
    
    const progressList = await db.collection('userProgress').find({}).toArray();
    return NextResponse.json(progressList);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Failed to fetch progress' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const progressData = await request.json();
    const client = await clientPromise;
    const db = client.db('jarup');
    
    const result = await db.collection('userProgress').insertOne({
      ...progressData,
      lastActiveAt: new Date(),
    });
    
    return NextResponse.json({ id: result.insertedId, ...progressData });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Failed to save progress' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { userId, ...updateData } = await request.json();
    const client = await clientPromise;
    const db = client.db('jarup');
    
    const result = await db.collection('userProgress').updateOne(
      { userId },
      { $set: { ...updateData, lastActiveAt: new Date() } }
    );
    
    return NextResponse.json({ updated: result.modifiedCount > 0 });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Failed to update progress' }, { status: 500 });
  }
}


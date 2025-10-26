import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import bcrypt from 'bcryptjs';

export async function POST(request: NextRequest) {
  try {
    const { name, email, password } = await request.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db('jarup');

    // Check if user already exists
    const existingUser = await db.collection('users').findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create user
    const result = await db.collection('users').insertOne({
      email,
      password: hashedPassword,
      name,
      currentLanguage: 'japanese',
      streak: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    // Initialize user progress
    await db.collection('userProgress').insertOne({
      userId: result.insertedId.toString(),
      language: 'japanese',
      wordsLearned: 0,
      charactersMastered: [],
      lessonProgress: {},
      speakingLevel: 0,
      readingLevel: 0,
      writingLevel: 0,
      lastActiveAt: new Date(),
    });

    await db.collection('userProgress').insertOne({
      userId: result.insertedId.toString(),
      language: 'russian',
      wordsLearned: 0,
      charactersMastered: [],
      lessonProgress: {},
      speakingLevel: 0,
      readingLevel: 0,
      writingLevel: 0,
      lastActiveAt: new Date(),
    });

    return NextResponse.json({
      success: true,
      userId: result.insertedId,
    });
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Failed to create account' },
      { status: 500 }
    );
  }
}

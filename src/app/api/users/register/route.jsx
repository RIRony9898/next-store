import clientPromise from "@/lib/mongodb";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name, email, password } = await request.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("nextjs_app");
    const users = db.collection("users");

    // Check if user already exists
    const existingUser = await users.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create user
    const newUser = {
      name,
      email,
      password: hashedPassword,
      createdAt: new Date(),
    };

    await users.insertOne(newUser);

    return NextResponse.json(
      { message: "User registered successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

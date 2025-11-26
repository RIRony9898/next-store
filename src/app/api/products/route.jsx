import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  const client = await clientPromise;
  const db = client.db("nextjs_app");
  const products = await db.collection("products").find({}).toArray();
  return NextResponse.json(products);
}

export async function POST(req) {
  const client = await clientPromise;
  const db = client.db("nextjs_app");
  const { title, description, price, image } = await req.json();
  if (!title || !price)
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  const result = await db
    .collection("products")
    .insertOne({ title, description, price, image, createdAt: new Date() });
  return NextResponse.json({ success: true, product: result.insertedId });
}

export async function DELETE(req) {
  const client = await clientPromise;
  const db = client.db("nextjs_app");
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const { ObjectId } = await import("mongodb");
  await db.collection("products").deleteOne({ _id: new ObjectId(id) });
  return NextResponse.json({ success: true });
}

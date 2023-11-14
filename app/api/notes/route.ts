import Note from "@/app/models/Note";
import connectDB from "@/utils/db"
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectDB();
    const notes = await Note.find();
    return NextResponse.json({ notes }, { status: 200 });
  }
  catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

export const POST = async (req: any) => {
  try {
    await connectDB();
    const body = await req.json();
    const newNote = await Note.create(body);
    return NextResponse.json({ message: "Note has been created", newNote }, { status: 201 });
  }
  catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
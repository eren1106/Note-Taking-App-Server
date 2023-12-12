import Note, { INote } from "@/app/models/Note";
import { getApiResponse, errorResponse } from "@/utils/api-response";
import connectDB from "@/utils/db"
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectDB();
    const notes = await Note.find();
    return getApiResponse(notes);
  }
  catch (err) {
    return errorResponse(err);
  }
}

export const POST = async (req: NextRequest) => {
  try {
    await connectDB();
    const body = await req.json();
    const newNote = await Note.create(body);
    return NextResponse.json({ message: "Note has been created", data: newNote }, { status: 200 });
  }
  catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
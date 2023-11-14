import Note from "@/app/models/Note";
import connectDB from "@/utils/db"
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {
  const { id } = params;

  try {
    await connectDB();
    const note = await Note.findOne({_id: id});
    return NextResponse.json({ data: note }, { status: 200 });
  }
  catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

export const PUT = async (req: NextRequest, { params }: any) => {
  const { id } = params;

  try {
    await connectDB();
    const body = await req.json();
    await Note.findByIdAndUpdate(id, {...body});
    return NextResponse.json({ message: "Note has been updated"}, { status: 201 });
  }
  catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

export const DELETE = async (req: NextRequest, { params }: any) => {
  const { id } = params;

  try {
    await connectDB();
    const note = await Note.findByIdAndDelete(id);
    return NextResponse.json({ message: "Note has been deleted", data: note }, { status: 200 });
  }
  catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
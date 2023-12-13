import Note from "@/app/models/Note";
import { deleteApiResponse, errorResponse, getApiResponse, putApiResponse } from "@/utils/api-response";
import connectDB from "@/utils/db"
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {
  const { id } = params;

  try {
    await connectDB();
    const note = await Note.findOne({_id: id});
    return getApiResponse(note);
  }
  catch (err) {
    return errorResponse(err);
  }
}

export const PUT = async (req: NextRequest, { params }: any) => {
  const { id } = params;

  try {
    await connectDB();
    const body = await req.json();
    const updatedNote = await Note.findByIdAndUpdate(id, {...body}, { new: true });
    return putApiResponse(updatedNote, 'note');
  }
  catch (err) {
    return errorResponse(err);
  }
}

export const DELETE = async (req: NextRequest, { params }: any) => {
  const { id } = params;

  try {
    await connectDB();
    const note = await Note.findByIdAndDelete(id);
    return deleteApiResponse(note, 'note');
  }
  catch (err) {
    return errorResponse(err);
  }
}
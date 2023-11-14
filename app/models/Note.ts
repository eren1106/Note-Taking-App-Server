import mongoose, { Schema } from 'mongoose';

export interface INote {
  title: string,
  content: string,
}

// export interface INoteModel extends INote, Document {}

const noteSchema: Schema = new Schema<INote>(
    {
      title: { type: String },
      content: { type: String, required: true },
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const Note = mongoose.models.Note || mongoose.model("Note", noteSchema);

export default Note;
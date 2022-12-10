import React from "react";
import { NoteData, Tag } from "../App";
import NoteForm from "./NoteForm";
import { useNote } from "./NoteLayout";

type EditNoteProps = {
  onSubmit: (id: string, data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
};
const EditNote = ({ onAddTag, availableTags, onSubmit }: EditNoteProps) => {
  const note = useNote();
  return (
    <>
      <h1 className="mb-4">Edit Note</h1>
      <NoteForm
        onAddTag={onAddTag}
        availableTags={availableTags}
        onSubmit={(data) => onSubmit(note.id, data)}
        {...note}
      />
    </>
  );
};

export default EditNote;

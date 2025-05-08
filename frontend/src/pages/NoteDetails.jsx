import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getNoteById } from '../services/notesService';

const NoteDetails = () => {
  const { id } = useParams();
  const [note, setNote] = useState(null);

  useEffect(() => {
    getNoteById(id).then(setNote);
  }, [id]);

  if (!note) return <div>Loading...</div>;

  return (
    <div>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      {/* Add more fields as needed */}
    </div>
  );
};

export default NoteDetails;

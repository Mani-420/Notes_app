// src/components/notes/NoteCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteNote } from '../../services/notesService';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const NoteCard = ({ note, refreshNotes }) => {
  const navigate = useNavigate();
  const { _id, title, content, createdAt } = note;

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString();
  };

  const truncateContent = (text, maxLength = 100) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  const handleView = () => {
    navigate(`/note/${_id}`);
  };

  const handleEdit = () => {
    navigate(`/notes/${_id}/edit`);
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      try {
        await deleteNote(_id);
        toast.success('Note deleted successfully');
        if (refreshNotes) refreshNotes();
      } catch (error) {
        toast.error('Failed to delete note');
      }
    }
  };

  return (
    <Link to={`/notes/${note._id}`}>
      <div className="bg-gray-800 rounded-lg border border-gray-700 hover:border-cyan-700 p-5 shadow-md transition-all">
        <h3 className="font-bold text-lg mb-2 line-clamp-1">
          {title || 'Untitled Note'}
        </h3>

        <p className="text-gray-300 mb-4 line-clamp-3">
          {truncateContent(content) || 'No content'}
        </p>

        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-400">{formatDate(createdAt)}</span>

          <div className="flex space-x-2">
            <button
              onClick={handleDelete}
              className="text-white px-3 py-1 rounded-md font-medium transition hover:text-red-400"
              aria-label="Delete note"
            >
              ❌ Delete
            </button>
            <button
              onClick={handleEdit}
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-3 py-1 rounded-md font-medium transition"
              aria-label="Edit note"
            >
              ✏️ Edit
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;

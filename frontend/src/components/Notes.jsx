import React from 'react';
import { Link } from 'react-router-dom';

const NoteCard = ({ id, title, content, date, username, onEdit, onDelete }) => {
  // Format the date (if provided)
  const formattedDate = date ? new Date(date).toLocaleDateString() : '';

  return (
    <div className="bg-gray-800 rounded-xl p-5 shadow-lg border border-gray-700 hover:border-cyan-700 transition-all">
      {/* Card Header with Title and Date */}
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-bold text-lg line-clamp-1">
          {title || 'Untitled Note'}
        </h3>
        {date && <span className="text-xs text-gray-400">{formattedDate}</span>}
      </div>

      {/* Card Content */}
      <p className="text-gray-300 mb-4 line-clamp-3">
        {content || 'This note has no content.'}
      </p>

      {/* Card Footer */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="h-6 w-6 bg-cyan-600 rounded-full flex items-center justify-center text-xs font-bold mr-2">
            {username ? username[0].toUpperCase() : '?'}
          </div>
          <span className="text-sm text-gray-400">
            {username || 'Anonymous'}
          </span>
        </div>

        <div className="flex space-x-2">
          <button
            onClick={() => onDelete(id)}
            className="text-white px-3 py-1 rounded-md font-medium transition hover:text-red-400"
            aria-label="Delete note"
          >
            ❌ Delete
          </button>
          <button
            onClick={() => onEdit(id)}
            className="bg-cyan-600 hover:bg-cyan-700 text-white px-3 py-1 rounded-md font-medium transition"
            aria-label="Edit note"
          >
            ✏️ Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;

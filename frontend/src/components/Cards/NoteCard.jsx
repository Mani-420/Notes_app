import React, { useState } from 'react';
import { FiTrash2, FiEdit, FiEye } from 'react-icons/fi';
import moment from 'moment';

const NoteCard = ({ title, date, content, onDelete, onEdit, onView }) => {
  // Truncate content for preview
  const truncateContent = (text, maxLength = 100) => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength).trim() + '...';
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200">
      <div className="p-5">
        {/* Header with title and date */}
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
            {title}
          </h3>
          <span className="text-xs text-gray-500">
            {moment(date).format('Do MMM YYYY')}
          </span>
        </div>

        {/* Content preview */}
        <div className="mb-4">
          <p className="text-gray-600 text-sm line-clamp-3">
            {truncateContent(content)}
          </p>
        </div>

        {/* Action buttons */}
        <div
          className={`flex justify-end space-x-2 transition-opacity duration-300 opacity-100`}
        >
          <button
            onClick={onView}
            className="p-1.5 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
            aria-label="View note"
          >
            <FiEye size={16} />
          </button>
          <button
            onClick={onEdit}
            className="p-1.5 rounded-full bg-green-50 text-green-600 hover:bg-green-100 transition-colors"
            aria-label="Edit note"
          >
            <FiEdit size={16} />
          </button>
          <button
            onClick={onDelete}
            className="p-1.5 rounded-full bg-red-50 text-red-600 hover:bg-red-100 transition-colors"
            aria-label="Delete note"
          >
            <FiTrash2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;

// View Note Page

import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { ArrowLeft, Edit, Trash } from 'lucide-react';

const ViewNote = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [note, setNote] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Fetch note data
  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/notes/${id}`,
          {
            withCredentials: true
          }
        );
        setNote(response.data.message || null);
      } catch (error) {
        console.error('Error fetching note:', error);
        setError('Failed to load note data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchNote();
  }, [id]);

  // Handle note deletion
  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this note?')) {
      return;
    }

    setIsDeleting(true);
    try {
      await axios.delete(`http://localhost:8080/api/notes/delete/${id}`, {
        withCredentials: true
      });
      navigate('/');
    } catch (error) {
      console.error('Error deleting note:', error);
      setError('Failed to delete note. Please try again.');
      setIsDeleting(false);
    }
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-cyan-600 border-r-transparent"></div>
        <p className="mt-4 text-gray-400">Loading note...</p>
      </div>
    );
  }

  // Error state
  if (error || !note) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-red-900/30 border border-red-700 rounded-md p-4">
          <h2 className="text-xl font-semibold text-red-200 mb-2">Error</h2>
          <p className="text-red-400">{error || 'Note not found'}</p>
          <button
            onClick={() => navigate('/')}
            className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md"
          >
            Back to Notes
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header with navigation */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-1 text-gray-400 hover:text-white"
        >
          <ArrowLeft size={18} />
          <span>Back to Notes</span>
        </button>

        <div className="flex items-center gap-3">
          <Link
            to={`/notes/edit/${id}`}
            className="flex items-center gap-1 px-3 py-1.5 border border-gray-600 rounded-md hover:bg-gray-800"
          >
            <Edit size={16} />
            <span>Edit</span>
          </Link>
          <button
            onClick={handleDelete}
            disabled={isDeleting}
            className="flex items-center gap-1 px-3 py-1.5 border border-red-800 rounded-md hover:bg-red-900/50 disabled:opacity-50"
          >
            <Trash size={16} className="text-red-500" />
            <span className="text-red-500">
              {isDeleting ? 'Deleting...' : 'Delete'}
            </span>
          </button>
        </div>
      </div>

      {/* Note content */}
      <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">{note.title}</h1>
          <p className="text-gray-400">
            Created on {formatDate(note.createdAt)}
          </p>
        </div>

        <div className="prose prose-invert max-w-none">
          {/* Display content with line breaks preserved */}
          {note.content.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewNote;

// src/pages/EditNote.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getNoteById, updateNote } from '../services/notesService';
import toast from 'react-hot-toast';
import Loader from '../components/common/Loader';

const EditNote = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState('');

  // Fetch the note data when component mounts
  useEffect(() => {
    const fetchNote = async () => {
      try {
        setIsLoading(true);
        setError('');

        const response = await getNoteById(id);

        if (response.success && response.note) {
          setTitle(response.note.title || '');
          setContent(response.note.content || '');
        } else {
          setError('Failed to load note');
          toast.error('Failed to load note');
        }
      } catch (err) {
        setError('Failed to load note. Please try again.');
        toast.error('Failed to load note');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNote();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setError('Please provide a title for your note');
      return;
    }

    if (!content.trim()) {
      setError('Note content cannot be empty');
      return;
    }

    try {
      setIsSaving(true);
      setError('');

      const response = await updateNote(id, { title, content });

      if (response.success) {
        toast.success('Note updated successfully');
        navigate('/');
      } else {
        setError(response.message || 'Failed to update note');
      }
    } catch (err) {
      setError('Failed to update note. Please try again.');
      console.error(err);
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <Loader />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Edit Note</h1>
        <p className="text-gray-400">Update your thoughts and ideas</p>
      </div>

      {error && (
        <div className="bg-red-900/30 border border-red-700 rounded-md p-3 mb-4">
          <p className="text-sm text-red-400">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-1">
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-md border border-gray-700 bg-gray-800 px-4 py-2.5 focus:border-cyan-600 focus:outline-none"
            placeholder="Note title"
          />
        </div>

        <div>
          <label htmlFor="content" className="block text-sm font-medium mb-1">
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={10}
            className="w-full rounded-md border border-gray-700 bg-gray-800 px-4 py-2.5 focus:border-cyan-600 focus:outline-none"
            placeholder="Write your note here..."
          />
        </div>

        <div className="flex justify-end space-x-3">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="px-4 py-2 border border-gray-600 rounded-md hover:border-gray-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSaving}
            className="px-5 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-md transition-colors disabled:opacity-70"
          >
            {isSaving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditNote;

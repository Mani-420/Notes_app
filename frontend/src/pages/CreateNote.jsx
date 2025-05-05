import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { post } from '../services/api'; // Import your API service
import toast from 'react-hot-toast';

const CreateNote = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

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
      setIsLoading(true);
      setError('');

      // Make the actual API call to create a note
      const response = await post('/api/v1/notes/', { title, content });

      // Check if the request was successful
      if (response.data.success) {
        toast.success('Note created successfully');
        navigate('/'); // Navigate back to home page after success
      } else {
        setError(response.data.message || 'Failed to create note');
      }
    } catch (err) {
      setError('Failed to create note. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Create New Note</h1>
        <p className="text-gray-400">Jot down your thoughts, ideas, and more</p>
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
            name="title"
            required
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
            name="content"
            required
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
            disabled={isLoading}
            className="px-5 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-md transition-colors disabled:opacity-70"
          >
            {isLoading ? 'Creating...' : 'Create Note'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateNote;

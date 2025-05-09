import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EditNote = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() && !content.trim()) {
      setError('Please fill in all fields');
      return;
    }

    try {
      setIsSaving(true);
      setError('');

      // Navigate back to home page after success
      navigate('/');
    } catch (err) {
      setError('Failed to update note. Please try again.');
      console.error(err);
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-cyan-600 border-r-transparent"></div>
        <p className="mt-4 text-gray-400">Loading note...</p>
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

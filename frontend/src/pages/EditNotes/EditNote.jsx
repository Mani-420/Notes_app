import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const EditNote = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [note, setNote] = useState({ title: '', content: '' });
  const [isSaving, setIsSaving] = useState(false);
  const navigate = useNavigate();

  // Fetch the note data
  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/notes/${id}`,
          {
            withCredentials: true
          }
        );
        setNote(response.data.message || { title: '', content: '' });
      } catch (error) {
        console.error('Error fetching note:', error);
        setError('Failed to load note data');
      } finally {
        setIsLoading(false); // Set loading to false when done
      }
    };

    fetchNote();
  }, [id, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!note.title || !note.content) {
      setError('Title and content are required');
      return;
    }

    setIsSaving(true);
    try {
      await axios.put(
        `http://localhost:8080/api/notes/edit/${id}`,
        { title: note.title, content: note.content },
        { withCredentials: true }
      );
      toast.success('Note updated successfully');
      navigate('/');
    } catch (error) {
      console.error('Error updating note:', error);
      setError('Failed to update note. Please try again.');
      toast.error('Failed to update note. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prev) => ({
      ...prev,
      [name]: value
    }));
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
            name="title"
            type="text"
            value={note.title}
            onChange={handleChange}
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
            name="content"
            value={note.content}
            onChange={handleChange}
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

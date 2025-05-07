// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NoteCard from '../components/notes/NoteCard';
import Loader from '../components/common/Loader';
import { getAllNotes } from '../services/notesService';
import toast from 'react-hot-toast';

const Home = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      const response = await getAllNotes();
      setNotes(response.notes || []);
    } catch (error) {
      toast.error('Failed to fetch notes');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My Notes</h1>
        <Link
          to="/create-note"
          className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-md"
        >
          + Create Note
        </Link>
      </div>

      {notes.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-400 mb-4">You don't have any notes yet</p>
          <Link
            to="/create-note"
            className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-md"
          >
            Create your first note
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((note) => (
            <NoteCard key={note._id} note={note} refreshNotes={fetchNotes} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;

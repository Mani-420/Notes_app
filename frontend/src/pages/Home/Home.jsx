// In your Home.jsx
import React, { useEffect, useState } from 'react';
import NoteCard from '../../components/Cards/NoteCard';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [notes, setNotes] = useState([]);
  const currentUser = useSelector((state) => state.auth);
  const userData = useSelector((state) => state.auth.userData);
  const userId = userData?.userId;
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!currentUser.status || !currentUser) {
      navigate('/login');
      return;
    }

    const fetchNotes = async () => {
      try {
        console.log('Fetching notes...');
        const response = await axios.get('http://localhost:8080/api/notes/', {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (response.status === 200) {
          console.log('Notes response:', response.data);
          const notesData = response.data.message || [];
          setNotes(notesData);
        }
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    };
    fetchNotes();
  }, [currentUser.status, navigate, location.key]); // Add location.key here

  const handleViewNote = (note) => {
    navigate(`/notes/${note._id}`);
  };

  const handleEditNote = async (note) => {
    navigate(`/notes/edit/${note._id}`);
  };

  const handleDeleteNote = async (noteId) => {
    try {
      await axios.delete(`http://localhost:8080/api/notes/delete/${noteId}`, {
        withCredentials: true
      });
      // Remove note from state after successful deletion
      setNotes(notes.filter((note) => note._id !== noteId));
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  // Empty state component
  const EmptyState = () => (
    <div className="text-center py-16 px-4">
      <h2 className="text-xl text-black font-semibold mb-2">No notes yet</h2>
      <p className="text-gray-400 mb-6">
        Create your first note to get started
      </p>
      <Link
        to="/create-note"
        className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-4 rounded-md transition-colors"
      >
        <Plus size={18} />
        Create Note
      </Link>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2">My Notes</h1>
        <p className="text-gray-400">Keep track of your thoughts and ideas</p>
      </div>

      {/* Create Note Button */}
      <Link
        to="/create-note"
        className="fixed bottom-6 right-6 w-12 h-12 bg-cyan-600 hover:bg-cyan-700 rounded-full flex items-center justify-center shadow-lg"
        aria-label="Create new note"
      >
        <Plus size={24} />
      </Link>

      {/* Notes Grid with Empty State Handling */}
      {notes && notes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((note, index) => (
            <NoteCard
              key={note._id}
              title={note.title}
              content={note.content}
              date={note.createdAt}
              onView={() => handleViewNote(note)}
              onEdit={() => handleEditNote(note)}
              onDelete={() => handleDeleteNote(note._id)}
            />
          ))}
        </div>
      ) : (
        <div className="bg-gray-100 border border-gray-200 rounded-lg">
          <EmptyState />
        </div>
      )}
    </div>
  );
};

export default Home;

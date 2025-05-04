import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';
import Notes from '../components/Notes';

const Home = () => {
  const navigate = useNavigate();

  // Example notes - replace with your actual data and state management
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: 'Meeting Notes',
      content: 'Discuss project timeline and deliverables with the team',
      date: '2023-05-15',
      username: 'john'
    },
    {
      id: 2,
      title: 'Shopping List',
      content: 'Milk, eggs, bread, fruits, vegetables',
      date: '2023-05-20',
      username: 'sarah'
    },
    {
      id: 3,
      title: 'Project Ideas',
      content: 'Build a note taking app with React and Express',
      date: '2023-05-25',
      username: 'mike'
    }
  ]);

  // Handle editing a note
  const handleEdit = (id) => {
    // Navigate to edit page
    navigate(`/notes/${id}/edit`);
  };

  // Handle deleting a note
  const handleDelete = (id) => {
    // Show confirmation dialog
    if (window.confirm('Are you sure you want to delete this note?')) {
      // In a real app, you would make an API call here
      setNotes(notes.filter((note) => note.id !== id));
    }
  };

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

      {/* Notes Grid */}
      {notes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((note) => (
            <Notes
              key={note.id}
              id={note.id}
              title={note.title}
              content={note.content}
              date={note.date}
              username={note.username}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-400 mb-4">You don't have any notes yet</p>
          <Link
            to="/create-note"
            className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-4 rounded-md"
          >
            <Plus size={18} />
            Create your first note
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;

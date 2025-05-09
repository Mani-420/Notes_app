// In your Home.jsx
import React, { useEffect, useState } from 'react';
import NoteCard from '../../components/Cards/NoteCard';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';

const Home = () => {
  const [notes, setNotes] = useState([]);

  // Empty state component
  const EmptyState = () => (
    <div className="text-center py-16 px-4">
      <h2 className="text-xl font-semibold mb-2">No notes yet</h2>
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
      {notes.length == 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <NoteCard
            title={'Meeting Notes'}
            content={'Discuss project updates and next steps.'}
            onView={(note) => console.log('Viewing note:', note)}
            onEdit={(note) => console.log('Editing note:', note)}
            onDelete={(noteId) => console.log('Deleting note:', noteId)}
          />
        </div>
      ) : (
        <div className="bg-gray-800 border border-gray-700 rounded-lg">
          <EmptyState />
        </div>
      )}
    </div>
  );
};

export default Home;

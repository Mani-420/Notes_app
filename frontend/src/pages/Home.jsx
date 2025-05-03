import React from 'react';
import Notes from '../components/Notes';

const Home = () => {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
        <Notes />
      </div>
    </div>
  );
};

export default Home;

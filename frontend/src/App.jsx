// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import CreateNote from './pages/CreateNote';
import EditNote from './pages/EditNote';
import ProtectedRoute from './routes/ProtectedRoute';
import NoteDetails from './pages/NoteDetails';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Toaster position="top-right" />
        <Navbar />

        <div className="min-h-screen bg-gray-900 text-white py-6">
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Home />} />
              <Route path="/create-note" element={<CreateNote />} />
              <Route path="/notes/:id/edit" element={<EditNote />} />
              <Route path="/notes/:id" element={<NoteDetails />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

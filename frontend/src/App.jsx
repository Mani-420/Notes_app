import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import CreateNote from './pages/CreateNote';
import EditNote from './pages/EditNote';
import Navbar from './components/Navbar';
import { Toaster } from 'react-hot-toast';
import ProtectedRoutes from './routes/ProtectedRoutes';

function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster />
        <Navbar />
        <Routes>
          <Route path="/" element={<ProtectedRoutes />}>
            <Route index element={<Home />}></Route>
            <Route path="/create-note" element={<CreateNote />} />
            <Route path="/notes/:id/edit" element={<EditNote />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Login from './pages/Login/Login.jsx';
import Signup from './pages/Signup/Signup.jsx';
import Navbar from './components/Navbar.jsx';
import CreateNote from './pages/AddNotes/CreateNote.jsx';
import EditNote from './pages/EditNotes/EditNote.jsx';
import ViewNote from './pages/ViewNote/ViewNote.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/create-note" element={<CreateNote />} />
        <Route path="/notes/:id" element={<ViewNote />} />
        <Route path="/notes/edit/:id" element={<EditNote />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

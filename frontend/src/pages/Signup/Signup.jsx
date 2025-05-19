// Signup Page 

import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateEmail } from '../../utils/helper.js';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/userSlice/authSlice';
import { toast } from 'react-toastify';

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    if (!password || !username) {
      setError('Please enter all the fields');
      return;
    }

    setError('');
    setIsLoading(true);

    // signup api
    try {
      const response = await axios.post(
        'http://localhost:8080/api/users/register',
        {
          username,
          email,
          password
        },
        {
          withCredentials: true
        }
      );

      if (response.status === 201) {
        const userData =
          response.data.data?.user || response.data.userData || response.data;
        dispatch(login({ userData }));
        toast.success('Registration successful');
        navigate('/login');
      }
    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.message || 'Registration failed. Please try again.'
      );
      toast.error(
        err.response?.data?.message || 'Registration failed. Please try again.'
      );
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">Create Account</h2>
          <p className="text-gray-400 mt-1">Join Notes App today</p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="block text-sm mb-1">
              Username
            </label>
            <input
              id="username"
              name="username"
              value={username}
              placeholder="Enter your username"
              type="text"
              required
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 focus:border-cyan-600 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              placeholder="Enter your email"
              required
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 focus:border-cyan-600 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm mb-1">
              Password
            </label>
            <input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              placeholder="Enter your password"
              required
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 focus:border-cyan-600 focus:outline-none"
            />
            <div className="flex items-center mt-2">
              <input
                type="checkbox"
                id="showPassword"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
                className="mr-2"
              />
              <label htmlFor="showPassword" className="text-sm">
                Show Password
              </label>
            </div>
          </div>

          {error && <p className="text-red-500 text-sm pb-1">{error}</p>}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-cyan-600 py-2 px-4 rounded-md hover:bg-cyan-700 transition-colors mt-2"
          >
            {isLoading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-400">
          Already have an account?{' '}
          <Link to="/login" className="text-cyan-500 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;

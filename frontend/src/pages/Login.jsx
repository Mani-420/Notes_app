import { Link } from 'react-router-dom';
import { useState } from 'react';
import { post } from '../services/api.js';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await post('/api/v1/users/login', { email, password });

      if (response.data.success) {
        localStorage.setItem('token', response.data.token);
        toast.success('Logged in successfully');
        navigate('/');
      }
    } catch (err) {
      console.error('Login failed', err);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">Sign In</h2>
          <p className="text-gray-400 mt-1">Welcome back to Notes App</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={value.email}
              required
              onChange={handleChange}
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
              type="password"
              value={value.password}
              required
              onChange={handleChange}
              className="w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 focus:border-cyan-600 focus:outline-none"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-700 bg-gray-800 text-cyan-600 focus:ring-cyan-600"
              />
              <label htmlFor="remember-me" className="ml-2 block text-gray-400">
                Remember me
              </label>
            </div>
            <div className="text-right">
              <a href="#" className="text-cyan-500 hover:underline">
                Forgot password?
              </a>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-600 py-2 px-4 rounded-md hover:bg-cyan-700 transition-colors mt-2"
          >
            Sign In
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-400">
          Don't have an account?{' '}
          <Link to="/register" className="text-cyan-500 hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

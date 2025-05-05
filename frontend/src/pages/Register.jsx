import { Link } from 'react-router-dom';
import { useState } from 'react';
import { post } from '../services/api.js';
import toast from 'react-hot-toast';

const Register = () => {
  const [value, setValue] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log('Form submitted:', value);
    const request = await post('/v1/users/register', value);
    const response = request.data;
    if (response.success) {
      toast.success('User Registered Successfully');
    }
    // console.log('Response:', response);
    setValue({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
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
              value={value.username}
              plasceholder="Enter your username"
              type="text"
              required
              //   value={formData.username}
              onChange={handleChange}
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
              value={value.email}
              plasceholder="Enter your email"
              required
              //   value={formData.email}
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
              plasceholder="Enter your password"
              required
              //   value={formData.password}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 focus:border-cyan-600 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm mb-1">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              value={value.confirmPassword}
              plasceholder="Confirm your password"
              type="password"
              required
              //   value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 focus:border-cyan-600 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-600 py-2 px-4 rounded-md hover:bg-cyan-700 transition-colors mt-2"
          >
            Sign Up
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

export default Register;

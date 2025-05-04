import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">Create Account</h2>
          <p className="text-gray-400 mt-1">Join Notes App today</p>
        </div>

        <form className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm mb-1">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              required
              //   value={formData.username}
              //   onChange={handleChange}
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
              required
              //   value={formData.email}
              //   onChange={handleChange}
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
              required
              //   value={formData.password}
              //   onChange={handleChange}
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
              type="password"
              required
              //   value={formData.confirmPassword}
              //   onChange={handleChange}
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

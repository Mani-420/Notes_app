import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-screen">
    <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
    <p className="mb-6">Sorry, the page you are looking for does not exist.</p>
    <Link to="/" className="text-cyan-600 hover:underline">
      Go Home
    </Link>
  </div>
);

export default NotFound;

import { Link } from "react-router-dom";

export const Navigation = () => (
  <nav className="p-4 flex gap-4 bg-gray-200">
    <Link to="/" className="text-blue-500">Home</Link>
    <Link to="/about" className="text-blue-500">About</Link>
    <Link to="/test" className="text-blue-500">Test</Link>
  </nav>
);
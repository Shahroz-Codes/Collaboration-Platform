import { Link } from "react-router-dom";
import { useAuthStore } from "../store/auth.store.js";

export default function Navbar() {
  const { isAuthenticated, logout } = useAuthStore();

  return (
    <nav className="bg-black sticky text-white px-8 py-4 flex items-center justify-between shadow-md">
      {/* Logo */}
      <h1 className="text-2xl font-extrabold tracking-wide">Freelancer - Workspace</h1>

      {/* Links */}
      <div className="flex items-center space-x-8  font-medium">
        <Link to="/" className="hover:text-gray-300 transition-colors">Home</Link>
        <Link to="/projects" className="hover:text-gray-300 transition-colors">Projects</Link>
        <Link to="/dashboard" className="hover:text-gray-300 transition-colors">Dashboard</Link>

        {!isAuthenticated ? (
          <>
            <Link to="/login" className="hover:text-gray-300 transition-colors">Login</Link>
            <Link to="/signup" className="hover:text-gray-300 transition-colors">Signup</Link>
          </>
        ) : (
          <button
            onClick={logout}
            className="bg-white text-black px-4 py-1 rounded-md hover:bg-gray-200 transition-colors"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

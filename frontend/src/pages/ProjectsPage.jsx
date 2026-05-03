import { useEffect, useState } from "react";
import api from "../utils/api.js";
import {Link} from "react-router-dom";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  // Fetch projects on mount
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await api.get("/projects", { withCredentials: true });
        setProjects(res.data);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to load projects");
      }
    };
    fetchProjects();
  }, []);

  // Create new project
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post(
        "/projects",
        { title, description },
        { withCredentials: true }
      );
      setProjects([...projects, res.data.newProject]);
      setTitle("");
      setDescription("");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to create project");
    }
  };

  // Delete project
  const handleDelete = async (id) => {
    try {
      await api.delete(`/projects/${id}`, { withCredentials: true });
      setProjects(projects.filter((p) => p._id !== id));
    } catch (err) {
      setError(err.response?.data?.message || "Failed to delete project");
    }
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>

      {/* Create Project Form */}
      <form
        onSubmit={handleCreate}
        className="bg-white shadow-md rounded-lg p-6 mb-8"
      >
        <h2 className="text-xl font-semibold mb-4">Create New Project</h2>
        <input
          type="text"
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 mb-3 border rounded"
          required
        />
        <textarea
          placeholder="Project Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 mb-3 border rounded"
        />
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          Create Project
        </button>
      </form>

      {/* Projects List */}

      {/* Projects List */}
      <h1 className="text-3xl font-bold mb-6">All Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project._id}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-bold">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
            <div className="flex space-x-3 mt-4">
              <Link
                to={`/projects/${project._id}/tasks`}
                className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-700"
              >
                View Details
              </Link>
              <button
                onClick={() => handleDelete(project._id)}
                className="text-white bg-red-500 px-3 py-1 rounded hover:bg-red-700"
              >
                Delete Project
              </button>
            </div>
          </div>
        ))}
      </div>

      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
}

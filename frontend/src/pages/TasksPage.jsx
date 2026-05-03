import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../utils/api";

export default function TasksPage() {
  const { projectId } = useParams();
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  // Fetch tasks
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await api.get(`/projects/${projectId}/tasks`, { withCredentials: true });
        setTasks(res.data);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to load tasks");
      }
    };
    fetchTasks();
  }, [projectId]);

  // Create task
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post(
        `/projects/${projectId}/tasks`,
        { title, description },
        { withCredentials: true }
      );
      setTasks([...tasks, res.data]);
      setTitle("");
      setDescription("");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to create task");
    }
  };

  // Toggle complete
  const handleToggle = async (taskId, completed) => {
    try {
      const res = await api.patch(
        `/projects/${projectId}/tasks/${taskId}`,
        { completed: !completed },
        { withCredentials: true }
      );
      setTasks(tasks.map((t) => (t._id === taskId ? res.data : t)));
    } catch (err) {
      setError(err.response?.data?.message || "Failed to update task");
    }
  };

  // Delete task
  const handleDelete = async (taskId) => {
    try {
      await api.delete(`/projects/${projectId}/tasks/${taskId}`, { withCredentials: true });
      setTasks(tasks.filter((t) => t._id !== taskId));
    } catch (err) {
      setError(err.response?.data?.message || "Failed to delete task");
    }
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Tasks</h1>

      {/* Create Task Form */}
      <form onSubmit={handleCreate} className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Add New Task</h2>
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 mb-3 border rounded"
          required
        />
        <textarea
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 mb-3 border rounded"
        />
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          Create Task
        </button>
      </form>

      {/* Tasks List */}
      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task._id}
            className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center"
          >
            <div>
              <p className="font-medium">{task.title}</p>
              <p className="text-gray-500">{task.description}</p>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={() => handleToggle(task._id, task.completed)}
                className={`px-3 py-1 rounded ${
                  task.completed
                    ? "bg-green-500 text-white hover:bg-green-700"
                    : "bg-yellow-500 text-white hover:bg-yellow-700"
                }`}
              >
                {task.completed ? "Completed" : "Mark Complete"}
              </button>
              <button
                onClick={() => handleDelete(task._id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
}

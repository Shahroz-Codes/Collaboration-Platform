export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-1 text-center px-6">
        <h1 className="text-4xl font-bold mb-4">Project & Task Manager</h1>
        <p className="text-gray-600 max-w-xl mb-6">
          A full‑stack MVP built with Node.js, Express, JWT authentication, and React + Zustand frontend.
          Secure login, project creation, task tracking, and a clean dashboard — all in one place.
        </p>
        <div className="space-x-4">
          <button className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800">
            Explore Projects
          </button>
          <button className="px-6 py-2 bg-gray-200 text-black rounded hover:bg-gray-300">
            View Dashboard
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-12 bg-gray-100">
        <div className="p-6 bg-white rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Authentication</h2>
          <p className="text-gray-600">JWT in httpOnly cookies with protected routes.</p>
        </div>
        <div className="p-6 bg-white rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Projects</h2>
          <p className="text-gray-600">Create, list, and manage projects securely.</p>
        </div>
        <div className="p-6 bg-white rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Tasks</h2>
          <p className="text-gray-600">Attach tasks to projects, track progress, and stay organized.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-4">
        <p>&copy; 2026 Built by Shahroz Shafqat — MVP Complete</p>
      </footer>
    </div>
  );
}

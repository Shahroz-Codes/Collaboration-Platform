export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center">
      <h2 className="text-4xl font-bold mb-4">Welcome to Trekova</h2>
      <p className="text-gray-400 max-w-md">
        Manage projects and tasks with a clean, minimal interface.
      </p>
      <button className="mt-6 px-6 py-2 bg-white text-black rounded hover:bg-gray-200">
        Get Started
      </button>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          { label: "Projects", value: 5 },
          { label: "Tasks", value: 42 },
          { label: "Completed", value: 28 },
          { label: "Pending", value: 14 },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-white shadow-md rounded-lg p-6 text-center"
          >
            <p className="text-gray-500">{stat.label}</p>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Projects Overview */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Projects Overview</h2>
        <div className="space-y-4">
          <div>
            <p className="font-medium">Project Alpha</p>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div className="bg-black h-2 rounded-full w-3/4"></div>
            </div>
            <p className="text-sm text-gray-500 mt-1">75% complete</p>
          </div>
          <div>
            <p className="font-medium">Project Beta</p>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div className="bg-black h-2 rounded-full w-1/2"></div>
            </div>
            <p className="text-sm text-gray-500 mt-1">50% complete</p>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <ul className="divide-y divide-gray-200">
          <li className="py-2">✅ Completed Task “Fix Navbar”</li>
          <li className="py-2">📁 Created Project “Dashboard UI”</li>
          <li className="py-2">📝 Added Task “Integrate Auth”</li>
        </ul>
      </div>
    </div>
  );
}

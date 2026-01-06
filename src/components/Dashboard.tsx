export function Dashboard() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-gray-800"></h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-purple-100 p-4 rounded-xl shadow">
          <p className="text-gray-500">Total Waste Reports</p>
          <p className="text-3xl font-bold">1,248</p>
        </div>

        <div className="bg-purple-100 p-4 rounded-xl shadow">
          <p className="text-gray-500">Resolved Today</p>
          <p className="text-3xl font-bold text-green-600">312</p>
        </div>

        <div className="bg-purple-100 p-4 rounded-xl shadow">
          <p className="text-gray-500">Active Workers</p>
          <p className="text-3xl font-bold text-blue-600">27</p>
        </div>
      </div>
    </div>
  );
}
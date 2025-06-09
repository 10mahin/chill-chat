const TalksTab = () => (
  <div className="p-4">
    <h2 className="text-xl font-semibold mb-4">Talks</h2>
    <div className="space-y-4">
      <div className="flex items-center bg-white p-4 rounded shadow">
        <img src="https://via.placeholder.com/40" className="rounded-full w-10 h-10 mr-3" alt="Avatar" />
        <div className="flex-1">
          <div className="flex justify-between">
            <h3 className="font-semibold">Jane Doe</h3>
            <span className="text-sm text-gray-500">10:30 AM</span>
          </div>
          <p className="text-sm text-gray-600">Hey! How are you?</p>
        </div>
        <span className="ml-2 text-xs bg-blue-500 text-white rounded-full px-2">2</span>
      </div>
    </div>
  </div>
);
export default TalksTab;

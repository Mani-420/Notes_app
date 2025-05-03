import React from 'react';

const Notes = () => {
  return (
    <div className="max-w-md w-full bg-gray-800 text-white rounded-xl p-6 shadow-lg border border-gray-700">
      <div className="flex items-center space-x-4 mb-4">
        <img
          src="https://via.placeholder.com/60"
          alt="Profile"
          className="w-14 h-14 rounded-full border border-gray-600"
        />
        <div>
          <h3 className="text-lg font-bold">Nate Foss</h3>
          <p className="text-sm text-gray-400">@natefoss</p>
        </div>
      </div>

      <p className="text-gray-300 mb-6">
        <span className="font-semibold text-white">Nate Foss</span> has
        requested to join your team. You can approve or decline their request.
      </p>

      <div className="flex justify-end space-x-4">
        <button className="bg-red-700 hover:bg-red-800 text-white px-5 py-2 rounded-md font-medium transition">
          ❌ Decline
        </button>
        <button className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-md font-medium transition">
          ✅ Approve
        </button>
      </div>
    </div>
  );
};

export default Notes;

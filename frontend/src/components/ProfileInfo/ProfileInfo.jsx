import React from 'react';
import { getInitials } from '../../utils/helper.js';

const ProfileInfo = ({ onLogout, userData }) => {
  return (
    <div>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-100">
          {getInitials(userData?.name)}
        </div>

        <div>
          <p className="text-sm font-medium">{userData?.name}</p>
        </div>

        <button
          className="text-sm bg-red-500 p-1 rounded-md text-white hover:opacity-80"
          onClick={onLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileInfo;

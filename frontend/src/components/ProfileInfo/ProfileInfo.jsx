import React from 'react';
import { getInitials } from '../../utils/helper.js';

const ProfileInfo = ({ onLogout }) => {
  return (
    <div>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-100">
          {getInitials('Mithu Gambler')}
        </div>

        <div>
          <p className="text-sm font-medium">Username</p>
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

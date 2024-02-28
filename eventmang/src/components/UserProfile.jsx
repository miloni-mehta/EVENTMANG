import React from 'react';
import UserDashboard from './UserDashboard';

const UserProfile = () => {
  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      {/* Include UserDashboard component */}
      <UserDashboard />
    </div>
  );
}

export default UserProfile;

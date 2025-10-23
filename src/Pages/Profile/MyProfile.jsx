import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useNavigate } from 'react-router';

const MyProfile = () => {
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={user?.photoURL}
      alt={user?.displayName}
      className="rounded-full" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{user?.displayName}</h2>
    <p>{user?.email}</p>
    <div className="card-actions">
      <button onClick={() => navigate("/update-profile")} className="btn btn-primary">Update Profile</button>
    </div>
  </div>
</div>
    );
};

export default MyProfile;
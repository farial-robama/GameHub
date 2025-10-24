import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useNavigate } from 'react-router';

const MyProfile = () => {
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
    return (
        <div className="card bg-base-100 md:w-96 w-full shadow-sm my-20">
  <figure className="px-10 pt-8">
    <img
      src={user?.photoURL || "/default-profile.png"}
      alt={user?.displayName}
      className="rounded-full" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-[#7A85C1]">{user?.displayName || "User_Name"}</h2>
    <p className='text-[#7A85C1] font-semibold pb-3'>{user?.email || "User_Email"}</p>
    <div className="card-actions">
      <button onClick={() => navigate("/update-profile")} className="btn btn-active bg-linear-to-br from-[#7A85C1] to-[#9F62F2] text-white">Update Profile</button>
      <Link to="/"><button className='btn bg-linear-to-br from-[#7A85C1] to-[#9F62F2] text-white'>Go Home</button></Link>
    </div>
  </div>
</div>
    );
};

export default MyProfile;
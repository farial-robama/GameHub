import React, { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";

const UpdateProfile = () => {
  const { user, setUser, updateUser } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateUser({ displayName: name, photoURL });
      setUser({ ...user, displayName: name, photoURL });
      toast.success("Profile updated successfully!!");
      navigate("/my-profile");
    } catch (err) {
      toast.error("Failed to update profile!");
    }
  };
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleUpdate}>
          <fieldset className="fieldset">
            {/* Name */}
            <label className="label">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="input w-full mr-20"
              placeholder="Name"
              required
            />
            {/* PhotoURL */}
            <label value={photoURL} className="label">
              PhotoURL
            </label>
            <input
              onChange={(e) => setPhotoURL(e.target.value)}
              type="text"
              className="input w-full mr-20"
              placeholder="Photo URL"
              required
            />

            <button
              type="submit"
              className="btn btn-active bg-linear-to-br from-[#7A85C1] to-[#9F62F2] text-white mt-4"
            >
              Update Information
            </button>
            <p className="mt-3">
              Don't want to update?
              <Link
                to="/my-profile"
                className="text-[#954ef9] text-sm font-bold link link-hover pl-2"
              >
                My Profile
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;

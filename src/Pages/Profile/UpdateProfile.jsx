import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const UpdateProfile = () => {
    const {user, setUser, updateUser} = useContext(AuthContext)
        const [name, setName] = useState(user?.displayName || "")
        const[photoURL, setPhotoURL] = useState(user?.photoURL || "")
        const navigate = useNavigate()

 const handleUpdate = async(e) => {
         e.preventDefault();
         try{
        await updateUser({displayName: name,photoURL});
        setUser({...user, displayName: name,photoURL})
         toast.success("Profile updated successfully!!")
         navigate("/my-profile");
     }
     catch(err){
         toast.error("Failed to update profile!")
     }
 }
    return (
         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleUpdate}>
            <fieldset className="fieldset">
            {/* Name */}
          <label className="label">Name</label>
          <input value={name} onChange={e => setName(e.target.value)} type="text" className="input w-full mr-20" placeholder="Name" required/>
          {/* PhotoURL */}
          <label value={photoURL} className="label">PhotoURL</label>
          <input onChange={e => setPhotoURL(e.target.value)} type="text" className="input w-full mr-20" placeholder="Photo URL" required />
          
          <button type='submit' className="btn btn-neutral mt-4">Update Information</button>
        </fieldset>
        </form>
      </div>
    </div>
    );
};

export default UpdateProfile;
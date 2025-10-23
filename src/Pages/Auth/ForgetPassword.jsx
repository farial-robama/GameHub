import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { auth } from '../../Firebase/firebase.config';

const ForgetPassword = () => {
    const[email, setEmail] = useState("")
        const navigate = useNavigate()
        const location = useLocation()


        useEffect(() => {
            if (location.state?.email) {
                setEmail(location.state.email)
            }
        },[location.state])


    const handleResetPassword = async(e) => {
        e.preventDefaut()
            if (!email) {
                toast.error("Please enter your email first")
            }
            try{
            await sendPasswordResetEmail(auth,email);
            toast.success("Password reset email sent! Check your inbox")
        }
        catch(err){
            toast.error("Something went wrong! Try again");
        }
    }
    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <form onSubmit={handleResetPassword}>
                    <fieldset className="fieldset">
                        {/* Email */}
                  <label className="label">Email</label>
                  <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="input mr-10" placeholder="Email" />

                  <button className="btn btn-neutral mt-4">Reset Password</button>
                  </fieldset>
                  </form>
                  </div>
                  </div>
                
    );
};

export default ForgetPassword;
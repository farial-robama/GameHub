import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
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
                e.preventDefault();
                if (!email) {
                    toast.error("Please enter your email first.")
                }
            try{
                await sendPasswordResetEmail(auth,email);
                toast.success("Password reset email sent! Check your inbox.")

                setTimeout(() => {
            window.location.href="https://mail.google.com"
        }, 2000)
            }
            catch(err){
                toast.error("Something went wrong! Please try again.")
            }
        };

        
    return (
            <div className="card bg-[#bcd2b9] w-full max-w-sm shrink-0 shadow-2xl">
                  <div className="card-body">
                    <form onSubmit={handleResetPassword}>
                        <fieldset className="fieldset">
                            {/* Email */}
                      <label className="label">Email</label>
                      <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="input mr-10" placeholder="Email" required/>
                      <button className="btn bg-[#8772a4] text-white my-3">Reset Password</button>
                      </fieldset>
                     </form>
                     <p className='text-xs' >Remember the password?
            <Link to="/auth/login" className='text-[#954ef9] text-sm font-bold link link-hover pl-2'>Login</Link>
            </p>
                     </div>
            
        </div>
    );
};

export default ForgetPassword;
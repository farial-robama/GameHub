import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../Firebase/firebase.config';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    const {signin} = useContext(AuthContext)
        const[email, setEmail] = useState("")
        const[password, setPassword] = useState("")
        const[error, setError] = useState("")
        const[showPassword, setShowPassword] = useState(false)
        const navigate = useNavigate()
        const location = useLocation()

        // const from = location.state || "/"

        const handleSubmit = async(e) => {
        e.preventDefault();
        setError("");
        try{
        await signin(email, password);
        navigate(`${location.state ? location.state : "/"}`)
    }
    catch(err){
        setError(err.message);
    }
}

   const handleResetPassword = async(e) => {
        if (!email) {
            toast.error("Please enter your email first")
        }
        try{
        await sendPasswordResetEmail(auth,email);
        toast.success("Password reset email sent! Check your inbox")
    }
    catch(err){
        setError(err.message);
        toast.error("Something went wrong! Try again");
    }
}
    return (   
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
            <fieldset className="fieldset">
                {/* Email */}
          <label className="label">Email</label>
          <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="input" placeholder="Email" />
         
          {/* Password */}
                    <label className="label">Password</label>
                    <div className='relative'>
                      <input value={password} onChange={e => setPassword(e.target.value)} type={showPassword ? "text" : "password"} className="input w-full pr-20" placeholder="Password" required/>
                      <span onClick={() => setShowPassword(!showPassword)} className='absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer'>
                          {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                      </span>
                      </div>

          <div><button onClick={handleResetPassword} className="link link-hover text-red-600">Forgot password?</button></div>
          <button className="btn btn-neutral mt-4">Login</button>
          <div className='mt-2 text-xs'>
            <p >Don't have an account?
            <Link to="/auth/register" className='text-blue-600 link link-hover pl-2'>Register</Link>
            </p>
            </div>
        </fieldset>
        </form>
      </div>
    </div>

    );
};

export default Login;
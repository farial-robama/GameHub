import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    const {signIn} = useContext(AuthContext)
        const[email, setEmail] = useState("")
        const[password, setPassword] = useState("")
        const[error, setError] = useState("")
        const[showPassword, setShowPassword] = useState(false)
        const navigate = useNavigate()
        const location = useLocation()

        const handleSubmit = async(e) => {
        e.preventDefault();
        setError("");
        try{
        await signIn(email, password);
        toast.success("Logged in successfully!!")
        // navigate(`${location.state ? location.state : "/"}`)
            const from = location.state?.from?.pathname || "/";
        navigate(from, {replace: true});
    }
    catch(err){
        setError(err.message);
        toast.error("Invalid credentials or user not found!")
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

          <div><Link to="/auth/forget-password" state={{email}} className="link link-hover text-red-600">Forgot password?</Link></div>

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
import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext)
    const links =[
        {name: "Home", to: "/"},
        {name: "Games", to: "/games"},
        {name: "About", to: "/about"}
    ]

    const handleLogout = async () => {
        try {
            await logOut();
            toast.success("You logged out successfully!")
        } catch (err) {
            console.log("Logout failed:",err);          
        }
    }
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {
            links.map(link => (
                <NavLink
                key={link.to}
                to={link.to}
                className={({isActive}) =>
                isActive ? "bg-linear-to-br from-[#632FE9] to-[#9F62F0] text-white" : ""}>
                    {link.name}
                </NavLink>
            ))
        }
      </ul>
    </div>
    <div className='flex items-center'>
        <img className='w-13' src="/gamehub.png" alt="" />
    <a className="btn btn-ghost text-[#9F62F0] font-bold text-xl">GameHub</a>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
         {
            links.map(link => (
                <NavLink
                key={link.to}
                to={link.to}
                className={({isActive}) =>
                isActive ? "text-[#9F62F0] font-bold px-4" : "px-4 font-semibold"}>
                    {link.name}
                </NavLink>
            ))
        }
    </ul>
  </div>
  <div className="navbar-end flex gap-3.5">
    {
        user ? 
        <div className='flex items-center gap-3'>
            <Link to="/my-profile">
            <img src={user.photoURL} alt={user.displayName}
            className='w-10 h-10 rounded-full object-cover cursor-pointer' />
        </Link> 
        <button onClick={handleLogout} className="btn btn-error text-white">Logout</button>
        </div>
        : 
        <div className='flex gap-3.5'>
            <Link to="/auth/login" className="btn btn-active bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white mt-7">Login</Link>
    <Link to="/auth/register" className="btn btn-active bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white mt-7">Register</Link>
        </div>
    }
    
  </div>
</div>
    );
};

export default Navbar;

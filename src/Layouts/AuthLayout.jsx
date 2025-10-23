import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { ToastContainer } from 'react-toastify';

const AuthLayout = () => {
    return (
         <div className='flex flex-col bg-gray-200'>
            <nav>
                <Navbar></Navbar>
            </nav>
            <main className='flex items-center justify-center min-h-screen mx-auto'>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
            <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
        </div>
    );
};

export default AuthLayout;
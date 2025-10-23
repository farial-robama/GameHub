import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

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
        
        </div>
    );
};

export default AuthLayout;
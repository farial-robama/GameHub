import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import { ToastContainer } from 'react-toastify';

const HomeLayout = () => {
    
    return (
        <div className='flex flex-col min-h-screen bg-[#E7F2EF]'>
            <nav>
                <Navbar></Navbar>
            </nav>
            <main className='flex-grow px-4 md:px-10 py-10 mx-auto'>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;
import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';

const HomeLayout = () => {
    
    return (
        <div className='flex flex-col min-h-screen bg-gray-200'>
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
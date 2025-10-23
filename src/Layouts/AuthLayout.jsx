import React from 'react';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='min-h-screen bg-gray-200 flex items-center justify-center'>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;
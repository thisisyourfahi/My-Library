import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/shared/Navbar';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <div className='container mx-auto'>

            <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;
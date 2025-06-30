import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
      <div className='mt-16 md:mt-16'>
           <Outlet></Outlet>
      </div>

        </div>
    );
};

export default Layout;
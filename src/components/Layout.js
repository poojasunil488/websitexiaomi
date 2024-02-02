// Layout.js
import React from 'react';
import { Navbar } from './Navbar'; 
import { Footer } from './Footer'; 
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/loginregister';

  return (
    <div>
      {!isLoginPage && <Navbar />}
      {children}
      {!isLoginPage && <Footer />}
    </div>
  );
};

export default Layout;

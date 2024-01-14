import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import {Toaster} from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      
      <main style={{height:"80vh"}}>
      <Toaster />
        {children}</main>
      <Footer />
    </>
  );
};

export default Layout;

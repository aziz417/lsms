import React from "react";

import Header from '../components/Header/Header.js'
import Footer from '../components/Footer/Footer.js'
import Sidebar from '../components/Sidebar/Sidebar.js'

export default function Admin({ children }) {
 
    return (
        <>
            <Header />
            <Sidebar />
            {children}
            <Footer />
        </>
    );
}
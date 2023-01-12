import React from 'react';
import Header from "./header/Header";
import NavBar from "./navBar/NavBar";
import Footer from "./footer/Footer";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Header/>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default Layout;
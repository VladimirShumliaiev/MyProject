import React from "react";
import './App.css';
import {Route, Routes} from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/header/headerComponent/Home/Home";
import Blog from "./components/header/headerComponent/Blog/Blog";
import Test from "./components/header/headerComponent/Test/Test";
import AboutUs from "./components/header/headerComponent/AboutUs/AboutUs";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";


function App() {
    return (
        <div className="App">
            <Header/>
            <NavBar/>
            <Home/>
            <Footer/>
            <Routes>
                <Route>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'Blog'} element={<Blog/>}/>
                    <Route path={'AboutUs'} element={<AboutUs/>}/>
                    <Route path={'Test'} element={<Test/>}/>
                </Route>
            </Routes>
        </div>

    );
}

export default App;

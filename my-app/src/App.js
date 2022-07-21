import React from "react";
import './App.css';
import {Route, Routes} from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/Main/Home/Home";
import Blog from "./components/Main/Blog/Blog";
import Test from "./components/Main/Test/Test";
import AboutUs from "./components/Main/AboutUs/AboutUs";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";
import ReactLessons from "./components/navBar/NavBarComponents/ReactLessons/ReactLessons";
import ReactNews from "./components/navBar/NavBarComponents/ReactNews/ReactNews";
import ReactTests from "./components/navBar/NavBarComponents/ReactTests/ReactTests";


function App() {
    return (
        <div className="App">
            <Header/>
            <NavBar/>
            <Home/>
            <Footer />
            <Routes>
                <Route>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'Blog'} element={<Blog/>}/>
                    <Route path={'AboutUs'} element={<AboutUs/>}/>
                    <Route path={'Test'} element={<Test/>}/>
                    <Route path={'ReactLessons'} element={<ReactLessons />}/>
                    <Route path={'ReactNews'} element={<ReactNews />}/>
                    <Route path={'ReactTests'} element={<ReactTests/>}/>
                </Route>
            </Routes>
        </div>

    );
}

export default App;

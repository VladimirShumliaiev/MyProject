import React from "react";
import {useState} from "react";
import './App.css';
import {Route, Routes} from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/Main/Home/Home";
import Blog from "./components/Main/Blog/Blog";
import Test from "./components/Main/Test/Test";
import AboutUs from "./components/Main/AboutUs/AboutUs";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";
import TextereaButtonLessons from "./components/navBar/NavBarComponents/ReactLessons/Texterea-Button-Lessons/TextereaButtonLessons";
import ReactNews from "./components/navBar/NavBarComponents/ReactNews/ReactNews";
import ReactTests from "./components/navBar/NavBarComponents/ReactTests/ReactTests";


function App() {
    const [todo,setTodosa] = useState({});
    const [text,setText] = useState('')
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
                    <Route path={'TextereaButtonLessons'} element={<TextereaButtonLessons />}/>
                    <Route path={'ReactNews'} element={<ReactNews />}/>
                    <Route path={'ReactTests'} element={<ReactTests/>}/>
                </Route>
            </Routes>
        </div>

    );
}

export default App;

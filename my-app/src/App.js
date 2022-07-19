import React from "react";
import './App.css';
import {Route,Routes} from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/Home/Home";
import Blog from "./components/Blog/Blog";
import Test from "./components/Test/Test";
import AboutUs from "./components/AboutUs/AboutUs";







function App() {
    return (
        <>
            <header className="App">
                 <Header />
            </header>
            <Routes>
              <Route>
                  <Route path={'/'} element={<Home/>}/>
                  <Route path={'Blog'} element={<Blog/>}/>
                  <Route path={'AboutUs'} element={<AboutUs/>}/>
                  <Route path={'Test'} element={<Test/>}/>
              </Route>
            </Routes>
        </>

    );
}

export default App;

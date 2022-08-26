import React from "react";
import './App.css';
import Header from "./components/header/Header";
import Home from "./components/header/HeaderComponents/Home/Home";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer"
import RoutingsHeader from "./components/header/HeaderComponents/RoutingsHeader/RoutingsHeader";
import RoutingsMain from "./components/Main/MainComponents/Routings Main/RoutingsMain";
import RouterReactLessons
    from "./components/Main/MainComponents/React Lessons/React Lessons Components/Routings React Lessons/RouterReactLessons";



function App() {
    return (
        <div className="App">
            <Header/>
            <NavBar/>
            <Home/>
            <Footer />
            <RoutingsHeader />
            <RoutingsMain />
            <RouterReactLessons />
        </div>

    );
}

export default App;

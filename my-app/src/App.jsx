import React from "react";
import './App.css';
import Header from "./components/header/Header";
import Home from "./components/header/HeaderComponents/Home/Home";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer"
import RoutingsCell from "./components/RoutingsCell";


function App() {
    return (
        <div className="App">
            <Header/>
            <NavBar/>
            <Home/>
            <Footer/>
            <RoutingsCell/>
        </div>

    );
}

export default App;

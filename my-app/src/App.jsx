import React from "react";
import './App.css';
import Header from "./components/header/Header";
import Home from "./components/header/HeaderComponents/Home/Home";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer"
import RoutingCell from "./components/RoutingCell";



function App() {
    return (
        <div className="App">
            <Header/>
            <NavBar/>
            <Home/>
            <Footer/>
            <RoutingCell/>
        </div>

    );
}

export default App;

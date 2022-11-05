import React from "react";
import './App.css';
import Header from "./components/header/Header";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer"
import RoutingCell from "./components/RoutingCell";


function App() {
    return (
        <div className="App">
            <Header/>
            <NavBar/>
            <Footer/>
            <RoutingCell/>
        </div>

    );
}

export default App;

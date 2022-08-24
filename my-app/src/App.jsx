import React from "react";
import './App.css';
import Header from "./components/header/Header";
import Home from "./components/header/HeaderComponnents/Home/Home";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer"
import RoutingsHeader from "./components/Routings/RoutingsHeader/RoutingsHeader";
import RoutingsNavBar from "./components/Routings/RoutingsNavBar/RoutingsNavBar";



function App() {
    return (
        <div className="App">
            <Header/>
            <NavBar/>
            <Home/>
            <Footer />
            <RoutingsHeader />
            <RoutingsNavBar />
        </div>

    );
}

export default App;

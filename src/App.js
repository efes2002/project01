import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";

function App() {
    return (
        <div className="app">
            <div className="back"></div>
            <Header/>
            <Nav/>
            <Profile/>
        </div>
    );
}

export default App;

import React from 'react';
import './App.css';
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs"
import { BrowserRouter as Router, Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";






function App() {
    return (
        <Router>
            <div className="app">
                <div className="back"></div>
                <Header/>
                <Nav/>
                <div className="app_content">
                    <Route path="/Profile" component={Profile} />
                    <Route path="/Dialogs" component={Dialogs} />
                    <Route path="/News" component={News} />
                    <Route path="/Music" component={Music} />
                    <Route path="/Settings" component={Settings} />
                </div>
            </div>
        </Router>

    );
}

export default App;

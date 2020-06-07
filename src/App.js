import React from 'react';
import './App.css';
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Route from "react-router-dom/es/Route";


function App() {
    return (
        <div className="app">
            <div className="back"></div>
            <Header/>
            <Nav/>
            <div className="app_content">
                <Route path="/Profile" render={() => <Profile/>}/>
                <Route path="/Dialogs" render={() => <DialogsContainer/>}/>
                <Route path="/Users" render={() => <UsersContainer/>}/>
                <Route path="/News" render={() => <News/>}/>
                <Route path="/Music" render={() => <Music/>}/>
                <Route path="/Settings" render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;

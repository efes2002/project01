import React from 'react';
import './App.css';
import Nav from "./components/Nav/Nav";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import {Route} from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";


function App() {
    return (
        <div className="app">
            <div className="back"></div>
            <HeaderContainer/>
            <Nav/>
            <div className="app_content">
                <Route path="/Profile/:userId?" render={() => <ProfileContainer/>}/>
                <Route path="/Dialogs" render={() => <DialogsContainer/>}/>
                <Route path="/Users" render={() => <UsersContainer/>}/>
                <Route path="/News" render={() => <News/>}/>
                <Route path="/Music" render={() => <Music/>}/>
                <Route path="/Settings" render={() => <Settings/>}/>
                <Route path="/login" render={() => <Login/>}/>
            </div>
        </div>
    );
}

export default App;

import React from 'react';
import './App.css';
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import {BrowserRouter as Router, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App(props) {
    return (
        <Router>
            <div className="app">
                <div className="back"></div>
                <Header/>
                <Nav/>
                <div className="app_content">
                    <Route path="/Profile" render={() => <Profile
                        store={props.store}
                    />}/>

                    <Route path="/Dialogs" render={() => <DialogsContainer
                        store={props.store}
                    />}/>
                    <Route path="/News" render={() => <News/>}/>
                    <Route path="/Music" render={() => <Music/>}/>
                    <Route path="/Settings" render={() => <Settings/>}/>

                </div>
            </div>
        </Router>
    );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="app">
            <div className="back"></div>
            <header className="app-header">


            </header>
            <nav className="app-nav">
                <ol>
                    <li>
                        <a href="/">
                            <span className="left_icon f1"></span>
                            <span className="left_label">Профиль</span>
                        </a>


                    </li>
                    <li>
                        <span className="left_icon f2"></span>
                        <span className="left_label">Сообщения</span>
                    </li>
                </ol>
            </nav>
            <div className="app-content">
                body
            </div>

        </div>
    );
}

export default App;

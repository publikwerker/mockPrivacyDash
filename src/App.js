import React, { Component } from 'react';
import './App.css';
import ErrorModal from './components/ErrorModal';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Header from './components/Header.js';

class App extends Component{
    render() {
        return(
            <Router>
                <div className="App">
                    <Header />
                    <h1>Hello Earth!!
                    </h1>
                    <ErrorModal />
                </div>
            </Router>
        );
    }
}

export default App;
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Footer from './Footer';
import Navbar from './Navbar';
import Routes from '../main/Routes';

export default class App extends Component{
    render(){
        return(
            <Router>
                <div>
                    <Navbar />
                    <Routes />
                    <Footer />
                </div>
            </Router>
        );
    }
}
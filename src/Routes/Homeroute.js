import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router'

import Home from '../components/Home/Home'
import About from '../components/About/About'
import NotFound from '../components/NotFound/NotFound'

const Homeroute = () => {
	return (
		<Router history={hashHistory}>
            <Route path="/" component={Home} />
            <Route path="about" component={About} />
            <Route path='*' component={NotFound} />
         </Router>
	);
}

export default Homeroute;
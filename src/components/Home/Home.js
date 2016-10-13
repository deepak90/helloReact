import React, { Component } from 'react';
import './Home.css'

import Liveedit from '../Liveedit/Liveedit';
import Votewidget from '../Votewidget/Votewidget';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Home extends React.Component {

	constructor() {
		super();
	}

  
    render() {
        return  <div className="home">
	        		<h2 >Deepak's Homepage</h2>
	        		<Liveedit />
	        		<MuiThemeProvider>
	        			<Votewidget />
	        		</MuiThemeProvider>
        		</div>
    }
}

export default Home;


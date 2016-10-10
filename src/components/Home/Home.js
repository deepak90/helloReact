import React, { Component } from 'react';
import './Home.css';


class Home extends React.Component {

	constructor() {
		super();
		this.processInput = this.processInput.bind(this);

		this.state = {
			val : '',
		}

	}
   
    processInput(e) {
    	e.preventDefault();
    	this.setState({val: this.test.value});
    }

    render() {
        return  <div className="home">
	        		<h2>Deepak's Homepage</h2>
	        		<div className="well">
						<input  onKeyUp= {this.processInput} type="text" placeholder = "helloReact"  ref = {(elementAsArg) => {this.test = elementAsArg}}  />
	        		</div>
					<div className="well">{this.state.val}</div>
        		</div>
    }
}

export default Home;


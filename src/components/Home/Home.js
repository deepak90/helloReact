import React, { Component } from 'react';
import './Home.css';


class Home extends React.Component {

	constructor() {
		super();
		this.processInput = this.processInput.bind(this);
	}
   
    processInput(e) {
    	e.preventDefault();
    	console.log(this.test.value);
    }

    render() {
        return  <div className="home">
	        		<h2>Deepak's Homepage</h2>
	        		<div className="well">
	        			<form onSubmit= {this.processInput}>
	        				<input type="text" placeholder = "helloReact"  ref = {(elementAsArg) => {this.test = elementAsArg}}  />
	        				<button>Submit</button>
	        			</form>
	        		</div>
	        		<div className="well"></div>
        		</div>
    }
}

export default Home;


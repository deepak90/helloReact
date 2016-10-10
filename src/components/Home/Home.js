import React, { Component } from 'react';
import './Home.css'

class Home extends React.Component {

	constructor() {
		super();
		this.processInput = this.processInput.bind(this);

		this.state = {
			val: '',
		};

	}
   
    processInput(e) {
    	e.preventDefault();
    	this.setState({
    		val : this.test.value
    	});
    }

    render() {
        return  <div className="home">
	        		<h2 >Deepak's Homepage</h2>
	        		<div className="well">
	        			<h2 className="text-primary">Live editing with state example</h2>
	        			<div className="well ">
        					<textarea rows="1" cols="50" placeholder = "type something here" onKeyUp = {this.processInput} ref = {(input) => {this.test = input}}  ></textarea>
	        			</div>
	        			<div className="well "><h5><p>See it here</p></h5> <p className="fonta">{this.state.val}</p> </div>
	        			<div className="well "><h5><p>and here</p></h5> <p className="fontb">{this.state.val}</p> </div>
	        			<div className="well "><h5><p>and here</p></h5> <p className="fontc">{this.state.val}</p> </div>
	        		</div>
        		</div>
    }
}

export default Home;


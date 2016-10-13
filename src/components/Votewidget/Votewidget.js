import React from 'react';
import Firebase from '../../Firebase/Firebase';
import './Votewidget.css'

import FloatingActionButton from 'material-ui/FloatingActionButton';


class Votewidget extends React.Component {
    constructor() {
        super();
       	this.updateVote = this.updateVote.bind(this);

       	this.state = {
			kudos: '',
		};

    }

    componentDidMount() {
		this.ref = Firebase.syncState('votes',{
			context: this,
			state: 'kudos',
			
		});
	}

	componentWillUnmount(){
		Firebase.removeBinding(this.ref);
	}

	 updateVote(direction) {
	    	this.setState({
	    		kudos: this.state.kudos + (direction === 'up' ? 1 : -1)
	    	})
	    }

    render() {
        return <div className="well">
	        			<h2 className="text-primary">Firebase Example</h2>
	        			<div className="counter">
	        				<FloatingActionButton
	        					label = "downvote"
	        					className = "downvote"
	        					onClick={() => this.updateVote('down')}/>
	        				
	        				<span className="count">{this.state.kudos}</span>
	        				<button
	        					className = "btn btn-primary upvote"
	        					onClick={() => this.updateVote('up')}

	        				>upvote</button>
	        			</div>
	        		</div>
    }
}

export default Votewidget;

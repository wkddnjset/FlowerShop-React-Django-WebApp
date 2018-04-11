import React, { Component } from 'react';

class CartList extends Component {
	constructor(props) {
	  super();
	  this.state = {
	  	examples:[]
	  };
	}

	componentDidMount() {
		fetch('/api/list/?format=json')
			.then(res => res.json())
			.then(examples => this.setState({examples}, () => console.log('Examples fetched..', examples)));
	}
  render() {
    return (
      <div>
        <h1>WelCome!</h1>
        <p>Start Your WebApp Project More Easier</p>
        <ul>
        	{this.state.examples.map((example,index) => 
        		<li key={index}>
                <img className="image" src={example.img} alt="{example.id}"/>
                <p>{example.text}</p>
        		</li>
        	)}
        </ul>

      </div>
    );
  }
}

export default CartList;
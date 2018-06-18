import React, { Component } from 'react';

class CartList extends Component {
	constructor(props) {
	  super();
	  this.state = {
	  	examples:[]
	  };
	}

	// componentDidMount() {
	// 	fetch('/api/list/?format=json')
	// 		.then(res => res.json())
	// 		.then(examples => this.setState({examples}, () => console.log('Examples fetched..', examples)));
	// }
  render() {
    return (
      <div>
      </div>
    );
  }
}

export default CartList;
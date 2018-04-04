import React, { Component } from 'react';
// import logo from './logo.svg';
import './customers.css';

class Customers extends Component {
	constructor(props) {
	  super();
	  this.state = {
	  	customers:[]
	  };
	}

	componentDidMount() {
		fetch('/api/customers')
			.then(res => res.json())
			.then(customers => this.setState({customers}, () => console.log('Customers fetched..', customers)));
	}
  render() {
    return (
      <div>
        <h2>Naver</h2>
        <ul>
        	{this.state.customers.map(customer => 
        		<li key={customer.id}>
        			<a href={customer.link}>
        				{customer.text}
        			</a>
        		</li>
        	)}
        </ul>
      </div>
    );
  }
}

export default Customers;

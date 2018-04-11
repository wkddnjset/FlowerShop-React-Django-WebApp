import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import './Cart.css'
import CartList from './CartList'
/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */

const CartPage = ({history}) => {

    return (
        <div className="cart_page">
            Cart
            <CartList/>
            <RaisedButton 
            	className="cart_buy_btn"
            	label="구매하기" 
            	primary={true} 
            	fullWidth={true} 
            	onClick={() => history.push("/")}
            />
        </div>
    );
};

export default CartPage;
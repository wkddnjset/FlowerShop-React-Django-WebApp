import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import './Cart.css'
import CartList from './CartList'
/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
 const styles = {
    marginTop:'60%'
};

class CartPage extends React.Component {

    constructor(props) {
            super(props);
            this.data = this.props.location.state;
            this.history = this.props.history;
            console.log(this.data);
        }


    render() {
        if(this.data!==undefined){
            return (
                <div className="cart_page">
                    <CartList/>
                    <RaisedButton 
                        className="cart_buy_btn"
                        label="구매하기" 
                        primary={true} 
                        fullWidth={true} 
                        onClick={() => this.history.push("/")}
                    />
                </div>
            );
        }
        else{
            return (
                <div className="cart_page">
                    <h1 style={styles}>로그인이 필요합니다!</h1>
                    <RaisedButton 
                        className="cart_buy_btn"
                        label="로그인하기" 
                        primary={true} 
                        fullWidth={true} 
                        onClick={() => this.history.push("/signin")}
                    />
                </div>
            );
        }
        
    };
}

export default CartPage;
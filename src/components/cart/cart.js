import react, {Component} from'react'

import classes from './cart.module.css'
import Header from '../header/header'
import CartItem from '../cartItem/cartItem';

class Cart extends Component{
    constructor(props){
        super(props);
        this.state=null;
        console.log(props)
        this.cart=props.products
        this.remove=props.remove
        this.cartItems=props.cartItems;
    }

    render(){
        return(
            <div>
            <Header cartItems={this.cartItems}/>
           
            <div className={classes.baner}>
            Cart
            </div>
            <div className={classes.arrangeBox}> {
        this.cart.Cart.map((product) => {
          
                return <CartItem key={product.id} product={product} remove={this.remove} />
            


        })

    }</div>
            </div>

        )
    }
}

export default Cart;
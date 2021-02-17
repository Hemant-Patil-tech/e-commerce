import react, {Component} from'react'

import classes from './cart.module.css'
import Header from '../header/header'

class Cart extends Component{
    constructor(props){
        super(props);
        this.state=null;
    }

    render(){
        return(
            <div>
            <Header/>
           
            <div className={classes.baner}>
            Cart
            </div>
            </div>

        )
    }
}

export default Cart;
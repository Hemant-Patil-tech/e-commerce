import react, { Component } from 'react'
import { NavLink, Route, withRouter } from 'react-router-dom'
import classes from './dashboard.module.css'
import Header from '../header/header';
import Electronics from '../electronics/electronics';
import HomeAppliances from '../homeappliances/homeappliances'
import {connect} from 'react-redux'
import Login from '../login/login';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        // console.log(props)
        if(localStorage.getItem('isLoggedIn')=='false'){
            props.history.replace('/login')
        }
        if (props.history.location.pathname == "/products") {
            props.history.replace('/products/electronics')
        }
        this.products = props.products.products;
        this.handleClick = props.handleClick;
        this.cartItems = props.cartItems;
    }

   
    render() {


        return (
            <div>
                <Header cartItems={this.cartItems} />
                <div className={classes.baner}>
                    Products
            </div>
                <div className={classes.childHeader}>
                    <NavLink to='/products/electronics' style={{ textDecoration: 'none' }} className={classes.header} > Electronics </NavLink>
                    <NavLink to='/products/homeappliances' style={{ textDecoration: 'none' }} className={classes.header}>Home Appliances</NavLink>
                </div>
               <Route path='/products/electronics' component={() => <Electronics products={this.products} handleClick={this.handleClick} />} >
              </Route>
                <Route path='/products/homeappliances' component={() => <HomeAppliances products={this.products} handleClick={this.handleClick} />}></Route>

            </div>

        )
    }
}

export default  withRouter(Dashboard);
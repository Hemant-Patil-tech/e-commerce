import react, { Component } from 'react'

import classes from './dashboard.module.css'
import Header from '../header/header';
import Product from '../product/product';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.products = props.products.products;
        this.handleClick = props.handleClick
    }

    render() {


        return (
            <div>
                <Header />
                <div className={classes.baner}>
                    Products
            </div>
                <h2 className={classes.left}>Electronics</h2>
                <div className={classes.arrangeBox}> {
                    this.products.map((product) => {
                        if (product.category == "Electronics") {
                            return <Product key={product.id} product={product} handleClick={this.handleClick} />
                        }


                    })

                }</div>
                <h2 className={classes.left}>Home Appliances</h2>

                <div className={classes.arrangeBox}> {
                    this.products.map((product) => {
                        if (product.category == "Home Appliance") {
                            return <Product key={product.id} product={product} handleClick={this.handleClick} />
                        }
                    })

                }</div>

            </div>

        )
    }
}

export default Dashboard;
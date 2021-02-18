
import './App.css';
import Login from './components/login/login'
import React, { Suspense } from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
const Dashboard = React.lazy(() => import('./components/dashboard/dashboard'));
const Cart = React.lazy(() => import('./components/cart/cart'));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [{
        id: 0,
        itemName: 'Galaxy s20',
        price: '$200',
        description: 'very nice device',
        stock: 20,
        category: 'Electronics'

      },
      {
        id: 1,
        itemName: 'iphone 12pro',
        price: '$200',
        description: 'very nice device',
        stock: 20,
        category: 'Electronics'

      },
      {
        id: 2,
        itemName: 'Galaxy s10',
        price: '$200',
        description: 'very nice device',
        stock: 20,
        category: 'Electronics'

      },
      {
        id: 3,
        itemName: 'BlackBerry',
        price: '$200',
        description: 'very nice device',
        stock: 20,
        category: 'Electronics'

      },
      {
        id: 4,
        itemName: 'Nokia',
        price: '$200',
        description: 'very nice device',
        stock: 20,
        category: 'Electronics'
      },
      {
        id: 5,
        itemName: 'LG Fridge',
        price: '$200',
        description: 'very nice appliance',
        stock: 20,
        category: 'Home Appliance'
      },
      {
        id: 6,
        itemName: 'Washing Machine',
        price: '$200',
        description: 'very nice appliance',
        stock: 20,
        category: 'Home Appliance'
      },
      {
        id: 7,
        itemName: 'Air Conditioner',
        price: '$200',
        description: 'very nice appliance',
        stock: 20,
        category: 'Home Appliance'
      },
      {
        id: 8,
        itemName: 'Geyser',
        price: '$200',
        description: 'very nice appliance',
        stock: 20,
        category: 'Home Appliance'
      },
      {
        id: 9,
        itemName: 'Gas Stove',
        price: '$200',
        description: 'very nice appliance',
        stock: 20,
        category: 'Home Appliance'
      }], Cart: [], CartItems: 0
    }
  }
  render() {

    const addToCart = (index) => {

      let tempState = this.state;
      tempState.CartItems = this.state.CartItems + 1
      console.log('cartItem', tempState)
      console.log(tempState.products[index], tempState.Cart[index])
      debugger;
      if (tempState.Cart.length > 0) {
        let count = 0;
        tempState.Cart.forEach((cartItem, i) => {

          if (cartItem.itemName == tempState.products[index].itemName && count == 0) {
            tempState.Cart[i].quantity = (cartItem.quantity) + 1;
            count++
          }

        }

        )
        if (count == 0) {
          tempState.Cart.push({
            id: index,
            itemName: tempState.products[index].itemName,
            price: tempState.products[index].price,
            description: tempState.products[index].description,
            quantity: 1,
            category: tempState.products[index].category
          })
          count++
        }



      } else {
        tempState.Cart.push({
          id: index,
          itemName: tempState.products[index].itemName,
          price: tempState.products[index].price,
          description: tempState.products[index].description,
          quantity: 1,
          category: tempState.products[index].category
        })
      }
      console.log(tempState.products[index].stock)
      tempState.products[index].stock = (this.state.products[index].stock) - 1

      this.setState({ ...tempState })
      tempState = {}
      console.log(this.state)
    }

    const removeFromCart = (index) => {
      let tempState = this.state;
      let cartIndex;
      tempState.CartItems = this.state.CartItems - 1
      tempState.Cart.forEach((cartItem, i) => {
        if (cartItem.id == index) {
          cartIndex = i;
        }
      })
      if (tempState.Cart[cartIndex].quantity == 1) {
        tempState.products[index].stock = 20;
        tempState.Cart.splice(cartIndex, 1);
      } else {
        tempState.products[index].stock = this.state.products[index].stock + 1;
        tempState.Cart[cartIndex].quantity = this.state.Cart[cartIndex].quantity - 1
      }
      this.setState({ ...tempState })
      tempState = {}
      console.log(this.state)
    }
    return (
      <BrowserRouter>
        <div className="App">

          <div className="page-info">
            <Switch>
              <Route path='/login' component={Login}></Route>
              <Suspense fallback={<div>Loading...</div>}>
                <Route path='/products' component={() => <Dashboard products={this.state} cartItems={this.state.CartItems} handleClick={addToCart} />}>

                </Route>
                <Route path='/cart' component={() => <Cart products={this.state} cartItems={this.state.CartItems} remove={removeFromCart} />}></Route>
              </Suspense>
              <Route component={Login} />
            </Switch>


          </div>

        </div>
      </BrowserRouter>
    );
  }
}



export default App;

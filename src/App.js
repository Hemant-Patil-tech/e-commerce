
import './App.css';
import Login from './components/login/login'
import React, { Suspense } from 'react'
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
const Dashboard = React.lazy(() => import('./components/dashboard/dashboard'));
const Cart = React.lazy(() => import('./components/cart/cart'));

class App extends React.Component {
  constructor(props) {
    super(props); 
    console.log('props from app.js', props)
   
  }


  componentDidMount(){
    console.log('didmount called from app.js', this.props)
    this.props.getInitialState();
}
  render() {

    const addToCart = (index) => {

      let tempState = this.props.state;
      tempState.CartItems = this.props.state.CartItems + 1
      console.log('cartItem', tempState)
      console.log(tempState.products[index], tempState.Cart[index])
      
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
      tempState.products[index].stock = (this.props.state.products[index].stock) - 1

      this.setState({ ...tempState })
      tempState = {}
      console.log(this.props.state)
    }

    const removeFromCart = (index) => {
      let tempState = this.props.state;
      let cartIndex;
      tempState.CartItems = this.props.state.CartItems - 1
      tempState.Cart.forEach((cartItem, i) => {
        if (cartItem.id == index) {
          cartIndex = i;
        }
      })
      if (tempState.Cart[cartIndex].quantity == 1) {
        tempState.products[index].stock = 20;
        tempState.Cart.splice(cartIndex, 1);
      } else {
        tempState.products[index].stock = this.props.state.products[index].stock + 1;
        tempState.Cart[cartIndex].quantity = this.props.state.Cart[cartIndex].quantity - 1
      }
      this.setState({ ...tempState })
      tempState = {}
      console.log(this.props.state)
    }
    return (
      <BrowserRouter>
        <div className="App">

          <div className="page-info">
            <Switch>
            <Redirect from='/' exact to='/login' />

              <Route path='/login' component={Login}></Route>
              <Suspense fallback={<div>Loading...</div>}>
          { this.props.state ?   <Route path='/products' component={() => <Dashboard products={this.props.state} cartItems={this.props.state.CartItems} handleClick={addToCart} />}>

                </Route> :null}
                { this.props.state ?     <Route path='/cart' component={() => <Cart products={this.props.state} cartItems={this.props.state.CartItems} remove={removeFromCart} />}>
                </Route> :null}
              </Suspense>

            </Switch>
           

          </div>

        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state)=>{
  console.log(state)
  return {
      
    state:state
  }
}

const mapDispatchToProps = (dispatch)=>{
 return {getInitialState: () => dispatch({type:'GET_INITIAL_STATE'})}
}

export default connect(mapStateToProps,mapDispatchToProps)(App);

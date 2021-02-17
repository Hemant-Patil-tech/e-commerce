
import './App.css';
import Login from './components/login/login'
import React,{Suspense} from 'react'
import {Route, BrowserRouter, Switch, Redirect} from'react-router-dom'
const Dashboard = React.lazy(() => import('./components/dashboard/dashboard'));
const Cart = React.lazy(() => import('./components/cart/cart'));

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={products:[{
      id:1,
      itemName:'Galaxy s20',
      price:'$200',
      description:'very nice device',
      stock:20,
      category:'Electronics'

    },
    {
      id:2,
      itemName:'iphone 12pro',
      price:'$200',
      description:'very nice device',
      stock:20,
      category:'Electronics'

    },
    {
      id:3,
      itemName:'Galaxy s10',
      price:'$200',
      description:'very nice device',
      stock:20,
      category:'Electronics'

    },
    {
      id:4,
      itemName:'BlackBerry',
      price:'$200',
      description:'very nice device',
      stock:20,
      category:'Electronics'

    },
    {
      id:5,
      itemName:'Nokia',
      price:'$200',
      description:'very nice device',
      stock:20,
      category:'Electronics'
    },
    {
      id:6,
      itemName:'LG Fridge',
      price:'$200',
      description:'very nice appliance',
      stock:20,
      category:'Home Appliance'
    },
    {
      id:7,
      itemName:'Washing Machine',
      price:'$200',
      description:'very nice appliance',
      stock:20,
      category:'Home Appliance'
    },
    {
      id:8,
      itemName:'Air Conditioner',
      price:'$200',
      description:'very nice appliance',
      stock:20,
      category:'Home Appliance'
    },
    {
      id:9,
      itemName:'Geyser',
      price:'$200',
      description:'very nice appliance',
      stock:20,
      category:'Home Appliance'
    },
    {
      id:10,
      itemName:'Gas Stove',
      price:'$200',
      description:'very nice appliance',
      stock:20,
      category:'Home Appliance'
    }],Cart:[]}
  }
render(){
  const  addToCart=(id)=>{
    console.log('add to cart', id)
    let tempState=this.state;
    console.log(tempState.products[id].quantity)
    tempState.Cart.push({
      id:id,
      itemName:tempState.products[id].itemName,
      price:tempState.products[id].price,
      description:tempState.products[id].description,
      quantity:tempState.products[id].quantity,
      category:tempState.products[id].category
    })

    this.setState({tempState})
    console.log(tempState)
  }
  return (
    <BrowserRouter>
    <div className="App">
  
              <div className="page-info">
              <Switch>
                <Route path='/login'  component={Login}></Route>
                <Suspense fallback={<div>Loading...</div>}>
                <Route path='/products'  component={()=><Dashboard products={this.state} handleClick={addToCart}/>}></Route>
                <Route path='/cart' component={Cart}></Route>
                </Suspense>
              </Switch>
  
                <Redirect to='/login' />
                </div>
  
            </div>
            </BrowserRouter>
    );
  }
}



export default App;

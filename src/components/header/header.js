
import { NavLink } from 'react-router-dom'
import './header.css'

const Header = (props) => {
  console.log(props.cartItems)
  const cartItems = props.cartItems

  return (
    <nav
      className="navbar"
      role="navigation"
      aria-label="main navigation"
    >
      <div >
        <b className="navbar-item ">ecommerce</b>
      </div>
      <div >
        <NavLink to='/products' style={{ textDecoration: 'none' }} className="navbar-item">
          Products
                </NavLink >

        <NavLink to='/cart' style={{ textDecoration: 'none' }} className="navbar-item">
          Cart
                  <span
            className="tag is-primary"
            style={{ marginLeft: "5px", backgroundColor: '#00d3b2', padding: '10px', color: 'white' }}
          > {cartItems}
          </span >
        </NavLink >
        <NavLink to='/login' style={{ textDecoration: 'none' }} className="navbar-item">
          Logout
                </NavLink >
      </div>
    </nav>

  )

}

export default Header;
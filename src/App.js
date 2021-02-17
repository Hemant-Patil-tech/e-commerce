
import './App.css';
import {Login} from './components/login/login'
function App() {
  return (
  
  <div className="App">
          <nav
            className="navbar container"
            role="navigation"
            aria-label="main navigation"
          >
            <div className="navbar-brand">
              <b className="navbar-item is-size-4 ">ecommerce</b>
            </div>
              <div className="header-span">
                <span  className="navbar-item">
                  Products
                </span>

                <span  className="navbar-item">
                  Cart
                  <span
                    className="tag is-primary"
                    style={{ marginLeft: "5px" }}
                  >
                  </span>
                </span>
                
                  <span  className="navbar-item">
                    Login
                  </span>
              </div>
            </nav>
            <div className="page-info">
           < Login/>
              </div>

          </div>
  );
}

export default App;

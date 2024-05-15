import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
<>
<header className="header">
       
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="header__logo">
                <h2>Agri-Business</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <nav className="header__menu">
                <ul>
                  <li className="active">
                    <Link to="/">Home</Link>
                  </li>
                 
                  <li>
                    <Link to="/cart">Cart</Link>
                    
                  </li>
                  <li>
                  <Link to="/orders">Orders</Link>
                  </li>
                  <li>
                  <Link to="/login">Login</Link>
                  </li>
                 
                </ul>
              </nav>
            </div>
          </div>
          <div className="humberger__open">
            <i className="fa fa-bars"></i>
          </div>
        </div>
      </header>
</>
  )
}

export default Header
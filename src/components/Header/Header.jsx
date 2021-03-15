import React from 'react';
import Logo from './res/logo.PNG';
import Cart from './res/Cart.png';
import oneView from './res/One View.png';
import SSL from './res/SSL Secured.png';
import MyAccount from './res/My Account.png';
import 'bootstrap/dist/css/bootstrap.css';
import './Header.css';

function Header() {
  return (
    <div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-2 ">
            <a href="#" class="logo">
              <img src={Logo} alt="logo" class="img-fluid" />
            </a>
          </div>
          <div class="col-md-2 "></div>
          <div class="col-md-3 ">
            {/* <!-- Actual search box --> */}
            <div class="form-group has-search">
              <span class="fa fa-search form-control-feedback"></span>
              <input type="text" class="form-control" placeholder="Search" />
            </div>
          </div>
          <div class="col-md-5">
            <div class="logo_menu">
              <ul>
                <li>
                  <a href="#">
                    <img src={oneView} alt="MegaMenu" />
                    Mega Menu
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={SSL} alt="ssl" style={{ width: 80 }} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={Cart} alt="cart" />
                    Cart
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={MyAccount} alt="MyAccount" />
                    My Account
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

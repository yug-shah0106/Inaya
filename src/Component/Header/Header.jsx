import React from 'react';
import logo from './logo.jpeg';

import { Navbar, Nav, NavDropdown, form } from 'react-bootstrap';


// The Header creates links that can be used to navigate
// between routes.

const Header = function() {

    return (
        <Navbar collapseOnSelect expand="lg" bg="white">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/"><img src={logo} alt="gift for me" className="m-r-lg m-l-lg logo"/></Nav.Link>
          <Nav.Link href="/" className="m-r-lg m-l-lg"><b>Home</b></Nav.Link>
          <Nav.Link href="#" className="m-r-lg m-l-lg hidden-md-up ">Shop</Nav.Link>
          <NavDropdown title="Shop" id="collasible-nav-dropdown" className="hidden-sm-down">
            {/*<NavDropdown.Item href="/productlisting">Action</NavDropdown.Item>
            <NavDropdown.Divider />*/}
            <div className="navbar-custom-container">
                <div className="dropdown-column dropdown-column-featured-product">
                  <a className="dropdown-featured-product" href="/productListing/saree" title="title" style={{backgroundImage:"image"}}>
                      <img src="" alt="" Nav/>

                    <div className="dropdown-product-overlay"></div>

                    <div className="dropdown-badge">
                        <span className="dropdown-badge-subheading">Now in stock</span>
                      <span className="dropdown-badge-heading">Bridal Accessories</span>
                    </div>
                  </a>
                </div>

            <div className="dropdown-column dropdown-column-products">
              <ul className="dropdown-column-category">
                <li className="dropdown-column-header has-children">
                  <a href="/productlisting/suits">Suits</a>
                    <ul>
                      <li className="dropdown-link-list-item submenu-item ">
                        <a href="/productListing/saree">Sarees</a>
                      </li>

                      <li className="dropdown-link-list-item submenu-item ">
                        <a href="/productListing/lehenga">Lehengas</a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <ul className="dropdown-column-category">
                  <li className="dropdown-column-header has-children">
                    <a href="/productListing/kurtis">Kurtis</a>
                    <ul>
                      <li className="dropdown-link-list-item submenu-item ">
                        <a href="/productListing/dupatta">Dupatta</a>
                      </li>
                      <li className="dropdown-link-list-item submenu-item ">
                        <a href="/productListing/tshirt">T-Shirts</a>
                      </li>
                      <li className="dropdown-link-list-item submenu-item ">
                        <a href="/productListing/shirts">Shirts</a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <ul className="dropdown-column-category">
                  <li className="dropdown-column-header has-children">
                    <a href="/productListing/saree">New Releases</a>
                      <ul>
                        <li className="dropdown-link-list-item submenu-item ">
                          <a href="/productListing/bridals">Bridals</a>
                        </li>
                        <li className="dropdown-link-list-item submenu-item ">
                          <a href="/productListing/tailormade">Tailormade</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="dropdown-column-category">
                    <li className="dropdown-column-header ">
                      <a href="/productListing/accessories">Accessories</a>
                    </li>
                  </ul>
                  <ul className="dropdown-column-category">
                    <li className="dropdown-column-header has-children">
                      <a href="/productListing/saree">Collections</a>
                        <ul>
                        </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </NavDropdown>
          <Nav.Link href="#" className="m-r-lg m-l-lg">Jewellery</Nav.Link>
          <Nav.Link href="#" className="m-r-lg m-l-lg">lehengas</Nav.Link>
          <Nav.Link href="#" className="m-r-lg m-l-lg">Kurtis</Nav.Link>
          <Nav.Link href="#" className="m-r-lg m-l-lg">Men</Nav.Link>
        </Nav>
        <form class="form-inline my-2 my-lg-0">
          <input className="form-control light-grey-bg" placeholder="search" />
            <Nav.Link href="/cart" className="">
              <i className="fa fa-shopping-cart"></i>
            </Nav.Link>
        </form>
      </Navbar.Collapse>
    </Navbar>
    )
}

export default Header

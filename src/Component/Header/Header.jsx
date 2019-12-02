import React from 'react';
import { Link } from 'react-router-dom';

import { Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';


// The Header creates links that can be used to navigate
// between routes.

const Header = function() {

    return (
        <Navbar collapseOnSelect expand="lg" bg="white">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#" className="hidden-md-up ">Shop</Nav.Link>

          <NavDropdown title="Shop" id="collasible-nav-dropdown" className="hidden-sm-down">
            {/*<NavDropdown.Item href="/productlisting">Action</NavDropdown.Item>
            <NavDropdown.Divider />*/}
            <div className="navbar-custom-container">
                <div class="dropdown-column dropdown-column-featured-product">
                  <a class="dropdown-featured-product" href="#" title="Protein Shaker - White/Red" style={{backgroundImage:"url(https://via.placeholder.com/150)"}}>
                      <img src="" alt=""Nav/>

                    <div class="dropdown-product-overlay"></div>

                    <div class="dropdown-badge">
                        <span class="dropdown-badge-subheading">Now in stock</span>
                      <span class="dropdown-badge-heading">Bridal Accessories</span>
                    </div>
                  </a>
                </div>

            <div class="dropdown-column dropdown-column-products">
              <ul class="dropdown-column-category">
                <li class="dropdown-column-header has-children">
                  <a href="/productlisting">Suits</a>
                    <ul>
                      <li class="dropdown-link-list-item submenu-item ">
                        <a href="#">Sarees</a>
                      </li>
                                
                      <li class="dropdown-link-list-item submenu-item ">
                        <a href="">Lehengas</a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <ul class="dropdown-column-category">
                  <li class="dropdown-column-header has-children">
                    <a href="#">Tops</a>
                    <ul>    
                      <li class="dropdown-link-list-item submenu-item ">
                        <a href="#">Hoodies</a>
                      </li>
                      <li class="dropdown-link-list-item submenu-item ">
                        <a href="#">T-Shirts</a>
                      </li>
                      <li class="dropdown-link-list-item submenu-item ">
                        <a href="#">Shirts</a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <ul class="dropdown-column-category">
                  <li class="dropdown-column-header has-children">
                    <a href="#">New Releases</a>
                      <ul>          
                        <li class="dropdown-link-list-item submenu-item ">
                          <a href="#">Bridals</a>
                        </li>
                        <li class="dropdown-link-list-item submenu-item ">
                          <a href="#">Tailormade</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul class="dropdown-column-category">            
                    <li class="dropdown-column-header ">
                      <a href="#">Accessories</a>
                    </li>
                  </ul>
                  <ul class="dropdown-column-category">            
                    <li class="dropdown-column-header has-children">
                      <a href="#">Collections</a>
                        <ul>
      
                        </ul>
                    </li>
                  </ul>
                </div>
              </div>
          </NavDropdown>
          <Nav.Link href="#">Blog</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    )
}

export default Header
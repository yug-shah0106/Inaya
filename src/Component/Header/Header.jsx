import React from 'react';
import { Link } from 'react-router-dom';

// The Header creates links that can be used to navigate
// between routes.

const Header = function() {

  return(
    <div className="navbar-custom">
      <div className="dropdown-custom">
          <button className="dropbtn-custom">Sarees</button>
          <div className="dropdown-content-custom">
            <div className="row-custom">
              <div className="column-custom">
                <h3>Roots</h3>
                <a href="/productListing">Mysore Silk</a>
                <a href="/productListing">Chanderi Silk</a>
                <a href="/productListing">Kota Silk</a>
              </div>
              <div className="column-custom">
                <h3>Fabric</h3>
                <a href="/productListing">Georgette</a>
                <a href="#">Net</a>
                <a href="#">Cotton</a>
                <a href="#">Georgette</a>
                <a href="#">Net</a>
                <a href="#">Cotton</a>
                <a href="#">Georgette</a>
                <a href="#">Net</a>
                <a href="#">Cotton</a>
              </div>
              <div className="column-custom">
                <h3>Occasion</h3>
                <a href="#">Party</a>
                <a href="#">Wedding</a>
                <a href="#">Festive</a>
              </div>
              <div className="column-custom">
                  <h3>Fabric</h3>
                  <a href="/productListing">Georgette</a>
                  <a href="#">Net</a>
                  <a href="#">Cotton</a>
              </div>
              <div className="column-custom">
                  <h3>Fabric</h3>
                  <a href="#">Georgette</a>
                  <a href="#">Net</a>
                  <a href="#">Cotton</a>
                </div>
            </div>
          </div>
      </div>
      <div className="dropdown-custom">
              <button className="dropbtn-custom"  href="/productListing">Sarees</button>
              <div className="dropdown-content-custom">
                <div className="row-custom">
                  <div className="column-custom">
                    <h3>Roots</h3>
                    <a href="#">Mysore Silk</a>
                    <a href="#">Chanderi Silk</a>
                    <a href="#">Kota Silk</a>
                  </div>
                  <div className="column-custom">
                    <h3>Fabric</h3>
                    <a href="/productListing">Georgette</a>
                    <a href="#">Net</a>
                    <a href="#">Cotton</a>
                    <a href="/productListing">Georgette</a>
                    <a href="#">Net</a>
                    <a href="#">Cotton</a>
                    <a href="#">Georgette</a>
                    <a href="#">Net</a>
                    <a href="#">Cotton</a>
                  </div>
                  <div className="column-custom">
                    <h3>Occasion</h3>
                    <a href="#">Party</a>
                    <a href="#">Wedding</a>
                    <a href="#">Festive</a>
                  </div>
                  <div className="column-custom">
                      <h3>Fabric</h3>
                      <a href="/productListing">Georgette</a>
                      <a href="#">Net</a>
                      <a href="#">Cotton</a>
                  </div>
                  <div className="column-custom">
                      <h3>Fabric</h3>
                      <a href="#">Georgette</a>
                      <a href="#">Net</a>
                      <a href="#">Cotton</a>
                    </div>
                </div>
              </div>
          </div>
          <div className="dropdown-custom">
                  <button className="dropbtn-custom">Sarees</button>
                  <div className="dropdown-content-custom">
                    <div className="row-custom">
                      <div className="column-custom">
                        <h3>Roots</h3>
                        <a href="#">Mysore Silk</a>
                        <a href="#">Chanderi Silk</a>
                        <a href="#">Kota Silk</a>
                      </div>
                      <div className="column-custom">
                        <h3>Fabric</h3>
                        <a href="/productListing">Georgette</a>
                        <a href="#">Net</a>
                        <a href="#">Cotton</a>
                        <a href="#">Georgette</a>
                        <a href="#">Net</a>
                        <a href="#">Cotton</a>
                        <a href="#">Georgette</a>
                        <a href="#">Net</a>
                        <a href="#">Cotton</a>
                      </div>
                      <div className="column-custom">
                        <h3>Occasion</h3>
                        <a href="#">Party</a>
                        <a href="#">Wedding</a>
                        <a href="#">Festive</a>
                      </div>
                      <div className="column-custom">
                          <h3>Fabric</h3>
                          <a href="/productListing">Georgette</a>
                          <a href="#">Net</a>
                          <a href="#">Cotton</a>
                      </div>
                      <div className="column-custom">
                          <h3>Fabric</h3>
                          <a href="/productListing">Georgette</a>
                          <a href="#">Net</a>
                          <a href="#">Cotton</a>
                        </div>
                    </div>
                  </div>
              </div>
      <div className="dropdown-custom">
          <button className="dropbtn-custom">Lehengas</button>
          <div className="dropdown-content-custom">
            <div className="row-custom">
              <div className="column-custom">
                <h3>Roots</h3>
                <a href="#">Mysore Silk</a>
                <a href="#">Chanderi Silk</a>
                <a href="#">Kota Silk</a>
              </div>
              <div className="column-custom">
                <h3>Fabric</h3>
                <a href="#">Georgette</a>
                <a href="#">Net</a>
                <a href="#">Cotton</a>
              </div>
              <div className="column-custom">
                <h3>Occasion</h3>
                <a href="#">Party</a>
                <a href="#">Wedding</a>
                <a href="#">Festive</a>
              </div>
            </div>
          </div>
        </div>
      </div>)
}

export default Header

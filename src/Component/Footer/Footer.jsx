import React from 'react';
import { Link } from 'react-router-dom';

// The Header creates links that can be used to navigate
// between routes.

const Footer = function() {

  return (<div className="footer">
    <div className="footer_container">
        <div className="row">
            <div className="col">
                <h3>Occasion</h3>
                <ul>
                <li><a href="#">Party</a></li>
                <li><a href="#">Wedding</a></li>
                <li><a href="#">Festive</a></li>
                </ul>
            </div>
            <div className="col">
                <h3>Occasion</h3>
                <li><a href="#">Party</a></li>
                <li><a href="#">Wedding</a></li>
                <li><a href="#">Festive</a></li>
            </div>
            <div className="col">
                <h3>Occasion</h3>
                <li><a href="#">Party</a></li>
                <li><a href="#">Wedding</a></li>
                <li><a href="#">Festive</a></li>
            </div>
        </div>
    </div>
</div>)
}

export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';

// The Header creates links that can be used to navigate
// between routes.

const Footer = function() {


  return (<div className="footer">
    <div className="footer_container">
        <div className="row">
            <div className="column">
                <h3>Occasion</h3>
                <a href="#">Party</a>
                <a href="#">Wedding</a>
                <a href="#">Festive</a>
                <a href="#">Party</a>
                <a href="#">Wedding</a>
                <a href="#">Festive</a>
            </div>
            <div className="column">
                <h3>Occasion</h3>
                <a href="#">Party</a>
                <a href="#">Wedding</a>
                <a href="#">Festive</a>
            </div>
            <div className="column">
                <h3>Occasion</h3>
                <a href="#">Party</a>
                <a href="#">Wedding</a>
                <a href="#">Festive</a>
                <a href="#">Party</a>
                <a href="#">Wedding</a>
                <a href="#">Festive</a>
            </div>
        </div>
    </div>
</div>)
}

export default Footer;

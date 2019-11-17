import React from 'react';
import { Link } from 'react-router-dom';

// The Header creates links that can be used to navigate
// between routes.

const Header = function() {

  return(<nav>
				<div className="navWide">
					<div className="wideDiv">
						<a href="#">Link 1</a>
						<a href="#">Link 2</a>
						<a href="#">Link 3</a>
					</div>
				</div>
				<div className="navNarrow">
					<i className="fa fa-bars fa-2x" onClick={()=>{}}></i>
					<div className="narrowLinks">
						<a href="#" onClick={()=>{}}>Link 1</a>
						<a href="#" onClick={()=>{}}>Link 2</a>
						<a href="#" onClick={()=>{}}>Link 3</a>
					</div>
				</div>
			</nav>)
}

export default Header

import React from 'react';
import logo from './logo.jpeg';
import axios from 'axios';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';


// The Header creates links that can be used to navigate
// between routes.

const navbarHeader = [{label:"Saree Fabric",name:"saree_fabric"},
{label:"Pattern",name:"print_or_pattern_type"},
{label:"Blouse Color",name:"blouse_color"},
{label:"Blouse Fabric",name:"blouse_fabric"},
{label:"Saree Color",name:"saree_color"}];

const headers = [{label:"Saree",name:"saree"},
{label:"Jewellery",name:"jewellery"}];

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }

async componentDidMount(){
  await navbarHeader.map(async(o)=>{
try{
  let res = await axios.get('/api/products/sarees/getOptions',{
      params:{
        column:o.name
    }
  });
  this.state[o.name] = res.data;
  this.setState(this.state);
  this.forceUpdate();
}
catch(err){
  console.log(err);
}
});
}

render(){
    return (
    <Navbar collapseOnSelect expand="lg" bg="white">
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/"><img src={logo} alt="gift for me" className="m-r-lg m-l-lg logo"/></Nav.Link>
        <Nav.Link href="/" className="m-r-lg m-l-lg"><b>Home</b></Nav.Link>
        {
        headers.map((header)=>{
        return(<>
          <Nav.Link href="#" className="m-r-lg m-l-lg hidden-md-up ">{header.label}</Nav.Link>
          <NavDropdown title={header.label} id="collasible-nav-dropdown" className="hidden-sm-down">
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
              {
                navbarHeader.map((o)=>{
                  return(<ul key={o.label} className="dropdown-column-category">
                    <li className="dropdown-column-header has-children">
                      <a href="/productlisting/suits">{o.label}</a>
                        <ul>
                          {this.state && this.state.saree_fabric && this.state.saree_fabric.map((types)=>{
                            return(<li key={types.name} className="dropdown-link-list-item submenu-item ">
                              <a href="/productListing/saree">{types.name}</a>
                            </li>)
                          })}
                        </ul>
                      </li>
                    </ul>);
                })
            }
            </div>
            </div>
            </NavDropdown>
          </>)
        })
      }
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
    }
    }

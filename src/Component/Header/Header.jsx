import React from 'react';
import logo from './logo.jpeg';
import axios from 'axios';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';


// The Header creates links that can be used to navigate
// between routes.

const headers = [{label:"Saree",name:"saree",url:'/api/products/sarees/getOptions',category:[
  {label:"Saree Type",name:"type"},
{label:"Ocassion",name:"ocassion"},
{label:"Ornamentation",name:"ornamentation"},
{label:"Saree Fabric",name:"saree_fabric"}]}  ,
{label:"Jewellery",name:"jewellery",url:'/api/products/jewellery/getOptions',category:[
  {label:"Jewellery Type",name:"type"},
{label:"ocassion",name:"ocassion"},
{label:"Base Metal",name:"base_metal"},
{label:"Trends",name:"trends"}]}];

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }

async componentDidMount(){
  await headers.map(async(header)=>{
    await header.category.map(async(o)=>{
  try{
    let res = await axios.get(header.url,{
        params:{
          column:o.name
      }
    });
    this.state[o.label] = res.data;
    this.setState(this.state);
    this.forceUpdate();
  }
  catch(err){
    console.log(err);
  }
  });
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
                header.category.map((o)=>{
                  return(<ul key={o.label} className="dropdown-column-category">
                    <li className="dropdown-column-header has-children">
                      <a href="/productlisting/suits">{o.label}</a>
                        <ul>
                          {this.state[o.label] ?
                             this.state[o.label ].map((types)=>{
                            return(<li key={types[o.name]} className="dropdown-link-list-item submenu-item ">
                              <a href="/productListing/saree">{types[o.name]}</a>
                            </li>)
                          }) : null
                        }
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

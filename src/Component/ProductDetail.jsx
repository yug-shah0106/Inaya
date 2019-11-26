import React from 'react';
import axios from 'axios';

export default class ProductDetail extends React.Component {
constructor(props){
  super(props);
  this.state = {
      name:"",
      value:""
  }
}

componentWillMount(){
  axios.get(`/product/${this.props.match.params.id}`).then((res)=>{
    this.state.data = res.data;
  });
}

render(){
return(
  <div className="row">
              <div className="col-md-5">
                  <div className="row">
                      <div className="col-md-2 product-details-thumb" >
                          <ul>
                              <li>
                                  <img className="listing-page-side-image" src="https://img6.craftsvilla.com/image/upload/w_166,h_166/C/V/CV-36556-MCRAF87186243790-1568818874-Craftsvilla_5.jpg"/>
                              </li>
                              <li>
                                  <img className="listing-page-side-image" src="https://img6.craftsvilla.com/image/upload/w_166,h_166/C/V/CV-36556-MCRAF87186243790-1568818874-Craftsvilla_5.jpg"/>
                              </li>
                              <li>
                                  <img className="listing-page-side-image" src="https://img6.craftsvilla.com/image/upload/w_166,h_166/C/V/CV-36556-MCRAF87186243790-1568818874-Craftsvilla_5.jpg"/>
                              </li>
                              <li>
                                  <img className="listing-page-side-image" src="https://img6.craftsvilla.com/image/upload/w_166,h_166/C/V/CV-36556-MCRAF87186243790-1568818874-Craftsvilla_5.jpg"/>
                              </li>
                          </ul>
                      </div>
                      <div className="col-md-10">
                          <div className = "col-md-12">
                                  <img className="listing-page-main-image" src="https://img6.craftsvilla.com/image/upload/w_166,h_166/C/V/CV-36556-MCRAF87186243790-1568818874-Craftsvilla_5.jpg"/>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-md-7">
                  <div className="row">
                      <div className="col-md-12">
                          <h1 className="product-heading">
                              Nazaakat - Powder Pink Embroidered Festive Kurta With Contrast Flared Sleeves
                          </h1>
                      </div>
                      <div className= "col-md-12">
                          <label className="product-field">MRP:</label><span className="product-field-value">₹2999</span>
                      </div>
                      <div className= "col-md-12">
                              <label className="product-field">Offer price:</label><span className="product-field-value">₹2999</span>
                      </div>
                      <div className= "col-md-12">
                              <label className="product-field">Details</label>
                          <ul className="product-field-value" >
                                  <li>Long KurtiFabric</li>
                                  <li>MuslinColor</li>
                                  <li>PinkPattern</li>
                                  <li>Hand Embroidered</li>
                              </ul>
                      </div>
                      <div className= "col-md-12">
                              <label className="product-field">Size</label><a className="size-button">L</a>
                      </div>
                      <div className= "col-md-12">
                          <button className="btn-custom">Add to cart</button>
                          <button className="btn-custom">BUY NOW</button>
                      </div>
                      <div className="col-md-12">
                          100% Buyer Protection, 7 Days Easy Return policy
                      </div>
                      <div className="col-md-12">
                          <span className="red-span">Best Offer</span>
                      </div>
                      <div className="col-md-12">
                          <span className="red-span">Delivery</span>
                      </div>
                      <div className="col-md-12">
                          80% of shipments are delivered within 5 days <br/>
                          Available for Cash on Delivery <br/>
                          Free shipping in India
                      </div>
                  </div>
              </div>
          </div>)
}

}

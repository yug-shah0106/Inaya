import React from 'react';
import axios from 'axios';
import unsplash from './unsplash.jpg';


export default class ProductDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            value: ""
        }
    }

    componentWillMount() {
        axios.get(`/product/${this.props.match.params.id}`).then((res) => {
            this.state.data = res.data;
        });
    }

    render() {
        return (
            <div className="container-fluid">
              <div className="row mb-5 mt-5">
                <div className="col-md-5">
                  <div className="product-details-container">
                    <div className="product-details-thumb" >
                        <ul>
                            <li className="active">
                                <a><img className="listing-page-side-image" src={unsplash} /></a>
                            </li>
                            <li>
                                <a><img className="listing-page-side-image" src={unsplash} /></a>
                            </li>
                            <li>
                                <a><img className="listing-page-side-image" src={unsplash} /></a>
                            </li>
                            
                        </ul>
                    </div>
                    <div className="product-details-image">
                      <div className="">
                        <img src={unsplash}/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-7">
                    <div className="row mb-2">
                        <div className="col-md-12">
                            <h1 className="product-heading">
                                Nazaakat - Powder Pink Embroidered Festive Kurta With Contrast Flared Sleeves
                            </h1>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-12">
                          <table className="table noborder condensed product-cost-table">
                            <tbody>
                              <tr>
                                <td>M.R.P:</td>
                                <td><div class="strikethrough">₹2999</div></td>
                              </tr>
                              <tr>
                                <td> Price:</td>
                                <td><b className="text-primary">₹2000</b></td>
                              </tr>
                              <tr>
                                <td>You Save:</td>
                                <td><small className="text-primary">₹999(33%)</small>
                                <small className="ml-1">Inclusive of all taxes</small></td>
                              </tr>
                            </tbody>
                          </table>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className= "col-md-2">
                          <label className="product-field"><small><b><a className="underline pointer">+View Size Chart</a></b></small></label>
                          <div>
                            <input className="form-control" placeholder="size" />
                          </div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className= "col-md-12">
                          <label className="product-field"><span className="uppercase">Selected Color:</span> <b className="text-primary">Lemon Yellow</b></label>
                          <div class="colour-selector">
                            <i className="fa fa-square fa-fw fa-2x active" style={{color:"#EBE6C8"}}></i>
                            <i className="fa fa-square fa-fw fa-2x" style={{color:"#3DDBD0"}}></i>
                            <i className="fa fa-square fa-fw fa-2x" style={{color:"#D26576"}}></i>
                            <i className="fa fa-square fa-fw fa-2x" style={{color:"#000000"}}></i>
                          </div>
                      </div>
                    </div>
                    <div className="row mb-4">
                      <div className= "col-md-2">
                          <label className="product-field"><span className="uppercase">Quantity:</span></label>
                          <div>
                            <input className="form-control" placeholder="1" type="number" />
                          </div>
                      </div>
                    </div>
                    <div className="row m-b-3">
                      <div className= "col-md-12">
                        <button className="btn btn-primary mr-2">Add to cart</button>
                        <button className="btn btn-primary ml-2">Buy Now</button>
                        <label className="product-field ml-5"><small><b><a className="underline pointer">+Add to Wishlist</a></b></small></label>
                      </div>
                    </div>

                    <div className="row mt-3">
                      <div className= "col-md-12">
                          <label className="product-field"><span className="uppercase">Details:</span></label>
                          <div>
                            <p>
                              Long KurtiFabric, MuslinColor , PinkPattern ,Hand Embroidered
                            </p>
                            <p>
                              <span className="red-span mt-1 mb-2">Best Offer</span>
                              <br />
                              <br />
                              100% Buyer Protection, 7 Days Easy Return policy
                              <br />
                              80% of shipments are delivered within 5 days 
                              <br/>
                              Available for Cash on Delivery 
                              <br/>
                              Free shipping in India
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>)
      }

}
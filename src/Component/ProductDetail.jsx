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

    componentWillMount(){

      axios({
  method: 'get',
  url: "/api/products/details",
  params:{filters:{id:1}}
      }).then((res)=>{
        this.state.data = res.data;
        this.state.size = 'XL';
        console.log(res);
      },(err)=>{
        console.log(err)
      })
    }

    addInCart = () =>{
      let data = this.state.data;
      data.size = this.state.size;
       localStorage.setItem('cartItems', data);

       axios({
   method: 'post',
   url: "/api/cart/add",
   data
 }).then((res)=>{
        this.setState({
          addedSuccess:true
        })
      },(err)=>{
        this.setState({
          addedSuccess:false
        });
      })
    }

    render() {
        return (
            <div className="container-fluid">
              <div className="row mb-5 mt-5">
                <div className="col-md-5">
                  <div className="product-details-container sticky">
                    <div className="product-details-thumb" >
                        <ul>
                            <li className="arrow mb-2">
                              <a><i className="fa fa-chevron-up fa-fw"></i></a>
                            </li>
                            <li className="active">
                                <a><img className="listing-page-side-image" src={unsplash} /></a>
                            </li>
                            <li>
                                <a><img className="listing-page-side-image" src={unsplash} /></a>
                            </li>
                            <li>
                                <a><img className="listing-page-side-image" src={unsplash} /></a>
                            </li>
                            <li>
                                <a><img className="listing-page-side-image" src={unsplash} /></a>
                            </li>
                            <li className="arrow mt-2">
                              <a><i className="fa fa-chevron-down fa-fw"></i></a>
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
                    <div className="details-wrapper">
                      <div className="row mb-2">
                          <div className="col-md-8">
                              <h1 className="product-heading">
                                  Nazaakat - Powder Pink Embroidered Festive Kurta With Contrast Flared Sleeves
                              </h1>
                              <hr />
                          </div>
                      </div>
                      <div className="row mb-3">
                          <div className="col-md-8">
                            <table className="table noborder condensed product-cost-table">
                              <tbody>
                                <tr>
                                  <td><div class="strikethrough text-grey"><small>₹2999</small></div></td>
                                </tr>
                                <tr>
                                  <td><b className="pricing">₹2000</b><span className="label-primary text-left ml-1">50% off</span></td>
                                </tr>
                              </tbody>
                            </table>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className= "col-md-8">
                            <div><label class="product-field mb-1"><span class="">Select Size</span></label></div>
                            <div className="size-error">Please select a size</div>
                            <div className="size-buttons">
                              <a className="btn btn-default btn-sm active">S</a>
                              <a className="btn btn-default btn-sm  ml-2">M</a>
                              <a className="btn btn-default btn-sm  ml-2">L</a>
                              <a className="btn btn-default btn-sm  ml-2">XL</a>
                              <a className="btn btn-default btn-sm  ml-2">XXL</a>
                            </div>
                            <label className="product-field text-primary mt-2"><small><b><a className="underline pointer">View Size Chart +</a></b></small></label>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className= "col-md-8">
                            <label className="product-field"><span className="">Available Offers:</span></label>
                            <div className="offer-card-container">
                              <div className="offer-card">
                              <div className="offer-card-header mb-3">Buy 2 get 1 free</div>
                              <div className="offer-card-body">
                                Buy 2 of this item to get any 1 of this item for free
                              </div>
                              <div className="offer-card-button text-right">
                                <a>More Info +</a>
                              </div>
                              <div>
                              </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row mt-3">
                        <div className= "col-md-8">
                            <div className="offer-card-container">
                              <div className="offer-card">
                              <div className="offer-card-header mb-3">10% Cashback | Paytm</div>
                              <div className="offer-card-body">
                                Pay via Paytm to avail 10% cashback upto 5$
                              </div>
                              <div className="offer-card-button text-right">
                                <a>More Info +</a>
                              </div>
                              <div>
                              </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row m-b-3 mt-3">
                        <div className= "col-md-8">
                          <div className="cart-buttons">
                            <button className="btn btn-primary mr-2" onClick={this.addInCart}>Add to cart</button>
                            <button className="btn btn-default ml-2 active text-primary pull-right">Wishlist +</button>
                          </div>
                        </div>
                      </div>
                      <div className="row m-b-3 mt-2">
                        <div className= "col-md-8">
                            <small className="product-field">
                              <span className="">Estimated Delivery Date <span className="text-primary">13 December 2019</span></span>
                            </small>
                        </div>
                      </div>
                       <div className="row mt-3">
                        <div className= "col-md-8">
                            <label className="product-field"><span className="">Product Details:</span></label>
                            <div>
                              <div className="product-detail-thingy mb-2"><b>Product ID:</b><div className="inline-block">265B42</div></div>
                              <div className="product-detail-thingy mb-2"><b>Product Name:</b><div className="inline-block">Nazaakat - Powder Pink Embroidered Festive Kurta With Contrast Flared Sleeves</div></div>
                              <hr />
                              <div className="product-detail-thingy mb-2"><b>Brand:</b><div className="inline-block">Nazaakat</div></div>
                              <div className="product-detail-thingy mb-2"><b>Stictching Type:</b><div className="inline-block">Stitched</div></div>
                              <div className="product-detail-thingy mb-2"><b>Occassions:</b><div className="inline-block">Casual Wear</div></div>
                              <hr />
                            </div>
                        </div>
                      </div>
                      </div>
                    </div>
                  </div>
                  <div className="extra-product-container  mt-3 mb-5">
                        <div className="extra-product-box min-width">
                          <h1>More</h1>
                          <h1>Like</h1>
                          <h1>This</h1>
                          <h1>Product</h1>
                        </div>
                        <div className="extra-product-box">
                          <a><img className="extra-product-image" src={unsplash} /></a>
                        </div>
                        <div className="extra-product-box">
                          <a><img className="extra-product-image" src={unsplash} /></a>
                        </div>
                        <div className="extra-product-box">
                          <a><img className="extra-product-image" src={unsplash} /></a>
                        </div>
                        <div className="extra-product-box">
                          <a><img className="extra-product-image" src={unsplash} /></a>
                        </div>
                  </div>
              </div>)
      }

}

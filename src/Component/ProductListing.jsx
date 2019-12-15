import React from 'react';
import axios from 'axios';

export default class ProductListing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedSize:"s",
          selectedCategory:"Sarees"
        }
    }

    componentWillMount(){
this.getDisplayeProduct();
this.getCategory(5);
this.getDiscountPercent();
this.getSize();
    }

    getDisplayeProduct = () =>{
      axios({
        method: 'get',
        url: "/api/products"
      }).then((res)=>{
        this.setState({
          data:res.data
        })
      },()=>{
      })
    }

    getCategory = (limit) =>{
      axios({
        method: 'get',
        url: "/api/products/category",
        limit:limit
      }).then((res)=>{
        this.setState({
          category:res.data
        })
      },(err)=>{
        this.setState({
          category:["Sarees","Lehengas","Kurtis","Accessories"]
        })
      })
    }

    getDiscountPercent = () =>{
      axios({
        method: 'get',
        url: "/api/products/discountPercentage",
        limit:5
      }).then((res)=>{
        this.setState({
          discountPercentage:res.data
        })
      },()=>{
      })
    }

    getSize = () =>{
      axios({
        method: 'get',
        url: "/api/products/size"
      }).then((res)=>{
        this.setState({
          size:res.data
        })
      },(err)=>{
        this.setState({
          size:["xs","s","m","l","xl"]
        })
      })
    }

    setCategory = (e) =>{
      this.setState({
        selectedCategory:e.target.text
      })
    }

    render() {
        return ( <>
            <div className="listing-page-container mt-3">
                <div className="listing-box row">
                    <div className="filter-side hidden-xs col-md-2 zero-padding">
                        <div className="filter-list">
                            <h5>Shop by Category</h5>
                            <ul className="category-selector">
                              {
                                this.state.category ?
                                this.state.category.map((o)=>{
                                  return (<li className={this.state.selectedCategory === o ? "active" : ""} onClick={this.setCategory.bind(this)}><a>{o}</a></li>)
                                })
                                :null
                              }
                              <li><a onClick={this.getCategory.bind(this)}>More Clothing</a></li>
                            </ul>
                            <h5>Filter By</h5>
                            <div className="price-selector">
                                <h6>Price</h6>
                                (Slider goes here)
                            </div>
                            <div className="discount-selector">
                                <h6>Discounts</h6>
                                <ul>
                                    <li className="active"><a>10% and above</a></li>
                                    <li><a>20% and above</a></li>
                                    <li><a>30% and above</a></li>
                                    <li><a>40% and above</a></li>
                                    <li><a>50% and above</a></li>
                                </ul>
                            </div>
                                <div className="size-selector">
                                <h6>Size</h6>
                                <ul className="size-selector">
                                {
                                  this.state.size ?
                                  this.state.size.map((o)=>{
                                    return (<li type="checkbox" className="fa-fw" className={this.state.selectedSize === o ? "checked" : ""}><a>{o}</a></li>)
                                  })
                                  :null
                                }
                                    <li><input type="checkbox" className="fa-fw"/><a> xs(6)</a></li>
                                </ul>
                                </div>
                                <div className="colour-selector">
                                <h6>Colour</h6>
                                <i className="fa fa-square fa-fw" style={{color:"#EBE6C8"}}></i>
                                <i className="fa fa-square fa-fw" style={{color:"#3DDBD0"}}></i>
                                <i className="fa fa-square fa-fw" style={{color:"#D26576"}}></i>
                                <i className="fa fa-square fa-fw" style={{color:"#000000"}}></i>
                            </div>
                        </div>
                    </div>
                    <div className="listing-list col-md-10">
                        <div id="listProducts" className="products-container">
                        <div className="products-section nopadding mt-2">
                          <div className="product-row">
                              <div className="product-item m-b-md">
                                  <div className="ibox">
                                      <div className="ibox-content product-box">
                                          <div className="product-imitation">
                                              <a className="product-image" href="/product/1" onclick="dataLayer.push({'event':'ProductDetailsViewedEvent','eventName':'ProductDetailsViewed','eventAction':'4599','eventLabel':'6221239','discountPercentage':'75','category':'NA','subCategory':'NA','price':'1105','productId':'6221239','positionOnPage':'1' });">
                                              <img alt="gift for me" src="https://img6.craftsvilla.com/image/upload/w_300,h_450/C/V/CV-36267-MCRAF88922597130-1562745721-Craftsvilla_1.jpg" data-src="https://img6.craftsvilla.com/image/upload/w_300,h_450/C/V/CV-36267-MCRAF88922597130-1562745721-Craftsvilla_1.jpg" data-list-src="https://img6.craftsvilla.com/image/upload/w_500,h_500/C/V/CV-36267-MCRAF88922597130-1562745721-Craftsvilla_1.jpg" className="img-height-custom"/>
                                          </a>
                                          <div className="hover-buttons">
                                              <a className="btn btn-primary pull-left btn-sm">Add to Cart</a>
                                              <a className="btn btn-default pull-right btn-sm">Wishlist</a>
                                          </div>
                                          </div>
                                          <div className="product-desc">
                                            { /* <span className="product-price">
                                                  <i className="fa fa-square fa-fw" style={{color:"#EBE6C8"}}></i>
                                                  <i className="fa fa-square fa-fw" style={{color:"#3DDBD0"}}></i>
                                                  <i className="fa fa-square fa-fw" style={{color:"#D26576"}}></i>
                                                  <i className="fa fa-square fa-fw" style={{color:"#000000"}}></i>
                                              </span>
                                              <a href="#" className="product-name"> Product</a>
                                                  */}
                                              <h6> kapde kapde kapde kapde kapde </h6>

                                              <div className="small m-t-sm">
                                                  <div className="strikethrough text-grey">₹999</div>
                                                  <b className="pricing">₹850</b><span className="label-primary text-left ml-1">50% off</span>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                          { this.state.data ?
                            this.state.data.map((o)=>{
                              return (
                              <div className="products-section nopadding mt-2">
                                <div className="product-row">
                                    <div className="product-item m-b-md">
                                        <div className="ibox">
                                            <div className="ibox-content product-box">
                                                <div className="product-imitation">
                                                    <a className="product-image" href="/product/1" onclick="dataLayer.push({'event':'ProductDetailsViewedEvent','eventName':'ProductDetailsViewed','eventAction':'4599','eventLabel':'6221239','discountPercentage':'75','category':'NA','subCategory':'NA','price':'1105','productId':'6221239','positionOnPage':'1' });">
                                                    <img alt="gift for me" src="https://img6.craftsvilla.com/image/upload/w_300,h_450/C/V/CV-36267-MCRAF88922597130-1562745721-Craftsvilla_1.jpg" data-src="https://img6.craftsvilla.com/image/upload/w_300,h_450/C/V/CV-36267-MCRAF88922597130-1562745721-Craftsvilla_1.jpg" data-list-src="https://img6.craftsvilla.com/image/upload/w_500,h_500/C/V/CV-36267-MCRAF88922597130-1562745721-Craftsvilla_1.jpg" className="img-height-custom"/>
                                                </a>
                                                <div className="hover-buttons">
                                                    <a className="btn btn-primary pull-left btn-sm">Add to Cart</a>
                                                    <a className="btn btn-default pull-right btn-sm">Wishlist</a>
                                                </div>
                                                </div>
                                                <div className="product-desc">
                                                  { /* <span className="product-price">
                                                        <i className="fa fa-square fa-fw" style={{color:"#EBE6C8"}}></i>
                                                        <i className="fa fa-square fa-fw" style={{color:"#3DDBD0"}}></i>
                                                        <i className="fa fa-square fa-fw" style={{color:"#D26576"}}></i>
                                                        <i className="fa fa-square fa-fw" style={{color:"#000000"}}></i>
                                                    </span>
                                                    <a href="#" className="product-name"> Product</a>
                                                        */}
                                                    <h5>{o.title}</h5>

                                                    <div className="small m-t-sm">
                                                        <div className="strikethrough text-grey">₹{o.price}</div>
                                                        <b className="pricing">₹{o.discount_price}</b><span className="label-primary text-left ml-1">50% off</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          )
                            })
                             : null
                        }
                </div>
            </div>
        </div>
    </div>
            </>
        );
    }
}

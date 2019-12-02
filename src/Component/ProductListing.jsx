import React from 'react';

export default class ProductListing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            value: ""
        }
    }

    render() {
        return ( <
            >
            <div className="listing-page-container">
                <div className="row">
                    <div className="col-md-3 col-sm-4 hidden-xs">
                        <div className="filter-list">
                            <h5>Shop by Category</h5>
                            <ul className="category-selector">
                                <li className="active"><a>Sarees</a></li>
                                <li><a>Lehengas</a></li>
                                <li><a>Kurtis</a></li>
                                <li><a>Accessories</a></li>
                                <li><a>More Clothing</a></li>
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
                                    <li><input type="checkbox" className="fa-fw"/><a> xs(6)</a></li>
                                    <li><input type="checkbox" className="fa-fw"/><a> s(6)</a></li>
                                    <li><input type="checkbox" className="fa-fw"/><a> m(6)</a></li>
                                    <li><input type="checkbox" className="fa-fw"/><a> l(6)</a></li>
                                    <li><input type="checkbox" className="fa-fw"/><a> xl(6)</a></li>
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
                    <div className="col-md-9">
                        <div id="listProducts" className="products-container">
                    <div className="products-section nopadding">
                        <div className="product-row row">
                            <div className="col-md-3" data-id="6221239" data-url-path="craftsvilla-black-banarasi-silk-designer-saree-with-unstitched-blouse-material">
                                <div className="product">
                                    <div className="product-img">
                                        <a className="product-image" href="/product/1" onclick="dataLayer.push({'event':'ProductDetailsViewedEvent','eventName':'ProductDetailsViewed','eventAction':'4599','eventLabel':'6221239','discountPercentage':'75','category':'NA','subCategory':'NA','price':'1105','productId':'6221239','positionOnPage':'1' });">
                                            <img src="https://img6.craftsvilla.com/image/upload/w_300,h_450/C/V/CV-36267-MCRAF88922597130-1562745721-Craftsvilla_1.jpg" data-src="https://img6.craftsvilla.com/image/upload/w_300,h_450/C/V/CV-36267-MCRAF88922597130-1562745721-Craftsvilla_1.jpg" data-list-src="https://img6.craftsvilla.com/image/upload/w_500,h_500/C/V/CV-36267-MCRAF88922597130-1562745721-Craftsvilla_1.jpg" alt="Craftsvilla ..." title="Craftsvilla ..." className="product-image"/>
                                        </a>
                                        <div className="wishit wishlist-product" onclick="dataLayer.push({'event':'ProductBookmarkedEvent','eventName':'ProductBookmarked','productId':'6221239','type':'addedToWishlist','category':'NA','subCategory':'NA','source':'listingView'});">
                                            <a id="wishicon-6221239">
                                                <i className="icon cv-wishlist-icon"></i>
                                            </a>
                                        </div>
                                        <div className="quickView hidden-xs" data-toggle="modal" data-target="#quickViewModal" data-id="quickView_6221239_craftsvilla-black-banarasi-silk-designer-saree-with-unstitched-blouse-material" data-position="1">
                                            <a href="/product/1">Quick View</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div class="ibox">
                                    <div class="ibox-content product-box">
                                        <div class="product-imitation">
                                            <a className="product-image" href="/product/1" onclick="dataLayer.push({'event':'ProductDetailsViewedEvent','eventName':'ProductDetailsViewed','eventAction':'4599','eventLabel':'6221239','discountPercentage':'75','category':'NA','subCategory':'NA','price':'1105','productId':'6221239','positionOnPage':'1' });">
                                            <img src="https://img6.craftsvilla.com/image/upload/w_300,h_450/C/V/CV-36267-MCRAF88922597130-1562745721-Craftsvilla_1.jpg" data-src="https://img6.craftsvilla.com/image/upload/w_300,h_450/C/V/CV-36267-MCRAF88922597130-1562745721-Craftsvilla_1.jpg" data-list-src="https://img6.craftsvilla.com/image/upload/w_500,h_500/C/V/CV-36267-MCRAF88922597130-1562745721-Craftsvilla_1.jpg" className="img-height-custom"/>
                                        </a>
                                        <div className="hover-buttons">
                                            <a className="btn btn-primary pull-left btn-sm">Add to Cart</a>
                                            <a className="btn btn-default pull-right btn-sm">Wishlist</a>
                                        </div>
                                        </div>
                                        <div class="product-desc">
                                            <span class="product-price">
                                                <i className="fa fa-square fa-fw" style={{color:"#EBE6C8"}}></i>
                                                <i className="fa fa-square fa-fw" style={{color:"#3DDBD0"}}></i>
                                                <i className="fa fa-square fa-fw" style={{color:"#D26576"}}></i>
                                                <i className="fa fa-square fa-fw" style={{color:"#000000"}}></i>
                                            </span>
                                            <a href="#" class="product-name"> Product</a>
                                            <h5>Special Weave Saree</h5>
                                            <div class="small m-t-sm">
                                                $500
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        </div>
                    </div>
            </div>
        </div> <
            />
        );
    }
}
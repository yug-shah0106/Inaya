import React from 'react';

export default class ProductListing extends React.Component {
constructor(props){
  super(props);
  this.state = {
      name:"",
      value:""
  }
}

render(){
  return(
    <>
    <div className="row">
            <div className="col-md-2">
                <div id="sidebar" className="col-sm-2 col-xs-12 mobile-sidebar sticky-container">
                    <div className="sidebar-sticky" id="filter" style={{"position": "fixed", "width": "190px", "bottom": "100px", "overflow": "scroll", "top": "90px"}}>
                        <div id="mobDynamicFilter">
                            <h4 className="f-heading">
                                <span>Filter by</span>
                                <span className="total-product-count visible-xs">2192 Products</span>
                                <span className="filter-close-mobile"></span>
                            </h4>
                            <div id="mobfilter" className="col-xs-12 visible-xs mobile-filter">
                                <div className="col-xs-12 nopadding">

                                        <span className="filterList">
                                            <ul className="filter-container">
                                                <div className="tab-right-content">
                                                    <div className="tab-data-price tab-pane active" id="mob-price" data-for-post-id="Price">
                                                        <h6>Price</h6>
                                                        <ul id="price" data-category-list="">
                                                            <li>
                                                                <label>
                                                                    <input type="checkbox" value="500-1000" id="500-1000" className="regular-checkbox"/>
                                                                    <label for="checkbox-1" className="icon-check"></label>
                                                                    <span className="checkbox-text">500-1000  (764) </span>
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <label>
                                                                    <input type="checkbox" value="1000-2000" id="1000-2000" className="regular-checkbox"/>
                                                                    <label for="checkbox-1" className="icon-check"></label>
                                                                    <span className="checkbox-text">1000-2000  (1001) </span>
                                                                </label>
                                                            </li>


                                                            <li>
                                                                <label>
                                                                    <input type="checkbox" value="2000-5000" id="2000-5000" className="regular-checkbox"/>
                                                                    <label for="checkbox-1" className="icon-check"></label>
                                                                    <span className="checkbox-text">2000-5000  (352) </span>
                                                                </label>
                                                            </li>


                                                            <li>
                                                                <label>
                                                                    <input type="checkbox" value="above 5000" id="above5000" className="regular-checkbox"/>
                                                                    <label for="checkbox-1" className="icon-check"></label>
                                                                    <span className="checkbox-text">Above 5000  (68) </span>
                                                                </label>
                                                            </li>

                                                        </ul>
                                                    </div>

                                                    <div className="tab-data-saree-fabric tab-pane " id="mob-saree-fabric" data-for-post-id="Saree Fabric">
                                                        <h6>Saree Fabric</h6>
                                                        <ul id="saree-fabric" data-category-list="">
                                                            <li>
                                                                <label>
                                                                    <input type="checkbox" value="cotton" id="cotton" className="regular-checkbox"/>
                                                                    <label for="checkbox-1" className="icon-check"></label>
                                                                    <span className="checkbox-text">Cotton  (468) </span>
                                                                </label>
                                                            </li>

                                                            <li>
                                                                <label>
                                                                    <input type="checkbox" value="silk" id="silk" className="regular-checkbox"/>
                                                                    <label for="checkbox-1" className="icon-check"></label>
                                                                    <span className="checkbox-text">Silk  (242) </span>
                                                                </label>
                                                            </li>

                                                            <li>
                                                                <label>
                                                                    <input type="checkbox" value="georgette" id="georgette" className="regular-checkbox"/>
                                                                    <label for="checkbox-1" className="icon-check"></label>
                                                                    <span className="checkbox-text">Georgette  (170) </span>
                                                                </label>
                                                            </li>



                                                            <li>
                                                                <label>
                                                                    <input type="checkbox" value="linen" id="linen" className="regular-checkbox"/>
                                                                    <label for="checkbox-1" className="icon-check"></label>
                                                                    <span className="checkbox-text">Linen  (65) </span>
                                                                </label>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </ul>
                                        </span>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-10">
                <div id="listProducts" className="col-xs-12 products-container flex-center nopadding">
            <div className="col-xs-12 products-section nopadding">
                <div className="product-row">
                    <div className="col-xs-6 col-sm-3 product-box" data-id="6221239" data-url-path="craftsvilla-black-banarasi-silk-designer-saree-with-unstitched-blouse-material">
                        <div className="col-xs-12 product">
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
                    <div className="col-xs-6 col-sm-3 product-box" data-id="6221239" data-url-path="craftsvilla-black-banarasi-silk-designer-saree-with-unstitched-blouse-material">
                        <div className="col-xs-12 product">
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
                    <div className="col-xs-6 col-sm-3 product-box" data-id="6221239" data-url-path="craftsvilla-black-banarasi-silk-designer-saree-with-unstitched-blouse-material">
                        <div className="col-xs-12 product">
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
                    <div className="col-xs-6 col-sm-3 product-box" data-id="6221239" data-url-path="craftsvilla-black-banarasi-silk-designer-saree-with-unstitched-blouse-material">
                        <div className="col-xs-12 product">
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
                    <div className="col-xs-6 col-sm-3 product-box" data-id="6221239" data-url-path="craftsvilla-black-banarasi-silk-designer-saree-with-unstitched-blouse-material">
                        <div className="col-xs-12 product">
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
                    
                    <div className="col-xs-6 col-sm-3 product-box" data-id="6221239" data-url-path="craftsvilla-black-banarasi-silk-designer-saree-with-unstitched-blouse-material">
                        <div className="col-xs-12 product">
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
                                    <a href="#">Quick View</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-6 col-sm-3 product-box" data-id="6221239" data-url-path="craftsvilla-black-banarasi-silk-designer-saree-with-unstitched-blouse-material">
                        <div className="col-xs-12 product">
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
                                    <a href="#">Quick View</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-6 col-sm-3 product-box" data-id="6221239" data-url-path="craftsvilla-black-banarasi-silk-designer-saree-with-unstitched-blouse-material">
                        <div className="col-xs-12 product">
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
                                    <a href="#">Quick View</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                </div>
            </div>
        </div>
        </>
  );
}
}

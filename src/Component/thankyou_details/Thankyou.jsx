import React, { Component } from 'react';
import {
    Badge,
    Row,
    Col,
    Accordion,
    Card
} from "react-bootstrap";
import { Form, Field } from 'react-final-form'


export default class Thankyou extends Component {

  constructor(props) {
      super(props);
      this.state = {}
    }

    render(){
      return(
        <div className="container largemargin-top">
        <Row>
          <Col md={12}>
             <h1 className="thank-you-heading">Thank you, your order has been placed.</h1>
             <br class="visible-xs"/>
             <h6 className="thank-you-subheading">We have sent you an email confirmation with all the order details.</h6>
             <div className="thank-you-box">
              <h5>1 Item will be delivered to Mr Terry Pratchett</h5>
              <p>(406) 285-5204<br/>16070 Madison Frontage Rd #1<br/>Three Forks, Montana(MT), 59752</p>
              <h6 className="text-danger">Estimated Delivery date - December 12 - December 15</h6>
              <div className="m-t-lg review">
                  <a className="underline">Review or Edit Order</a>
              </div>
             </div>
          </Col>
        </Row>
        <hr />
        <Row className="m-b-md">
          <Col  md={12}>
            <small><h1 class="thank-you-heading">Customers Also Bought</h1></small>
          </Col>
        </Row>
        <div className="product-row">
            <div className="product-item m-b-md">
              <div className="ibox">
                  <div className="ibox-content product-box">
                      <div className="product-imitation">
                          <a className="product-image" >
                          <img alt="gift for me" src="https://img6.craftsvilla.com/image/upload/w_300,h_450/C/V/CV-36267-MCRAF88922597130-1562745721-Craftsvilla_1.jpg" data-src="https://img6.craftsvilla.com/image/upload/w_300,h_450/C/V/CV-36267-MCRAF88922597130-1562745721-Craftsvilla_1.jpg" data-list-src="https://img6.craftsvilla.com/image/upload/w_500,h_500/C/V/CV-36267-MCRAF88922597130-1562745721-Craftsvilla_1.jpg" className="img-height-custom"/>
                      </a>
                      <div className="hover-buttons">
                          <a className="plp-wishlist btn btn-default pull-left btn-sm">Wishlist</a>
                          <a className="plp-atc btn btn-primary pull-right btn-sm">Add to Cart</a>
                      </div>
                      </div>
                      <div className="product-desc">
                          <h5>Clothes</h5>
                          <div className="small m-t-sm">
                              <div className="strikethrough text-grey">₹200</div>
                              <b className="pricing">₹200</b><span className="label-primary text-left ml-1">50% off</span>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
            <div className="product-item m-b-md">
              <div className="ibox">
                  <div className="ibox-content product-box">
                      <div className="product-imitation">
                          <a className="product-image" >
                          <img alt="gift for me" src="https://img6.craftsvilla.com/image/upload/w_300,h_450/C/V/CV-36267-MCRAF88922597130-1562745721-Craftsvilla_1.jpg" data-src="https://img6.craftsvilla.com/image/upload/w_300,h_450/C/V/CV-36267-MCRAF88922597130-1562745721-Craftsvilla_1.jpg" data-list-src="https://img6.craftsvilla.com/image/upload/w_500,h_500/C/V/CV-36267-MCRAF88922597130-1562745721-Craftsvilla_1.jpg" className="img-height-custom"/>
                      </a>
                      <div className="hover-buttons">
                          <a className="plp-wishlist btn btn-default pull-left btn-sm">Wishlist</a>
                          <a className="plp-atc btn btn-primary pull-right btn-sm">Add to Cart</a>
                      </div>
                      </div>
                      <div className="product-desc">
                          <h5>Clothes</h5>
                          <div className="small m-t-sm">
                              <div className="strikethrough text-grey">₹200</div>
                              <b className="pricing">₹200</b><span className="label-primary text-left ml-1">50% off</span>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
            <div className="product-item m-b-md">
              <div className="ibox">
                  <div className="ibox-content product-box">
                      <div className="product-imitation">
                          <a className="product-image" >
                          <img alt="gift for me" src="https://img6.craftsvilla.com/image/upload/w_300,h_450/C/V/CV-36267-MCRAF88922597130-1562745721-Craftsvilla_1.jpg" data-src="https://img6.craftsvilla.com/image/upload/w_300,h_450/C/V/CV-36267-MCRAF88922597130-1562745721-Craftsvilla_1.jpg" data-list-src="https://img6.craftsvilla.com/image/upload/w_500,h_500/C/V/CV-36267-MCRAF88922597130-1562745721-Craftsvilla_1.jpg" className="img-height-custom"/>
                      </a>
                      <div className="hover-buttons">
                          <a className="plp-wishlist btn btn-default pull-left btn-sm">Wishlist</a>
                          <a className="plp-atc btn btn-primary pull-right btn-sm">Add to Cart</a>
                      </div>
                      </div>
                      <div className="product-desc">
                          <h5>Clothes</h5>
                          <div className="small m-t-sm">
                              <div className="strikethrough text-grey">₹200</div>
                              <b className="pricing">₹200</b><span className="label-primary text-left ml-1">50% off</span>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
}

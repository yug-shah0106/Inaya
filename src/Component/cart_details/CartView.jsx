import React, { useState } from "react";
import {
  Button,
  Table,
  Row,
  Col,
  Form
} from "react-bootstrap";
import { cloneDeep } from "lodash";
import axios from 'axios';
import Select from 'react-select';

export default class CartView extends React.Component {
  constructor(props){
    super(props);
    this.state={

    }
  }

  componentWillMount(){
    axios({
      method: 'get',
      url: "/api/cart"
    }).then((res)=>{
      this.setState({
        cartItem:res.data
      })
    },(error)=>{
      let res = {};
      res.data= [{
        color: "Red",
description: "",
design_code: "10AB20",
designer_id: 12793,
discount_percent: 15,
discount_price: 850,
id: 1,
price: 999,
quantity: 2,
size: "S",
title: "red plain festival danglers drops",
weight: 200,
}];

this.setState({
  cartItem:res.data
})
      console.log(error);
    })
  }

  componentDidMount(){
    this.setState({
      cartItem:[{
        color: "Red",
description: "",
design_code: "10AB20",
designer_id: 12793,
discount_percent: 15,
discount_price: 850,
id: 1,
price: 999,
quantity: 2,
size: "S",
title: "red plain festival danglers drops",
weight: 200,
}]
    })
  }

  handleAddQty = (obj) =>{

  }

  handleRemoveQty = (obj) =>{

  }
  //  handleAddQty = (obj) => {
  //   obj.qty += 1;
  //   setCartItem(cloneDeep(cartItem));
  // }

  //  handleRemoveQty = (obj) => {
  //   if (obj.qty !== 1) {
  //     obj.qty -= 1;
  //     setCartItem(cloneDeep(cartItem));
  //   }
  // }

  redirectCheckout = () =>{
    this.props.history.push("/checkout");
  }

  render(){
    let cartItem = this.state.cartItem;
    return(
      <div className="">
      {
        cartItem ?
      <div className="bagWapperWithItems">
        <div className="container-cart cartContainer">
          <div className="container-fluid row" style={{"padding": "0px"}}>
            <div className="col-sm-7 col-md-7 noPd">
              <div className="leftSection">
                <div className="cartTotal">
                  <span>
                    <span className="qty">
                      <b>My Bag</b> (2 items)
                    </span>
                  </span>
                </div>
                <div>
                  <div className="cartProductBorder clearfix">
                    <div className="cartProduct">
                      <div className="cartProductInner">
                        <div className="cartProductImg">
                          <a aria-current="false" href="p/logo-batman-fleece-hoodies-gid-for-men?src=cart">
                            <img src="https://images.bewakoof.com/t320/logo-batman-fleece-hoodies-bml--gid-men-s-printed-hoodies-aw19-252669-1575020489.gif" title="Logo Batman Fleece Hoodies (BML) (GID)" alt="Logo Batman Fleece Hoodies (BML) (GID)"/>
                          </a>
                        </div>
                        <div className="cartProductRight">
                          <span>
                            <a className="cartProductName" aria-current="false" href="p/logo-batman-fleece-hoodies-gid-for-men?src=cart">Logo Batman Fleece Hoodies (BML) (GID)
                            </a>
                          </span>
                          <div className="productPriceDetails clearfix">
                            <span className="cartProductPrice">
                              <i className="icon_rupee">
                              </i>
                              &nbsp;899
                            </span>
                            <span className="cartProductMrp">
                              <i className="icon_rupee">
                              </i>
                              999
                            </span>
                          </div>
                          <div className="cartProductSize">
                            <div className="cartSizeQtyHolder">
                              <span>Size: <b id="testChangeSize">XL
                                  </b>
                              </span>
                              <i className="icon_down"></i>
                            </div>
                            <div className="cartSizeQtyHolder">
                              <span>Qty:
                                <b id="testChangeQty">1</b>
                             </span>
                             <i className="icon_down"></i>
                            </div>
                          </div>
                          <div className="cartErrorAction error">Only 10 left!</div>
                          </div>
                        </div>
                        <div className="cartBottomAction">
                          <div className="cartProductActions">
                            <span id="testRemoveCart" className="removeOnly" style={{"cursor":" pointer"}}> Remove
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="cartProductBorder clearfix">
                      <div className="cartProduct">
                        <div className="cartProductInner">
                          <div className="cartProductImg">
                            <a aria-current="false" href="p/galaxy-blue-fleece-zipper-hoodies-for-men?src=cart">
                             <img src="https://images.bewakoof.com/t320/galaxy-blue-fleece-zipper-hoodies-men-s-plain-zipper-hoodies-aw19-231131-1571485014.jpg" title="Galaxy Blue Fleece Zipper Hoodies" alt="Galaxy Blue Fleece Zipper Hoodies"/>
                            </a>
                          </div>
                          <div className="cartProductRight">
                            <span>
                            <a className="cartProductName" aria-current="false" href="p/galaxy-blue-fleece-zipper-hoodies-for-men?src=cart">
                            Galaxy Blue Fleece Zipper Hoodies
                            </a>
                          </span>
                            <div className="productPriceDetails clearfix">
                             <span className="cartProductPrice">
                              <i className="icon_rupee">
                              </i>
                             &nbsp;999
                             </span>
                            </div>
                            <div className="cartProductSize">
                              <div className="cartSizeQtyHolder">
                                <span>Size:
                                  <b id="testChangeSize">
                                    M
                                  </b>
                                </span>
                               <i className="icon_down">
                               </i>
                               </div>
                               </div>
                               <div className="cartErrorAction error">
                               Product is sold out
                               </div>
                               </div>
                               </div>
                               <div className="cartBottomAction">
                             <div className="cartProductActions">
                             <span id="testRemoveCart" className="removeOnly" style={{"cursor":" pointer"}}>
                              Remove
                              </span>
                              </div>
                              </div>
                              </div>
                              </div>
                              <span id="SizeList">
                              </span>
                              <span id="QuantityList">
                              </span>
                              </div>
                              </div>
            </div>
            <div className="summaryBox col-sm-5 col-md-5 rightSection noPdRight">
                              <span id="CouponSuccess">
                              </span>
                              <div style={{"backgroundColor": "rgb(45, 45, 45)"}}>
                              <div className="membershipPriceBox">
                              <p>Save additional Rs.245 on this order with TriBe Membership.
                              </p>
                              <div className="membershipPriceInner">
                              <ul>
                              <li>
                              <div className="selectPriceBtn">
                              <input type="radio" id="l_id_0" name="memberPrice" value="on"/>
                              <label for="l_id_0">
                              </label>
                              </div>
                              <div className="planPackage">
                              <h4>TriBe Membership
                              </h4>
                              <h4> 6 Months -
                              <b>Rs. 299
                              </b>
                              </h4>
                              </div>
                              </li>
                              <li>
                              <div className="selectPriceBtn">
                              <input type="radio" id="l_id_1" name="memberPrice" value="on"/>
                              <label for="l_id_1">
                              </label>
                              </div>
                              <div className="planPackage">
                              <h4>TriBe Membership </h4>
                              <h4> 12 Months -
                              <b>Rs. 399</b>
                              </h4>
                              </div>
                              </li>
                              </ul>
                              </div>
                              </div>
                              </div>
                              <span id="terms">
                              </span>
                              <div className = "box-1">
                              <div className="box-2">
                              <img className="image-1" src="https://images.bewakoof.com/web/coin-1552992075.png"/>You will earn Bewakoof Coins worth 10% of this order.
                              </div>
                              <div className="box-3">
                              <u>
                              <i>T&amp;C
                              </i>
                              </u>
                              </div>
                              </div>
                              <span id="OfferRows">
                              </span>
                              <div className="offerBox" className="box-4">
                              <div>
                              <div>
                              <div className="box-5">
                              <b className="box-6">Get 100% Cashback Upto Rs.150 via Paypal
                              </b>
                              <span className="box-7">
                              <b>Offer is valid for first transaction on Bewakoof through PayPal and can be availed once per user. Valid from 2nd December to 31st December, 2019. Cashback will be awarded in 30 days from the date of transaction.
                              </b>
                              </span>
                              </div>
                              </div>
                              </div>
                              </div>
                              <span id="promocode">
                              </span>
                              <div id="testHaveGiftCard" className="box-8">Have a Gift/Referral Code?
                              </div>
                              <div className="box-9">
                              </div>
                              <div className="box-10">
                              <div className="box-11">Order Summary
                              </div>
                              </div>
                              <div className="box-12">
                              <div className="box-13">
                              Total MRP (Inclusive of all taxes)
                              </div>
                              <div className="box-14">₹ 1998
                              </div>
                              </div>
                              <div className="box-15">
                              <div className="box-16">Shipping Charges
                              </div>
                              <div className="box-17">FREE
                              </div>
                              </div>
                              <div className="box-18">
                              <div className="box-19">
                              Bag Discount
                              </div>
                              <div className="box-20">- ₹ 100
                              </div>
                              </div>
                              <div className="box-21">
                              <div className="box-22">Payable Amount
                              </div>
                              <div className="box-23">₹ 1898
                              </div>
                              </div>
                              <div className="box-24">You are saving ₹ 100 on this order.
                              </div>
                              <div className="box-25">
                              <div className="box-26">Final Amount
                              </div>
                              <div className="box-27">₹ 1898
                              </div>
                              </div>
                              <div className="box-28">
                              <button className="continueButtonCss">Select Delivery Address
                              </button>
                              </div>
                              <div className="box-29">
                              </div>
            </div>
          </div>
        </div>
      </div>
        : null }
      </div>
    );
  }
}

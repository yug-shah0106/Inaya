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

  render(){
    let cartItem = this.state.cartItem;
    return(
      <div className="">
      {
        cartItem ?
      <div className="text-center overflow-hidden">
        <h5>Your Cart</h5>
        <Table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Size</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {
              cartItem.map((obj, index) => (
                <tr key={obj.name}>
                  <td>Image</td>
                  <td>{obj.price || 999}</td>
                  <td>{obj.size || "L"}</td>
                  <td>
                    <Button size="xs" onClick={(e) => { this.handleAddQty(obj) }}>+</Button>
                    {obj.qty || 1}
                    <Button size="xs" onClick={(e) => { this.handleRemoveQty(obj) }}>-</Button>
                  </td>
                  <td>{(obj.qty * obj.price) || 999}</td>
                </tr>
              ))
            }
          </tbody>
        </Table>
        <hr />
        <Row>
          <Col sm={8}>
            <Form>
              <Form.Row>
                <Form.Group as={Col} sm={4} controlId="coupon_code">
                  <Form.Label>Coupon Code</Form.Label>
                  <Form.Control type="text" placeholder="Enter Code" />
                </Form.Group>
              </Form.Row>
            </Form>
          </Col>
          <Col sm={4}>
            <h6>Cart Overview</h6>
            <ul>
              <li><span>Base Price</span></li>
              <li><span>Discount</span></li>
              <li><span><b>Total</b></span></li>
            </ul>
          </Col>
        </Row>
        <hr />
        <div className="text-right">
          <Button>Checkout</Button>
        </div>
      </div> : null }
      </div>
    );
  }
}

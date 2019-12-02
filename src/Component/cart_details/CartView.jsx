import React, { useState } from "react";
import {
  Button,
  Table,
  Row,
  Col,
  Form
} from "react-bootstrap";
import { cloneDeep } from "lodash";


function CartView() {

  const [cartItem, setCartItem] = useState([{
    name: "test",
    image: "",
    details: "",
    price: 99,
    qty: 1
  }]);

  function handleAddQty(obj) {
    obj.qty += 1;
    setCartItem(cloneDeep(cartItem));
  }

  function handleRemoveQty(obj) {
    if (obj.qty !== 1) {
      obj.qty -= 1;
      setCartItem(cloneDeep(cartItem));
    }
  }

  return (
    <div className="text-center">
      <h5>Your Cart</h5>
      <Table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {
            cartItem.map((obj, index) => (
              <tr key={obj.name}>
                <td>Image</td>
                <td>{obj.price}</td>
                <td>
                  <Button size="xs" onClick={(e) => { handleAddQty(obj) }}>+</Button>
                  {obj.qty}
                  <Button size="xs" onClick={(e) => { handleRemoveQty(obj) }}>-</Button>
                </td>
                <td>{obj.qty * obj.price}</td>
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
    </div>
  )
}

export default CartView;
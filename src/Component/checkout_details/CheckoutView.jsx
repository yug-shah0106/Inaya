import React, { Component } from 'react';
import {
    Badge,
    Row,
    Col,
    Accordion,
    Card
} from "react-bootstrap";
import { Form, Field } from 'react-final-form';
import axios from 'axios';

import checkout from "./checkout.css";

// "id" serial PRIMARY KEY,
// "number" varchar UNIQUE,
// "user_id" int,
// "status" varchar,
// "created_at" timestamptz DEFAULT CURRENT_TIMESTAMP,
// "updated_at" timestamptz DEFAULT CURRENT_TIMESTAMP,
// "confirmed_at" varchar,
// "dispatched_at" varchar,
// "app_source" varchar,
// "pincode" varchar,
// "street" varchar,
// "city" varchar,
// "state" varchar,
// "country" varchar,
// "billing_pincode" varchar,
// "billing_street" varchar,
// "billing_city" varchar,
// "billing_state" varchar,
// "billing_country" varchar,
// "name" varchar,
// "email" varchar,
// "phone" varchar,
// "weight" float8,
// "discount" int4,
// "coupon_id" int,
// "cart_id" int,
// "ip_address" varchar,
// "total" int4,
// "paid_amount" int4,
// "pay_type" varchar,
// "payment_gateway" varchar,
// "payment_status" varchar,
// "order_details" hstore
// );

export default class CheckoutView extends Component {


    handleSubmit = (values) => {
      let params = {
        user_id: 2,
        city: values.city,
        country: values.country,
        firstName: values.firstName,
        lastName: values.lastName,
        pinCode: values.pinCode,
        state: values.state,
        street: values.street,
        pinCode:values.pinCode,
        phoneNumber:values.number
      }
      axios.post('/api/orders/add',params).then((res)=>{
        console.log(res);
      },(err)=>{
        console.log(err);
      })
      console.log(values);
    }

    // componentDidMount() {
    //   this.autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'), {});
    //   this.autocomplete.addListener("place_changed", this.handlePlaceSelect);
    // }

    render() {
        return (
            <div className="container largemargin-top">
      <Row>
        <Col sm={8}>
          <Accordion defaultActiveKey={0} className="checkout-container">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey={0}>
              <Row>
                <Col md={8}>
                  <div className="number-circle inline-block m-r-sm">1</div>Customer Information
                </Col>
                <Col md={2}>
                  <h5>John Locke</h5>
                </Col>
                <Col md={2}>
                  <a className="btn btn-default">Edit</a>
                </Col>
              </Row>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={0}>
                <Card.Body>
                  Checking out as a <b>Guest</b>?

                  <div>You'll be able to save your details to create an account with us later.</div>

                <div className="mt-3">
                  <div className="form-inline">
                    <div className="form-group">
                      <input type="email" className="form-control m-r-sm" id="email" placeholder="Email Address" />
                      <a class="btn btn-default ">Continue as Guest</a>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  Already have an account? <big><a className="text-primary">Sign In</a></big>
                </div>

                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey={1}>
              <Row>
                <Col md={8}>
                  <div className="number-circle inline-block m-r-sm">2</div>Shipping
                </Col>
              </Row>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={1}>
                <Card.Body>
                  <Form
                    validate={this.validate}
                    onSubmit={this.handleSubmit}
                    render={({ handleSubmit, submitting, values }) => (
                      <form onSubmit={handleSubmit}>
                        <Row>
                          <Col>
                            <label>First Name</label>
                            <div>
                              <Field name="firstName">
                                {
                                  ({input, meta}) => (
                                    <input
                                    {...input}
                                    className="form-control"
                                    />
                                  )
                                }
                              </Field>
                            </div>
                          </Col>
                          <Col>
                            <label>Last Name</label>
                            <div>
                              <Field name="lastName">
                                {
                                  ({input, meta}) => (
                                    <input
                                    {...input}
                                    className="form-control"
                                    />
                                  )
                                }
                              </Field>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <label>Pin Code</label>
                            <div>
                              <Field name="pinCode">
                                {
                                  ({input, meta}) => (
                                    <input
                                    {...input}
                                    className="form-control"
                                    />
                                  )
                                }
                              </Field>
                            </div>
                          </Col>
                          <Col>
                            <label>Street</label>
                            <div>
                              <Field name="street">
                                {
                                  ({input, meta}) => (
                                    <input
                                    {...input}
                                    className="form-control"
                                    />
                                  )
                                }
                              </Field>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <label>City</label>
                            <div>
                              <Field name="city">
                                {
                                  ({input, meta}) => (
                                    <input
                                    {...input}
                                    className="form-control"
                                    />
                                  )
                                }
                              </Field>
                            </div>
                          </Col>
                          <Col>
                            <label>State</label>
                            <div>
                              <Field name="state">
                                {
                                  ({input, meta}) => (
                                    <input
                                    {...input}
                                    className="form-control"
                                    />
                                  )
                                }
                              </Field>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <label>Country</label>
                            <div>
                              <Field name="country">
                                {
                                  ({input, meta}) => (
                                    <input
                                    {...input}
                                    className="form-control"
                                    />
                                  )
                                }
                              </Field>
                            </div>
                          </Col>
                          <Col>
                            <label>Country</label>
                            <div>
                              <Field name="button"  >
                                {
                                  ({button, meta}) => (
                                    <button
                                    {...button}
                                    className="form-control"
                                    type="Submit"
                                    />
                                  )
                                }
                              </Field>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <label>Phone Number</label>
                            <div>
                              <Field name="phoneNumber">
                                {
                                  ({input, meta}) => (
                                    <input
                                    {...input}
                                    className="form-control"
                                    />
                                  )
                                }
                              </Field>
                            </div>
                          </Col>
                        </Row>
                      </form>
                    )}
                  />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey={2}>
                <div className="number-circle inline-block m-r-sm">3</div>Billing
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={2}>
                <Card.Body>Hello! I'm the body</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey={3}>
              <div className="number-circle inline-block m-r-sm">4</div>Payment
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={3}>
                <Card.Body>Hello! I'm the body</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Col>
        <Col sm={4}>
          <div className="checkout-summary">
            <div class="card">
              <div class="card-header">
                Order Summary <a className="pull-right text-primary mt-2">Edit Cart</a>
              </div>
              <div class="card-body">
                <p>2 Items</p>
                <div className="listing-container">
                  <Row className="listing-item mb-1">
                    <Col>
                      <img alt="gift for me" class="listing-page-side-image" src="/static/media/unsplash.5efd6796.jpg" data-id="/static/media/unsplash.5efd6796.jpg" />
                    </Col>
                    <Col className="listing-desc">
                      <p>Red plain festival danglers drops</p>
                    </Col>
                    <Col className="text-right">
                      <p>$200</p>
                    </Col>
                  </Row>
                  <Row className="listing-item mb-1">
                    <Col>
                      <img alt="gift for me" class="listing-page-side-image" src="/static/media/unsplash.5efd6796.jpg" data-id="/static/media/unsplash.5efd6796.jpg" />
                    </Col>
                    <Col className="listing-desc">
                      <p>Red plain festival danglers drops</p>
                    </Col>
                    <Col className="text-right">
                      <p>$200</p>
                    </Col>
                  </Row>
                </div>

                <hr />

                <div className="total-container mt-2">
                  <Row className="total-item mb-1">
                    <Col>
                      Subtotal
                    </Col>
                    <Col className="text-right">$400</Col>
                  </Row>
                  <Row className="total-item mb-1">
                    <Col>
                      Shipping
                    </Col>
                    <Col className="text-right">--</Col>
                  </Row>
                  <Row className="total-item mb-1">
                    <Col>
                      Tax
                    </Col>
                    <Col className="text-right">--</Col>
                  </Row>
                  <Row className="total-item mb-1">
                    <Col>
                      Discount
                    </Col>
                    <Col className="text-right">50%($200)</Col>
                  </Row>
                </div>
                <hr />
                <div className="final-container">
                  <Row className="final-item">
                    <Col>
                      Grand Total
                    </Col>
                    <Col className="text-right"><strong>$200</strong></Col>
                  </Row>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
        )
    }
}

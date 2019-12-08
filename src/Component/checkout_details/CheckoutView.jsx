import React, {Component} from 'react';
import {
  Badge,
  Row,
  Col,
  Accordion,
  Card
} from "react-bootstrap";
import { Form, Field } from 'react-final-form'

import checkout from "./checkout.css";


export default class CheckoutView extends Component {


  handleSubmit = () => {

  }

  render() {
    return (
      <div className="m-t-10">
        <Col sm={8}>
          <Accordion defaultActiveKey={0} className="checkout-container">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey={0}>
                <Badge variant="secondary">1</Badge>{' '}
                Customer Information
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={0}>
                <Card.Body>
                  Login
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey={1}>
              <Badge variant="secondary">2</Badge>{' '}
                Shipping
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
                            <label>Address</label>
                            <div>
                              <Field name="address">
                                {
                                  ({input, meta}) => (
                                    <textarea
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
                <Badge variant="secondary">3</Badge>{' '}
                Billing
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={2}>
                <Card.Body>Hello! I'm the body</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey={3}>
              <Badge variant="secondary">4</Badge>{' '}
                Payment
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={3}>
                <Card.Body>Hello! I'm the body</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Col>
      </div>
    )
  }
}
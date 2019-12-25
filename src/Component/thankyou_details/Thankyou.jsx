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
          <Col md={10}>
             <h5>
             Thank you, your order has been placed.
             </h5>
             <h6>
             We have sent you an email confirmation with all the order details.
             </h6>
             <div className="thank-you-box">
              <h5>1 Item will be delivered to Mr Terry Pratchett</h5>
              <p>(406) 285-5204
16070 Madison Frontage Rd #1
Three Forks, Montana(MT), 59752</p>
              <h6 className="red">Estimated Delivery date - December 12 - December 15</h6>
             </div>
          </Col>
        </Row>
        </div>
      );
    }
}

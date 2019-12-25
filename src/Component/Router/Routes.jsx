import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './../LandingPage.jsx';
import ProductDetail from './../ProductDetail.jsx';
import ProductListing from './../ProductListing.jsx';
import CartView from "../cart_details/CartView";
import CheckoutView from "../checkout_details/CheckoutView";
import Thankyou from "../thankyou_details/Thankyou";
// import Lisitingpage from './../Listingpage.jsx';
// import Form from './../Form.jsx';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/product/:id' component={ProductDetail} />
      <Route exact path='/productListing' component={ProductListing} />
      <Route exact path='/productListing/:name' component={ProductListing} />
      <Route exact path="/cart" component={CartView} />
      <Route exact path="/checkout" component={CheckoutView} />
      <Route exact path="/thankyou" component={Thankyou} />
    </Switch>
  </main>
)

export default Main

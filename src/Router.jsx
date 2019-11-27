import React from 'react';
import SuperHeader from './Component/SuperHeader/SuperHeader.jsx';
import Header from './Component/Header/Header.jsx';
import Routes from './Component/Router/Routes.jsx';
import Footer from './Component/Footer/Footer.jsx';

const Router = () => (
  <div>
  	<SuperHeader />
    <Header />
    <Routes />
    <Footer />
  </div>
)

export default Router

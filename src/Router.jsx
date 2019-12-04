import React from 'react';
import SuperHeader from './Component/SuperHeader/SuperHeader.jsx';
import Header from './Component/Header/Header.jsx';
import Routes from './Component/Router/Routes.jsx';
import Footer from './Component/Footer/Footer.jsx';
// import Breadcrumbs from './Component/Breadcrumbs/Breadcrumbs.jsx';

const Router = () => (
  <div>
  	<SuperHeader />
    <Header />
    {/*<Breadcrumbs />*/}
    <Routes />
    <Footer />
  </div>
)

export default Router;

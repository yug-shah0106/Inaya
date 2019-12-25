import React from 'react';
import NotificationSystem from 'react-notification-system';
import Notification from './Component/Util/Notification.jsx';
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
    <NotificationSystem ref={(n) => Notification.setNotificationSystem(n)} />
  </div>
)

export default Router;

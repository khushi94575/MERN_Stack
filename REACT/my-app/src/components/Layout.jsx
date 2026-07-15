import React from 'react';
import BasicNavbar from './BasicNavbar';
import LightFooter from './Footer';
import CardComponent from '../CardComponent';
import { Carousel } from 'react-bootstrap';
import MyCarousel from './Carousel';

const Layout = ({children}) => {
  return (
    <>
        <BasicNavbar />
            {children}
            <MyCarousel/>
        <CardComponent />
        <LightFooter />
    </>
  );
}

export default Layout;

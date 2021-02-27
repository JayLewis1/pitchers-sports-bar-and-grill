import React, { Fragment } from 'react'

import Landing from "../components/home/Landing";
import Bio from "../components/home/Bio";
import Menus from "../components/home/Menus";
import Booking from "../components/home/Booking";
import HomeGallery from "../components/home/HomeGallery";
import WhatsOn from "../components/home/WhatsOn";
import Information from "../components/home/Information";
import Map from "../components/home/Map";

const Home: React.FC = () => {
  return (
    <Fragment>
        <Landing />
        {/* <Bio /> */}
        <Menus />
        <Booking />
        <HomeGallery />
        <WhatsOn />
        <Information />
        <Map />
    </Fragment>
  )
}

export default Home;

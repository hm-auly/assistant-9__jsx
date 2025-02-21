import React from 'react'
import Hero from '../Home/Hero';
import Cardhome from '../Home/Cardhome';
import Feedback from '../Home/Feedback';
import Recent from '../Home/Recent';
import Footer from '../Common/Footer';
import Restaurant from '../Home/Restaurant';
import Navlink from '../Common/Navlink';
import MyHero from '../BellaItalia/Hero';

function Restaurants() {
  return (
    <section>
        <div>
          <Navlink />
            <Hero />
            <Cardhome />
            <Feedback />
            <Recent />
            <Footer />
            <MyHero />
        </div>
    </section>
  )
}

export default Restaurants;

import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Bikes from '../Bikes/Bikes';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Bikes></Bikes>
            <Footer></Footer>
        </div>
    );
};

export default Home;
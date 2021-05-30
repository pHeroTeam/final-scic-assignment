import React from 'react';
import Advertisement from './Advertisement/Advertisement';
import Banner from './Banner/Banner';
import ContactCard from './ContactCard/ContactCard';
import Menu from './Menu/Menu';
import Service from './Service/Service';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <Advertisement></Advertisement>
            <Service></Service>
            <Menu></Menu>
            <ContactCard></ContactCard>
        </div>
    );
};

export default HomePage;
import React from 'react';
import { Link } from 'react-router-dom';

const ContactCard = () => {
    return (
        <div className="container">
            <div className="p-5 m-5 bg-light shadow rounded text-center">
                <h2>Ask any queries!</h2>
                <button className="btn btn-outline-danger btn-lg p-2 m-5"><Link to="/contact" className="text-dark">Contact Us</Link></button>
            </div>
        </div>
    );
};

export default ContactCard;
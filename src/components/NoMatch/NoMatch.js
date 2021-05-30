import React from 'react';
import { FaHome } from "react-icons/fa";

const NoMatch = () => {
    return (
        <div className="container">
            <div className="bg-danger text-white p-5 m-5 shadow rounded text-center">
                <h1>404! Page not found!!! <span style={{ 'fontSize': '100px' }}>&#128532;</span></h1>
                <button className="btn btn-success btn-lg">Back to <FaHome /></button>
            </div>
        </div>
    );
};

export default NoMatch;
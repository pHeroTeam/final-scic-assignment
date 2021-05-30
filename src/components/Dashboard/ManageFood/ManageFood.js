import React from 'react';
import SideBar from '../SideBar/SideBar';
const ManageFood = () => {
    // get url =`http://localhost:4002//manageFoodShowUi`;
    return (
        <div className='row'>
            <div className="col-md-3">
                <SideBar></SideBar>
            </div>
            <div className="col-md-9">
                <h2 className='text-capitalize text-center'>manage all order</h2>
            </div>
        </div>
    );
};

export default ManageFood;
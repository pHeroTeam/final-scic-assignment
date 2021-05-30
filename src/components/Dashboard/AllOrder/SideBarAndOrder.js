import React from 'react';
import SideBar from '../SideBar/SideBar';
import AllOrder from './AllOrder';

const SideBarAndOrder = () => {
    return (
        <div className='row'>
            <div className="col-md-3">
                <SideBar></SideBar>
            </div>
            <div className="col-md-9">
                <AllOrder></AllOrder>
            </div>
        </div>
    );
};

export default SideBarAndOrder;
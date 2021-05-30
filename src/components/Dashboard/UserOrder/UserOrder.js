import React from 'react';
import SideBar from '../SideBar/SideBar';

const UserOrder = () => {
    
    // get http://localhost:4002/orderDetailShow?email='+loggedInUser.emai

    return (
        <div className='row mr-4'>
            <div className="col-md-3"><SideBar></SideBar></div>
            <div className="col-md-9">
                <h2 className='text-capitalize text-center pt-5 text-success pb-3'>your total order :length dynamic</h2>
            </div>
        </div>
    );
};

export default UserOrder;
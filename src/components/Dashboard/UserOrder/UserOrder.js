import React from 'react';
import SideBar from '../SideBar/SideBar';

const UserOrder = () => {
    
    // get   https://ancient-savannah-78897.herokuapp.com/orderDetailShow?email='+loggedInUser.emai

    return (
        <div className='row mr-4'>
            <div className="col-md-3"><SideBar></SideBar></div>
            <div className="col-md-9">
                <h2 className='text-capitalize text-center pt-5 text-success pb-3'>your total order :length dynamic</h2>
                <table className= "text-center table">
                    <thead>
                        <tr>
                            <th className="text-secondary m-2" scope="col">NAME</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className="text-secondary m-2">dynamic user name</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserOrder;
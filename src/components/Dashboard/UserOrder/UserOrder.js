import React, {useEffect, useContext, useState } from 'react';
import { UserContext } from '../../../App';
import SideBar from '../SideBar/SideBar';

const UserOrder = () => {

    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://ancient-savannah-78897.herokuapp.com/orderDetailShow?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setOrders(data));
    },[])
        
    
    // get   https://ancient-savannah-78897.herokuapp.com/orderDetailShow?email='+loggedInUser.emai

    return (
        <div className='row mr-4'>
            <div className="col-md-3"><SideBar></SideBar></div>
            <div className="col-md-9">
                <h2 className='text-capitalize text-center pt-5 text-success pb-3'>{orders.length}</h2>
                <table className= "text-center table">
                    <thead>
                        <tr>
                            <th className="text-secondary m-2" scope="col">FOOD NAME</th>
                            <th className="text-secondary m-2" scope="col">EMAIL</th>
                            <th className="text-secondary m-2" scope="col">PRICE</th>
                            <th className="text-secondary m-2" scope="col">DATE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) =>
                            <tr>
                                <td className="text-secondary m-2">{order.name}</td>
                                <td className="text-secondary m-2">{order.email}</td>
                                <td className="text-secondary m-2">{order.price}</td>
                                <td className="text-secondary m-2">{order.date}</td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserOrder;
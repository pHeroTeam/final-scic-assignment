import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';
const SideBar = () => {
   
    return (
            <div  className='listContainer   '>
                <div className=''>
                    <Link to='/allOrders'><p className=''> All Order</p></Link>
                    <Link to='/yourOrder'><p className='' >Your Order</p></Link>
                    <Link to='/addNewFoods'><p className=''>Add Food</p></Link>
                    <Link to='/manageFood'><p className=''> Manage Food</p></Link>
                    <Link to='/updateFood'><p className=''> Update Food Detail </p></Link>
                    <Link to='/review'><p className=''>  Review</p></Link>
                </div>
            </div>
    );
};

export default SideBar;
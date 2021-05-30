import React, { useEffect, useState } from 'react'
import SideBar from '../SideBar/SideBar';
import ManageFoodDetail from './ManageFoodDetail';

const ManageFood = () => {
    const [manageFood,setManageFood]=useState([]);
    useEffect(()=>{
        const url =`  https://ancient-savannah-78897.herokuapp.com/manageFoodShowUi`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setManageFood(data)
        })
    },[])
    return (
        <div className='row'>
            <div className="col-md-3">
                <SideBar></SideBar>
            </div>
            <div className="col-md-9">
                <h2 className='text-capitalize text-center'>manage all order</h2>
                <div className="row">
                    {
                        manageFood.map(manage=><ManageFoodDetail key={manage._id} manage={manage}></ManageFoodDetail>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageFood;
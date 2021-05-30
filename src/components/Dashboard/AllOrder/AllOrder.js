import React from 'react';
import SideBar from '../SideBar/SideBar';

const AllOrder = () => {
        //get url =`http://localhost:4002/showAllFoodAddClientSite`;
    return (
        <div className='row'>
            <div className="col-md-9">
                <h1 className='text-capitalize text-center text-success pt-5 pb-3'>User Order:length dynamic</h1>
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

export default AllOrder;
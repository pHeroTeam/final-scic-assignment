import React from 'react';

const ManageFoodDetail = (props) => {
    const {name,img,price,_id}=props.manage;
    const handleDelete=id=>{
        console.log(id);
        fetch(`  https://ancient-savannah-78897.herokuapp.com/delete/${id}`,{
            method:'DELETE',
        })
        .then(res=>res.json())
        .then(data=>console.log('delete success'))
    }
    return (
        <div className='col-md-4 text-center my-2'>
            <div  className='shadow py-3 pl-1'>
                <img style={{width:"50%",height:"100px"}} src={img} alt=""/>
                <h4>{name}</h4>
                <p>${price}</p>
                <button onClick={()=>handleDelete(_id)} className="btn btn-outline-danger">Delete</button>
            </div>
        </div>
    );
};

export default ManageFoodDetail;
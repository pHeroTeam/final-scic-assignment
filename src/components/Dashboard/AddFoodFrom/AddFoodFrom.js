import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import SideBar from '../SideBar/SideBar';
import './AddFoodFrom.css';

const AddFoodFrom = () => {

    // post url=http://localhost:4002/allFoodAdd
    const { register, handleSubmit, watch, errors } = useForm();
    const [imgUrl,setImgUrl]=useState(null);
    const onSubmit = data => console.log(data);

    const handleImgUpload=(e)=>{
            console.log(e.target.files[0]);
            const imgData=new FormData();
            imgData.set('key','1399ec9338663cdbb2d8142829f8c6d7');
            imgData.append('image',e.target.files[0]);
            axios.post('https://api.imgbb.com/1/upload', imgData)
            .then(function (response) {
                console.log(response);
                console.log(response.data.data.display_url);
                setImgUrl(response.data.data.display_url)
            })
            .catch(function (error) {
                console.log(error);
            });
        }

    return (
        <div className='row'>
            <div className="col-md-3">
                <SideBar></SideBar>
            </div>
            <div className="col-md-9">
            <h3 className='text-center'>Add New some Food Items </h3>
            <div className='formFieldContainer'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input name="name" type="text"  {...register('name',{ required: true })} required  placeholder='enter your food name' />
                    <input name='price' type='text'  {...register("price",{ required: true })} required   placeholder='enter your food price'/>
                    <input name="files" onChange={handleImgUpload} type='file'  required />
                    <input type="submit" />
                </form>
            </div>
            </div>
        </div>
    );
};

export default AddFoodFrom;
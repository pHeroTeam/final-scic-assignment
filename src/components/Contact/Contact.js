import React from 'react';
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';

const Contact = () => {

    
    const { register, watch, formState: { errors } } = useForm();
    

    console.log(watch("example"));

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_4ou0mzg', 'template_re478yi', e.target, 'user_KIQQZVIPZ3FUUdObsqJcH')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
    }

    return (
        <div style={{backgroundImage: `url("https://i.ibb.co/dj5mf7R/formBG-1.png")`}} className="py-3 pb-5" >
        <h3 className="text-center m-5 text-white">CONTACT US</h3>
        <div className="container">
            <form onSubmit={sendEmail}>
                <div className="row mx-auto">
                    <div className="col-8 mx-auto form-group">
                        <label className="text-white">Name</label>
                        <input {...register("name")} className="form-control" />
                    </div>
                    <div className="col-8 mx-auto form-group">
                        <label className="text-white">Email</label>
                        <input {...register("email", { required: true })} className="form-control"/>
                    </div>
                    <div className="col-8 mx-auto form-group">
                        <label className="text-white">Message</label>
                        <textarea className="form-control" id="" cols="30" rows="8" {...register("message")}/>
                    </div>
                    {errors.exampleRequired && <span>This field is required</span>}
                    <div className="col-8 mx-auto form-group text-center">
                        <input type="submit" value="Send Message" className="btn btn-warning text-white" style={{backgroundColor:'#F5B041', borderColor:'#F5B041'}} />
                    </div>
                    
                </div>
            </form>
        </div>
    </div>
    );
};

export default Contact;
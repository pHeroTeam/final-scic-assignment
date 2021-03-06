import React, { useContext, useState } from "react";
import { enGB } from 'date-fns/locale'
import { DatePicker } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { UserContext } from "../../App";

const Checkout = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const { name, price } = useParams();
    const [date, setDate] = useState();
    const handleReset = () => {
        setDate(new Date())
    }
    console.log(name, price, date);

    const handleOrder = () => {
        const successOrder = { ...loggedInUser, date, name, price};
        fetch('https://ancient-savannah-78897.herokuapp.com/allSuccessOrders',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(successOrder)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
    return (
        <div>
            <Container>
                <h2 className="text-center text-success p-3 shadow bg-warning rounded my-5">You have selected {name} and the price is {price}.</h2>
                <h3 className="text-center p-3 my-5">Please select a date below:</h3>
                <div className="text-center bg-light shadow rounded p-5 m-5">
                <button onClick={handleReset} className="btn btn-info m-2">Set today</button>
                <DatePicker date={date} onDateChange={setDate} locale={enGB}>
                {({ inputProps, focused }) => (
                    <input
                    className={'input' + (focused ? ' -focused' : '')}
                    {...inputProps}
                    />
                )}
                </DatePicker>
                <button className="btn btn-success my-5" onClick={handleOrder}>Order Now</button>
                </div>
            </Container>
            
        </div>
    );
};

export default Checkout;
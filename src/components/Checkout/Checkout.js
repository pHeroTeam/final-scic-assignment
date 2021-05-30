import React, { useState } from "react";
import { enGB } from 'date-fns/locale'
import { DatePicker } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const { name, price } = useParams();
    const [date, setDate] = useState()
    console.log(name, price, date)
    return (
        <div>
            <Container>
                <h2 className="text-center text-success p-3 shadow bg-warning rounded my-5">You have selected {name} and the price is {price}.</h2>
                <h3 className="text-center p-3 my-5">Please select a date below:</h3>
                <div className="text-center bg-light shadow rounded p-5 m-5">
                <DatePicker date={date} onDateChange={setDate} locale={enGB}>
                {({ inputProps, focused }) => (
                    <input
                    className={'input' + (focused ? ' -focused' : '')}
                    {...inputProps}
                    />
                )}
                </DatePicker>
                <button className="btn btn-success my-5">Order Now</button>
                </div>
            </Container>
            
        </div>
    );
};

export default Checkout;
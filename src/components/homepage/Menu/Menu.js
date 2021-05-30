import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Menu.css'
import food001 from '../../../images/food001.jpg'
import { useHistory } from 'react-router-dom';

const menu = [
    {
        name: 'Food 001',
        image: food001,
        price: 100
    },
    {
        name: 'Food 002',
        image: food001,
        price: 200
    },
    {
        name: 'Food 003',
        image: food001,
        price: 300
    },
    {
        name: 'Food 004',
        image: food001,
        price: 400
    }
]

const Menu = () => {

    const history = useHistory();
    const handleBuy = (name, price) => {
        history.push(`/checkout/${name}/${price}`);
    }
    return (
        <Container>
            <h2 className="text-center bg-light p-5 shadow mb-5">Our Tasty Food Menu</h2>
            <Row>
                {
                    menu.map((food, index) =>
                        <Col md={4} lg={4} sm={6} xs={12} className="mb-5" key={ index}>
                            <div className="card-custom">
                                <img src={ food.image} alt="Person" className="card__image" />
                                <p className="card__name">{ food.name}</p>
                                <p className="text-center">Price: { food.price}BDT</p>
                                <button className="btn-custom draw-border rounded" onClick={() => handleBuy(food.name, food.price)}>Book</button>
                            </div>
                        </Col>
                        )
                }
                
            </Row>
        </Container>
    );
};

export default Menu;
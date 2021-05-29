import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Menu.css'
import food001 from '../../../images/food001.jpg'

const menu = [
    {
        name: 'Food 001',
        image: food001
    },
    {
        name: 'Food 002',
        image: food001
    },
    {
        name: 'Food 003',
        image: food001
    },
    {
        name: 'Food 004',
        image: food001
    }
]

const Menu = () => {
    return (
        <Container>
            <h2 className="text-center bg-light p-5 shadow mb-5">Our Tasty Food Menu</h2>
            <Row>
                {
                    menu.map(food =>
                        <Col md={4} lg={4} sm={6} xs={12} className="mb-5">
                            <div className="card-custom">
                                <img src={ food.image} alt="Person" className="card__image" />
                                <p className="card__name">{ food.name}</p>
                                <button className="btn-custom draw-border rounded">Book</button>
                            </div>
                        </Col>
                        )
                }
                
            </Row>
        </Container>
    );
};

export default Menu;
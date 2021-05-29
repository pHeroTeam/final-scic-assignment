import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Service.css'
import { FaMoneyCheckAlt } from "react-icons/fa";
import { FaBiking } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";

const Service = () => {
    return (
        <div className="service mt-5 mb-5">
            <Container>
                <Row>
                    <Col md={4} lg={4} sm={6} xs={12} className="text-center">
                        <FaMoneyCheckAlt  className="text-white icon-font"/>   <span className="icon-text">Free Shipping</span>
                    </Col>
                    <Col md={4} lg={4} sm={6} xs={12} className="text-center">
                        <FaBiking  className="text-white icon-font"/>   <span className="icon-text">24x7 delivery</span>
                    </Col>
                    <Col md={4} lg={4} sm={6} xs={12} className="text-center">
                        <FaHandsHelping  className="text-white icon-font"/>   <span className="icon-text">Trustworthy</span>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Service;
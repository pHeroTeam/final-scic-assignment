import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ad001 from '../../../images/fakeAd01.jpg'
import ad002 from '../../../images/fakeAd02.jpg'
import ad003 from '../../../images/fakeAd03.jpg'
import './Advertisement.css'

const Advertisement = () => {
    return (
        <Container className="mt-5 mb-5">
            <Row>
                <Col md={4} lg={4} sm={6} xs={12}>
                    <img src={ ad001} alt="" className="img-fluid adImage rounded shadow"/>
                </Col>
                <Col md={4} lg={4} sm={6} xs={12}>
                <img src={ ad002} alt="" className="img-fluid adImage rounded shadow"/>
                </Col>
                <Col md={4} lg={4} sm={6} xs={12}>
                <img src={ ad003} alt="" className="img-fluid adImage rounded shadow"/>
                </Col>

            </Row>
        </Container>
    );
};

export default Advertisement;
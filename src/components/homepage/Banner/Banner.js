import { Carousel, Row } from 'react-bootstrap';
import React from 'react';
import banner001 from '../../../images/banner001.jpg'
import banner002 from '../../../images/banner002.jpg'
import banner003 from '../../../images/banner003.jpg'
import banner004 from '../../../images/banner001.jpg'
import './Banner.css'

const bannerData = [
    {
        image: banner001,
        title: 'This is banner001',
        subTitle: 'this is food banner 001'
    },
    {
        image: banner002,
        title: 'This is banner002',
        subTitle: 'this is food banner 002'
    },
    {
        image: banner003,
        title: 'This is banner003',
        subTitle: 'this is food banner 003'
    },
    {
        image: banner004,
        title: 'This is banner004',
        subTitle: 'this is food banner 004'
    }
]

const Banner = () => {
    return (
        <Carousel>

            {
                bannerData.map(banner => 
                
                    <Carousel.Item>
                        <Row>
                            <div className="col-md-5 textBg col-sm-12 col-12 col-lg-5">
                        <Carousel.Caption>
                            <h3 className="bannerTitle">{ banner.title}</h3>
                            <p className="bannerSubTitle">{ banner.subTitle}</p>
                        </Carousel.Caption>
                        </div>
                        <div className="col-md-7 col-sm-12 col-12 col-lg-7">
                            <img
                                className="d-block w-100"
                                src={banner.image}
                                alt={ banner.title}
                            />
                        </div>
                    </Row>
                    </Carousel.Item>
                    )
            }
            
        </Carousel>
    );
};

export default Banner;
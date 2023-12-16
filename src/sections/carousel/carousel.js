import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import { Row, Col } from 'react-bootstrap';

import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  

import './css/carousel.css';

import CarouselImage1 from '../resources/CAROUSEL_1.png';
import CarouselImage2 from '../resources/CAROUSEL_2.jpg';
import CarouselImage3 from '../resources/CAROUSEL_3.jpg';
import CarouselImage4 from '../resources/CAROUSEL_4.jpg';
import CarouselImage5 from '../resources/CAROUSEL_5.jpg';
import CarouselImage6 from '../resources/CAROUSEL_6.jpg';

export default function Carousel() {
    return (
        <React.Fragment>
            <OwlCarousel items={1} className='owl-theme carousel-margin' loop nav={false} margin={0} autoPlay>
                <div className='item'>
                    <div className='div-carousel-filter-banner'>
                        <img className='img-carousel' src={CarouselImage1}/>
                    </div>
                    <div className='div-carousel-content'>
                        <Row>
                            <Col lg={7} md={7} sm={12}>
                                <h2 className='h2-carousel-content-sub-title'>
                                    Learn investing basics through Earnest
                                </h2>
                                <p className='p-carousel-content'>
                                    Our improved lessons make it easier for you to get the knowledge you need.
                                </p>
                                <div className='div-carousel-content-button'>
                                    &nbsp;Start Learning&nbsp;
                                </div>
                            </Col>
                            <Col lg={3} md={3}></Col>
                            <Col lg={2} md={2}></Col>
                        </Row>
                    </div>
                </div>
                <div className='item'>
                    <div className='div-carousel-filter-banner'>
                        <img className='img-carousel' src={CarouselImage2}/>
                    </div>
                    <div className='div-carousel-content'>
                        <Row>
                            <Col lg={7} md={7} sm={12}>
                                <div className='div-carousel-content-title'>
                                    MONEY MYTHS
                                </div>
                                <h2 className='h2-carousel-content-sub-title'>
                                    "You should wait until after the holidays to shop."
                                </h2>
                                <p className='p-carousel-content'>
                                    Waiting before spending has benefits, but these aren't always present.
                                </p>
                                <div className='div-carousel-content-button'>
                                    &nbsp;Read More&nbsp;
                                </div>
                            </Col>
                            <Col lg={3} md={3}></Col>
                            <Col lg={2} md={2}></Col>
                        </Row>
                    </div>
                </div>
                <div>
                    <div className='div-carousel-filter-banner'>
                        <img className='img-carousel' src={CarouselImage3}/>
                    </div>
                    <div className='div-carousel-content'>
                        <Row>
                            <Col lg={7} md={7} sm={12}>
                                <div className='div-carousel-content-title'>
                                    HOW TO'S
                                </div>
                                <h2 className='h2-carousel-content-sub-title'>
                                    How to maximize your time deposits through laddering
                                </h2>
                                <p className='p-carousel-content'>
                                    Here’s how to apply this strategy for added flexibility to your time deposits.
                                </p>
                                <div className='div-carousel-content-button'>
                                    &nbsp;Read More&nbsp;
                                </div>
                            </Col>
                            <Col lg={3} md={3}></Col>
                            <Col lg={2} md={2}></Col>
                        </Row>
                    </div>
                </div>
                <div>
                    <div className='div-carousel-filter-banner'>
                        <img className='img-carousel' src={CarouselImage4}/>
                    </div>
                    <div className='div-carousel-content'>
                        <Row>
                            <Col lg={7} md={7} sm={12}>
                                <div className='div-carousel-content-title'>
                                    EXPLAINERS
                                </div>
                                <h2 className='h2-carousel-content-sub-title'>
                                    How much money do you need for financial independence?
                                </h2>
                                <p className='p-carousel-content'>
                                    It can help to have a target number when working towards a money goal.
                                </p>
                                <div className='div-carousel-content-button'>
                                    &nbsp;Read More&nbsp;
                                </div>
                            </Col>
                            <Col lg={3} md={3}></Col>
                            <Col lg={2} md={2}></Col>
                        </Row>
                    </div>
                </div>
                <div>
                    <div className='div-carousel-filter-banner'>
                        <img className='img-carousel' src={CarouselImage5}/>
                    </div>
                    <div className='div-carousel-content'>
                        <Row>
                            <Col lg={7} md={7} sm={12}>
                                <div className='div-carousel-content-title'>
                                    HOW TO'S
                                </div>
                                <h2 className='h2-carousel-content-sub-title'>
                                    Top tips for investing in time deposits
                                </h2>
                                <p className='p-carousel-content'>
                                    These may help increase your chances of having a good experience with these investments.
                                </p>
                                <div className='div-carousel-content-button'>
                                    &nbsp;Read More&nbsp;
                                </div>
                            </Col>
                            <Col lg={3} md={3}></Col>
                            <Col lg={2} md={2}></Col>
                        </Row>
                    </div>
                </div>
                <div>
                    <div className='div-carousel-filter-banner'>
                        <img className='img-carousel' src={CarouselImage6}/>
                    </div>
                    <div className='div-carousel-content'>
                        <Row>
                            <Col lg={7} md={7} sm={12}>
                                <div className='div-carousel-content-title'>
                                    EXPLAINERS
                                </div>
                                <h2 className='h2-carousel-content-sub-title'>
                                    What are time deposits?
                                </h2>
                                <p className='p-carousel-content'>
                                    These investment products require you to keep your money in for a specified duration.
                                </p>
                                <div className='div-carousel-content-button'>
                                    &nbsp;Read More&nbsp;
                                </div>
                            </Col>
                            <Col lg={3} md={3}></Col>
                            <Col lg={2} md={2}></Col>
                        </Row>
                    </div>
                </div>
            </OwlCarousel>
        </React.Fragment>
    )
}
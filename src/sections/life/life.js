import React from "react";
import { Button, Container, Col, Row } from "react-bootstrap";

import '../tools/css/tools.css';
import '../basics/css/basics.css';
import './css/life.css';

import LIFE_1 from '../resources/LIFE_1.jpg';
import LIFE_3 from '../resources/LIFE_3.jpg';

export default function Life() {
    const onCardTitleClick =(link) => { window.location.href = link }
    const onViewMoreClick =() => {
        window.location.href = "https://earnest.ph/invest/topic/life"
    }
    return (
        <React.Fragment>
            <Container className="section-auto-padder">
                <Row className='row-tools-title'>
                    <Col lg={12} md={12} sm={12}>
                        <div className='div-tools-title'>
                            <a className='a-tools-title' href='https://earnest.ph/invest/topic/life'>Life</a>
                        </div>
                        <p className='p-tools-description'>
                            Discover the different aspects of money and investing
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={2}></Col>
                    <Col lg={8} md={12} sm={12}>
                        <Row className='row-tools'>
                            <Col lg={5} md={5} sm={12} className='div-tools-img'>
                                <img alt={LIFE_3} className='img-life' src={LIFE_3}/>
                            </Col>
                            <Col lg={7} md={7} sm={12}>
                                <div className='div-tools-card-description'>
                                    <p className='p-small-tools-title'>HOW TO'S</p>
                                    <h2 className='h2-tools-title' onClick={() => onCardTitleClick('https://earnest.ph/invest/life/money-must-dos-before-the-year-ends')}>Money must-dos before the year ends</h2>
                                    <p className='p-tools-card-description'>
                                        These 3 tips can help you get a good start on healthy finances in the coming year.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={2}></Col>
                </Row>
                <Row style={{ marginTop: '50px' }}>
                    <Col lg={2}></Col>
                    <Col lg={8} md={12} sm={12}>
                        <Row>
                            <Col lg={6} md={6} sm={12} className="col-life col-life-left">
                                <div className="div-basics-content">
                                    <img alt={LIFE_1} className='img-basics' src={LIFE_1}/>
                                    <div className='div-tools-card-description'>
                                        <p className='p-small-tools-title'>DIGESTS</p>
                                        <h2 className='h2-tools-title' onClick={() => onCardTitleClick('https://earnest.ph/invest/life/in-the-know-december-15-2023')}>In the Know - December 12, 2023</h2>
                                        <p className='p-tools-card-description'>
                                            US stocks indices didn’t move much, the DA expects farm output to grow, and PH FDI fell.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} md={6} sm={12} className="col-life col-life-right">
                                <div className="div-basics-content">
                                    <img alt={LIFE_1} className='img-basics' src={LIFE_1}/>
                                    <div className='div-tools-card-description'>
                                        <p className='p-small-tools-title'>DIGESTS</p>
                                        <h2 className='h2-tools-title' onClick={() => onCardTitleClick('https://earnest.ph/invest/life/in-the-know-december-12-2023')}>In the Know - December 5, 2023</h2>
                                        <p className='p-tools-card-description'>
                                            US stocks dropped amid attacks on the Red Sea, PH November inflation eases to 4.1%.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={2}></Col>
                </Row>
                <Button variant="outline-secondary" size="lg" className="btn-life-view-more" onClick={onViewMoreClick}>
                    View More
                </Button>
            </Container>
        </React.Fragment>
    )
}
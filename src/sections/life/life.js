import React from "react";
import { Button, Container, Col, Row } from "react-bootstrap";

import '../tools/css/tools.css';
import '../basics/css/basics.css';

import LIFE_1 from '../resources/LIFE_1.jpg';
import LIFE_2 from '../resources/LIFE_2.jpg';

export default function Life() {
    const onViewMoreClick =() => {
        window.location.href = "https://earnest.ph/invest/topic/life"
    }
    return (
        <React.Fragment>
            <Container>
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
                                <img alt={LIFE_1} className='img-tools' src={LIFE_1}/>
                            </Col>
                            <Col lg={7} md={7} sm={12}>
                                <div className='div-tools-card-description'>
                                    <p className='p-small-tools-title'>DIGESTS</p>
                                    <h2 className='h2-tools-title'>In the Know - December 12, 2023</h2>
                                    <p className='p-tools-card-description'>
                                        US stocks indices didn’t move much, the DA expects farm output to grow, and PH FDI fell.
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
                            <Col lg={6} md={6} sm={12} className="col-basics col-basics-left">
                                <div className="div-basics-content">
                                    <img alt={LIFE_2} className='img-basics' src={LIFE_1}/>
                                    <div className='div-tools-card-description'>
                                        <p className='p-small-tools-title'>DIGESTS</p>
                                        <h2 className='h2-tools-title'>In the Know - December 5, 2023</h2>
                                        <p className='p-tools-card-description'>
                                            US stocks dropped amid attacks on the Red Sea, PH November inflation eases to 4.1%.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} md={6} sm={12} className="col-basics col-basics-right">
                                <div className="div-basics-content">
                                    <img alt={LIFE_2} className='img-basics' src={LIFE_2}/>
                                    <div className='div-tools-card-description'>
                                        <p className='p-small-tools-title'>HOW TO'S</p>
                                        <h2 className='h2-tools-title'>What do you need before you invest?</h2>
                                        <p className='p-tools-card-description'>
                                            Here's a checklist of things to prepare before making your first investment.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={2}></Col>
                </Row>
                <Button variant="outline-secondary" size="lg" className="btn-basics-view-more" onClick={onViewMoreClick}>
                    View More
                </Button>
            </Container>
        </React.Fragment>
    )
}
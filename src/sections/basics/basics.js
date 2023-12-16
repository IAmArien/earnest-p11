import React from "react";
import { Button, Col, Container, Row } from 'react-bootstrap';

import '../tools/css/tools.css';
import './css/basics.css';

import BASICS_1 from '../resources/BASICS_1.jpg';
import BASICS_2 from '../resources/BASICS_2.jpg';
import BASICS_3 from '../resources/BASICS_3.jpg';

export default function Basics() {
    const onViewMoreClick =() => {
        window.location.href = "https://earnest.ph/invest/topic/basics"
    }
    return (
        <React.Fragment>
            <Container className="section-auto-padder">
                <Row className='row-tools-title'>
                    <Col lg={12} md={12} sm={12}>
                        <div className='div-tools-title'>
                            <a className='a-tools-title' href='https://earnest.ph/invest/topic/basics'>Basics</a>
                        </div>
                        <p className='p-tools-description'>
                            Find essential knowledge for your investing journey
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={2}></Col>
                    <Col lg={8} md={12} sm={12}>
                        <Row className='row-tools'>
                            <Col lg={5} md={5} sm={12} className='div-tools-img'>
                                <img alt={BASICS_1} className='img-basics-top' src={BASICS_1}/>
                            </Col>
                            <Col lg={7} md={7} sm={12}>
                                <div className='div-tools-card-description'>
                                    <p className='p-small-tools-title'>DICTIONARY</p>
                                    <h2 className='h2-tools-title'>Principal</h2>
                                    <p className='p-tools-card-description'>
                                        This amount will influence how much you’ll pay on a loan or earn from an investment.
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
                                    <img alt={BASICS_2} className='img-basics' src={BASICS_2}/>
                                    <div className='div-tools-card-description'>
                                        <p className='p-small-tools-title'>EXPLAINERS</p>
                                        <h2 className='h2-tools-title'>Setting money goals for 2024? Know these 2 mindsets to stay motivated</h2>
                                        <p className='p-tools-card-description'>
                                            You may be influenced by these 2 mindsets when working toward goals.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} md={6} sm={12} className="col-basics col-basics-right">
                                <div className="div-basics-content">
                                    <img alt={BASICS_3} className='img-basics' src={BASICS_3}/>
                                    <div className='div-tools-card-description'>
                                        <p className='p-small-tools-title'>DICTIONARY</p>
                                        <h2 className='h2-tools-title'>Hedging</h2>
                                        <p className='p-tools-card-description'>
                                            This is a way to offset potential losses while investing.
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
                <div className='div-line-break-basics'></div>
            </Container>
        </React.Fragment>
    )
}
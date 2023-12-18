import React from "react";
import { Button, Col, Container, Row } from 'react-bootstrap';

import '../tools/css/tools.css';
import './css/basics.css';

import BASICS_1 from '../resources/BASICS_1.jpg';
import BASICS_4 from '../resources/BASICS_4.jpg';
import BASICS_5 from '../resources/BASICS_5.jpg';

export default function Basics() {
    const onCardTitleClick =(link) => { window.location.href = link }
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
                                <img alt={BASICS_4} className='img-basics-top' src={BASICS_4}/>
                            </Col>
                            <Col lg={7} md={7} sm={12}>
                                <div className='div-tools-card-description'>
                                    <p className='p-small-tools-title'>MONEY MYTHS</p>
                                    <h2 className='h2-tools-title' onClick={() => onCardTitleClick('https://earnest.ph/invest/basics/actively-traded-stocks-are-easier-to-buy-and-sell')}>“Actively-traded stocks are easier to buy and sell.”</h2>
                                    <p className='p-tools-card-description'>
                                        These shares have many buyers and sellers, and so it can be easy to transact with them.
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
                                    <img alt={BASICS_5} className='img-basics' src={BASICS_5}/>
                                    <div className='div-tools-card-description'>
                                        <p className='p-small-tools-title'>DICTIONARY</p>
                                        <h2 className='h2-tools-title' onClick={() => onCardTitleClick('https://earnest.ph/invest/basics/active-stocks')}>Active Stocks</h2>
                                        <p className='p-tools-card-description'>
                                            These shares have a lot of transactions and a price that moves a lot within a day.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} md={6} sm={12} className="col-basics col-basics-right">
                                <div className="div-basics-content">
                                    <img alt={BASICS_1} className='img-basics' src={BASICS_1}/>
                                    <div className='div-tools-card-description'>
                                        <p className='p-small-tools-title'>DICTIONARY</p>
                                        <h2 className='h2-tools-title' onClick={() => onCardTitleClick('https://earnest.ph/invest/basics/principal')}>Principal</h2>
                                        <p className='p-tools-card-description'>
                                            This amount will influence how much you’ll pay on a loan or earn from an investment.
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
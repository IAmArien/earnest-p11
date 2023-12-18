import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import './css/tools.css';

import TOOLS_1 from '../resources/TOOLS_1.png';
import TOOLS_2 from '../resources/TOOLS_2.jpg';

export default function Tools() {
    const onCardTitleClick =(link) => { window.location.href = link }
    return (
        <React.Fragment>
            <Container className='section-auto-padder'>
                <Row className='row-tools-title'>
                    <Col lg={12} md={12} sm={12}>
                        <div className='div-tools-title'>
                            <a className='a-tools-title' href='https://earnest.ph/invest/topic/tools'>Tools</a>
                        </div>
                        <p className='p-tools-description'>
                            We’ve got you covered for your first step into the exciting world of investing with<br/>these helpful tools.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={2}></Col>
                    <Col lg={8} md={12} sm={12}>
                        <Row className='row-tools'>
                            <Col lg={5} md={5} sm={12} className='div-tools-img'>
                                <img className='img-tools' src={TOOLS_1}/>
                            </Col>
                            <Col lg={7} md={7} sm={12}>
                                <div className='div-tools-card-description'>
                                    <p className='p-small-tools-title'>APPS</p>
                                    <h2 className='h2-tools-title' onClick={() => onCardTitleClick('https://earnest.ph/invest/tools/earnest')}>Earnest</h2>
                                    <p className='p-tools-card-description'>
                                        Ready to take the first step? Download the Earnest app and begin investing with ease.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={2}></Col>
                </Row>
                <Row style={{ marginTop: '30px' }}>
                    <Col lg={2}></Col>
                    <Col lg={8} md={12} sm={12}>
                        <Row className='row-tools'>
                            <Col lg={5} md={5} sm={12} className='div-tools-img'>
                                <img className='img-tools' src={TOOLS_2} width={'100%'}/>
                            </Col>
                            <Col lg={7} md={7} sm={12}>
                                <div className='div-tools-card-description'>
                                    <p className='p-small-tools-title'>TOOLS</p>
                                    <h2 className='h2-tools-title' onClick={() => onCardTitleClick('https://earnest.ph/invest/financial-readiness-test')}>Financial Readiness Test</h2>
                                    <p className='p-tools-card-description'>
                                        Answer these questions to find out how well you manage your money and if you're ready to start investing.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={2}></Col>
                </Row>
                <div className='div-line-break-tools'></div>
            </Container>
        </React.Fragment>
    )
}
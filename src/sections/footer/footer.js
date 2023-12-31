import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { Col, Container, Row } from "react-bootstrap";

import './css/footer.css';

export default function Footer() {
    return (
        <React.Fragment>
            <Container>
                <div className="div-footer-wrapper">
                    <Row>
                        <Col lg={4} md={4} sm={12}>
                            <div className="div-subscribe-field">
                                <h2 className="h2-subscribe-footer">Subscribe to Earnest updates</h2>
                                <div className="div-subscribe-input">
                                    <input className="input-subscribe-email" type="email" placeholder="Your email address" />
                                    <FontAwesomeIcon className="faIconSubscribeFooter" icon={faArrowRight} />
                                </div>
                                <p className="p-all-rights-reserved">2019 All Rights Reserved</p>
                            </div>
                        </Col>
                        <Col lg={8} md={8} sm={12}>
                            <div className="div-footer-nav-menus">
                                <div className="div-footer-nav-logo">
                                    <div className="div-earnest-logo-footer">
                                        <img alt="earnest-logo" className="img-earnest-footer-logo" src="https://earnest.ph/invest/data/photos/earnest-logo.svg" />
                                        <img alt="earnest-spacer" src="data:image/webp;base64,UklGRkoAAABXRUJQVlA4TD4AAAAvGwAKEB8gJCBTqm4YsWCK9+aZkIBQ/R9gjV8CAUKCDP8jlgKw7DOH2UgydmhM/235lDii/xOAEt8xaZ/VAA==" />
                                        <img alt="metrobank-logo" className="img-metrobank-footer-logo" src="https://earnest.ph/invest/data/photos/metrobank-footer.svg" />
                                    </div>
                                    <div>
                                        <img alt="facebook-logo" src="https://earnest.ph/invest/data/uploads/2020/08/facebook-icon.png" />
                                    </div>
                                </div>
                                <div id="footerNavMenuContainer" className="div-footer-nav-menu">
                                    <ul className="ul-footer-nav-menu">
                                        <li className="li-footer-nav-item">
                                            <a className="a-footer-nav-item" href="https://earnest.ph/invest/about">About</a>
                                            <div className='footer-hover inactive'></div>
                                        </li>
                                        <li className="li-footer-nav-item">
                                            <a className="a-footer-nav-item" href="https://earnest.ph/invest/faqs">FAQs</a>
                                            <div className='footer-hover inactive'></div>
                                        </li>
                                        <li className="li-footer-nav-item">
                                            <a className="a-footer-nav-item" href="https://earnest.ph/invest/terms-and-conditions">Terms and Conditions</a>
                                            <div className='footer-hover inactive'></div>
                                        </li>
                                        <li className="li-footer-nav-item">
                                            <a className="a-footer-nav-item" href="https://earnest.ph/invest/disclaimer">Disclaimer</a>
                                            <div className='footer-hover inactive'></div>
                                        </li>
                                        <li className="li-footer-nav-item">
                                            <a className="a-footer-nav-item" href="https://earnest.ph/invest/privacy-policy">Privacy Policy</a>
                                            <div className='footer-hover inactive'></div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </React.Fragment>
    )
}
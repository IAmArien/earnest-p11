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
                                        <img className="img-earnest-footer-logo" src="https://earnest.ph/invest/data/photos/earnest-logo.svg" />
                                        <img src="data:image/webp;base64,UklGRkoAAABXRUJQVlA4TD4AAAAvGwAKEB8gJCBTqm4YsWCK9+aZkIBQ/R9gjV8CAUKCDP8jlgKw7DOH2UgydmhM/235lDii/xOAEt8xaZ/VAA==" />
                                        <img className="img-metrobank-footer-logo" src="https://earnest.ph/invest/data/photos/metrobank-footer.svg" />
                                    </div>
                                    <div>
                                        <img src="https://earnest.ph/invest/data/uploads/2020/08/facebook-icon.png" />
                                    </div>
                                </div>
                                <div className="div-footer-nav-menu">
                                    <ul className="ul-footer-nav-menu">
                                        <li className="li-footer-nav-item">About</li>
                                        <li className="li-footer-nav-item">FAQs</li>
                                        <li className="li-footer-nav-item">Terms and Conditions</li>
                                        <li className="li-footer-nav-item">Disclaimer</li>
                                        <li className="li-footer-nav-item">Privacy Policy</li>
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
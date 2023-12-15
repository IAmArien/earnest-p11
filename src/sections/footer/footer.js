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

                        </Col>
                    </Row>
                </div>
            </Container>
        </React.Fragment>
    )
}
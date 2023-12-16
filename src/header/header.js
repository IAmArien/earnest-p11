import React from 'react';
import { Container, Image, Navbar, Nav, Button } from 'react-bootstrap';

import './css/header.css';

export default function Header() {
    return (
        <React.Fragment>
            <Navbar expand='lg' fixed='top' className='justify-content-between nav-bg-light nav-header-container'>
                <Container>
                    <Navbar.Brand href='./'>
                        <Image className='img-nav-logo' src='https://earnest.ph/invest/data/photos/earnest-logo.svg'/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='nav-menu-items'>
                            <Nav.Item>
                                <Nav.Link id='homeNav' className='auto-padder' href="./" active={true}>Home</Nav.Link>
                                <div className='nav-hover active'></div>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link id='lessonsNav' className='auto-padder' href="https://earnest.ph/invest/learn">Lessons</Nav.Link>
                                <div className='nav-hover inactive'></div>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link id='basicsNav' className='auto-padder' href='https://earnest.ph/invest/topic/basics'>
                                    <Nav.Item>Basics</Nav.Item>
                                    <div className='div-basics-extra-menu'>
                                        <Nav.Item className='nav-basics-items' id='nav-items'>
                                            <Nav.Link className='nav-basics-item' href='https://earnest.ph/invest/topic/basics?section=explainers'>Explainers</Nav.Link>
                                            <Nav.Link className='nav-basics-item' href='https://earnest.ph/invest/topic/basics?section=dictionary'>Dictionary</Nav.Link>
                                            <Nav.Link className='nav-basics-item' href='https://earnest.ph/invest/topic/basics?section=money-myths'>Money Myths</Nav.Link>
                                        </Nav.Item>
                                    </div>
                                </Nav.Link>
                                <div className='nav-hover inactive'></div>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link id='lifeNav' className='auto-padder' href="https://earnest.ph/invest/topic/life">
                                    <Nav.Item>Life</Nav.Item>
                                    <div className='div-life-extra-menu'>
                                        <Nav.Item className='nav-life-items' id='nav-items'>
                                            <Nav.Link className='nav-life-item' href='https://earnest.ph/invest/topic/life?section=stories'>Stories</Nav.Link>
                                            <Nav.Link className='nav-life-item' href='https://earnest.ph/invest/topic/life?section=how-tos'>How To's</Nav.Link>
                                            <Nav.Link className='nav-life-item' href='https://earnest.ph/invest/topic/life?section=digests'>Digests</Nav.Link>
                                        </Nav.Item>
                                    </div>
                                </Nav.Link>
                                <div className='nav-hover inactive'></div>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link id='toolsNav' className='auto-padder' href="https://earnest.ph/invest/topic/tools">Tools</Nav.Link>
                                <div className='nav-hover inactive'></div>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                    <div style={{ height: '100%' }}>
                        <Nav.Link className='pull-left' href="https://technet.azure-api.net/public/v1/authentication/login?client_id=5fcfb64b-a29d-4845-98f0-ed75200b9f2c&amp;redirect_uri=https://earnest.ph/invest/callback&amp;response_type=CODE&amp;scope=offline_access">
                            <Button className='btn-login-signup' variant='primary' size='md'>Login/Sign up</Button>
                        </Nav.Link>
                        <Nav.Item className='pull-right nav-item-search-icon'>
                            <Image className='img-nav-search' src='https://earnest.ph/invest/data/photos/search_dark.svg' />
                        </Nav.Item>
                    </div>
                </Container>
            </Navbar>
        </React.Fragment>
    )
}

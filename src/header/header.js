import React from 'react'
import { Container, Image, Navbar, Nav, NavDropdown, Button } from 'react-bootstrap'
import './css/header.css'

export default function Header() {
    return (
        <React.Fragment>
            <Navbar expand='lg' className='justify-content-between nav-bg-light nav-header-container'>
                <Container>
                    <Navbar.Brand href='./'>
                        <Image className='img-nav-logo' src='https://earnest.ph/invest/data/photos/earnest-logo.svg'/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='nav-menu-items'>
                            <Nav.Item>
                                <Nav.Link id='homeNav' className='auto-padder' href="#home" active={true}>Home</Nav.Link>
                                <div className='nav-hover active'></div>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link id='lessonsNav' className='auto-padder' href="#lessons">Lessons</Nav.Link>
                                <div className='nav-hover inactive'></div>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link id='basicsNav' className='auto-padder' href="#basics">Basics</Nav.Link>
                                <div className='nav-hover inactive'></div>
                                <NavDropdown className='auto-padder' id="basicNavDropdown">
                                    <NavDropdown.Item href="#explainers">Explainers</NavDropdown.Item>
                                    <NavDropdown.Item href="#dictionary">Dictionary</NavDropdown.Item>
                                    <NavDropdown.Item href="#moneymyths">Money Myths</NavDropdown.Item>
                                </NavDropdown>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link id='lifeNav' className='auto-padder' href="#life">Life</Nav.Link>
                                <div className='nav-hover inactive'></div>
                                {/* <NavDropdown className='auto-padder' id="lifeNavDropdown">
                                    <NavDropdown.Item href="#stories">Stories</NavDropdown.Item>
                                    <NavDropdown.Item href="#howtos">How To's</NavDropdown.Item>
                                    <NavDropdown.Item href="#digests">Digests</NavDropdown.Item>
                                </NavDropdown> */}
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link id='toolsNav' className='auto-padder' href="#tools">Tools</Nav.Link>
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

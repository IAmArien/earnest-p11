import React from 'react'
import { Container, Image, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import './css/header.css'

export default function Header() {
    return (
        <React.Fragment>
            <Navbar expand='lg' className='justify-content-between bg-light'>
                <Container>
                    <Navbar.Brand href='./'>
                        <Image className='img-nav-logo' src='https://earnest.ph/invest/data/photos/earnest-logo.svg'/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home" active={true}>Home</Nav.Link>
                            <Nav.Link href="#lessons">Lessons</Nav.Link>
                            <NavDropdown title="Basics" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#explainers">Explainers</NavDropdown.Item>
                                <NavDropdown.Item href="#dictionary">Dictionary</NavDropdown.Item>
                                <NavDropdown.Item href="#moneymyths">Money Myths</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Life" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#stories">Stories</NavDropdown.Item>
                                <NavDropdown.Item href="#howtos">How To's</NavDropdown.Item>
                                <NavDropdown.Item href="#digests">Digests</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#tools">Tools</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </React.Fragment>
    )
}
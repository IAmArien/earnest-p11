import React from 'react';
import { Container, Image, Navbar, Nav, Button } from 'react-bootstrap';

import './css/header.css';

import HEADER_SEARCH from '../sections/resources/HEADER_SEARCH.svg';
import HEADER_CLOSE from '../sections/resources/HEADER_CLOSE.svg';

export default function Header() {

    const hideSearchIcon =() => {
        const navSearchCloseIcon = document.getElementById('imgNavSearchClose');
        const navSearchIcon = document.getElementById('imgNavSearch');
        navSearchIcon.style.display = 'none';
        navSearchCloseIcon.style.display = 'block';
    }

    const showSearchIcon =() => {
        const navSearchCloseIcon = document.getElementById('imgNavSearchClose');
        const navSearchIcon = document.getElementById('imgNavSearch');
        navSearchIcon.style.display = 'block';
        navSearchCloseIcon.style.display = 'none';
    }

    const onNavSearchClick =() => {

        hideSearchIcon()

        const navItemLoginSignup = document.getElementById('navItemLoginSignup');
        navItemLoginSignup.classList.remove('navItemLoginSignup-visible')
        navItemLoginSignup.classList.add('navItemLoginSignup-hidden')

        const navItemSearchBar = document.getElementById('navItemSearchBar');
        navItemSearchBar.classList.add('navItemSearchBar-default')

        const navInputSearchBar = document.getElementById('navInputSearchBar');
        navInputSearchBar.classList.remove('navInputSearchBar-no-width')
        navInputSearchBar.classList.add('navInputSearchBar-width')
    }

    const onNavSearchCloseClick =() => {

        showSearchIcon()

        const navItemLoginSignup = document.getElementById('navItemLoginSignup');
        navItemLoginSignup.classList.remove('navItemLoginSignup-hidden')
        navItemLoginSignup.classList.add('navItemLoginSignup-visible')

        const navItemSearchBar = document.getElementById('navItemSearchBar');
        navItemSearchBar.classList.remove('navItemSearchBar-default')

        const navInputSearchBar = document.getElementById('navInputSearchBar');
        navInputSearchBar.classList.remove('navInputSearchBar-width')
        navInputSearchBar.classList.add('navInputSearchBar-no-width')
    }

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
                        <Nav.Link id='navItemLoginSignup' className='pull-left navItemLoginSignup-visible ' href="https://technet.azure-api.net/public/v1/authentication/login?client_id=5fcfb64b-a29d-4845-98f0-ed75200b9f2c&amp;redirect_uri=https://earnest.ph/invest/callback&amp;response_type=CODE&amp;scope=offline_access">
                            <Button className='btn-login-signup' variant='primary' size='md'>Login/Sign up</Button>
                        </Nav.Link>
                        <Nav.Item id='navItemSearchBar' className='pull-left navInputSearchBar-default'>
                            <input id='navInputSearchBar' className="input-header-search" type="email" placeholder="Search Earnest..." />
                        </Nav.Item>
                        <Nav.Item className='pull-right nav-item-search-icon'>
                            <Image id='imgNavSearch' onClick={() => onNavSearchClick()} className='img-nav-search' src={HEADER_SEARCH} />
                            <Image id='imgNavSearchClose' onClick={() => onNavSearchCloseClick()} className='img-nav-search-close' src={HEADER_CLOSE} />
                        </Nav.Item>
                    </div>
                </Container>
            </Navbar>
        </React.Fragment>
    )
}

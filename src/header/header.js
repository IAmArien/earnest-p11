import React from 'react';
import { Container, Image, Navbar, Nav, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

import './css/header.css';

import HEADER_SEARCH from '../sections/resources/HEADER_SEARCH.svg';
import HEADER_CLOSE from '../sections/resources/HEADER_CLOSE.svg';
import HEADER_TOGGLER from '../sections/resources/HEADER_TOGGLER.webp';

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

    const onDrawerMenuClick =(isOpen) => {
        const navSliderDrawer = document.getElementById('navSliderDrawer');

        if (isOpen) {
            navSliderDrawer.classList.remove('slide-close');
            navSliderDrawer.classList.add('slide-open');
        } else {
            navSliderDrawer.classList.remove('slide-open');
            navSliderDrawer.classList.add('slide-close');
        }
    }

    return (
        <React.Fragment>
            <Navbar expand='lg' fixed='top' className='justify-content-between nav-bg-light nav-header-container'>
                <div className='nav-slider-drawer' id='navSliderDrawer'>
                    <Image className='img-nav-slider-logo' src='https://earnest.ph/invest/data/photos/earnest-logo.svg'/>
                    <FontAwesomeIcon className='ic-nav-slider-close' icon={faClose} onClick={() => onDrawerMenuClick(false)}/>
                    <Nav className='nav-slider-menu'>
                        <Nav.Item className='nav-slider-item'>
                            <Nav.Link className='nav-slider-menu-item active' href='./'>Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className='nav-slider-item'>
                            <Nav.Link className='nav-slider-menu-item inactive' href='https://earnest.ph/invest/learn'>Lessons</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className='nav-slider-item'>
                            <Nav.Link className='nav-slider-menu-item inactive' href='https://earnest.ph/invest/topic/basics'>Basics</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className='nav-slider-item'>
                            <Nav.Link className='nav-slider-menu-item inactive sub-menu' href='https://earnest.ph/invest/topic/basics?section=dictionary'>Dictionary</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className='nav-slider-item'>
                            <Nav.Link className='nav-slider-menu-item inactive sub-menu' href='https://earnest.ph/invest/topic/basics?section=explainers'>Explainers</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className='nav-slider-item'>
                            <Nav.Link className='nav-slider-menu-item inactive sub-menu' href='https://earnest.ph/invest/topic/basics?section=money-myths'>Money Myths</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className='nav-slider-item'>
                            <Nav.Link className='nav-slider-menu-item inactive' href='https://earnest.ph/invest/topic/life'>Life</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className='nav-slider-item'>
                            <Nav.Link className='nav-slider-menu-item inactive sub-menu' href='https://earnest.ph/invest/topic/life?section=stories'>Stories</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className='nav-slider-item'>
                            <Nav.Link className='nav-slider-menu-item inactive sub-menu' href='https://earnest.ph/invest/topic/life?section=how-tos'>How To's</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className='nav-slider-item'>
                            <Nav.Link className='nav-slider-menu-item inactive sub-menu' href='https://earnest.ph/invest/topic/life?section=digests'>Digests</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className='nav-slider-item'>
                            <Nav.Link className='nav-slider-menu-item inactive' href='https://earnest.ph/invest/topic/tools'>Tools</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className='nav-slider-item'>
                            <Nav.Link className='nav-slider-menu-item inactive' href='https://technet.azure-api.net/public/v1/authentication/login?client_id=5fcfb64b-a29d-4845-98f0-ed75200b9f2c&redirect_uri=https://earnest.ph/invest/callback&response_type=CODE&scope=offline_access'>Log In / Sign Up</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
                <Container className='header-container'>
                    <Navbar.Brand href='#'>
                        <Image className='img-nav-toggler' src={HEADER_TOGGLER} onClick={() => onDrawerMenuClick(true)}/>
                        <Image className='img-nav-logo' src='https://earnest.ph/invest/data/photos/earnest-logo.svg'/>
                    </Navbar.Brand>
                    <Navbar.Collapse id="basicNavbarNav">
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
                            <input id='navInputSearchBar' className="input-header-search navInputSearchBar-no-width" type="email" placeholder="Search Earnest..." />
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

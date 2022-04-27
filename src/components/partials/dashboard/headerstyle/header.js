import React from 'react'
import { Container, Nav, Dropdown, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CustomToggle from '../../../dropdowns'
import Card from '../../../card'
import Logo from '../../components/logo'

//img
import user1 from '../../../../assets/images/avatars/01.png'
import lay01 from '../../../../assets/images/layouts/01.png'
import lay02 from '../../../../assets/images/layouts/02.png'
import lay03 from '../../../../assets/images/layouts/03.png'
import lay04 from '../../../../assets/images/layouts/04.png'


const Header = () => {

    const minisidebar = () => {
        document.getElementsByTagName('ASIDE')[0].classList.toggle('sidebar-mini')
    }


    return (
        <>
            <Navbar expand="lg" variant="light" className="nav iq-navbar">
                <Container fluid className="navbar-inner">
                    <Link to="/" className="navbar-brand">
                        <Logo />
                    </Link>
                    <div className="sidebar-toggle" data-toggle="sidebar" data-active="true" onClick={minisidebar}>
                        <i className="icon">
                            <svg width="20px" height="20px" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
                            </svg>
                        </i>
                    </div>

                    <Navbar.Toggle aria-controls="navbarSupportedContent">
                        <span className="navbar-toggler-icon">
                            <span className="navbar-toggler-bar bar1 mt-2"></span>
                            <span className="navbar-toggler-bar bar2"></span>
                            <span className="navbar-toggler-bar bar3"></span>
                        </span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="navbarSupportedContent">
                        <Nav as="ul" className="navbar-nav ms-auto align-items-center navbar-list mb-2 mb-lg-0">
                            <Dropdown as="li" className="nav-item">
                                <Dropdown.Toggle as={CustomToggle} variant="search-toggle nav-link">
                                    <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.7695 10.1453C16.039 9.29229 15.7071 8.55305 15.7071 7.29716V6.87013C15.7071 5.23354 15.3304 4.17907 14.5115 3.12459C13.2493 1.48699 11.1244 0.5 9.04423 0.5H8.95577C6.91935 0.5 4.86106 1.44167 3.577 3.0128C2.71333 4.08842 2.29293 5.18822 2.29293 6.87013V7.29716C2.29293 8.55305 1.98284 9.29229 1.23049 10.1453C0.676907 10.7738 0.5 11.5815 0.5 12.4557C0.5 13.3309 0.787226 14.1598 1.36367 14.8336C2.11602 15.6413 3.17846 16.1569 4.26375 16.2466C5.83505 16.4258 7.40634 16.4933 9.0005 16.4933C10.5937 16.4933 12.165 16.3805 13.7372 16.2466C14.8215 16.1569 15.884 15.6413 16.6363 14.8336C17.2118 14.1598 17.5 13.3309 17.5 12.4557C17.5 11.5815 17.3231 10.7738 16.7695 10.1453Z" fill="currentColor" />
                                        <path opacity="0.4" d="M11.0097 17.7285C10.5098 17.6217 7.46364 17.6217 6.96372 17.7285C6.53636 17.8272 6.07422 18.0568 6.07422 18.5604C6.09907 19.0408 6.38033 19.4648 6.76992 19.7337L6.76893 19.7347C7.27282 20.1275 7.86416 20.3773 8.48334 20.4669C8.8133 20.5122 9.14923 20.5102 9.49111 20.4669C10.1093 20.3773 10.7006 20.1275 11.2045 19.7347L11.2035 19.7337C11.5931 19.4648 11.8744 19.0408 11.8992 18.5604C11.8992 18.0568 11.4371 17.8272 11.0097 17.7285Z" fill="currentColor" />
                                    </svg>
                                    <span className="bg-danger dots"></span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="sub-drop dropdown-menu-end p-0">
                                    <Card className="shadow-none m-0">
                                        <Card.Header className="bg-primary mx-0 px-4">
                                            <Card.Header.Title>
                                                <h5 className="mb-0 text-white">All Notifications</h5>
                                            </Card.Header.Title>
                                        </Card.Header>
                                        <Card.Body className="p-0">
                                            <Link to="#" className="iq-sub-card">
                                                <div className="d-flex align-items-center">
                                                    <img className="avatar-40 rounded-pill" src={lay01} alt="" />
                                                    <div className="ms-3 w-100">
                                                        <h6 className="mb-0 ">Emma Watson Bni</h6>
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <p className="mb-0">95 MB</p>
                                                            <small className="float-end font-size-12">Just Now</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link to="#" className="iq-sub-card">
                                                <div className="d-flex align-items-center">
                                                    <div>
                                                        <img className="avatar-40 rounded-pill" src={lay02} alt="" />
                                                    </div>
                                                    <div className="ms-3 w-100">
                                                        <h6 className="mb-0 ">New customer is join</h6>
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <p className="mb-0">Cyst Bni</p>
                                                            <small className="float-end font-size-12">5 days ago</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link to="#" className="iq-sub-card">
                                                <div className="d-flex align-items-center">
                                                    <img className="avatar-40 rounded-pill" src={lay03} alt="" />
                                                    <div className="ms-3 w-100">
                                                        <h6 className="mb-0 ">Two customer is left</h6>
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <p className="mb-0">Cyst Bni</p>
                                                            <small className="float-end font-size-12">2 days ago</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Link to="#" className="iq-sub-card">
                                                <div className="d-flex align-items-center">
                                                    <img className="avatar-40 rounded-pill" src={lay04} alt="" />
                                                    <div className="w-100 ms-3">
                                                        <h6 className="mb-0 ">New Mail from Fenny</h6>
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <p className="mb-0">Cyst Bni</p>
                                                            <small className="float-end font-size-12">3 days ago</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </Card.Body>
                                    </Card>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown as="li" className="nav-item">
                                <Dropdown.Toggle as={CustomToggle} href="#" variant="nav-link py-0 d-flex align-items-center" id="mail-drop" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img src={user1} alt="User-Profile" className="img-fluid avatar avatar-50 avatar-rounded" />
                                    <div className="caption ms-3 d-none d-md-block ">
                                        <h6 className="mb-0 caption-title">Austin Robertson</h6>
                                        <p className="mb-0 caption-sub-title">Marketing Administrator</p>
                                    </div>
                                </Dropdown.Toggle>
                                <Dropdown.Menu as="ul" className="dropdown-menu-end" aria-labelledby="mail-drop">
                                    <li><Dropdown.Item href="/app/user-profile">Profile</Dropdown.Item></li>
                                    <li><Dropdown.Divider /></li>
                                    <li><Dropdown.Item href="/auth/sign-in">Logout</Dropdown.Item></li>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header

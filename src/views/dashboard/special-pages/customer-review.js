import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Card from '../../../components/card'

//img
import cr01 from '../../../assets/images/customer-review/01.png'
import cr02 from '../../../assets/images/customer-review/02.png'
import cr03 from '../../../assets/images/customer-review/03.png'
import cr04 from '../../../assets/images/customer-review/04.png'
import cr05 from '../../../assets/images/customer-review/05.png'
import cr06 from '../../../assets/images/customer-review/06.png'

const CustomerReview  = () => {
    return (
        <>
            <Row>
                <Col lg="8">
                    <Col lg="12">
                        <div className="iq-main">
                            <div className="iq-glass-card iq-content1 rounded p-3">
                                <div className="d-flex flex-wrap align-items-center justify-content-between">
                                    <div>
                                        <h5>Ciao a Tutti</h5>
                                        <p className="mb-0">Lorem ipsum, or lipsum as it is sometimes known</p>
                                    </div>
                                    <div>
                                        <Button type="button" variant="primary mt-3 rounded-pill">View Public profile</Button>
                                    </div>
                                </div>
                            </div>
                            <div className="iq-header-img">
                                <img src={cr01} alt="header" className="img-fluid w-100 rounded" style={{objectFit:"contain"}}/>
                            </div>
                        </div>
                    </Col>
                    <Card className="profile-img54">
                        <div className="card-header border-0">
                            <div className="d-flex flex-wrap justify-content-between align-items-center">
                                <h3>Latest reviews</h3>
                                <Button type="button" variant="primary rounded-pill">See all reviews</Button>
                            </div>
                        </div>
                        <Card.Body>
                            <Row>
                                <Col lg="3" xl="2">
                                    <img src={cr05} alt="header" className="img-fluid rounded-circle avatar-100 mb-2"/>
                                    <small className="heading-title fw-bolder text-dark ms-3 ms-lg-0">Jone Cooper</small>
                                </Col>
                                <Col lg="9" xl="10" className="ps-lg-0">
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex">
                                            <small className="text-dark fw-bolder me-1">4.5</small>    
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18px" fill="orange" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18px" fill="orange" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18px" fill="orange" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18px" fill="orange" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18px" fill="none" viewBox="0 0 24 24" stroke="currentcolor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                            </svg>
                                        </div>
                                        <small className="text-primary">1 Day Ago</small>
                                    </div>
                                    <h6 className="heading-title mt-3 mb-2">Nice place and excellent food</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui egestas pellentesque tortor suspendisse eget suscipit cras viverra. Leo eget vitae amet, facilisis bibendum. Egestas ac hac amet, nam ultricies nec.</p>
                                    <Row>
                                        <Col lg="3" className="mt-4 mb-0 mb-lg-4">
                                            <table className="table table-borderless">
                                                <tbody className="p-0 text-light">
                                                    <tr>
                                                        <td className="p-1">Food</td>
                                                        <td className="p-1">4.0</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-1">Service</td>
                                                        <td className="p-1">3.5</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-1">Location</td>
                                                        <td className="p-1">4.2</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </Col>
                                        <Col lg="3" className="mt-4 mb-4">
                                            <table className="table table-borderless">
                                                <tbody className="p-0">
                                                    <tr>
                                                        <td className="p-1">Cleaniness</td>
                                                        <td className="p-1">4.0</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-1">Wait Time</td>
                                                        <td className="p-1">4.0</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-1">Location</td>
                                                        <td className="p-1">4.2</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </Col>
                                    </Row>
                                    <Button type="button" variant="primary rounded-pill me-3">Reply</Button>
                                    <Button type="button" variant="outline-primary rounded-pill">Report</Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col lg="3" xl="2">
                                    <img src={cr06} alt="header" className="img-fluid rounded-circle avatar-100 mb-2"/>
                                    <small className="heading-title fw-bolder text-dark ms-3 ms-lg-0">Jone Cooper</small>
                                </Col>
                                <Col lg="9" xl="10" className="ps-lg-0">
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex">
                                            <small className="text-dark fw-bolder me-1">4.5</small>    
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18px" fill="orange" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18px" fill="orange" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18px" fill="orange" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18px" fill="orange" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18px" fill="none" viewBox="0 0 24 24" stroke="currentcolor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                            </svg>
                                        </div>
                                        <small className="text-primary">1 Day Ago</small>
                                    </div>        
                                    <h6 className="heading-title mt-3 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui egestas pellentesque tortor suspendisse eget suscipit cras viverra. Leo eget vitae amet, facilisis bibendum. Egestas ac hac amet, nam ultricies nec.</p>
                                    <img src={cr02} alt="header" className="img-fluid rounded-1"/>
                                    <div className="d-grid gap-card grid-cols-2 mt-4 mb-4">
                                        <img src={cr03} alt="header" className="img-fluid rounded-1"/>
                                        <img src={cr04} alt="header" className="img-fluid rounded-1"/>
                                    </div>
                                    <Button type="button" variant="primary rounded-pill me-3">Reply</Button>
                                    <Button type="button" variant="outline-primary rounded-pill">Report</Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="4">
                    <Card>
                        <Card.Body>
                            <div className="pb-4 border-bottom">
                                <h5>Get coustomers to know you better</h5>
                            </div>
                            <div className="d-flex justify-content-between pt-5 pb-4 border-bottom">
                                <span className="text-dark">contact Information</span>
                                <Link to="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18px" fill="orange" viewBox="0 0 24 24" stroke="orange">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                    </svg>
                                </Link>
                            </div>
                            <div className="d-flex justify-content-between pt-5 pb-4 border-bottom">
                                <span className="text-dark">Your offering</span>
                                <Link to="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18px" fill="orange" viewBox="0 0 24 24" stroke="orange">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                    </svg>
                                </Link>
                            </div>
                            <div className="d-flex justify-content-between pt-5">
                                <span className="text-dark">Media</span>
                                <Link to="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18px" fill="orange" viewBox="0 0 24 24" stroke="orange">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                    </svg>
                                </Link>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card>
                        <div className="card-header">
                            <h5>Customer review</h5>
                        </div>
                        <Card.Body>
                            <div className="d-flex justify-content-between rounded-1 bg-soft-primary text-primary px-3 p-1 mb-3">
                                <span>unique profile visite</span>
                                <span>224</span>
                            </div>
                            <div className="d-flex justify-content-between rounded-1 bg-soft-primary text-primary px-3 p-1 mb-3">
                                <span>unique profile visite</span>
                                <span>23</span>
                            </div>
                            <div className="d-flex justify-content-between rounded-1 bg-soft-primary text-primary px-3 p-1 mb-3">
                                <span>Average Rating</span>
                                <span>4.8</span>
                            </div>
                            <div className="d-flex justify-content-between rounded-1 bg-soft-primary text-primary px-3 p-1">
                                <span>Average Rating</span>
                                <span>4.8</span>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default CustomerReview;
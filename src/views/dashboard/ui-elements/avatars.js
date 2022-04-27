import React from 'react'
import { Col,Container,Row } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Card from '../../../components/card'


import menu1 from '../../../assets/images/menu/1.png'
import menu2 from '../../../assets/images/menu/2.png'
import menu3 from '../../../assets/images/menu/3.png'

const Avatars = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col lg="12">
                    <Card className="card-block card-stretch card-height">
                        <Card.Header className="d-flex justify-content-between">
                            <div className="header-title">
                                <h4 className="card-title">Avatar Sizing</h4>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="iq-avatars d-flex flex-wrap align-items-center">
                                <div className="iq-avatar me-2">
                                    <img className="avatar-100 rounded" src={menu3} alt="#" data-original-title="" title=""/>
                                </div>
                                <div className="iq-avatar me-2">
                                    <img className="avatar-90 rounded" src={menu3} alt="#" data-original-title="" title=""/>
                                </div>
                                <div className="iq-avatar me-2">
                                    <img className="avatar-80 rounded" src={menu3} alt="#" data-original-title="" title=""/>
                                </div>
                                <div className="iq-avatar me-2">
                                    <img className="avatar-70 rounded" src={menu3} alt="#" data-original-title="" title=""/>
                                </div>
                                <div className="iq-avatar me-2">
                                    <img className="avatar-60 rounded" src={menu3} alt="#" data-original-title="" title=""/>
                                </div>
                                <div className="iq-avatar me-2">
                                    <img className="avatar-50 rounded" src={menu3} alt="#" data-original-title="" title=""/>
                                </div>
                                <div className="iq-avatar me-2">
                                    <img className="avatar-40 rounded" src={menu3} alt="#" data-original-title="" title=""/>
                                </div>
                                <div className="iq-avatar me-2">
                                    <img className="avatar-30 rounded" src={menu3} alt="#" data-original-title="" title=""/>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col lg="6">
                    <Card className="card-block card-stretch card-height">
                        <Card.Header>
                            <div className="header-title">
                                <h4 className="card-title">Shape Rounded</h4>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="iq-avatars d-flex flex-wrap align-items-center">
                                <div className="iq-avatar me-2">
                                    <img className="avatar-80 rounded" src={menu3} alt="#" data-original-title="" title=""/>
                                </div>
                                <div className="iq-avatar me-2">
                                    <img className="avatar-70 rounded" src={menu3} alt="#" data-original-title="" title=""/>
                                </div>
                                <div className="iq-avatar me-2">
                                    <img className="avatar-60 rounded" src={menu3} alt="#" data-original-title="" title=""/>
                                </div>
                                <div className="iq-avatar me-2">
                                    <img className="avatar-50 rounded" src={menu3} alt="#" data-original-title="" title=""/>
                                </div>
                                <div className="iq-avatar me-2">
                                    <img className="avatar-40 rounded" src={menu3} alt="#" data-original-title="" title=""/>
                                </div>
                                <div className="iq-avatar me-2">
                                    <img className="avatar-30 rounded" src={menu3} alt="#" data-original-title="" title=""/>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col lg="6">
                    <Card className="card-block card-stretch card-height">
                        <Card.Header>
                            <div className="header-title">
                                <h4 className="card-title">Shape Rounded Circle</h4>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="iq-avatars d-flex flex-wrap align-items-center">
                                <div className="iq-avatar me-2">
                                    <img className="avatar-80 rounded-small" src={menu3} alt="#" data-original-title="" title=""/>
                                </div>
                                <div className="iq-avatar me-2">
                                    <img className="avatar-70 rounded-small" src={menu3} alt="#" data-original-title="" title=""/>
                                </div>
                                <div className="iq-avatar me-2">
                                    <img className="avatar-60 rounded-small" src={menu3} alt="#" data-original-title="" title=""/>
                                </div>
                                <div className="iq-avatar me-2">
                                    <img className="avatar-50 rounded-small" src={menu3} alt="#" data-original-title="" title=""/>
                                </div>
                                <div className="iq-avatar me-2">
                                    <img className="avatar-40 rounded-small" src={menu3} alt="#" data-original-title="" title=""/>
                                </div>
                                <div className="iq-avatar me-2">
                                    <img className="avatar-30 rounded-small" src={menu3} alt="#" data-original-title="" title=""/>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col lg="6">
                    <Card className="card-block card-stretch card-height">
                        <Card.Header>
                            <div className="header-title">
                                <h4 className="card-title">Status Indicator</h4>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="iq-avatars d-flex flex-wrap align-items-center">
                                <div className="iq-avatar me-2">
                                    <img className="avatar-80 rounded" src={menu3} alt="#" data-original-title="" title=""/> <span className="bg-success iq-dots dots-100"></span>
                                </div>
                                <div className="iq-avatar me-2">
                                    <img className="avatar-70 rounded" src={menu3} alt="#" data-original-title="" title=""/> <span className="iq-dots dots-90"></span>
                                </div>
                                <div className="iq-avatar me-2">
                                    <img className="avatar-60 rounded" src={menu3} alt="#" data-original-title="" title=""/> <span className="bg-success iq-dots dots-80"></span>
                                </div>
                                <div className="iq-avatar me-2">
                                    <img className="avatar-50 rounded" src={menu3} alt="#" data-original-title="" title=""/> <span className="iq-dots dots-80"></span>
                                </div>
                                <div className="iq-avatar me-2">
                                    <img className="avatar-40 rounded" src={menu3} alt="#" data-original-title="" title=""/> <span className="bg-success iq-dots dots-80"></span>
                                </div>
                                <div className="iq-avatar me-2">
                                    <img className="avatar-30 rounded" src={menu3} alt="#" data-original-title="" title=""/> <span className="iq-dots dots-80"></span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col lg="6">
                        <Card className="card-block card-stretch card-height">
                            <Card.Header className="d-flex justify-content-between">
                                <div className="header-title">
                                    <h4 className="card-title">Image Groups</h4>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <div className="iq-avatars d-flex flex-wrap align-items-center">
                                    <div className="iq-avatar">
                                        <div className="iq-media-group me-3">
                                            <Link to="#" className="iq-media">
                                                <img className="img-fluid avatar-60 rounded" src={menu1} alt=""/>
                                            </Link>
                                            <Link to="#" className="iq-media">
                                                <img className="img-fluid avatar-60 rounded" src={menu2} alt=""/>
                                            </Link>
                                            <Link to="#" className="iq-media">
                                                <img className="img-fluid avatar-60 rounded" src={menu3} alt=""/>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="iq-avatar">
                                    <div className="iq-media-group me-3">
                                        <Link to="#" className="iq-media">
                                            <img className="img-fluid avatar-50 rounded" src={menu1} alt=""/>
                                        </Link>
                                        <Link to="#" className="iq-media">
                                            <img className="img-fluid avatar-50 rounded" src={menu2} alt=""/>
                                        </Link>
                                        <Link to="#" className="iq-media">
                                            <img className="img-fluid avatar-50 rounded" src={menu3} alt=""/>
                                        </Link>
                                    </div>
                                    </div>
                                    <div className="iq-avatar">
                                    <div className="iq-media-group me-3">
                                        <Link to="#" className="iq-media">
                                            <img className="img-fluid avatar-40 rounded" src={menu1} alt=""/>
                                        </Link>
                                        <Link to="#" className="iq-media">
                                            <img className="img-fluid avatar-40 rounded" src={menu2} alt=""/>
                                        </Link>
                                        <Link to="#" className="iq-media">
                                            <img className="img-fluid avatar-40 rounded" src={menu3} alt=""/>
                                        </Link>
                                    </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Avatars;
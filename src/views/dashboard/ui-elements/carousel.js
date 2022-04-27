import React from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap'

import card1 from '../../../../src/assets/images/page-img/img-1.jpg'

const Carousels = ( )=> {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col sm="12" lg="6">
                        <Card>
                            <Card.Header className="d-flex justify-content-between">
                                <div className="header-title">
                                    <h4 className="card-title">Slides only</h4>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <p>Here’s a carousel with slides only. Note the presence of the <code>.d-block</code> and <code>.img-fluid</code> on carousel images to prevent browser default image alignment.</p>
                                <Carousel indicators={false} nextIcon={''} prevIcon={''}>
                                    <Carousel.Item> 
                                        <img src={card1} className="d-block w-100" alt="#" />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img src={card1} className="d-block w-100" alt="#" />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img src={card1} className="d-block w-100" alt="#" />
                                    </Carousel.Item>
                                </Carousel>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm="12" lg="6">
                        <Card>
                            <Card.Header className="d-flex justify-content-between">
                                <div className="header-title">
                                    <h4 className="card-title">Slides With Controls</h4>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <p>Here’s a carousel with slides only. Note the presence of the <code>.d-block</code> and <code>.img-fluid</code> on carousel images to prevent browser default image alignment.</p>
                                <Carousel indicators={false}>
                                    <Carousel.Item> 
                                        <img src={card1} className="d-block w-100" alt="#" />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img src={card1} className="d-block w-100" alt="#" />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img src={card1} className="d-block w-100" alt="#" />
                                    </Carousel.Item>
                                </Carousel>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm="12" lg="6">
                    <Card>
                        <Card.Header className="d-flex justify-content-between">
                            <div className="header-title">
                                <h4 className="card-title">Slides With Indicators</h4>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <p>Here’s a carousel with slides only. Note the presence of the <code>.d-block</code> and <code>.img-fluid</code> on carousel images to prevent browser default image alignment.</p>
                            <Carousel>
                              <Carousel.Item> 
                                 <img src={card1} className="d-block w-100" alt="#" />
                              </Carousel.Item>
                              <Carousel.Item>
                                 <img src={card1} className="d-block w-100" alt="#" />
                              </Carousel.Item>
                              <Carousel.Item>
                                 <img src={card1} className="d-block w-100" alt="#" />
                              </Carousel.Item>
                           </Carousel>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col sm="12" lg="6">
                    <Card>
                        <Card.Header className="d-flex justify-content-between">
                            <div className="header-title">
                                <h4 className="card-title">Slides With Captions</h4>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <p>Here’s a carousel with slides only. Note the presence of the <code>.d-block</code> and <code>.img-fluid</code> on carousel images to prevent browser default image alignment.</p>
                            <div className="bd-example">
                            <Carousel>
                                 <Carousel.Item> 
                                    <img src={card1} className="d-block w-100" alt="#" />
                                    <Carousel.Caption>
                                    <h5 className="text-white">First slide label</h5>
                                          <p>Some representative placeholder content for the first slide.</p>
                                       </Carousel.Caption> 
                                 </Carousel.Item>
                                 <Carousel.Item>
                                    <img src={card1} className="d-block w-100" alt="#" />
                                    <Carousel.Caption>
                                    <h5 className="text-white">Second slide label</h5>
                                          <p>Some representative placeholder content for the Second slide.</p>
                                       </Carousel.Caption>
                                 </Carousel.Item>
                                 <Carousel.Item>
                                    <img src={card1} className="d-block w-100" alt="#" />
                                    <Carousel.Caption>
                                    <h5 className="text-white">Third slide label</h5>
                                          <p>Some representative placeholder content for the Third slide.</p>
                                       </Carousel.Caption>
                                 </Carousel.Item>
                              </Carousel>
                            </div>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col sm="12" lg="6">
                    <Card>
                        <Card.Header className="d-flex justify-content-between">
                            <div className="header-title">
                                <h4 className="card-title">Slides With Crossfade</h4>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <p>Here’s a carousel with slides only. Note the presence of the <code>.d-block</code> and <code>.img-fluid</code> on carousel images to prevent browser default image alignment.</p>
                            <Carousel fade indicators={false}>
                              <Carousel.Item> 
                                 <img src={card1} className="d-block w-100" alt="#" />
                              </Carousel.Item>
                              <Carousel.Item>
                                 <img src={card1} className="d-block w-100" alt="#" />
                              </Carousel.Item>
                              <Carousel.Item>
                                 <img src={card1} className="d-block w-100" alt="#" />
                              </Carousel.Item>
                           </Carousel>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Carousels
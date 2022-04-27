import React from 'react';
import { Link } from 'react-router-dom'
import { Container, Row, Col, Card, CardGroup } from 'react-bootstrap'

import img1 from '../../../assets/images/page-img/07.jpg'
import img2 from '../../../assets/images/page-img/08.jpg'
import img3 from '../../../assets/images/page-img/09.jpg'

const Cards = ( )=> {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col sm="6" md="6" lg="3">
                        <Card>
                            <img src={img1} className="card-img-top" alt="#"/>
                            <Card.Body>
                                <h4 className="card-title">Card title</h4>
                                <p className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                <Link to="#" className="btn btn-primary">Button</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm="6" md="6" lg="3">
                        <Card>
                            <img src={img1} className="card-img-top" alt="#"/>
                            <Card.Body>
                                <h4 className="card-title">Card title</h4>
                                <p className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                <p>It is a long established fact that a the readable content of a page when looking at its layout.</p>
                                <Link to="#" className="card-link">Card link</Link>
                                <Link to="#" className="card-link">Another link</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm="6" md="6" lg="3">
                        <Card>
                            <img src={img1} className="card-img-top" alt="#"/>
                            <Card.Body>
                                <h4 className="card-title">Card title</h4>
                                <p className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Cras justo odio</li>
                                    <li className="list-group-item">Vestibulum at eros</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm="6" md="6" lg="3">
                        <Card>
                            <img src={img1} className="card-img-top" alt="#"/>
                            <Card.Body>
                                <h4 className="card-title">Card title</h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </Card.Body>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Cras justo odio</li>
                            </ul>
                            <Card.Body>
                                <Link to="#" className="card-link">Card link</Link>
                                <Link to="#" className="card-link">Another link</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col sm="6" lg="6">
                        <Card>
                            <Card.Body className="d-grid gap-2">
                                <h4 className="card-title">Special title treatment</h4>
                                <p className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                <Link to="#" className="btn btn-primary">Go somewhere</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm="6" lg="6">
                        <Card>
                            <Card.Body className="d-grid gap-2">
                                <h4 className="card-title">Special title treatment</h4>
                                <p className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                <Link to="#" className="btn btn-primary">Go somewhere</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col lg="4" md="6">
                        <Card>
                            <Card.Header>
                                Featured
                            </Card.Header>
                            <Card.Body>
                                <h4 className="card-title">Special title treatment</h4>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <Link to="#" className="btn btn-primary">Go somewhere</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg="4" md="6">
                        <Card>
                            <Card.Header>
                                Quote
                            </Card.Header>
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                    <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                                </blockquote>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg="4" md="6">
                        <Card>
                            <Card.Header>
                                Featured
                            </Card.Header>
                            <Card.Body>
                                <Link to="#" className="btn btn-primary">Go somewhere</Link>
                            </Card.Body>
                            <Card.Footer className="text-muted">
                                2 days ago
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col lg="4" sm="6" md="6">
                        <Card>
                            <Card.Body className="d-grid gap-2">
                                <h4 className="card-title">Special title treatment</h4>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <Link to="#" className="btn btn-primary">Go somewhere</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg="4" sm="6" md="6" className="text-center">
                        <Card>
                            <Card.Body className="d-grid gap-2">
                                <h4 className="card-title">Special title treatment</h4>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <Link to="#" className="btn btn-primary">Go somewhere</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg="4" sm="6" md="6" className="text-end">
                        <Card>
                            <Card.Body className="d-grid gap-2">
                                <h4 className="card-title">Special title treatment</h4>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <Link to="#" className="btn btn-primary">Go somewhere</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col lg="4" md="6" sm="6">
                        <Card>
                            <img src={img1} className="card-img-top" alt="#"/>
                            <Card.Body>
                                <h4 className="card-title">Card title</h4>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md="6" lg="4" sm="6">
                        <Card>
                            <Card.Body>
                                <h4 className="card-title">Card title</h4>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </Card.Body>
                            <img src={img1} className="card-img-top" alt="#"/>
                        </Card>
                    </Col>
                    <Col md="6" lg="4" sm="6">
                        <Card className="bg-dark text-white">
                            <img src={img1} className="card-img" alt="#"/>
                            <div className="card-img-overlay">
                                <h4 className="card-title text-white">Card title</h4>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text">Last updated 3 mins ago</p>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12">
                        <h3 className="mb-3">Horizontal Card</h3>
                    </Col>
                    <Col md="6" lg="6">
                        <Card className="mb-2">
                            <Row className="no-gutters">
                                <Col md="6" lg="4">
                                    <img src={img2} className="card-img" alt="#"/>
                                </Col>
                                <Col md="6" lg="8">
                                    <Card.Body>
                                        <h4 className="card-title">Card title</h4>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in. a little bit longer.</p>
                                        <p className="card-text">
                                            <small className="text-muted">Last updated 3 mins ago</small>
                                        </p>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col md="6" lg="6">
                        <Card>
                            <Row className="no-gutters flex-row-reverse">
                                <Col md="6" lg="4">
                                    <img src={img3} className="card-img" alt="#"/>
                                </Col>
                                <Col md="6" lg="8">
                                    <Card.Body className="text-end">
                                        <h4 className="card-title">Card title</h4>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in. a little bit longer.</p>
                                        <p className="card-text">
                                            <small className="text-muted">Last updated 3 mins ago</small>
                                        </p>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12">
                        <h3 className="mb-2">Card Colored Styles</h3>
                    </Col>
                    <Col lg="4" md="6" sm="6">
                        <Card className="text-white bg-primary" >
                            <Card.Body>
                                <h4 className="card-title text-white">Primary card title</h4>
                                <blockquote className="blockquote mb-0">
                                    <p className="font-size-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                    <footer className="blockquote-footer text-white font-size-12">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                                </blockquote>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg="4" md="6" sm="6">
                        <Card className="text-white bg-secondary" >
                            <Card.Body>
                                <h4 className="card-title text-white">Secondary card title</h4>
                                <blockquote className="blockquote mb-0">
                                    <p className="font-size-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                    <footer className="blockquote-footer text-white font-size-12">Someone famous in <cite title="Source Title" className="text-white" >Source Title</cite></footer>
                                </blockquote>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg="4" md="6" sm="6">
                        <Card className="text-white bg-success" >
                            <Card.Body>
                                <h4 className="card-title text-white">Success card title</h4>
                                <blockquote className="blockquote mb-0">
                                    <p className="font-size-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                    <footer className="blockquote-footer text-white font-size-12">Someone famous in <cite title="Source Title" className="text-white" >Source Title</cite></footer>
                                </blockquote>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg="4" md="6" sm="6">
                        <Card className="text-white bg-danger" >
                            <Card.Body>
                                <h4 className="card-title text-white">Danger card title</h4>
                                <blockquote className="blockquote mb-0">
                                    <p className="font-size-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                    <footer className="blockquote-footer text-white font-size-12">Someone famous in <cite title="Source Title" className="text-white" >Source Title</cite></footer>
                                </blockquote>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg="4" md="6" sm="6">
                        <Card className="text-white bg-warning" >
                            <Card.Body>
                                <h4 className="card-title text-white">Warning card title</h4>
                                <blockquote className="blockquote mb-0">
                                    <p className="font-size-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                    <footer className="blockquote-footer text-white font-size-12">Someone famous in <cite title="Source Title" className="text-white" >Source Title</cite></footer>
                                </blockquote>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg="4" md="6" sm="6">
                        <Card className="text-white bg-info" >
                            <Card.Body>
                                <h4 className="card-title text-white">Info card title</h4>
                                <blockquote className="blockquote mb-0">
                                    <p className="font-size-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                    <footer className="blockquote-footer text-white font-size-12">Someone famous in <cite title="Source Title" className="text-white" >Source Title</cite></footer>
                                </blockquote>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12">
                        <h3 className="mb-3">Border Card</h3>
                    </Col>
                    <Col lg="4" md="6" sm="6">
                        <Card className="border-primary" >
                            <Card.Body className="text-primary">
                                <h4 className="card-title text-primary">Primary card title</h4>
                                <p className="card-text">Some quick example text to build on the card title  text to build on the card title and make up the bulk of the card's content.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg="4" md="6" sm="6">
                        <Card className="border-secondary" >
                            <Card.Body className="text-secondary">
                                <h4 className="card-title text-secondary">Primary card title</h4>
                                <p className="card-text">Some quick example text to build on the card title  text to build on the card title and make up the bulk of the card's content.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg="4" md="6" sm="6">
                        <Card className="border-success" >
                            <Card.Body className="text-success">
                                <h4 className="card-title text-success">Primary card title</h4>
                                <p className="card-text">Some quick example text to build on the card title  text to build on the card title and make up the bulk of the card's content.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg="4" md="6" sm="6">
                        <Card className="border-danger" >
                            <Card.Body className="text-danger">
                                <h4 className="card-title text-danger">Primary card title</h4>
                                <p className="card-text">Some quick example text to build on the card title  text to build on the card title and make up the bulk of the card's content.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg="4" md="6" sm="6">
                        <Card className="border-warning" >
                            <Card.Body className="text-warning">
                                <h4 className="card-title text-warning">Primary card title</h4>
                                <p className="card-text">Some quick example text to build on the card title  text to build on the card title and make up the bulk of the card's content.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg="4" md="6" sm="6">
                        <Card className="border-info" >
                            <Card.Body className="text-info">
                                <h4 className="card-title text-info">Primary card title</h4>
                                <p className="card-text">Some quick example text to build on the card title  text to build on the card title and make up the bulk of the card's content.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12">
                        <h3 className="mb-2">Card groups</h3>
                    </Col>
                    <Col sm="12">
                        <CardGroup>
                            <Card>
                                <img src={img1} className="card-img-top" alt="#"/>
                                <Card.Body>
                                    <h4 className="card-title">Card title</h4>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </Card.Body>
                            </Card>
                            <Card>
                                <img src={img1} className="card-img-top" alt="#"/>
                                <Card.Body>
                                    <h4 className="card-title">Card title</h4>
                                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </Card.Body>
                            </Card>
                            <Card>
                                <img src={img1} className="card-img-top" alt="#"/>
                                <div className="card-body">
                                    <h4 className="card-title">Card title</h4>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </Card>
                        </CardGroup>
                    </Col>
                    <Col sm="12">
                        <CardGroup className="mb-3">
                            <Card>
                                <img src={img1} className="card-img-top" alt="#"/>
                                <Card.Body>
                                    <h4 className="card-title">Card title</h4>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <img src={img1} className="card-img-top" alt="#"/>
                                <Card.Body>
                                    <h4 className="card-title">Card title</h4>
                                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <img src={img1} className="card-img-top" alt="#"/>
                                <Card.Body>
                                    <h4 className="card-title">Card title</h4>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                        </CardGroup>
                    </Col>
                    <Col sm="12">
                        <h3 className="mb-3">Card Masonry Columns</h3>
                        <Row data-masonry='{"percentPosition": true }'>
                            <Col sm="6" lg="4">
                                <Card className="mb-3">
                                    <img src={img1} className="card-img-top" alt="#"/>
                                    <Card.Body>
                                        <h4 className="card-title">Card title that wraps to a new line</h4>
                                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm="6" lg="4">
                                <Card className="mb-3">
                                    <img src={img1} className="card-img-top" alt="#"/>
                                    <Card.Body>
                                        <h4 className="card-title">Card title</h4>
                                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm="6" lg="4">
                                <Card className="mb-1">
                                    <img src={img1} className="card-img-top" alt="#"/>
                                </Card>
                                <Card className="mb-3 text-end">
                                <blockquote className="blockquote mb-0 card-body">
                                    <p className="font-size-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                    <footer className="blockquote-footer">
                                        <small className="text-muted">
                                        Someone famous in <cite title="Source Title">Source Title</cite>
                                        </small>
                                    </footer>
                                </blockquote>
                                </Card>
                            </Col>
                            <Col sm="6" lg="4">
                                <Card className="mb-3">
                                    <blockquote className="blockquote mb-0 card-body">
                                        <p className="font-size-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                        <footer className="blockquote-footer">
                                            <small className="text-muted">
                                            Someone famous in <cite title="Source Title">Source Title</cite>
                                            </small>
                                        </footer>
                                    </blockquote>
                                </Card>
                            </Col>
                            <Col sm="6" lg="4">
                                <Card className="bg-primary text-white text-center mb-3">
                                    <blockquote className="blockquote mb-0 card-body">
                                        <p className="font-size-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                        <footer className="blockquote-footer">
                                            <small className="text-white">
                                            Someone famous in <cite title="Source Title">Source Title</cite>
                                            </small>
                                        </footer>
                                    </blockquote>
                                </Card>
                            </Col>
                            <Col sm="6" lg="4">
                                <Card className="mb-3">
                                    <Card.Body>
                                        <h4 className="card-title">Card title</h4>
                                        <p className="card-text">This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm="6" lg="4">
                                <Card className="text-center mb-3">
                                    <Card.Body>
                                        <h4 className="card-title">Card title</h4>
                                        <p className="card-text">This card has a regular title and short paragraphy of text below it.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </Card.Body>
                                </Card>
                            </Col>         
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Cards;
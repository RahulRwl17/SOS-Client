import React from 'react'
import { Col,Container,Row,Button,ButtonGroup } from 'react-bootstrap'
import Card from '../../../components/card'

const ButtonGroups = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col lg="4" md="6" sm="6">
                    <Card className="card-block card-stretch card-height blog">
                        <Card.Header>
                            <Card.Header.Title>
                                <h4 className="card-title">Flat Button</h4>
                            </Card.Header.Title>
                        </Card.Header>
                        <Card.Body>
                            <ul className="list-inline p-0 m-0 text-center">
                                <li className="mb-2">
                                <ButtonGroup  className="btn-group-toggle btn-group-flat"> 
                                    <Button variant="primary button-icon" target="_blank" href="#">Left</Button>
                                    <Button variant="primary button-icon" target="_blank" href="#">Middle</Button>
                                    <Button variant="primary button-icon" target="_blank" href="#">Right</Button>
                                </ButtonGroup>
                                </li>
                                <li className="mb-2">
                                <ButtonGroup className="btn-group-toggle btn-group-flat"> 
                                    <Button variant="success button-icon" target="_blank" href="#">Left</Button>
                                    <Button variant="success button-icon" target="_blank" href="#">Middle</Button>
                                    <Button variant="success button-icon" target="_blank" href="#">Right</Button>
                                </ButtonGroup>
                                </li>
                                <li>
                                <ButtonGroup className="btn-group-toggle btn-group-flat"> 
                                    <Button variant="warning button-icon" target="_blank" href="#">Left</Button>
                                    <Button variant="warning button-icon" target="_blank" href="#">Middle</Button>
                                    <Button variant="warning button-icon" target="_blank" href="#">Right</Button>
                                </ButtonGroup>
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col lg='4' md="6" sm="6">
                    <Card className="card-block card-stretch card-height blog">
                        <Card.Header>
                            <Card.Header.Title>
                                <h4 className="card-title">Edges Button</h4>
                            </Card.Header.Title>
                        </Card.Header>
                        <Card.Body>
                            <ul className="list-inline p-0 m-0 text-center">
                                <li className="mb-2">
                                <ButtonGroup variant="btn-group-toggle btn-group-edges"> 
                                    <Button variant="primary button-icon" target="_blank" href="#">Left</Button>
                                    <Button variant="primary button-icon" target="_blank" href="#">Middle</Button>
                                    <Button variant="primary button-icon" target="_blank" href="#">Right</Button>
                                </ButtonGroup>
                                </li>
                                <li className="mb-2">
                                <ButtonGroup className="btn-group-toggle btn-group-edges"> 
                                    <Button variant="success button-icon" target="_blank" href="#">Left</Button>
                                    <Button variant="success button-icon" target="_blank" href="#">Middle</Button>
                                    <Button variant="success button-icon" target="_blank" href="#">Right</Button>
                                </ButtonGroup>
                                </li>
                                <li>
                                <ButtonGroup className="btn-group-toggle btn-group-edges"> 
                                    <Button variant="warning button-icon" target="_blank" href="#">Left</Button>
                                    <Button variant="warning button-icon" target="_blank" href="#">Middle</Button>
                                    <Button variant="warning button-icon" target="_blank" href="#">Right</Button>
                                </ButtonGroup>
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col lg='4' md="6" sm="6">
                    <Card className="card-block card-stretch card-height blog">
                        <Card.Header>
                            <Card.Header.Title>
                                <h4 className="card-title">Basic Buttons</h4>
                            </Card.Header.Title>
                        </Card.Header>
                        <Card.Body>
                            <ul className="list-inline p-0 m-0 text-center">
                                <li className="mb-2">
                                <ButtonGroup className="btn-group-toggle"> 
                                    <Button variant="primary button-icon" target="_blank" href="#">Left</Button>
                                    <Button variant="primary button-icon" target="_blank" href="#">Middle</Button>
                                    <Button variant="primary button-icon" target="_blank" href="#">Right</Button>
                                </ButtonGroup>
                                </li>
                                <li className="mb-2">
                                <ButtonGroup className="btn-group-toggle"> 
                                    <Button variant="success button-icon" target="_blank" href="#">Left</Button>
                                    <Button variant="success button-icon" target="_blank" href="#">Middle</Button>
                                    <Button variant="success button-icon" target="_blank" href="#">Right</Button>
                                </ButtonGroup>
                                </li>
                                <li>
                                <ButtonGroup className="btn-group-toggle"> 
                                    <Button variant="warning button-icon" target="_blank" href="#">Left</Button>
                                    <Button variant="warning button-icon" target="_blank" href="#">Middle</Button>
                                    <Button variant="warning button-icon" target="_blank" href="#">Right</Button>
                                </ButtonGroup>
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col lg='4' md="6" sm="6">
                    <Card className="card-block card-stretch card-height blog">
                        <Card.Header>
                            <Card.Header.Title>
                                <h4 className="card-title">Outline Middle Buttons</h4>
                            </Card.Header.Title>
                        </Card.Header>
                        <Card.Body>
                            <ul className="list-inline p-0 m-0 text-center">
                                <li className="mb-2">
                                <ButtonGroup className="btn-group-toggle"> 
                                    <Button variant="outline-primary button-icon" target="_blank" href="#">Left</Button>
                                    <Button variant="primary button-icon" target="_blank" href="#">Middle</Button>
                                    <Button variant="outline-primary button-icon" target="_blank" href="#">Right</Button>
                                </ButtonGroup>
                                </li>
                                <li className="mb-2">
                                <ButtonGroup className="btn-group-toggle"> 
                                    <Button variant="outline-success button-icon" target="_blank" href="#">Left</Button>
                                    <Button variant="success button-icon" target="_blank" href="#">Middle</Button>
                                    <Button variant="outline-success button-icon" target="_blank" href="#">Right</Button>
                                </ButtonGroup>
                                </li>
                                <li>
                                <ButtonGroup className="btn-group-toggle"> 
                                    <Button variant="outline-warning button-icon" target="_blank" href="#">Left</Button>
                                    <Button variant="warning button-icon" target="_blank" href="#">Middle</Button>
                                    <Button variant="outline-warning button-icon" target="_blank" href="#">Right</Button>
                                </ButtonGroup>
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col lg='4' md="6" sm="6">
                    <Card className="card-block card-stretch card-height blog">
                        <Card.Header>
                            <Card.Header.Title>
                                <h4 className="card-title">Outline Side Buttons</h4>
                            </Card.Header.Title>
                        </Card.Header>
                        <Card.Body>
                            <ul className="list-inline p-0 m-0 text-center">
                                <li className="mb-2">
                                    <ButtonGroup className="btn-group-toggle"> 
                                        <Button variant="primary button-icon" target="_blank" href="#">Left</Button>
                                        <Button variant="outline-primary button-icon" target="_blank" href="#">Middle</Button>
                                        <Button variant="primary button-icon" target="_blank" href="#">Right</Button>
                                    </ButtonGroup>
                                </li>
                                <li className="mb-2">
                                    <ButtonGroup className="btn-group-toggle"> 
                                        <Button variant="success button-icon" target="_blank" href="#">Left</Button>
                                        <Button variant="outline-success button-icon" target="_blank" href="#">Middle</Button>
                                        <Button variant="success button-icon" target="_blank" href="#">Right</Button>
                                    </ButtonGroup>
                                </li>
                                <li>
                                    <ButtonGroup className="btn-group-toggle"> 
                                        <Button variant="warning button-icon" target="_blank" href="#">Left</Button>
                                        <Button variant="outline-warning button-icon" target="_blank" href="#">Middle</Button>
                                        <Button variant="warning button-icon" target="_blank" href="#">Right</Button>
                                    </ButtonGroup>
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col lg='4' md="6" sm="6">
                    <Card className="card-block card-stretch card-height blog">
                        <Card.Header>
                            <Card.Header.Title>
                                <h4 className="card-title">Outline Buttons</h4>
                            </Card.Header.Title>
                        </Card.Header>
                        <Card.Body>
                            <ul className="list-inline p-0 m-0 text-center">
                                <li className="mb-2">
                                    <ButtonGroup className="btn-group-toggle"> 
                                        <Button variant="outline-primary button-icon" target="_blank" href="#">Left</Button>
                                        <Button variant="outline-primary button-icon" target="_blank" href="#">Middle</Button>
                                        <Button variant="outline-primary button-icon" target="_blank" href="#">Right</Button>
                                    </ButtonGroup>
                                </li>
                                <li className="mb-2">
                                    <ButtonGroup className="btn-group-toggle"> 
                                        <Button variant="outline-success button-icon" target="_blank" href="#">Left</Button>
                                        <Button variant="outline-success button-icon" target="_blank" href="#">Middle</Button>
                                        <Button variant="outline-success button-icon" target="_blank" href="#">Right</Button>
                                    </ButtonGroup>
                                </li>
                                <li>
                                    <ButtonGroup className="btn-group-toggle"> 
                                        <Button variant="outline-warning button-icon" target="_blank" href="#">Left</Button>
                                        <Button variant="outline-warning button-icon" target="_blank" href="#">Middle</Button>
                                        <Button variant="outline-warning button-icon" target="_blank" href="#">Right</Button>
                                    </ButtonGroup>
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col lg="6" md="6" sm="6">
                    <Card className="card-block card-stretch card-height blog">
                        <Card.Header>
                            <Card.Header.Title>
                                <h4 className="card-title">Toolbar Buttons</h4>
                            </Card.Header.Title>
                        </Card.Header>
                        <Card.Body>
                            <ul className="list-inline p-0 m-0 text-center">
                                <li className="d-flex align-items-center justify-content-center mb-2">
                                    <ButtonGroup className="btn-group-toggle btn-group-edges me-2 btn-group1"> 
                                        <Button variant="primary button-icon" target="_blank" href="#">1</Button>
                                        <Button variant="primary button-icon" target="_blank" href="#">2</Button>
                                        <Button variant="primary button-icon" target="_blank" href="#">3</Button>
                                    </ButtonGroup>
                                    <ButtonGroup className="btn-group-toggle btn-group-edges me-2 btn-group2"> 
                                        <Button variant="primary button-icon" target="_blank" href="#">4</Button>
                                        <Button variant="primary button-icon" target="_blank" href="#">5</Button>
                                    </ButtonGroup>
                                    <ButtonGroup className="btn-group-toggle btn-group3"> 
                                        <Button variant="primary rounded button-icon" target="_blank" href="#">6</Button>
                                    </ButtonGroup>
                                </li>
                                <li className="d-flex align-items-center justify-content-center mb-2">
                                    <ButtonGroup className="btn-group-toggle btn-group-edges me-2 btn-group1"> 
                                        <Button variant="success button-icon" target="_blank" href="#">1</Button>
                                        <Button variant="success button-icon" target="_blank" href="#">2</Button>
                                        <Button variant="success button-icon" target="_blank" href="#">3</Button>
                                    </ButtonGroup>
                                    <ButtonGroup className="btn-group-toggle btn-group-edges me-2 btn-group2"> 
                                        <Button variant="success button-icon" target="_blank" href="#">4</Button>
                                        <Button variant="success button-icon" target="_blank" href="#">5</Button>
                                    </ButtonGroup>
                                    <ButtonGroup className="btn-group-toggle btn-group3"> 
                                        <Button variant="success rounded button-icon" target="_blank" href="#">6</Button>
                                    </ButtonGroup>
                                </li>
                                <li className="d-flex align-items-center justify-content-center">
                                    <ButtonGroup className="btn-group-toggle btn-group-edges me-2 btn-group1"> 
                                        <Button variant="warning button-icon" target="_blank" href="#">1</Button>
                                        <Button variant="warning button-icon" target="_blank" href="#">2</Button>
                                        <Button variant="warning button-icon" target="_blank" href="#">3</Button>
                                    </ButtonGroup>
                                    <ButtonGroup className="btn-group-toggle btn-group-edges me-2 btn-group2"> 
                                        <Button variant="warning button-icon" target="_blank" href="#">4</Button>
                                        <Button variant="warning button-icon" target="_blank" href="#">5</Button>
                                    </ButtonGroup>
                                    <ButtonGroup className="btn-group-toggle btn-group3"> 
                                        <Button variant="warning rounded button-icon" target="_blank" href="#">6</Button>
                                    </ButtonGroup>
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col lg="6" md="6" sm="6">
                    <Card className="card-block card-stretch card-height blog">
                        <Card.Header>
                            <Card.Header.Title>
                                <h4 className="card-title">Basic Buttons</h4>
                            </Card.Header.Title>
                        </Card.Header>
                        <Card.Body>
                            <ul className="list-inline p-0 m-0 text-center">
                                <li className="mb-2">
                                    <ButtonGroup className="btn-group-toggle btn-group-sm  btn-group-edges"> 
                                        <Button variant="primary button-icon" target="_blank" href="#">Left</Button>
                                        <Button variant="primary button-icon" target="_blank" href="#">Middle</Button>
                                        <Button variant="primary button-icon" target="_blank" href="#">Right</Button>
                                    </ButtonGroup>
                                </li>
                                <li className="mb-2">
                                    <ButtonGroup className="btn-group-toggle  btn-group-edges"> 
                                        <Button variant="success button-icon" target="_blank" href="#">Left</Button>
                                        <Button variant="success button-icon" target="_blank" href="#">Middle</Button>
                                        <Button variant="success button-icon" target="_blank" href="#">Right</Button>
                                    </ButtonGroup>
                                </li>
                                <li>
                                    <ButtonGroup className="btn-group-toggle btn-group-lg  btn-group-edges"> 
                                        <Button variant="warning button-icon" target="_blank" href="#">Left</Button>
                                        <Button variant="warning button-icon" target="_blank" href="#">Middle</Button>
                                        <Button variant="warning button-icon" target="_blank" href="#">Right</Button>
                                    </ButtonGroup>
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default ButtonGroups;
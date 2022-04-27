import {React,useState} from 'react'
import { Col,Container,Row,Alert} from 'react-bootstrap'
import Card from '../../../components/card'

const Alerts = () => {
    const [show, setShow] = useState(true);
    const [show1, setShow1] = useState(true);
    const [show2, setShow2] = useState(true);
    const [show3, setShow3] = useState(true);
    const [show4, setShow4] = useState(true);
    const [show5, setShow5] = useState(true);
    const [show6, setShow6] = useState(true);
    const [show7, setShow7] = useState(true);
    const [show8, setShow8] = useState(true);
    const [show9, setShow9] = useState(true);
    const [show10, setShow10] = useState(true);
    const [show11, setShow11] = useState(true);
    const [show12, setShow12] = useState(true);
    const [show13, setShow13] = useState(true);
    return (
        <>
            <Container fluid>
                <Row>
                    <Col sm="12" lg="6">
                        <Card>
                            <Card.Header>
                                <Card.Header.Title>
                                    <h4 className="card-title">Basic Alerts</h4>
                                </Card.Header.Title>
                            </Card.Header>
                            <Card.Body>
                                <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever
                                </p>
                                <Alert variant="success alert-dismissible fade mb-3" role="alert" show={show13}>
                                <span> This is a success alert—check it out!</span>
                                <button type="button" className="btn-close" data-bs-dismiss="alert"
                                        aria-label="Close" onClick={() => setShow13(false)}></button>
                                </Alert>
                                <Alert variant="info alert-dismissible fade mb-3" role="alert" show={show}>
                                    <span> This is a success alert—check it out!</span>
                                    <button type="button" className="btn-close" data-bs-dismiss="alert"
                                            aria-label="Close" onClick={() => setShow(false)}></button>
                                </Alert>
                                <Alert variant="warning alert-dismissible fade mb-3" role="alert" show={show1}>
                                    <span> This is a success alert—check it out!</span>
                                    <button type="button" className="btn-close" data-bs-dismiss="alert"
                                            aria-label="Close" onClick={() => setShow1(false)}></button>
                                </Alert>
                                <Alert variant="danger alert-dismissible fade" role="alert" show={show2}>
                                    <span> This is a success alert—check it out!</span>
                                    <button type="button" className="btn-close" data-bs-dismiss="alert"
                                            aria-label="Close" onClick={() => setShow2(false)}></button>
                                </Alert>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm="12" lg="6">
                        <Card>
                            <Card.Header>
                                <Card.Header.Title>
                                    <h4 className="card-title">Basic Alerts With Icons</h4>
                                </Card.Header.Title>
                            </Card.Header>
                            <Card.Body>
                                <svg xmlns="http://www.w3.org/2000/svg" style={{display: "none"}}>
                                    <symbol id="check-circle-fill3" fill="currentColor" viewBox="0 0 16 16">
                                            <path
                                                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                    </symbol>
                                    <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
                                            <path
                                                d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                                    </symbol>
                                    <symbol id="exclamation-triangle-fill01" fill="currentColor" viewBox="0 0 16 16">
                                            <path
                                                d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                    </symbol>
                                </svg>
                                <Alert variant="primary d-flex align-items-center" role="alert">
                                    <svg id="info-fill" fill="currentColor" viewBox="0 0 16 16" width="24" height="24">
                                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path>
                                    </svg>
                                    <div>
                                            An example alert with an icon
                                    </div>
                                </Alert>
                                <Alert variant="success d-flex align-items-center" role="alert">
                                    <svg id="check-circle-fill3" fill="currentColor" viewBox="0 0 16 16" width="24" height="24">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                                    </svg>
                                    <div>
                                            An example success alert with an icon
                                    </div>
                                </Alert>
                                <Alert variant="warning d-flex align-items-center" role="alert">
                                    <svg id="exclamation-triangle-fill01" fill="currentColor" viewBox="0 0 16 16" width="24" height="24">
                                        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                                    </svg>
                                    <div>
                                            An example warning alert with an icon
                                    </div>
                                </Alert>
                                <Alert variant="danger d-flex align-items-center" role="alert">
                                    <svg id="exclamation-triangle-fill01" fill="currentColor" viewBox="0 0 16 16" width="24" height="24">
                                        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                                    </svg>
                                    <div>
                                            An example danger alert with an icon
                                    </div>
                                </Alert>
                            </Card.Body>
                        </Card>
                    </Col>
                    </Row>
                    <Row>
                    <Col sm="12" lg="6">
                        <Card>
                            <Card.Header>
                                <Card.Header.Title>
                                <h4 className="card-title">Basic Line Alerts</h4>
                                </Card.Header.Title>
                            </Card.Header>
                            <Card.Body>
                                <Alert variant="solid alert-success alert-dismissible fade mb-3" role="alert" show={show3}>
                                    <span> This is a success alert—check it out!</span>
                                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close" onClick={() => setShow3(false)}></button>
                                </Alert>
                                <Alert variant="solid alert-info alert-dismissible fade mb-3" role="alert" show={show4}>
                                    <span> This is a success alert—check it out!</span>
                                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close" onClick={() => setShow4(false)}></button>
                                </Alert>
                                <Alert variant="solid alert-warning alert-dismissible fade mb-3" role="alert" show={show5}>
                                    <span> This is a success alert—check it out!</span>
                                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close" onClick={() => setShow5(false)}></button>
                                </Alert>
                                <Alert variant="solid alert-danger alert-dismissible fade" role="alert" show={show6}>
                                    <span> This is a success alert—check it out!</span>
                                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close" onClick={() => setShow6(false)}></button>
                                </Alert>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm="12" lg="6">
                        <Card>
                            <Card.Header>
                                <Card.Header.Title>
                                    <h4 className="card-title">Basic Line Alerts With Icons</h4>
                                </Card.Header.Title>
                            </Card.Header>
                            <Card.Body>
                                <svg xmlns="http://www.w3.org/2000/svg" style={{display: "none"}}>
                                    <symbol id="check-circle-fill4" fill="currentColor" viewBox="0 0 16 16" width="24" height="24">
                                            <path
                                                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                    </symbol>
                                    <symbol id="info-fill2" fill="currentColor" viewBox="0 0 16 16" width="24" height="24">
                                            <path
                                                d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                                    </symbol>
                                    <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16" width="24" height="24">
                                            <path
                                                d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                    </symbol>
                                </svg>
                                <Alert variant="solid alert-primary d-flex align-items-center" role="alert">
                                    <svg id="info-fill2" fill="currentColor" viewBox="0 0 16 16" width="24" height="24">
                                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path>
                                    </svg>
                                    <div>
                                            An example alert alert-solid with an icon
                                    </div>
                                </Alert>
                                <Alert variant="solid alert-success d-flex align-items-center" role="alert">
                                    <svg id="check-circle-fill4" fill="currentColor" viewBox="0 0 16 16" width="24" height="24">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                                    </svg>
                                    <div>
                                            An example success alert alert-solid with an icon
                                    </div>
                                </Alert>
                                    <Alert variant="solid alert-warning d-flex align-items-center" role="alert">
                                    <svg id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16" width="24" height="24">
                                        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                                    </svg>
                                    <div>
                                            An example warning alert alert-solid with an icon
                                    </div>
                                </Alert>
                                <Alert variant="solid alert-danger d-flex align-items-center" role="alert">
                                    <svg id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16" width="24" height="24">
                                        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                                    </svg>
                                    <div>
                                            An example danger alert alert-solid with an icon
                                    </div>
                                </Alert>
                            </Card.Body>
                        </Card>
                    </Col>
                    </Row>
                    <Row>
                    <Col sm="12">
                        <Card>
                            <Card.Header>
                                <Card.Header.Title>
                                    <h4 className="card-title">Alerts With Background</h4>
                                </Card.Header.Title>
                            </Card.Header>
                            <Card.Body>
                                <Alert variant="left alert-success alert-dismissible fade mb-3" role="alert" show={show7}>
                                    <span> This is a success alert—check it out!</span>
                                    <button type="button" className="btn-close" data-bs-dismiss="alert"
                                            aria-label="Close" onClick={() => setShow7(false)}></button>
                                </Alert>
                                <Alert variant="top alert-info alert-dismissible fade mb-3" role="alert" show={show8}>
                                    <span> This is a success alert—check it out!</span>
                                    <button type="button" className="btn-close" data-bs-dismiss="alert"
                                            aria-label="Close" onClick={() => setShow8(false)}></button>
                                </Alert>
                                <Alert variant="right alert-warning alert-dismissible fade mb-3" role="alert" show={show9}>
                                    <span> This is a success alert—check it out!</span>
                                    <button type="button" className="btn-close" data-bs-dismiss="alert"
                                            aria-label="Close" onClick={() => setShow9(false)}></button>
                                </Alert>
                                <Alert variant="bottom alert-danger alert-dismissible fade" role="alert" show={show10}>
                                    <span> This is a success alert—check it out!</span>
                                    <button type="button" className="btn-close" data-bs-dismiss="alert"
                                            aria-label="Close" onClick={() => setShow10(false)}></button>
                                </Alert>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg="12">
                        <Card>
                                <Card.Header>
                                    <Card.Header.Title>
                                        <h4 className="card-title">For Banner</h4>
                                    </Card.Header.Title>
                                </Card.Header>
                                <Card.Body>
                                <Alert variant="warning rounded-0 alert-dismissible fade" role="alert"  show={show11}>
                                    <span> This is a success alert—check it out!</span>
                                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => setShow11(false)}></button>
                                </Alert>

                                <Alert variant="warning alert-solid rounded-0 alert-dismissible fade" role="alert"  show={show12}>
                                    <span> This is a success alert—check it out!</span>
                                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close" onClick={() => setShow12(false)}></button>
                                </Alert>
                                </Card.Body>
                        </Card>
                    </Col>
                    </Row>
            </Container>
        </>
    )
}
export default Alerts;
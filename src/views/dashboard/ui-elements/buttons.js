import React from 'react'
import { Col,Container,Row,Button,ButtonGroup,Dropdown,DropdownButton } from 'react-bootstrap'
import Card from '../../../components/card'

const Buttons = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col sm="12" lg="6">
                        <Card>
                            <Card.Header>
                            <Card.Header.Title>
                                <h4 className="card-title">Default Buttons</h4>
                            </Card.Header.Title>
                            </Card.Header>
                            <Card.Body>
                            <p className="mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                            <Button type="button" variant="primary mt-2">Primary</Button>{' '}
                            <Button type="button" variant="secondary mt-2">Secondary</Button>{' '}
                            <Button type="button" variant="success mt-2">Success</Button>{' '}
                            <Button type="button" variant="danger mt-2">Danger</Button>{' '}
                            <Button type="button" variant="warning mt-2">Warning</Button>{' '}
                            <Button type="button" variant="info mt-2">Info</Button>{' '}
                            <Button type="button" variant="light mt-2">Light</Button>{' '}
                            <Button type="button" variant="dark mt-2">Dark</Button>{' '}
                            <Button type="button" variant="link mt-2">Link</Button>{' '}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm="12" lg="6">
                        <Card>
                            <Card.Header>
                                <Card.Header.Title>
                                    <h4 className="card-title">Default Buttons Rounded Shape</h4>
                                </Card.Header.Title>
                            </Card.Header>
                            <Card.Body>
                                <p className="mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                                <Button type="button" variant="primary rounded-pill mt-2">Primary</Button>{' '}
                                <Button type="button" variant="secondary rounded-pill mt-2">Secondary</Button>{' '}
                                <Button type="button" variant="success rounded-pill mt-2">Success</Button>{' '}
                                <Button type="button" variant="danger rounded-pill mt-2">Danger</Button>{' '}
                                <Button type="button" variant="warning rounded-pill mt-2">Warning</Button>{' '}
                                <Button type="button" variant="info rounded-pill mt-2">Info</Button>{' '}
                                <Button type="button" variant="light rounded-pill mt-2">Light</Button>{' '}
                                <Button type="button" variant="dark rounded-pill mt-2">Dark</Button>{' '}
                                <Button type="button" variant="link rounded-pill mt-2">Link</Button>{' '}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" lg="6">
                        <Card>
                            <Card.Header>
                                <Card.Header.Title>
                                    <h4 className="card-title">Outline Buttons</h4>
                                </Card.Header.Title>
                            </Card.Header>
                            <Card.Body>
                                <p className="mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                                <Button type="button" variant="outline-primary mt-2">Primary</Button>{' '}
                                <Button type="button" variant="outline-secondary mt-2">Secondary</Button>{' '}
                                <Button type="button" variant="outline-success mt-2">Success</Button>{' '}
                                <Button type="button" variant="outline-danger mt-2">Danger</Button>{' '}
                                <Button type="button" variant="outline-warning mt-2">Warning</Button>{' '}
                                <Button type="button" variant="outline-info mt-2">Info</Button>{' '}
                                <Button type="button" variant="outline-dark mt-2">Dark</Button>{' '}
                                <Button type="button" variant="outline-link mt-2">Link</Button>{' '}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm="12" lg="6">
                        <Card>
                            <Card.Header>
                                <Card.Header.Title>
                                    <h4 className="card-title">Rounded Outline Buttons</h4>
                                </Card.Header.Title>
                            </Card.Header>
                            <Card.Body>
                                <p className="mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                                <Button type="button" variant="outline-primary rounded-pill mt-2">Primary</Button>{' '}
                                <Button type="button" variant="outline-secondary rounded-pill mt-2">Secondary</Button>{' '}
                                <Button type="button" variant="outline-success rounded-pill mt-2">Success</Button>{' '}
                                <Button type="button" variant="outline-danger rounded-pill mt-2">Danger</Button>{' '}
                                <Button type="button" variant="outline-warning rounded-pill mt-2">Warning</Button>{' '}
                                <Button type="button" variant="outline-info rounded-pill mt-2">Info</Button>{' '}
                                <Button type="button" variant="outline-dark rounded-pill mt-2">Dark</Button>{' '}
                                <Button type="button" variant="outline-link rounded-pill mt-2">Link</Button>{' '}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" lg="6">
                        <Card>
                            <Card.Header>
                                <Card.Header.Title>
                                    <h4 className="card-title">Default Buttons</h4>
                                </Card.Header.Title>
                            </Card.Header>
                            <Card.Body>
                            <p className="mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                            <Button type="button" variant="primary mt-2">
                                <svg width="15" height="16" className="me-2" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.7162 14.2236H5.49622" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12.7162 10.0371H5.49622" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M8.25131 5.86035H5.49631" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12.9086 0.75C12.9086 0.75 5.23161 0.754 5.21961 0.754C2.45961 0.771 0.75061 2.587 0.75061 5.357V14.553C0.75061 17.337 2.47261 19.16 5.25661 19.16C5.25661 19.16 12.9326 19.157 12.9456 19.157C15.7056 19.14 17.4156 17.323 17.4156 14.553V5.357C17.4156 2.573 15.6926 0.75 12.9086 0.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>Primary</Button>{' '}
                            <Button type="button" variant="secondary mt-2">
                                <svg width="16" height="15" className="me-2" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M15 4.69995C16.07 5.04595 16.826 6.00095 16.917 7.12195" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>Secondary</Button>{' '}
                            <Button type="button" variant="success mt-2">
                                <svg width="15" height="16" className="me-2" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.7162 14.2236H5.49622" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12.7162 10.0371H5.49622" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M8.25131 5.86035H5.49631" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12.9086 0.75C12.9086 0.75 5.23161 0.754 5.21961 0.754C2.45961 0.771 0.75061 2.587 0.75061 5.357V14.553C0.75061 17.337 2.47261 19.16 5.25661 19.16C5.25661 19.16 12.9326 19.157 12.9456 19.157C15.7056 19.14 17.4156 17.323 17.4156 14.553V5.357C17.4156 2.573 15.6926 0.75 12.9086 0.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>Success</Button>{' '}
                            <Button type="button" variant="danger mt-2">
                                <svg width="16" height="15" className="me-2" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M15 4.69995C16.07 5.04595 16.826 6.00095 16.917 7.12195" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>Danger</Button>{' '}
                            <Button type="button" variant="warning mt-2">
                                <svg width="15" height="16" className="me-2" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.7162 14.2236H5.49622" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12.7162 10.0371H5.49622" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M8.25131 5.86035H5.49631" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12.9086 0.75C12.9086 0.75 5.23161 0.754 5.21961 0.754C2.45961 0.771 0.75061 2.587 0.75061 5.357V14.553C0.75061 17.337 2.47261 19.16 5.25661 19.16C5.25661 19.16 12.9326 19.157 12.9456 19.157C15.7056 19.14 17.4156 17.323 17.4156 14.553V5.357C17.4156 2.573 15.6926 0.75 12.9086 0.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>Warning</Button>{' '}
                            <Button type="button" variant="info mt-2">
                                <svg width="16" height="15" className="me-2" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M15 4.69995C16.07 5.04595 16.826 6.00095 16.917 7.12195" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>Info</Button>{' '}
                            <Button type="button" variant="light mt-2"><svg width="15" height="16" className="me-2" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.7162 14.2236H5.49622" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12.7162 10.0371H5.49622" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M8.25131 5.86035H5.49631" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12.9086 0.75C12.9086 0.75 5.23161 0.754 5.21961 0.754C2.45961 0.771 0.75061 2.587 0.75061 5.357V14.553C0.75061 17.337 2.47261 19.16 5.25661 19.16C5.25661 19.16 12.9326 19.157 12.9456 19.157C15.7056 19.14 17.4156 17.323 17.4156 14.553V5.357C17.4156 2.573 15.6926 0.75 12.9086 0.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>Light</Button>{' '}
                            <Button type="button" variant="dark mt-2">
                                <svg width="16" height="15" className="me-2" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M15 4.69995C16.07 5.04595 16.826 6.00095 16.917 7.12195" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>Dark</Button>{' '}
                            <Button type="button" variant="link mt-2">
                                <svg width="15" height="16" className="me-2" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.7162 14.2236H5.49622" stroke="#2e46ba" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12.7162 10.0371H5.49622" stroke="#2e46ba" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M8.25131 5.86035H5.49631" stroke="#2e46ba" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12.9086 0.75C12.9086 0.75 5.23161 0.754 5.21961 0.754C2.45961 0.771 0.75061 2.587 0.75061 5.357V14.553C0.75061 17.337 2.47261 19.16 5.25661 19.16C5.25661 19.16 12.9326 19.157 12.9456 19.157C15.7056 19.14 17.4156 17.323 17.4156 14.553V5.357C17.4156 2.573 15.6926 0.75 12.9086 0.75Z" stroke="#2e46ba" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>Link</Button>{' '}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm="12" lg="6">
                        <Card>
                            <Card.Header>
                                <Card.Header.Title>
                                    <h4 className="card-title">Default Buttons Rounded Shape</h4>
                                </Card.Header.Title>
                            </Card.Header>
                            <Card.Body>
                            <p className="mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                            <Button type="button" variant="primary rounded-pill mt-2">
                                <svg width="15" height="16" className="me-2" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.7162 14.2236H5.49622" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12.7162 10.0371H5.49622" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M8.25131 5.86035H5.49631" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12.9086 0.75C12.9086 0.75 5.23161 0.754 5.21961 0.754C2.45961 0.771 0.75061 2.587 0.75061 5.357V14.553C0.75061 17.337 2.47261 19.16 5.25661 19.16C5.25661 19.16 12.9326 19.157 12.9456 19.157C15.7056 19.14 17.4156 17.323 17.4156 14.553V5.357C17.4156 2.573 15.6926 0.75 12.9086 0.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>Primary</Button>{' '}
                            <Button type="button" variant="secondary rounded-pill mt-2">
                                <svg width="16" height="15" className="me-2" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M15 4.69995C16.07 5.04595 16.826 6.00095 16.917 7.12195" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>Secondary</Button>{' '}
                            <Button type="button" variant="success rounded-pill mt-2">
                                <svg width="15" height="16" className="me-2" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.7162 14.2236H5.49622" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12.7162 10.0371H5.49622" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M8.25131 5.86035H5.49631" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12.9086 0.75C12.9086 0.75 5.23161 0.754 5.21961 0.754C2.45961 0.771 0.75061 2.587 0.75061 5.357V14.553C0.75061 17.337 2.47261 19.16 5.25661 19.16C5.25661 19.16 12.9326 19.157 12.9456 19.157C15.7056 19.14 17.4156 17.323 17.4156 14.553V5.357C17.4156 2.573 15.6926 0.75 12.9086 0.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>Success</Button>{' '}
                            <Button type="button" variant="danger rounded-pill mt-2">
                                <svg width="16" height="15" className="me-2" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M15 4.69995C16.07 5.04595 16.826 6.00095 16.917 7.12195" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>Danger</Button>{' '}
                            <Button type="button" variant="warning rounded-pill mt-2">
                                <svg width="15" height="16" className="me-2" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.7162 14.2236H5.49622" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12.7162 10.0371H5.49622" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M8.25131 5.86035H5.49631" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12.9086 0.75C12.9086 0.75 5.23161 0.754 5.21961 0.754C2.45961 0.771 0.75061 2.587 0.75061 5.357V14.553C0.75061 17.337 2.47261 19.16 5.25661 19.16C5.25661 19.16 12.9326 19.157 12.9456 19.157C15.7056 19.14 17.4156 17.323 17.4156 14.553V5.357C17.4156 2.573 15.6926 0.75 12.9086 0.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>Warning</Button>{' '}
                            <Button type="button" variant="info rounded-pill mt-2">
                                <svg width="16" height="15" className="me-2" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M15 4.69995C16.07 5.04595 16.826 6.00095 16.917 7.12195" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>Info</Button>{' '}
                            <Button type="button" variant="light rounded-pill mt-2">
                                <svg width="15" height="16" className="me-2" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.7162 14.2236H5.49622" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12.7162 10.0371H5.49622" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M8.25131 5.86035H5.49631" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12.9086 0.75C12.9086 0.75 5.23161 0.754 5.21961 0.754C2.45961 0.771 0.75061 2.587 0.75061 5.357V14.553C0.75061 17.337 2.47261 19.16 5.25661 19.16C5.25661 19.16 12.9326 19.157 12.9456 19.157C15.7056 19.14 17.4156 17.323 17.4156 14.553V5.357C17.4156 2.573 15.6926 0.75 12.9086 0.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>Light</Button>{' '}
                            <Button type="button" variant="dark rounded-pill mt-2">
                                <svg width="16" height="15" className="me-2" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M15 4.69995C16.07 5.04595 16.826 6.00095 16.917 7.12195" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>Dark</Button>{' '}
                            <Button type="button" variant="link rounded-pill mt-2">
                                <svg width="15" height="16" className="me-2" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.7162 14.2236H5.49622" stroke="#2e46ba" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12.7162 10.0371H5.49622" stroke="#2e46ba" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M8.25131 5.86035H5.49631" stroke="#2e46ba" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12.9086 0.75C12.9086 0.75 5.23161 0.754 5.21961 0.754C2.45961 0.771 0.75061 2.587 0.75061 5.357V14.553C0.75061 17.337 2.47261 19.16 5.25661 19.16C5.25661 19.16 12.9326 19.157 12.9456 19.157C15.7056 19.14 17.4156 17.323 17.4156 14.553V5.357C17.4156 2.573 15.6926 0.75 12.9086 0.75Z" stroke="#2e46ba" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>Link</Button>{' '}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" lg="6">
                        <Card>
                            <Card.Header>
                                <Card.Header.Title>
                                    <h4 className="card-title">Outline Buttons</h4>
                                </Card.Header.Title>
                            </Card.Header>
                            <Card.Body>
                            <p className="mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                            <Button type="button" variant="outline-primary mt-2">
                                <svg width="16" height="15" className="me-2" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M15 4.69995C16.07 5.04595 16.826 6.00095 16.917 7.12195" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>Primary</Button>{' '}
                            <Button type="button" variant="outline-secondary mt-2">
                                <svg width="16" height="15" className="me-2" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M3.81397 17.4368H18.197C19.779 17.4368 20.772 15.7267 19.986 14.3527L12.8 1.78775C12.009 0.40475 10.015 0.40375 9.22297 1.78675L2.02497 14.3518C1.23897 15.7258 2.23097 17.4368 3.81397 17.4368Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M11.0024 10.4147V7.3147" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M10.995 13.5H11.005" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>Secondary</Button>{' '}
                            <Button type="button" variant="outline-success mt-2">
                                <svg width="16" height="15" className="me-2" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M15 4.69995C16.07 5.04595 16.826 6.00095 16.917 7.12195" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>Success</Button>{' '}
                            <Button type="button" variant="outline-danger mt-2">
                                <svg width="16" height="15" className="me-2" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M3.81397 17.4368H18.197C19.779 17.4368 20.772 15.7267 19.986 14.3527L12.8 1.78775C12.009 0.40475 10.015 0.40375 9.22297 1.78675L2.02497 14.3518C1.23897 15.7258 2.23097 17.4368 3.81397 17.4368Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M11.0024 10.4147V7.3147" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M10.995 13.5H11.005" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>Danger</Button>{' '}
                            <Button type="button" variant="outline-warning mt-2">
                                <svg width="16" height="15" className="me-2" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M15 4.69995C16.07 5.04595 16.826 6.00095 16.917 7.12195" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>Warning</Button>{' '}
                            <Button type="button" variant="outline-info mt-2">
                                <svg width="16" height="15" className="me-2" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M3.81397 17.4368H18.197C19.779 17.4368 20.772 15.7267 19.986 14.3527L12.8 1.78775C12.009 0.40475 10.015 0.40375 9.22297 1.78675L2.02497 14.3518C1.23897 15.7258 2.23097 17.4368 3.81397 17.4368Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M11.0024 10.4147V7.3147" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M10.995 13.5H11.005" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>Info</Button>{' '}
                            <Button type="button" variant="outline-dark mt-2">
                                <svg width="16" height="15" className="me-2" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M3.81397 17.4368H18.197C19.779 17.4368 20.772 15.7267 19.986 14.3527L12.8 1.78775C12.009 0.40475 10.015 0.40375 9.22297 1.78675L2.02497 14.3518C1.23897 15.7258 2.23097 17.4368 3.81397 17.4368Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M11.0024 10.4147V7.3147" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M10.995 13.5H11.005" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>Dark</Button>{' '}
                            <Button type="button" variant="outline-link mt-2">
                                <svg width="16" height="15" className="me-2" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M15 4.69995C16.07 5.04595 16.826 6.00095 16.917 7.12195" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>Link</Button>{' '}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm="12" lg="6">
                        <Card>
                            <Card.Header>
                                <Card.Header.Title>
                                    <h4 className="card-title">Rounded Outline Buttons</h4>
                                </Card.Header.Title>
                            </Card.Header>
                            <Card.Body>
                            <p className="mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                            <Button type="button" variant="outline-primary rounded-pill mt-2">
                                <svg width="16" height="15" className="me-2" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M15 4.69995C16.07 5.04595 16.826 6.00095 16.917 7.12195" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>Primary</Button>{' '}
                            <Button type="button" variant="outline-secondary rounded-pill mt-2">
                                <svg width="16" height="15" className="me-2" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M3.81397 17.4368H18.197C19.779 17.4368 20.772 15.7267 19.986 14.3527L12.8 1.78775C12.009 0.40475 10.015 0.40375 9.22297 1.78675L2.02497 14.3518C1.23897 15.7258 2.23097 17.4368 3.81397 17.4368Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M11.0024 10.4147V7.3147" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M10.995 13.5H11.005" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>Secondary</Button>{' '}
                            <Button type="button" variant="outline-success rounded-pill mt-2">
                                <svg width="16" height="15" className="me-2" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M15 4.69995C16.07 5.04595 16.826 6.00095 16.917 7.12195" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>Success</Button>{' '}
                            <Button type="button" variant="outline-danger rounded-pill mt-2">
                                <svg width="16" height="15" className="me-2" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M3.81397 17.4368H18.197C19.779 17.4368 20.772 15.7267 19.986 14.3527L12.8 1.78775C12.009 0.40475 10.015 0.40375 9.22297 1.78675L2.02497 14.3518C1.23897 15.7258 2.23097 17.4368 3.81397 17.4368Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M11.0024 10.4147V7.3147" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M10.995 13.5H11.005" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>Danger</Button>{' '}
                            <Button type="button" variant="outline-warning rounded-pill mt-2">
                                <svg width="16" height="15" className="me-2" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M15 4.69995C16.07 5.04595 16.826 6.00095 16.917 7.12195" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>Warning</Button>{' '}
                            <Button type="button" variant="outline-info rounded-pill mt-2">
                                <svg width="16" height="15" className="me-2" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M3.81397 17.4368H18.197C19.779 17.4368 20.772 15.7267 19.986 14.3527L12.8 1.78775C12.009 0.40475 10.015 0.40375 9.22297 1.78675L2.02497 14.3518C1.23897 15.7258 2.23097 17.4368 3.81397 17.4368Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M11.0024 10.4147V7.3147" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M10.995 13.5H11.005" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>Info</Button>{' '}
                            <Button type="button" variant="outline-dark rounded-pill mt-2">
                                <svg width="16" height="15" className="me-2" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M3.81397 17.4368H18.197C19.779 17.4368 20.772 15.7267 19.986 14.3527L12.8 1.78775C12.009 0.40475 10.015 0.40375 9.22297 1.78675L2.02497 14.3518C1.23897 15.7258 2.23097 17.4368 3.81397 17.4368Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M11.0024 10.4147V7.3147" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M10.995 13.5H11.005" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>Dark</Button>{' '}
                            <Button type="button" variant="outline-link rounded-pill mt-2">
                                <svg width="16" height="15" className="me-2" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M15 4.69995C16.07 5.04595 16.826 6.00095 16.917 7.12195" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>Link</Button>{' '}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" lg="6">
                        <Card>
                            <Card.Header>
                                <Card.Header.Title>
                                    <h4 className="card-title">Button Tags</h4>
                                </Card.Header.Title>
                            </Card.Header>
                            <Card.Body>
                                <p className="mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                                <Button variant="primary mt-2" href="#" role="button">Link</Button>{' '}
                                <Button variant="success mt-2" type="submit">Button</Button>{' '}
                                <Button as="input" variant="danger mt-2" type="button" value="Input"/>{' '}
                                <Button as="input" variant="warning mt-2" type="submit" value="Submit"/>{' '}
                                <Button as="input" variant="info mt-2" type="reset" value="Reset"/>{' '}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm="12" lg="6">
                        <Card>
                            <Card.Header>
                            <Card.Header.Title>
                                <h4 className="card-title">Buttons Sizes</h4>
                            </Card.Header.Title>
                            </Card.Header>
                            <Card.Body>
                                <p className="mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                                <Button type="button" variant="primary me-2 mt-2" size="sm">Small Button</Button>{' '}
                                <Button type="button" variant="success me-2 mt-2">Button</Button>{' '}
                                <Button type="button" variant="info mt-2" size="lg">Large Button</Button>{' '}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" lg="6">
                        <Card>
                            <Card.Header>
                                <Card.Header.Title>
                                    <h4 className="card-title">Block Buttons</h4>
                                </Card.Header.Title>
                            </Card.Header>
                            <div className="card-body d-grid gap-2">
                            <p className="mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                            <Button type="button" variant="primary">Block level button</Button>{' '}
                            <Button type="button" variant="success">Block level button</Button>
                            </div>{' '}
                        </Card>
                    </Col>
                    <Col sm="12" lg="6">
                        <Card>
                            <Card.Header>
                                <Card.Header.Title>
                                    <h4 className="card-title">Icons Buttons</h4>
                                </Card.Header.Title>
                            </Card.Header>
                            <Card.Body>
                                <p className="mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                                <Button type="button" variant="primary mt-2"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                                    </svg>
                                </Button>{' '}
                                <Button type="button" variant="secondary mt-2"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-star" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                                    </svg>
                                </Button>{' '}
                                <Button type="button" variant="success mt-2"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
                                    <circle cx="12" cy="12" r="3" />
                                    </svg>
                                </Button>{' '}
                                <Button type="button" variant="danger mt-2"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-video"  width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z" />
                                    <rect x="3" y="6" width="12" height="12" rx="2" />
                                    </svg>
                                </Button>{' '}
                                <Button type="button" variant="warning mt-2"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <line x1="4" y1="7" x2="20" y2="7" />
                                    <line x1="10" y1="11" x2="10" y2="17" />
                                    <line x1="14" y1="11" x2="14" y2="17" />
                                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                    </svg>
                                </Button>{' '}
                                <Button type="button" variant="info mt-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <rect x="5" y="11" width="14" height="10" rx="2" />
                                    <circle cx="12" cy="16" r="1" />
                                    <path d="M8 11v-4a4 4 0 0 1 8 0v4" />
                                    </svg>
                                </Button>{' '}
                                <Button type="button" variant="light mt-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <circle cx="12" cy="12" r="9" />
                                    <polyline points="12 7 12 12 15 15" />
                                    </svg>
                                </Button>{' '}
                                <Button type="button" variant="dark mt-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <circle cx="12" cy="12" r="4" />
                                    <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
                                    </svg>
                                </Button>{' '}
                                
                                <div className="d-inline-block w-100">
                                    <Button type="button" variant="primary mt-2">
                                        <svg width="16" height="15" className="me-2" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M15 4.69995C16.07 5.04595 16.826 6.00095 16.917 7.12195" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>Buttons</Button>{' '}
                                    <Button type="button" variant="secondary mt-2"><svg className="me-2" xmlns="http://www.w3.org/2000/svg"  width="16" height="15" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                                        </svg>Buttons
                                    </Button>{' '}
                                    <Button type="button" variant="success mt-2"><svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
                                        <circle cx="12" cy="12" r="3" />
                                        </svg>Buttons
                                    </Button>{' '}
                                    <Button type="button" variant="danger mt-2"><svg className="me-2" xmlns="http://www.w3.org/2000/svg"  width="16" height="15" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z" />
                                        <rect x="3" y="6" width="16" height="15" rx="2" />
                                        </svg>Buttons
                                    </Button>{' '}
                                    <Button type="button" variant="info mt-2"><svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <line x1="4" y1="7" x2="20" y2="7" />
                                        <line x1="10" y1="11" x2="10" y2="17" />
                                        <line x1="14" y1="11" x2="14" y2="17" />
                                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                        </svg>Buttons
                                    </Button>{' '}
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" lg="6">
                        <Card>
                            <Card.Header>
                                <Card.Header.Title>
                                    <h4 className="card-title">Social Disabled State</h4>
                                </Card.Header.Title>
                            </Card.Header>
                            <Card.Body>
                            <p className="mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                            <Button type="button" variant="primary mt-2" disabled>Primary button</Button>{' '}
                            <Button type="button" variant="success mt-2" disabled>Button</Button>{' '}
                            <Button type="button" variant="outline-primary mt-2" disabled>Button</Button>{' '}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm="12" lg="6">
                        <Card>
                            <Card.Header>
                                <Card.Header.Title>
                                    <h4 className="card-title">Buttons Toggle States</h4>
                                </Card.Header.Title>
                            </Card.Header>
                            <Card.Body>
                                <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                                <Button type="button" variant="primary" data-bs-toggle="button" aria-pressed="false" >
                                Single toggle
                                </Button>{' '}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" lg="6">
                        <Card>
                            <Card.Header>
                                <Card.Header.Title>
                                    <h4 className="card-title">Default Buttons Active</h4>
                                </Card.Header.Title>
                            </Card.Header>
                            <Card.Body>
                                <p className="mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                                <Button type="button" variant="primary mt-2" active>Active</Button>{' '}
                                <Button type="button" variant="secondary mt-2" active>Active</Button>{' '}
                                <Button type="button" variant="warning mt-2" active>Active</Button>{' '}
                                <Button type="button" variant="accent disabled mt-2" disabled="">Disabled</Button>{' '}
                                <Button type="button" variant="primary disabled mt-2" disabled="">Disabled</Button>{' '}
                                <Button type="button" variant="outline-primary disabled mt-2" disabled="">Disabled</Button>{' '}
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Card.Header.Title>
                                    <h4 className="card-title">Button Group Sizing</h4>
                                </Card.Header.Title>
                            </Card.Header>
                            <Card.Body>
                                <p className="mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                                <div className="d-block">
                                    <ButtonGroup size="lg" role="group" aria-label="Basic example">
                                        <Button type="button" variant="primary mt-2">Left</Button>{' '}
                                        <Button type="button" variant="primary mt-2">Middle</Button>{' '}
                                        <Button type="button" variant="primary mt-2">Right</Button>{' '}
                                    </ButtonGroup>
                                </div>
                                <div className="d-block">
                                    <ButtonGroup className="mt-2" role="group" aria-label="Basic example">
                                        <Button type="button" variant="primary">Left</Button>{' '}
                                        <Button type="button" variant="primary">Middle</Button>{' '}
                                        <Button type="button" variant="primary">Right</Button>{' '}
                                    </ButtonGroup>
                                </div>
                                <div className="d-block">
                                    <ButtonGroup className="mt-2" size="sm" role="group" aria-label="Basic example">
                                        <Button type="button" variant="primary">Left</Button>{' '}
                                        <Button type="button" variant="primary">Middle</Button>{' '}
                                        <Button type="button" variant="primary">Right</Button>{' '}
                                    </ButtonGroup>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm="12" lg="6">
                        <Card>
                            <Card.Header>
                                <Card.Header.Title>
                                    <h4 className="card-title">Button Group</h4>
                                </Card.Header.Title>
                            </Card.Header>
                            <Card.Body>
                                <p className="mb-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                                <ButtonGroup role="group" aria-label="Basic example">
                                    <Button type="button" variant="primary">Left</Button>{' '}
                                    <Button type="button" variant="primary">Middle</Button>{' '}
                                    <Button type="button" variant="primary">Right</Button>{' '}
                                </ButtonGroup>
                                    <div className="btn-toolbar " role="toolbar" aria-label="Toolbar with button groups">
                                        <ButtonGroup className="mt-2 me-2" role="group" aria-label="First group">
                                            <Button type="button" variant="primary">1</Button>{' '}
                                            <Button type="button" variant="primary">2</Button>{' '}
                                            <Button type="button" variant="primary">3</Button>{' '}
                                            <Button type="button" variant="primary">4</Button>{' '}
                                        </ButtonGroup>
                                        <ButtonGroup className="me-2 mt-2" role="group" aria-label="Second group">
                                            <Button type="button" variant="secondary">5</Button>{' '}
                                            <Button type="button" variant="secondary">6</Button>{' '}
                                            <Button type="button" variant="secondary">7</Button>{' '}
                                        </ButtonGroup>
                                        <ButtonGroup className="mt-2" role="group" aria-label="Third group">
                                            <Button type="button" variant="info">8</Button>{' '}
                                        </ButtonGroup>
                                    </div>
                                    <div className="btn-toolbar " role="toolbar" aria-label="Toolbar with button groups">
                                        <ButtonGroup className="mt-2 me-2" role="group" aria-label="First group">
                                            <Button type="button" variant="primary">1</Button>{' '}
                                            <Button type="button" variant="primary">2</Button>{' '}
                                            <Button type="button" variant="primary">3</Button>{' '}
                                            <Button type="button" variant="primary">4</Button>{' '}
                                        </ButtonGroup>
                                        <ButtonGroup className="me-2 mt-2" role="group" aria-label="Second group">
                                            <Button type="button" variant="secondary">5</Button>{' '}
                                            <Button type="button" variant="secondary">6</Button>{' '}
                                            <Button type="button" variant="secondary">7</Button>{' '}
                                        </ButtonGroup>
                                        <ButtonGroup variant="mt-2" role="group" aria-label="Third group">
                                            <Button type="button" variant="info">8</Button>{' '}
                                        </ButtonGroup>
                                    </div>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Card.Header.Title>
                                    <h4 className="card-title">Button Dropdown</h4>
                                </Card.Header.Title>
                            </Card.Header>
                            <Card.Body>
                                <p className="mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                    the industry's standard dummy text ever
                                </p>
                                <ButtonGroup role="group" aria-label="Button group with nested dropdown">
                                    <Button type="button" variant="primary">1</Button>{' '}
                                    <Button type="button" variant="primary">2</Button>{' '}
                                    <div className="btn-group" role="group">
                                    <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">
                                        <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                                        <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                                    </DropdownButton>
                                    </div>
                                </ButtonGroup>
                                <div className="d-block mt-2">
                                    <ButtonGroup vertical role="group" aria-label="Button group with nested dropdown">
                                        <Button type="button" variant="primary">1</Button>{' '}
                                        <Button type="button" variant="primary">2</Button>{' '}
                                        <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-1">
                                            <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                                            <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                                        </DropdownButton>
                                    </ButtonGroup>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Buttons;
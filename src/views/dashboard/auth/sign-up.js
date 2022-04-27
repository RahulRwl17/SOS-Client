import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import Card from '../../../components/card'

// img
import fb from     '../../../assets/images/brands/fb.svg'
import gm from     '../../../assets/images/brands/gm.svg'
import im from     '../../../assets/images/brands/im.svg'
import li from     '../../../assets/images/brands/li.svg'
import auth09 from '../../../assets/images/auth/09.png'
import logo from '../../../assets/images/logo.svg'

const SignUp = () => {
   let history =useHistory()
   return (
      <>
         <section className="container-fluid bg-circle-login">
            <Row className="align-items-center">
               <Col md="12" lg="7" xl="4">               
                  <div className="d-flex justify-content-center mb-0">
                     <Card.Body className="mt-5">
                        <Link to="/">
                           <img src={logo} className="img-fluid logo-img" alt="img5"/>
                        </Link>
                        <h2 className="mb-2 text-center">Sign Up</h2>
                        <p className="text-center">Create your Aprycot account.</p>
                        <Form>
                           <Row>
                              <Col lg="6">
                                 <Form.Group className="form-group">
                                    <Form.Label htmlFor="full-name">Full Name</Form.Label>
                                    <Form.Control type="text" className="form-control-sm" id="full-name" placeholder=" "/>
                                 </Form.Group>
                              </Col>
                              <Col lg="6">
                                 <Form.Group className="form-group">
                                    <Form.Label htmlFor="last-name">Last Name</Form.Label>
                                    <Form.Control type="text" className="form-control-sm" id="last-name" placeholder=" "/>
                                 </Form.Group>
                              </Col>
                              <Col lg="6" className="form-group">
                                 <Form.Group>
                                    <Form.Label htmlFor="email">Email</Form.Label>
                                    <Form.Control type="email" className="form-control-sm" id="email" placeholder=" "/>
                                 </Form.Group>
                              </Col>
                              <Col lg="6">
                                 <Form.Group className="form-group">
                                    <Form.Label htmlFor="phone">Phone No.</Form.Label>
                                    <Form.Control type="text" className="form-control-sm" id="phone" placeholder=" "/>
                                 </Form.Group>
                              </Col>
                              <Col lg="6">
                                 <Form.Group className="form-group">
                                    <Form.Label htmlFor="password">Password</Form.Label>
                                    <Form.Control type="password" className="form-control-sm" id="password" placeholder=" "/>
                                 </Form.Group>
                              </Col>
                              <Col lg="6">
                                 <Form.Group className="form-group">
                                    <Form.Label htmlFor="confirm-password">Confirm Password</Form.Label>
                                    <Form.Control type="text" className="form-control-sm" id="confirm-password" placeholder=" "/>
                                 </Form.Group>
                              </Col>
                              <Col lg="12" className="d-flex justify-content-center">
                                 <Form.Check className="form-check mb-3">
                                    <Form.Check.Input type="checkbox" id="customCheck1"/>
                                    <Form.Check.Label htmlFor="customCheck1">I agree with the terms of use</Form.Check.Label>
                                 </Form.Check>
                              </Col>
                           </Row>
                           <div className="d-flex justify-content-center">
                              <Button onClick={() => history.push('/')} type="button" variant="primary">Sign Up</Button>
                           </div>
                           <p className="text-center my-3">or sign in with other accounts?</p>
                           <div className="d-flex justify-content-center">
                              <ul className="list-group list-group-horizontal list-group-flush">
                                 <li className="list-group-item border-0 pb-0">
                                    <Link to="#"><img src={gm} alt="gm"/></Link>
                                 </li>
                                 <li className="list-group-item border-0 pb-0">
                                    <Link to="#"><img src={fb} alt="fb"/></Link>
                                 </li>
                                 <li className="list-group-item border-0 pb-0">
                                    <Link to="#"><img src={im} alt="im"/></Link>
                                 </li>
                                 <li className="list-group-item border-0 pb-0">
                                    <Link to="#"><img src={li} alt="li"/></Link>
                                 </li>
                              </ul>
                           </div>
                           <p className="mt-3 text-center">
                              Already have an Account <Link to="/auth/sign-in" className="text-underline">Sign In</Link>
                           </p>
                        </Form>
                     </Card.Body>
                  </div>          
               </Col>  
               <Col md="12" lg="5" xl="8" className="d-lg-block d-none vh-100 overflow-hidden">
                  <img src={auth09} className="img-fluid sign-in-img" alt="images"/>
               </Col>
            </Row>
         </section>
      </>
   )
}

export default SignUp

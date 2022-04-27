import React from 'react'
// import FsLightbox from 'fslightbox-react';

import {Row,Col,Form,Button,Dropdown} from 'react-bootstrap'
import Card from '../../../components/card'
import CustomToggle from '../../../components/dropdowns'
import {Link} from 'react-router-dom'
// img
import userp1 from '../../../assets/images/User-profile/1.png'
import userp2 from '../../../assets/images/User-profile/2.png'
import userp01 from '../../../assets/images/User-profile/01.png'
import userp3 from '../../../assets/images/User-profile/3.png'
import userp4 from '../../../assets/images/User-profile/4.png'
import userp5 from '../../../assets/images/User-profile/5.png'
import userp6 from '../../../assets/images/User-profile/6.png'
import userp7 from '../../../assets/images/User-profile/7.png'
import userp8 from '../../../assets/images/User-profile/8.png'
import userp9 from '../../../assets/images/User-profile/9.png'
import userp10 from '../../../assets/images/User-profile/10.png'
import userp11 from '../../../assets/images/User-profile/11.png'
import userp12 from '../../../assets/images/User-profile/12.png'
import userp13 from '../../../assets/images/User-profile/13.png'

import ShareOffcanvas from '../../../components/partials/components/shareoffcanvas'

const UserProfile =() =>{
   // const [toggler, setToggler] = useState(false);
  return(
      <>
         <Row>
            <Col lg="12">
               <div className="iq-main">
                  <Card className="mb-0 iq-content rounded-bottom">
                     <div className="d-flex flex-wrap align-items-center justify-content-between mx-3 my-3">
                        <div className="d-flex flex-wrap align-items-center">
                           <div className="profile-img22 position-relative me-3 mb-3 mb-lg-0">
                              <img src={userp1} className="img-fluid avatar avatar-100 avatar-rounded" alt="img"/>
                           </div>
                           <div className="d-flex align-items-center mb-3 mb-sm-0">
                              <div>
                                 <h6 className="me-2 text-primary">Devon Lane</h6>
                                 <span><svg width="19" height="19" className="me-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 10.8421C21 16.9172 12 23 12 23C12 23 3 16.9172 3 10.8421C3 4.76697 7.02944 1 12 1C16.9706 1 21 4.76697 21 10.8421Z" stroke="#07143B" strokeWidth="1.5"/>
                                    <circle cx="12" cy="9" r="3" stroke="#07143B" strokeWidth="1.5"/>
                                    </svg><small className="mb-0 text-dark">Lisbon, Portugal</small></span>
                              </div>
                              <div className="ms-4">
                                 <p className="mb-0 text-dark">UI/UX Designer</p>
                                 <p className="me-2 mb-0 text-dark">Hello@gmail.com</p>
                                 <p className="mb-0 text-dark">Email</p>
                              </div> 
                           </div>
                        </div>
                        <ul className="d-flex mb-0 text-center ">
                           <li className="badge bg-primary py-2 me-2">
                              <p className="mb-3 mt-2">142</p>
                              <small className="mb-1 fw-normal">Reviews</small>
                           </li>
                           <li className="badge bg-primary py-2 me-2">
                              <p className="mb-3 mt-2">201</p>
                              <small className="mb-1 fw-normal">Photos</small>
                           </li>
                           <li className="badge bg-primary py-2 me-2">
                              <p className="mb-3 mt-2">3.1k</p>
                              <small className="mb-1 fw-normal">Followers</small>
                           </li>
                        </ul>
                     </div>
                  </Card>
                  <div className="iq-header-img">
                     <img src={userp01} alt="header" className="img-fluid w-100 rounded" style={{objectFit: "contain"}}/>
                  </div>
               </div>
            </Col>
            <Col lg="3">
               <Card>
                  <Card.Header>
                     <h4 className="card-title">News</h4>
                  </Card.Header>
                  <Card.Body className="py-0">
                     <ul className="list-inline list-main">
                        <li className="py-3 d-flex">
                           <img src={userp10} className="img-fluid avatar avatar-60" alt="img"/>
                           <div className="ms-4">
                              <h6 className="heading-title fw-bolder mb-2">Pizza</h6>
                              <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                           </div>
                        </li>
                        <li className="py-3 d-flex">
                           <img src={userp3} className="img-fluid avatar avatar-60" alt="img"/>
                           <div className="ms-4">
                              <h6 className="heading-title fw-bolder mb-2">Burger</h6>
                              <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                           </div>
                        </li>
                        <li className="py-3 d-flex pb-0">
                           <img src={userp4} className="img-fluid avatar avatar-60" alt="img"/>
                           <div className="ms-4">
                              <h6 className="heading-title fw-bolder mb-2">Pasta</h6>
                              <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                           </div>
                        </li>
                     </ul>
                  </Card.Body>
               </Card>
               <Card>
                  <Card.Header>
                     <h4 className="card-title list-main">Online Order</h4>
                  </Card.Header>
                  <Card.Body className="py-0">
                     <ul className="list-inline list-main mb-0">
                        <li className="py-5">
                           <div className="d-flex justify-content-between">
                              <span className="heading-title text-dark">Dineline</span>
                              <span className="badge bg-primary px-3 rounded-pill d-flex align-items-center">1</span>
                           </div>
                        </li>
                        <li className="py-5">
                           <div className="d-flex justify-content-between">
                              <span className="heading-title text-dark">Reviews</span>
                              <span className="badge bg-primary px-3 rounded-pill d-flex align-items-center">1</span>
                           </div>
                        </li>
                        <li className="py-5">
                           <div className="d-flex justify-content-between">
                              <span className="heading-title text-dark">Photos</span>
                              <span className="badge bg-primary px-3 rounded-pill d-flex align-items-center">1</span>
                           </div>
                        </li>
                        <li className="py-5">
                           <div className="d-flex justify-content-between">
                              <span className="heading-title text-dark">Followers</span>
                              <span className=" badge bg-primary px-3 rounded-pill d-flex align-items-center">1</span>
                           </div>
                        </li>
                        <li className="py-5">
                           <div className="d-flex justify-content-between">
                              <span className="heading-title text-dark">Bookmarks</span>
                              <span className=" badge bg-primary px-3 rounded-pill d-flex align-items-center">1</span>
                           </div>                        
                        </li>
                        <li className="py-5">
                           <div className="d-flex justify-content-between">
                              <span className="heading-title text-dark">Been there</span>
                              <span className=" badge bg-primary px-3 rounded-pill d-flex align-items-center">1</span>
                           </div>                        
                        </li>
                        <li className="py-5">
                           <div className="d-flex justify-content-between">
                              <span className="heading-title text-dark">Achievements</span>
                              <span className=" badge bg-primary px-3 rounded-pill d-flex align-items-center">1</span>
                           </div>                        
                        </li>
                        <li className="py-5">
                           <div className="d-flex justify-content-between">
                              <span className="heading-title text-dark">Blogs</span>
                              <span className=" badge bg-primary px-3 rounded-pill d-flex align-items-center">1</span>
                           </div>                        
                        </li>
                     </ul>
                  </Card.Body>
               </Card>
            <Card>
               <Card.Header>
                  <h4 className="card-title">Online Order</h4>
               </Card.Header>
               <Card.Body className="py-0">
                  <ul className="list-inline list-main mb-0">
                     <li className="py-5">
                        <span className="heading-title text-dark">Favourite order</span>
                     </li>
                     <li className="py-5">
                        <span className="heading-title text-dark">Order history</span>
                     </li>
                     <li className="py-5">
                        <span className="heading-title text-dark">My address</span>
                     </li>
                  </ul>
               </Card.Body>
               </Card>
            </Col>
            <Col lg="6">
               <div className="profile-content tab-content">
                  <div id="profile-feed" className="tab-pane fade active show">
                     <Card>
                        <Card.Header className="border-0 pb-3 px-2">
                           <Card.Header.Title>
                              <div className="d-flex flex-wrap align-items-center">
                                 <div className="media-support-user-img me-4">
                                    <img className="img-fluid avatar avatar-75 avatar-rounded" src={userp7} alt=""/>
                                 </div>
                                 <div className="media-support-info mt-2">
                                    <h6 className="mb-0 heading-title fw-bolder">Wade Warren</h6>
                                    <small className="mb-0 text-primary">colleages</small>
                                 </div>
                              </div>
                           </Card.Header.Title>                        
                           <Dropdown className="text-dark">
                              <Dropdown.Toggle as={CustomToggle}>
                              29 mins 
                              <svg width="12" height="6" className="ms-3" viewBox="0 0 14 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M7 6L0.0717964 0L13.9282 0L7 6Z" fill="#07143B"/>
                              </svg>
                              </Dropdown.Toggle>
                              <Dropdown.Menu className="dropdown-menu-end" aria-labelledby="dropdownMenuButton7">
                                 <Dropdown.Item href="#">Action</Dropdown.Item>
                                 <Dropdown.Item href="#">Another action</Dropdown.Item>
                                 <Dropdown.Item href="#">Something else here</Dropdown.Item>
                              </Dropdown.Menu>
                           </Dropdown>
                        </Card.Header>
                        <Card.Body className="p-0">
                           <div className="user-post">
                              <img src={userp9} alt="post-img" className="img-fluid"/>
                           </div>
                           <div className="comment-area p-4">
                              <div className="d-flex flex-wrap justify-content-between align-items-center px-3 pt-0">
                                 <div className="d-flex align-items-center text-dark">
                                    <div className="d-flex align-items-center message-icon me-3">                                          
                                       <svg width="20" height="20" viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
                                       </svg>
                                       <span className="ms-3">140</span>
                                    </div>
                                    <div className="d-flex align-items-center feather-icon">
                                       <svg width="20" height="20" viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M10,16V19.08L13.08,16H20V4H4V16H10Z" />
                                       </svg>
                                       <span className="ms-3">140</span>
                                    </div>
                                 </div>
                                 <ShareOffcanvas />
                              </div>
                              <hr className="bg-primary my-4"/>
                              <p className="px-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id quam tortor nec arcu. Euismod neque ultricies eget adipiscing condimentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id quam tortor nec arcu. Euismod neque ultricies eget adipiscing condimentum.</p>
                              <hr className="bg-primary my-4"/>
                              <ul className="list-inline p-0 m-0">
                                 <li className="py-3 px-2 pt-0">
                                    <div className="d-flex align-items-center">
                                       <img className="img-fluid avatar avatar-55 avatar-rounded" src={userp6} alt=""/>
                                       <div className="ms-3">
                                          <h6 className="mb-1 heading-title fw-bolder">Paul Molive</h6>
                                          <p className="mb-1">Lorem ipsum dolor sit amet</p>
                                          <div className="d-flex flex-wrap align-items-center mb-1">
                                             <Link to="#" className="me-3">
                                                <svg width="20" height="20" className=" me-2" viewBox="0 0 24 24">
                                                   <path fill="currentColor" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
                                                </svg>
                                                like
                                             </Link>
                                             <Link to="#" className="me-3">
                                                <svg width="20" height="20" className="me-2" viewBox="0 0 24 24">
                                                   <path fill="currentColor" d="M8,9.8V10.7L9.7,11C12.3,11.4 14.2,12.4 15.6,13.7C13.9,13.2 12.1,12.9 10,12.9H8V14.2L5.8,12L8,9.8M10,5L3,12L10,19V14.9C15,14.9 18.5,16.5 21,20C20,15 17,10 10,9" />
                                                </svg>
                                                reply
                                             </Link>
                                             <Link to="#" className="me-3">translate</Link>
                                             <span> 5 min </span>
                                          </div>
                                       </div>
                                    </div>
                                 </li>
                                 <li className="py-3 px-2">
                                    <div className="d-flex align-items-center">
                                       <img className="img-fluid avatar avatar-55 avatar-rounded" src={userp7} alt=""/>
                                       <div className="ms-3">
                                          <h6 className="mb-1 heading-title fw-bolder">Robert Fox</h6>
                                          <p className="mb-1">Lorem ipsum dolor sit amet</p>
                                          <div className="d-flex flex-wrap align-items-center">
                                             <Link to="#" className="me-3">
                                                <svg width="20" height="20" className="me-2" viewBox="0 0 24 24">
                                                   <path fill="currentColor" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
                                                </svg>
                                                like
                                             </Link>
                                             <Link to="#" className="me-3">
                                                <svg width="20" height="20" className="me-2" viewBox="0 0 24 24">
                                                   <path fill="currentColor" d="M8,9.8V10.7L9.7,11C12.3,11.4 14.2,12.4 15.6,13.7C13.9,13.2 12.1,12.9 10,12.9H8V14.2L5.8,12L8,9.8M10,5L3,12L10,19V14.9C15,14.9 18.5,16.5 21,20C20,15 17,10 10,9" />
                                                </svg>
                                                reply
                                             </Link>
                                             <Link to="#" className="me-3">translate</Link>
                                             <span> 5 min </span>
                                          </div>
                                       </div>
                                    </div>
                                 </li>
                              </ul>
                              <Form className="comment-text d-flex align-items-center mt-3" action="#">
                                 <Form.Control type="text" className="rounded" placeholder="Lovely!"/>
                                 <div className="comment-attagement d-flex">
                                       <Link to="#" className="me-4 text-body">
                                          <svg width="20" height="20" viewBox="0 0 24 24">
                                             <path fill="currentColor" d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z" />
                                          </svg>
                                       </Link>
                                       <Link to="#" className="text-body me-3">
                                          <svg width="20" height="20" viewBox="0 0 24 24">
                                             <path fill="currentColor" d="M20,4H16.83L15,2H9L7.17,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6A2,2 0 0,0 20,4M20,18H4V6H8.05L9.88,4H14.12L15.95,6H20V18M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15Z" />
                                          </svg>
                                       </Link>
                                 </div>
                              </Form>
                           </div>                              
                        </Card.Body>
                     </Card>
                     <Card>
                        <Card.Header className="pb-4">
                           <Card.Header.Title>
                              <div className="d-flex flex-wrap align-items-center">
                                 <div className="media-support-user-img me-3">
                                    <img className="img-fluid avatar avatar-75 avatar-rounded" src={userp8} alt=""/>
                                 </div>
                                 <div className="media-support-info mt-2">
                                    <h6 className="mb-0 heading-title fw-bolder">Wade Warren</h6>
                                    <small className="mb-0 text-primary">colleages</small>
                                 </div>
                              </div>
                           </Card.Header.Title>                        
                           <Dropdown className="text-dark">
                              <Dropdown.Toggle as={CustomToggle}>
                                 29 mins
                                 <svg width="12" height="6" className="ms-3" viewBox="0 0 14 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 6L0.0717964 0L13.9282 0L7 6Z" fill="#07143B"/>
                                 </svg> 
                              </Dropdown.Toggle>
                              <Dropdown.Menu className="dropdown-menu-end" aria-labelledby="dropdownMenuButton7">
                                 <Dropdown.Item href="#">Action</Dropdown.Item>
                                 <Dropdown.Item href="#">Another action</Dropdown.Item>
                                 <Dropdown.Item href="#">Something else here</Dropdown.Item>
                              </Dropdown.Menu>
                           </Dropdown>
                        </Card.Header>
                        <Card.Body className="p-0">
                           <p className="p-4 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus</p>
                           <div className="comment-area p-4 pt-0"><hr className="mt-0"/>
                              <div className="d-flex flex-wrap justify-content-between align-items-center">
                                 <div className="d-flex align-items-center text-dark">
                                    <div className="d-flex align-items-center message-icon me-3">                                          
                                       <svg width="20" height="20" viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
                                       </svg>
                                       <span className="ms-2">140</span>
                                    </div>
                                    <div className="d-flex align-items-center feather-icon">
                                       <svg width="20" height="20" viewBox="0 0 24 24">
                                          <path fill="currentColor" d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M10,16V19.08L13.08,16H20V4H4V16H10Z" />
                                       </svg>
                                       <span className="ms-2">140</span>
                                    </div>
                                 </div>
                                 <ShareOffcanvas />
                              </div>
                              <Form className="comment-text d-flex align-items-center mt-3" action="#">
                                 <Form.Control type="text" className="rounded" placeholder="Lovely!"/>
                                 <div className="comment-attagement d-flex">
                                       <Link to="#" className="me-4 text-body">
                                          <svg width="20" height="20" viewBox="0 0 24 24">
                                             <path fill="currentColor" d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z" />
                                          </svg>
                                       </Link>
                                       <Link to="#" className="text-body me-3">
                                          <svg width="20" height="20" viewBox="0 0 24 24">
                                             <path fill="currentColor" d="M20,4H16.83L15,2H9L7.17,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6A2,2 0 0,0 20,4M20,18H4V6H8.05L9.88,4H14.12L15.95,6H20V18M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15Z" />
                                          </svg>
                                       </Link>
                                 </div>
                              </Form>
                           </div>                              
                        </Card.Body>
                     </Card>
                  </div>
               </div>
            </Col>
            <Col lg="3">
               <Card>
                  <Card.Header>
                     <Card.Header.Title>
                        <h4 className="card-title">About</h4>
                     </Card.Header.Title>
                  </Card.Header>
                  <Card.Body>
                     <p>Lorem ipsum dolor sit amet, contur adipiscing elit.<span className="text-dark">Lorem ipsum dolor sit amet</span></p>
                     <div className="mb-1">Email: <Link to="#" className="">nikjone@demoo.com</Link></div>
                     <div className="mb-1">Phone: <Link to="#" className="ms-1">001 2351 256 12</Link></div>
                     <div>Location: <span className="ms-1 text-primary">USA</span></div>
                  </Card.Body>
               </Card>
               <Card>
                  <Card.Header>
                     <h4 className="card-title ">Suggestions</h4>
                  </Card.Header>
                  <Card.Body className="py-0">
                     <ul className="list-inline list-main p-0 mb-0">
                        <li className="py-5">
                           <div className="d-flex align-items-center">
                              <img src={userp2} className="img-fluid avatar avatar-80" alt="img"/>
                              <div className="ms-3">
                                 <h6 className="mb-2 heading-title fw-bolder">Pizza</h6>
                                 <p className="mb-0">345+ Options</p>
                              </div>
                           </div>
                        </li>
                        <li className="py-5">
                           <div className="d-flex align-items-center">
                              <img src={userp11} className="img-fluid avatar avatar-80" alt="img"/>
                              <div className="ms-3">
                                 <h6 className="mb-2 heading-title fw-bolder">Pizza</h6>
                                 <p className="mb-0">345+ Options</p>
                              </div>
                           </div>
                        </li>
                        <li className="py-5">
                           <div className="d-flex align-items-center">
                              <img src={userp12} className="img-fluid avatar avatar-80" alt="img"/>
                              <div className="ms-3">
                                 <h6 className="mb-2 heading-title fw-bolder">Burger </h6>
                                 <p className="mb-0">260+ Options</p>
                              </div>
                           </div>                     
                        </li>
                        <li className="py-5">
                           <div className="d-flex align-items-center">
                              <img src={userp13} className="img-fluid avatar avatar-80" alt="img"/>
                              <div className="ms-3">
                                 <h6 className="mb-2 heading-title fw-bolder">Pasta</h6>
                                 <p className="mb-0">250+ Options</p>
                              </div>
                           </div>
                        </li>
                     </ul>
                  </Card.Body>
                  </Card>
                  <Card style={{background: `url (${userp2})`,backgroundSize: "cover"}}>
                     <Card.Body>
                        <div className="div">
                           <div className="div">
                                 <h2 className="text-primary text-special">Today’s<br/> Special<br/> Menu</h2>
                           </div>
                           <div className="text-center">
                              <div className="position-relative">
                                 <img src={userp5} className="img-fluid mt-5 mb-5 rounded-2" alt="img"/>
                                 <div className="iq-offer text-dark p-2 rounded-pill border border-primary">
                                    <span>50%</span><br/><span className="text-uppercase">Off</span>
                                 </div>
                              </div>
                              <Button type="button" variant="primary rounded-pill mt-3">ORDER NOW!</Button>
                           </div>
                        </div>
                     </Card.Body>
               </Card>
            </Col>
         </Row>
      </>
  )

}

export default UserProfile;
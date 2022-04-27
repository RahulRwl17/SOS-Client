import React,{ useEffect } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import Card from '../../../components/card'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
// import CustomerReview from '../../../components/partials/components/customer-review'

//Rating Star
import RatingStar from '../../../components/partials/components/rating-star'

// gsap
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

//img
import cust1 from '../../../assets/images/menu/1.png'
import cust2 from '../../../assets/images/menu/2.png'
import cust3 from '../../../assets/images/menu/3.png'
import lo31 from '../../../assets/images/layouts/31.png'
import lo32 from '../../../assets/images/layouts/32.png'
import lo37 from '../../../assets/images/layouts/37.png'
import lo29 from '../../../assets/images/layouts/29.png'
import lo30 from '../../../assets/images/layouts/30.png'
import lo33 from '../../../assets/images/layouts/33.png'
import lo26 from '../../../assets/images/layouts/26.png'
import lo25 from '../../../assets/images/layouts/25.png'
import lo27 from '../../../assets/images/layouts/27.png'
import lo28 from '../../../assets/images/layouts/28.png'
import lo35 from '../../../assets/images/layouts/35.png'
import lo36 from '../../../assets/images/layouts/36.png'
import lo23 from '../../../assets/images/layouts/23.png'

const RestaurantDetail  = () => {
    useEffect(() => {
        if(typeof gsap !== typeof undefined) {
            if (typeof ScrollTrigger !== typeof undefined) {
              gsap.registerPlugin(ScrollTrigger);
            }
        
            const gsapAnimate = {
              onStart : (elem) => {
                const option = {
                  opacity: 0,
                  scale: 1,
                  position: {
                    x: 0,
                    y:0,
                  },
                  ease: "",
                  duration: 1,
                  delay: .4,
                  rotate: 0
                }
        
                option.position.x = gsapAnimate.validValue(elem.dataset.iqPositionX, 0)
        
                option.position.y = gsapAnimate.validValue(elem.dataset.iqPositionY, 0)
        
                option.rotate = gsapAnimate.validValue(elem.dataset.iqRotate, 0)
        
                option.scale = gsapAnimate.validValue(elem.dataset.iqScale, 1)
        
                option.opacity = gsapAnimate.validValue(elem.dataset.iqOpacity, 0)
        
                option.delay = gsapAnimate.validValue(elem.dataset.iqDelay, .4)
        
                option.duration = gsapAnimate.validValue(elem.dataset.iqDuration, 1.5)
        
                option.ease = gsapAnimate.validValue(elem.dataset.iqEase, '')
        
                const setOption = {opacity: option.opacity, scale: option.scale, x: option.position.x, y: option.position.y, ease: option.ease, rotate: option.rotate, duration: option.duration, delay: option.delay}
        
                if (typeof ScrollTrigger !== typeof undefined) {
                  if (elem.dataset.iqTrigger === 'scroll') {
                    const scrub = elem.dataset.iqScrollScrub === 'true' ? true : false
        
                    setOption.scrollTrigger = {
                      trigger: elem,
                      start: () => "top 95%",
                      // end: () => "bottom 10%",
                      scrub: scrub,
                      markers: false
                    }
                  }
                }
        
                gsap.from(elem, setOption)
        
              },
           
              validValue: (attr, defaultVal) => {
                if (attr !== undefined && attr !== null) {
                  return attr
                }
                return defaultVal
              }
            }
            
           
            const gsapElem = document.querySelectorAll('[data-iq-gsap="onStart"]')
        
            Array.from(gsapElem, (elem) => {
              gsapAnimate.onStart(elem)
              return null
            })
        
            // Home Page 1 banner
            
            if(document.querySelectorAll('auth-login').length) {
              gsap.from('.first-img', {opacity: 0, scale: .8, rotate: -45, ease: "power1.out", duration: 1, delay:.4})
              gsap.from('.second-img', {opacity: 0, scale: .8,rotate: -45, ease: "power1.out", duration: 1,delay:.6})
              gsap.from('.third-img', {opacity: 0, scale: .8,rotate: -45, ease: "power1.out", duration: 1,delay:.8})
              gsap.from('.fourth-img', {opacity: 0, scale: .8,rotate: -45, ease: "power1.out", duration: 1,delay:1.2})
              gsap.from('.fifth-img', {opacity: 0, scale: .8,rotate: -45, ease: "power1.out", duration: 1,delay:1.4})
              gsap.from('.six-img', {opacity: 0, scale: .8,rotate: -45, ease: "power1.out", duration: 1,delay:1.6})
              gsap.from('.seventh-img', {opacity: 0, scale: .8,rotate: -45, ease: "power1.out", duration: 1,delay:1.6,})
              gsap.from('.eight-img', { opacity: 0, scale: .8,rotate: -45, ease: "power1.out", duration: 1, delay:1.8,})
            }
        }      
    },[]); 

    return (
        <>
            <Row>
                <Col md="12" lg="8">
                    <div className="dish-card-vertical1">
                        <Card className="dish-card3">
                            <Card.Body>
                                <div className="d-flex profile-img41">
                                    <div className="profile-img42">
                                        <img src={lo32} className="img-fluid rounded-pill avatar-130" alt="profile-img"/>
                                    </div>
                                    <div className="d-flex align-items-center mb-4 mb-md-0">
                                        <img src={lo37} className="img-fluid avatar-rounded avatar-60" alt="profile-img"/>
                                        <div className="d-flex ms-3">
                                            <div>
                                                <h5 className="mb-1d">A to Z Pizza</h5>
                                                <div className="d-flex mb-2">
                                                    <svg width="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M13.1043 4.17701L14.9317 7.82776C15.1108 8.18616 15.4565 8.43467 15.8573 8.49218L19.9453 9.08062C20.9554 9.22644 21.3573 10.4505 20.6263 11.1519L17.6702 13.9924C17.3797 14.2718 17.2474 14.6733 17.3162 15.0676L18.0138 19.0778C18.1856 20.0698 17.1298 20.8267 16.227 20.3574L12.5732 18.4627C12.215 18.2768 11.786 18.2768 11.4268 18.4627L7.773 20.3574C6.87023 20.8267 5.81439 20.0698 5.98724 19.0778L6.68385 15.0676C6.75257 14.6733 6.62033 14.2718 6.32982 13.9924L3.37368 11.1519C2.64272 10.4505 3.04464 9.22644 4.05466 9.08062L8.14265 8.49218C8.54354 8.43467 8.89028 8.18616 9.06937 7.82776L10.8957 4.17701C11.3477 3.27433 12.6523 3.27433 13.1043 4.17701Z" fill="#FDB913"/>
                                                    </svg>
                                                    <svg width="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M13.1043 4.17701L14.9317 7.82776C15.1108 8.18616 15.4565 8.43467 15.8573 8.49218L19.9453 9.08062C20.9554 9.22644 21.3573 10.4505 20.6263 11.1519L17.6702 13.9924C17.3797 14.2718 17.2474 14.6733 17.3162 15.0676L18.0138 19.0778C18.1856 20.0698 17.1298 20.8267 16.227 20.3574L12.5732 18.4627C12.215 18.2768 11.786 18.2768 11.4268 18.4627L7.773 20.3574C6.87023 20.8267 5.81439 20.0698 5.98724 19.0778L6.68385 15.0676C6.75257 14.6733 6.62033 14.2718 6.32982 13.9924L3.37368 11.1519C2.64272 10.4505 3.04464 9.22644 4.05466 9.08062L8.14265 8.49218C8.54354 8.43467 8.89028 8.18616 9.06937 7.82776L10.8957 4.17701C11.3477 3.27433 12.6523 3.27433 13.1043 4.17701Z" fill="#FDB913"/>
                                                    </svg>
                                                    <svg width="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M13.1043 4.17701L14.9317 7.82776C15.1108 8.18616 15.4565 8.43467 15.8573 8.49218L19.9453 9.08062C20.9554 9.22644 21.3573 10.4505 20.6263 11.1519L17.6702 13.9924C17.3797 14.2718 17.2474 14.6733 17.3162 15.0676L18.0138 19.0778C18.1856 20.0698 17.1298 20.8267 16.227 20.3574L12.5732 18.4627C12.215 18.2768 11.786 18.2768 11.4268 18.4627L7.773 20.3574C6.87023 20.8267 5.81439 20.0698 5.98724 19.0778L6.68385 15.0676C6.75257 14.6733 6.62033 14.2718 6.32982 13.9924L3.37368 11.1519C2.64272 10.4505 3.04464 9.22644 4.05466 9.08062L8.14265 8.49218C8.54354 8.43467 8.89028 8.18616 9.06937 7.82776L10.8957 4.17701C11.3477 3.27433 12.6523 3.27433 13.1043 4.17701Z" fill="#FDB913"/>
                                                    </svg>
                                                    <svg width="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M13.1043 4.17701L14.9317 7.82776C15.1108 8.18616 15.4565 8.43467 15.8573 8.49218L19.9453 9.08062C20.9554 9.22644 21.3573 10.4505 20.6263 11.1519L17.6702 13.9924C17.3797 14.2718 17.2474 14.6733 17.3162 15.0676L18.0138 19.0778C18.1856 20.0698 17.1298 20.8267 16.227 20.3574L12.5732 18.4627C12.215 18.2768 11.786 18.2768 11.4268 18.4627L7.773 20.3574C6.87023 20.8267 5.81439 20.0698 5.98724 19.0778L6.68385 15.0676C6.75257 14.6733 6.62033 14.2718 6.32982 13.9924L3.37368 11.1519C2.64272 10.4505 3.04464 9.22644 4.05466 9.08062L8.14265 8.49218C8.54354 8.43467 8.89028 8.18616 9.06937 7.82776L10.8957 4.17701C11.3477 3.27433 12.6523 3.27433 13.1043 4.17701Z" stroke="#232D42" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                    <svg width="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M13.1043 4.17701L14.9317 7.82776C15.1108 8.18616 15.4565 8.43467 15.8573 8.49218L19.9453 9.08062C20.9554 9.22644 21.3573 10.4505 20.6263 11.1519L17.6702 13.9924C17.3797 14.2718 17.2474 14.6733 17.3162 15.0676L18.0138 19.0778C18.1856 20.0698 17.1298 20.8267 16.227 20.3574L12.5732 18.4627C12.215 18.2768 11.786 18.2768 11.4268 18.4627L7.773 20.3574C6.87023 20.8267 5.81439 20.0698 5.98724 19.0778L6.68385 15.0676C6.75257 14.6733 6.62033 14.2718 6.32982 13.9924L3.37368 11.1519C2.64272 10.4505 3.04464 9.22644 4.05466 9.08062L8.14265 8.49218C8.54354 8.43467 8.89028 8.18616 9.06937 7.82776L10.8957 4.17701C11.3477 3.27433 12.6523 3.27433 13.1043 4.17701Z" stroke="#232D42" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                    <small className="ms-1 text-dark">3.0</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>             
                                </div>
                                <div className="py-4">
                                    <h6 className="heading-title fw-bolder">Cafe, Healthy Food, Beverages, Salad, Desserts</h6>        
                                    <div className="d-flex align-items-center">
                                        <p className="mb-0">9:30 AM -11:30 PM (Today)</p>
                                        <span className="badge bg-soft-primary ms-5 text-dark">Free Delivery</span>
                                    </div>  
                                </div>
                                <div className="py-2">
                                    <h6 className="heading-title fw-bolder">Restro Near me</h6>        
                                    <div className="d-flex mt-2">
                                        <svg width="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21 10.8421C21 16.9172 12 23 12 23C12 23 3 16.9172 3 10.8421C3 4.76697 7.02944 1 12 1C16.9706 1 21 4.76697 21 10.8421Z" stroke="#07143B" strokeWidth="1.5"/>
                                            <circle cx="12" cy="9" r="3" stroke="#07143B" strokeWidth="1.5"/>
                                        </svg>
                                        <p className="mb-0 ms-3">6391 Elgin St. Celina, Delaware 10299</p>
                                    </div>
                                    <div className="d-flex mt-2">
                                        <svg width="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M11.5317 12.4724C15.5208 16.4604 16.4258 11.8467 18.9656 14.3848C21.4143 16.8328 22.8216 17.3232 19.7192 20.4247C19.3306 20.737 16.8616 24.4943 8.1846 15.8197C-0.493478 7.144 3.26158 4.67244 3.57397 4.28395C6.68387 1.17385 7.16586 2.58938 9.61449 5.03733C12.1544 7.5765 7.54266 8.48441 11.5317 12.4724Z" stroke="#232D42" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        <p className="mb-0 ms-3">(480) 555-0103</p>
                                    </div>
                                </div>
                                <div className="py-3">
                                    <h6 className="heading-title fw-bolder">Other location</h6>        
                                    <div className="d-flex mt-2">
                                        <svg width="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21 10.8421C21 16.9172 12 23 12 23C12 23 3 16.9172 3 10.8421C3 4.76697 7.02944 1 12 1C16.9706 1 21 4.76697 21 10.8421Z" stroke="#07143B" strokeWidth="1.5"/>
                                            <circle cx="12" cy="9" r="3" stroke="#07143B" strokeWidth="1.5"/>
                                        </svg>
                                        <p className="mb-0 ms-3">4140 Parker Rd. Allentown, New Mexico 31134</p>
                                    </div>
                                    <div className="d-flex mt-2">
                                        <svg width="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21 10.8421C21 16.9172 12 23 12 23C12 23 3 16.9172 3 10.8421C3 4.76697 7.02944 1 12 1C16.9706 1 21 4.76697 21 10.8421Z" stroke="#07143B" strokeWidth="1.5"/>
                                            <circle cx="12" cy="9" r="3" stroke="#07143B" strokeWidth="1.5"/>
                                        </svg>
                                        <p className="mb-0 ms-3">3891 Ranchview Dr. Richardson, California 62639</p>
                                    </div>
                                    <div className="d-flex mt-2">
                                        <svg width="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21 10.8421C21 16.9172 12 23 12 23C12 23 3 16.9172 3 10.8421C3 4.76697 7.02944 1 12 1C16.9706 1 21 4.76697 21 10.8421Z" stroke="#07143B" strokeWidth="1.5"/>
                                            <circle cx="12" cy="9" r="3" stroke="#07143B" strokeWidth="1.5"/>
                                        </svg>
                                        <p className="mb-0 ms-3">2464 Royal Ln. Mesa, New Jersey 45463</p>
                                    </div>
                                </div>
                                <div className="d-flex flex-wrap mt-4">
                                    <Button type="button" variant="primary rounded-pill me-2 mb-2 mb-sm-0">Order Now</Button>
                                    <Button type="button" variant="primary rounded-pill me-2 mb-2 mb-sm-0">See Menu</Button> 
                                    <Button type="button" variant="primary rounded-pill ">Book a table</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
                <Col md="12" lg="4">
                    <Card>
                        <div className="card-header border-0">
                            <h5>Gallery</h5>
                        </div>
                        <Card.Body className="pt-0">
                            <Row>
                                <div className="d-grid gap-card grid-cols-2 ">
                                    <img src={lo29} alt="post-img" className="img-fluid rounded-1" />
                                    <img src={lo30} alt="post-img" className="img-fluid rounded-1" />
                                </div>
                                <img src={lo31} alt="post-img" className="img-fluid mt-4 rounded-1" />
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md="12" xl="9" lg="8">
                    <Card>
                        <div className="card-header ">
                        <h4 className="card-title list-main">Our Specials</h4>
                        </div>
                        <Card.Body>
                            <Swiper 
                                spaceBetween={30}
                                slidesPerView={3}
                                breakpoints={{
                                    320: { slidesPerView: 1},
                                    550: { slidesPerView: 2 },
                                    991: { slidesPerView: 2 },
                                    1400: { slidesPerView: 3 }
                                 }}
                                className="d-slider4 dish-card-horizontal">
                                <SwiperSlide>
                                    <Card className="card-white dish-card profile-img mb-0">
                                        <div className="profile-img21">
                                            <img src={lo33} className="img-fluid rounded-pill avatar-170 blur-shadow position-bottom"
                                                alt="profileimage"/>
                                            <img src={lo33} className="img-fluid rounded-pill avatar-170 hover-image " alt="profileimage"
                                            data-iq-gsap="onStart"
                                            data-iq-opacity="0"
                                            data-iq-scale=".6"
                                            data-iq-rotate="180"
                                            data-iq-duration="1"
                                            data-iq-delay=".6"
                                            data-iq-trigger="scroll"
                                            data-iq-ease="none"
                                            />
                                        </div>
                                        <Card.Body className="menu-image">
                                            <h6 className="heading-title fw-bolder mt-4 mb-0">Cheese pizza</h6>
                                            <div className="card-rating stars-ratings">
                                                <RatingStar count1={5} size={20}  />
                                            </div>
                                            <div className="d-flex justify-content-between mt-3">
                                                <div className="d-flex align-items-center">
                                                    <span className="text-primary fw-bolder me-2">$7.49</span>
                                                    <small className="text-decoration-line-through">$8.49</small>
                                                </div>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect className="circle-1" width="24" height="24" rx="12" fill="currentColor"/>
                                                    <rect className="circle-2" x="11.168" y="7" width="1.66667" height="10" rx="0.833333" fill="currentColor"/>
                                                    <rect className="circle-3" x="7" y="12.834" width="1.66666" height="10" rx="0.833332" transform="rotate(-90 7 12.834)" fill="currentColor"/>
                                                </svg>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="card-white dish-card profile-img mb-0">
                                            <div className="profile-img21">
                                                <img src={lo23} className="img-fluid rounded-pill avatar-170 blur-shadow position-bottom"
                                                    alt="profileimage"/>
                                                <img src={lo23} className="img-fluid rounded-pill avatar-170 hover-image " alt="profileimage"
                                                data-iq-gsap="onStart"
                                                data-iq-opacity="0"
                                                data-iq-scale=".6"
                                                data-iq-rotate="180"
                                                data-iq-duration="1"
                                                data-iq-delay=".6"
                                                data-iq-trigger="scroll"
                                                data-iq-ease="none"
                                                />
                                            </div>
                                            <Card.Body className="menu-image">
                                            <h6 className="heading-title fw-bolder mt-4 mb-0">Pizza</h6>
                                                <div className="card-rating stars-ratings">
                                                    <RatingStar count1={5} size={20}  />
                                                </div>
                                                <div className="d-flex justify-content-between mt-3">
                                                    <div className="d-flex align-items-center">
                                                        <span className="text-primary fw-bolder me-2">$7.49</span>
                                                        <small className="text-decoration-line-through">$8.49</small>
                                                    </div>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect className="circle-1" width="24" height="24" rx="12" fill="currentColor"/>
                                                        <rect className="circle-2" x="11.168" y="7" width="1.66667" height="10" rx="0.833333" fill="currentColor"/>
                                                        <rect className="circle-3" x="7" y="12.834" width="1.66666" height="10" rx="0.833332" transform="rotate(-90 7 12.834)" fill="currentColor"/>
                                                    </svg>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className="card-white dish-card profile-img mb-0">
                                            <div className="profile-img21">
                                                <img src={lo35} className="img-fluid rounded-pill avatar-170 blur-shadow position-bottom"
                                                    alt="profileimage"/>
                                                <img src={lo35} className="img-fluid rounded-pill avatar-170 hover-image " alt="profileimage"
                                                data-iq-gsap="onStart"
                                                data-iq-opacity="0"
                                                data-iq-scale=".6"
                                                data-iq-rotate="180"
                                                data-iq-duration="1"
                                                data-iq-delay=".6"
                                                data-iq-trigger="scroll"
                                                data-iq-ease="none"
                                                />
                                            </div>
                                            <Card.Body className="menu-image">
                                            <h6 className="heading-title fw-bolder mt-4 mb-0">Onion pizza</h6>
                                                <div className="card-rating stars-ratings">
                                                    <RatingStar count1={5} size={20}  />
                                                </div>
                                                <div className="d-flex justify-content-between mt-3">
                                                    <div className="d-flex align-items-center">
                                                        <span className="text-primary fw-bolder me-2">$7.49</span>
                                                        <small className="text-decoration-line-through">$8.49</small>
                                                    </div>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect className="circle-1" width="24" height="24" rx="12" fill="currentColor"/>
                                                        <rect className="circle-2" x="11.168" y="7" width="1.66667" height="10" rx="0.833333" fill="currentColor"/>
                                                        <rect className="circle-3" x="7" y="12.834" width="1.66666" height="10" rx="0.833332" transform="rotate(-90 7 12.834)" fill="currentColor"/>
                                                    </svg>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className="card-white dish-card profile-img mb-0">
                                            <div className="profile-img21">
                                                <img src={lo36} className="img-fluid rounded-pill avatar-170 blur-shadow position-bottom"
                                                    alt="profileimage"/>
                                                <img src={lo36} className="img-fluid rounded-pill avatar-170 hover-image " alt="profileimage"
                                                data-iq-gsap="onStart"
                                                data-iq-opacity="0"
                                                data-iq-scale=".6"
                                                data-iq-rotate="180"
                                                data-iq-duration="1"
                                                data-iq-delay=".6"
                                                data-iq-trigger="scroll"
                                                data-iq-ease="none"
                                                />
                                            </div>
                                            <Card.Body className="menu-image">
                                                <h6 className="heading-title fw-bolder mt-4 mb-0">Veggie pizza</h6>
                                                <div className="card-rating stars-ratings">
                                                    <RatingStar count1={5} size={20}  />
                                                </div>
                                                <div className="d-flex justify-content-between mt-3">
                                                    <div className="d-flex align-items-center">
                                                        <span className="text-primary fw-bolder me-2">$7.49</span>
                                                        <small className="text-decoration-line-through">$8.49</small>
                                                    </div>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect className="circle-1" width="24" height="24" rx="12" fill="currentColor"/>
                                                        <rect className="circle-2" x="11.168" y="7" width="1.66667" height="10" rx="0.833333" fill="currentColor"/>
                                                        <rect className="circle-3" x="7" y="12.834" width="1.66666" height="10" rx="0.833332" transform="rotate(-90 7 12.834)" fill="currentColor"/>
                                                    </svg>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className="card-white dish-card profile-img mb-0">
                                            <div className="profile-img21">
                                                <img src={lo28} className="img-fluid rounded-pill avatar-170 blur-shadow position-bottom"
                                                    alt="profileimage"/>
                                                <img src={lo28} className="img-fluid rounded-pill avatar-170 hover-image " alt="profileimage"
                                                    data-iq-gsap="onStart"
                                                    data-iq-opacity="0"
                                                    data-iq-scale=".6"
                                                    data-iq-rotate="180"
                                                    data-iq-duration="1"
                                                    data-iq-delay=".6"
                                                    data-iq-trigger="scroll"
                                                    data-iq-ease="none"
                                                />
                                            </div>
                                            <Card.Body className="menu-image">
                                                <h6 className="heading-title fw-bolder mt-4 mb-0">Pasta pizza</h6>
                                                <div className="card-rating stars-ratings">
                                                    <RatingStar count={3} count1={1} size={20}  />
                                                </div>
                                                <div className="d-flex justify-content-between mt-3">
                                                    <div className="d-flex align-items-center">
                                                        <span className="text-primary fw-bolder me-2">$7.49</span>
                                                        <small className="text-decoration-line-through">$8.49</small>
                                                    </div>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect className="circle-1" width="24" height="24" rx="12" fill="currentColor"/>
                                                        <rect className="circle-2" x="11.168" y="7" width="1.66667" height="10" rx="0.833333" fill="currentColor"/>
                                                        <rect className="circle-3" x="7" y="12.834" width="1.66666" height="10" rx="0.833332" transform="rotate(-90 7 12.834)" fill="currentColor"/>
                                                    </svg>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className="card-white dish-card profile-img mb-0">
                                            <div className="profile-img21">
                                                <img src={lo25} className="img-fluid rounded-pill avatar-170 blur-shadow position-bottom"
                                                    alt="profileimage"/>
                                                <img src={lo25} className="img-fluid rounded-pill avatar-170 hover-image " alt="profileimage"
                                                    data-iq-gsap="onStart"
                                                    data-iq-opacity="0"
                                                    data-iq-scale=".6"
                                                    data-iq-rotate="180"
                                                    data-iq-duration="1"
                                                    data-iq-delay=".6"
                                                    data-iq-trigger="scroll"
                                                    data-iq-ease="none"
                                                />
                                            </div>
                                            <Card.Body className="menu-image">
                                            <h6 className="heading-title fw-bolder mt-4 mb-0">Spaghetti</h6>
                                                <div className="card-rating stars-ratings">
                                                    <RatingStar count={3} count1={1} size={20}  />
                                                </div>
                                                <div className="d-flex justify-content-between mt-3">
                                                    <div className="d-flex align-items-center">
                                                        <span className="text-primary fw-bolder me-2">$7.49</span>
                                                        <small className="text-decoration-line-through">$8.49</small>
                                                    </div>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect className="circle-1" width="24" height="24" rx="12" fill="currentColor"/>
                                                        <rect className="circle-2" x="11.168" y="7" width="1.66667" height="10" rx="0.833333" fill="currentColor"/>
                                                        <rect className="circle-3" x="7" y="12.834" width="1.66666" height="10" rx="0.833332" transform="rotate(-90 7 12.834)" fill="currentColor"/>
                                                    </svg>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Card className="card-white dish-card profile-img mb-0">
                                            <div className="profile-img21">
                                                <img src={lo26} className="img-fluid rounded-pill avatar-170 blur-shadow position-bottom"
                                                    alt="profileimage"/>
                                                <img src={lo26} className="img-fluid rounded-pill avatar-170 hover-image " alt="profileimage"
                                                    data-iq-gsap="onStart"
                                                    data-iq-opacity="0"
                                                    data-iq-scale=".6"
                                                    data-iq-rotate="180"
                                                    data-iq-duration="1"
                                                    data-iq-delay=".6"
                                                    data-iq-trigger="scroll"
                                                    data-iq-ease="none"
                                                />
                                            </div>
                                            <Card.Body className="menu-image">
                                                <h6 className="heading-title fw-bolder mt-4 mb-0">Vegetable</h6>
                                                <div className="card-rating stars-ratings">
                                                    <RatingStar count={3} count1={1} size={20}  />
                                                </div>
                                                <div className="d-flex justify-content-between mt-3">
                                                    <div className="d-flex align-items-center">
                                                        <span className="text-primary fw-bolder me-2">$7.49</span>
                                                        <small className="text-decoration-line-through">$8.49</small>
                                                    </div>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect className="circle-1" width="24" height="24" rx="12" fill="currentColor"/>
                                                        <rect className="circle-2" x="11.168" y="7" width="1.66667" height="10" rx="0.833333" fill="currentColor"/>
                                                        <rect className="circle-3" x="7" y="12.834" width="1.66666" height="10" rx="0.833332" transform="rotate(-90 7 12.834)" fill="currentColor"/>
                                                    </svg>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <Card className="card-white dish-card profile-img mb-0">
                                            <div className="profile-img21">
                                                <img src={lo27} className="img-fluid rounded-pill avatar-170 blur-shadow position-bottom"
                                                    alt="profileimage"/>
                                                <img src={lo27} className="img-fluid rounded-pill avatar-170 hover-image " alt="profileimage"
                                                data-iq-gsap="onStart"
                                                data-iq-opacity="0"
                                                data-iq-scale=".6"
                                                data-iq-rotate="180"
                                                data-iq-duration="1"
                                                data-iq-delay=".6"
                                                data-iq-trigger="scroll"
                                                data-iq-ease="none"
                                                />
                                            </div>
                                            <Card.Body className="menu-image">
                                            <h6 className="heading-title fw-bolder mt-4 mb-0">Sweets</h6>
                                                <div className="card-rating stars-ratings">
                                                </div>
                                                <div className="d-flex justify-content-between mt-3">
                                                    <div className="d-flex align-items-center">
                                                        <span className="text-primary fw-bolder me-2">$7.49</span>
                                                        <small className="text-decoration-line-through">$8.49</small>
                                                    </div>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect className="circle-1" width="24" height="24" rx="12" fill="currentColor"/>
                                                        <rect className="circle-2" x="11.168" y="7" width="1.66667" height="10" rx="0.833333" fill="currentColor"/>
                                                        <rect className="circle-3" x="7" y="12.834" width="1.66666" height="10" rx="0.833332" transform="rotate(-90 7 12.834)" fill="currentColor"/>
                                                    </svg>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                            </Swiper>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md="12" xl="3" lg="4">
                    <Card>
                        <div className="card-header">
                            <h5 className="card-title list-main">Customer Reviews</h5>
                        </div>
                        <Card.Body className="py-3">
                            <Card className="rounded-1 mb-3 cusomer-card">
                                <Card.Body className="px-2 py-2 menu-image">
                                    <div className="d-flex">
                                        <img src={cust1} className="img-fluid avatar-rounded avatar-40" alt="profileimage"/>
                                        <div className="ms-2 w-100">
                                            <div className="d-flex justify-content-between ">
                                                <h6 className="mb-1 heading-title fw-bolder">Jane Coper</h6>
                                                <small className="text-dark">Nice place for having snacks.</small>
                                            </div>
                                            <div className="d-flex mb-2">
                                                <div className="card-rating stars-ratings">
                                                    <RatingStar count={2} count1={3} size={20}  />
                                                </div>
                                            </div>
                                            <small className="text-dark">1 Day ago</small>
                                        </div>
                                    </div>      
                        </Card.Body>
                    </Card>
                    <Card className="rounded-1 mb-3 cusomer-card">
                        <Card.Body className="px-2 py-2 menu-image">
                            <div className="d-flex">
                                <img src={cust2} className="img-fluid avatar-rounded avatar-40" alt="profileimage"/>
                                <div className="ms-2 w-100">
                                    <div className="d-flex justify-content-between ">
                                        <h6 className="mb-1 heading-title fw-bolder">Tom Potter</h6>
                                        <small className="text-dark">Nice service and delicious food.</small>
                                    </div>
                                    <div className="d-flex mb-2">
                                        <div className="card-rating stars-ratings">
                                            <RatingStar count={3} count1={2} size={20}  />
                                        </div>
                                    </div>
                                    <small className="text-dark">1 Day ago</small>
                                </div>
                            </div>      
                        </Card.Body>
                    </Card>
                    <Card className="rounded-1 mb-0 cusomer-card pb-0">
                        <Card.Body className="px-2 py-2 menu-image">
                            <div className="d-flex">
                                <img src={cust3} className="img-fluid avatar-rounded avatar-40" alt="profileimage"/>
                                <div className="ms-2 w-100">
                                    <div className="d-flex justify-content-between ">
                                        <h6 className="mb-1 heading-title fw-bolder">Mira James</h6>
                                        <small className="text-dark">Nice place for having snacks.</small>
                                    </div>
                                    <div className="d-flex mb-2">
                                        <div className="card-rating stars-ratings">
                                            <RatingStar count={3} count1={2} size={20}  />
                                        </div>
                                    </div>
                                    <small className="text-dark">1 Day ago</small>
                                </div>
                            </div>      
                        </Card.Body>
                    </Card>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default RestaurantDetail;
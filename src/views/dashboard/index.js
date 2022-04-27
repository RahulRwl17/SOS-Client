import React,{useEffect} from 'react'
import { Row,Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Card from '../../../src/components/card'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.css';

import lay1 from '../../assets/images/layouts/1.png'
import lay01 from '../../assets/images/layouts/01.png'
import lay2 from '../../assets/images/layouts/2.png'
import lay3 from '../../assets/images/layouts/3.png'
import lay4 from '../../assets/images/layouts/4.png'
import lay5 from '../../assets/images/layouts/5.png'
import lay6 from '../../assets/images/layouts/6.png'
import lay7 from '../../assets/images/layouts/7.png'
import lay8 from '../../assets/images/layouts/8.png'
import lay11 from '../../assets/images/layouts/11.png'
import lay12 from '../../assets/images/layouts/12.png'
import lay13 from '../../assets/images/layouts/13.png'
import lay16 from '../../assets/images/layouts/16.png'
import lay17 from '../../assets/images/layouts/17.png'
import lay15 from '../../assets/images/layouts/15.png'
import lay14 from '../../assets/images/layouts/14.png'
import lay18 from '../../assets/images/layouts/18.png'
import lay19 from '../../assets/images/layouts/19.png'
import lay20 from '../../assets/images/layouts/20.png'
import lay21 from '../../assets/images/layouts/21.png'

import lay40 from '../../assets/images/layouts/40.png'


import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import RatingStar from '../../components/partials/components/rating-star'


SwiperCore.use([Navigation]);


const Index = () => {
   
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
                    <Card>
                        <div className="hero-image p-3"  style={{background: `url(${lay01}) no-repeat center right`,backgroundSize: "cover", backgroundPosition: "center"}}
                            data-iq-gsap="onStart"
                            data-iq-opacity="0"
                            data-iq-position-y="-40"
                            data-iq-duration=".6"
                            data-iq-delay=".8"
                            data-iq-trigger="scroll"
                            data-iq-ease="none"
                        >
                            <Card.Body className="p-5">
                            <Row className="banner-container">
                                <Col lg="12" className="banner-item">
                                    <span className="text-primary">
                                        <svg width="20" height="15" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M94.5186 21.8107C96.9586 20.6307 98.6486 18.1407 98.6486 15.2507C98.6486 13.3199 97.8816 11.4682 96.5163 10.103C95.1511 8.7377 93.2994 7.9707 91.3686 7.9707C89.4378 7.9707 87.5861 8.7377 86.2209 10.103C84.8556 11.4682 84.0886 13.3199 84.0886 15.2507C84.0886 18.1807 85.8186 20.6907 88.3086 21.8507C85.4286 37.4507 81.0086 49.0607 64.5586 51.5407C64.5586 51.5407 68.9886 73.6907 89.7086 73.6907C110.429 73.6907 112.529 51.7607 112.529 51.7607C95.7186 52.6207 94.2986 31.4907 94.5186 21.8107V21.8107Z" fill="#F19534"/>
                                        <path d="M34.7383 21.8107C32.2983 20.6307 30.6083 18.1407 30.6083 15.2507C30.6083 13.3199 31.3753 11.4682 32.7405 10.103C34.1058 8.7377 35.9575 7.9707 37.8883 7.9707C39.8191 7.9707 41.6708 8.7377 43.036 10.103C44.4013 11.4682 45.1683 13.3199 45.1683 15.2507C45.1683 18.1807 43.4383 20.6907 40.9483 21.8507C43.8283 37.4507 48.2483 49.0607 64.6983 51.5407C64.6983 51.5407 60.2683 73.6907 39.5483 73.6907C18.8283 73.6907 16.7383 51.7707 16.7383 51.7707C33.5383 52.6207 34.9583 31.4907 34.7383 21.8107V21.8107Z" fill="#F19534"/>
                                        <path d="M89.4297 73.6891C89.5197 73.6891 89.6097 73.6991 89.6997 73.6991C95.4097 73.6991 99.6997 72.0291 102.92 69.6191L89.4297 73.6891Z" fill="#FFCA28"/>
                                        <path d="M119.242 16.8609C115.912 16.4109 112.732 19.5809 112.152 23.9209C111.792 26.6309 112.522 29.1609 113.932 30.7909L111.532 40.7409C111.532 40.7409 107.862 64.2509 89.3215 68.8909C74.5015 72.6009 69.1315 45.4709 67.8315 37.0909C70.6515 35.6909 72.6015 32.7909 72.6015 29.4209C72.6015 24.6909 68.7715 20.8609 64.0415 20.8609C59.3115 20.8609 55.4815 24.6909 55.4815 29.4209C55.4815 32.8109 57.4615 35.7409 60.3315 37.1209C59.3015 45.3909 54.7615 71.6209 38.7615 68.8809C22.5215 66.0909 15.4315 38.7409 13.7915 31.3009C15.7415 29.7009 16.8315 26.8809 16.4315 23.8509C15.8515 19.5009 12.4115 16.3809 8.75151 16.8709C5.09151 17.3609 2.60151 21.2809 3.18151 25.6209C3.60151 28.7809 5.54151 31.2909 7.97151 32.2409L20.6915 111.271C20.6915 111.271 31.7915 120.041 64.0415 120.041C96.2915 120.041 107.392 111.271 107.392 111.271L120.142 32.0309C122.202 30.9509 123.822 28.5209 124.222 25.5409C124.812 21.1909 122.582 17.3109 119.242 16.8609V16.8609Z" fill="#FFCA28"/>
                                        <path d="M64.4392 99.9095C69.8185 99.9095 74.1792 94.7115 74.1792 88.2995C74.1792 81.8874 69.8185 76.6895 64.4392 76.6895C59.06 76.6895 54.6992 81.8874 54.6992 88.2995C54.6992 94.7115 59.06 99.9095 64.4392 99.9095Z" fill="#26A69A"/>
                                        <path d="M64.4394 79.5598C64.8194 79.9798 65.1594 80.7498 64.4394 82.2498C63.7194 83.7498 59.8394 85.7798 59.1294 86.1898C58.4194 86.6098 57.9494 86.4198 57.7294 86.2498C56.6794 85.4098 57.0794 83.5098 57.7594 82.3498C59.2194 79.8398 62.3094 77.2498 64.4394 79.5598V79.5598Z" fill="#69F0AE"/>
                                        <path d="M63.7186 92.6299C62.6186 93.1599 59.0086 94.7699 60.1986 96.6799C60.8986 97.8099 62.3486 98.2899 63.6786 98.3499C65.0086 98.4099 66.3186 97.9899 67.4986 97.3799C73.0986 94.4799 73.5486 86.8599 72.4586 86.2799C71.3386 85.6799 70.5786 87.2299 69.9986 87.8899C68.235 89.865 66.1015 91.4753 63.7186 92.6299V92.6299Z" fill="#00796B"/>
                                        <path d="M118.09 78.8003C119.65 70.1703 113.85 68.0103 113.85 68.0103C113.85 68.0103 110.11 67.3303 108.35 77.0403C106.59 86.7403 110.33 87.4203 110.33 87.4203C110.33 87.4203 116.52 87.4303 118.09 78.8003V78.8003Z" fill="#26A69A"/>
                                        <path d="M115.511 70.96C116.871 72.78 115.261 75.47 112.651 77.26C111.881 77.79 110.861 77.59 110.711 77.15C110.291 75.89 110.471 74.46 111.031 73.25C112.691 69.62 114.821 70.04 115.511 70.96V70.96Z" fill="#69F0AE"/>
                                        <path d="M9.76138 79.06C8.19138 70.44 14.0014 68.27 14.0014 68.27C14.0014 68.27 17.7414 67.59 19.5014 77.3C21.2614 87 17.5214 87.68 17.5214 87.68C17.5214 87.68 11.3214 87.69 9.76138 79.06V79.06Z" fill="#26A69A"/>
                                        <path d="M15.7805 71.1993C17.1205 72.1993 16.5705 73.5093 15.5605 74.4193C14.4105 75.4693 13.5305 76.6193 12.5505 77.8093C12.4005 77.9893 12.2305 78.1893 11.9905 78.2393C11.5305 78.3393 11.1605 77.8693 11.0105 77.4193C10.5805 76.1593 10.6605 74.6793 11.3005 73.5193C13.1205 70.2093 15.2605 70.8093 15.7805 71.1993V71.1993Z" fill="#69F0AE"/>
                                        <path d="M99.9895 87.1599C99.2995 91.0899 96.1495 93.8199 92.9395 93.2599C89.7295 92.6999 89.2895 89.3499 89.9795 85.4199C90.6695 81.4899 92.2195 78.4799 95.4195 79.0399C98.6295 79.5999 100.679 83.2399 99.9895 87.1599V87.1599Z" fill="#F44336"/>
                                        <path d="M30.431 87.1599C31.121 91.0899 34.271 93.8199 37.481 93.2599C40.691 92.6999 41.131 89.3499 40.441 85.4199C39.751 81.4899 38.201 78.4799 35.001 79.0399C31.801 79.5999 29.751 83.2399 30.431 87.1599Z" fill="#F44336"/>
                                        <path d="M35.0795 84.5403C34.3495 85.3603 32.5695 87.0103 31.9395 85.7503C31.0795 84.0303 32.2695 81.4303 33.6295 80.5703C34.9895 79.7103 36.0995 80.3903 36.2895 81.1603C36.5195 82.1403 35.7295 83.8003 35.0795 84.5403V84.5403Z" fill="#FFA8A4"/>
                                        <path d="M91.9807 87.0505C90.9907 86.9005 90.8807 83.4905 93.5407 80.8105C94.8107 79.5305 96.6307 81.0505 96.1707 83.1005C95.7307 85.0505 93.7907 87.3305 91.9807 87.0505V87.0505Z" fill="#FFA8A4"/>
                                        <path d="M109.151 98.2109C103.161 101.211 89.4208 109.201 64.0508 109.201C38.6808 109.201 24.9408 101.211 18.9508 98.2109C18.9508 98.2109 16.8008 99.3609 16.8008 100.561V109.771C16.8008 111.001 17.4508 112.131 18.5108 112.761C23.1908 115.521 37.4508 122.041 64.0608 122.041C90.6708 122.041 104.931 115.521 109.611 112.761C110.131 112.454 110.562 112.017 110.862 111.493C111.162 110.968 111.32 110.375 111.321 109.771V100.561C111.301 99.3609 109.151 98.2109 109.151 98.2109V98.2109Z" fill="#FFCA28"/>
                                        <path d="M39.6002 110.84C42.4002 111.39 43.2502 111.63 43.0602 113.19C42.6702 116.26 36.3002 115.53 32.5302 114.54C24.7402 112.49 23.1602 110.33 23.1602 108.4C23.1602 106.63 24.5202 106.42 26.6202 107.16C29.1302 108.05 33.0102 109.55 39.6002 110.84V110.84Z" fill="#FFF59D"/>
                                        <path d="M109.149 100.23C109.149 100.23 92.5792 109.61 64.0492 109.61C35.5192 109.61 18.9492 100.23 18.9492 100.23" stroke="#F19534" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round"/>
                                        <path d="M26.9699 49.5704C32.2899 45.7704 35.1499 38.9604 35.3999 28.1204C35.4199 27.1404 35.6999 26.8504 36.2299 26.7904C37.0799 26.7004 37.2199 27.4704 37.2099 28.0204C36.9699 39.7204 35.4799 47.0304 29.5799 51.1504C29.2899 51.3504 27.2199 52.6104 26.3399 51.7404C25.2899 50.7204 26.6299 49.8104 26.9699 49.5704V49.5704Z" fill="#FFCA28"/>
                                        <path d="M31.8383 15.5396C31.6683 13.7296 32.0883 10.4696 36.8383 8.98957C38.2283 8.55957 39.0883 9.23957 39.2483 9.76957C39.6483 11.0896 38.4883 11.6096 37.9583 11.7796C34.3083 12.9596 34.1283 14.7796 33.3783 15.9396C32.6283 17.0996 31.8983 16.0896 31.8383 15.5396V15.5396Z" fill="#FFCA28"/>
                                        <path d="M78.2214 47.1694C83.0314 42.8994 86.2214 38.1294 88.3214 27.2694C88.5114 26.3094 88.7914 26.0494 89.3114 26.0694C90.1614 26.0894 90.2014 26.8794 90.1114 27.4194C88.3314 38.9994 86.6414 42.2994 80.7114 48.8694C80.0414 49.6094 78.4114 50.2794 77.4914 49.5094C76.6614 48.8194 77.6214 47.7094 78.2214 47.1694V47.1694Z" fill="#FFCA28"/>
                                        <path d="M85.2993 15.6294C85.1293 13.8194 85.5493 10.5594 90.2993 9.07941C91.6893 8.64941 92.5493 9.32941 92.7093 9.85941C93.1093 11.1794 91.9493 11.6994 91.4193 11.8694C87.7693 13.0494 87.5892 14.8694 86.8392 16.0294C86.0992 17.1894 85.3593 16.1794 85.2993 15.6294V15.6294Z" fill="#FFCA28"/>
                                        <path d="M31.5915 71.6207C19.9715 66.3507 16.5515 52.6007 14.7315 46.6307C14.4915 45.8407 14.6115 45.0907 15.4015 44.8507C16.1915 44.6107 16.6615 45.1207 16.9115 45.9107C18.2315 50.2407 23.3615 64.7007 33.9515 68.8107C34.7215 69.1107 35.9215 69.8407 35.2715 71.0907C34.8415 71.9007 33.4615 72.4707 31.5915 71.6207V71.6207Z" fill="#FFF59D"/>
                                        <path d="M12.6801 24.63C12.1201 23.47 11.8901 22.37 8.84013 21.1C8.07013 20.78 7.56013 20.07 7.77013 19.27C7.98013 18.47 8.78013 17.87 9.94013 18.07C13.7101 18.72 14.5301 22.55 14.6901 23.88C14.8401 25.16 13.2501 25.79 12.6801 24.63V24.63Z" fill="#FFF59D"/>
                                        <path d="M96.8701 71.6207C108.49 66.3507 111.91 52.6007 113.73 46.6307C113.97 45.8407 113.85 45.0907 113.06 44.8507C112.27 44.6107 111.8 45.1207 111.55 45.9107C110.23 50.2407 105.1 64.7007 94.5101 68.8107C93.7401 69.1107 92.5401 69.8407 93.1901 71.0907C93.6201 71.9007 95.0001 72.4707 96.8701 71.6207Z" fill="#FFF59D"/>
                                        <path d="M115.782 24.63C116.342 23.47 116.572 22.37 119.622 21.1C120.392 20.78 120.902 20.07 120.692 19.27C120.482 18.47 119.682 17.87 118.522 18.07C114.752 18.72 113.932 22.55 113.772 23.88C113.622 25.16 115.222 25.79 115.782 24.63V24.63Z" fill="#FFF59D"/>
                                        <path d="M59.3805 29.5491C59.9905 28.2991 61.0605 26.5891 64.5505 25.8691C65.8905 25.5891 66.2805 25.0091 66.1605 24.1291C65.9205 22.2991 63.6405 22.4291 62.4105 22.7191C58.3105 23.6791 57.4005 27.3191 57.2305 28.7591C57.0605 30.1291 58.7805 30.7991 59.3805 29.5491V29.5491Z" fill="#FFF59D"/>
                                        </svg>
                                        <small>Deal of the weekend</small>
                                    </span>
                                    <div className="banner-text pt-3">
                                        <h1 className="fw-bold mb-4">
                                        Hello,  Austine Robertson
                                        </h1>
                                    </div>
                                    <p className="mb-4">Get <span className="text-primary">FREE delivery </span>on every weekend.</p>
                                    <button type="button" className="btn btn-primary rounded-pill">Check Menu</button>
                                </Col>
                            </Row>
                            </Card.Body>
                        </div>
                    </Card>
                    <div className="card-transparent bg-transparent mb-0" >
                        <div className="card-header border-0  ">
                            <div className="d-flex justify-content-between align-items-center">
                            <h3>Menu category</h3>
                            <Link to="#" className="text-dark d-flex">View All
                                <svg width="24" height="24"  className="ms-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="24" height="24" rx="12" fill="#EA6A12"/>
                                    <path d="M10.25 8.5L13.75 12L10.25 15.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </Link>
                            </div>
                        </div>
                        <Card.Body className="p-0">
                            <Swiper 
                                slidesPerView={6}
                                loop={false}
                                spaceBetween={30}
                                className="d-slider2"
                                breakpoints={{
                                    320: { slidesPerView: 2},
                                    550: { slidesPerView: 2 },
                                    991: { slidesPerView: 4 },
                                    1400: { slidesPerView: 6 }
                                    }}>
                            
                                <SwiperSlide>
                                    <Card className="category-menu">
                                        <Card.Body>
                                        <div className="text-center iq-menu-category"
                                            data-iq-gsap="onStart"
                                            data-iq-opacity="0"
                                            data-iq-position-y="-40"
                                            data-iq-duration=".6"
                                            data-iq-delay=".6"
                                            data-iq-trigger="scroll"
                                            data-iq-ease="none">
                                            <img src={lay1} alt="header" className="img-fluid rounded-pill mb-3"/>
                                            <h6 className="heading-title fw-bolder fs-6 pb-4">Pizza</h6>
                                            <div className="category-icon pt-4">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="24" height="24" rx="12" fill="currentColor"/>
                                                    <path d="M10.25 8.5L13.75 12L10.25 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </div>
                                        </div>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="category-menu">
                                        <Card.Body>
                                        <div className="text-center iq-menu-category"
                                            data-iq-gsap="onStart"
                                            data-iq-opacity="0"
                                            data-iq-position-y="-40"
                                            data-iq-duration=".6"
                                            data-iq-delay=".7"
                                            data-iq-trigger="scroll"
                                            data-iq-ease="none">
                                            <img src={lay2} alt="header" className="img-fluid rounded-pill mb-3"/>
                                            <h6 className="heading-title fw-bolder fs-6 pb-4">Fruits</h6>
                                            <div className="category-icon pt-4">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="24" height="24" rx="12" fill="currentColor"/>
                                                    <path d="M10.25 8.5L13.75 12L10.25 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </div>
                                        </div>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="category-menu">
                                        <Card.Body>
                                        <div className="text-center iq-menu-category"
                                        data-iq-gsap="onStart"
                                        data-iq-opacity="0"
                                        data-iq-position-y="-40"
                                        data-iq-duration=".6"
                                        data-iq-delay=".8"
                                        data-iq-trigger="scroll"
                                        data-iq-ease="none">
                                            <img src={lay3} alt="header" className="img-fluid rounded-pill mb-3"/>
                                            <h6 className="heading-title fw-bolder fs-6 pb-4">Snacks</h6>
                                            <div className="category-icon pt-4">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="24" height="24" rx="12" fill="currentColor"/>
                                                    <path d="M10.25 8.5L13.75 12L10.25 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </div>
                                        </div>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="category-menu">
                                        <Card.Body>
                                        <div className="text-center iq-menu-category"
                                            data-iq-gsap="onStart"
                                            data-iq-opacity="0"
                                            data-iq-position-y="-40"
                                            data-iq-duration=".6"
                                            data-iq-delay=".9"
                                            data-iq-trigger="scroll"
                                            data-iq-ease="none">
                                            <img src={lay4} alt="header" className="img-fluid rounded-pill mb-3"/>
                                            <h6 className="heading-title fw-bolder fs-6 pb-4">Veggie</h6>
                                            <div className="category-icon pt-4">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="24" height="24" rx="12" fill="currentColor"/>
                                                    <path d="M10.25 8.5L13.75 12L10.25 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </div>
                                        </div>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="category-menu">
                                        <Card.Body>
                                        <div className="text-center iq-menu-category"
                                        data-iq-gsap="onStart"
                                        data-iq-opacity="0"
                                        data-iq-position-y="-40"
                                        data-iq-duration=".6"
                                        data-iq-delay="1"
                                        data-iq-trigger="scroll"
                                        data-iq-ease="none">
                                            <img src={lay5} alt="header" className="img-fluid rounded-pill mb-3"/>
                                            <h6 className="heading-title fw-bolder fs-6 pb-4">Hotdog</h6>
                                            <div className="category-icon pt-4">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="24" height="24" rx="12" fill="currentColor"/>
                                                    <path d="M10.25 8.5L13.75 12L10.25 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </div>
                                        </div>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="category-menu">
                                        <Card.Body>
                                        <div className="text-center iq-menu-category"
                                        data-iq-gsap="onStart"
                                        data-iq-opacity="0"
                                        data-iq-position-y="-40"
                                        data-iq-duration=".6"
                                        data-iq-delay="1.1"
                                        data-iq-trigger="scroll"
                                        data-iq-ease="none">
                                            <img src={lay6} alt="header" className="img-fluid rounded-pill mb-3"/>
                                            <h6 className="heading-title fw-bolder fs-6 pb-4">Burger</h6>
                                            <div className="category-icon pt-4">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="24" height="24" rx="12" fill="currentColor"/>
                                                    <path d="M10.25 8.5L13.75 12L10.25 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </div>
                                        </div>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="category-menu">
                                        <Card.Body>
                                        <div className="text-center iq-menu-category"
                                            data-iq-gsap="onStart"
                                            data-iq-opacity="0"
                                            data-iq-position-y="-40"
                                            data-iq-duration=".6"
                                            data-iq-delay="1.2"
                                            data-iq-trigger="scroll"
                                            data-iq-ease="none">
                                            <img src={lay7} alt="header" className="img-fluid rounded-pill mb-3"/>
                                            <h6 className="heading-title fw-bolder fs-6 pb-4">Drink</h6>
                                            <div className="category-icon pt-4">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="24" height="24" rx="12" fill="currentColor"/>
                                                    <path d="M10.25 8.5L13.75 12L10.25 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </div>
                                        </div>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="category-menu">
                                        <Card.Body>
                                        <div className="text-center iq-menu-category"
                                            data-iq-gsap="onStart"
                                            data-iq-opacity="0"
                                            data-iq-position-y="-40"
                                            data-iq-duration=".6"
                                            data-iq-delay="1.3"
                                            data-iq-trigger="scroll"
                                            data-iq-ease="none">
                                            <img src={lay1} alt="header" className="img-fluid rounded-pill mb-3"/>
                                            <h6 className="heading-title fw-bolder fs-6 pb-4">Pizza</h6>
                                            <div className="category-icon pt-4">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="24" height="24" rx="12" fill="currentColor"/>
                                                    <path d="M10.25 8.5L13.75 12L10.25 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </div>
                                        </div>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                            </Swiper>
                            <Col xl="12" lg="12" className="dish-card-horizontal mt-2">
                            <Row className="row-cols-1 row-cols-md-2 row-cols-xl-2 row-cols-xxl-4">
                                <Col>
                                    <Card className="card-white dish-card profile-img mb-0">
                                        <div className="profile-img21">
                                            <img 
                                                src={lay16} 
                                                className="img-fluid rounded-pill avatar-170 blur-shadow position-bottom"
                                                alt="profileimage"/>
                                            <img 
                                                src={lay16}
                                                className="img-fluid rounded-pill avatar-170 hover-image " 
                                                alt="profileimage" 
                                                data-iq-gsap="onStart"
                                                data-iq-opacity="0"
                                                data-iq-scale=".6"
                                                data-iq-rotate="180"
                                                data-iq-duration="1"
                                                data-iq-delay="1"
                                                data-iq-trigger="scroll"
                                                data-iq-ease="none" />
                                        </div>
                                        <Card.Body className="menu-image">
                                            <h6 className="heading-title fw-bolder mt-4 mb-0">Mushroom</h6>
                                            <div className="card-rating stars-ratings">
                                                <RatingStar count={3} count1={2}  />
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
                                </Col>
                                <Col>
                                    <Card className="card-white dish-card profile-img mb-0">
                                        <div className="profile-img21">
                                            <img 
                                                src={lay15} 
                                                className="img-fluid rounded-pill avatar-170 blur-shadow position-bottom"
                                                alt="profileimage"/>
                                            <img 
                                                src={lay15}
                                                className="img-fluid rounded-pill avatar-170 hover-image " 
                                                alt="profileimage" 
                                                data-iq-gsap="onStart"
                                                data-iq-opacity="0"
                                                data-iq-scale=".6"
                                                data-iq-rotate="180"
                                                data-iq-duration="1"
                                                data-iq-delay="1"
                                                data-iq-trigger="scroll"
                                                data-iq-ease="none" />
                                        </div>
                                        <Card.Body className="menu-image">
                                            <h6 className="heading-title fw-bolder mt-4 mb-0">Spaghetti</h6>
                                            <div className="card-rating stars-ratings">
                                                <RatingStar count={3} count1={2}   /> 
                                            </div>
                                            <div className="d-flex justify-content-between mt-3">
                                                <div className="d-flex align-items-center">
                                                    <span className="text-primary fw-bolder me-2">$7.29</span>
                                                </div>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect className="circle-1" width="24" height="24" rx="12" fill="currentColor"/>
                                                    <rect className="circle-2" x="11.168" y="7" width="1.66667" height="10" rx="0.833333" fill="currentColor"/>
                                                    <rect className="circle-3" x="7" y="12.834" width="1.66666" height="10" rx="0.833332" transform="rotate(-90 7 12.834)" fill="currentColor"/>
                                                </svg>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className="card-white dish-card profile-img mb-0">
                                        <div className="profile-img21">
                                            <img 
                                                src={lay14} 
                                                className="img-fluid rounded-pill avatar-170 blur-shadow position-bottom"
                                                alt="profileimage"/>
                                            <img 
                                                src={lay14}
                                                className="img-fluid rounded-pill avatar-170 hover-image " 
                                                alt="profileimage" 
                                                data-iq-gsap="onStart"
                                                data-iq-opacity="0"
                                                data-iq-scale=".6"
                                                data-iq-rotate="180"
                                                data-iq-duration="1"
                                                data-iq-delay="1"
                                                data-iq-trigger="scroll"
                                                data-iq-ease="none" />
                                        </div>
                                        <Card.Body className="menu-image">
                                            <h6 className="heading-title fw-bolder mt-4 mb-0">Vegetable</h6>
                                            <div className="card-rating stars-ratings">
                                                <RatingStar count={3} count1={2}   />
                                            </div>
                                            <div className="d-flex justify-content-between mt-3">
                                                <div className="d-flex align-items-center">
                                                    <span className="text-primary fw-bolder me-2">$5.49</span>
                                                </div>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect className="circle-1" width="24" height="24" rx="12" fill="currentColor"/>
                                                    <rect className="circle-2" x="11.168" y="7" width="1.66667" height="10" rx="0.833333" fill="currentColor"/>
                                                    <rect className="circle-3" x="7" y="12.834" width="1.66666" height="10" rx="0.833332" transform="rotate(-90 7 12.834)" fill="currentColor"/>
                                                </svg>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className="card-white dish-card profile-img mb-0">
                                        <div className="profile-img21">
                                            <img 
                                                src={lay12} 
                                                className="img-fluid rounded-pill avatar-170 blur-shadow position-bottom"
                                                alt="profileimage"/>
                                            <img 
                                                src={lay12}
                                                className="img-fluid rounded-pill avatar-170 hover-image " 
                                                alt="profileimage" 
                                                data-iq-gsap="onStart"
                                                data-iq-opacity="0"
                                                data-iq-scale=".6"
                                                data-iq-rotate="180"
                                                data-iq-duration="1"
                                                data-iq-delay="1"
                                                data-iq-trigger="scroll"
                                                data-iq-ease="none" />
                                        </div>
                                        <Card.Body className="menu-image">
                                            <h6 className="heading-title fw-bolder mt-4 mb-0">Sweets</h6>
                                            <div className="card-rating stars-ratings">
                                                <RatingStar count={3} count1={2}   />
                                            </div>
                                            <div className="d-flex justify-content-between mt-3">
                                                <div className="d-flex align-items-center">
                                                    <span className="text-primary fw-bolder me-2">$6.49</span>
                                                </div>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect className="circle-1" width="24" height="24" rx="12" fill="currentColor"/>
                                                    <rect className="circle-2" x="11.168" y="7" width="1.66667" height="10" rx="0.833333" fill="currentColor"/>
                                                    <rect className="circle-3" x="7" y="12.834" width="1.66666" height="10" rx="0.833332" transform="rotate(-90 7 12.834)" fill="currentColor"/>
                                                </svg>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col
                                data-iq-gsap="onStart"
                                data-iq-opacity="0"
                                data-iq-scale=".6"
                                data-iq-rotate="180"
                                data-iq-duration="1"
                                data-iq-delay="1"
                                data-iq-trigger="scroll"
                                data-iq-ease="none"
                                >
                                </Col>
                                <Col
                                data-iq-gsap="onStart"
                                    data-iq-opacity="0"
                                    data-iq-position-y="-40"
                                    data-iq-duration=".6"
                                    data-iq-delay=".8"
                                    data-iq-trigger="scroll"
                                    data-iq-ease="none"
                                >
                                </Col>
                                <Col
                                data-iq-gsap="onStart"
                                    data-iq-opacity="0"
                                    data-iq-position-y="-40"
                                    data-iq-duration=".6"
                                    data-iq-delay=".9"
                                    data-iq-trigger="scroll"
                                    data-iq-ease="none"
                                >
                                </Col>
                            </Row>
                            </Col>
                        </Card.Body>
                    </div>
                    <div className="card-transparent bg-transparent mb-0">
                        <div className="card-header border-0 m-2 mb-5">
                            <div className="d-flex justify-content-between">
                            <h3>Trending orders</h3>
                            <Link to="#" className="text-dark">View All
                                <svg width="24" height="24"  className="ms-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="24" height="24" rx="12" fill="#EA6A12"/>
                                    <path d="M10.25 8.5L13.75 12L10.25 15.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </Link>
                            </div> 
                        </div>
                        <Card.Body className="p-0 dish-card-vertical">
                            <Swiper 
                                slidesPerView={3}
                                className="d-slider3"
                                loop={false}
                                spaceBetween={30}
                                breakpoints={{
                                    320: { slidesPerView: 1},
                                    550: { slidesPerView: 1},
                                    991: { slidesPerView: 2},
                                    1400: { slidesPerView: 3}
                                    }}>
                                <SwiperSlide>
                                    <Card className="card-white dish-card2 {{active}}">
                                        <Card.Body>
                                            <div className="d-flex profile-img1">
                                                <div className="profile-img31">
                                                    <img src={lay17} className="img-fluid rounded-pill avatar-130 blur-shadow position-start" alt="profileimage"/>
                                                    <img src={lay17} className="img-fluid rounded-pill avatar-130 hover-image" alt="profileimage"
                                                        data-iq-gsap="onStart"
                                                        data-iq-opacity="0"
                                                        data-iq-scale=".6"
                                                        data-iq-rotate="180"
                                                        data-iq-duration="1"
                                                        data-iq-delay="1"
                                                        data-iq-trigger="scroll"
                                                        data-iq-ease="none"
                                                    />
                                                </div>
                                                <div>
                                                    <span className="text-primary">
                                                        <svg width="20" height="15" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M94.5186 21.8107C96.9586 20.6307 98.6486 18.1407 98.6486 15.2507C98.6486 13.3199 97.8816 11.4682 96.5163 10.103C95.1511 8.7377 93.2994 7.9707 91.3686 7.9707C89.4378 7.9707 87.5861 8.7377 86.2209 10.103C84.8556 11.4682 84.0886 13.3199 84.0886 15.2507C84.0886 18.1807 85.8186 20.6907 88.3086 21.8507C85.4286 37.4507 81.0086 49.0607 64.5586 51.5407C64.5586 51.5407 68.9886 73.6907 89.7086 73.6907C110.429 73.6907 112.529 51.7607 112.529 51.7607C95.7186 52.6207 94.2986 31.4907 94.5186 21.8107V21.8107Z" fill="#F19534"/>
                                                            <path d="M34.7383 21.8107C32.2983 20.6307 30.6083 18.1407 30.6083 15.2507C30.6083 13.3199 31.3753 11.4682 32.7405 10.103C34.1058 8.7377 35.9575 7.9707 37.8883 7.9707C39.8191 7.9707 41.6708 8.7377 43.036 10.103C44.4013 11.4682 45.1683 13.3199 45.1683 15.2507C45.1683 18.1807 43.4383 20.6907 40.9483 21.8507C43.8283 37.4507 48.2483 49.0607 64.6983 51.5407C64.6983 51.5407 60.2683 73.6907 39.5483 73.6907C18.8283 73.6907 16.7383 51.7707 16.7383 51.7707C33.5383 52.6207 34.9583 31.4907 34.7383 21.8107V21.8107Z" fill="#F19534"/>
                                                            <path d="M89.4297 73.6891C89.5197 73.6891 89.6097 73.6991 89.6997 73.6991C95.4097 73.6991 99.6997 72.0291 102.92 69.6191L89.4297 73.6891Z" fill="#FFCA28"/>
                                                            <path d="M119.242 16.8609C115.912 16.4109 112.732 19.5809 112.152 23.9209C111.792 26.6309 112.522 29.1609 113.932 30.7909L111.532 40.7409C111.532 40.7409 107.862 64.2509 89.3215 68.8909C74.5015 72.6009 69.1315 45.4709 67.8315 37.0909C70.6515 35.6909 72.6015 32.7909 72.6015 29.4209C72.6015 24.6909 68.7715 20.8609 64.0415 20.8609C59.3115 20.8609 55.4815 24.6909 55.4815 29.4209C55.4815 32.8109 57.4615 35.7409 60.3315 37.1209C59.3015 45.3909 54.7615 71.6209 38.7615 68.8809C22.5215 66.0909 15.4315 38.7409 13.7915 31.3009C15.7415 29.7009 16.8315 26.8809 16.4315 23.8509C15.8515 19.5009 12.4115 16.3809 8.75151 16.8709C5.09151 17.3609 2.60151 21.2809 3.18151 25.6209C3.60151 28.7809 5.54151 31.2909 7.97151 32.2409L20.6915 111.271C20.6915 111.271 31.7915 120.041 64.0415 120.041C96.2915 120.041 107.392 111.271 107.392 111.271L120.142 32.0309C122.202 30.9509 123.822 28.5209 124.222 25.5409C124.812 21.1909 122.582 17.3109 119.242 16.8609V16.8609Z" fill="#FFCA28"/>
                                                            <path d="M64.4392 99.9095C69.8185 99.9095 74.1792 94.7115 74.1792 88.2995C74.1792 81.8874 69.8185 76.6895 64.4392 76.6895C59.06 76.6895 54.6992 81.8874 54.6992 88.2995C54.6992 94.7115 59.06 99.9095 64.4392 99.9095Z" fill="#26A69A"/>
                                                            <path d="M64.4394 79.5598C64.8194 79.9798 65.1594 80.7498 64.4394 82.2498C63.7194 83.7498 59.8394 85.7798 59.1294 86.1898C58.4194 86.6098 57.9494 86.4198 57.7294 86.2498C56.6794 85.4098 57.0794 83.5098 57.7594 82.3498C59.2194 79.8398 62.3094 77.2498 64.4394 79.5598V79.5598Z" fill="#69F0AE"/>
                                                            <path d="M63.7186 92.6299C62.6186 93.1599 59.0086 94.7699 60.1986 96.6799C60.8986 97.8099 62.3486 98.2899 63.6786 98.3499C65.0086 98.4099 66.3186 97.9899 67.4986 97.3799C73.0986 94.4799 73.5486 86.8599 72.4586 86.2799C71.3386 85.6799 70.5786 87.2299 69.9986 87.8899C68.235 89.865 66.1015 91.4753 63.7186 92.6299V92.6299Z" fill="#00796B"/>
                                                            <path d="M118.09 78.8003C119.65 70.1703 113.85 68.0103 113.85 68.0103C113.85 68.0103 110.11 67.3303 108.35 77.0403C106.59 86.7403 110.33 87.4203 110.33 87.4203C110.33 87.4203 116.52 87.4303 118.09 78.8003V78.8003Z" fill="#26A69A"/>
                                                            <path d="M115.511 70.96C116.871 72.78 115.261 75.47 112.651 77.26C111.881 77.79 110.861 77.59 110.711 77.15C110.291 75.89 110.471 74.46 111.031 73.25C112.691 69.62 114.821 70.04 115.511 70.96V70.96Z" fill="#69F0AE"/>
                                                            <path d="M9.76138 79.06C8.19138 70.44 14.0014 68.27 14.0014 68.27C14.0014 68.27 17.7414 67.59 19.5014 77.3C21.2614 87 17.5214 87.68 17.5214 87.68C17.5214 87.68 11.3214 87.69 9.76138 79.06V79.06Z" fill="#26A69A"/>
                                                            <path d="M15.7805 71.1993C17.1205 72.1993 16.5705 73.5093 15.5605 74.4193C14.4105 75.4693 13.5305 76.6193 12.5505 77.8093C12.4005 77.9893 12.2305 78.1893 11.9905 78.2393C11.5305 78.3393 11.1605 77.8693 11.0105 77.4193C10.5805 76.1593 10.6605 74.6793 11.3005 73.5193C13.1205 70.2093 15.2605 70.8093 15.7805 71.1993V71.1993Z" fill="#69F0AE"/>
                                                            <path d="M99.9895 87.1599C99.2995 91.0899 96.1495 93.8199 92.9395 93.2599C89.7295 92.6999 89.2895 89.3499 89.9795 85.4199C90.6695 81.4899 92.2195 78.4799 95.4195 79.0399C98.6295 79.5999 100.679 83.2399 99.9895 87.1599V87.1599Z" fill="#F44336"/>
                                                            <path d="M30.431 87.1599C31.121 91.0899 34.271 93.8199 37.481 93.2599C40.691 92.6999 41.131 89.3499 40.441 85.4199C39.751 81.4899 38.201 78.4799 35.001 79.0399C31.801 79.5999 29.751 83.2399 30.431 87.1599Z" fill="#F44336"/>
                                                            <path d="M35.0795 84.5403C34.3495 85.3603 32.5695 87.0103 31.9395 85.7503C31.0795 84.0303 32.2695 81.4303 33.6295 80.5703C34.9895 79.7103 36.0995 80.3903 36.2895 81.1603C36.5195 82.1403 35.7295 83.8003 35.0795 84.5403V84.5403Z" fill="#FFA8A4"/>
                                                            <path d="M91.9807 87.0505C90.9907 86.9005 90.8807 83.4905 93.5407 80.8105C94.8107 79.5305 96.6307 81.0505 96.1707 83.1005C95.7307 85.0505 93.7907 87.3305 91.9807 87.0505V87.0505Z" fill="#FFA8A4"/>
                                                            <path d="M109.151 98.2109C103.161 101.211 89.4208 109.201 64.0508 109.201C38.6808 109.201 24.9408 101.211 18.9508 98.2109C18.9508 98.2109 16.8008 99.3609 16.8008 100.561V109.771C16.8008 111.001 17.4508 112.131 18.5108 112.761C23.1908 115.521 37.4508 122.041 64.0608 122.041C90.6708 122.041 104.931 115.521 109.611 112.761C110.131 112.454 110.562 112.017 110.862 111.493C111.162 110.968 111.32 110.375 111.321 109.771V100.561C111.301 99.3609 109.151 98.2109 109.151 98.2109V98.2109Z" fill="#FFCA28"/>
                                                            <path d="M39.6002 110.84C42.4002 111.39 43.2502 111.63 43.0602 113.19C42.6702 116.26 36.3002 115.53 32.5302 114.54C24.7402 112.49 23.1602 110.33 23.1602 108.4C23.1602 106.63 24.5202 106.42 26.6202 107.16C29.1302 108.05 33.0102 109.55 39.6002 110.84V110.84Z" fill="#FFF59D"/>
                                                            <path d="M109.149 100.23C109.149 100.23 92.5792 109.61 64.0492 109.61C35.5192 109.61 18.9492 100.23 18.9492 100.23" stroke="#F19534" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round"/>
                                                            <path d="M26.9699 49.5704C32.2899 45.7704 35.1499 38.9604 35.3999 28.1204C35.4199 27.1404 35.6999 26.8504 36.2299 26.7904C37.0799 26.7004 37.2199 27.4704 37.2099 28.0204C36.9699 39.7204 35.4799 47.0304 29.5799 51.1504C29.2899 51.3504 27.2199 52.6104 26.3399 51.7404C25.2899 50.7204 26.6299 49.8104 26.9699 49.5704V49.5704Z" fill="#FFCA28"/>
                                                            <path d="M31.8383 15.5396C31.6683 13.7296 32.0883 10.4696 36.8383 8.98957C38.2283 8.55957 39.0883 9.23957 39.2483 9.76957C39.6483 11.0896 38.4883 11.6096 37.9583 11.7796C34.3083 12.9596 34.1283 14.7796 33.3783 15.9396C32.6283 17.0996 31.8983 16.0896 31.8383 15.5396V15.5396Z" fill="#FFCA28"/>
                                                            <path d="M78.2214 47.1694C83.0314 42.8994 86.2214 38.1294 88.3214 27.2694C88.5114 26.3094 88.7914 26.0494 89.3114 26.0694C90.1614 26.0894 90.2014 26.8794 90.1114 27.4194C88.3314 38.9994 86.6414 42.2994 80.7114 48.8694C80.0414 49.6094 78.4114 50.2794 77.4914 49.5094C76.6614 48.8194 77.6214 47.7094 78.2214 47.1694V47.1694Z" fill="#FFCA28"/>
                                                            <path d="M85.2993 15.6294C85.1293 13.8194 85.5493 10.5594 90.2993 9.07941C91.6893 8.64941 92.5493 9.32941 92.7093 9.85941C93.1093 11.1794 91.9493 11.6994 91.4193 11.8694C87.7693 13.0494 87.5892 14.8694 86.8392 16.0294C86.0992 17.1894 85.3593 16.1794 85.2993 15.6294V15.6294Z" fill="#FFCA28"/>
                                                            <path d="M31.5915 71.6207C19.9715 66.3507 16.5515 52.6007 14.7315 46.6307C14.4915 45.8407 14.6115 45.0907 15.4015 44.8507C16.1915 44.6107 16.6615 45.1207 16.9115 45.9107C18.2315 50.2407 23.3615 64.7007 33.9515 68.8107C34.7215 69.1107 35.9215 69.8407 35.2715 71.0907C34.8415 71.9007 33.4615 72.4707 31.5915 71.6207V71.6207Z" fill="#FFF59D"/>
                                                            <path d="M12.6801 24.63C12.1201 23.47 11.8901 22.37 8.84013 21.1C8.07013 20.78 7.56013 20.07 7.77013 19.27C7.98013 18.47 8.78013 17.87 9.94013 18.07C13.7101 18.72 14.5301 22.55 14.6901 23.88C14.8401 25.16 13.2501 25.79 12.6801 24.63V24.63Z" fill="#FFF59D"/>
                                                            <path d="M96.8701 71.6207C108.49 66.3507 111.91 52.6007 113.73 46.6307C113.97 45.8407 113.85 45.0907 113.06 44.8507C112.27 44.6107 111.8 45.1207 111.55 45.9107C110.23 50.2407 105.1 64.7007 94.5101 68.8107C93.7401 69.1107 92.5401 69.8407 93.1901 71.0907C93.6201 71.9007 95.0001 72.4707 96.8701 71.6207Z" fill="#FFF59D"/>
                                                            <path d="M115.782 24.63C116.342 23.47 116.572 22.37 119.622 21.1C120.392 20.78 120.902 20.07 120.692 19.27C120.482 18.47 119.682 17.87 118.522 18.07C114.752 18.72 113.932 22.55 113.772 23.88C113.622 25.16 115.222 25.79 115.782 24.63V24.63Z" fill="#FFF59D"/>
                                                            <path d="M59.3805 29.5491C59.9905 28.2991 61.0605 26.5891 64.5505 25.8691C65.8905 25.5891 66.2805 25.0091 66.1605 24.1291C65.9205 22.2991 63.6405 22.4291 62.4105 22.7191C58.3105 23.6791 57.4005 27.3191 57.2305 28.7591C57.0605 30.1291 58.7805 30.7991 59.3805 29.5491V29.5491Z" fill="#FFF59D"/>
                                                        </svg>
                                                        <small>Top of the week</small>
                                                    </span>
                                                    <h6 className="mb-3 mt-3 heading-title fw-bolder">Italian Salad</h6>
                                                    <p className="mt-2 mb-0 pb-4 iq-calories small">60 Calories</p>
                                                    <small>4 persons</small>
                                                    <div className="d-flex mt-2">
                                                        <span className="text-primary me-4">$7.49</span>
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect width="24" height="24" rx="12" fill="#EA6A12"/>
                                                            <rect x="11.168" y="7" width="1.66667" height="10" rx="0.833333" fill="white"/>
                                                            <rect x="7" y="12.834" width="1.66666" height="10" rx="0.833332" transform="rotate(-90 7 12.834)" fill="white"/>
                                                        </svg>
                                                    </div>
                                                </div>            
                                            </div>
                                        </Card.Body>
                                    </Card>
                                    <Card className="card-white dish-card2">
                                        <Card.Body>
                                            <div className="d-flex profile-img1">
                                                <div className="profile-img31">
                                                    <img src={lay19} className="img-fluid rounded-pill avatar-130 blur-shadow position-start" alt="profileimage"/>
                                                    <img src={lay19} className="img-fluid rounded-pill avatar-130 hover-image" alt="profileimage"
                                                        data-iq-gsap="onStart"
                                                        data-iq-opacity="0"
                                                        data-iq-scale=".6"
                                                        data-iq-rotate="180"
                                                        data-iq-duration="1"
                                                        data-iq-delay="1"
                                                        data-iq-trigger="scroll"
                                                        data-iq-ease="none"
                                                    />
                                                </div>
                                                <div>
                                                    <span className="text-primary">
                                                        <svg width="20" height="15" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M94.5186 21.8107C96.9586 20.6307 98.6486 18.1407 98.6486 15.2507C98.6486 13.3199 97.8816 11.4682 96.5163 10.103C95.1511 8.7377 93.2994 7.9707 91.3686 7.9707C89.4378 7.9707 87.5861 8.7377 86.2209 10.103C84.8556 11.4682 84.0886 13.3199 84.0886 15.2507C84.0886 18.1807 85.8186 20.6907 88.3086 21.8507C85.4286 37.4507 81.0086 49.0607 64.5586 51.5407C64.5586 51.5407 68.9886 73.6907 89.7086 73.6907C110.429 73.6907 112.529 51.7607 112.529 51.7607C95.7186 52.6207 94.2986 31.4907 94.5186 21.8107V21.8107Z" fill="#F19534"/>
                                                            <path d="M34.7383 21.8107C32.2983 20.6307 30.6083 18.1407 30.6083 15.2507C30.6083 13.3199 31.3753 11.4682 32.7405 10.103C34.1058 8.7377 35.9575 7.9707 37.8883 7.9707C39.8191 7.9707 41.6708 8.7377 43.036 10.103C44.4013 11.4682 45.1683 13.3199 45.1683 15.2507C45.1683 18.1807 43.4383 20.6907 40.9483 21.8507C43.8283 37.4507 48.2483 49.0607 64.6983 51.5407C64.6983 51.5407 60.2683 73.6907 39.5483 73.6907C18.8283 73.6907 16.7383 51.7707 16.7383 51.7707C33.5383 52.6207 34.9583 31.4907 34.7383 21.8107V21.8107Z" fill="#F19534"/>
                                                            <path d="M89.4297 73.6891C89.5197 73.6891 89.6097 73.6991 89.6997 73.6991C95.4097 73.6991 99.6997 72.0291 102.92 69.6191L89.4297 73.6891Z" fill="#FFCA28"/>
                                                            <path d="M119.242 16.8609C115.912 16.4109 112.732 19.5809 112.152 23.9209C111.792 26.6309 112.522 29.1609 113.932 30.7909L111.532 40.7409C111.532 40.7409 107.862 64.2509 89.3215 68.8909C74.5015 72.6009 69.1315 45.4709 67.8315 37.0909C70.6515 35.6909 72.6015 32.7909 72.6015 29.4209C72.6015 24.6909 68.7715 20.8609 64.0415 20.8609C59.3115 20.8609 55.4815 24.6909 55.4815 29.4209C55.4815 32.8109 57.4615 35.7409 60.3315 37.1209C59.3015 45.3909 54.7615 71.6209 38.7615 68.8809C22.5215 66.0909 15.4315 38.7409 13.7915 31.3009C15.7415 29.7009 16.8315 26.8809 16.4315 23.8509C15.8515 19.5009 12.4115 16.3809 8.75151 16.8709C5.09151 17.3609 2.60151 21.2809 3.18151 25.6209C3.60151 28.7809 5.54151 31.2909 7.97151 32.2409L20.6915 111.271C20.6915 111.271 31.7915 120.041 64.0415 120.041C96.2915 120.041 107.392 111.271 107.392 111.271L120.142 32.0309C122.202 30.9509 123.822 28.5209 124.222 25.5409C124.812 21.1909 122.582 17.3109 119.242 16.8609V16.8609Z" fill="#FFCA28"/>
                                                            <path d="M64.4392 99.9095C69.8185 99.9095 74.1792 94.7115 74.1792 88.2995C74.1792 81.8874 69.8185 76.6895 64.4392 76.6895C59.06 76.6895 54.6992 81.8874 54.6992 88.2995C54.6992 94.7115 59.06 99.9095 64.4392 99.9095Z" fill="#26A69A"/>
                                                            <path d="M64.4394 79.5598C64.8194 79.9798 65.1594 80.7498 64.4394 82.2498C63.7194 83.7498 59.8394 85.7798 59.1294 86.1898C58.4194 86.6098 57.9494 86.4198 57.7294 86.2498C56.6794 85.4098 57.0794 83.5098 57.7594 82.3498C59.2194 79.8398 62.3094 77.2498 64.4394 79.5598V79.5598Z" fill="#69F0AE"/>
                                                            <path d="M63.7186 92.6299C62.6186 93.1599 59.0086 94.7699 60.1986 96.6799C60.8986 97.8099 62.3486 98.2899 63.6786 98.3499C65.0086 98.4099 66.3186 97.9899 67.4986 97.3799C73.0986 94.4799 73.5486 86.8599 72.4586 86.2799C71.3386 85.6799 70.5786 87.2299 69.9986 87.8899C68.235 89.865 66.1015 91.4753 63.7186 92.6299V92.6299Z" fill="#00796B"/>
                                                            <path d="M118.09 78.8003C119.65 70.1703 113.85 68.0103 113.85 68.0103C113.85 68.0103 110.11 67.3303 108.35 77.0403C106.59 86.7403 110.33 87.4203 110.33 87.4203C110.33 87.4203 116.52 87.4303 118.09 78.8003V78.8003Z" fill="#26A69A"/>
                                                            <path d="M115.511 70.96C116.871 72.78 115.261 75.47 112.651 77.26C111.881 77.79 110.861 77.59 110.711 77.15C110.291 75.89 110.471 74.46 111.031 73.25C112.691 69.62 114.821 70.04 115.511 70.96V70.96Z" fill="#69F0AE"/>
                                                            <path d="M9.76138 79.06C8.19138 70.44 14.0014 68.27 14.0014 68.27C14.0014 68.27 17.7414 67.59 19.5014 77.3C21.2614 87 17.5214 87.68 17.5214 87.68C17.5214 87.68 11.3214 87.69 9.76138 79.06V79.06Z" fill="#26A69A"/>
                                                            <path d="M15.7805 71.1993C17.1205 72.1993 16.5705 73.5093 15.5605 74.4193C14.4105 75.4693 13.5305 76.6193 12.5505 77.8093C12.4005 77.9893 12.2305 78.1893 11.9905 78.2393C11.5305 78.3393 11.1605 77.8693 11.0105 77.4193C10.5805 76.1593 10.6605 74.6793 11.3005 73.5193C13.1205 70.2093 15.2605 70.8093 15.7805 71.1993V71.1993Z" fill="#69F0AE"/>
                                                            <path d="M99.9895 87.1599C99.2995 91.0899 96.1495 93.8199 92.9395 93.2599C89.7295 92.6999 89.2895 89.3499 89.9795 85.4199C90.6695 81.4899 92.2195 78.4799 95.4195 79.0399C98.6295 79.5999 100.679 83.2399 99.9895 87.1599V87.1599Z" fill="#F44336"/>
                                                            <path d="M30.431 87.1599C31.121 91.0899 34.271 93.8199 37.481 93.2599C40.691 92.6999 41.131 89.3499 40.441 85.4199C39.751 81.4899 38.201 78.4799 35.001 79.0399C31.801 79.5999 29.751 83.2399 30.431 87.1599Z" fill="#F44336"/>
                                                            <path d="M35.0795 84.5403C34.3495 85.3603 32.5695 87.0103 31.9395 85.7503C31.0795 84.0303 32.2695 81.4303 33.6295 80.5703C34.9895 79.7103 36.0995 80.3903 36.2895 81.1603C36.5195 82.1403 35.7295 83.8003 35.0795 84.5403V84.5403Z" fill="#FFA8A4"/>
                                                            <path d="M91.9807 87.0505C90.9907 86.9005 90.8807 83.4905 93.5407 80.8105C94.8107 79.5305 96.6307 81.0505 96.1707 83.1005C95.7307 85.0505 93.7907 87.3305 91.9807 87.0505V87.0505Z" fill="#FFA8A4"/>
                                                            <path d="M109.151 98.2109C103.161 101.211 89.4208 109.201 64.0508 109.201C38.6808 109.201 24.9408 101.211 18.9508 98.2109C18.9508 98.2109 16.8008 99.3609 16.8008 100.561V109.771C16.8008 111.001 17.4508 112.131 18.5108 112.761C23.1908 115.521 37.4508 122.041 64.0608 122.041C90.6708 122.041 104.931 115.521 109.611 112.761C110.131 112.454 110.562 112.017 110.862 111.493C111.162 110.968 111.32 110.375 111.321 109.771V100.561C111.301 99.3609 109.151 98.2109 109.151 98.2109V98.2109Z" fill="#FFCA28"/>
                                                            <path d="M39.6002 110.84C42.4002 111.39 43.2502 111.63 43.0602 113.19C42.6702 116.26 36.3002 115.53 32.5302 114.54C24.7402 112.49 23.1602 110.33 23.1602 108.4C23.1602 106.63 24.5202 106.42 26.6202 107.16C29.1302 108.05 33.0102 109.55 39.6002 110.84V110.84Z" fill="#FFF59D"/>
                                                            <path d="M109.149 100.23C109.149 100.23 92.5792 109.61 64.0492 109.61C35.5192 109.61 18.9492 100.23 18.9492 100.23" stroke="#F19534" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round"/>
                                                            <path d="M26.9699 49.5704C32.2899 45.7704 35.1499 38.9604 35.3999 28.1204C35.4199 27.1404 35.6999 26.8504 36.2299 26.7904C37.0799 26.7004 37.2199 27.4704 37.2099 28.0204C36.9699 39.7204 35.4799 47.0304 29.5799 51.1504C29.2899 51.3504 27.2199 52.6104 26.3399 51.7404C25.2899 50.7204 26.6299 49.8104 26.9699 49.5704V49.5704Z" fill="#FFCA28"/>
                                                            <path d="M31.8383 15.5396C31.6683 13.7296 32.0883 10.4696 36.8383 8.98957C38.2283 8.55957 39.0883 9.23957 39.2483 9.76957C39.6483 11.0896 38.4883 11.6096 37.9583 11.7796C34.3083 12.9596 34.1283 14.7796 33.3783 15.9396C32.6283 17.0996 31.8983 16.0896 31.8383 15.5396V15.5396Z" fill="#FFCA28"/>
                                                            <path d="M78.2214 47.1694C83.0314 42.8994 86.2214 38.1294 88.3214 27.2694C88.5114 26.3094 88.7914 26.0494 89.3114 26.0694C90.1614 26.0894 90.2014 26.8794 90.1114 27.4194C88.3314 38.9994 86.6414 42.2994 80.7114 48.8694C80.0414 49.6094 78.4114 50.2794 77.4914 49.5094C76.6614 48.8194 77.6214 47.7094 78.2214 47.1694V47.1694Z" fill="#FFCA28"/>
                                                            <path d="M85.2993 15.6294C85.1293 13.8194 85.5493 10.5594 90.2993 9.07941C91.6893 8.64941 92.5493 9.32941 92.7093 9.85941C93.1093 11.1794 91.9493 11.6994 91.4193 11.8694C87.7693 13.0494 87.5892 14.8694 86.8392 16.0294C86.0992 17.1894 85.3593 16.1794 85.2993 15.6294V15.6294Z" fill="#FFCA28"/>
                                                            <path d="M31.5915 71.6207C19.9715 66.3507 16.5515 52.6007 14.7315 46.6307C14.4915 45.8407 14.6115 45.0907 15.4015 44.8507C16.1915 44.6107 16.6615 45.1207 16.9115 45.9107C18.2315 50.2407 23.3615 64.7007 33.9515 68.8107C34.7215 69.1107 35.9215 69.8407 35.2715 71.0907C34.8415 71.9007 33.4615 72.4707 31.5915 71.6207V71.6207Z" fill="#FFF59D"/>
                                                            <path d="M12.6801 24.63C12.1201 23.47 11.8901 22.37 8.84013 21.1C8.07013 20.78 7.56013 20.07 7.77013 19.27C7.98013 18.47 8.78013 17.87 9.94013 18.07C13.7101 18.72 14.5301 22.55 14.6901 23.88C14.8401 25.16 13.2501 25.79 12.6801 24.63V24.63Z" fill="#FFF59D"/>
                                                            <path d="M96.8701 71.6207C108.49 66.3507 111.91 52.6007 113.73 46.6307C113.97 45.8407 113.85 45.0907 113.06 44.8507C112.27 44.6107 111.8 45.1207 111.55 45.9107C110.23 50.2407 105.1 64.7007 94.5101 68.8107C93.7401 69.1107 92.5401 69.8407 93.1901 71.0907C93.6201 71.9007 95.0001 72.4707 96.8701 71.6207Z" fill="#FFF59D"/>
                                                            <path d="M115.782 24.63C116.342 23.47 116.572 22.37 119.622 21.1C120.392 20.78 120.902 20.07 120.692 19.27C120.482 18.47 119.682 17.87 118.522 18.07C114.752 18.72 113.932 22.55 113.772 23.88C113.622 25.16 115.222 25.79 115.782 24.63V24.63Z" fill="#FFF59D"/>
                                                            <path d="M59.3805 29.5491C59.9905 28.2991 61.0605 26.5891 64.5505 25.8691C65.8905 25.5891 66.2805 25.0091 66.1605 24.1291C65.9205 22.2991 63.6405 22.4291 62.4105 22.7191C58.3105 23.6791 57.4005 27.3191 57.2305 28.7591C57.0605 30.1291 58.7805 30.7991 59.3805 29.5491V29.5491Z" fill="#FFF59D"/>
                                                        </svg>
                                                        <small>Top of the week</small>
                                                    </span>
                                                    <h6 className="mb-3 mt-3 heading-title fw-bolder">Italian Salad</h6>
                                                    <p className="mt-2 mb-0 pb-4 iq-calories small">60 Calories</p>
                                                    <small>4 persons</small>
                                                    <div className="d-flex mt-2">
                                                        <span className="text-primary me-4">$7.49</span>
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect width="24" height="24" rx="12" fill="#EA6A12"/>
                                                            <rect x="11.168" y="7" width="1.66667" height="10" rx="0.833333" fill="white"/>
                                                            <rect x="7" y="12.834" width="1.66666" height="10" rx="0.833332" transform="rotate(-90 7 12.834)" fill="white"/>
                                                        </svg>
                                                    </div>
                                                </div>            
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="card-white dish-card2">
                                        <Card.Body>
                                            <div className="d-flex profile-img1">
                                                <div className="profile-img31">
                                                    <img src={lay14} className="img-fluid rounded-pill avatar-130 blur-shadow position-start" alt="profileimage"/>
                                                    <img src={lay14} className="img-fluid rounded-pill avatar-130 hover-image" alt="profileimage"
                                                        data-iq-gsap="onStart"
                                                        data-iq-opacity="0"
                                                        data-iq-scale=".6"
                                                        data-iq-rotate="180"
                                                        data-iq-duration="1"
                                                        data-iq-delay="1"
                                                        data-iq-trigger="scroll"
                                                        data-iq-ease="none"
                                                    />
                                                </div>
                                                <div>
                                                    <span className="text-primary">
                                                        <svg width="20" height="15" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M94.5186 21.8107C96.9586 20.6307 98.6486 18.1407 98.6486 15.2507C98.6486 13.3199 97.8816 11.4682 96.5163 10.103C95.1511 8.7377 93.2994 7.9707 91.3686 7.9707C89.4378 7.9707 87.5861 8.7377 86.2209 10.103C84.8556 11.4682 84.0886 13.3199 84.0886 15.2507C84.0886 18.1807 85.8186 20.6907 88.3086 21.8507C85.4286 37.4507 81.0086 49.0607 64.5586 51.5407C64.5586 51.5407 68.9886 73.6907 89.7086 73.6907C110.429 73.6907 112.529 51.7607 112.529 51.7607C95.7186 52.6207 94.2986 31.4907 94.5186 21.8107V21.8107Z" fill="#F19534"/>
                                                            <path d="M34.7383 21.8107C32.2983 20.6307 30.6083 18.1407 30.6083 15.2507C30.6083 13.3199 31.3753 11.4682 32.7405 10.103C34.1058 8.7377 35.9575 7.9707 37.8883 7.9707C39.8191 7.9707 41.6708 8.7377 43.036 10.103C44.4013 11.4682 45.1683 13.3199 45.1683 15.2507C45.1683 18.1807 43.4383 20.6907 40.9483 21.8507C43.8283 37.4507 48.2483 49.0607 64.6983 51.5407C64.6983 51.5407 60.2683 73.6907 39.5483 73.6907C18.8283 73.6907 16.7383 51.7707 16.7383 51.7707C33.5383 52.6207 34.9583 31.4907 34.7383 21.8107V21.8107Z" fill="#F19534"/>
                                                            <path d="M89.4297 73.6891C89.5197 73.6891 89.6097 73.6991 89.6997 73.6991C95.4097 73.6991 99.6997 72.0291 102.92 69.6191L89.4297 73.6891Z" fill="#FFCA28"/>
                                                            <path d="M119.242 16.8609C115.912 16.4109 112.732 19.5809 112.152 23.9209C111.792 26.6309 112.522 29.1609 113.932 30.7909L111.532 40.7409C111.532 40.7409 107.862 64.2509 89.3215 68.8909C74.5015 72.6009 69.1315 45.4709 67.8315 37.0909C70.6515 35.6909 72.6015 32.7909 72.6015 29.4209C72.6015 24.6909 68.7715 20.8609 64.0415 20.8609C59.3115 20.8609 55.4815 24.6909 55.4815 29.4209C55.4815 32.8109 57.4615 35.7409 60.3315 37.1209C59.3015 45.3909 54.7615 71.6209 38.7615 68.8809C22.5215 66.0909 15.4315 38.7409 13.7915 31.3009C15.7415 29.7009 16.8315 26.8809 16.4315 23.8509C15.8515 19.5009 12.4115 16.3809 8.75151 16.8709C5.09151 17.3609 2.60151 21.2809 3.18151 25.6209C3.60151 28.7809 5.54151 31.2909 7.97151 32.2409L20.6915 111.271C20.6915 111.271 31.7915 120.041 64.0415 120.041C96.2915 120.041 107.392 111.271 107.392 111.271L120.142 32.0309C122.202 30.9509 123.822 28.5209 124.222 25.5409C124.812 21.1909 122.582 17.3109 119.242 16.8609V16.8609Z" fill="#FFCA28"/>
                                                            <path d="M64.4392 99.9095C69.8185 99.9095 74.1792 94.7115 74.1792 88.2995C74.1792 81.8874 69.8185 76.6895 64.4392 76.6895C59.06 76.6895 54.6992 81.8874 54.6992 88.2995C54.6992 94.7115 59.06 99.9095 64.4392 99.9095Z" fill="#26A69A"/>
                                                            <path d="M64.4394 79.5598C64.8194 79.9798 65.1594 80.7498 64.4394 82.2498C63.7194 83.7498 59.8394 85.7798 59.1294 86.1898C58.4194 86.6098 57.9494 86.4198 57.7294 86.2498C56.6794 85.4098 57.0794 83.5098 57.7594 82.3498C59.2194 79.8398 62.3094 77.2498 64.4394 79.5598V79.5598Z" fill="#69F0AE"/>
                                                            <path d="M63.7186 92.6299C62.6186 93.1599 59.0086 94.7699 60.1986 96.6799C60.8986 97.8099 62.3486 98.2899 63.6786 98.3499C65.0086 98.4099 66.3186 97.9899 67.4986 97.3799C73.0986 94.4799 73.5486 86.8599 72.4586 86.2799C71.3386 85.6799 70.5786 87.2299 69.9986 87.8899C68.235 89.865 66.1015 91.4753 63.7186 92.6299V92.6299Z" fill="#00796B"/>
                                                            <path d="M118.09 78.8003C119.65 70.1703 113.85 68.0103 113.85 68.0103C113.85 68.0103 110.11 67.3303 108.35 77.0403C106.59 86.7403 110.33 87.4203 110.33 87.4203C110.33 87.4203 116.52 87.4303 118.09 78.8003V78.8003Z" fill="#26A69A"/>
                                                            <path d="M115.511 70.96C116.871 72.78 115.261 75.47 112.651 77.26C111.881 77.79 110.861 77.59 110.711 77.15C110.291 75.89 110.471 74.46 111.031 73.25C112.691 69.62 114.821 70.04 115.511 70.96V70.96Z" fill="#69F0AE"/>
                                                            <path d="M9.76138 79.06C8.19138 70.44 14.0014 68.27 14.0014 68.27C14.0014 68.27 17.7414 67.59 19.5014 77.3C21.2614 87 17.5214 87.68 17.5214 87.68C17.5214 87.68 11.3214 87.69 9.76138 79.06V79.06Z" fill="#26A69A"/>
                                                            <path d="M15.7805 71.1993C17.1205 72.1993 16.5705 73.5093 15.5605 74.4193C14.4105 75.4693 13.5305 76.6193 12.5505 77.8093C12.4005 77.9893 12.2305 78.1893 11.9905 78.2393C11.5305 78.3393 11.1605 77.8693 11.0105 77.4193C10.5805 76.1593 10.6605 74.6793 11.3005 73.5193C13.1205 70.2093 15.2605 70.8093 15.7805 71.1993V71.1993Z" fill="#69F0AE"/>
                                                            <path d="M99.9895 87.1599C99.2995 91.0899 96.1495 93.8199 92.9395 93.2599C89.7295 92.6999 89.2895 89.3499 89.9795 85.4199C90.6695 81.4899 92.2195 78.4799 95.4195 79.0399C98.6295 79.5999 100.679 83.2399 99.9895 87.1599V87.1599Z" fill="#F44336"/>
                                                            <path d="M30.431 87.1599C31.121 91.0899 34.271 93.8199 37.481 93.2599C40.691 92.6999 41.131 89.3499 40.441 85.4199C39.751 81.4899 38.201 78.4799 35.001 79.0399C31.801 79.5999 29.751 83.2399 30.431 87.1599Z" fill="#F44336"/>
                                                            <path d="M35.0795 84.5403C34.3495 85.3603 32.5695 87.0103 31.9395 85.7503C31.0795 84.0303 32.2695 81.4303 33.6295 80.5703C34.9895 79.7103 36.0995 80.3903 36.2895 81.1603C36.5195 82.1403 35.7295 83.8003 35.0795 84.5403V84.5403Z" fill="#FFA8A4"/>
                                                            <path d="M91.9807 87.0505C90.9907 86.9005 90.8807 83.4905 93.5407 80.8105C94.8107 79.5305 96.6307 81.0505 96.1707 83.1005C95.7307 85.0505 93.7907 87.3305 91.9807 87.0505V87.0505Z" fill="#FFA8A4"/>
                                                            <path d="M109.151 98.2109C103.161 101.211 89.4208 109.201 64.0508 109.201C38.6808 109.201 24.9408 101.211 18.9508 98.2109C18.9508 98.2109 16.8008 99.3609 16.8008 100.561V109.771C16.8008 111.001 17.4508 112.131 18.5108 112.761C23.1908 115.521 37.4508 122.041 64.0608 122.041C90.6708 122.041 104.931 115.521 109.611 112.761C110.131 112.454 110.562 112.017 110.862 111.493C111.162 110.968 111.32 110.375 111.321 109.771V100.561C111.301 99.3609 109.151 98.2109 109.151 98.2109V98.2109Z" fill="#FFCA28"/>
                                                            <path d="M39.6002 110.84C42.4002 111.39 43.2502 111.63 43.0602 113.19C42.6702 116.26 36.3002 115.53 32.5302 114.54C24.7402 112.49 23.1602 110.33 23.1602 108.4C23.1602 106.63 24.5202 106.42 26.6202 107.16C29.1302 108.05 33.0102 109.55 39.6002 110.84V110.84Z" fill="#FFF59D"/>
                                                            <path d="M109.149 100.23C109.149 100.23 92.5792 109.61 64.0492 109.61C35.5192 109.61 18.9492 100.23 18.9492 100.23" stroke="#F19534" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round"/>
                                                            <path d="M26.9699 49.5704C32.2899 45.7704 35.1499 38.9604 35.3999 28.1204C35.4199 27.1404 35.6999 26.8504 36.2299 26.7904C37.0799 26.7004 37.2199 27.4704 37.2099 28.0204C36.9699 39.7204 35.4799 47.0304 29.5799 51.1504C29.2899 51.3504 27.2199 52.6104 26.3399 51.7404C25.2899 50.7204 26.6299 49.8104 26.9699 49.5704V49.5704Z" fill="#FFCA28"/>
                                                            <path d="M31.8383 15.5396C31.6683 13.7296 32.0883 10.4696 36.8383 8.98957C38.2283 8.55957 39.0883 9.23957 39.2483 9.76957C39.6483 11.0896 38.4883 11.6096 37.9583 11.7796C34.3083 12.9596 34.1283 14.7796 33.3783 15.9396C32.6283 17.0996 31.8983 16.0896 31.8383 15.5396V15.5396Z" fill="#FFCA28"/>
                                                            <path d="M78.2214 47.1694C83.0314 42.8994 86.2214 38.1294 88.3214 27.2694C88.5114 26.3094 88.7914 26.0494 89.3114 26.0694C90.1614 26.0894 90.2014 26.8794 90.1114 27.4194C88.3314 38.9994 86.6414 42.2994 80.7114 48.8694C80.0414 49.6094 78.4114 50.2794 77.4914 49.5094C76.6614 48.8194 77.6214 47.7094 78.2214 47.1694V47.1694Z" fill="#FFCA28"/>
                                                            <path d="M85.2993 15.6294C85.1293 13.8194 85.5493 10.5594 90.2993 9.07941C91.6893 8.64941 92.5493 9.32941 92.7093 9.85941C93.1093 11.1794 91.9493 11.6994 91.4193 11.8694C87.7693 13.0494 87.5892 14.8694 86.8392 16.0294C86.0992 17.1894 85.3593 16.1794 85.2993 15.6294V15.6294Z" fill="#FFCA28"/>
                                                            <path d="M31.5915 71.6207C19.9715 66.3507 16.5515 52.6007 14.7315 46.6307C14.4915 45.8407 14.6115 45.0907 15.4015 44.8507C16.1915 44.6107 16.6615 45.1207 16.9115 45.9107C18.2315 50.2407 23.3615 64.7007 33.9515 68.8107C34.7215 69.1107 35.9215 69.8407 35.2715 71.0907C34.8415 71.9007 33.4615 72.4707 31.5915 71.6207V71.6207Z" fill="#FFF59D"/>
                                                            <path d="M12.6801 24.63C12.1201 23.47 11.8901 22.37 8.84013 21.1C8.07013 20.78 7.56013 20.07 7.77013 19.27C7.98013 18.47 8.78013 17.87 9.94013 18.07C13.7101 18.72 14.5301 22.55 14.6901 23.88C14.8401 25.16 13.2501 25.79 12.6801 24.63V24.63Z" fill="#FFF59D"/>
                                                            <path d="M96.8701 71.6207C108.49 66.3507 111.91 52.6007 113.73 46.6307C113.97 45.8407 113.85 45.0907 113.06 44.8507C112.27 44.6107 111.8 45.1207 111.55 45.9107C110.23 50.2407 105.1 64.7007 94.5101 68.8107C93.7401 69.1107 92.5401 69.8407 93.1901 71.0907C93.6201 71.9007 95.0001 72.4707 96.8701 71.6207Z" fill="#FFF59D"/>
                                                            <path d="M115.782 24.63C116.342 23.47 116.572 22.37 119.622 21.1C120.392 20.78 120.902 20.07 120.692 19.27C120.482 18.47 119.682 17.87 118.522 18.07C114.752 18.72 113.932 22.55 113.772 23.88C113.622 25.16 115.222 25.79 115.782 24.63V24.63Z" fill="#FFF59D"/>
                                                            <path d="M59.3805 29.5491C59.9905 28.2991 61.0605 26.5891 64.5505 25.8691C65.8905 25.5891 66.2805 25.0091 66.1605 24.1291C65.9205 22.2991 63.6405 22.4291 62.4105 22.7191C58.3105 23.6791 57.4005 27.3191 57.2305 28.7591C57.0605 30.1291 58.7805 30.7991 59.3805 29.5491V29.5491Z" fill="#FFF59D"/>
                                                        </svg>
                                                        <small>Top of the day</small>
                                                    </span>
                                                    <h6 className="mb-3 mt-3 heading-title fw-bolder">Italian Salad</h6>
                                                    <p className="mt-2 mb-0 pb-4 iq-calories small">60 Calories</p>
                                                    <small>4 persons</small>
                                                    <div className="d-flex mt-2">
                                                        <span className="text-primary me-4">$7.49</span>
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect width="24" height="24" rx="12" fill="#EA6A12"/>
                                                            <rect x="11.168" y="7" width="1.66667" height="10" rx="0.833333" fill="white"/>
                                                            <rect x="7" y="12.834" width="1.66666" height="10" rx="0.833332" transform="rotate(-90 7 12.834)" fill="white"/>
                                                        </svg>
                                                    </div>
                                                </div>            
                                            </div>
                                        </Card.Body>
                                    </Card>
                                    <Card className="card-white dish-card2 {{active}}">
                                        <Card.Body>
                                            <div className="d-flex profile-img1">
                                                <div className="profile-img31">
                                                    <img src={lay20} className="img-fluid rounded-pill avatar-130 blur-shadow position-start" alt="profileimage"/>
                                                    <img src={lay20} className="img-fluid rounded-pill avatar-130 hover-image" alt="profileimage"
                                                        data-iq-gsap="onStart"
                                                        data-iq-opacity="0"
                                                        data-iq-scale=".6"
                                                        data-iq-rotate="180"
                                                        data-iq-duration="1"
                                                        data-iq-delay="1"
                                                        data-iq-trigger="scroll"
                                                        data-iq-ease="none"
                                                    />
                                                </div>
                                                <div>
                                                    <span className="text-primary">
                                                        <svg width="20" height="15" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M94.5186 21.8107C96.9586 20.6307 98.6486 18.1407 98.6486 15.2507C98.6486 13.3199 97.8816 11.4682 96.5163 10.103C95.1511 8.7377 93.2994 7.9707 91.3686 7.9707C89.4378 7.9707 87.5861 8.7377 86.2209 10.103C84.8556 11.4682 84.0886 13.3199 84.0886 15.2507C84.0886 18.1807 85.8186 20.6907 88.3086 21.8507C85.4286 37.4507 81.0086 49.0607 64.5586 51.5407C64.5586 51.5407 68.9886 73.6907 89.7086 73.6907C110.429 73.6907 112.529 51.7607 112.529 51.7607C95.7186 52.6207 94.2986 31.4907 94.5186 21.8107V21.8107Z" fill="#F19534"/>
                                                            <path d="M34.7383 21.8107C32.2983 20.6307 30.6083 18.1407 30.6083 15.2507C30.6083 13.3199 31.3753 11.4682 32.7405 10.103C34.1058 8.7377 35.9575 7.9707 37.8883 7.9707C39.8191 7.9707 41.6708 8.7377 43.036 10.103C44.4013 11.4682 45.1683 13.3199 45.1683 15.2507C45.1683 18.1807 43.4383 20.6907 40.9483 21.8507C43.8283 37.4507 48.2483 49.0607 64.6983 51.5407C64.6983 51.5407 60.2683 73.6907 39.5483 73.6907C18.8283 73.6907 16.7383 51.7707 16.7383 51.7707C33.5383 52.6207 34.9583 31.4907 34.7383 21.8107V21.8107Z" fill="#F19534"/>
                                                            <path d="M89.4297 73.6891C89.5197 73.6891 89.6097 73.6991 89.6997 73.6991C95.4097 73.6991 99.6997 72.0291 102.92 69.6191L89.4297 73.6891Z" fill="#FFCA28"/>
                                                            <path d="M119.242 16.8609C115.912 16.4109 112.732 19.5809 112.152 23.9209C111.792 26.6309 112.522 29.1609 113.932 30.7909L111.532 40.7409C111.532 40.7409 107.862 64.2509 89.3215 68.8909C74.5015 72.6009 69.1315 45.4709 67.8315 37.0909C70.6515 35.6909 72.6015 32.7909 72.6015 29.4209C72.6015 24.6909 68.7715 20.8609 64.0415 20.8609C59.3115 20.8609 55.4815 24.6909 55.4815 29.4209C55.4815 32.8109 57.4615 35.7409 60.3315 37.1209C59.3015 45.3909 54.7615 71.6209 38.7615 68.8809C22.5215 66.0909 15.4315 38.7409 13.7915 31.3009C15.7415 29.7009 16.8315 26.8809 16.4315 23.8509C15.8515 19.5009 12.4115 16.3809 8.75151 16.8709C5.09151 17.3609 2.60151 21.2809 3.18151 25.6209C3.60151 28.7809 5.54151 31.2909 7.97151 32.2409L20.6915 111.271C20.6915 111.271 31.7915 120.041 64.0415 120.041C96.2915 120.041 107.392 111.271 107.392 111.271L120.142 32.0309C122.202 30.9509 123.822 28.5209 124.222 25.5409C124.812 21.1909 122.582 17.3109 119.242 16.8609V16.8609Z" fill="#FFCA28"/>
                                                            <path d="M64.4392 99.9095C69.8185 99.9095 74.1792 94.7115 74.1792 88.2995C74.1792 81.8874 69.8185 76.6895 64.4392 76.6895C59.06 76.6895 54.6992 81.8874 54.6992 88.2995C54.6992 94.7115 59.06 99.9095 64.4392 99.9095Z" fill="#26A69A"/>
                                                            <path d="M64.4394 79.5598C64.8194 79.9798 65.1594 80.7498 64.4394 82.2498C63.7194 83.7498 59.8394 85.7798 59.1294 86.1898C58.4194 86.6098 57.9494 86.4198 57.7294 86.2498C56.6794 85.4098 57.0794 83.5098 57.7594 82.3498C59.2194 79.8398 62.3094 77.2498 64.4394 79.5598V79.5598Z" fill="#69F0AE"/>
                                                            <path d="M63.7186 92.6299C62.6186 93.1599 59.0086 94.7699 60.1986 96.6799C60.8986 97.8099 62.3486 98.2899 63.6786 98.3499C65.0086 98.4099 66.3186 97.9899 67.4986 97.3799C73.0986 94.4799 73.5486 86.8599 72.4586 86.2799C71.3386 85.6799 70.5786 87.2299 69.9986 87.8899C68.235 89.865 66.1015 91.4753 63.7186 92.6299V92.6299Z" fill="#00796B"/>
                                                            <path d="M118.09 78.8003C119.65 70.1703 113.85 68.0103 113.85 68.0103C113.85 68.0103 110.11 67.3303 108.35 77.0403C106.59 86.7403 110.33 87.4203 110.33 87.4203C110.33 87.4203 116.52 87.4303 118.09 78.8003V78.8003Z" fill="#26A69A"/>
                                                            <path d="M115.511 70.96C116.871 72.78 115.261 75.47 112.651 77.26C111.881 77.79 110.861 77.59 110.711 77.15C110.291 75.89 110.471 74.46 111.031 73.25C112.691 69.62 114.821 70.04 115.511 70.96V70.96Z" fill="#69F0AE"/>
                                                            <path d="M9.76138 79.06C8.19138 70.44 14.0014 68.27 14.0014 68.27C14.0014 68.27 17.7414 67.59 19.5014 77.3C21.2614 87 17.5214 87.68 17.5214 87.68C17.5214 87.68 11.3214 87.69 9.76138 79.06V79.06Z" fill="#26A69A"/>
                                                            <path d="M15.7805 71.1993C17.1205 72.1993 16.5705 73.5093 15.5605 74.4193C14.4105 75.4693 13.5305 76.6193 12.5505 77.8093C12.4005 77.9893 12.2305 78.1893 11.9905 78.2393C11.5305 78.3393 11.1605 77.8693 11.0105 77.4193C10.5805 76.1593 10.6605 74.6793 11.3005 73.5193C13.1205 70.2093 15.2605 70.8093 15.7805 71.1993V71.1993Z" fill="#69F0AE"/>
                                                            <path d="M99.9895 87.1599C99.2995 91.0899 96.1495 93.8199 92.9395 93.2599C89.7295 92.6999 89.2895 89.3499 89.9795 85.4199C90.6695 81.4899 92.2195 78.4799 95.4195 79.0399C98.6295 79.5999 100.679 83.2399 99.9895 87.1599V87.1599Z" fill="#F44336"/>
                                                            <path d="M30.431 87.1599C31.121 91.0899 34.271 93.8199 37.481 93.2599C40.691 92.6999 41.131 89.3499 40.441 85.4199C39.751 81.4899 38.201 78.4799 35.001 79.0399C31.801 79.5999 29.751 83.2399 30.431 87.1599Z" fill="#F44336"/>
                                                            <path d="M35.0795 84.5403C34.3495 85.3603 32.5695 87.0103 31.9395 85.7503C31.0795 84.0303 32.2695 81.4303 33.6295 80.5703C34.9895 79.7103 36.0995 80.3903 36.2895 81.1603C36.5195 82.1403 35.7295 83.8003 35.0795 84.5403V84.5403Z" fill="#FFA8A4"/>
                                                            <path d="M91.9807 87.0505C90.9907 86.9005 90.8807 83.4905 93.5407 80.8105C94.8107 79.5305 96.6307 81.0505 96.1707 83.1005C95.7307 85.0505 93.7907 87.3305 91.9807 87.0505V87.0505Z" fill="#FFA8A4"/>
                                                            <path d="M109.151 98.2109C103.161 101.211 89.4208 109.201 64.0508 109.201C38.6808 109.201 24.9408 101.211 18.9508 98.2109C18.9508 98.2109 16.8008 99.3609 16.8008 100.561V109.771C16.8008 111.001 17.4508 112.131 18.5108 112.761C23.1908 115.521 37.4508 122.041 64.0608 122.041C90.6708 122.041 104.931 115.521 109.611 112.761C110.131 112.454 110.562 112.017 110.862 111.493C111.162 110.968 111.32 110.375 111.321 109.771V100.561C111.301 99.3609 109.151 98.2109 109.151 98.2109V98.2109Z" fill="#FFCA28"/>
                                                            <path d="M39.6002 110.84C42.4002 111.39 43.2502 111.63 43.0602 113.19C42.6702 116.26 36.3002 115.53 32.5302 114.54C24.7402 112.49 23.1602 110.33 23.1602 108.4C23.1602 106.63 24.5202 106.42 26.6202 107.16C29.1302 108.05 33.0102 109.55 39.6002 110.84V110.84Z" fill="#FFF59D"/>
                                                            <path d="M109.149 100.23C109.149 100.23 92.5792 109.61 64.0492 109.61C35.5192 109.61 18.9492 100.23 18.9492 100.23" stroke="#F19534" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round"/>
                                                            <path d="M26.9699 49.5704C32.2899 45.7704 35.1499 38.9604 35.3999 28.1204C35.4199 27.1404 35.6999 26.8504 36.2299 26.7904C37.0799 26.7004 37.2199 27.4704 37.2099 28.0204C36.9699 39.7204 35.4799 47.0304 29.5799 51.1504C29.2899 51.3504 27.2199 52.6104 26.3399 51.7404C25.2899 50.7204 26.6299 49.8104 26.9699 49.5704V49.5704Z" fill="#FFCA28"/>
                                                            <path d="M31.8383 15.5396C31.6683 13.7296 32.0883 10.4696 36.8383 8.98957C38.2283 8.55957 39.0883 9.23957 39.2483 9.76957C39.6483 11.0896 38.4883 11.6096 37.9583 11.7796C34.3083 12.9596 34.1283 14.7796 33.3783 15.9396C32.6283 17.0996 31.8983 16.0896 31.8383 15.5396V15.5396Z" fill="#FFCA28"/>
                                                            <path d="M78.2214 47.1694C83.0314 42.8994 86.2214 38.1294 88.3214 27.2694C88.5114 26.3094 88.7914 26.0494 89.3114 26.0694C90.1614 26.0894 90.2014 26.8794 90.1114 27.4194C88.3314 38.9994 86.6414 42.2994 80.7114 48.8694C80.0414 49.6094 78.4114 50.2794 77.4914 49.5094C76.6614 48.8194 77.6214 47.7094 78.2214 47.1694V47.1694Z" fill="#FFCA28"/>
                                                            <path d="M85.2993 15.6294C85.1293 13.8194 85.5493 10.5594 90.2993 9.07941C91.6893 8.64941 92.5493 9.32941 92.7093 9.85941C93.1093 11.1794 91.9493 11.6994 91.4193 11.8694C87.7693 13.0494 87.5892 14.8694 86.8392 16.0294C86.0992 17.1894 85.3593 16.1794 85.2993 15.6294V15.6294Z" fill="#FFCA28"/>
                                                            <path d="M31.5915 71.6207C19.9715 66.3507 16.5515 52.6007 14.7315 46.6307C14.4915 45.8407 14.6115 45.0907 15.4015 44.8507C16.1915 44.6107 16.6615 45.1207 16.9115 45.9107C18.2315 50.2407 23.3615 64.7007 33.9515 68.8107C34.7215 69.1107 35.9215 69.8407 35.2715 71.0907C34.8415 71.9007 33.4615 72.4707 31.5915 71.6207V71.6207Z" fill="#FFF59D"/>
                                                            <path d="M12.6801 24.63C12.1201 23.47 11.8901 22.37 8.84013 21.1C8.07013 20.78 7.56013 20.07 7.77013 19.27C7.98013 18.47 8.78013 17.87 9.94013 18.07C13.7101 18.72 14.5301 22.55 14.6901 23.88C14.8401 25.16 13.2501 25.79 12.6801 24.63V24.63Z" fill="#FFF59D"/>
                                                            <path d="M96.8701 71.6207C108.49 66.3507 111.91 52.6007 113.73 46.6307C113.97 45.8407 113.85 45.0907 113.06 44.8507C112.27 44.6107 111.8 45.1207 111.55 45.9107C110.23 50.2407 105.1 64.7007 94.5101 68.8107C93.7401 69.1107 92.5401 69.8407 93.1901 71.0907C93.6201 71.9007 95.0001 72.4707 96.8701 71.6207Z" fill="#FFF59D"/>
                                                            <path d="M115.782 24.63C116.342 23.47 116.572 22.37 119.622 21.1C120.392 20.78 120.902 20.07 120.692 19.27C120.482 18.47 119.682 17.87 118.522 18.07C114.752 18.72 113.932 22.55 113.772 23.88C113.622 25.16 115.222 25.79 115.782 24.63V24.63Z" fill="#FFF59D"/>
                                                            <path d="M59.3805 29.5491C59.9905 28.2991 61.0605 26.5891 64.5505 25.8691C65.8905 25.5891 66.2805 25.0091 66.1605 24.1291C65.9205 22.2991 63.6405 22.4291 62.4105 22.7191C58.3105 23.6791 57.4005 27.3191 57.2305 28.7591C57.0605 30.1291 58.7805 30.7991 59.3805 29.5491V29.5491Z" fill="#FFF59D"/>
                                                        </svg>
                                                        <small>Top of the month</small>
                                                    </span>
                                                    <h6 className="mb-3 mt-3 heading-title fw-bolder">Italian Salad</h6>
                                                    <p className="mt-2 mb-0 pb-4 iq-calories small">60 Calories</p>
                                                    <small>4 persons</small>
                                                    <div className="d-flex mt-2">
                                                        <span className="text-primary me-4">$7.49</span>
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect width="24" height="24" rx="12" fill="#EA6A12"/>
                                                            <rect x="11.168" y="7" width="1.66667" height="10" rx="0.833333" fill="white"/>
                                                            <rect x="7" y="12.834" width="1.66666" height="10" rx="0.833332" transform="rotate(-90 7 12.834)" fill="white"/>
                                                        </svg>
                                                    </div>
                                                </div>            
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Card className="card-white dish-card2 {{active}}">
                                        <Card.Body>
                                            <div className="d-flex profile-img1">
                                                <div className="profile-img31">
                                                    <img src={lay18} className="img-fluid rounded-pill avatar-130 blur-shadow position-start" alt="profileimage"/>
                                                    <img src={lay18} className="img-fluid rounded-pill avatar-130 hover-image" alt="profileimage"
                                                            data-iq-gsap="onStart"
                                                            data-iq-opacity="0"
                                                            data-iq-scale=".6"
                                                            data-iq-rotate="180"
                                                            data-iq-duration="1"
                                                            data-iq-delay="1"
                                                            data-iq-trigger="scroll"
                                                            data-iq-ease="none"
                                                    />
                                                </div>
                                                <div>
                                                    <span className="text-primary">
                                                        <svg width="20" height="15" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M94.5186 21.8107C96.9586 20.6307 98.6486 18.1407 98.6486 15.2507C98.6486 13.3199 97.8816 11.4682 96.5163 10.103C95.1511 8.7377 93.2994 7.9707 91.3686 7.9707C89.4378 7.9707 87.5861 8.7377 86.2209 10.103C84.8556 11.4682 84.0886 13.3199 84.0886 15.2507C84.0886 18.1807 85.8186 20.6907 88.3086 21.8507C85.4286 37.4507 81.0086 49.0607 64.5586 51.5407C64.5586 51.5407 68.9886 73.6907 89.7086 73.6907C110.429 73.6907 112.529 51.7607 112.529 51.7607C95.7186 52.6207 94.2986 31.4907 94.5186 21.8107V21.8107Z" fill="#F19534"/>
                                                            <path d="M34.7383 21.8107C32.2983 20.6307 30.6083 18.1407 30.6083 15.2507C30.6083 13.3199 31.3753 11.4682 32.7405 10.103C34.1058 8.7377 35.9575 7.9707 37.8883 7.9707C39.8191 7.9707 41.6708 8.7377 43.036 10.103C44.4013 11.4682 45.1683 13.3199 45.1683 15.2507C45.1683 18.1807 43.4383 20.6907 40.9483 21.8507C43.8283 37.4507 48.2483 49.0607 64.6983 51.5407C64.6983 51.5407 60.2683 73.6907 39.5483 73.6907C18.8283 73.6907 16.7383 51.7707 16.7383 51.7707C33.5383 52.6207 34.9583 31.4907 34.7383 21.8107V21.8107Z" fill="#F19534"/>
                                                            <path d="M89.4297 73.6891C89.5197 73.6891 89.6097 73.6991 89.6997 73.6991C95.4097 73.6991 99.6997 72.0291 102.92 69.6191L89.4297 73.6891Z" fill="#FFCA28"/>
                                                            <path d="M119.242 16.8609C115.912 16.4109 112.732 19.5809 112.152 23.9209C111.792 26.6309 112.522 29.1609 113.932 30.7909L111.532 40.7409C111.532 40.7409 107.862 64.2509 89.3215 68.8909C74.5015 72.6009 69.1315 45.4709 67.8315 37.0909C70.6515 35.6909 72.6015 32.7909 72.6015 29.4209C72.6015 24.6909 68.7715 20.8609 64.0415 20.8609C59.3115 20.8609 55.4815 24.6909 55.4815 29.4209C55.4815 32.8109 57.4615 35.7409 60.3315 37.1209C59.3015 45.3909 54.7615 71.6209 38.7615 68.8809C22.5215 66.0909 15.4315 38.7409 13.7915 31.3009C15.7415 29.7009 16.8315 26.8809 16.4315 23.8509C15.8515 19.5009 12.4115 16.3809 8.75151 16.8709C5.09151 17.3609 2.60151 21.2809 3.18151 25.6209C3.60151 28.7809 5.54151 31.2909 7.97151 32.2409L20.6915 111.271C20.6915 111.271 31.7915 120.041 64.0415 120.041C96.2915 120.041 107.392 111.271 107.392 111.271L120.142 32.0309C122.202 30.9509 123.822 28.5209 124.222 25.5409C124.812 21.1909 122.582 17.3109 119.242 16.8609V16.8609Z" fill="#FFCA28"/>
                                                            <path d="M64.4392 99.9095C69.8185 99.9095 74.1792 94.7115 74.1792 88.2995C74.1792 81.8874 69.8185 76.6895 64.4392 76.6895C59.06 76.6895 54.6992 81.8874 54.6992 88.2995C54.6992 94.7115 59.06 99.9095 64.4392 99.9095Z" fill="#26A69A"/>
                                                            <path d="M64.4394 79.5598C64.8194 79.9798 65.1594 80.7498 64.4394 82.2498C63.7194 83.7498 59.8394 85.7798 59.1294 86.1898C58.4194 86.6098 57.9494 86.4198 57.7294 86.2498C56.6794 85.4098 57.0794 83.5098 57.7594 82.3498C59.2194 79.8398 62.3094 77.2498 64.4394 79.5598V79.5598Z" fill="#69F0AE"/>
                                                            <path d="M63.7186 92.6299C62.6186 93.1599 59.0086 94.7699 60.1986 96.6799C60.8986 97.8099 62.3486 98.2899 63.6786 98.3499C65.0086 98.4099 66.3186 97.9899 67.4986 97.3799C73.0986 94.4799 73.5486 86.8599 72.4586 86.2799C71.3386 85.6799 70.5786 87.2299 69.9986 87.8899C68.235 89.865 66.1015 91.4753 63.7186 92.6299V92.6299Z" fill="#00796B"/>
                                                            <path d="M118.09 78.8003C119.65 70.1703 113.85 68.0103 113.85 68.0103C113.85 68.0103 110.11 67.3303 108.35 77.0403C106.59 86.7403 110.33 87.4203 110.33 87.4203C110.33 87.4203 116.52 87.4303 118.09 78.8003V78.8003Z" fill="#26A69A"/>
                                                            <path d="M115.511 70.96C116.871 72.78 115.261 75.47 112.651 77.26C111.881 77.79 110.861 77.59 110.711 77.15C110.291 75.89 110.471 74.46 111.031 73.25C112.691 69.62 114.821 70.04 115.511 70.96V70.96Z" fill="#69F0AE"/>
                                                            <path d="M9.76138 79.06C8.19138 70.44 14.0014 68.27 14.0014 68.27C14.0014 68.27 17.7414 67.59 19.5014 77.3C21.2614 87 17.5214 87.68 17.5214 87.68C17.5214 87.68 11.3214 87.69 9.76138 79.06V79.06Z" fill="#26A69A"/>
                                                            <path d="M15.7805 71.1993C17.1205 72.1993 16.5705 73.5093 15.5605 74.4193C14.4105 75.4693 13.5305 76.6193 12.5505 77.8093C12.4005 77.9893 12.2305 78.1893 11.9905 78.2393C11.5305 78.3393 11.1605 77.8693 11.0105 77.4193C10.5805 76.1593 10.6605 74.6793 11.3005 73.5193C13.1205 70.2093 15.2605 70.8093 15.7805 71.1993V71.1993Z" fill="#69F0AE"/>
                                                            <path d="M99.9895 87.1599C99.2995 91.0899 96.1495 93.8199 92.9395 93.2599C89.7295 92.6999 89.2895 89.3499 89.9795 85.4199C90.6695 81.4899 92.2195 78.4799 95.4195 79.0399C98.6295 79.5999 100.679 83.2399 99.9895 87.1599V87.1599Z" fill="#F44336"/>
                                                            <path d="M30.431 87.1599C31.121 91.0899 34.271 93.8199 37.481 93.2599C40.691 92.6999 41.131 89.3499 40.441 85.4199C39.751 81.4899 38.201 78.4799 35.001 79.0399C31.801 79.5999 29.751 83.2399 30.431 87.1599Z" fill="#F44336"/>
                                                            <path d="M35.0795 84.5403C34.3495 85.3603 32.5695 87.0103 31.9395 85.7503C31.0795 84.0303 32.2695 81.4303 33.6295 80.5703C34.9895 79.7103 36.0995 80.3903 36.2895 81.1603C36.5195 82.1403 35.7295 83.8003 35.0795 84.5403V84.5403Z" fill="#FFA8A4"/>
                                                            <path d="M91.9807 87.0505C90.9907 86.9005 90.8807 83.4905 93.5407 80.8105C94.8107 79.5305 96.6307 81.0505 96.1707 83.1005C95.7307 85.0505 93.7907 87.3305 91.9807 87.0505V87.0505Z" fill="#FFA8A4"/>
                                                            <path d="M109.151 98.2109C103.161 101.211 89.4208 109.201 64.0508 109.201C38.6808 109.201 24.9408 101.211 18.9508 98.2109C18.9508 98.2109 16.8008 99.3609 16.8008 100.561V109.771C16.8008 111.001 17.4508 112.131 18.5108 112.761C23.1908 115.521 37.4508 122.041 64.0608 122.041C90.6708 122.041 104.931 115.521 109.611 112.761C110.131 112.454 110.562 112.017 110.862 111.493C111.162 110.968 111.32 110.375 111.321 109.771V100.561C111.301 99.3609 109.151 98.2109 109.151 98.2109V98.2109Z" fill="#FFCA28"/>
                                                            <path d="M39.6002 110.84C42.4002 111.39 43.2502 111.63 43.0602 113.19C42.6702 116.26 36.3002 115.53 32.5302 114.54C24.7402 112.49 23.1602 110.33 23.1602 108.4C23.1602 106.63 24.5202 106.42 26.6202 107.16C29.1302 108.05 33.0102 109.55 39.6002 110.84V110.84Z" fill="#FFF59D"/>
                                                            <path d="M109.149 100.23C109.149 100.23 92.5792 109.61 64.0492 109.61C35.5192 109.61 18.9492 100.23 18.9492 100.23" stroke="#F19534" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round"/>
                                                            <path d="M26.9699 49.5704C32.2899 45.7704 35.1499 38.9604 35.3999 28.1204C35.4199 27.1404 35.6999 26.8504 36.2299 26.7904C37.0799 26.7004 37.2199 27.4704 37.2099 28.0204C36.9699 39.7204 35.4799 47.0304 29.5799 51.1504C29.2899 51.3504 27.2199 52.6104 26.3399 51.7404C25.2899 50.7204 26.6299 49.8104 26.9699 49.5704V49.5704Z" fill="#FFCA28"/>
                                                            <path d="M31.8383 15.5396C31.6683 13.7296 32.0883 10.4696 36.8383 8.98957C38.2283 8.55957 39.0883 9.23957 39.2483 9.76957C39.6483 11.0896 38.4883 11.6096 37.9583 11.7796C34.3083 12.9596 34.1283 14.7796 33.3783 15.9396C32.6283 17.0996 31.8983 16.0896 31.8383 15.5396V15.5396Z" fill="#FFCA28"/>
                                                            <path d="M78.2214 47.1694C83.0314 42.8994 86.2214 38.1294 88.3214 27.2694C88.5114 26.3094 88.7914 26.0494 89.3114 26.0694C90.1614 26.0894 90.2014 26.8794 90.1114 27.4194C88.3314 38.9994 86.6414 42.2994 80.7114 48.8694C80.0414 49.6094 78.4114 50.2794 77.4914 49.5094C76.6614 48.8194 77.6214 47.7094 78.2214 47.1694V47.1694Z" fill="#FFCA28"/>
                                                            <path d="M85.2993 15.6294C85.1293 13.8194 85.5493 10.5594 90.2993 9.07941C91.6893 8.64941 92.5493 9.32941 92.7093 9.85941C93.1093 11.1794 91.9493 11.6994 91.4193 11.8694C87.7693 13.0494 87.5892 14.8694 86.8392 16.0294C86.0992 17.1894 85.3593 16.1794 85.2993 15.6294V15.6294Z" fill="#FFCA28"/>
                                                            <path d="M31.5915 71.6207C19.9715 66.3507 16.5515 52.6007 14.7315 46.6307C14.4915 45.8407 14.6115 45.0907 15.4015 44.8507C16.1915 44.6107 16.6615 45.1207 16.9115 45.9107C18.2315 50.2407 23.3615 64.7007 33.9515 68.8107C34.7215 69.1107 35.9215 69.8407 35.2715 71.0907C34.8415 71.9007 33.4615 72.4707 31.5915 71.6207V71.6207Z" fill="#FFF59D"/>
                                                            <path d="M12.6801 24.63C12.1201 23.47 11.8901 22.37 8.84013 21.1C8.07013 20.78 7.56013 20.07 7.77013 19.27C7.98013 18.47 8.78013 17.87 9.94013 18.07C13.7101 18.72 14.5301 22.55 14.6901 23.88C14.8401 25.16 13.2501 25.79 12.6801 24.63V24.63Z" fill="#FFF59D"/>
                                                            <path d="M96.8701 71.6207C108.49 66.3507 111.91 52.6007 113.73 46.6307C113.97 45.8407 113.85 45.0907 113.06 44.8507C112.27 44.6107 111.8 45.1207 111.55 45.9107C110.23 50.2407 105.1 64.7007 94.5101 68.8107C93.7401 69.1107 92.5401 69.8407 93.1901 71.0907C93.6201 71.9007 95.0001 72.4707 96.8701 71.6207Z" fill="#FFF59D"/>
                                                            <path d="M115.782 24.63C116.342 23.47 116.572 22.37 119.622 21.1C120.392 20.78 120.902 20.07 120.692 19.27C120.482 18.47 119.682 17.87 118.522 18.07C114.752 18.72 113.932 22.55 113.772 23.88C113.622 25.16 115.222 25.79 115.782 24.63V24.63Z" fill="#FFF59D"/>
                                                            <path d="M59.3805 29.5491C59.9905 28.2991 61.0605 26.5891 64.5505 25.8691C65.8905 25.5891 66.2805 25.0091 66.1605 24.1291C65.9205 22.2991 63.6405 22.4291 62.4105 22.7191C58.3105 23.6791 57.4005 27.3191 57.2305 28.7591C57.0605 30.1291 58.7805 30.7991 59.3805 29.5491V29.5491Z" fill="#FFF59D"/>
                                                        </svg>
                                                        <small>Top of the month</small>
                                                    </span>
                                                    <h6 className="mb-3 mt-3 heading-title fw-bolder">Italian Salad</h6>
                                                    <p className="mt-2 mb-0 pb-4 iq-calories small">60 Calories</p>
                                                    <small>4 persons</small>
                                                    <div className="d-flex mt-2">
                                                        <span className="text-primary me-4">$7.49</span>
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect width="24" height="24" rx="12" fill="#EA6A12"/>
                                                            <rect x="11.168" y="7" width="1.66667" height="10" rx="0.833333" fill="white"/>
                                                            <rect x="7" y="12.834" width="1.66666" height="10" rx="0.833332" transform="rotate(-90 7 12.834)" fill="white"/>
                                                        </svg>
                                                    </div>
                                                </div>            
                                            </div>
                                        </Card.Body>
                                    </Card>
                                    <Card className="card-white dish-card2 {{active}}">
                                        <Card.Body>
                                            <div className="d-flex profile-img1">
                                                <div className="profile-img31">
                                                    <img src={lay21} className="img-fluid rounded-pill avatar-130 blur-shadow position-start" alt="profileimage"/>
                                                    <img src={lay21} className="img-fluid rounded-pill avatar-130 hover-image" alt="profileimage"
                                                        data-iq-gsap="onStart"
                                                        data-iq-opacity="0"
                                                        data-iq-scale=".6"
                                                        data-iq-rotate="180"
                                                        data-iq-duration="1"
                                                        data-iq-delay="1"
                                                        data-iq-trigger="scroll"
                                                        data-iq-ease="none"
                                                    />
                                                </div>
                                                <div>
                                                    <span className="text-primary">
                                                        <svg width="20" height="15" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M94.5186 21.8107C96.9586 20.6307 98.6486 18.1407 98.6486 15.2507C98.6486 13.3199 97.8816 11.4682 96.5163 10.103C95.1511 8.7377 93.2994 7.9707 91.3686 7.9707C89.4378 7.9707 87.5861 8.7377 86.2209 10.103C84.8556 11.4682 84.0886 13.3199 84.0886 15.2507C84.0886 18.1807 85.8186 20.6907 88.3086 21.8507C85.4286 37.4507 81.0086 49.0607 64.5586 51.5407C64.5586 51.5407 68.9886 73.6907 89.7086 73.6907C110.429 73.6907 112.529 51.7607 112.529 51.7607C95.7186 52.6207 94.2986 31.4907 94.5186 21.8107V21.8107Z" fill="#F19534"/>
                                                            <path d="M34.7383 21.8107C32.2983 20.6307 30.6083 18.1407 30.6083 15.2507C30.6083 13.3199 31.3753 11.4682 32.7405 10.103C34.1058 8.7377 35.9575 7.9707 37.8883 7.9707C39.8191 7.9707 41.6708 8.7377 43.036 10.103C44.4013 11.4682 45.1683 13.3199 45.1683 15.2507C45.1683 18.1807 43.4383 20.6907 40.9483 21.8507C43.8283 37.4507 48.2483 49.0607 64.6983 51.5407C64.6983 51.5407 60.2683 73.6907 39.5483 73.6907C18.8283 73.6907 16.7383 51.7707 16.7383 51.7707C33.5383 52.6207 34.9583 31.4907 34.7383 21.8107V21.8107Z" fill="#F19534"/>
                                                            <path d="M89.4297 73.6891C89.5197 73.6891 89.6097 73.6991 89.6997 73.6991C95.4097 73.6991 99.6997 72.0291 102.92 69.6191L89.4297 73.6891Z" fill="#FFCA28"/>
                                                            <path d="M119.242 16.8609C115.912 16.4109 112.732 19.5809 112.152 23.9209C111.792 26.6309 112.522 29.1609 113.932 30.7909L111.532 40.7409C111.532 40.7409 107.862 64.2509 89.3215 68.8909C74.5015 72.6009 69.1315 45.4709 67.8315 37.0909C70.6515 35.6909 72.6015 32.7909 72.6015 29.4209C72.6015 24.6909 68.7715 20.8609 64.0415 20.8609C59.3115 20.8609 55.4815 24.6909 55.4815 29.4209C55.4815 32.8109 57.4615 35.7409 60.3315 37.1209C59.3015 45.3909 54.7615 71.6209 38.7615 68.8809C22.5215 66.0909 15.4315 38.7409 13.7915 31.3009C15.7415 29.7009 16.8315 26.8809 16.4315 23.8509C15.8515 19.5009 12.4115 16.3809 8.75151 16.8709C5.09151 17.3609 2.60151 21.2809 3.18151 25.6209C3.60151 28.7809 5.54151 31.2909 7.97151 32.2409L20.6915 111.271C20.6915 111.271 31.7915 120.041 64.0415 120.041C96.2915 120.041 107.392 111.271 107.392 111.271L120.142 32.0309C122.202 30.9509 123.822 28.5209 124.222 25.5409C124.812 21.1909 122.582 17.3109 119.242 16.8609V16.8609Z" fill="#FFCA28"/>
                                                            <path d="M64.4392 99.9095C69.8185 99.9095 74.1792 94.7115 74.1792 88.2995C74.1792 81.8874 69.8185 76.6895 64.4392 76.6895C59.06 76.6895 54.6992 81.8874 54.6992 88.2995C54.6992 94.7115 59.06 99.9095 64.4392 99.9095Z" fill="#26A69A"/>
                                                            <path d="M64.4394 79.5598C64.8194 79.9798 65.1594 80.7498 64.4394 82.2498C63.7194 83.7498 59.8394 85.7798 59.1294 86.1898C58.4194 86.6098 57.9494 86.4198 57.7294 86.2498C56.6794 85.4098 57.0794 83.5098 57.7594 82.3498C59.2194 79.8398 62.3094 77.2498 64.4394 79.5598V79.5598Z" fill="#69F0AE"/>
                                                            <path d="M63.7186 92.6299C62.6186 93.1599 59.0086 94.7699 60.1986 96.6799C60.8986 97.8099 62.3486 98.2899 63.6786 98.3499C65.0086 98.4099 66.3186 97.9899 67.4986 97.3799C73.0986 94.4799 73.5486 86.8599 72.4586 86.2799C71.3386 85.6799 70.5786 87.2299 69.9986 87.8899C68.235 89.865 66.1015 91.4753 63.7186 92.6299V92.6299Z" fill="#00796B"/>
                                                            <path d="M118.09 78.8003C119.65 70.1703 113.85 68.0103 113.85 68.0103C113.85 68.0103 110.11 67.3303 108.35 77.0403C106.59 86.7403 110.33 87.4203 110.33 87.4203C110.33 87.4203 116.52 87.4303 118.09 78.8003V78.8003Z" fill="#26A69A"/>
                                                            <path d="M115.511 70.96C116.871 72.78 115.261 75.47 112.651 77.26C111.881 77.79 110.861 77.59 110.711 77.15C110.291 75.89 110.471 74.46 111.031 73.25C112.691 69.62 114.821 70.04 115.511 70.96V70.96Z" fill="#69F0AE"/>
                                                            <path d="M9.76138 79.06C8.19138 70.44 14.0014 68.27 14.0014 68.27C14.0014 68.27 17.7414 67.59 19.5014 77.3C21.2614 87 17.5214 87.68 17.5214 87.68C17.5214 87.68 11.3214 87.69 9.76138 79.06V79.06Z" fill="#26A69A"/>
                                                            <path d="M15.7805 71.1993C17.1205 72.1993 16.5705 73.5093 15.5605 74.4193C14.4105 75.4693 13.5305 76.6193 12.5505 77.8093C12.4005 77.9893 12.2305 78.1893 11.9905 78.2393C11.5305 78.3393 11.1605 77.8693 11.0105 77.4193C10.5805 76.1593 10.6605 74.6793 11.3005 73.5193C13.1205 70.2093 15.2605 70.8093 15.7805 71.1993V71.1993Z" fill="#69F0AE"/>
                                                            <path d="M99.9895 87.1599C99.2995 91.0899 96.1495 93.8199 92.9395 93.2599C89.7295 92.6999 89.2895 89.3499 89.9795 85.4199C90.6695 81.4899 92.2195 78.4799 95.4195 79.0399C98.6295 79.5999 100.679 83.2399 99.9895 87.1599V87.1599Z" fill="#F44336"/>
                                                            <path d="M30.431 87.1599C31.121 91.0899 34.271 93.8199 37.481 93.2599C40.691 92.6999 41.131 89.3499 40.441 85.4199C39.751 81.4899 38.201 78.4799 35.001 79.0399C31.801 79.5999 29.751 83.2399 30.431 87.1599Z" fill="#F44336"/>
                                                            <path d="M35.0795 84.5403C34.3495 85.3603 32.5695 87.0103 31.9395 85.7503C31.0795 84.0303 32.2695 81.4303 33.6295 80.5703C34.9895 79.7103 36.0995 80.3903 36.2895 81.1603C36.5195 82.1403 35.7295 83.8003 35.0795 84.5403V84.5403Z" fill="#FFA8A4"/>
                                                            <path d="M91.9807 87.0505C90.9907 86.9005 90.8807 83.4905 93.5407 80.8105C94.8107 79.5305 96.6307 81.0505 96.1707 83.1005C95.7307 85.0505 93.7907 87.3305 91.9807 87.0505V87.0505Z" fill="#FFA8A4"/>
                                                            <path d="M109.151 98.2109C103.161 101.211 89.4208 109.201 64.0508 109.201C38.6808 109.201 24.9408 101.211 18.9508 98.2109C18.9508 98.2109 16.8008 99.3609 16.8008 100.561V109.771C16.8008 111.001 17.4508 112.131 18.5108 112.761C23.1908 115.521 37.4508 122.041 64.0608 122.041C90.6708 122.041 104.931 115.521 109.611 112.761C110.131 112.454 110.562 112.017 110.862 111.493C111.162 110.968 111.32 110.375 111.321 109.771V100.561C111.301 99.3609 109.151 98.2109 109.151 98.2109V98.2109Z" fill="#FFCA28"/>
                                                            <path d="M39.6002 110.84C42.4002 111.39 43.2502 111.63 43.0602 113.19C42.6702 116.26 36.3002 115.53 32.5302 114.54C24.7402 112.49 23.1602 110.33 23.1602 108.4C23.1602 106.63 24.5202 106.42 26.6202 107.16C29.1302 108.05 33.0102 109.55 39.6002 110.84V110.84Z" fill="#FFF59D"/>
                                                            <path d="M109.149 100.23C109.149 100.23 92.5792 109.61 64.0492 109.61C35.5192 109.61 18.9492 100.23 18.9492 100.23" stroke="#F19534" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round"/>
                                                            <path d="M26.9699 49.5704C32.2899 45.7704 35.1499 38.9604 35.3999 28.1204C35.4199 27.1404 35.6999 26.8504 36.2299 26.7904C37.0799 26.7004 37.2199 27.4704 37.2099 28.0204C36.9699 39.7204 35.4799 47.0304 29.5799 51.1504C29.2899 51.3504 27.2199 52.6104 26.3399 51.7404C25.2899 50.7204 26.6299 49.8104 26.9699 49.5704V49.5704Z" fill="#FFCA28"/>
                                                            <path d="M31.8383 15.5396C31.6683 13.7296 32.0883 10.4696 36.8383 8.98957C38.2283 8.55957 39.0883 9.23957 39.2483 9.76957C39.6483 11.0896 38.4883 11.6096 37.9583 11.7796C34.3083 12.9596 34.1283 14.7796 33.3783 15.9396C32.6283 17.0996 31.8983 16.0896 31.8383 15.5396V15.5396Z" fill="#FFCA28"/>
                                                            <path d="M78.2214 47.1694C83.0314 42.8994 86.2214 38.1294 88.3214 27.2694C88.5114 26.3094 88.7914 26.0494 89.3114 26.0694C90.1614 26.0894 90.2014 26.8794 90.1114 27.4194C88.3314 38.9994 86.6414 42.2994 80.7114 48.8694C80.0414 49.6094 78.4114 50.2794 77.4914 49.5094C76.6614 48.8194 77.6214 47.7094 78.2214 47.1694V47.1694Z" fill="#FFCA28"/>
                                                            <path d="M85.2993 15.6294C85.1293 13.8194 85.5493 10.5594 90.2993 9.07941C91.6893 8.64941 92.5493 9.32941 92.7093 9.85941C93.1093 11.1794 91.9493 11.6994 91.4193 11.8694C87.7693 13.0494 87.5892 14.8694 86.8392 16.0294C86.0992 17.1894 85.3593 16.1794 85.2993 15.6294V15.6294Z" fill="#FFCA28"/>
                                                            <path d="M31.5915 71.6207C19.9715 66.3507 16.5515 52.6007 14.7315 46.6307C14.4915 45.8407 14.6115 45.0907 15.4015 44.8507C16.1915 44.6107 16.6615 45.1207 16.9115 45.9107C18.2315 50.2407 23.3615 64.7007 33.9515 68.8107C34.7215 69.1107 35.9215 69.8407 35.2715 71.0907C34.8415 71.9007 33.4615 72.4707 31.5915 71.6207V71.6207Z" fill="#FFF59D"/>
                                                            <path d="M12.6801 24.63C12.1201 23.47 11.8901 22.37 8.84013 21.1C8.07013 20.78 7.56013 20.07 7.77013 19.27C7.98013 18.47 8.78013 17.87 9.94013 18.07C13.7101 18.72 14.5301 22.55 14.6901 23.88C14.8401 25.16 13.2501 25.79 12.6801 24.63V24.63Z" fill="#FFF59D"/>
                                                            <path d="M96.8701 71.6207C108.49 66.3507 111.91 52.6007 113.73 46.6307C113.97 45.8407 113.85 45.0907 113.06 44.8507C112.27 44.6107 111.8 45.1207 111.55 45.9107C110.23 50.2407 105.1 64.7007 94.5101 68.8107C93.7401 69.1107 92.5401 69.8407 93.1901 71.0907C93.6201 71.9007 95.0001 72.4707 96.8701 71.6207Z" fill="#FFF59D"/>
                                                            <path d="M115.782 24.63C116.342 23.47 116.572 22.37 119.622 21.1C120.392 20.78 120.902 20.07 120.692 19.27C120.482 18.47 119.682 17.87 118.522 18.07C114.752 18.72 113.932 22.55 113.772 23.88C113.622 25.16 115.222 25.79 115.782 24.63V24.63Z" fill="#FFF59D"/>
                                                            <path d="M59.3805 29.5491C59.9905 28.2991 61.0605 26.5891 64.5505 25.8691C65.8905 25.5891 66.2805 25.0091 66.1605 24.1291C65.9205 22.2991 63.6405 22.4291 62.4105 22.7191C58.3105 23.6791 57.4005 27.3191 57.2305 28.7591C57.0605 30.1291 58.7805 30.7991 59.3805 29.5491V29.5491Z" fill="#FFF59D"/>
                                                        </svg>
                                                        <small>Top of the day</small>
                                                    </span>
                                                    <h6 className="mb-3 mt-3 heading-title fw-bolder">Italian Salad</h6>
                                                    <p className="mt-2 mb-0 pb-4 iq-calories small">60 Calories</p>
                                                    <small>4 persons</small>
                                                    <div className="d-flex mt-2">
                                                        <span className="text-primary me-4">$7.49</span>
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect width="24" height="24" rx="12" fill="#EA6A12"/>
                                                            <rect x="11.168" y="7" width="1.66667" height="10" rx="0.833333" fill="white"/>
                                                            <rect x="7" y="12.834" width="1.66666" height="10" rx="0.833332" transform="rotate(-90 7 12.834)" fill="white"/>
                                                        </svg>
                                                    </div>
                                                </div>            
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>  
                                <SwiperSlide>
                                    <Card className="card-white dish-card2 {{active}}">
                                        <Card.Body>
                                            <div className="d-flex profile-img1">
                                                <div className="profile-img31">
                                                    <img src={lay14} className="img-fluid rounded-pill avatar-130 blur-shadow position-start" alt="profileimage"/>
                                                    <img src={lay14} className="img-fluid rounded-pill avatar-130 hover-image" alt="profileimage"
                                                        data-iq-gsap="onStart"
                                                        data-iq-opacity="0"
                                                        data-iq-position-y="-40"
                                                        data-iq-duration=".6"
                                                        data-iq-delay=".4"
                                                        data-iq-trigger="scroll"
                                                        data-iq-ease="none"
                                                    />
                                                </div>
                                                <div>
                                                    <span className="text-primary">
                                                        <svg width="20" height="15" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M94.5186 21.8107C96.9586 20.6307 98.6486 18.1407 98.6486 15.2507C98.6486 13.3199 97.8816 11.4682 96.5163 10.103C95.1511 8.7377 93.2994 7.9707 91.3686 7.9707C89.4378 7.9707 87.5861 8.7377 86.2209 10.103C84.8556 11.4682 84.0886 13.3199 84.0886 15.2507C84.0886 18.1807 85.8186 20.6907 88.3086 21.8507C85.4286 37.4507 81.0086 49.0607 64.5586 51.5407C64.5586 51.5407 68.9886 73.6907 89.7086 73.6907C110.429 73.6907 112.529 51.7607 112.529 51.7607C95.7186 52.6207 94.2986 31.4907 94.5186 21.8107V21.8107Z" fill="#F19534"/>
                                                            <path d="M34.7383 21.8107C32.2983 20.6307 30.6083 18.1407 30.6083 15.2507C30.6083 13.3199 31.3753 11.4682 32.7405 10.103C34.1058 8.7377 35.9575 7.9707 37.8883 7.9707C39.8191 7.9707 41.6708 8.7377 43.036 10.103C44.4013 11.4682 45.1683 13.3199 45.1683 15.2507C45.1683 18.1807 43.4383 20.6907 40.9483 21.8507C43.8283 37.4507 48.2483 49.0607 64.6983 51.5407C64.6983 51.5407 60.2683 73.6907 39.5483 73.6907C18.8283 73.6907 16.7383 51.7707 16.7383 51.7707C33.5383 52.6207 34.9583 31.4907 34.7383 21.8107V21.8107Z" fill="#F19534"/>
                                                            <path d="M89.4297 73.6891C89.5197 73.6891 89.6097 73.6991 89.6997 73.6991C95.4097 73.6991 99.6997 72.0291 102.92 69.6191L89.4297 73.6891Z" fill="#FFCA28"/>
                                                            <path d="M119.242 16.8609C115.912 16.4109 112.732 19.5809 112.152 23.9209C111.792 26.6309 112.522 29.1609 113.932 30.7909L111.532 40.7409C111.532 40.7409 107.862 64.2509 89.3215 68.8909C74.5015 72.6009 69.1315 45.4709 67.8315 37.0909C70.6515 35.6909 72.6015 32.7909 72.6015 29.4209C72.6015 24.6909 68.7715 20.8609 64.0415 20.8609C59.3115 20.8609 55.4815 24.6909 55.4815 29.4209C55.4815 32.8109 57.4615 35.7409 60.3315 37.1209C59.3015 45.3909 54.7615 71.6209 38.7615 68.8809C22.5215 66.0909 15.4315 38.7409 13.7915 31.3009C15.7415 29.7009 16.8315 26.8809 16.4315 23.8509C15.8515 19.5009 12.4115 16.3809 8.75151 16.8709C5.09151 17.3609 2.60151 21.2809 3.18151 25.6209C3.60151 28.7809 5.54151 31.2909 7.97151 32.2409L20.6915 111.271C20.6915 111.271 31.7915 120.041 64.0415 120.041C96.2915 120.041 107.392 111.271 107.392 111.271L120.142 32.0309C122.202 30.9509 123.822 28.5209 124.222 25.5409C124.812 21.1909 122.582 17.3109 119.242 16.8609V16.8609Z" fill="#FFCA28"/>
                                                            <path d="M64.4392 99.9095C69.8185 99.9095 74.1792 94.7115 74.1792 88.2995C74.1792 81.8874 69.8185 76.6895 64.4392 76.6895C59.06 76.6895 54.6992 81.8874 54.6992 88.2995C54.6992 94.7115 59.06 99.9095 64.4392 99.9095Z" fill="#26A69A"/>
                                                            <path d="M64.4394 79.5598C64.8194 79.9798 65.1594 80.7498 64.4394 82.2498C63.7194 83.7498 59.8394 85.7798 59.1294 86.1898C58.4194 86.6098 57.9494 86.4198 57.7294 86.2498C56.6794 85.4098 57.0794 83.5098 57.7594 82.3498C59.2194 79.8398 62.3094 77.2498 64.4394 79.5598V79.5598Z" fill="#69F0AE"/>
                                                            <path d="M63.7186 92.6299C62.6186 93.1599 59.0086 94.7699 60.1986 96.6799C60.8986 97.8099 62.3486 98.2899 63.6786 98.3499C65.0086 98.4099 66.3186 97.9899 67.4986 97.3799C73.0986 94.4799 73.5486 86.8599 72.4586 86.2799C71.3386 85.6799 70.5786 87.2299 69.9986 87.8899C68.235 89.865 66.1015 91.4753 63.7186 92.6299V92.6299Z" fill="#00796B"/>
                                                            <path d="M118.09 78.8003C119.65 70.1703 113.85 68.0103 113.85 68.0103C113.85 68.0103 110.11 67.3303 108.35 77.0403C106.59 86.7403 110.33 87.4203 110.33 87.4203C110.33 87.4203 116.52 87.4303 118.09 78.8003V78.8003Z" fill="#26A69A"/>
                                                            <path d="M115.511 70.96C116.871 72.78 115.261 75.47 112.651 77.26C111.881 77.79 110.861 77.59 110.711 77.15C110.291 75.89 110.471 74.46 111.031 73.25C112.691 69.62 114.821 70.04 115.511 70.96V70.96Z" fill="#69F0AE"/>
                                                            <path d="M9.76138 79.06C8.19138 70.44 14.0014 68.27 14.0014 68.27C14.0014 68.27 17.7414 67.59 19.5014 77.3C21.2614 87 17.5214 87.68 17.5214 87.68C17.5214 87.68 11.3214 87.69 9.76138 79.06V79.06Z" fill="#26A69A"/>
                                                            <path d="M15.7805 71.1993C17.1205 72.1993 16.5705 73.5093 15.5605 74.4193C14.4105 75.4693 13.5305 76.6193 12.5505 77.8093C12.4005 77.9893 12.2305 78.1893 11.9905 78.2393C11.5305 78.3393 11.1605 77.8693 11.0105 77.4193C10.5805 76.1593 10.6605 74.6793 11.3005 73.5193C13.1205 70.2093 15.2605 70.8093 15.7805 71.1993V71.1993Z" fill="#69F0AE"/>
                                                            <path d="M99.9895 87.1599C99.2995 91.0899 96.1495 93.8199 92.9395 93.2599C89.7295 92.6999 89.2895 89.3499 89.9795 85.4199C90.6695 81.4899 92.2195 78.4799 95.4195 79.0399C98.6295 79.5999 100.679 83.2399 99.9895 87.1599V87.1599Z" fill="#F44336"/>
                                                            <path d="M30.431 87.1599C31.121 91.0899 34.271 93.8199 37.481 93.2599C40.691 92.6999 41.131 89.3499 40.441 85.4199C39.751 81.4899 38.201 78.4799 35.001 79.0399C31.801 79.5999 29.751 83.2399 30.431 87.1599Z" fill="#F44336"/>
                                                            <path d="M35.0795 84.5403C34.3495 85.3603 32.5695 87.0103 31.9395 85.7503C31.0795 84.0303 32.2695 81.4303 33.6295 80.5703C34.9895 79.7103 36.0995 80.3903 36.2895 81.1603C36.5195 82.1403 35.7295 83.8003 35.0795 84.5403V84.5403Z" fill="#FFA8A4"/>
                                                            <path d="M91.9807 87.0505C90.9907 86.9005 90.8807 83.4905 93.5407 80.8105C94.8107 79.5305 96.6307 81.0505 96.1707 83.1005C95.7307 85.0505 93.7907 87.3305 91.9807 87.0505V87.0505Z" fill="#FFA8A4"/>
                                                            <path d="M109.151 98.2109C103.161 101.211 89.4208 109.201 64.0508 109.201C38.6808 109.201 24.9408 101.211 18.9508 98.2109C18.9508 98.2109 16.8008 99.3609 16.8008 100.561V109.771C16.8008 111.001 17.4508 112.131 18.5108 112.761C23.1908 115.521 37.4508 122.041 64.0608 122.041C90.6708 122.041 104.931 115.521 109.611 112.761C110.131 112.454 110.562 112.017 110.862 111.493C111.162 110.968 111.32 110.375 111.321 109.771V100.561C111.301 99.3609 109.151 98.2109 109.151 98.2109V98.2109Z" fill="#FFCA28"/>
                                                            <path d="M39.6002 110.84C42.4002 111.39 43.2502 111.63 43.0602 113.19C42.6702 116.26 36.3002 115.53 32.5302 114.54C24.7402 112.49 23.1602 110.33 23.1602 108.4C23.1602 106.63 24.5202 106.42 26.6202 107.16C29.1302 108.05 33.0102 109.55 39.6002 110.84V110.84Z" fill="#FFF59D"/>
                                                            <path d="M109.149 100.23C109.149 100.23 92.5792 109.61 64.0492 109.61C35.5192 109.61 18.9492 100.23 18.9492 100.23" stroke="#F19534" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round"/>
                                                            <path d="M26.9699 49.5704C32.2899 45.7704 35.1499 38.9604 35.3999 28.1204C35.4199 27.1404 35.6999 26.8504 36.2299 26.7904C37.0799 26.7004 37.2199 27.4704 37.2099 28.0204C36.9699 39.7204 35.4799 47.0304 29.5799 51.1504C29.2899 51.3504 27.2199 52.6104 26.3399 51.7404C25.2899 50.7204 26.6299 49.8104 26.9699 49.5704V49.5704Z" fill="#FFCA28"/>
                                                            <path d="M31.8383 15.5396C31.6683 13.7296 32.0883 10.4696 36.8383 8.98957C38.2283 8.55957 39.0883 9.23957 39.2483 9.76957C39.6483 11.0896 38.4883 11.6096 37.9583 11.7796C34.3083 12.9596 34.1283 14.7796 33.3783 15.9396C32.6283 17.0996 31.8983 16.0896 31.8383 15.5396V15.5396Z" fill="#FFCA28"/>
                                                            <path d="M78.2214 47.1694C83.0314 42.8994 86.2214 38.1294 88.3214 27.2694C88.5114 26.3094 88.7914 26.0494 89.3114 26.0694C90.1614 26.0894 90.2014 26.8794 90.1114 27.4194C88.3314 38.9994 86.6414 42.2994 80.7114 48.8694C80.0414 49.6094 78.4114 50.2794 77.4914 49.5094C76.6614 48.8194 77.6214 47.7094 78.2214 47.1694V47.1694Z" fill="#FFCA28"/>
                                                            <path d="M85.2993 15.6294C85.1293 13.8194 85.5493 10.5594 90.2993 9.07941C91.6893 8.64941 92.5493 9.32941 92.7093 9.85941C93.1093 11.1794 91.9493 11.6994 91.4193 11.8694C87.7693 13.0494 87.5892 14.8694 86.8392 16.0294C86.0992 17.1894 85.3593 16.1794 85.2993 15.6294V15.6294Z" fill="#FFCA28"/>
                                                            <path d="M31.5915 71.6207C19.9715 66.3507 16.5515 52.6007 14.7315 46.6307C14.4915 45.8407 14.6115 45.0907 15.4015 44.8507C16.1915 44.6107 16.6615 45.1207 16.9115 45.9107C18.2315 50.2407 23.3615 64.7007 33.9515 68.8107C34.7215 69.1107 35.9215 69.8407 35.2715 71.0907C34.8415 71.9007 33.4615 72.4707 31.5915 71.6207V71.6207Z" fill="#FFF59D"/>
                                                            <path d="M12.6801 24.63C12.1201 23.47 11.8901 22.37 8.84013 21.1C8.07013 20.78 7.56013 20.07 7.77013 19.27C7.98013 18.47 8.78013 17.87 9.94013 18.07C13.7101 18.72 14.5301 22.55 14.6901 23.88C14.8401 25.16 13.2501 25.79 12.6801 24.63V24.63Z" fill="#FFF59D"/>
                                                            <path d="M96.8701 71.6207C108.49 66.3507 111.91 52.6007 113.73 46.6307C113.97 45.8407 113.85 45.0907 113.06 44.8507C112.27 44.6107 111.8 45.1207 111.55 45.9107C110.23 50.2407 105.1 64.7007 94.5101 68.8107C93.7401 69.1107 92.5401 69.8407 93.1901 71.0907C93.6201 71.9007 95.0001 72.4707 96.8701 71.6207Z" fill="#FFF59D"/>
                                                            <path d="M115.782 24.63C116.342 23.47 116.572 22.37 119.622 21.1C120.392 20.78 120.902 20.07 120.692 19.27C120.482 18.47 119.682 17.87 118.522 18.07C114.752 18.72 113.932 22.55 113.772 23.88C113.622 25.16 115.222 25.79 115.782 24.63V24.63Z" fill="#FFF59D"/>
                                                            <path d="M59.3805 29.5491C59.9905 28.2991 61.0605 26.5891 64.5505 25.8691C65.8905 25.5891 66.2805 25.0091 66.1605 24.1291C65.9205 22.2991 63.6405 22.4291 62.4105 22.7191C58.3105 23.6791 57.4005 27.3191 57.2305 28.7591C57.0605 30.1291 58.7805 30.7991 59.3805 29.5491V29.5491Z" fill="#FFF59D"/>
                                                        </svg>
                                                        <small>Top of the day</small>
                                                    </span>
                                                    <h6 className="mb-3 mt-3 heading-title fw-bolder">Italian Salad</h6>
                                                    <p className="mt-2 mb-0 pb-4 iq-calories small">60 Calories</p>
                                                    <small>4 persons</small>
                                                    <div className="d-flex mt-2">
                                                        <span className="text-primary me-4">$7.49</span>
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect width="24" height="24" rx="12" fill="#EA6A12"/>
                                                            <rect x="11.168" y="7" width="1.66667" height="10" rx="0.833333" fill="white"/>
                                                            <rect x="7" y="12.834" width="1.66666" height="10" rx="0.833332" transform="rotate(-90 7 12.834)" fill="white"/>
                                                        </svg>
                                                    </div>
                                                </div>            
                                            </div>
                                        </Card.Body>
                                    </Card>
                                    <Card className="card-white dish-card2 {{active}}">
                                        <Card.Body>
                                            <div className="d-flex profile-img1">
                                                <div className="profile-img31">
                                                    <img src={lay20} className="img-fluid rounded-pill avatar-130 blur-shadow position-start" alt="profileimage"/>
                                                    <img src={lay20} className="img-fluid rounded-pill avatar-130 hover-image" alt="profileimage"
                                                        data-iq-gsap="onStart"
                                                        data-iq-opacity="0"
                                                        data-iq-position-y="-40"
                                                        data-iq-duration=".6"
                                                        data-iq-delay=".4"
                                                        data-iq-trigger="scroll"
                                                        data-iq-ease="none"
                                                    />
                                                </div>
                                                <div>
                                                    <span className="text-primary">
                                                        <svg width="20" height="15" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M94.5186 21.8107C96.9586 20.6307 98.6486 18.1407 98.6486 15.2507C98.6486 13.3199 97.8816 11.4682 96.5163 10.103C95.1511 8.7377 93.2994 7.9707 91.3686 7.9707C89.4378 7.9707 87.5861 8.7377 86.2209 10.103C84.8556 11.4682 84.0886 13.3199 84.0886 15.2507C84.0886 18.1807 85.8186 20.6907 88.3086 21.8507C85.4286 37.4507 81.0086 49.0607 64.5586 51.5407C64.5586 51.5407 68.9886 73.6907 89.7086 73.6907C110.429 73.6907 112.529 51.7607 112.529 51.7607C95.7186 52.6207 94.2986 31.4907 94.5186 21.8107V21.8107Z" fill="#F19534"/>
                                                            <path d="M34.7383 21.8107C32.2983 20.6307 30.6083 18.1407 30.6083 15.2507C30.6083 13.3199 31.3753 11.4682 32.7405 10.103C34.1058 8.7377 35.9575 7.9707 37.8883 7.9707C39.8191 7.9707 41.6708 8.7377 43.036 10.103C44.4013 11.4682 45.1683 13.3199 45.1683 15.2507C45.1683 18.1807 43.4383 20.6907 40.9483 21.8507C43.8283 37.4507 48.2483 49.0607 64.6983 51.5407C64.6983 51.5407 60.2683 73.6907 39.5483 73.6907C18.8283 73.6907 16.7383 51.7707 16.7383 51.7707C33.5383 52.6207 34.9583 31.4907 34.7383 21.8107V21.8107Z" fill="#F19534"/>
                                                            <path d="M89.4297 73.6891C89.5197 73.6891 89.6097 73.6991 89.6997 73.6991C95.4097 73.6991 99.6997 72.0291 102.92 69.6191L89.4297 73.6891Z" fill="#FFCA28"/>
                                                            <path d="M119.242 16.8609C115.912 16.4109 112.732 19.5809 112.152 23.9209C111.792 26.6309 112.522 29.1609 113.932 30.7909L111.532 40.7409C111.532 40.7409 107.862 64.2509 89.3215 68.8909C74.5015 72.6009 69.1315 45.4709 67.8315 37.0909C70.6515 35.6909 72.6015 32.7909 72.6015 29.4209C72.6015 24.6909 68.7715 20.8609 64.0415 20.8609C59.3115 20.8609 55.4815 24.6909 55.4815 29.4209C55.4815 32.8109 57.4615 35.7409 60.3315 37.1209C59.3015 45.3909 54.7615 71.6209 38.7615 68.8809C22.5215 66.0909 15.4315 38.7409 13.7915 31.3009C15.7415 29.7009 16.8315 26.8809 16.4315 23.8509C15.8515 19.5009 12.4115 16.3809 8.75151 16.8709C5.09151 17.3609 2.60151 21.2809 3.18151 25.6209C3.60151 28.7809 5.54151 31.2909 7.97151 32.2409L20.6915 111.271C20.6915 111.271 31.7915 120.041 64.0415 120.041C96.2915 120.041 107.392 111.271 107.392 111.271L120.142 32.0309C122.202 30.9509 123.822 28.5209 124.222 25.5409C124.812 21.1909 122.582 17.3109 119.242 16.8609V16.8609Z" fill="#FFCA28"/>
                                                            <path d="M64.4392 99.9095C69.8185 99.9095 74.1792 94.7115 74.1792 88.2995C74.1792 81.8874 69.8185 76.6895 64.4392 76.6895C59.06 76.6895 54.6992 81.8874 54.6992 88.2995C54.6992 94.7115 59.06 99.9095 64.4392 99.9095Z" fill="#26A69A"/>
                                                            <path d="M64.4394 79.5598C64.8194 79.9798 65.1594 80.7498 64.4394 82.2498C63.7194 83.7498 59.8394 85.7798 59.1294 86.1898C58.4194 86.6098 57.9494 86.4198 57.7294 86.2498C56.6794 85.4098 57.0794 83.5098 57.7594 82.3498C59.2194 79.8398 62.3094 77.2498 64.4394 79.5598V79.5598Z" fill="#69F0AE"/>
                                                            <path d="M63.7186 92.6299C62.6186 93.1599 59.0086 94.7699 60.1986 96.6799C60.8986 97.8099 62.3486 98.2899 63.6786 98.3499C65.0086 98.4099 66.3186 97.9899 67.4986 97.3799C73.0986 94.4799 73.5486 86.8599 72.4586 86.2799C71.3386 85.6799 70.5786 87.2299 69.9986 87.8899C68.235 89.865 66.1015 91.4753 63.7186 92.6299V92.6299Z" fill="#00796B"/>
                                                            <path d="M118.09 78.8003C119.65 70.1703 113.85 68.0103 113.85 68.0103C113.85 68.0103 110.11 67.3303 108.35 77.0403C106.59 86.7403 110.33 87.4203 110.33 87.4203C110.33 87.4203 116.52 87.4303 118.09 78.8003V78.8003Z" fill="#26A69A"/>
                                                            <path d="M115.511 70.96C116.871 72.78 115.261 75.47 112.651 77.26C111.881 77.79 110.861 77.59 110.711 77.15C110.291 75.89 110.471 74.46 111.031 73.25C112.691 69.62 114.821 70.04 115.511 70.96V70.96Z" fill="#69F0AE"/>
                                                            <path d="M9.76138 79.06C8.19138 70.44 14.0014 68.27 14.0014 68.27C14.0014 68.27 17.7414 67.59 19.5014 77.3C21.2614 87 17.5214 87.68 17.5214 87.68C17.5214 87.68 11.3214 87.69 9.76138 79.06V79.06Z" fill="#26A69A"/>
                                                            <path d="M15.7805 71.1993C17.1205 72.1993 16.5705 73.5093 15.5605 74.4193C14.4105 75.4693 13.5305 76.6193 12.5505 77.8093C12.4005 77.9893 12.2305 78.1893 11.9905 78.2393C11.5305 78.3393 11.1605 77.8693 11.0105 77.4193C10.5805 76.1593 10.6605 74.6793 11.3005 73.5193C13.1205 70.2093 15.2605 70.8093 15.7805 71.1993V71.1993Z" fill="#69F0AE"/>
                                                            <path d="M99.9895 87.1599C99.2995 91.0899 96.1495 93.8199 92.9395 93.2599C89.7295 92.6999 89.2895 89.3499 89.9795 85.4199C90.6695 81.4899 92.2195 78.4799 95.4195 79.0399C98.6295 79.5999 100.679 83.2399 99.9895 87.1599V87.1599Z" fill="#F44336"/>
                                                            <path d="M30.431 87.1599C31.121 91.0899 34.271 93.8199 37.481 93.2599C40.691 92.6999 41.131 89.3499 40.441 85.4199C39.751 81.4899 38.201 78.4799 35.001 79.0399C31.801 79.5999 29.751 83.2399 30.431 87.1599Z" fill="#F44336"/>
                                                            <path d="M35.0795 84.5403C34.3495 85.3603 32.5695 87.0103 31.9395 85.7503C31.0795 84.0303 32.2695 81.4303 33.6295 80.5703C34.9895 79.7103 36.0995 80.3903 36.2895 81.1603C36.5195 82.1403 35.7295 83.8003 35.0795 84.5403V84.5403Z" fill="#FFA8A4"/>
                                                            <path d="M91.9807 87.0505C90.9907 86.9005 90.8807 83.4905 93.5407 80.8105C94.8107 79.5305 96.6307 81.0505 96.1707 83.1005C95.7307 85.0505 93.7907 87.3305 91.9807 87.0505V87.0505Z" fill="#FFA8A4"/>
                                                            <path d="M109.151 98.2109C103.161 101.211 89.4208 109.201 64.0508 109.201C38.6808 109.201 24.9408 101.211 18.9508 98.2109C18.9508 98.2109 16.8008 99.3609 16.8008 100.561V109.771C16.8008 111.001 17.4508 112.131 18.5108 112.761C23.1908 115.521 37.4508 122.041 64.0608 122.041C90.6708 122.041 104.931 115.521 109.611 112.761C110.131 112.454 110.562 112.017 110.862 111.493C111.162 110.968 111.32 110.375 111.321 109.771V100.561C111.301 99.3609 109.151 98.2109 109.151 98.2109V98.2109Z" fill="#FFCA28"/>
                                                            <path d="M39.6002 110.84C42.4002 111.39 43.2502 111.63 43.0602 113.19C42.6702 116.26 36.3002 115.53 32.5302 114.54C24.7402 112.49 23.1602 110.33 23.1602 108.4C23.1602 106.63 24.5202 106.42 26.6202 107.16C29.1302 108.05 33.0102 109.55 39.6002 110.84V110.84Z" fill="#FFF59D"/>
                                                            <path d="M109.149 100.23C109.149 100.23 92.5792 109.61 64.0492 109.61C35.5192 109.61 18.9492 100.23 18.9492 100.23" stroke="#F19534" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round"/>
                                                            <path d="M26.9699 49.5704C32.2899 45.7704 35.1499 38.9604 35.3999 28.1204C35.4199 27.1404 35.6999 26.8504 36.2299 26.7904C37.0799 26.7004 37.2199 27.4704 37.2099 28.0204C36.9699 39.7204 35.4799 47.0304 29.5799 51.1504C29.2899 51.3504 27.2199 52.6104 26.3399 51.7404C25.2899 50.7204 26.6299 49.8104 26.9699 49.5704V49.5704Z" fill="#FFCA28"/>
                                                            <path d="M31.8383 15.5396C31.6683 13.7296 32.0883 10.4696 36.8383 8.98957C38.2283 8.55957 39.0883 9.23957 39.2483 9.76957C39.6483 11.0896 38.4883 11.6096 37.9583 11.7796C34.3083 12.9596 34.1283 14.7796 33.3783 15.9396C32.6283 17.0996 31.8983 16.0896 31.8383 15.5396V15.5396Z" fill="#FFCA28"/>
                                                            <path d="M78.2214 47.1694C83.0314 42.8994 86.2214 38.1294 88.3214 27.2694C88.5114 26.3094 88.7914 26.0494 89.3114 26.0694C90.1614 26.0894 90.2014 26.8794 90.1114 27.4194C88.3314 38.9994 86.6414 42.2994 80.7114 48.8694C80.0414 49.6094 78.4114 50.2794 77.4914 49.5094C76.6614 48.8194 77.6214 47.7094 78.2214 47.1694V47.1694Z" fill="#FFCA28"/>
                                                            <path d="M85.2993 15.6294C85.1293 13.8194 85.5493 10.5594 90.2993 9.07941C91.6893 8.64941 92.5493 9.32941 92.7093 9.85941C93.1093 11.1794 91.9493 11.6994 91.4193 11.8694C87.7693 13.0494 87.5892 14.8694 86.8392 16.0294C86.0992 17.1894 85.3593 16.1794 85.2993 15.6294V15.6294Z" fill="#FFCA28"/>
                                                            <path d="M31.5915 71.6207C19.9715 66.3507 16.5515 52.6007 14.7315 46.6307C14.4915 45.8407 14.6115 45.0907 15.4015 44.8507C16.1915 44.6107 16.6615 45.1207 16.9115 45.9107C18.2315 50.2407 23.3615 64.7007 33.9515 68.8107C34.7215 69.1107 35.9215 69.8407 35.2715 71.0907C34.8415 71.9007 33.4615 72.4707 31.5915 71.6207V71.6207Z" fill="#FFF59D"/>
                                                            <path d="M12.6801 24.63C12.1201 23.47 11.8901 22.37 8.84013 21.1C8.07013 20.78 7.56013 20.07 7.77013 19.27C7.98013 18.47 8.78013 17.87 9.94013 18.07C13.7101 18.72 14.5301 22.55 14.6901 23.88C14.8401 25.16 13.2501 25.79 12.6801 24.63V24.63Z" fill="#FFF59D"/>
                                                            <path d="M96.8701 71.6207C108.49 66.3507 111.91 52.6007 113.73 46.6307C113.97 45.8407 113.85 45.0907 113.06 44.8507C112.27 44.6107 111.8 45.1207 111.55 45.9107C110.23 50.2407 105.1 64.7007 94.5101 68.8107C93.7401 69.1107 92.5401 69.8407 93.1901 71.0907C93.6201 71.9007 95.0001 72.4707 96.8701 71.6207Z" fill="#FFF59D"/>
                                                            <path d="M115.782 24.63C116.342 23.47 116.572 22.37 119.622 21.1C120.392 20.78 120.902 20.07 120.692 19.27C120.482 18.47 119.682 17.87 118.522 18.07C114.752 18.72 113.932 22.55 113.772 23.88C113.622 25.16 115.222 25.79 115.782 24.63V24.63Z" fill="#FFF59D"/>
                                                            <path d="M59.3805 29.5491C59.9905 28.2991 61.0605 26.5891 64.5505 25.8691C65.8905 25.5891 66.2805 25.0091 66.1605 24.1291C65.9205 22.2991 63.6405 22.4291 62.4105 22.7191C58.3105 23.6791 57.4005 27.3191 57.2305 28.7591C57.0605 30.1291 58.7805 30.7991 59.3805 29.5491V29.5491Z" fill="#FFF59D"/>
                                                        </svg>
                                                        <small>Top of the month</small>
                                                    </span>
                                                    <h6 className="mb-3 mt-3 heading-title fw-bolder">Italian Salad</h6>
                                                    <p className="mt-2 mb-0 pb-4 iq-calories small">60 Calories</p>
                                                    <small>4 persons</small>
                                                    <div className="d-flex mt-2">
                                                        <span className="text-primary me-4">$7.49</span>
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect width="24" height="24" rx="12" fill="#EA6A12"/>
                                                            <rect x="11.168" y="7" width="1.66667" height="10" rx="0.833333" fill="white"/>
                                                            <rect x="7" y="12.834" width="1.66666" height="10" rx="0.833332" transform="rotate(-90 7 12.834)" fill="white"/>
                                                        </svg>
                                                    </div>
                                                </div>            
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </SwiperSlide>                
                            </Swiper>
                        </Card.Body>
                    </div>
                </Col>
                <Col md="12" lg="4" className="mt-5">
                    <Row>
                        <Col md="12" lg="12">
                            <Card className="profile-img3 ">
                            <Card.Body>
                                <div className="text-center profile-img51" >
                                    <div className="profile-img41 ">
                                        <img src={lay8} className="img-fluid rounded-pill " alt="profile-img"
                                            data-iq-gsap="onStart"
                                            data-iq-opacity="0"
                                            data-iq-position-y="-40"
                                            data-iq-duration=".6"
                                            data-iq-delay="1"
                                            data-iq-trigger="scroll"
                                            data-iq-ease="none"
                                        />
                                    </div>
                                    <div className="profile-img51 "  data-iq-gsap="onStart"
                                        data-iq-opacity="0"
                                        data-iq-position-y="-40"
                                        data-iq-duration=".6"
                                        data-iq-delay="1"
                                        data-iq-trigger="scroll"
                                        data-iq-ease="none">
                                        <h2 className="mb-2 profile-img55">50 % off </h2>
                                        <p className="mb-0">The full price of burgers</p>
                                    </div>
                                </div>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col md="12" lg="12">
                            <Card
                                data-iq-gsap="onStart"
                                data-iq-opacity="0"
                                data-iq-position-y="-40"
                                data-iq-duration=".6"
                                data-iq-delay="1.2"
                                data-iq-trigger="scroll"
                                data-iq-ease="none"
                            >
                            <div className="card-header">
                                <h4 className="list-main">My Cart</h4>
                            </div>
                            <Card.Body>
                                <div className="rounded-pill bg-soft-primary iq-my-cart">
                                    <div className="d-flex align-items-center justify-content-between profile-img4">
                                        <div className="profile-img11">
                                        <img src={lay13} className="img-fluid rounded-pill avatar-115 blur-shadow position-end" alt="img"/>
                                        <img src={lay13} className="img-fluid rounded-pill avatar-115"  alt="img"
                                        data-iq-gsap="onStart"
                                        data-iq-opacity="0"
                                        data-iq-scale=".6"
                                        data-iq-rotate="180"
                                        data-iq-duration="1"
                                        data-iq-delay="1"
                                        data-iq-trigger="scroll"
                                        data-iq-ease="none"
                                        />
                                        </div>
                                        <div className="d-flex align-items-center profile-content">
                                        <div>
                                            <h6 className="mb-1 heading-title fw-bolder">Chinese Pizza</h6>
                                            <span className="d-flex align-items-center "><svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="0.875" y="2.05469" width="1.66667" height="10" rx="0.833333" transform="rotate(-45 0.875 2.05469)" fill="#EA6A12"/>
                                                <rect x="2.05469" y="9.125" width="1.66666" height="10" rx="0.833332" transform="rotate(-135 2.05469 9.125)" fill="#EA6A12"/>
                                                </svg><small className="text-dark ms-1">1</small>
                                            </span>
                                        </div>
                                        </div>
                                        <div className="me-4 text-end">
                                        <span className="mb-1">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M19.6449 9.48924C19.6449 9.55724 19.112 16.298 18.8076 19.1349C18.6169 20.8758 17.4946 21.9318 15.8111 21.9618C14.5176 21.9908 13.2514 22.0008 12.0055 22.0008C10.6829 22.0008 9.38936 21.9908 8.1338 21.9618C6.50672 21.9228 5.38342 20.8458 5.20253 19.1349C4.88936 16.288 4.36613 9.55724 4.35641 9.48924C4.34668 9.28425 4.41281 9.08925 4.54703 8.93126C4.67929 8.78526 4.86991 8.69727 5.07026 8.69727H18.9408C19.1402 8.69727 19.3211 8.78526 19.464 8.93126C19.5973 9.08925 19.6644 9.28425 19.6449 9.48924" fill="#E60A0A"/>
                                            <path d="M21 5.97686C21 5.56588 20.6761 5.24389 20.2871 5.24389H17.3714C16.7781 5.24389 16.2627 4.8219 16.1304 4.22692L15.967 3.49795C15.7385 2.61698 14.9498 2 14.0647 2H9.93624C9.0415 2 8.26054 2.61698 8.02323 3.54595L7.87054 4.22792C7.7373 4.8219 7.22185 5.24389 6.62957 5.24389H3.71385C3.32386 5.24389 3 5.56588 3 5.97686V6.35685C3 6.75783 3.32386 7.08982 3.71385 7.08982H20.2871C20.6761 7.08982 21 6.75783 21 6.35685V5.97686Z" fill="#E60A0A"/>
                                            </svg>
                                        </span>
                                        <p className="mb-0 text-dark">$7.49</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-pill bg-soft-primary iq-my-cart">
                                    <div className="d-flex align-items-center justify-content-between profile-img4 mt-4">
                                        <div className="profile-img11">
                                        <img src={lay12} className="img-fluid rounded-pill avatar-115 blur-shadow position-end" alt="img"/>
                                        <img src={lay12} className="img-fluid rounded-pill avatar-115"  alt="img"
                                        data-iq-gsap="onStart"
                                        data-iq-opacity="0"
                                        data-iq-scale=".6"
                                        data-iq-rotate="180"
                                        data-iq-duration="1"
                                        data-iq-delay="1"
                                        data-iq-trigger="scroll"
                                        data-iq-ease="none"
                                        />
                                        </div>
                                        <div className="d-flex align-items-center profile-content">
                                        <div>
                                            <h6 className="mb-1 heading-title fw-bolder">Italian Pizza</h6>
                                            <span className="d-flex align-items-center "><svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="0.875" y="2.05469" width="1.66667" height="10" rx="0.833333" transform="rotate(-45 0.875 2.05469)" fill="#EA6A12"/>
                                                <rect x="2.05469" y="9.125" width="1.66666" height="10" rx="0.833332" transform="rotate(-135 2.05469 9.125)" fill="#EA6A12"/>
                                                </svg><small className="text-dark ms-1">1</small>
                                            </span>
                                        </div>
                                        </div>
                                        <div className="me-4 text-end">
                                        <span className="mb-1">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M19.6449 9.48924C19.6449 9.55724 19.112 16.298 18.8076 19.1349C18.6169 20.8758 17.4946 21.9318 15.8111 21.9618C14.5176 21.9908 13.2514 22.0008 12.0055 22.0008C10.6829 22.0008 9.38936 21.9908 8.1338 21.9618C6.50672 21.9228 5.38342 20.8458 5.20253 19.1349C4.88936 16.288 4.36613 9.55724 4.35641 9.48924C4.34668 9.28425 4.41281 9.08925 4.54703 8.93126C4.67929 8.78526 4.86991 8.69727 5.07026 8.69727H18.9408C19.1402 8.69727 19.3211 8.78526 19.464 8.93126C19.5973 9.08925 19.6644 9.28425 19.6449 9.48924" fill="#E60A0A"/>
                                            <path d="M21 5.97686C21 5.56588 20.6761 5.24389 20.2871 5.24389H17.3714C16.7781 5.24389 16.2627 4.8219 16.1304 4.22692L15.967 3.49795C15.7385 2.61698 14.9498 2 14.0647 2H9.93624C9.0415 2 8.26054 2.61698 8.02323 3.54595L7.87054 4.22792C7.7373 4.8219 7.22185 5.24389 6.62957 5.24389H3.71385C3.32386 5.24389 3 5.56588 3 5.97686V6.35685C3 6.75783 3.32386 7.08982 3.71385 7.08982H20.2871C20.6761 7.08982 21 6.75783 21 6.35685V5.97686Z" fill="#E60A0A"/>
                                            </svg>
                                        </span>
                                        <p className="mb-0 text-dark">$7.49</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-pill bg-soft-primary iq-my-cart">
                                    <div className="d-flex align-items-center justify-content-between profile-img4 mt-4">
                                        <div className="profile-img11">
                                        <img src={lay11} className="img-fluid rounded-pill avatar-115 blur-shadow position-end" alt="img"/>
                                        <img src={lay11} className="img-fluid rounded-pill avatar-115"  alt="img"
                                        data-iq-gsap="onStart"
                                        data-iq-opacity="0"
                                        data-iq-scale=".6"
                                        data-iq-rotate="180"
                                        data-iq-duration="1"
                                        data-iq-delay="1"
                                        data-iq-trigger="scroll"
                                        data-iq-ease="none"
                                        />
                                        </div>
                                        <div className="d-flex align-items-center profile-content">
                                        <div>
                                            <h6 className="mb-1 heading-title fw-bolder">Sausage Pizza</h6>
                                            <span className="d-flex align-items-center "><svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="0.875" y="2.05469" width="1.66667" height="10" rx="0.833333" transform="rotate(-45 0.875 2.05469)" fill="#EA6A12"/>
                                                <rect x="2.05469" y="9.125" width="1.66666" height="10" rx="0.833332" transform="rotate(-135 2.05469 9.125)" fill="#EA6A12"/>
                                                </svg><small className="text-dark ms-1">1</small>
                                            </span>
                                        </div>
                                        </div>
                                        <div className="me-4 text-end">
                                        <span className="mb-1">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M19.6449 9.48924C19.6449 9.55724 19.112 16.298 18.8076 19.1349C18.6169 20.8758 17.4946 21.9318 15.8111 21.9618C14.5176 21.9908 13.2514 22.0008 12.0055 22.0008C10.6829 22.0008 9.38936 21.9908 8.1338 21.9618C6.50672 21.9228 5.38342 20.8458 5.20253 19.1349C4.88936 16.288 4.36613 9.55724 4.35641 9.48924C4.34668 9.28425 4.41281 9.08925 4.54703 8.93126C4.67929 8.78526 4.86991 8.69727 5.07026 8.69727H18.9408C19.1402 8.69727 19.3211 8.78526 19.464 8.93126C19.5973 9.08925 19.6644 9.28425 19.6449 9.48924" fill="#E60A0A"/>
                                            <path d="M21 5.97686C21 5.56588 20.6761 5.24389 20.2871 5.24389H17.3714C16.7781 5.24389 16.2627 4.8219 16.1304 4.22692L15.967 3.49795C15.7385 2.61698 14.9498 2 14.0647 2H9.93624C9.0415 2 8.26054 2.61698 8.02323 3.54595L7.87054 4.22792C7.7373 4.8219 7.22185 5.24389 6.62957 5.24389H3.71385C3.32386 5.24389 3 5.56588 3 5.97686V6.35685C3 6.75783 3.32386 7.08982 3.71385 7.08982H20.2871C20.6761 7.08982 21 6.75783 21 6.35685V5.97686Z" fill="#E60A0A"/>
                                            </svg>
                                        </span>
                                        <p className="mb-0 text-dark">$7.49</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-pill bg-soft-primary iq-my-cart">
                                    <div className="d-flex align-items-center justify-content-between profile-img4 mt-4">
                                        <div className="profile-img11">
                                        <img src={lay13} className="img-fluid rounded-pill avatar-115 blur-shadow position-end" alt="img"/>
                                        <img src={lay13} className="img-fluid rounded-pill avatar-115"  alt="img"
                                        data-iq-gsap="onStart"
                                        data-iq-opacity="0"
                                        data-iq-scale=".6"
                                        data-iq-rotate="180"
                                        data-iq-duration="1"
                                        data-iq-delay="1"
                                        data-iq-trigger="scroll"
                                        data-iq-ease="none"
                                        />
                                        </div>
                                        <div className="d-flex align-items-center profile-content">
                                        <div>
                                            <h6 className="mb-1 heading-title fw-bolder">Cheese Pizza</h6>
                                            <span className="d-flex align-items-center "><svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="0.875" y="2.05469" width="1.66667" height="10" rx="0.833333" transform="rotate(-45 0.875 2.05469)" fill="#EA6A12"/>
                                                <rect x="2.05469" y="9.125" width="1.66666" height="10" rx="0.833332" transform="rotate(-135 2.05469 9.125)" fill="#EA6A12"/>
                                                </svg><small className="text-dark ms-1">1</small>
                                            </span>
                                        </div>
                                        </div>
                                        <div className="me-4 text-end">
                                        <span className="mb-1">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M19.6449 9.48924C19.6449 9.55724 19.112 16.298 18.8076 19.1349C18.6169 20.8758 17.4946 21.9318 15.8111 21.9618C14.5176 21.9908 13.2514 22.0008 12.0055 22.0008C10.6829 22.0008 9.38936 21.9908 8.1338 21.9618C6.50672 21.9228 5.38342 20.8458 5.20253 19.1349C4.88936 16.288 4.36613 9.55724 4.35641 9.48924C4.34668 9.28425 4.41281 9.08925 4.54703 8.93126C4.67929 8.78526 4.86991 8.69727 5.07026 8.69727H18.9408C19.1402 8.69727 19.3211 8.78526 19.464 8.93126C19.5973 9.08925 19.6644 9.28425 19.6449 9.48924" fill="#E60A0A"/>
                                            <path d="M21 5.97686C21 5.56588 20.6761 5.24389 20.2871 5.24389H17.3714C16.7781 5.24389 16.2627 4.8219 16.1304 4.22692L15.967 3.49795C15.7385 2.61698 14.9498 2 14.0647 2H9.93624C9.0415 2 8.26054 2.61698 8.02323 3.54595L7.87054 4.22792C7.7373 4.8219 7.22185 5.24389 6.62957 5.24389H3.71385C3.32386 5.24389 3 5.56588 3 5.97686V6.35685C3 6.75783 3.32386 7.08982 3.71385 7.08982H20.2871C20.6761 7.08982 21 6.75783 21 6.35685V5.97686Z" fill="#E60A0A"/>
                                            </svg>
                                        </span>
                                        <p className="mb-0 text-dark">$7.49</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mt-5">
                                    <Link type="button" to="/special-pages/add-to-cart" className="btn btn-primary rounded-pill">Checkout</Link>
                                </div>   
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col md="12" lg="12">
                            <Card className="rounded border border-white">
                            <div className="card-header bg-transparent"
                            data-iq-gsap="onStart"
                            data-iq-opacity="0"
                            data-iq-position-y="-40"
                            data-iq-duration=".6"
                            data-iq-delay="1"
                            data-iq-trigger="scroll"
                            data-iq-ease="none"
                            >
                                <div className="d-flex justify-content-between align-items-center list-main">
                                    <h4>Categories</h4>
                                    <div className="d-flex">
                                        <Link to="#" className="text-dark d-flex">View All
                                        <svg width="24" height="24"  className="ms-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="24" height="24" rx="12" fill="#EA6A12"/>
                                            <path d="M10.25 8.5L13.75 12L10.25 15.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <Card.Body>
                                <div className="iq-col-masonry m-0" 
                                data-iq-gsap="onStart"
                                data-iq-opacity="0"
                                data-iq-position-y="-40"
                                data-iq-duration=".6"
                                data-iq-delay="1"
                                data-iq-trigger="scroll"
                                data-iq-ease="none">
                                    <button type="button" className="btn btn-outline-primary rounded iq-col-masonry-block">Burgers</button>
                                    <button type="button" className="btn btn-outline-primary rounded iq-col-masonry-block">Pizza</button>
                                    <button type="button" className="btn btn-outline-primary rounded iq-col-masonry-block">Soup</button>
                                    <button type="button" className="btn btn-outline-primary rounded iq-col-masonry-block">Dessert</button>
                                    <button type="button" className="btn btn-outline-primary rounded iq-col-masonry-block">Dessert</button>
                                    <button type="button" className="btn btn-outline-primary rounded iq-col-masonry-block">Biscuits</button>
                                    <button type="button" className="btn btn-outline-primary rounded iq-col-masonry-block"> cheese</button>
                                    <button type="button" className="btn btn-outline-primary rounded iq-col-masonry-block"> cheese</button>
                                    <button type="button" className="btn btn-outline-primary rounded iq-col-masonry-block">Tomato soup</button>
                                    <button type="button" className="btn btn-outline-primary rounded iq-col-masonry-block">Chicken fingers</button>
                                    <button type="button" className="btn btn-outline-primary rounded iq-col-masonry-block">Chicken </button>
                                    <button type="button" className="btn btn-outline-primary rounded iq-col-masonry-block">nuggets</button>
                                    <button type="button" className="btn btn-outline-primary rounded iq-col-masonry-block">Flatbread pizza</button>
                                    <button type="button" className="btn btn-outline-primary rounded iq-col-masonry-block">Soup</button>
                                    <button type="button" className="btn btn-outline-primary rounded iq-col-masonry-block">Flatbread pizza</button>
                                    <button type="button" className="btn btn-outline-primary rounded iq-col-masonry-block">cheese</button>
                                    <button type="button" className="btn btn-outline-primary rounded iq-col-masonry-block">Mini burgers</button>
                                    <button type="button" className="btn btn-outline-primary rounded iq-col-masonry-block">Mini burgers</button>
                                    <button type="button" className="btn btn-outline-primary rounded iq-col-masonry-block">Mini pizzas</button>
                                    <button type="button" className="btn btn-outline-primary rounded iq-col-masonry-block">Grilled Cheese</button>
                                    <button type="button" className="btn btn-outline-primary rounded iq-col-masonry-block">Grilled </button>
                                    <button type="button" className="btn btn-outline-primary rounded iq-col-masonry-block">Veggie Grill’s</button>
                                    <button type="button" className="btn btn-outline-primary rounded iq-col-masonry-block">Sandwich</button>
                                </div>
                            </Card.Body>
                            </Card>
                            <div className="position-relative">
                                <img src={lay40} alt="img-1" className="img-fluid img-user"/>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default Index

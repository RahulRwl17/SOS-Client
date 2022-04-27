import React,{useState} from 'react'
// import { Row,Col } from 'react-bootstrap'
// import {Link} from 'react-router-dom'
import Card from '../../../components/card'

const OrderH  = (props) => {
    const [show, setShow] = useState('');    
    // const [show1, setShow1] = useState('');
    return (
        <>
            <Card className="order-history-card">
                <Card.Body>
                    <div className="d-flex align-items-center justify-content-between mb-5">
                        <div>
                            <h6 className="heading-title mb-2">{props.orderId}</h6>
                            <p className="mb-0">{props.dateTime}</p>
                        </div>
                        <img src={props.orderUser} className="img-fluid rounded-pill avatar-50" alt=""/>
                    </div>
                    <div className="d-flex">
                        <img src={props.orderImage1} className="img-fluid rounded-pill avatar-60" alt=""/>
                        <div className="ms-4 order-history">
                            <h6 className="mb-2 heading-title fw-bolder">{props.orderTitle1}</h6>
                            <p>{props.orderText1}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <h6 className="heading-title fw-bolder">{props.orderTitle2}</h6>
                                <h6 className="heading-title fw-bolder">{props.orderTitle3}</h6>
                            </div>
                            <hr className="my-4"/>
                        </div>
                    </div>
                    <div className="d-flex">
                        <img src={props.orderImage2} className="img-fluid rounded-pill avatar-60" alt=""/>
                        <div className="ms-4">
                            <h6 className="mb-2 heading-title fw-bolder">{props.orderTitle4}</h6>
                            <p>{props.orderText2}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <h6 className="heading-title fw-bolder">{props.orderTitle5}</h6>
                                <h6 className="heading-title fw-bolder">{props.orderTitle6}</h6>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <p className="mb-0">{props.orderText3}</p>
                            <h6 className="heading-title fw-bolder">{props.orderTitle7}</h6>
                        </div>
                        <div className="d-flex align-items-center" id={`action- ${props.id}`}>
                            <button className={`btn btn-icon btn-outline-success rounded ctc-button ${show === 'A' ? 'd-block checked' : '' || show === 'B' ? 'd-none' : '' }`} onClick={() => setShow('A')} data-action="click" data-closest="#action-{{id}}" data-status="complete">
                                <span className="btn-inner d-flex align-items-center">
                                    <span>
                                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.667969 4.09434L3.93567 7.33366L10.668 0.666992" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </span>
                                    <span className="status pe-2">Completed</span>
                                </span>
                            </button>
                            <button className={`btn btn-icon btn-outline-danger rounded ctc-button ms-3 ${show === 'B' ? 'd-block checked' : '' || show ==='A'? 'd-none': ''}`} onClick={() => setShow('B')} data-action="click" data-closest="#action-{{id}}" data-status="reject">
                                <span className="btn-inner d-flex align-items-center">
                                    <span>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.6654 5.33496L5.33203 10.6683" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M10.6643 10.6663L5.33203 5.33301" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </span>
                                    <span className="status pe-2">Rejected</span>
                                </span>
                            </button>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}

export default OrderH;
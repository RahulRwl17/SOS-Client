import React from 'react'
import {Row,Col} from 'react-bootstrap'
import Card from '../../../components/card'
import {Link} from 'react-router-dom'


import Progress from '../../../components/progress.js'


import avat06 from '../../../assets/images/avatars/06.png'
import avat07 from '../../../assets/images/avatars/07.png'
import avat08 from '../../../assets/images/avatars/08.png'
import avat09 from '../../../assets/images/avatars/09.png'
import avat10 from '../../../assets/images/avatars/10.png'

const BootstrapTable = () => {
    return (
      <>
         <Row>
            <Col sm="12">
               <Card>
                  <Card.Header className="d-flex justify-content-between border-0">
                     <Card.Header.Title>
                        <h4 className="card-title">Basic Table</h4>
                     </Card.Header.Title>
                  </Card.Header>
                  <Card.Body className="p-0">
                     <div className="table-responsive">
                        <table id="basic-table" className="table table-striped table-shadow mb-0" role="grid">
                           <thead className="border-0">
                              <tr>
                                 <th>Companies</th>
                                 <th>Members</th>
                                 <th>Budget</th>
                                 <th>Status</th>
                                 <th>Completion</th>
                              </tr>
                           </thead>
                           <tbody>
                              <tr>
                                 <td>
                                    <div className="d-flex align-items-center">
                                       <img className="rounded img-fluid avatar-40 me-3 bg-soft-primary"
                                          src={avat06} alt="profile"/>
                                       <h6>Soft UI XD Version</h6>
                                    </div>
                                 </td>
                                 <td>
                                    <div className="iq-media-group iq-media-group-1">
                                          <Link to="#" className="iq-media-1">
                                             <div className="icon iq-icon-box-3 rounded-pill">SP</div>
                                          </Link>
                                          <Link to="#" className="iq-media-1">
                                             <div className="icon iq-icon-box-3 rounded-pill">PP</div>
                                          </Link>
                                          <Link to="#" className="iq-media-1">
                                             <div className="icon iq-icon-box-3 rounded-pill">MM</div>
                                          </Link>
                                       </div>
                                 </td>
                                 <td>$14000</td>
                                 <td><div className="text-info">Pending</div></td>
                                 <td>
                                    <div className="d-flex align-items-center mb-2">
                                       <h6>60%</h6>
                                    </div>
                                    <Progress softcolors="info" color="info" className="shadow-none w-100" value={60} minvalue={0} maxvalue={100} style={{height: "6px"}} />
                                 </td>
                              </tr>
                              <tr>
                                 <td>
                                    <div className="d-flex align-items-center">
                                       <img className="rounded img-fluid avatar-40 me-3 bg-soft-primary"
                                          src={avat07} alt="profile"/>
                                       <h6>Add Progress Track</h6>
                                    </div>
                                 </td>
                                 <td>
                                    <div className="iq-media-group iq-media-group-1">
                                          <Link to="#" className="iq-media-1">
                                             <div className="icon iq-icon-box-3 rounded-pill">SP</div>
                                          </Link>
                                          <Link to="#" className="iq-media-1">
                                             <div className="icon iq-icon-box-3 rounded-pill">PP</div>
                                          </Link>
                                       </div>
                                 </td>
                                 <td>$3000</td>
                                 <td><div className="text-danger">Pending</div></td>
                                 <td>
                                    <div className="d-flex align-items-center mb-2">
                                       <h6>10%</h6>
                                    </div>
                                    <Progress className="shadow-none w-100" softcolors="danger" color="danger" value={10} minvalue={0} maxvalue={100}style={{height: "6px"}}/>
                                 </td>
                              </tr>
                              <tr>
                                 <td>
                                    <div className="d-flex align-items-center">
                                       <img className="rounded img-fluid avatar-40 me-3 bg-soft-primary"
                                          src={avat08} alt="profile"/>
                                       <h6>Fix Platform Errors</h6>
                                    </div>
                                 </td>
                                 <td>
                                    <div className="iq-media-group iq-media-group-1">
                                          <Link to="#" className="iq-media-1">
                                             <div className="icon iq-icon-box-3 rounded-pill">SP</div>
                                          </Link>
                                          <Link to="#" className="iq-media-1">
                                             <div className="icon iq-icon-box-3 rounded-pill">PP</div>
                                          </Link>
                                       </div>
                                 </td>
                                 <td>Not set</td>
                                 <td><div className="text-success">Completed</div></td>
                                 <td>
                                    <div className="d-flex align-items-center mb-2">
                                       <h6>100%</h6>
                                    </div>
                                    <Progress softcolors="success" color="success" className="shadow-none w-100" value={100} minvalue={0} maxvalue={100} style={{height: "6px"}} />
                                 </td>
                              </tr>
                              <tr>
                                 <td>
                                    <div className="d-flex align-items-center">
                                       <img className="rounded img-fluid avatar-40 me-3 bg-soft-primary"
                                          src={avat09} alt="profile"/>
                                       <h6>Launch Our Mobile App</h6>
                                    </div>
                                 </td>
                                 <td>
                                    <div className="iq-media-group iq-media-group-1">
                                          <Link to="#" className="iq-media-1">
                                             <div className="icon iq-icon-box-3 rounded-pill">SP</div>
                                          </Link>
                                          <Link to="#" className="iq-media-1">
                                             <div className="icon iq-icon-box-3 rounded-pill">PP</div>
                                          </Link>
                                          <Link to="#" className="iq-media-1">
                                             <div className="icon iq-icon-box-3 rounded-pill">AP</div>
                                          </Link>
                                          <Link to="#" className="iq-media-1">
                                             <div className="icon iq-icon-box-3 rounded-pill">DP</div>
                                          </Link>
                                       </div>
                                 </td>
                                 <td>$20500</td>
                                 <td><div className="text-success">Completed</div></td>
                                 <td>
                                    <div className="d-flex align-items-center mb-2">
                                       <h6>100%</h6>
                                    </div>
                                    <Progress softcolors="success" color="success" className="shadow-none w-100" value={100} minvalue={0} maxvalue={100} style={{height: "6px"}} />
                                 </td>
                              </tr>
                              <tr>
                                 <td>
                                    <div className="d-flex align-items-center">
                                       <img className="rounded img-fluid avatar-40 me-3 bg-soft-primary"
                                          src={avat10} alt="profile"/>
                                       <h6>Add the New Pricing Page</h6>
                                    </div>
                                 </td>
                                 <td>
                                    <div className="iq-media-group iq-media-group-1">
                                          <Link to="#" className="iq-media-1">
                                             <div className="icon iq-icon-box-3 rounded-pill">SP</div>
                                          </Link>
                                       </div>
                                 </td>
                                 <td>$500</td>
                                 <td><div className="text-primary">On Schedule</div></td>
                                 <td>
                                    <div className="d-flex align-items-center mb-2">
                                       <h6>25%</h6>
                                    </div>
                                    <Progress softcolors="primary" color="primary" className="shadow-none w-100" value={25} minvalue={0} maxvalue={100} style={{height: "6px"}} />
                                 </td>
                              </tr>
                              <tr>
                                 <td>
                                    <div className="d-flex align-items-center">
                                       <img className="rounded img-fluid avatar-40 me-3 bg-soft-primary"
                                          src={avat06} alt="profile"/>
                                       <h6>Redesign New Online Shop</h6>
                                    </div>
                                 </td>
                                 <td>
                                    <div className="iq-media-group iq-media-group-1">
                                          <Link to="#" className="iq-media-1">
                                             <div className="icon iq-icon-box-3 rounded-pill">SP</div>
                                          </Link>
                                          <Link to="#" className="iq-media-1">
                                             <div className="icon iq-icon-box-3 rounded-pill">PP</div>
                                          </Link>
                                       </div>
                                 </td>
                                 <td>$2000</td>
                                 <td><div className="text-warning">Completed</div></td>
                                 <td>
                                    <div className="d-flex align-items-center mb-2">
                                       <h6>40%</h6>
                                    </div>
                                    <Progress softcolors="warning" color="warning" className="shadow-none w-100" value={40} minvalue={0} maxvalue={100} style={{height: "6px"}} />
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
         </Row>
      </>
   )
}

export default BootstrapTable

import React from 'react';
import { Container, Col, Row, Card } from 'react-bootstrap'

const HelperClasses = () => {
    return (
      <>
         <Container fluid>
            <Row>
            <Col lg="4" md="6">
               <Card className="card-block card-stretch card-height">
                  <Card.Header className="d-flex justify-content-between">
                     <div className="header-title">
                        <h4 className="card-title">Padding</h4>
                     </div>
                  </Card.Header>
                  <Card.Body> 
                     <pre className="iq-helper-classes m-0">
{`.p-0 { padding: 0 !important; }
.p-1 { padding: .25rem !important; }
.p-2 { padding: .5rem !important; }
.p-3 { padding: 1rem !important; }
.p-4 { padding: 1.5rem !important; }
.p-5 { padding: 2rem !important; }
`}                        
                     </pre>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="4" md="6">
               <Card className="card-block card-stretch card-height">
                  <Card.Header className="d-flex justify-content-between">
                     <div className="header-title">
                        <h4 className="card-title">Padding Left</h4>
                     </div>
                  </Card.Header>
                  <Card.Body>
                     <pre className="iq-helper-classes m-0">
{`.ps-0 { padding: 0 !important; }
.ps-1 { padding: .25rem !important; }
.ps-2 { padding: .5rem !important; }
.ps-3 { padding: 1rem !important; }
.ps-4 { padding: 1.5rem !important; }
.ps-5 { padding: 2rem !important; } `}
                     </pre>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="4" md="6">
               <Card className="card-block card-stretch card-height">
                  <Card.Header className=" d-flex justify-content-between">
                     <div className="header-title">
                        <h4 className="card-title">Padding right</h4>
                     </div>
                  </Card.Header>
                  <Card.Body> 
                     <pre className="iq-helper-classes m-0">
{`.pe-0 { padding: 0 !important; }
.pe-1 { padding: .25rem !important; }
.pe-2 { padding: .5rem !important; }
.pe-3 { padding: 1rem !important; }
.pe-4 { padding: 1.5rem !important; }
.pe-5 { padding: 2rem !important; }
`}                      
                     </pre>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="4" md="6">
               <Card className="card-block card-stretch card-height">
                  <Card.Header className="card-header d-flex justify-content-between">
                     <div className="header-title">
                        <h4 className="card-title">Padding Top</h4>
                     </div>
                  </Card.Header>
                  <Card.Body > 
                     <pre className="iq-helper-classes m-0">
{`.pt-0 { padding: 0 !important; }
.pt-1 { padding: .25rem !important; }
.pt-2 { padding: .5rem !important; }
.pt-3 { padding: 1rem !important; }
.pt-4 { padding: 1.5rem !important; }
.pt-5 { padding: 2rem !important; }
`}
                     </pre>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="4" md="6">
               <Card className="card-block card-stretch card-height">
                  <Card.Header className="card-header d-flex justify-content-between">
                     <div className="header-title">
                        <h4 className="card-title">Padding Bottom</h4>
                     </div>
                  </Card.Header>
                  <Card.Body > 
                     <pre className="iq-helper-classes m-0">
{`.pb-0 { padding: 0 !important; }
.pb-1 { padding: .25rem !important; }
.pb-2 { padding: .5rem !important; }
.pb-3 { padding: 1rem !important; }
.pb-4 { padding: 1.5rem !important; }
.pb-5 { padding: 2rem !important; }
`}
                     </pre>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="4" md="6">
               <Card className="card-block card-stretch card-height">
                  <Card.Header className="card-header d-flex justify-content-between">
                     <div className="header-title">
                        <h4 className="card-title">Margin</h4>
                     </div>
                  </Card.Header>
                  <Card.Body > 
                     <pre className="iq-helper-classes mb-0">
{`.m-0 { margin: 0 !important; }
.m-1 { margin: .25rem !important; }
.m-2 { margin: .5rem !important; }
.m-3 { margin: 1rem !important; }
.m-4 { margin: 1.5rem !important; }
.m-5 { margin: 2rem !important; }
`}
                     </pre>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="4" md="6">
               <Card className="card-block card-stretch card-height">
                  <Card.Header className="card-header d-flex justify-content-between">
                     <div className="header-title">
                        <h4 className="card-title">Margin Left</h4>
                     </div>
                  </Card.Header>
                  <Card.Body > 
                     <pre className="iq-helper-classes m-0">
{`.ms-0 { margin: 0 !important; }
.ms-1 { margin: .25rem !important; }
.ms-2 { margin: .5rem !important; }
.ms-3 { margin: 1rem !important; }
.ms-4 { margin: 1.5rem !important; }
.ms-5 { margin: 2rem !important; }
`}
                     </pre>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="4" md="6">
               <Card className="card-block card-stretch card-height">
                  <Card.Header className="card-header d-flex justify-content-between">
                     <div className="header-title">
                        <h4 className="card-title">Margin Right</h4>
                     </div>
                  </Card.Header>
                  <Card.Body > 
                     <pre className="iq-helper-classes m-0">
{`.me-0 { margin: 0 !important; }
.me-1 { margin: .25rem !important; }
.me-2 { margin: .5rem !important; }
.me-3 { margin: 1rem !important; }
.me-4 { margin: 1.5rem !important; }
.me-5 { margin: 2rem !important; }
`}
                     </pre>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="4" md="6">
               <Card className="card-block card-stretch card-height">
                  <Card.Header className="card-header d-flex justify-content-between">
                     <div className="header-title">
                        <h4 className="card-title">Margin Top</h4>
                     </div>
                  </Card.Header>
                  <Card.Body > 
                     <pre className="iq-helper-classes m-0">
{`.mt-0 { margin: 0 !important; }
.mt-1 { margin: .25rem !important; }
.mt-2 { margin: .5rem !important; }
.mt-3 { margin: 1rem !important; }
.mt-4 { margin: 1.5rem !important; }
.mt-5 { margin: 2rem !important; }
`}
                     </pre>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="4" md="6">
               <Card className="card-block card-stretch card-height">
                  <Card.Header className="card-header d-flex justify-content-between">
                     <div className="header-title">
                        <h4 className="card-title">Margin Bottom</h4>
                     </div>
                  </Card.Header>
                  <Card.Body > 
                     <pre className="iq-helper-classes m-0">
{`.mb-0 { margin: 0 !important; }
.mb-1 { margin: .25rem !important; }
.mb-2 { margin: .5rem !important; }
.mb-3 { margin: 1rem !important; }
.mb-4 { margin: 1.5rem !important; }
.mb-5 { margin: 2rem !important; }
`}
                     </pre>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="4" md="6">
               <Card className="card-block card-stretch card-height">
                  <Card.Header className="card-header d-flex justify-content-between">
                     <div className="header-title">
                        <h4 className="card-title">Display Block</h4>
                     </div>
                  </Card.Header>
                  <Card.Body > 
                     <pre className="iq-helper-classes m-0">
{`.d-block { display: block !important; }
.d-inline-block { display: inline-block !important; }
.d-flex { display: display-flex !important; }
`}
                     </pre>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="4" md="6">
               <Card className="card-block card-stretch card-height">
                  <Card.Header className="card-header d-flex justify-content-between">
                     <div className="header-title">
                        <h4 className="card-title">Alignment Item</h4>
                     </div>
                  </Card.Header>
                  <Card.Body > 
                     <pre className="iq-helper-classes m-0">
{`.text-center { text-align: center; }
.text-start { text-align: left; }
.text-end { text-align: right; }
.float-start { float: left; }
.float-end { float: right; }
.float-none { float: none; }
`}
                     </pre>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="6" md="6">
               <Card className="card-block card-stretch card-height">
                  <Card.Header className="card-header d-flex justify-content-between">
                     <div className="header-title">
                        <h4 className="card-title">Text Color</h4>
                     </div>
                  </Card.Header>
                  <Card.Body > 
                     <pre className="iq-helper-classes m-0">
{`.text-primary { --bs-text-opacity: 1; 
            color: rgba(var(--bs-primary-rgb), var(--bs-text-opacity)) !important; 
         }
.text-secondary { --bs-text-opacity: 1; 
            color: rgba(var(--bs-secondary-rgb), var(--bs-text-opacity)) !important; 
         }
.text-success { --bs-text-opacity: 1; 
            color: rgba(var(--bs-success-rgb), var(--bs-text-opacity)) !important; 
         }
.text-danger { --bs-text-opacity: 1; 
            color: rgba(var(--bs-danger-rgb), var(--bs-text-opacity)) !important; 
         }
.text-warning { --bs-text-opacity: 1; 
            color: rgba(var(--bs-warning-rgb), var(--bs-text-opacity)) !important; 
         }
.text-info { --bs-text-opacity: 1; 
            color: rgba(var(--bs-info-rgb), var(--bs-text-opacity)) !important; 
         }
.text-light { --bs-text-opacity: 1; 
            color: rgba(var(--bs-light-rgb), var(--bs-text-opacity)) !important; 
         }
.text-dark { --bs-text-opacity: 1; 
            color: rgba(var(--bs-dark-rgb), var(--bs-text-opacity)) !important; 
         }
.text-white { --bs-text-opacity: 1; 
            color: rgba(var(--bs-white-rgb), var(--bs-text-opacity)) !important; 
         }
.text-black { --bs-text-opacity: 1; 
            color: rgba(var(--bs-black-rgb), var(--bs-text-opacity)) !important; 
         }
.text-body { --bs-text-opacity: 1; 
            color: rgba(var(--bs-body-text-rgb), var(--bs-text-opacity)) !important; 
         }
.text-title { --bs-text-opacity: 1; 
            color: rgba(var(--bs-body-text-rgb), var(--bs-text-opacity)) !important; 
         }
`}            
                     </pre>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="6" md="6">
               <Card className="card-block card-stretch card-height">
                  <Card.Header className="card-header d-flex justify-content-between">
                     <div className="header-title">
                        <h4 className="card-title">Background Color</h4>
                     </div>
                  </Card.Header>
                  <Card.Body > 
                     <pre className="iq-helper-classes m-0">
{`.bg-primary {
--bs-bg-opacity: 1;
background-color: rgba(var(--bs-primary-rgb), var(--bs-bg-opacity)) !important;
}

.bg-secondary {
--bs-bg-opacity: 1;
background-color: rgba(var(--bs-secondary-rgb), var(--bs-bg-opacity)) !important;
}

.bg-success {
--bs-bg-opacity: 1;
background-color: rgba(var(--bs-success-rgb), var(--bs-bg-opacity)) !important;
}

.bg-danger {
--bs-bg-opacity: 1;
background-color: rgba(var(--bs-danger-rgb), var(--bs-bg-opacity)) !important;
}

.bg-warning {
--bs-bg-opacity: 1;
background-color: rgba(var(--bs-warning-rgb), var(--bs-bg-opacity)) !important;
}

.bg-info {
--bs-bg-opacity: 1;
background-color: rgba(var(--bs-info-rgb), var(--bs-bg-opacity)) !important;
}

.bg-light {
--bs-bg-opacity: 1;
background-color: rgba(var(--bs-light-rgb), var(--bs-bg-opacity)) !important;
}

.bg-dark {
--bs-bg-opacity: 1;
background-color: rgba(var(--bs-dark-rgb), var(--bs-bg-opacity)) !important;
}
`}
                     </pre>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="6" md="6">
               <Card className="card-block card-stretch card-height">
                  <Card.Header className="card-header d-flex justify-content-between">
                     <div className="header-title">
                        <h4 className="card-title">Light Background Color</h4>
                     </div>
                  </Card.Header>
                  <Card.Body> 
                     <pre className="iq-helper-classes m-0">
{`.bg-soft-primary {
color: #d35f10;
background-color: rgba(234,106,18,0.2) !important;
}

.bg-soft-secondary {
color: #868986;
background-color: rgba(149,152,149,0.2) !important;
}

.bg-soft-success {
color: #35a571;
background-color: rgba(59,183,126,0.2) !important;
}

.bg-soft-danger {
color: #d31010;
background-color: rgba(234,18,18,0.2) !important;
}

.bg-soft-warning {
color: #d39e10;
background-color: rgba(234,176,18,0.2) !important;
}

.bg-soft-info {
color: #10b9d3;
background-color: rgba(18,205,234,0.2) !important;
}

.bg-soft-dark {
color: #1e2125;
background-color: rgba(33,37,41,0.2) !important;
}
`}
                     </pre>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="6" md="6">
               <Card className="card-block card-stretch card-height">
                  <Card.Header className="card-header d-flex justify-content-between">
                     <div className="header-title">
                        <h4 className="card-title">Button Color</h4>
                     </div>
                  </Card.Header>
                  <Card.Body > 
                     <pre className="iq-helper-classes m-0">
{`.btn-primary {
color: #fff;
background-color: #EA6A12;
border-color: #EA6A12;
}

.btn-secondary {
color: #fff;
background-color: #959895;
border-color: #959895;
}

.btn-success {
color: #fff;
background-color: #3BB77E;
border-color: #3BB77E;
}

.btn-danger {
color: #fff;
background-color: #EA1212;
border-color: #EA1212;
}

.btn-warning {
color: #000;
background-color: #EAB012;
border-color: #EAB012;
}

.btn-info {
color: #000;
background-color: #12CDEA;
border-color: #12CDEA;
}

.btn-dark {
color: #fff;
background-color: #212529;
border-color: #212529;
}
`}
                     </pre>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="6" md="6">
               <Card className="card-block card-stretch card-height">
                  <Card.Header className="card-header d-flex justify-content-between">
                     <div className="header-title">
                        <h4 className="card-title">Button Hover Color</h4>
                     </div>
                  </Card.Header>
                  <Card.Body > 
                     <pre className="iq-helper-classes m-0">
{`   .btn-primary:hover {
color: #fff;
background-color: #c75a0f;
border-color: #bb550e;
}

.btn-secondary:hover {
color: #fff;
background-color: #7f817f;
border-color: #777a77;
}

.btn-success:hover {
color: #fff;
background-color: #329c6b;
border-color: #2f9265;
}

.btn-danger:hover {
color: #fff;
background-color: #c70f0f;
border-color: #bb0e0e;
}

.btn-warning:hover {
color: #000;
background-color: #edbc36;
border-color: #ecb82a;
}

.btn-info:hover {
color: #000;
background-color: #36d5ed;
border-color: #2ad2ec;
}

.btn-light:hover {
color: #000;
background-color: #e3e6ea;
border-color: #e1e5e9;
}

.btn-dark:hover {
color: #fff;
background-color: #1c1f23;
border-color: #1a1e21;
}
`}
                     </pre>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="6" md="6">
               <Card className="card-block card-stretch card-height">
                  <Card.Header className="card-header d-flex justify-content-between">
                     <div className="header-title">
                        <h4 className="card-title">Border Color</h4>
                     </div>
                  </Card.Header>
                  <Card.Body > 
                     <pre className="iq-helper-classes m-0">
{`.border-primary {
border-color: var(--bs-primary) !important;
}

.border-secondary {
border-color: var(--bs-secondary) !important;
}

.border-success {
border-color: var(--bs-success) !important;
}

.border-danger {
border-color: var(--bs-danger) !important;
}

.border-warning {
border-color: var(--bs-warning) !important;
}

.border-info {
border-color: var(--bs-info) !important;
}

.border-light {
border-color: var(--bs-light) !important;
}

.border-dark {
border-color: var(--bs-dark) !important;
}

.border-white {
border-color: var(--bs-white) !important;
}
`}
                     </pre>
                  </Card.Body>
               </Card>
            </Col>
            </Row>
         </Container>
      </>
   )
}
export default HelperClasses
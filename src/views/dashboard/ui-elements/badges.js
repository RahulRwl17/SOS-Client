import {React} from 'react'
import { Col,Container,Row,Badge,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Card from '../../../components/card'

const Badges = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Container fluid>
                        <Row>
                            <Col sm ="12" lg="6">
                                <Card>
                                <Card.Header>
                                    <Card.Header.Title>
                                        <h4 className="card-title">Badge</h4>
                                    </Card.Header.Title>
                                </Card.Header>
                                <Card.Body>
                                    <p>Badges scale to match the size of the immediate parent element by using relative font sizing and <code>em</code> units.</p>
                                    <h1 className="mt-2">Example heading <Badge bg="primary">New</Badge></h1>
                                    <h2 className="mt-2">Example heading <Badge bg="secondary">New</Badge></h2>
                                    <h3 className="mt-2">Example heading<Badge bg="success ms-1">New</Badge></h3>
                                    <h4 className="mt-2">Example heading <Badge bg="danger">New</Badge></h4>
                                    <h5 className="mt-2">Example heading <Badge bg="warning">New</Badge></h5>
                                    <h6 className="mb-0">Example heading <Badge bg="info">New</Badge></h6>
                                </Card.Body>
                                </Card>
                                <Card>
                                <Card.Header>
                                    <Card.Header.Title>
                                        <h4 className="card-title">Button Badges</h4>
                                    </Card.Header.Title>
                                </Card.Header>
                                <Card.Body>
                                    <p>Badges can be used as part of buttons to provide a counter.</p>
                                    <Button  variant="primary mt-2">
                                    Notifications <Badge className="ml-2" bg="light" text="dark">4</Badge>
                                    </Button>{' '}
                                    <Button  variant="success mt-2">
                                    Notifications <Badge className="ml-2" bg="light" text="dark">4</Badge>
                                    </Button>{' '}
                                    <Button variant="danger mt-2">
                                    Notifications <Badge className="ml-2" bg="light" text="dark">4</Badge>
                                    </Button>{' '}
                                </Card.Body>
                                </Card>
                                <Card>
                                <Card.Header>
                                    <Card.Header.Title>
                                        <h4 className="card-title">Button Light background Badges</h4>
                                    </Card.Header.Title>
                                </Card.Header>
                                <Card.Body>
                                    <p>Badges can be used as part of buttons to provide a counter.</p>
                                    <Button variant="outline-primary mt-2" >
                                    Notifications <Badge className="ml-2" bg="primary">4</Badge>
                                    </Button>{' '}
                                    <Button variant="outline-success mt-2">
                                    Notifications <Badge className="ml-2" bg="success">4</Badge>
                                    </Button>{' '}
                                    <Button variant="outline-danger mt-2">
                                    Notifications <Badge className="ml-2" bg="danger">4</Badge>
                                    </Button>{' '}
                                </Card.Body>
                                </Card>
                                <Card>
                                <Card.Header>
                                    <Card.Header.Title>
                                        <h4 className="card-title">Button Border Badges</h4>
                                    </Card.Header.Title>
                                </Card.Header>
                                <Card.Body>
                                    <p>Badges can be used as part of buttons to provide a counter.</p>
                                    <Button  variant=" bg-soft-primary mt-2">
                                    Notifications <Badge className="ml-2" bg="primary">4</Badge>
                                    </Button>{' '}
                                    <Button  variant=" bg-soft-success mt-2">
                                    Notifications <Badge className="ml-2" bg="success">4</Badge>
                                    </Button>{' '}
                                    <Button  variant=" bg-soft-danger mt-2">
                                    Notifications <Badge className="ml-2" bg="danger">4</Badge>
                                    </Button>{' '}
                                </Card.Body>
                                </Card>
                            </Col>
                            <Col sm="12" lg='6'>
                                <Card>
                                <Card.Header>
                                    <Card.Header.Title>
                                         <h4 className="card-title">Contextual variations</h4>
                                    </Card.Header.Title>
                                </Card.Header>
                                <Card.Body>
                                    <p className="mb-2">Add any of the below mentioned modifier classes to change the appearance of a badge.</p>
                                    <Badge bg="primary" variant="mt-2 ">Primary</Badge>{' '}
                                    <Badge bg="secondary" variant="mt-2 ">Secondary</Badge>{' '}
                                    <Badge bg="success" variant="mt-2 ">Success</Badge>{' '}
                                    <Badge bg="danger" variant="mt-2 ">Danger</Badge>{' '}
                                    <Badge bg="warning" variant="mt-2 ">Warning</Badge>{' '}
                                    <Badge bg="info" variant= "mt-2 ">Info</Badge>{' '}
                                    <Badge bg="light" variant="mt-2 ">Light</Badge>{' '}
                                    <Badge bg="dark" variant="mt-2 ">Dark</Badge>{' '}
                                    <h5 className="card-title mt-4">Pill badges</h5>
                                    <p className="mb-2">Use the <code>.badge-pill</code> modifier class to make badges more rounded (with a larger <code>border-radius</code> and additional horizontal <code>padding</code>). Useful if you miss the badges from v3.</p>
                                    <Badge pill bg="primary" variant="mt-2 ">Primary</Badge>{' '}
                                    <Badge pill bg="secondary" variant="mt-2 ">Secondary</Badge>{' '}
                                    <Badge pill bg="success" variant="mt-2 ">Success</Badge>{' '}
                                    <Badge pill bg="danger" variant="mt-2 ">Danger</Badge>{' '}
                                    <Badge pill bg="warning" variant="mt-2 ">Warning</Badge>{' '}
                                    <Badge pill bg="info" variant="mt-2 ">Info</Badge>{' '}
                                    <Badge pill bg="light" variant="mt-2 ">Light</Badge>{' '}
                                    <Badge pill bg="dark" variant="mt-2 ">Dark</Badge>{' '}
                                    <h5 className="card-title mt-4">Links</h5>
                                    <p className="mb-2">Using the contextual <code>.badge-*</code> classes on an <code>&lt;a&gt;</code> element quickly provide <em>actionable</em> badges with hover and focus states.</p>
                                    <Link to="/"  onClick={e => e.preventDefault()} className="mt-2 badge badge-primary">Primary</Link>{' '}
                                    <Link to="/"  onClick={e => e.preventDefault()} className="mt-2 badge badge-secondary">Secondary</Link>{' '}
                                    <Link to="/"  onClick={e => e.preventDefault()} className="mt-2 badge badge-success">Success</Link>{' '}
                                    <Link to="/"  onClick={e => e.preventDefault()} className="mt-2 badge badge-danger">Danger</Link>{' '}
                                    <Link to="/"  onClick={e => e.preventDefault()} className="mt-2 badge badge-warning">Warning</Link>{' '}
                                    <Link to="/"  onClick={e => e.preventDefault()} className="mt-2 badge badge-info">Info</Link>{' '}
                                    <Link to="/"  onClick={e => e.preventDefault()} className="mt-2 badge badge-light">Light</Link>{' '}
                                    <Link to="/"  onClick={e => e.preventDefault()} className="mt-2 badge badge-dark">Dark</Link>{' '}
                                </Card.Body>
                                </Card>
                                <Card>
                                <Card.Header>
                                    <Card.Header.Title>
                                        <h4 className="card-title">Contextual variations Border</h4>
                                    </Card.Header.Title>
                                </Card.Header>
                                <Card.Body>
                                    <p className="mb-2">Add any of the below mentioned modifier classes to change the appearance of a badge.</p>
                                    <Badge text="primary" bg="" className="border border-primary mt-2 mr-1">Primary</Badge>{' '}
                                    <Badge text="secondary" bg="" className="border border-secondary mt-2 mr-1">Secondary</Badge>{' '}
                                    <Badge text="success" bg="" className="border border-success mt-2 mr-1">Success</Badge>{' '}
                                    <Badge text="danger" bg="" className="border border-danger mt-2 mr-1">Danger</Badge>{' '}
                                    <Badge text="warning" bg="" className="border border-warning mt-2 mr-1">Warning</Badge>{' '}
                                    <Badge text="info" bg="" className="border border-info mt-2 mr-1">Info</Badge>{' '}
                                    <Badge text="light" bg="" className="border border-light mt-2 mr-1">Light</Badge>{' '}
                                    <Badge text="dark" bg="" className="border border-dark mt-2 mr-1">Dark</Badge>{' '}
                                    <h5 className="card-title mt-4">Pill badges</h5>
                                    <p className="mb-2">Use the <code>.badge-pill</code> modifier class to make badges more rounded (with a larger <code>border-radius</code> and additional horizontal <code>padding</code>). Useful if you miss the badges from v3.</p>
                                    <Badge pill text="primary" bg="" className="mt-2 mr-1 border border-primary">Primary</Badge>{' '}
                                    <Badge pill text="secondary" bg="" className="mt-2 mr-1 border border-secondary">Secondary</Badge>{' '}
                                    <Badge pill text="success" bg="" className="mt-2 mr-1 border border-success">Success</Badge>{' '}
                                    <Badge pill text="danger" bg="" className="mt-2 mr-1 border border-danger">Danger</Badge>{' '}
                                    <Badge pill text="warning" bg="" className="mt-2 mr-1 border border-warning">Warning</Badge>{' '}
                                    <Badge pill text="info" bg="" className="mt-2 mr-1 border border-info">Info</Badge>{' '}
                                    <Badge pill text="light" bg="" className="mt-2 mr-1 border border-light">Light</Badge>
                                    <Badge pill text="dark" bg="" className="mt-2 mr-1 border border-dark">Dark</Badge>{' '}
                                    <h5 className="card-title mt-4">Links</h5>
                                    <p className="mb-2">Using the contextual <code>.badge-*</code> classes on an <code>&lt;a&gt;</code> element quickly provide <em>actionable</em> badges with hover and focus states.</p>
                                    <Link to="/"  onClick={e => e.preventDefault()} className="mt-2 badge border border-primary text-primary mr-1">Primary</Link>{' '}
                                    <Link to="/"  onClick={e => e.preventDefault()} className="mt-2 badge border border-secondary text-secondary mr-1">Secondary</Link>{' '}
                                    <Link to="/"  onClick={e => e.preventDefault()} className="mt-2 badge border border-success text-success  mr-1">Success</Link>{' '}
                                    <Link to="/"  onClick={e => e.preventDefault()} className="mt-2 badge border border-danger text-danger mr-1">Danger</Link>{' '}
                                    <Link to="/"  onClick={e => e.preventDefault()} className="mt-2 badge border border-warning text-warning mr-1">Warning</Link>{' '}
                                    <Link to="/"  onClick={e => e.preventDefault()} className="mt-2 badge border border-info text-info mr-1">Info</Link>{' '}
                                    <Link to="/"  onClick={e => e.preventDefault()} className="mt-2 badge border border-light text-light mr-1">Light</Link>{' '}
                                    <Link to="/"  onClick={e => e.preventDefault()} className="mt-2 badge border border-dark text-dark mr-1">Dark</Link>{' '}
                                </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </Row>
             </Container>
        </>
    )
}
export default Badges;
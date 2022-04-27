import React from 'react';
import { Container, Col, Row, Card } from 'react-bootstrap'
import {Link} from 'react-router-dom'

const ListGroup = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col sm="12" lg="6">
                    <Card>
                        <Card.Header className="d-flex justify-content-between">
                            <div className="header-title">
                                <h4 className="card-title">List group</h4>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <p>The most basic list group is an unordered list with list items and the proper classes. Build upon it with the options that follow, or with your own CSS as needed.</p>
                            <ul className="list-group">
                                <li className="list-group-item">Cras justo odio</li>
                                <li className="list-group-item">Dapibus ac facilisis in</li>
                                <li className="list-group-item">Morbi leo risus</li>
                                <li className="list-group-item">Porta ac consectetur ac</li>
                                <li className="list-group-item">Vestibulum at eros</li>
                            </ul>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header className="d-flex justify-content-between">
                            <div className="header-title">
                                <h4 className="card-title">Disabled items</h4>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <p>Add <code>.disabled</code> to a <code>.list-group-item</code> to make it <em>appear</em> disabled. Note that some elements with <code>.disabled</code> will also require custom JavaScript to fully disable their click events (e.g., links).</p>
                            <ul className="list-group">
                                <li className="list-group-item">Cras justo odio</li>
                                <li className="list-group-item">Dapibus ac facilisis in</li>
                                <li className="list-group-item">Morbi leo risus</li>
                                <li className="list-group-item">Porta ac consectetur ac</li>
                                <li className="list-group-item">Vestibulum at eros</li>
                            </ul>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header className="d-flex justify-content-between">
                            <div className="header-title">
                                <h4 className="card-title">Flush</h4>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <p>Add <code className="highlighter-rouge">.list-group-flush</code> to remove some borders and rounded corners to render list group items edge-to-edge in a parent container (e.g., cards).</p>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Cras justo odio</li>
                                <li className="list-group-item">Dapibus ac facilisis in</li>
                                <li className="list-group-item">Morbi leo risus</li>
                                <li className="list-group-item">Porta ac consectetur ac</li>
                                <li className="list-group-item">Vestibulum at eros</li>
                            </ul>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header className="d-flex justify-content-between">
                            <div className="header-title">
                                <h4 className="card-title">Contextual classes</h4>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <p>Use contextual classes to style list items with a stateful background and color.</p>
                            <ul className="list-group">
                                <li className="list-group-item">Dapibus ac facilisis in</li>
                                <li className="list-group-item list-group-item-primary">A simple primary list group item</li>
                                <li className="list-group-item list-group-item-secondary">A simple secondary list group item</li>
                                <li className="list-group-item list-group-item-success">A simple success list group item</li>
                                <li className="list-group-item list-group-item-danger">A simple danger list group item</li>
                                <li className="list-group-item list-group-item-warning">A simple warning list group item</li>
                                <li className="list-group-item list-group-item-info">A simple info list group item</li>
                                <li className="list-group-item list-group-item-light">A simple light list group item</li>
                                <li className="list-group-item list-group-item-dark">A simple dark list group item</li>
                            </ul>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header className="d-flex justify-content-between">
                            <div className="header-title">
                                <h4 className="card-title">With badges</h4>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <p>Add badges to any list group item to show unread counts, activity, and more with the help of some <Link to="/docs/4.3/utilities/flex/">utilities</Link>.</p>
                            <ul className="list-group">
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                Cras justo odio
                                <span className="badge bg-primary badge-pill">14</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                Dapibus ac facilisis in
                                <span className="badge bg-success badge-pill">2</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                Morbi leo risus
                                <span className="badge bg-danger badge-pill">1</span>
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header className=" d-flex justify-content-between">
                            <div className="header-title">
                                <h4 className="card-title">With badges</h4>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <p>Add badges to any list group item to show unread counts, activity, and more with the help of some <Link to="/docs/4.3/utilities/flex/">utilities</Link>.</p>
                            <ul className="list-group">
                                <li className="list-group-item d-flex justify-content-between align-items-center iq-bg-primary">
                                Cras justo odio
                                <span className="badge bg-primary badge-pill">14</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center iq-bg-success" >
                                Dapibus ac facilisis in
                                <span className="badge bg-success badge-pill">2</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center iq-bg-danger">
                                Morbi leo risus
                                <span className="badge bg-danger badge-pill">1</span>
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col sm="12" lg="6">
                    <Card>
                        <Card.Header className="d-flex justify-content-between">
                            <div className="header-title">
                                <h4 className="card-title">List Active</h4>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <p>Add <code>.active</code> to a <code>.list-group-item</code> to indicate the current active selection.</p>
                            <ul className="list-group">
                                <li className="list-group-item active">Cras justo odio</li>
                                <li className="list-group-item">Dapibus ac facilisis in</li>
                                <li className="list-group-item">Morbi leo risus</li>
                                <li className="list-group-item">Porta ac consectetur ac</li>
                                <li className="list-group-item">Vestibulum at eros</li>
                            </ul>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header className="d-flex justify-content-between">
                            <div className="header-title">
                                <h4 className="card-title">Links and buttons</h4>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <p>Use <code>&lt;a&gt;</code>s or <code>&lt;button&gt;</code>s to create <em>actionable</em> list group items with hover, disabled, and active states by adding <code>.list-group-item-action</code>. We separate these pseudo-classes to ensure list groups made of non-interactive elements (like <code>&lt;li&gt;</code>s or <code>&lt;div&gt;</code>s) don’t provide a click or tap affordance.</p>
                            <p>Be sure to <strong>not use the standard <code>.btn</code> classes here</strong>.</p>
                            <div className="list-group">
                                <Link to="#" className="list-group-item list-group-item-action active">
                                Cras justo odio
                                </Link>
                                <Link to="#" className="list-group-item list-group-item-action">Dapibus ac facilisis in</Link>
                                <Link to="#" className="list-group-item list-group-item-action">Morbi leo risus</Link>
                                <Link to="#" className="list-group-item list-group-item-action">Porta ac consectetur ac</Link>
                                <Link to="#" className="list-group-item list-group-item-action disabled" tabIndex="-1">Vestibulum at eros</Link>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header className=" d-flex justify-content-between">
                            <div className="header-title">
                                <h4 className="card-title">Horizontal</h4>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <p>Add <code>.list-group-horizontal</code> to change the layout of list group items from vertical to horizontal across all breakpoints. Alternatively, choose a responsive variant <code>.list-group-horizontal- sm md lg xl</code> to make a list group horizontal starting at that breakpoint’s <code>min-width</code>. Currently <strong>horizontal list groups cannot be combined with flush list groups.</strong></p>
                            <p><strong>ProTip:</strong> Want equal-width list group items when horizontal? Add <code>.flex-fill</code> to each list group item.</p>
                            <ul className="list-group list-group-horizontal">
                                <li className="list-group-item">Cras justo odio</li>
                                <li className="list-group-item">Dapibus ac facilisis in</li>
                                <li className="list-group-item">Morbi leo risus</li>
                            </ul>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header className="d-flex justify-content-between">
                            <div className="header-title">
                                <h4 className="card-title">Contextual classes Action</h4>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <p>Use contextual classes to style list items with a stateful background and color.</p>
                            <div className="list-group">
                                <Link to="#" className="list-group-item list-group-item-action">Dapibus ac facilisis in</Link>
                                <Link to="#" className="list-group-item list-group-item-action list-group-item-primary">A simple primary list group item</Link>
                                <Link to="#" className="list-group-item list-group-item-action list-group-item-secondary">A simple secondary list group item</Link>
                                <Link to="#" className="list-group-item list-group-item-action list-group-item-success">A simple success list group item</Link>
                                <Link to="#" className="list-group-item list-group-item-action list-group-item-danger">A simple danger list group item</Link>
                                <Link to="#" className="list-group-item list-group-item-action list-group-item-warning">A simple warning list group item</Link>
                                <Link to="#" className="list-group-item list-group-item-action list-group-item-info">A simple info list group item</Link>
                                <Link to="#" className="list-group-item list-group-item-action list-group-item-light">A simple light list group item</Link>
                                <Link to="#" className="list-group-item list-group-item-action list-group-item-dark">A simple dark list group item</Link>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header className=" d-flex justify-content-between">
                            <div className="header-title">
                                <h4 className="card-title">Custom content</h4>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <p>Add nearly any HTML within, even for linked list groups like the one below, with the help of <Link to="/docs/4.3/utilities/flex/">flexbox utilities</Link>.</p>
                            <div className="list-group">
                                <Link to="#" className="list-group-item list-group-item-action active">
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1 text-white">List group item heading</h5>
                                    <small>3 days ago</small>
                                </div>
                                <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                <small>Donec id elit non mi porta.</small>
                                </Link>
                                <Link to="#" className="list-group-item list-group-item-action">
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">List group item heading</h5>
                                    <small className="text-muted">3 days ago</small>
                                </div>
                                <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                <small className="text-muted">Donec id elit non mi porta.</small>
                                </Link>
                                <Link to="#" className="list-group-item list-group-item-action">
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">List group item heading</h5>
                                    <small className="text-muted">3 days ago</small>
                                </div>
                                <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                <small className="text-muted">Donec id elit non mi porta.</small>
                                </Link>
                            </div>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default ListGroup
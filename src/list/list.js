import React, { Component } from 'react';
import { Card, Row, Col } from 'react-bootstrap'
import logo from './../logo.svg';

class ListTable extends Component {
    render() {
        return (
            <Row xs={1} md={5} className="g-4">
                {Array.from({ length: 12 }).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={logo} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        )
    }
}

export default ListTable
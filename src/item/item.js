import { Card, Col, Button, Modal } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import React, { Component } from 'react';
// import image from './../placeholder.png';
import { socket } from '../app/App';
import './item.css'

class Item extends Component {
    constructor(props) {
        super(props)
        this.id = props.id
        this.class = props.class
        this.size = props.size
        this.standart = props.standart
        this.image= props.images[0]
        this.state = {
            show: false
        }

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleShow() {
        this.setState({ show: true })
    }

    handleClose() {
        this.setState({ show: false })
    }

    render() {
        return (
            <Col>
                <Card onClick={this.handleShow}>
                    <Card.Img variant="top" src={socket+'/'+this.image} className='ItemImage'/>
                    <Card.Body>
                        <Card.Title>ID: {this.id}</Card.Title>
                        <Card.Text>
                            Класс: {this.class}<br />
                            Размер: {this.size}<br />
                            Стандарт: {this.standart}<br />
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Информация о детали</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Image src={socket+'/'+this.image} className='ItemImage'/>
                        <br/>
                        Класс: {this.class}<br />
                        Размер: {this.size}<br />
                        Стандарт: {this.standart}<br />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Закрыть
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Col>
        )
    }
}

export default Item
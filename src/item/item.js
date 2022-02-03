import { Card, Col, Button } from 'react-bootstrap'
import React, { Component } from 'react';
import logo from './../placeholder.png';
import { socket } from '../app/App';

async function deleteDataById(id) {
    try {
        const res = await fetch(socket + '/deletepart', {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id: id })
        });

    } catch (err) {
        console.log(err);
    }
}

class Item extends Component {
    constructor(props) {
        super(props)
        this.id = props.id
        this.class = props.class
        this.specification = props.specification
        this.standart = props.standart
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(id, e){
        deleteDataById(id)
    }
    render() {
        return (
            <Col>
                <Card>
                    <Card.Img variant="top" src={logo} />
                    <Card.Body>
                        <Card.Title>ID: {this.id}</Card.Title>
                        <Card.Text>
                            Класс: {this.class}<br />
                            Исполнение: {this.specification}<br />
                            Стандарт: {this.standart}<br />
                        </Card.Text>
                        <Button variant="danger" onClick={(e)=>this.handleClick(this.id, e)}>
                            Удалить
                        </Button>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}

export default Item
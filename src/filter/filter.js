import { Form, Button, Accordion } from 'react-bootstrap'
import React, { Component } from 'react';
import './filter.css'
import { socket } from '../app/App';

async function addPart(data) {
    try {
        const res = await fetch(socket + '/addpart', {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        window.location.reload();
    } catch (err) {
        console.log(err);
    }
}

class Filter extends Component {
    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this);
 
    }

    handleSubmit(e){
        e.preventDefault()
        addPart({class: e.target[0].value, specification: e.target[1].value, standart: e.target[2].value})
    }
  
    render() {
        return (
            <div id="filter">
                <Form>
                    <Form.Group className="mb-3" controlId="formFilter">
                        <Form.Label>Фильтр</Form.Label>
                        <Form.Control placeholder="Класс" onChange={this.props.filterevent} />
                    </Form.Group>

                    {/* <Button variant="primary" type="submit">
                        Фильтр
                    </Button> */}
                </Form>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Фильтр по характеристикам</Accordion.Header>
                        <Accordion.Body>
                            <Form onSubmit={(e)=>this.handleSubmit(e)}>
                                <Form.Group className="mb-3" controlId="formParamFilter">
                                    <Form.Control placeholder="Размер" onChange={this.props.filterevent} />
                                    <Form.Control placeholder="Стандарт" onChange={this.props.filterevent} />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Показать результаты
                                </Button>
                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                {/* <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Добавить</Accordion.Header>
                        <Accordion.Body>
                            <Form onSubmit={(e)=>this.handleSubmit(e)}>
                                <Form.Group className="mb-3" controlId="formAdd">
                                    <Form.Control placeholder="Класс" />
                                    <Form.Control placeholder="Исполнение"  />
                                    <Form.Control placeholder="Стандарт" />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Добавить
                                </Button>
                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion> */}
            </div>
        )
    }
}

export default Filter
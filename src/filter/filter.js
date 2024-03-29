import { Form, Button, Accordion } from 'react-bootstrap'
import React, { Component } from 'react';
import './filter.css'


class Filter extends Component {
    constructor(props) {
        super(props)

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
                        <Accordion.Header className='char_filter_button'>Фильтр по характеристикам</Accordion.Header>
                        <Accordion.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="formParamFilter">
                                    <Form.Control placeholder="Размер" onChange={this.props.filtersize} />
                                    <Form.Control placeholder="Стандарт" onChange={this.props.filterstandart} />
                                </Form.Group>
                                {/* 
                                <Button variant="primary" onClick={this.props.filterevent}>
                                    Показать результаты
                                </Button> */}
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
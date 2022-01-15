import {Form, Button} from 'react-bootstrap'
import React, { Component } from 'react';
import './filter.css'


class Filter extends Component {
    render() {
        return (
            <div id="filter">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Фильтр</Form.Label>
                        <Form.Control placeholder="Класс" onChange={this.props.filterevent}/>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Фильтр
                    </Button>
                </Form>
            </div>
        )
    }
}

export default Filter
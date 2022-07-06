import { Form } from 'react-bootstrap'
import React, { Component } from 'react';
import './recognize.css'


class Recognize extends Component {
    constructor(props) {
        super(props)


    }

    render() {
        return (
            <div>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Выберите файл с чертежом</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>
            </div>
        )
    }
}

export default Recognize
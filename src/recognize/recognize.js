import { Form, Button, Image } from 'react-bootstrap'
import React, { Component } from 'react';
import './recognize.css'
import { socket } from '../app/App';


class Recognize extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imageURL: ''
        };

        this.handleUploadImage = this.handleUploadImage.bind(this);

    }

    handleUploadImage(ev) {
        ev.preventDefault();

        const data = new FormData();
        data.append('file', this.uploadInput.files[0]);

        fetch(socket + '/upload', {
            method: 'POST',
            body: data,
        }).then((response) => {
            response.json().then((body) => {
                this.setState({ imageURL: socket + '/' + body.url });
            });
        });
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleUploadImage}>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Выберите файл с чертежом</Form.Label>
                        <Form.Control type="file" ref={(ref) => { this.uploadInput = ref; }} />
                        <Button variant="primary" type="submit">
                            Далее
                        </Button>
                    </Form.Group>
                </Form>
                <img src={this.state.imageURL} alt="ready_img"/>
            </div>
        )
    }
}

export default Recognize
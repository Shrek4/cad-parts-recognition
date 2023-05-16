import { Form, Button } from 'react-bootstrap'
import React, { Component } from 'react';
import './recognize.css'
import { socket } from '../app/App';
import ReactCrop, {
    centerCrop,
    makeAspectCrop,
    Crop,
    PixelCrop,
  } from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'
import img from '../placeholder.png'



class Recognize extends Component {
    constructor(props) {
        super(props)
        this.state = {
            recognize_data: '',
            crop: Crop
        };

        this.handleUploadImage = this.handleUploadImage.bind(this);
        this.handleCrop=this.handleCrop.bind(this)
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
                this.setState({ recognize_data: body.data });
            });
        });

    }

    handleCrop(e){

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
                <ReactCrop crop={this.state.crop} onChange={(e)=>this.state.handleCrop(e)}>
                    <img src={img} />
                </ReactCrop>
                <p>{this.state.recognize_data}</p>
            </div>
        )


    }
}

export default Recognize
import React, { PureComponent } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { Form, Button } from 'react-bootstrap'
import { socket } from '../app/App';
import './recognize.css';

class Recognize extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      src: null,
      crop: {
        unit: '%',
        width: 30
      },
      recognize_data: null,
      croppedImageUrl: null
    }
    this.handleUploadImage = this.handleUploadImage.bind(this)
  }



  handleUploadImage() {
    fetch(this.state.croppedImageUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const file = new File([blob], 'image.jpg', {
          type: "image/jpeg",
        });
        
        const data = new FormData();
        data.append('file', file);
  
        fetch(socket + '/upload', {
          method: 'POST',
          body: data,
        }).then((response) => {
          response.json().then((body) => {
            this.setState({ recognize_data: body.data });
          });
        });
      });
  }
  
  onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {

      const reader = new FileReader();
      reader.addEventListener('load', () =>
        this.setState({ src: reader.result })
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  onImageLoaded = (image) => {
    this.imageRef = image;
  };

  onCropComplete = (crop) => {
    this.makeClientCrop(crop);
  };

  onCropChange = (crop, percentCrop) => {
    this.setState({ crop });
  };

  async makeClientCrop(crop) {
    if (this.imageRef && crop.width && crop.height) {
      const croppedImageUrl = await this.getCroppedImg(
        this.imageRef,
        crop,
        'newFile.jpeg'
      );
      this.setState({ croppedImageUrl });
    }
  }

  getCroppedImg(image, crop, fileName) {
    const canvas = document.createElement('canvas');
    const pixelRatio = window.devicePixelRatio;
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx = canvas.getContext('2d');

    canvas.width = crop.width * pixelRatio * scaleX;
    canvas.height = crop.height * pixelRatio * scaleY;

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = 'high';

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width * scaleX,
      crop.height * scaleY
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob(
        (blob) => {
          if (!blob) {
            console.error('Canvas is empty');
            return;
          }
          blob.name = fileName;
          window.URL.revokeObjectURL(this.fileUrl);
          this.fileUrl = window.URL.createObjectURL(blob);
          resolve(this.fileUrl);
        },
        'image/jpeg',
        1
      );
    });
  }

  render() {
    return (
      <div className="recognize">
        <div className='formupload'>
          <Form>
          <Form.Group className="mb-3">
            <Form.Label>Выберите файл, затем выделите участок для распознавания и нажмите "Готово"</Form.Label>
            <Form.Control type="file" accept="image/*" onChange={this.onSelectFile}/>
          </Form.Group>
          </Form>
        </div>
        {this.state.src && (
          <ReactCrop
            src={this.state.src}
            crop={this.state.crop}
            ruleOfThirds
            onImageLoaded={this.onImageLoaded}
            onComplete={this.onCropComplete}
            onChange={this.onCropChange}
          />
        )}
        {this.state.croppedImageUrl && (
          <div>
            <img alt="Crop" style={{ maxWidth: '100%' }} src={this.state.croppedImageUrl} />
            <Button variant="primary" onClick={this.handleUploadImage}>
              Готово
            </Button>
          </div>
        )}
        {this.state.recognize_data && (
          <p>Результат: {this.state.recognize_data}</p>
        )}
      </div>
    );
  }
}

export default Recognize

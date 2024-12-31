import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from './assets/logo.png';
import image1 from './assets/image1.png';
import image2 from './assets/image2.png';
import image3 from './assets/image3.png';
import image4 from './assets/image4.png';
import image5 from './assets/image5.png';
import image6 from './assets/image6.png';
import image7 from './assets/image7.png';
import image8 from './assets/image8.png';

const images = [
  { src: image1, alt: 'Image 1' },
  { src: image2, alt: 'Image 2' },
  { src: image3, alt: 'Image 3' },
  { src: image4, alt: 'Image 4' },
  { src: image5, alt: 'Image 5' },
  { src: image6, alt: 'Image 6' },
  { src: image7, alt: 'Image 7' },
  { src: image8, alt: 'Image 8' },
  { src: image1, alt: 'Image 9' },
];

const Gallery = () => {
  return (
    <Container>
        <img src={logo} width="80" height="70" class="img-thumbnail"/> 
        <h1 className="text-center my-4">E-Cell</h1>
      <Row>
        {images.map((image, index) => (
          <Col md={4} key={index} className="mb-4">
            <div className="card">
              <img src={image.src} alt={image.alt} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{image.alt}</h5>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Gallery;
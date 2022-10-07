import React from 'react';
import { Carousel } from 'react-bootstrap';
import NavBar from './NavBar';

const CarouselContainer = () => {
  return (
    <div>
        <NavBar></NavBar>
    <Carousel fade={true} pause={false}>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100" style={{height:"600px"}}
          src="/image/HomeImage1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"style={{height:"600px"}}
          src="/image/HomeImage2.jpg"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"style={{height:"600px"}}
          src="/image/HomeImage3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"style={{height:"600px"}}
          src="/image/HomeImage4.jpg"
          alt="Fourth slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"style={{height:"600px"}}
          src="/image/HomeImage5.jpg"
          alt="Fifth slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"style={{height:"600px"}}
          src="/image/image4.jpg"
          alt="Sixth slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"style={{height:"600px"}}
          src="/image/image5.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"style={{height:"600px"}}
          src="/image/image6.jpg"
          alt="Eighth slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default CarouselContainer;
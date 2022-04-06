import React from "react";
import Carousel from "react-bootstrap/Carousel"
import CarouselCaption from 'react-bootstrap/CarouselCaption';
import CarouselItem from 'react-bootstrap/CarouselItem';
import marcahuasiLima from "../../assest/imagenes/marcahuasiLima.jpeg"
import islasBallestasIca from "../../assest/imagenes/islasBallestasIca.jpg"
import mancoraPiura from "../../assest/imagenes/mancoraPiura.jpg"

const CarruselCosta=()=>{
    return(

<Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={marcahuasiLima}
      alt="marcahuasiLima"
    />
    <Carousel.Caption>
      <h1>Lima</h1>
      <p>Marcahuasi bOsque de Piedras</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={islasBallestasIca}
      alt="islasBallestasIca"
    />
    <Carousel.Caption>
      <h1>Ica</h1>
      <p>IslasBallestas</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={mancoraPiura}
      alt="mancoraPiura"
    />
    <Carousel.Caption>
      <h1>Piura</h1>
      <p>Mancora</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>



    )
    }

export default CarruselCosta
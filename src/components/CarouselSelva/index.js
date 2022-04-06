import React from "react";
import Carousel from "react-bootstrap/Carousel"
import CarouselCaption from 'react-bootstrap/CarouselCaption';
import CarouselItem from 'react-bootstrap/CarouselItem';
import pacayaSamiriaLoreto from "../../assest/imagenes/pacayaSamiriaLoreto.jpg"
import cataratasGoctaAmazonas from "../../assest/imagenes/cataratasGoctaAmazonas.webp"
import manuMadredeDios from "../../assest/imagenes/manuMadredeDios.png"

const CarruselSelva=()=>{
    return(

<Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={pacayaSamiriaLoreto}
      alt="pacayaSamiriaLoreto"
    />
    <Carousel.Caption>
      <h1>Loreto</h1>
      <p>Pacaya Samiria</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={cataratasGoctaAmazonas}
      alt="cataratasGoctaAmazonas"
    />
    <Carousel.Caption>
      <h1>Amazonas</h1>
      <p>Cataratas de Gocta</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={manuMadredeDios}
      alt="manuMadredeDios"
    />
    <Carousel.Caption>
      <h1>Madre de Dios</h1>
      <p>Reserva Nacional del Manu</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

    )
    }

export default CarruselSelva
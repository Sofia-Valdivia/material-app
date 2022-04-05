import React from "react";
import Carousel from "react-bootstrap/Carousel"
import CarouselCaption from 'react-bootstrap/CarouselCaption';
import CarouselItem from 'react-bootstrap/CarouselItem';
import bañosIncaCajamarcaSierra from "../../assest/imagenes/bañosIncaCajamarcaSierra.jpg"
import machupicchuSierra from "../../assest/imagenes/machupicchuSierra.jpg"
import lagoTiticacaSierra from "../../assest/imagenes/lagoTiticacaSierra.jpg"

const Carrusel=()=>{
    return(

<Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={bañosIncaCajamarcaSierra}
      alt="cajamarcabañosInca"
    />
    <Carousel.Caption>
      <h1>Cajamarca</h1>
      <p>Baños termales del Inca</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={machupicchuSierra}
      alt="cuscoMachupicchu"
    />
    <Carousel.Caption>
      <h1>Cusco</h1>
      <p>Machupicchu</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={lagoTiticacaSierra}
      alt="punoLagoTiticaca"
    />
    <Carousel.Caption>
      <h1>Puno</h1>
      <p>Lago Titicaca</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

    )
    }

export default Carrusel
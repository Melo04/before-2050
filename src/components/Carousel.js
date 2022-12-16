import React from 'react'
import styled from 'styled-components';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCards, Navigation, Pagination, Autoplay } from "swiper";
import img1 from './assets/img/52.png';
import img2 from './assets/img/15.png';
import img3 from './assets/img/25.png';
import img4 from './assets/img/35.png';
import img5 from './assets/img/40.png';
import img6 from './assets/img/45.png';
import img7 from './assets/img/50.png';
import img8 from './assets/img/54.png';
import img9 from './assets/img/16.png';
import img10 from './assets/img/58.png';
import Arrow from './assets/Arrow.svg';

const Container = styled.div`
margin-top: 40px;
margin-bottom: 50px;
width: 25vw;
height: 70vh;

@media (max-width: 64em){
  height: 65vh;
  width: 55vw;
}
@media (max-width: 48em){
  height: 65vh;
  width: 55vw;
}

.swiper{
  width: 100%;
  height: 100%;
  color: #000;
}
.swiper-slide{
  background-color: #fff;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper-slide img{
    width: 280px;
    height: auto;
}
.swiper-button-next{
  color: #fff;
  right: 0;
  top: 60%;
  width: 4rem;
  background-position: center;
  background-size: cover;
  background-image: url(${Arrow});

  &:after{
    display: none;
  }
}
.swiper-button-prev{
  color: #fff;
  left: 0;
  top: 60%;
  width: 4rem;
  transform: rotate(180deg);
  background-position: center;
  background-size: cover;
  background-image: url(${Arrow});

  &:after{
    display: none;
  }
}
`

const Carousel = () => {
  return (
    <Container>
      <Swiper
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      pagination={{
        color: 'black',
        type: 'fraction',
      }}
      scrollbar={{
        draggable: true
      }}
      navigation={true}
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards, Pagination, Navigation, Autoplay]}
      className="mySwiper"
      >
        <SwiperSlide><img src={img1} alt="Coffee"/></SwiperSlide>
        <SwiperSlide><img src={img2} alt="Coffee"/></SwiperSlide>
        <SwiperSlide><img src={img3} alt="Coffee"/></SwiperSlide>
        <SwiperSlide><img src={img4} alt="Coffee"/></SwiperSlide>
        <SwiperSlide><img src={img5} alt="Coffee"/></SwiperSlide>
        <SwiperSlide><img src={img6} alt="Coffee"/></SwiperSlide>
        <SwiperSlide><img src={img7} alt="Coffee"/></SwiperSlide>
        <SwiperSlide><img src={img8} alt="Coffee"/></SwiperSlide>
        <SwiperSlide><img src={img9} alt="Coffee"/></SwiperSlide>
        <SwiperSlide><img src={img10} alt="Coffee"/></SwiperSlide>
      </Swiper>
    </Container>
  )
}

export default Carousel
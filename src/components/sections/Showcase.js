import React, {useRef} from 'react'
import styled, {keyframes} from 'styled-components'

import img1 from '../assets/img/5.png';
import img2 from '../assets/img/12.png';
import img3 from '../assets/img/18.png';
import img4 from '../assets/img/27.png';
import img5 from '../assets/img/39.png';
import img6 from '../assets/img/45.png';
import img7 from '../assets/img/50.png';
import img8 from '../assets/img/52.png';
import img9 from '../assets/img/54.png';
import img10 from '../assets/img/61.png';
import img11 from '../assets/img/20.png';
import img12 from '../assets/img/29.png';
import img13 from '../assets/img/43.png';
import img14 from '../assets/img/57.png';
import img15 from '../assets/img/53.png';
import img16 from '../assets/img/55.png';


const Section = styled.section`
min-height: 100vh;
width: 100vw;
background-color: #fff;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;

&>*:first-child{
  animation-duration: 20s;
}
&>*:last-child{
  animation-duration: 15s;
}
`

const move = keyframes`
0%{transform : translateX(100%) };
100%{ transform: translateX(-100%) };
`

const Row = styled.div`
white-space: nowrap;
box-sizing: content-box;
margin: 2rem 0;
display: flex;

animation: ${move} linear infinite ${props => props.direction};
`

const ImgContainer = styled.div`
width: 15rem;
margin: 0 1rem;
background-color: #fff;
border-radius: 20px;
cursor: pointer;

img{
  width: 90%;
  margin-left: 20px;
  height: auto;
}
`

const CardItem = ({img, number=0, price=0, passRef}) => {
    let play = (e) => {
        passRef.current.style.animationPlayState = 'running';
    }
    let pause = (e) => {
        passRef.current.style.animationPlayState = 'paused';
    }
    return(
        <ImgContainer onMouseOver={e => pause(e)} onMouseOut={e => play(e)}>
            <img src={img} alt="The Wierdos"/>
        </ImgContainer>
    )
}

const Showcase = () => {
    const Row1Ref = useRef(null);
    const Row2Ref = useRef(null);

  return (
    <>
    <Section id="gallery">
        <Row direction="none" ref={Row1Ref}>
            <CardItem img={img1} passRef={Row1Ref}/>
            <CardItem img={img2} passRef={Row1Ref}/>
            <CardItem img={img3} passRef={Row1Ref}/>
            <CardItem img={img4} passRef={Row1Ref}/>
            <CardItem img={img5} passRef={Row1Ref}/>
            <CardItem img={img11} passRef={Row1Ref}/>
            <CardItem img={img12} passRef={Row1Ref}/>
            <CardItem img={img13} passRef={Row1Ref}/>
        </Row>
        <Row direction="reverse">
            <CardItem img={img6} passRef={Row2Ref}/>
            <CardItem img={img7} passRef={Row2Ref}/>
            <CardItem img={img8} passRef={Row2Ref}/>
            <CardItem img={img9} passRef={Row2Ref}/>
            <CardItem img={img10} passRef={Row2Ref}/>
            <CardItem img={img14} passRef={Row2Ref}/>
            <CardItem img={img15} passRef={Row2Ref}/>
            <CardItem img={img16} passRef={Row2Ref}/>
        </Row>
    </Section>
    </>
  )
}

export default Showcase
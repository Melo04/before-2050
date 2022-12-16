import React, {useRef} from 'react'
import styled, {keyframes} from 'styled-components'
import partners from '../assets/img/partners.jpg';

const Section = styled.section`
margin-top: 70px;
img{
  margin-top: -30px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  display: block;
}
@media(max-width: 48em){
    img{
      width: 90%;
    }
}
`

const Title = styled.h1`
font-size: 50px;
text-transform: uppercase;
display: flex;
justify-content: center;
align-items: center;
margin: 1rem auto;
width: fit-content;
letter-spacing: 10px;
margin-bottom: 60px;
background: #00f260; /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #00f260, #0575e6); /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #00f260, #0575e6);
-webkit-background-clip: text;
-moz-background-clip: text;
-webkit-text-fill-color: transparent;
-moz-text-fill-color: transparent;

@media(max-width: 48em){
  font-size: 35px;
}
@media(max-width: 395px){
  font-size: 20px;
}
`;

const Partners = () => {
  return (
    <>
    <Section id='partners'>
        <Title>OUR PARTNERS</Title>
        <img src={partners}/>
    </Section>
    </>
  )
}

export default Partners
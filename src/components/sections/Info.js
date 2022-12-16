import React from 'react'
import styled from 'styled-components'
import info from '../assets/img/info.png';
import info2 from '../assets/img/info2.png';

const Section = styled.section`
margin-top: 200px;
img{
  margin-top: -30px;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  display: block;
}
@media(max-width: 60em){
  img{
    width: 80%;
  }
}
@media(max-width: 395px){
  img{
    width: 85%;
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

@media(max-width: 395px){
  font-size: 25px;
}
`;

const Info = () => {
  return (
    <Section id='info'>
        <Title>HOW TO PLAY</Title>
        <img src={info}/>
        <img src={info2}/>
    </Section>
  )
}

export default Info
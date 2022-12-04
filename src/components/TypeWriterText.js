import React, {useState} from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect';

const Title = styled.h2`
font-size: 40px;
text-transform: capitalize;
width: 70%;
color: #000000;
align-self: flex-start;

span{
    text-transform: uppercase;
    font-family: 'Nunito', sans-serif;
}

.text-1{
    color: blue;
}
.text-2{
    color: orange;
}
.text-3{
    color: red;
}
.text-4{
    color: green;
}
.text-5{
    color: purple;
}
@media (max-width: 70em){
    font-size: 30px;
}
@media (max-width: 60em){
    align-self: center;
    text-align: center;
    margin-bottom: 80px;
}
@media (max-width: 40em){
    width: 90%;
}
`;

const Subtitle = styled.h3`
font-size: 20px;
text-transform: capitalize;
color: #000000;
font-weight: 600;
margin-bottom: 1rem;
width: 80%;
align-self: flex-start;

@media (max-width: 40em){
    font-size: 20px;
}
@media (max-width: 60em){
    align-self: center;
    text-align: center;
}
`;

const Btn = styled.button`
display: inline-block;
background-color: #000000;
color: #fff;
outline: none;
border: none;
font-size: 16px;
padding: 0.9rem 2.3rem;
border-radius: 50px;
cursor: pointer;
transition: all 0.2s ease;
position: relative;
margin-left: -250px;

&:hover{
    transform: scale(0.9);
}
&::after{
    content: ' ';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid #000000;
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.2s ease;
}
&:hover::after{
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
}

@media (max-width: 60em){
    display: block;
    margin-left: auto;
    margin-right: auto;
}
`;

const TypeWriterText = () => {
    const [click, setClick] = useState(false)

    const scrollTo = (id) => {
        let element = document.getElementById(id);
        element.scrollIntoView({
            behaviour: "smooth",
            block: "start",
            inline: "nearest"
        })
    }

  return (
    <>
    <Title>
        A CARD GAME that addresses
        <Typewriter
        options={{
            autoStart: true,
            loop: true,
        }}
            onInit={(typewriter) => {
                typewriter.typeString('<span class="text-1">Coral Bleaching</span>')
                .pauseFor(2000)
                .deleteAll()
                .typeString('<span class="text-2">Landslides</span>')
                .pauseFor(2000)
                .deleteAll()
                .typeString('<span class="text-3">Flooding</span>')
                .pauseFor(2000)
                .deleteAll()
                .typeString('<span class="text-4">Reduction Of Food Production</span>')
                .pauseFor(2000)
                .deleteAll()
                .typeString('<span class="text-5">Deforestation</span>')
                .pauseFor(2000)
                .deleteAll()
                .start()
            }}
        />
    </Title>
    <Subtitle>Interested to learn more about climate change?</Subtitle>
    <Subtitle>Come play our game</Subtitle>
    <Btn onClick={() => scrollTo('about')}>Explore more</Btn>
    
    </>
  )
}

export default TypeWriterText
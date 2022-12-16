import React from 'react'
import styled from 'styled-components'
import { IoLocationSharp } from 'react-icons/io5';
import { BsFillEnvelopeFill, BsFillPeopleFill } from 'react-icons/bs';
import { AiFillPhone } from 'react-icons/ai';
import img1 from "../assets/img/contact.jpg"
import img2 from "../assets/img/bg1.jpg"

const Section= styled.div`
min-height: 100vh;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
opacity: 0.8;
margin-bottom: 50px;
`;

const Container= styled.div`
width: 80%;
border-radius: 30px;
padding: 40px 100px 40px 40px;
box-shadow: 0px 0px 19px 5px rgba(0,0,0,0.19);
background-image: url(${img2});
background-size: contain;
background-size: 100%;

@media (max-width: 950px) {
    width: 90%;
    padding: 30px 35px 40px 35px;
}
@media (max-width: 820px) {
    margin: 40px 0;
    height: 100%;
}
@media(max-width: 50em){
    width: 70%;
}
`;

const Content= styled.div`
display: flex;
align-items: center;
justify-content: space-between;

@media (max-width: 820px) {
    flex-direction: column-reverse;
}
`;

const LeftSide= styled.div`
margin-top: 15px;
width: 25%;
height: 100%;
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

&::before{
    content: '';
    position: absolute;
    height: 70%;
    width: 2px;
    right: -15px;
    top: 50%;
    transform: translateY(-50%);
    background: #0000CC;
}
@media (max-width: 820px) {
    width: 100%;
    flex-direction: row;
    margin-top: 40px;
    justify-content: center;
    flex-wrap: wrap;

    &::before{
        display: none;
    }
}
`;

const RightSide = styled.div`
width: 75%;
margin-left: 75px;

img{
    width: 70%;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    display: block;
}

p{
    color: #0000CC;
    margin-bottom: 20px;
    font-size: 17px;
}

@media (max-width: 820px) {
    width: 100%;
    margin-left: 0;
    margin-top: 40px;
}
`;

const Details= styled.div`
margin: 14px;
text-align: center;
`;

const Icon = styled.i`
font-size: 30px;
color: #0000CC;
margin-bottom: 10px;
`;

const Topic= styled.div`
font-size: 18px;
font-weight: 500;
`;

const TextOne= styled.div`
font-size: 14px;
color: #000000;
`;

const TopicText = styled.div`
font-size: 27px;
font-weight: 600;
color: #0000CC;
font-family: 'Nunito', sans-serif;
letter-spacing: 1px;
margin-bottom: 10px;
`;

const Contact = () => {
  return (
    <>
    <Section id='contact'>
    <Container>
        <Content>
            <LeftSide>
                <Details>
                    <Icon><BsFillPeopleFill/></Icon>
                    <Topic>Name</Topic>
                    <TextOne>Jaya Laxshmi</TextOne>
                    <TextOne>Nashniq Shah</TextOne>
                </Details>
                <Details>
                    <Icon><AiFillPhone/></Icon>
                    <Topic>Phone</Topic>
                    <TextOne>+016 575 5985</TextOne>
                </Details>
                <Details>
                    <Icon><BsFillEnvelopeFill/></Icon>
                    <Topic>Email</Topic>
                    <TextOne>mjlaxshmi@gmail.com</TextOne>
                    <TextOne>niqnash96@gmail.com</TextOne>
                </Details>
                <Details>
                    <Icon><IoLocationSharp/></Icon>
                    <Topic>Address</Topic>
                    <TextOne>Gamification Centre, Level 9, Block A, Faculty Of Computer Science and Information Technology, UNIMAS, Kota Samarahan, 94340, Sarawak</TextOne>
                </Details>
            </LeftSide>

            <RightSide>
                <TopicText>CONTACT US</TopicText>
                <p>Interested to fund us? Let's get in touch now. Send us a message, we would be happy to talk with you.</p>
                <img src={img1}/>
            </RightSide>
        </Content>
    </Container>
    </Section>
    </>
  )
}

export default Contact
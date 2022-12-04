import React, {useState} from 'react'
import styled from 'styled-components'
import Carousel from '../Carousel'

const Section = styled.section`
min-height: 100vh;
width: 100%;
color: #fff;
display: flex;
justify-content: center;
align-items: center;
margin-top: 50px;
margin-bottom: 90px;
position: relative;
`

const Container = styled.div`
width: 85%;
min-height: 90vh;
margin: 0 auto;
display: flex;
border-radius: 80px;
justify-content: center;
align-items: center;
background: #a8ff78;
background: -webkit-linear-gradient(to right, #a8ff78, #78ffd6);
background: linear-gradient(to right, #a8ff78, #78ffd6);

@media (max-width: 70em){
  width: 85%;
}

@media (max-width: 64em){
  width: 90%;
  flex-direction: column;

  &>*:last-child{
    width: 80%;
  }
}
`

const Box = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Btn = styled.button`
display: inline-block;
background-color: #fff;
color: #000000;
outline: none;
border: none;
font-size: 16px;
padding: 0.9rem 2.3rem;
border-radius: 50px;
cursor: pointer;
transition: all 0.2s ease;
position: relative;
margin-bottom: 40px;

&:hover{
    transform: scale(0.9);
}

&::after{
    content: ' ';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid #fff;
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.2s ease;
}

&:hover::after{
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
}
`

const Title = styled.h2`
font-size: 40px;
text-transform: capitalize;
color: #fff;
align-self: flex-start;
width: 80%;
margin: 0 auto;

background: #0575e6; /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #0575e6, #021b79); /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #0575e6, #021b79);
-webkit-background-clip: text;
-moz-background-clip: text;
-webkit-text-fill-color: transparent;
-moz-text-fill-color: transparent;

@media (max-width: 64em){
  width: 100%;
  text-align: center;
}
@media (max-width: 40em){
  font-size: 20px;
}
`;

const SubText = styled.p`
font-size: 20px;
color: #000;
align-self: flex-start;
width: 80%;
margin: 1rem auto;
font-weight: 400;
`;

const SubTextLight = styled.p`
font-size: 20px;
color: #000;
align-self: flex-start;
width: 80%;
margin: 1rem auto;
font-weight: 400;
`

const About = () => {
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
    <Section id="about">
      <Container>
        <Box><Carousel/></Box>
        <Box>
        <Title>
          introducing <br></br>Before 2050.
        </Title>
        <SubText>
         2050-Net Zero" is all about creating climate issue awareness in Malaysia among the younger generation! This game teaches players regarding current climate CES.
        </SubText>
        <SubTextLight>
          Young environmentalists are on a journey to achieve net zero through researching CES by completing 3 sets with the usage of action cards. The action cards would allow the environmentalist to perform multiple risky and cheeky movements to complete the CES sets. Remember, you are to save the planet at all costs, so do not hold back your punches. 
        </SubTextLight>
        
        <Btn onClick={() => scrollTo('roadmap')}>Learn More</Btn>
        </Box>
      </Container>
    </Section>
  )
}

export default About
import React from 'react'
import styled from 'styled-components';
import CoverVideo from '../CoverVideo';
import TypeWriterText from '../TypeWriterText';

const Section = styled.section`
min-height: 85vh;
width: 100;
position: relative;
background-color: #fff;
`;

const Container = styled.div`
width: 75%;
min-height: 80vh;
margin: 0 auto;
background-color: #fff;
display: flex;
justify-content: center;
align-items: center;


@media (max-width: 60em){
  flex-direction: column-reverse;
  width: 100%;
  &>*:first-child{
    width: 100%;
    margin-top: 2rem;
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

const Home = () => {
  return (
    <Section id="home">
        <Container>
            <Box><TypeWriterText/></Box>
            <Box><CoverVideo/></Box>
        </Container>
    </Section>
  )
}

export default Home
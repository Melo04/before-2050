import React, {useRef} from 'react'
import { useLayoutEffect } from 'react';
import styled from 'styled-components'
import DrawSvg from '../DrawSvg';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'

const Section = styled.section`
min-height: 100vh;
width: 100vw;
background-color: #fff;
position: relative;
margin-bottom: 80px;
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

@media (max-width: 80em){
  margin-bottom: 150px;
}
@media (max-width: 80em){
  margin-bottom: 200px;
}
`;

const Container = styled.div`
width: 70%;
height: 200vh;
background-color: #fff;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
position: relative;

@media (max-width: 64em){
  width: 80%;
  margin-bottom: 300px;
}
@media (max-width: 48em){
  margin-bottom: 500px;
  width: 90%;
}
`;

const SvgContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

const Items = styled.ul`
list-style: none;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center
margin-bottom: 80px;

&>*:nth-of-type(2n+1){
  justify-content: start;

  div{
    border-radius: 50px 0 50px 0;
    text-align: right;
  }
  p{
    border-radius: 50px 0 50px 0;
  }
}
&>*:nth-of-type(2n){
  justify-content: end;
  div{
    border-radius: 0 50px 0 50px;
    text-align: left;
  }
  p{
    border-radius: 0 40px 0 40px;
  }
}
`;

const Item = styled.li`
width: 100%;
height: 100%;
display: flex;
`;

const ItemContainer = styled.div`
width: 40%;
height: fit-content;
padding: 1rem;
background: #a1ffce; /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #a1ffce, #faffd1); /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #a1ffce, #faffd1);
`;

const Box = styled.p`
height: fit-content;

color: #000000;
padding: 1rem;
position: relative;
`;

const Subtitle = styled.span`
display: block;
font-size: 30px;
text-transform: capitalize;
color: #000000;
`;

const Text = styled.span`
display: block;
font-size: 16px;
color: #000000;
border: 2px solid #fff;
background: #fff;
padding: 30px;
text-align: justify;

font-weight: 400;
margin: 0.5rem 0;

border-bottom-right-radius: 40px;
border-top-left-radius: 40px;
`;

const RoadMapItem = ({title, subtext, addToRef}) => {
  return(
    <Item ref={addToRef}>
      <ItemContainer>
        <Box>
          <Subtitle>{title}</Subtitle>
          <Text>{subtext}</Text>
        </Box>
      </ItemContainer>
    </Item>
  )
}

const Roadmap = () => {

  const revealRefs = useRef([]);
  revealRefs.current = [];
  gsap.registerPlugin(ScrollTrigger);

  const addToRefs = (el) => {
    if(el && !revealRefs.current.includes(el)){
      revealRefs.current.push(el);
    }
  }

  useLayoutEffect(() => {
    let t1 = gsap.timeline()
    revealRefs.current.forEach((el, index) => {
      t1.fromTo(
        el.childNodes[0],
        {
          y: '0'
        },{
          y: '-30%',
          scrollTrigger:{
            id: `section-${index + 1}`,
            trigger: el,
            start: 'top center+=200px',
            end: 'bottom center',
            scrub: true,
          }
        }
      )
    })
    return () => {

    }
  }, [])

  return (
    <Section id="roadmap">
      <Title>Roadmap</Title>
      <Container>
        <SvgContainer><DrawSvg/></SvgContainer>
        <Items>
          <RoadMapItem addToref={addToRefs} title="Our Objective" subtext="Young environmentalists embark on a journey to achieve net zero and become the “Climate Hero” through researching C.E.S (Causes, Effects, Solutions) of the most pressing climate issues before time runs out and the earth is no more."/>
          <RoadMapItem addToref={addToRefs} title="Characteristics Of game" subtext='
          Aesthetically pleasing,
          Themed gameplay with educational effect,
          Encourages critical thinking, engagement, analysis skills, 
          Built on knowledge used in schools'/>
          <RoadMapItem addToref={addToRefs} title="How to win" subtext="The first environmentalist to complete three CES research sets becomes the Climate Hero and saves the world!"/>
          <RoadMapItem addToref={addToRefs} title="Business Models" subtext="First of all, we require funding from companies or other industries,
the funds will be used to print initial samples and distribute to public / private schools.
Following that, we will started to collect data from users for impact evaluation,
We targeted on getting government investment to fund our card game so that we could reach out to more schools and raise awareness about climate change."/>
          <RoadMapItem addToref={addToRefs} title="Contact Us" subtext="Co-Founder: Jaya Laxshmi, Nashniq Shah, Ryan, Nazmi, Jun Wei, Melody, Krishna, Nasrul, Wing Kin"/>
        </Items>
      </Container>
    </Section>
  )
}
export default Roadmap
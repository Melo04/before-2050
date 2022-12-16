import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import Button from './Button';
import Logo from './Logo';

const Section = styled.section`
width: 100vw;
background-color: #fff;
`;

const NavBar = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
width: 85%;
height: 8rem;
margin: 0 auto;

@media (max-width: 64em){
.desktop{
    display: none;
}
.mobile{
    display: inline-block;
}
}

iframe{
    width: 100%;
    height: 100%;
}
`

const Menu = styled.ul`
display: flex;
justify-content: space-between;
align-items: center;
list-style: none;

@media (max-width: 64em){
    position: fixed;
    top: 8rem;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 90vw;
    z-index: 50;
    color: #fff;
    backdrop-filter: blur(10px);
    transform: ${props => props.click ? `translateY(0)` : `translateY(100%)`};
    transition: all 0.3s ease;
    flex-direction: column;
    justify-content: center;
}
`;

const MenuItem = styled.li`
margin: 0 1rem;
color: #000;
cursor: pointer;
font-size: 1.1em;

&::after{
    content: '';
    display: block;
    width: 0%;
    height: 2px;
    background: #000;
    transition: width 0.3s ease;
}

&:hover::after{
    width: 100%;
}

@media (max-width: 64em){
    margin: 1rem 0;

    &::after{
        display: none;
    }
}
`

const HamburgerMenu = styled.span`
width: ${props => props.click ? `2rem` : `1.5rem`};

height: 2px;
background: #000;

position: absolute;
top: 2rem;
left: 50%;
transform: ${props => props.click ? `translateX(-50%) rotate(90deg)` : `translateX(-50%) rotate(0)`};

display: none;
justify-content: center;
align-items: center;

cursor: pointer;
transition: all 0.3s ease;

@media (max-width: 64em){
    display: flex;
}

&::after, &::before{
    content: ' ';
    width: ${props => props.click ? `1rem` : `1.5rem`};
    height: 2px;
    right: ${props => props.click ? `-2px` : `0`};
    background: #000000;
    position: absolute;
    transition: all 0.3s ease;
}

&::after{
    top: ${props => props.click ? `0.3rem` : `0.5rem`};
    transform: ${props => props.click ? `rotate(-40deg)` : `rotate(0)`};
}
&::before{
    bottom: ${props => props.click ? `0.3rem` : `0.5rem`};
    transform: ${props => props.click ? `rotate(40deg)` : `rotate(0)`};
}
`

const Navigation = () => {
    const [click, setClick] = useState(false)
    const scrollTo = (id) => {
        let element = document.getElementById(id);
        element.scrollIntoView({
            behaviour: "smooth",
            block: "start",
            inline: "nearest"
        })
        setClick(!click)
    }

  return (
    <Section id='navigation'>
        <NavBar>
            <Logo/>
            <HamburgerMenu click={click} onClick={() => setClick(!click)}>
                &nbsp;
            </HamburgerMenu>
            <Menu click={click}>
                <MenuItem onClick={() => scrollTo('home')}>Home</MenuItem>
                <MenuItem onClick={() => scrollTo('about')}>About</MenuItem>
                <MenuItem onClick={() => scrollTo('roadmap')}>Roadmap</MenuItem>
                <MenuItem onClick={() => scrollTo('info')}>Game Rules</MenuItem>
                <MenuItem onClick={() => scrollTo('partners')}>Our partners</MenuItem>
                <MenuItem onClick={() => scrollTo('contact')}>Contact</MenuItem>
            </Menu>
            <a href="https://bluesky0322.github.io/">
                <Button text="How to play"></Button>
            </a>
        </NavBar>
    </Section>
  )
}

export default Navigation
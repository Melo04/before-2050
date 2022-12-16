import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import img1 from '../components/assets/img/logo.png'

const LogoText = styled.h1`
width: 10%;
transition: all 0.2s ease;

&:hover{
    transform: scale(1.1);
}

img{
  width: 300px;
  height: auto;
}

@media (max-width: 64em){
  img{
    transition: 2s ease-in-out;
    width: 170px;
    height: auto;
  }
}
`

const Logo = () => {
  return (
    <LogoText>
        <Link to="/">
          <img src={img1} alt="" />
        </Link>
    </LogoText>
  )
}

export default Logo
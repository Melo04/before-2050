import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom';
import img1 from '../components/assets/img/logo.png'
import {animateScroll as scroll} from 'react-scroll'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'

const FooterContainer = styled.footer`
background-color: #000000;
color: #fff;
`;

const FooterWrap = styled.div`
padding: 48px 24px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 1100px;
margin: 0 auto;
`

const FooterLinksContainer = styled.div`
display: flex;
justify-content: center;

@media screen and (max-width: 820px){
    padding-top: 32px;
}
`

const FooterLinksWrapper = styled.div`
display: flex;

@media screen and (max-width: 820px){
    flex-direction: column;
}
`

const FooterLinkItems = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin: 16px;
text-align: left;
width: 160px;
box-sizing: border-box;
color: #fff;

@media screen and (max-width: 420px){
    margin: 0;
    padding: 10px;
    width: 100%;
}
`

const FooterLinkTitle = styled.h1`
font-size: 16px;
margin-bottom: 16px;
font-family: 'Rubik', sans-serif;
`

const FooterLink = styled(Link)`
color: #fff;
text-decoration: none;
margin-bottom: 0.5rem;
font-size: 14px;

&:hover{
    color: #0033FF;
    transition: 0.3s ease-out;
}
`

const SocialMedia = styled.section`
max-width: 1000px;
width: 100%;
`

const SocialMediaWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
max-width: 1100px;
margin: 40px auto 0 auto;

@media screen and (max-width: 820px){
    flex-direction: column;
}
`

const SocialLogo = styled(Link)`
justify-self: start;
cursor: pointer;
text-decoration: none;
font-size: 1.5rem;
display: flex;
align-items: center;
margin-bottom: 16px;
font-weight: bold;
color: #fff;
font-family: 'Nunito', sans-serif;

`

const WebsiteRights = styled.small`
color: #fff;
margin-bottom: 16px;
`

const SocialIcons = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 240px;
`

const SocialIconLink = styled.a`
color: #fff;
font-size: 24px;
`

const Footer = () => {
    const toggleHome = () => {
       scroll.scrollToTop();
    };

  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to="/signin">About Us</FooterLink>
                        <FooterLink to="/signin">How it works</FooterLink>
                        <FooterLink to="/signin">Testimonials</FooterLink>
                        <FooterLink to="/signin">Careers</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink to="/signin">Contact</FooterLink>
                        <FooterLink to="/signin">Support</FooterLink>
                        <FooterLink to="/signin">Destinations</FooterLink>
                        <FooterLink to="/signin">Sponsorships</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>

                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Videos</FooterLinkTitle>
                        <FooterLink to="/signin">About Us</FooterLink>
                        <FooterLink to="/signin">How it works</FooterLink>
                        <FooterLink to="/signin">Testimonials</FooterLink>
                        <FooterLink to="/signin">Careers</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to="/signin">Instagram</FooterLink>
                        <FooterLink to="/signin">Facebook</FooterLink>
                        <FooterLink to="/signin">Youtube</FooterLink>
                        <FooterLink to="/signin">Twitter</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/" onClick={toggleHome}>Before 2050.</SocialLogo>
                    <WebsiteRights>logo © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                            <FaFacebook/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                            <FaInstagram/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                            <FaYoutube/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                            <FaTwitter/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                            <FaLinkedin/>
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
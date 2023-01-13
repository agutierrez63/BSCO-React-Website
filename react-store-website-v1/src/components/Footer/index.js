import React from 'react'
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube
} from 'react-icons/fa';
import {
  FooterContainer, 
  FooterWrap, 
  SocialMedia, 
  SocialMediaWrap, 
  SocialIcons, 
  SocialIconLink,
  FooterP
} from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <SocialMedia>
                <SocialMediaWrap>
                  <SocialIcons>
                    <SocialIconLink href="/" target="_blank" rel="noopener noreferrer" arial-label="facebook"><FaFacebook/></SocialIconLink>
                    <SocialIconLink href="/" target="_blank" rel="noopener noreferrer" arial-label="instagram"><FaInstagram/></SocialIconLink>
                    <SocialIconLink href="/" target="_blank" rel="noopener noreferrer" arial-label="twitter"><FaTwitter/></SocialIconLink>
                    <SocialIconLink href="/" target="_blank" rel="noopener noreferrer" arial-label="youtube"><FaYoutube/></SocialIconLink>
                    <FooterP>All Rights Reserved &copy; {new Date().getFullYear()}.</FooterP>
                  </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
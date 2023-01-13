import React, {useState} from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { HeroBtn, HeroContainer, HeroContent, HeroH1, HeroItems, HeroP } from './HeroElements';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () =>{
    setIsOpen(!isOpen);
  }
  return (
    <HeroContainer>
        <Navbar toggle={toggle}/>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <HeroContent>
          <HeroItems>
            <HeroH1>Support Your Local Music Store</HeroH1>
            <HeroP>BS⚡️Co</HeroP>
            <HeroBtn>Shop</HeroBtn>
          </HeroItems>
        </HeroContent>
    </HeroContainer>
  )
}

export default Hero;
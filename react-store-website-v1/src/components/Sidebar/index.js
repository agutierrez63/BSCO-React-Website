import React from 'react';
import { 
    SidebarContainer, 
    Icon, CloseIcon, 
    SidebarMenu, 
    SidebarLink, 
    SidebarRoute, 
    SideBtnWrap 
} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
  const SidebarLinks = [
    {
        name: 'Home',
        route: '/'
    },
    {
        name: 'About',
        route: '/about'
    },
    {
        name: 'Shop',
        route: '/shop'
    },
    {
        name: 'Cart',
        route: '/cart'
    },
    {
        name: 'Contact Us',
        route: '/contact'
    },
  ];
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon>
            <CloseIcon/>
        </Icon>
        <SidebarMenu>
            <SidebarLink to="/">About</SidebarLink>
            <SidebarLink to="/">Shop</SidebarLink>
            <SidebarLink to="/">Cart</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
            <SidebarRoute to ="/">Contact Us</SidebarRoute>
        </SideBtnWrap>
    </SidebarContainer>
  )
}

export default Sidebar
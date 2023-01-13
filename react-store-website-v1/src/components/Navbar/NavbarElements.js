import styled from "styled-components";
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'

export const Nav = styled.nav`
background: transparent;
height: 80px;
display: flex;
justify-content: center;
font-weight: 100;
`;

export const NavLink = styled(Link)`
color: #fff;
font-size: 2rem;
display: center;
align-items: center;
text-decoration: none;
cursor: pointer;

@media screen and (max-width:400px) {
    position: absolute;
    top: 10px;
    left: 25px;
}
`;

export const NavLogo = styled.div`
height: 100%;
width: auto;
display: flex;
justify-content: center;
padding: 0.8rem 1rem;

@media screen and (max-width:380px) {
    .logo {
        display: none;
    }
}
`;

export const NavIcon = styled.div`
display: block;
position: absolute;
top: 0;
right: 0;
cursor: pointer;
color: #fff;

p {
    transform: translate(-175%, 100%);
    font-weight: bold;
}
`;

export const Bars = styled(FaBars)`
font-size: 2rem;
transform: translate(-50%, -15%);
`;


import styled from "styled-components";

export const FooterContainer = styled.footer`
background-color: #150f0f;
`;

export const FooterWrap = styled.div`
padding: 16px 24px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 1300px;
margin: 0 auto;
`;

export const SocialMedia = styled.section`
max-width: 1300px;
width: 100%;
`;

export const SocialMediaWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
max-width: 1100px;
margin: 16px auto 0 auto;
`;

export const SocialIcons = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 240px;
`;

export const SocialIconLink = styled.a`
color: #fff;
font-size: 24px;
`;

export const FooterP = styled.p`
font-size: clamp(0.5rem, 2.5vw, 2rem);
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 0 2rem;
width:  50px;
color: #fff;
text-transform: uppercase;
line-height: 1;
font-weight: bold;
`;
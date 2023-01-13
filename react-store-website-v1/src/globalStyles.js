import { createGlobalStyle } from "styled-components";

export const Globalstyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'EB Garamond', sans-serif;
}

html {
    scroll-behavior: smooth;
}
`;
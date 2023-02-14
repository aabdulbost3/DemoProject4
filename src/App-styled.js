import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html{
  scroll-behavior: smooth;
}
 body {
    margin: 0 ;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  ul,ol{
  list-style: none;
  }
`;

export const WrapperContainer = styled.div`
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
`;

export const Div = styled.div`
  overflow: hidden;
`;

import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { theme } from '../style/theme'
import Navbar from './Navbar/Navbar';
import { breakpoints } from '../style/theme';
import Footer from './Footer'
import { Helmet } from 'react-helmet';

const GlobalStyles = createGlobalStyle`
  // @import url('https://fonts.googleapis.com/css2?family=Kaisei+Tokumin:wght@400;500;700&display=swap');
  html {
    scroll-behavior: smooth;
  }
 
  body {
    font-family: 'Montserrat', Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.font};
    box-sizing: border-box;
  }
  h1 {
    @media ${props => props.theme.device.laptop} {
      font-size: 36px;
    }
    @media ${props => props.theme.device.mobile} {
      font-size: 20px;
    }
    @media ${props => props.theme.device.mobile} {
      font-size: 24px;
    }
  }
`;

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  margin-top: 150px;
  @media (max-width: ${breakpoints.mobile}px) {
    margin-top: 0;
  }
`

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Helmet>
      <title>Florencia Nieto Interiores</title>
    </Helmet>
    <LayoutWrapper>
      <GlobalStyles />
      <Navbar />
      <Main>
        {children}
      </Main>
      <Footer />
    </LayoutWrapper>
  </ThemeProvider>
);

export default Layout
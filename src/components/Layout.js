import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { theme } from '../style/theme'
import Navbar from './Navbar/Navbar';
//import Footer from '../components/Footer'

const GlobalStyles = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
 
  body {
    font-family: Arial, Helvetica, sans-serif;
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
`

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <LayoutWrapper>
      <GlobalStyles />
      <Navbar />
      <Main>
        {children}
      </Main>
      {/* <Footer /> */}
    </LayoutWrapper>
  </ThemeProvider>
);

export default Layout
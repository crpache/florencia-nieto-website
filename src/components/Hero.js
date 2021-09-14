import React from "react";
import styled from "styled-components";
import { useWindowSize, useIsClient } from "../utils/hooks";
import { breakpoints } from "../style/theme";
import HeroImg from '../img/hero-img.jpg'
import MobileImg from '../img/textura-blanca.jpg'
import LogoImg from '../img/logo-mobile.png'

const HeroWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  z-index: 0;
  background-image: url(${HeroImg});
  background-size: cover;
  @media (max-width: ${breakpoints.mobile}px) {
    background-image: url(${MobileImg});
    background-size: cover;
    top: 0;
  }
`;

const HeroTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;

  @media (max-width: ${breakpoints.mobile}px) {
    top: 0;
  }
`;

const TitleText = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  background-color: rgba(0,0,0,.5);
  padding: 5px 15px;
  margin: 5px;
  font-size: 60px;
  font-weight: 100;
  letter-spacing: 4px;
`

const SubtitleText = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  background-color: rgba(0,0,0,.5);
  margin: 5px;
  padding: 5px 15px;
  font-size: 30px;
  font-weight: 100;
  letter-spacing: 2px;
`

const Logo = () => (
  <img 
    src={LogoImg}
    alt="logo"
    height={300}
  />
)

const Hero = () => {
  const { isClient, key } = useIsClient();
  const { width } = useWindowSize();
  const Content = width > breakpoints.mobile ? (
    <>
    <TitleText> Florencia Nieto </TitleText>
    <SubtitleText> Diseño en arquitectura interior </SubtitleText>
    </>
  ) : <Logo />

  if (!isClient) return null;
  return (
    <HeroWrapper key={key}>
      <HeroTitle>
        {Content}
      </HeroTitle>
    </HeroWrapper>
  );
};

export default Hero;

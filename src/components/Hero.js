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
  justify-content: end;
  height: 100vh;
  width: 100%;
  z-index: 0;
  background-image: url(${HeroImg});
  background-size: cover;
  @media (max-width: ${breakpoints.mobile}px) {
    justify-content: center;
    background-image: url(${MobileImg});
    background-size: cover;
    top: 0;
  }
`;

const HeroTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  margin-right: 200px;
  margin-top: 30px;
  text-align: right;
  color: white;

  @media (max-width: ${breakpoints.mobile}px) {
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0;
    top: 0;
  }
`;

const TitleText = styled.h2`
  color: #444;
  padding: 5px 15px;
  margin: 5px;
  font-size: 40px;
  font-weight: 100;
  letter-spacing: 4px;
`

const SubtitleText = styled.h2`
  color: #444;
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
    width='100%'
  />
)

const Hero = () => {
  const { isClient, key } = useIsClient();
  const { width } = useWindowSize();
  const Content = width > breakpoints.mobile ? (
    <>
    <TitleText>"Fashions fade,</TitleText>
    <TitleText style={{ marginRight: '70px' }}>style is eternal"</TitleText>
    <SubtitleText style={{ marginRight: '140px' }}>Yves Saint Laurent</SubtitleText>
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

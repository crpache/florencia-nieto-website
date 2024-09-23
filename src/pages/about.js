import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import { breakpoints } from "../style/theme";
// import SpainIcon from "../icons/espana.svg";
// import UsaIcon from "../icons/estados-unidos.svg";
import aboutImg from '../img/sobreMi.jpg'
import Button from "../components/Button";

import DownloadIcon from '../icons/download.svg';

const AboutWrapper = styled.section`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  width: 100%;
  margin-bottom: 6rem;

  @media (max-width: ${breakpoints.mobile}px) {
    flex-direction: column-reverse;
    margin-top: 3rem;
    padding: 0;
    margin-bottom: 3rem;
  }
`;

const ColumnWrapper = styled.div`
  flex: 1;
  margin-right: 1rem;

  .service-image {
    @media (max-width: ${breakpoints.mobile}px) {
      height: 28rem;
    }
  }

  @media (max-width: ${breakpoints.mobile}px) {
    margin-right: 0;
  }
`;

const H1 = styled.h1`
  margin-top: 0;
`;

const ColumnWrapper2 = styled.div`
  display: inline-flex;
  flex-direction: column;
  flex: 1;
  padding: 0 2rem;

  p,
  li {
    line-height: 1.5;
  }

  @media (max-width: ${breakpoints.mobile}px) {
    margin: 2rem 0;
    padding: 1rem;
    gap: 1rem;
  }
`;

const Image = styled.img`
  height: auto;
  width: 100%;
`

const ButtonsWrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  gap: 1rem;
`;

const IconWrapper = styled.div`
  display: inline-block;
  svg {
    transition: fill 0.3s ease-in-out;
  }
  
  &:hover svg {
    fill: white;
  }
`;

const About = () => (
  <Layout>
    <AboutWrapper>
      <ColumnWrapper>
        <Image
          src={aboutImg}
          alt="Profile photo"
        />
      </ColumnWrapper>
      <ColumnWrapper2>
        <H1>About me</H1>
        <div>
          {/* <SpainIcon fill="#ccc" height={25} />
          <p>
            Diseñadora de interiores y decoradora, creciendo continuamente y
            enfrentando nuevos desafíos. Transformo los espacios para que sean
            funcionales, transmitiendo la personalidad de sus dueños y
            conviertiéndolos en parte de ellos. Especializada en interiorismo,
            reformas integrales, restauración y decoración en viviendas
            particulares, oficinas y locales comerciales.
          </p>
          <br></br> */}
          {/* <UsaIcon fill="#ccc" height={25} /> */}
          <p>
            Originally from Argentina and currently a resident of New Zealand, I hold a Diploma in Interior Design and a Master of Applied Management. Since 2015, I have been dedicated to interior design, specialising in turnkey solutions, online and in-person consultations.
          </p>
          <p>
            My expertise includes comprehensive renovations and the decoration of residential, office, and retail environments. I excel at enhancing functionality and achieving project goals, whether reflecting homeowners' personal styles or meeting commercial branding needs.
          </p>
          <p>
            I possess a strong ability to understand and interpret clients' needs, even when they are unsure of their requirements. My approach involves attentive listening and delivering creative solutions that exceed expectations and effectively transform their environments.
          </p>
          <p>
            My design philosophy focuses on creating visually appealing and functional interiors. I tailor each project to individual needs and preferences, balancing creativity with practicality. Attention to detail and collaborative teamwork are fundamental to achieving outstanding results.
          </p>
        </div>
        <ButtonsWrapper>
          <Button to="/">
            <div>
              <div style={{ 'marginRight': '12px' }}>Portfolio</div>
              <IconWrapper>
                <DownloadIcon />
              </IconWrapper>
            </div>
          </Button>
          <Button to="/">
            <div>
              <div style={{ 'marginRight': '12px' }}>CV</div>
              <IconWrapper>
                <DownloadIcon />
              </IconWrapper>
            </div>
          </Button>
        </ButtonsWrapper>
      </ColumnWrapper2>
    </AboutWrapper>
  </Layout>
);

export default About;

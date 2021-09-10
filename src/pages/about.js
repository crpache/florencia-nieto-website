import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import { breakpoints } from "../style/theme";
import SpainIcon from "../icons/espana.svg";
import UsaIcon from "../icons/estados-unidos.svg";
import aboutImg from '../img/sobreMi.jpg'
import Button from "../components/Button";

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
  gap: 3rem;

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
  height: 100%;
  width: 100%;
`

const ButtonsWrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  gap: 1rem;
`;

const About = () => (
  <Layout>
    <AboutWrapper>
      <ColumnWrapper>
        <Image
          src={aboutImg}
          alt="foto sobre mi"
        />
      </ColumnWrapper>
      <ColumnWrapper2>
        <H1>Sobre mi</H1>
        <div>
          <SpainIcon fill="#ccc" height={25} />
          <p>
            Diseñadora de interiores y decoradora, creciendo continuamente y
            enfrentando nuevos desafíos. Transformo los espacios para que sean
            funcionales, transmitiendo la personalidad de sus dueños y
            conviertiéndolos en parte de ellos. Especializada en interiorismo,
            reformas integrales, restauración y decoración en viviendas
            particulares, oficinas y locales comerciales.
          </p>
          <br></br>
          <UsaIcon fill="#ccc" height={25} />
          <p>
            Interior designer and decorator. Eager to face new challenges and
            keep on growing in my career. I transform spaces to make them
            functional. I try to match the owners personality to their own home,
            so as to make them feel part of it. I specialized in interior
            design, comprehensive reforms, restoration and decoration of private
            homes, offices and shops.
          </p>
        </div>
        <ButtonsWrapper>
          <Button to="/#contact-form">Contáctame</Button>
          <Button to="/">Volver</Button>
        </ButtonsWrapper>
      </ColumnWrapper2>
    </AboutWrapper>
  </Layout>
);

export default About;

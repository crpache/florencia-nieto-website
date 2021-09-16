import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Title from "./Title";
import KeyIcon from "../icons/key-solid.svg";
import OnlineIcon from "../icons/globe-americas-solid.svg";
import AdviceIcon from "../icons/people-carry-solid.svg";

const ServiceWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 6rem;
`;

const Card = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 20%;
  padding: 2rem;
  background-color: white;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1);
  h3,
  p {
    text-align: center;
  }
  p {
    line-height: 1.8;
  }
  h3 {
    margin-top: 2rem;
  }
  @media (max-width: 768px) {
    width: 75%;
    margin-bottom: 2rem;
  }
`;

const CardHeading = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleWrapper = styled.div`
  padding: 3rem 0;
  @media (max-width: 768px) {
    height: 150px;
    ${Title} {
      font-size: 24px;
    }
  }
`;

const P = styled.p`
  line-height: 1.5rem;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: stretch;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ServicesSection = () => {
  return (
    <ServiceWrapper id="services">
      <TitleWrapper>
        <Title> Servicios </Title>
      </TitleWrapper>
      <CardWrapper>
        <Card>
          <CardHeading>
            <KeyIcon height={50} />
            <h3>Diseño y Decoración Integral con llave en mano</h3>
          </CardHeading>
          <P>
            ¡Me encargo de que absolutamente <strong>TODO</strong> quede
            resuelto! Vos solo tenés que contarme tus necesidades, gustos y cuál
            es tu presupuesto. Yo voy a coordinar los gremios, comprar el
            mobiliario o los accesorios que hagan falta y culminar el trabajo,
            para que vos disfrutes de tu hogar y vivas el cambio que hicimos
            realidad.
          </P>
          <Button to="llave-en-mano"> Conocé más </Button>
        </Card>
        <Card>
          <CardHeading>
            <OnlineIcon height={50} />
            <h3>Proyectos online o presencial</h3>
          </CardHeading>
          <P>
            ¡Mayor comodidad y dinamismo! Diseño uno o varios ambientes de tu
            casa. Te voy a brindar las herramientas necesarias para
            que puedas ejecutar el diseño a tu ritmo y tengas el hogar que
            siempre soñaste.
          </P>
          <Button to="proyecto-online"> Conocé más </Button>
        </Card>
        <Card>
          <CardHeading>
            <AdviceIcon height={50} />
            <h3>Asesoramiento</h3>
          </CardHeading>
          <P>
            Si querés hacer un cambio en tu hogar, pero no sabés por dónde
            empezar ¡Este servicio es ideal para vos! Es muy sencillo: voy a
            resolver todas tus dudas con respecto al/los ambiente/s que querés
            intervenir y juntos vamos a definir qué es lo que te conviene
            realizar para optimizar tus ideas y potenciar tu presupuesto.
          </P>
          <Button to="asesoramiento"> Conocé más </Button>
        </Card>
      </CardWrapper>
    </ServiceWrapper>
  );
};

export default ServicesSection;

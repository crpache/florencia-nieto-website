import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import { breakpoints } from "../style/theme";
import proyectoOnlineImg from '../img/proyecto-online.jpg'
import Button from "../components/Button";

const ServicesWrapper = styled.section`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  width: 100%;
  margin-bottom: 6rem;

  @media (max-width: ${breakpoints.mobile}px) {
    display: block;
    margin-top: 0;
    padding: 0;
    margin-bottom: 0;
  }
`;

const ColumnWrapper = styled.div`
  flex: 1;
  margin-right: 1rem;

  .service-image {
    height: 67rem;

    @media (max-width: ${breakpoints.mobile}px) {
      height: 20rem;
    }
  }

  @media (max-width: ${breakpoints.mobile}px) {
    margin-right: 0;
  }
`;

const ColumnWrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 2rem;
  justify-content: space-between;

  p,
  li {
    line-height: 1.5;
  }

  @media (max-width: ${breakpoints.mobile}px) {
    margin: 2rem 0;
    padding: 1rem;
  }

  ${Button} {
    align-self: center;
  }
`;

const Ul = styled.ul`
  li {
    margin: 1rem;
    margin-bottom: 1rem;

    @media (max-width: ${breakpoints.mobile}px) {
      overflow-wrap: break-word;
    }
  }
  li:nth-child(1)::marker {
    content: "π§ ";
  }

  li:nth-child(2)::marker {
    content: "π·π½ββοΈ ";
  }

  li:nth-child(2) {
    margin-bottom: 1rem;
  }

  li:nth-child(4)::marker {
    content: "π΅ ";
  }

  li:nth-child(5)::marker {
    content: "ποΈ ";
  }

  li:nth-child(6)::marker {
    content: "π‘ ";
  }
`;

const SubUl = styled.ul`
  li {
    margin: 0;

    @media (max-width: ${breakpoints.mobile}px) {
      overflow-wrap: break-word;
    }
  }
  li:last-child {
    margin-bottom: 2rem;
  }

  li:nth-child(1)::marker {
    content: "πΈ ";
  }

  li:nth-child(2)::marker {
    content: "πΊοΈ ";
  }

  li:nth-child(2) {
    margin-bottom: 0;
  }

  li:nth-child(3)::marker {
    content: "ποΈ ";
  }
`;

const H2 = styled.h2`
  margin-top: 0;
  margin-bottom: 3rem;

  @media (max-width: ${breakpoints.mobile}px) {
    margin-top: 2rem;
    text-align: center;
  }
`;

const H3 = styled.h3`
  margin-bottom: 0;
`;

const P = styled.p`
  margin-bottom: 0;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  @media (max-width: ${breakpoints.mobile}px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
`

const OnlineProject = () => (
  <Layout>
    <ServicesWrapper>
      <ColumnWrapper>
        <Image
          src={proyectoOnlineImg}
          alt="servicio proyecto online"
        />
      </ColumnWrapper>
      <ColumnWrapper2>
        <H2> Proyectos online o presencial </H2>
        <p>
          Β‘Mayor comodidad y dinamismo! DiseΓ±o uno o varios ambientes de tu casa. Te presentarΓ© una idea, un catΓ‘logo de productos 
          y un plano que te darΓ‘ las herramientas para que puedas ejecutar el diseΓ±o a tu ritmo
        </p>
        <h3>CΓ³mo funciona:</h3>
        <Ul>
          <li>
            Escribime a&nbsp;
            <a
              href="mailto:contacto@florencianietointeriores.com"
              target="_blank"
              rel="noreferrer"
            >
              contacto@florencianietointeriores.com
            </a>
            &nbsp;y coordinamos una reuniΓ³n por videollamada, para que me cuentes tus necesidades, presupuesto y gustos.
          </li>
          <li>Necesito de tu parte: </li>
          <SubUl>
            <li>Fotos y/o vΓ­deos actuales de tu hogar,</li>
            <li>
              plano con medidas (con un boceto a mano alzada nos serΓ‘
              suficiente),
            </li>
            <li>ImΓ‘genes de referencia, para ejemplificar tus gustos.</li>
          </SubUl>
          <li>Te paso el presupuesto y si estΓ‘s de acuerdo avanzamos</li>
          <li>
            Aceptado y definido todo Β‘ComenzarΓ© a trabajar! y nos mantendremos en contacto mediante 
            reuniones intermedias para ir mostrΓ‘ndote el avance y hacer modificaciones si fueran necesarias.
          </li>
          <li>
            Cuando estΓ© todo listo, por videollamada, te presentarΓ© la propuesta final
          </li>
        </Ul>
        <H3>QuΓ© recibirΓ‘s:</H3>
        <P>Planos 2D con distribuciΓ³n del mobiliario</P>
        <ul>
          <li>
            Moodboard con paleta de colores, materialidad e imΓ‘genes de
            referencia
          </li>
          <li> CatΓ‘logo con links de compras de: </li>
          <ul>
            <li> Muebles </li>
            <li> Accesorios: plantas: alfombras, objetos decorativos </li>
            <li> IluminaciΓ³n </li>
            <li> Pisos y revestimientos (si corresponde) </li>
          </ul>
        </ul>
        <br></br>
        
        <ButtonsWrapper>
          <Button to="/#contact-form">ContΓ‘ctame</Button>
          <Button to="/#services">MΓ‘s servicios</Button>
        </ButtonsWrapper>
      </ColumnWrapper2>
    </ServicesWrapper>
  </Layout>
);

export default OnlineProject;

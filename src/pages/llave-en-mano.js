import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import { breakpoints } from "../style/theme";
import llaveEnManoImg from '../img/llave-en-mano.jpg'
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
    content: "📧 ";
  }

  li:nth-child(2)::marker {
    content: "💵 ";
  }

  li:nth-child(3)::marker {
    content: "⌨️ ";
  }

  li:nth-child(4)::marker {
    content: "🏗️ ";
  }

  li:nth-child(5)::marker {
    content: "🏡 ";
  }
  li:nth-child(6)::marker {
    content: "🔑 ";
  }
`;

const H2 = styled.h2`
  margin-top: 0;
  margin-bottom: 2rem;

  @media (max-width: ${breakpoints.mobile}px) {
    text-align: center;
  }
`;

const H3 = styled.h3`
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

const keyOnHand = () => (
  <Layout>
    <ServicesWrapper>
      <ColumnWrapper>
        <Image
          src={llaveEnManoImg}
          alt="servicio llave en mano"
        />
      </ColumnWrapper>
      <ColumnWrapper2>
        <H2> Diseño y Decoración Integral con llave en mano </H2>
        <p>¡Me encargo de que absolutamente TODO quede resuelto!</p>
        <H3> Cómo funciona:</H3>
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
            &nbsp;y coordinamos una reunión para que me cuentes tus necesidades,
            presupuesto y gustos
          </li>
          <li>Te paso el presupuesto y si estas de acuerdo avanzamos</li>
          <li>Realizo un ANTEPROYECTO con la idea general (en la cual trabajaremos en conjunto ya que es 100% personalizada).</li>
          <li>
            Una vez que tenemos todo definido y aceptado, pasamos al PROYECTO que
            es la dirección de obra.
          </li>
          <li>
            Se denomina “llave en mano” porque me ocupo de toda la gestión de compra
            del mobiliario y accesorios, de coordinar a los gremios que van a hacer el trabajo 
            asignado y todos los detalles para que no tengas que preocuparte por nada y puedas 
            tener el/los ambientes listos para utilizarlos.
          </li>
          <li>
            Cuando terminamos te “entrego” la llave de tu casa para que puedas disfrutar de tu hogar 
            y vivir el cambio que hicimos realidad.
          </li>
        </Ul>
        <ButtonsWrapper>
          <Button to="/#contact-form">Contáctame</Button>
          <Button to="/#services">Más servicios</Button>
        </ButtonsWrapper>
      </ColumnWrapper2>
    </ServicesWrapper>
  </Layout>
);

export default keyOnHand;

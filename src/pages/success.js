import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import { breakpoints } from '../style/theme';
import Button from '../components/Button';

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  flex: 1;
  @media (max-width: ${breakpoints.mobile}px) {
    padding: 0 1rem;
  }
`

const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px;
  border: 1px solid #888;
  border-radius: 5px;
`

const Success = () => (
  <Layout>
    <Wrapper>
      <Banner>
        <p>Consulta enviada exitosamente. Me pondré en contacto a la brevedad</p>
        <p style={{ alignSelf: 'flex-end'}}>Florencia Nieto</p>
      </Banner>
      <Button to='/'>Volver</Button>
    </Wrapper>
  </Layout>
)

export default Success
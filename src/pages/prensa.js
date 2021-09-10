import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import { breakpoints } from "../style/theme";
import Iframe from "../components/Iframe";
import PageTitle from '../components/Title'

const Title = styled.h2``;

const SectionWrapper = styled.section`
  box-sizing: border-box;
  padding: 2rem;
  width: 70vw;
  margin-bottom: 6rem;

  @media (max-width: ${breakpoints.mobile}px) {
    margin-top: 3rem;
  }
`;

const IframesWrapper = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Separator = styled.hr`
  margin-bottom: 3rem;
`

const Prensa = () => (
  <Layout>
    <PageTitle>Prensa</PageTitle>
    <SectionWrapper>
      <Title> Webserie Sodimac | Interiorista seleccionada para el reality </Title>
      <IframesWrapper>
        <Iframe src="https://www.youtube.com/embed/W8VPVHi-CiM"></Iframe>
        <Iframe src="https://www.youtube.com/embed/TmQLcmH06bA"></Iframe>
      </IframesWrapper>
      <Separator />

      <Title>
        TENDIEZ | Disertante - La comunicación entre el diseño y el comitente
      </Title>
      <IframesWrapper>
        <Iframe src="https://www.youtube.com/embed/Dfa3JOM1DZo"></Iframe>
        <Iframe src="https://www.youtube.com/embed/n8k_jSVVUIg"></Iframe>
      </IframesWrapper>
      <Separator />

      <Title> Alternativa TV | Columna de Interiorismo </Title>
      <IframesWrapper>
        <Iframe src="https://www.youtube.com/embed/iv0boPw2EbY?start=2"></Iframe>
        <Iframe src="https://www.youtube.com/embed/dU0Yce1Nf2o"></Iframe>
        <Iframe src="https://www.youtube.com/embed/7wCZz6F19Ls"></Iframe>
        <Iframe src="https://www.youtube.com/embed/QTHDo-oMFMQ"></Iframe>
      </IframesWrapper>
      <Separator />

      <Title> En buena Hora | Columna de Interiorismo </Title>
      <IframesWrapper>
        <Iframe src="https://www.youtube.com/embed/F61rCPGHcw4"></Iframe>
        <Iframe src="https://www.youtube.com/embed/Fe5B9oScB10"></Iframe>
        <Iframe src="https://www.youtube.com/embed/ZyDtOK0o1Q4"></Iframe>
        <Iframe src="https://www.youtube.com/embed/oW-bji5XjrU"></Iframe>
        <Iframe src="https://www.youtube.com/embed/rLDIuM162IA"></Iframe>
        <Iframe src="https://www.youtube.com/embed/7GtGkMFWp50"></Iframe>
        <Iframe src="https://www.youtube.com/embed/Kqsq-0bqLRY"></Iframe>
        <Iframe src="https://www.youtube.com/embed/08LwpqG77dQ"></Iframe>
        <Iframe src="https://www.youtube.com/embed/-dtWJ95U3_s"></Iframe>
        <Iframe src="https://www.youtube.com/embed/NM6kMmR2RVI"></Iframe>
        <Iframe src="https://www.youtube.com/embed/ACX6lxaUj4E"></Iframe>
        <Iframe src="https://www.youtube.com/embed/3k4glNxD0bw"></Iframe>
        <Iframe src="https://www.youtube.com/embed/Qh4RxGFsBzY"></Iframe>
        <Iframe src="https://www.youtube.com/embed/cvcnVzEOl80"></Iframe>
        <Iframe src="https://www.youtube.com/embed/0PAKlxaHV7I"></Iframe>
        <Iframe src="https://www.youtube.com/embed/hCU7b2IEDuI"></Iframe>
        <Iframe src="https://www.youtube.com/embed/KWTh4gb0qkc"></Iframe>
        <Iframe src="https://www.youtube.com/embed/gIUygfNsGCI"></Iframe>
        <Iframe src="https://www.youtube.com/embed/vj63-5E-SB8"></Iframe>
        <Iframe src="https://www.youtube.com/embed/m-jKvRDFZHQ"></Iframe>
      </IframesWrapper>
    </SectionWrapper>
  </Layout>
);

export default Prensa;

import React from "react";
import styled from "styled-components";
import { breakpoints } from "../style/theme";
import Title from "./Title";
import Button from "./Button";
//import ReCAPTCHA from "react-google-recaptcha";

const FormWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-bottom: 4rem;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  flex: 1;
  width: 70%;
  align-items: center;
  flex-direction: column;

  @media (max-width: ${breakpoints.mobile}px) {
    width: 100%;
  }
`;

const Input = styled.input`
  width: 80%;
  border: 0;
  border-bottom: 1px solid black;
  background: transparent;
  margin-bottom: 2rem;
  outline: none;
`;

const TextArea = styled.textarea`
  width: 80%;
  border: 0;
  border-bottom: 1px solid black;
  background: transparent;
  margin-bottom: 2rem;
  outline: none;
  resize: none;
`;

const ContactSection = () => (
  <FormWrapper id="contact-form">
    <Title>Contacto</Title>
    <Form name="Contact Form" method="POST" data-netlify="true" action='/src/pages/success.js' /* data-netlify-recaptcha="true" */>
      <input type="hidden" name="form-name" value="Contact Form" />

      <Input type="text" name="name" placeholder="Nombre *" autocomplete="off" required/>
      <Input type="email" name="email" placeholder="Email *" autocomplete="off" required/>
      <Input type="text" name="phone" placeholder="Telefono" autocomplete="off"/>
      <TextArea name="mensaje" placeholder="Mensaje *" rows="4" required/>
      
      {/* <ReCAPTCHA sitekey={process.env.GATSBY_RECAPTCHA_KEY} /> */}

      <Button type="submit">Enviar</Button>
    </Form>
  </FormWrapper>
);

export default ContactSection;

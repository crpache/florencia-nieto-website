import React from "react";
import styled from "styled-components";
import InstagramIcon from "../icons/instagram-brands.svg";
import FacebookIcon from "../icons/facebook-square-brands.svg";
import HouzzIcon from "../icons/houzz-brands.svg";
import LinkedInIcon from "../icons/linkedin-brands.svg";
import EnvelopIcon from "../icons/envelope-regular.svg";

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 20px;
  height: 300px;
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.fontLight};

  a {
    color: white;
    text-decoration: none;
    margin: 1rem;
  }

  h3 {
    padding-bottom: 1rem;
    text-align: center;
  }

  p {
    text-align: center;
    line-height: 2;
  }
`;

const A = styled.a`
  color: white;
  text-decoration: none;
  margin: 0.5rem !important;
`;
const SocialWrapper = styled.section`
  display: flex;
  justify-content: center;
`;

const FooterInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  height: 50px;
`;

const TextSection = styled.div`
  padding: 0 10px;
`;

const Footer = () => (
  <FooterWrapper>
    <TextSection>
      <h3> Sígueme </h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet
        blandit mi. Vestibulum pellentesque ex risus
      </p>
      <SocialWrapper>
        <a
          href="https://www.instagram.com/florencianietointeriores"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon fill="#ccc" height={25} />
        </a>
        <a
          href="https://www.facebook.com/florencianieto8/"
          target="_blank"
          rel="noreferrer"
        >
          <FacebookIcon fill="#ccc" height={25} />
        </a>
        <a
          href="https://www.houzz.com/professionals/interior-designers-and-decorators/florencia-nieto-interiores-pfvwus-pf~1386239010"
          target="_blank"
          rel="noreferrer"
        >
          <HouzzIcon fill="#ccc" height={25} />
        </a>
        <a
          href="https://www.linkedin.com/in/florencianieto/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon fill="#ccc" height={25} />
        </a>
        <a
          href="mailto:contacto@florencianietointeriores.com"
          target="_blank"
          rel="noreferrer"
        >
          <EnvelopIcon fill="#ccc" height={25} />
        </a>
      </SocialWrapper>
    </TextSection>
    <FooterInfo>
      <p>
        © 2021 -
        <A
          href="mailto:southpress.io@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          SouthPress
        </A>
      </p>
    </FooterInfo>
  </FooterWrapper>
);

export default Footer;

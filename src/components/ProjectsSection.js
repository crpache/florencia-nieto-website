import React from "react";
import styled from 'styled-components'
import DinamicGrid from "./DinamicGrid";
import Title from "./Title";
import Button from './Button'
import { useStaticQuery } from "gatsby";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TitleWrapper = styled.div`
  padding: 3rem 0;
`

const ProjectsSection = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: { frontmatter: { isLanding: { eq: true } } }) {
        nodes {
          frontmatter {
            cover
            title
          }
          fields {
            slug
          }
        }
      }
    }
  `);

  const items = data.allMarkdownRemark.nodes.map((node) => ({
    img: node.frontmatter.cover,
    title: node.frontmatter.title,
    slug: node.fields.slug,
  }));

  return (
    <Section id='#projects'>
      <TitleWrapper>
        <Title>Proyectos</Title>
      </TitleWrapper>
      <DinamicGrid items={items} />
      <Button to='projects'>Ver más</Button>
    </Section>
  );
};

export default ProjectsSection;

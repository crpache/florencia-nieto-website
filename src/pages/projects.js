import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby"
import DinamicGrid from "../components/DinamicGrid";
import Title from "../components/Title";

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const GridWrapper = styled.div`
  margin-bottom: 1rem;
`;

const Projects = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        nodes {
          frontmatter {
            title
            cover
          }
          fields {
            slug
          }
        }
      }
    }
  `)

  const projectsData = data.allMarkdownRemark.nodes.filter(project => project.frontmatter.cover)

  const projects = projectsData.map(project => ({
    img: project.frontmatter.cover,
    title: project.frontmatter.title,
    slug: project.fields.slug
  }))

  return (
    <>
      <TitleWrapper>
        <Title> Proyectos </Title>
      </TitleWrapper>
      <GridWrapper>
        <DinamicGrid items={projects}/>
      </GridWrapper>
    </>
  )
};

export default Projects;
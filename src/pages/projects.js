import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby"
import DinamicGrid from "../components/DinamicGrid";
import Title from "../components/Title";
import Layout from "../components/Layout";
import { breakpoints } from "../style/theme"

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  @media (max-width: ${breakpoints.mobile}px) {
    margin-top: 5rem;
  }
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
    <Layout>
      <TitleWrapper>
        <Title> Proyectos </Title>
      </TitleWrapper>
      <GridWrapper>
        <DinamicGrid items={projects}/>
      </GridWrapper>
    </Layout>
  )
};

export default Projects;
import React from "react";
import styled from "styled-components";
import { Link, graphql, useStaticQuery } from "gatsby"
//import Layout from "../components/Layout";
//import { Link } from "gatsby";
//import { StaticImage } from "gatsby-plugin-image";
//import { breakpoints } from "../style/theme";
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
            cover
            title
          }
        }
      }
    }
  `)

  const projectsData = data.allMarkdownRemark.nodes.filter(project => project.frontmatter.cover)

  const base = projectsData.map(project => ({
    img: project.frontmatter.cover,
    title: project.frontmatter.title
  }))

  base.length = 8

  const allProjects = [...base, ...base, ...base, ...base, ...base] 

  return (
    <>
      <TitleWrapper>
        <Title> Proyectos </Title>
      </TitleWrapper>
      <GridWrapper>
        <DinamicGrid projects={allProjects}/>
      </GridWrapper>
    </>
  )
};

export default Projects;
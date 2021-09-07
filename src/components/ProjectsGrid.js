import React from 'react'
import styled from 'styled-components'
import { Link, graphql, useStaticQuery } from "gatsby"
//import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { v4 as id } from 'uuid'
import Img from "gatsby-image"


const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 50vh);
  grid-template-areas:
    "img0 img0 img1 img2"
    "img0 img0 img3 img4"
    "img5 img5 img6 img6"
    "img7 img7 img6 img6";
  gap: 10px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(8, 50vh);
    grid-template-areas:
      "img0"
      "img1"
      "img2"
      "img3"
      "img4"
      "img5"
      "img6"
      "img7"
      "img8"
    ;
    gap-row: 10px;
  }
`

const ImageWrapper = styled(Link)`
  grid-area: img${props => props.index};
  :hover {
    filter: grayscale(100%);
    cursor: pointer;
  }
`

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`

const ProjectsGrid = () => {
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

  const projects = projectsData.map(project => ({
    img: project.frontmatter.cover,
    title: project.frontmatter.title
  }))

  projects.length = 8 // FIX THIS

  return (
    <Wrapper id="projects">
      <Grid>
        {projects.map((project, index) => (
          <ImageWrapper to='/test' index={index} key={id()}>
            <Image src={project.img} alt={project.title} />
          </ImageWrapper>
        ))}
      </Grid>
    </Wrapper>
  )
}

export default ProjectsGrid
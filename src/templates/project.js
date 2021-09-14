import React, { useState } from "react"
import Layout from '../components/Layout'
import styled from "styled-components"
import { graphql } from "gatsby"
import DinamicGrid from "../components/DinamicGrid"
import ImageGallery from "../components/ImageGallery"
import { breakpoints } from "../style/theme"
import { useWindowSize } from "../utils/useIsDesktop"

const ProjectTitle = styled.h1`
  color: ${({ theme }) => theme.colors.font};
  font-weight: 100;
`
const PageWrapper = styled.section`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  @media (max-width: ${breakpoints.mobile}px) {
    margin-top: 3rem;
  }`

const ProjectDescription = styled.article`
  color: ${({ theme }) => theme.colors.font};
  font-size: 18px;
  font-weight: 200;
  line-height: 2;
  margin: 40px 0;
  border-bottom: 1px solid #444;
  font-style: italic;
`

const ProjectHeading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70vw;
`

const ProjectGrid = styled.div`
  width: 70vw;
  @media (max-width: ${breakpoints.mobile}px) {
    width: 100vw;
  }
`

const Template = ({ title, description, images }) => {
  const { width } = useWindowSize();
  const isMobile = width <= breakpoints.mobile
  const [isGalleryOpen, setGalleryOpen] = useState(false)
  const [currentImg, setCurrentImg] = useState(0)

  const handleGalleryOpen = (currentImg = 0) => {
    if (!isMobile) {
      setGalleryOpen(true)
      setCurrentImg(currentImg)
    }
  }

  return (
    <>
      {isGalleryOpen ? <ImageGallery images={images} current={currentImg} closeGallery={() => setGalleryOpen(false)}/> : null}
      <PageWrapper>
        <ProjectHeading>
          <ProjectTitle>{title}</ProjectTitle>
          <ProjectDescription>
            {description}
          </ProjectDescription>
        </ProjectHeading>
        <ProjectGrid>
          <DinamicGrid items={images.map(img => ({img}))} onClick={handleGalleryOpen}/>
        </ProjectGrid>
      </PageWrapper>
    </>
  )
}

const ProjectPage = ({ data }) => {
  const { markdownRemark } = data

  return (
    <Layout>
      <Template
        images={markdownRemark.frontmatter.imageGallery}
        title={markdownRemark.frontmatter.title}
        description={markdownRemark.frontmatter.description}
      />
    </Layout>
  )
}

export default ProjectPage

export const projectPageQuery = graphql`
  query ProjectPage($slug: String!){
    markdownRemark(fields: {slug: {eq: $slug}}) {
      fields {
        slug
      }
      frontmatter {
        imageGallery
        title
        description
      }
    }
  }
`

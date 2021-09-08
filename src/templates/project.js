import React, { useState } from "react"
import Layout from '../components/Layout'
import styled from "styled-components"
import { graphql } from "gatsby"
import DinamicGrid from "../components/DinamicGrid"
//import NextIcon from '../icons/angle-right-solid.svg'
//import PrevIcon from '../icons/angle-left-solid.svg'

const ProjectTitle = styled.h1`
  color: ${({ theme }) => theme.colors.font};
  font-weight: 100;
`
const PageWrapper = styled.section`
  display: flex;
  height: 100vh;
  width: 70vw;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const ImagesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 15px;
  grid-template-areas:
    "img-1 img-1 img-2 img-3"
    "img-1 img-1 img-4 img-5";
  margin: 40px 0;
  img {
    cursor: pointer;
    :hover {
      filter: grayscale(80%);
    }
  }
`

const Img1 = styled.div`
  grid-area: img-1;
`
const Img2 = styled.div`
  grid-area: img-2;
`
const Img3 = styled.div`
  grid-area: img-3;
`
const Img4 = styled.div`
  grid-area: img-4;
`
const Img5 = styled.div`
  grid-area: img-5;
`

const Img = styled.img`
  //height: 100%;
  width: 100%;
  object-fit: cover;
`

const ProjectDescription = styled.article`
  color: ${({ theme }) => theme.colors.font};
  font-size: ${({ theme }) => theme.size.l};
  font-weight: 100;
  line-height: 2;
`

const Template = ({ title, description, images }) => {
  const [isGalleryOpen, setGalleryOpen] = useState(false)
  const [currentImg, setCurrentImg] = useState(0)

  const handleGalleryOpen = (currentImg = 0) => {
    setGalleryOpen(true)
    setCurrentImg(currentImg)
  }

  return (
    <>
{/*       {isGalleryOpen ? <ImageGallery currentImg={currentImg} closeGallery={() => setGalleryOpen(false)}/> : null}
 */}  <PageWrapper>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription>
          {description}
        </ProjectDescription>
        <DinamicGrid items={images.map(img => ({img}))}/>
      </PageWrapper>
    </>
  )
}



/* const GalleryWrapper = styled.section`
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: space-evenly;
  align-items: center;
  background-color: rgba(0,0,0,0.9);
`
const ImageGallery = ({ closeGallery, current = 0 }) => {
  const [currentImg, setCurrentImg] = useState(current)
  React.useEffect(() => setCurrentImg(current), [current])
  const data = useStaticQuery(graphql`
  {
    allMarkdownRemark {
      nodes {
        frontmatter {
          Images {
            text
            image {
              childImageSharp {
                gatsbyImageData(
                  height: 700
                  placeholder: BLURRED
                )
              }
            }
          }
        }
      }
    }
  }
`)

  const images = data.allMarkdownRemark.nodes[0].frontmatter.Images?.map(img => getImage(img.image))

  const handleNextImg = (e) => {
    e.stopPropagation()
    if (currentImg !== images.length) {
      setCurrentImg(currentImg + 1)
    }
  }

  const handlePrevImg = (e) => {
    e.stopPropagation()
    if (currentImg !== 0) {
      setCurrentImg(currentImg - 1)
    }
  }

  return (
    <GalleryWrapper onClick={closeGallery}>
      <PrevIcon onClick={handlePrevImg} color="#FFF" height={50} />
      <GatsbyImage height={700} image={images[currentImg]} style={{transition: "all 4s ease-in-out"}}/>
      <NextIcon onClick={handleNextImg} color="#FFF" height={50} />
    </GalleryWrapper>
  )
} */

/* export const ProjectPageTemplate = ({ title, description, images }) => {
  console.log({title, description, images})
  return (
    <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
      {title}
    </h2>
  )
} */

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

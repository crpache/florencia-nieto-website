import React from 'react'
import styled from 'styled-components'
import { Link, graphql, useStaticQuery } from "gatsby"
import { v4 as id } from 'uuid'
import _ from 'lodash'


const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const calcRows = (images) => {
  if (images > 7) return 4
  if (images > 5) return 3
  if (images > 2) return 2
  else return 1
}

const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: ${props => `repeat(${calcRows(props.images)}, 33vh)`};
  grid-template-areas:
    "img0 img0 img1 img2"
    "img0 img0 img3 img4"
    "img5 img5 img6 img6"
    "img7 img7 img6 img6"
  ;
  gap: 10px;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: ${props => `repeat(${props.images}, 50vh)`};
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

const DinamicGrid = ({ items = [], onClick = () => null }) => {
  const projectsGroup = _.chunk(items, 8)
  return (
    <Wrapper id="projects">
      {projectsGroup.map((group) => (
        <Grid images={group.length}>
          {group.map((project, index) => (
            <ImageWrapper to={project.slug} index={index} key={id()}>
              <Image src={project.img} alt={project.title} onClick={onClick}/>
            </ImageWrapper>
          ))}
        </Grid>
      ))}
    </Wrapper>
  )
}

export default DinamicGrid
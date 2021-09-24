import React, { useState, useEffect } from "react"
import styled from "styled-components"
import NextIcon from '../icons/angle-right-solid.svg'
import PrevIcon from '../icons/angle-left-solid.svg'

const GalleryWrapper = styled.section`
  box-sizing: border-box;
  position: fixed;
  display: flex;
  z-index: 1000;
  top: 0;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  width: 100%;
  padding: 0px 4rem;
  background-color: rgba(0,0,0,0.9);
`
const ImageGallery = ({ images, closeGallery, current = 0 }) => {
  const [currentImg, setCurrentImg] = useState(current)
  useEffect(() => setCurrentImg(current), [current])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'ArrowLeft') handlePrevImg(e)
      if (e.code === 'ArrowRight') handleNextImg(e)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  })

  const handleNextImg = (e) => {
    e.stopPropagation()
    if (currentImg < images.length - 1) {
      setCurrentImg(currentImg + 1)
    }
  }

  const handlePrevImg = (e) => {
    e.stopPropagation()
    if (currentImg !== 0) {
      setCurrentImg(currentImg - 1)
    }
  }

  const hidePrevIcon = currentImg === 0
  const hideNextIcon = currentImg === images.length - 1

  return (
    <GalleryWrapper onClick={closeGallery}>
      <PrevIcon onClick={handlePrevImg} color="#FFF" height={50} cursor='pointer' visibility={hidePrevIcon && 'hidden'}/>
      <img height={700} src={images && images[currentImg]?.img} alt='project'/>
      <NextIcon onClick={handleNextImg} color="#FFF" height={50} cursor='pointer' visibility={hideNextIcon && 'hidden'}/>
    </GalleryWrapper>
  )
} 

export default ImageGallery
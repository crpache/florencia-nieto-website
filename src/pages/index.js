import React from 'react'
import ProjectsGrid from '../components/ProjectsGrid'
import { Link } from 'gatsby'
import DinamicGrid from '../components/DinamicGrid'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import ProjectsSection from '../components/ProjectsSection'

const Index = () => (
  <Layout>
    <Hero />
    <ProjectsSection />
  </Layout>
)

export default Index
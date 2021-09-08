import React from 'react'
import ProjectsGrid from '../components/ProjectsGrid'
import { Link } from 'gatsby'
import DinamicGrid from '../components/DinamicGrid'
import Layout from '../components/Layout'
import Projects from '../pages/projects'
import Hero from '../components/Hero'

const Index = () => (
  <Layout>
    <Hero />
    <Projects />
  </Layout>
)

export default Index
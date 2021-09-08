import React from 'react'
import ProjectsGrid from '../components/ProjectsGrid'
import { Link } from 'gatsby'
import DinamicGrid from '../components/DinamicGrid'
import Layout from '../components/Layout'
import Projects from '../pages/projects'

const Index = () => (
  <Layout>
    <Link to='projects'>PROJECTS</Link>
    <Projects />
  </Layout>
)

export default Index
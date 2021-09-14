import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import ProjectsSection from '../components/ProjectsSection'
import ServicesSection from '../components/ServicesSection'
import ContactSection from '../components/ContactForm'

const Index = () => (
  <Layout>
    <Hero />
    <ProjectsSection />
    <ServicesSection />
    <ContactSection />
  </Layout>
)

export default Index
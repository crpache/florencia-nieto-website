const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              description
              imageGallery
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const projects = result.data.allMarkdownRemark.edges

    projects.forEach((edge) => {
      const id = edge.node.id
      const slug = edge.node.fields.slug
      const { title, description, imageGallery } = edge.node.frontmatter
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve(
          `src/templates/project.js`
        ),
        // additional data can be passed via context
        context: {
          id,
          slug,
          title,
          description,
          imageGallery
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

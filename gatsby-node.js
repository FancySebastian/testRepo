const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  return graphql(`
  {
    allMarkdownRemark(limit: 1) {
        edges {
          node {
            excerpt
            internal {
              type
            }
            frontmatter {
              path
              title
              date(formatString: "DD MMMM, YYYY")
            }
          }
        }
      }
} 
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(edge => {
      const id = edge.node.id
      createPage({
        path: edge.node.frontmatter.path,
        component: path.resolve(
          `src/templates/sample.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })

  })
}

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
     
      node,
      value,
    })
  }
}

const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  return graphql(`
  {
    allFile(filter: {extension: {eq: "jpg"}, dir: {regex: "/img/"}}) {
      edges {
        node {
          dir
          publicURL
          relativePath
          absolutePath        
        }
      }
      totalCount
      distinct (field : name )
    }
    allMarkdownRemark {
      edges {
        node {
          id
          fields {
            slug
          }
          html
          excerpt
          internal {
            type
          }
          frontmatter {
            key
            path
            title
            image
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
        console.log("temp"+edge.node.frontmatter.key);
        const id = edge.node.id
        createPage({
          path: edge.node.frontmatter.path,
          component: path.resolve(
             `src/templates/${String(edge.node.frontmatter.key)}.js`
            //`src/templates/default.js`
          ),

        })
      })

    })
}

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}


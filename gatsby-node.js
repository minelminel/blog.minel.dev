// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#createPages
const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const postTemplate = path.resolve("./src/templates/post.js")
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              title
              path
              date
              author
            }
            excerpt
          }
          previous {
            frontmatter {
              title
              path
            }
          }
          next {
            frontmatter {
              title
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if(result.errors) {
      return Promise.reject(result.errors)
    }
    result.data.allMarkdownRemark.edges.forEach(({node, next, previous}) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
        context: {
          next,
          previous
        }
      })
    })
  })
}

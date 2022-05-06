const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    const productTemplate = path.resolve('src/templates/product.js')

    return graphql(`
query LoadProductsQuery {
  ibexa {
    products {
      byType {
        skinCareProducts {
          edges {
            node {
              code
              name
              thumbnail {
                uri
              }
            }
          }
        }
      }
    }
  }
}
  `, { limit: 1000 }).then(result => {
        if (result.errors) {
            throw result.errors
        }
        result.data.ibexa.products.byType.skinCareProducts.edges.forEach(edge => {
            const Product = edge.node
            createPage({
                // Path for this page — required
                path: '/products/' + `${edge.node.code}`,
                component: productTemplate,
                context: { Product },
            })
        })

    })
}

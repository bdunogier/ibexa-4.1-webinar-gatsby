const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    const productTemplate = path.resolve('src/templates/product.js')

    return graphql(`
query LoadProductsQuery {
  ibexa {
    products {
      byType {
        bloodGasSystems(first: 100) {
          edges {
            node {
              code
              name
              thumbnail {
                alternativeText
                uri
              }
              attributes {
                sample_size { value }
                sample_type { value }
                time_to_result { value }
                operating_system { value }
                barcode_scanner { value }
                power_rating { value }
                power_frequency { value }
                qc { value }
              }
              fields {
                image {
                  image_small: variation(identifier: small) { uri }
                  image_large: variation(identifier: large) { uri }
                }
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
        result.data.ibexa.products.byType.bloodGasSystems.edges.forEach(edge => {
            const Product = edge.node
            createPage({
                // Path for this page — required
                path: '/catalog/' + `${edge.node.code}`,
                component: productTemplate,
                context: { Product },
            })
        })

    })
}

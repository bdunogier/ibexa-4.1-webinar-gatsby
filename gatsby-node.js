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
                uri
              }
              fields {
                image {
                  image_small: variation(identifier: small) { uri }
                  image_large: variation(identifier: large) { uri }
                }
                shortDescription { html5 }
                description { html5 }
              }
              attributes {
                sample_size { value }
                sample_type { value }
                time_to_result { value }
                operating_system { value }
                barcode_scanner { value }
                power_rating { value }
                power_frequency { value }
                qc {
                  identifier
                  value
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

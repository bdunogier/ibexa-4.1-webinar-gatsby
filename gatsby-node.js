const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    const productTemplate = path.resolve('src/templates/product.js')
    const storyTemplate = path.resolve('src/templates/story.js')

    return graphql(`
query LoadPagesContentQuery {
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
    prototype {
      blogPosts(query: {ParentLocationId: 319}) {
        edges {
          node {
            _url
            _contentInfo {
              id
            }
            title
            introduction { html5 }
            keywords
            description { html5 }
            image {
              image_small: variation(identifier: small) { uri }
              image_large: variation(identifier: large) { uri }
            }
            author { name }
            authorTitle
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
        result.data.ibexa.prototype.blogPosts.edges.forEach(edge => {
            const Story = edge.node
            console.log("slug", '/stories/' + `${Story._url.replace('/en/stories/', '')}`)
            createPage({
                path: '/stories/' + `${Story._url.replace('/en/stories/', '')}`,
                component: storyTemplate,
                context: { Story },
            })
        })
    })
}

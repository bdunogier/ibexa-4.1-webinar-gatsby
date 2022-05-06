import * as React from 'react'
import Layout from '../../components/layout'
import {graphql} from "gatsby";

const CatalogPage = ({ data }) => {
    console.log(data)
    return (
        <Layout pageTitle="Catalog">
            <ul>{
                data.ibexa.products.byType.skinCareProducts.edges.map(node => {
                    console.log(node.node.code);
                    return (
                        <li key={node.node.code}>
                            {node.node.name}
                        </li>

                    )
                })
            }</ul>
        </Layout>
    )
}

export const query = graphql`
    {
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
    }`

export default CatalogPage

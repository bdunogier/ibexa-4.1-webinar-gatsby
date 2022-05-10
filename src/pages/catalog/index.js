import * as React from 'react'
import Layout from '../../components/layout'
import {graphql, Link} from "gatsby";

const CatalogPage = ({ data }) => {
    return (
        <Layout pageTitle="Catalog">
            <ul>{
                data.ibexa.products.byType.bloodGasSystems.edges.map(node => {
                    return (
                        <li key={node.node.code}>
                            <Link to={"/catalog/" + node.node.code}>{node.node.code}: {node.node.name}</Link>
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
                    bloodGasSystems {
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

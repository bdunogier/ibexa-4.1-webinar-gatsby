import * as React from 'react'
import Layout from '../../components/layout'
import {graphql, Link} from "gatsby"

const StoriesPage = ({ data }) => {
    return (
        <Layout pageTitle="Stories">
            <ul>{
                data.ibexa.prototype.blogPosts.edges.map(node => {
                    let Story = node.node
                    return (
                        <li key={Story._contentInfo.id}><Link to={"/stories/" +  `${Story._url.replace('/en/stories/', '')}`}>{Story._name}</Link></li>
                    )
                })
            }</ul>
        </Layout>
    )
}

export const query = graphql`
    {
        ibexa {
            prototype {
                blogPosts(query: {ParentLocationId: 319}) {
                    edges {
                        node {
                            _name
                            _url
                            _contentInfo {
                                id
                            }
                        }
                    }
                }
            }
        }
    }
`

export default StoriesPage

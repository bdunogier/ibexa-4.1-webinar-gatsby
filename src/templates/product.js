import * as React from 'react'
import Layout from '../components/layout'

const ProductTemplate = ({ pageContext: { Product } }) => {
    const attributes  = []
    for (const [identifier, attribute] of Object.entries(Product.attributes)) {
        attributes.push(<li key={identifier}>{identifier}: {attribute.value}</li>)
    }
    return (
        <Layout pageTitle={Product.name}>
            <p>{Product.name}</p>
            <img src={Product.thumbnail.uri} alt={Product.alternativeText}/>
            <ul>{attributes}</ul>
        </Layout>
    )
}
export default ProductTemplate

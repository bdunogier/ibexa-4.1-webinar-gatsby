import * as React from 'react'
import Layout from '../components/layout'

const ProductTemplate = ({ pageContext: { Product } }) => {
    return (
        <Layout pageTitle={Product.name}>
            <p>{Product.name}</p>
        </Layout>
    )
}
export default ProductTemplate

import * as React from 'react'
import Layout from '../components/layout'
//import { styled } from '@mui/material/styles';
import {Grid, Paper} from '@mui/material'

const ProductTemplate = ({ pageContext: { Product } }) => {
    const attributes  = []
    for (const [identifier, attribute] of Object.entries(Product.attributes)) {
        attributes.push(<li key={identifier}>{identifier}: {attribute.value}</li>)
    }

    /*const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));*/

    return (
        <Layout pageTitle={Product.name}>
            {/*<p>{Product.name}</p>*/}
            {/*<img src={Product.thumbnail.uri} alt={Product.alternativeText}/>*/}
            {/*<ul>{attributes}</ul>*/}

            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <img src={Product.fields.image.image_large.uri} />
                </Grid>
                <Grid item xs={6}>
                    <h1>{Product.name}</h1>
                    <div dangerouslySetInnerHTML={{ __html: Product.fields.shortDescription.html5 }}></div>
                </Grid>
                <Grid item xs={12}>
                    <div dangerouslySetInnerHTML={{ __html: Product.fields.description.html5 }}></div>
                </Grid>
                <Grid item xs={12}>
                    <ul>{attributes}</ul>
                </Grid>
            </Grid>
        </Layout>
    )
}
export default ProductTemplate

import * as React from 'react'
import Layout from '../components/layout'
//import { styled } from '@mui/material/styles';
import {Grid, Paper} from '@mui/material'
import {characteristicsTable} from './product.module.css'

const ProductTemplate = ({ pageContext: { Product } }) => {
    const attributes  = []
    for (const [identifier, attribute] of Object.entries(Product.attributes)) {
        attributes.push(<tr key={identifier}><td>{identifier}</td><td>{attribute.value}</td></tr>)
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
                <Grid item xs={4}>
                    <img src={Product.fields.image.image_large.uri} />
                </Grid>
                <Grid item xs={8}>
                    <div dangerouslySetInnerHTML={{ __html: Product.fields.shortDescription.html5 }}></div>
                </Grid>
                <Grid item xs={12}>
                    <div dangerouslySetInnerHTML={{ __html: Product.fields.description.html5 }}></div>
                </Grid>
                <Grid item xs={12}>
                    <h2>Characteristics</h2>
                    <table className={characteristicsTable}><tbody>{attributes}</tbody></table>
                </Grid>
            </Grid>
        </Layout>
    )
}
export default ProductTemplate

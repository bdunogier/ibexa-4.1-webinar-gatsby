import * as React from 'react'
import Layout from '../../components/layout'
import {graphql, Link} from "gatsby"
import {Grid} from "@mui/material";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";

function GridItem({ node }) {
    return (
        // From 0 to 600px wide (smart-phones), I take up 12 columns, or the whole device width!
        // From 600-690px wide (tablets), I take up 6 out of 12 columns, so 2 columns fit the screen.
        // From 960px wide and above, I take up 25% of the device (3/12), so 4 columns fit the screen.
        <Grid item xs={12} sm={6} md={3}>
            <Box padding={5} border={1} borderColor={"lightgray"}>
                <div className="mb-3 text-center"><img alt={""} src={node.node.thumbnail.uri} /></div>
                <div><p><Link to={"/catalog/" + node.node.code}>{node.node.code}: {node.node.name}</Link></p></div>
            </Box>
        </Grid>
    );
}

const CatalogPage = ({ data }) => {
    return (
        <Layout pageTitle="Catalog">
            <Grid spacing={2} container>{
                data.ibexa.products.byType.bloodGasSystems.edges.map(node => {
                    return (
                        <GridItem xs={3} node={node}/>
                    )
                })
            }</Grid>
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

import * as React from 'react'
import Layout from '../../components/layout'
import {graphql, Link} from "gatsby"
import {Grid} from "@mui/material";
import Box from "@material-ui/core/Box";

function GridItem({ Story }) {
    console.log(Story)
    return (
        // From 0 to 600px wide (smart-phones), I take up 12 columns, or the whole device width!
        // From 600-690px wide (tablets), I take up 6 out of 12 columns, so 2 columns fit the screen.
        // From 960px wide and above, I take up 25% of the device (3/12), so 4 columns fit the screen.
        <Grid item xs={12} sm={6} md={3}>
            <Box padding={5} border={1} borderColor={"lightgray"}>
                <div className="mb-3 text-center"><img alt={""} src={Story._thumbnail.uri} /></div>
                <div><p><Link to={"/stories/" + `${Story._url.replace('/en/stories/', '')}`}>{Story._name}</Link></p></div>
            </Box>
        </Grid>
    );
}

const StoriesPage = ({ data }) => {
    return (
        <Layout pageTitle="Stories">
            <Grid spacing={2} container>{
                data.ibexa.prototype.blogPosts.edges.map(node => {
                    let Story = node.node
                    return (
                        <GridItem key={Story._contentInfo.id} xs={3} Story={Story}/>
                    )
                })
            }</Grid>
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
            _thumbnail {
              uri
            }
          }
        }
      }
    }
  }
}
`

export default StoriesPage

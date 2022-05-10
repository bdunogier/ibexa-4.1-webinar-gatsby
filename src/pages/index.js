import * as React from 'react'
import Layout from '../components/layout'
import { Button, Box } from "@mui/material";

const IndexPage = () => {
  return (
      <Layout pageTitle="Home Page">
          <p>I'm making this by following the Gatsby Tutorial.</p>
          <Box p={4}>
              <Button variant="contained">Hello gatsby-theme-material-ui</Button>
          </Box>
      </Layout>
  )
}
export default IndexPage

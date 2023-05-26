import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Container from '@mui/material/Container'
import Logo from "../assets/images/helse-logo.png"
import {BottomNavigation, BottomNavigationAction} from "@mui/material"
import InventoryIcon from '@mui/icons-material/Inventory'
import NewspaperIcon from '@mui/icons-material/Newspaper'
import { useState } from 'react'

import {
    heading,
    siteTitle
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    const [value, setValue] = useState(0)

    return (
        <Container maxWidth={false} disableGutters={true}>
            <Container maxWidth={"lg"}>
                <title>{pageTitle} | {data.site.siteMetadata.title}</title>
                <header className={siteTitle}><img width="120" src={Logo} /></header>
            </Container>
            <Container maxWidth={"lg"}>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
            </Container>
            <BottomNavigation showLabels value={value} onChange={(event, newValue) => {setValue(newValue)}}>
                <BottomNavigationAction label="Products" icon={<InventoryIcon />} component={Link} to="/catalog" />
                <BottomNavigationAction label="News" icon={<NewspaperIcon />} to="/catalog" />
            </BottomNavigation>
        </Container>
    )
}
export default Layout

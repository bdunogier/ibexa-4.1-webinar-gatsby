module.exports = {
  siteMetadata: {
    title: `Ibexa DXP Headless 4.5`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "Ibexa",
        fieldName: "ibexa",
        // Url to query from
        url: "https://master-7rqtwti-wekq7gfq7sukc.eu-5.platformsh.site/graphql",
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: []
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/images/favicon.png',
        display: "standalone",
      },
    },
    `gatsby-theme-material-ui`
  ],
}

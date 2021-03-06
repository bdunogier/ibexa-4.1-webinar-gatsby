module.exports = {
  siteMetadata: {
    title: `Ibexa DXP 4.1`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "Ibexa",
        fieldName: "ibexa",
        // Url to query from
        url: "https://master-7rqtwti-jnog64p2zsfpg.eu-5.platformsh.site/graphql",
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

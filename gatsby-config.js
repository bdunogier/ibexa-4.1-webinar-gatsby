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
    }
  ],
}

const isProd = process.env.NODE_ENV === "production"

module.exports = {
  pathPrefix: "/website",
  siteMetadata: {
    title: `Hack Your Future Belgium`,
    description: `Helping new talent into the tech world`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        minify: isProd,
        displayName: !isProd,
      },
    },
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ["Session"],
        secretKey: "pk_live_mFpKP0JmQWp9mQ2FjetxyzlH",
        downloadFiles: true,
        stripeAccount: "acct_1DUXo0B6dm2WDTHv",
      },
    },
  ],
}

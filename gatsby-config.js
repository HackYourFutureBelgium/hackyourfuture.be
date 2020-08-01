const isProd = process.env.NODE_ENV === "production"

module.exports = {
  pathPrefix: "/website",
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
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
  ],
}

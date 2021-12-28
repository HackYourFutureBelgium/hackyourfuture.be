const isProd = process.env.NODE_ENV === "production"

module.exports = {
  siteMetadata: {
    title: `Hack Your Future Belgium`,
    description: `Helping new talent into the tech world`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-P6B8TKB",

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: true,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },

        // // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        // dataLayerName: "YOUR_DATA_LAYER_NAME",

        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        // routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
        // Defaults to false
        enableWebVitalsTracking: true,
        // Defaults to https://www.googletagmanager.com
        // selfHostedOrigin: "YOUR_SELF_HOSTED_ORIGIN",
      },
    },
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
    // {
    //   resolve: `gatsby-source-stripe`,
    //   options: {
    //     objects: ["Session"],
    //     secretKey: "pk_live_mFpKP0JmQWp9mQ2FjetxyzlH",
    //     downloadFiles: true,
    //     stripeAccount: "acct_1DUXo0B6dm2WDTHv",
    //   },
    // },
  ],
}

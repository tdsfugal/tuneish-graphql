module.exports = {
  siteMetadata: {
    title: `Tuneish`,
    description: `A woodshed app for musicians.`,
    author: `@tdsfugal`,
  },
  proxy: {
    prefix: "/",
    url: "https://tuneish.com",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tune-ish - a woodshed app for musicians`,
        short_name: `tuneish`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-emotion`,
  ],
}

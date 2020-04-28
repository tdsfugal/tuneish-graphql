require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Tuneish`,
    description: `A woodshed app for musicians.`,
    author: `@tdsfugal`,
    instruments: {
      released: [
        { pageName: "bass", displayName: "Bass" },
        { pageName: "guitar", displayName: "Guitar" },
      ],
      pending: [
        { pageName: "voice", displayName: "Voice" }, 
        { pageName: "steel-guitar", displayName: "Steel Guitar" }, 
        { pageName: "flute", displayName: "Flute" },
        { pageName: "trumpet", displayName: "Trumpet" },
      ],
    },
  },
  proxy: {
    prefix: "/",
    url: "https://tuneish.com",
  },
  plugins: [
    {
      resolve: `gatsby-transformer-sharp`,
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
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
        icon: `src/images/tuneish.logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-emotion`,
  ],
}

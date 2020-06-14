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
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    "gatsby-transformer-json",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content/`,
      },
    },
    `gatsby-plugin-react-helmet`,
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

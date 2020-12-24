module.exports = {
  siteMetadata: {
    title: `Lock Dot Com`,
    description: `The website you didn't know you needed.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/static/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/static/data/`,
      },
    },
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cannon Lock's Personal Website`,
        short_name: `Lock Dot Com`,
        start_url: `/index.js`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/static/images/WebsiteFavicon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-theme-ui'
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

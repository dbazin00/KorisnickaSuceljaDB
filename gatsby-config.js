const file = require("fs")

const files = file.readdirSync("./src/pages")
const menuItems = files.map(file => {
  const menuText =
    file
      .split("/")
      .pop()
      .split(".")[0]
      .charAt(0)
      .toUpperCase() +
    file
      .split("/")
      .pop()
      .split(".")[0]
      .slice(1)
  if (menuText == "Index")
    return {
      text: "Početna",
      path: "./",
    }
  else
    return {
      text: menuText,
      path:
        "./" +
        file
          .split("/")
          .pop()
          .split(".")[0],
    }
})

module.exports = {
  siteMetadata: {
    title: `DB`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    menuItems,
    author: `DB`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'material icons',
          'roboto:300,400,500,700',
        ],
      }
      },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

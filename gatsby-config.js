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
      path: "/",
    }
  else
    return {
      text: menuText,
      path:
        "/" +
        file
          .split("/")
          .pop()
          .split(".")[0],
    }
})

module.exports = {
  siteMetadata: {
    title: `DB`,
    description: `Dobrošli na moju osobnu stranicu! Na ovoj stranici možete saznati sve o podatke o meni - školovanje, znanje i vještine te projekti na kojima sam radio do sada. Ukoliko me želite kontaktirati, to također možete napraviti na ovoj stranici.`,
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
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["material icons", "roboto:300,400,500,700"],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

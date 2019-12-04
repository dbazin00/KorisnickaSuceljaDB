import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

const Layout = (props) => {
  const data = useStaticQuery(
    graphql`
      query MyQuery {
        site {
          siteMetadata {
            menuItems {
              text
              path
            }
          }
        }
      }
    `
  )

  // console.log(data)
  return (<div>
      <Header menuItems={data.site.siteMetadata.menuItems} />
      {props.children}
      <Footer/></div>
  )
}

export default Layout

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import styles from "../styles/container.module.css"
// import { setConfig } from 'react-hot-loader'

// setConfig({
//     showReactDomPatchNotification: false
// })
const Layout = props => {
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
  return (
    <div>
      <Header
        menuItems={data.site.siteMetadata.menuItems}
        activePage={props.activePage}
      />
      <div id="contentRef"></div>
      <h1 className={styles.content} id="content">
        {props.header}
      </h1>
      <div className={styles.container}>{props.children}</div>
      <Footer />
    </div>
  )
}

export default Layout

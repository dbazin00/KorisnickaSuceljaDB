import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Button } from "react-bootstrap"
import BackgroundImage from "gatsby-background-image"

import styles from "../styles/header.module.css"
import Navigation from "../components/navigation"

const Header = ({ menuItems, activePage }) => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      profile: file(relativePath: { eq: "profil.jpg" }) {
        childImageSharp {
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      backgroundImage: file(relativePath: { eq: "backgroundImage.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (activePage === "/") {
    return (
      <div>
        <Navigation
          menuItems={menuItems}
          activePage={activePage}
          logo={data.logo.childImageSharp.fixed}
        />
        <BackgroundImage
          fluid={data.backgroundImage.childImageSharp.fluid}
          className={styles.Background}
        >
          <div className={styles.Profile}>
            <Img fixed={data.profile.childImageSharp.fixed} />
            <h1>Davor Bazina</h1>
            <Button variant="dark" href="#contentRef">
              <span className="material-icons">arrow_downward</span>Vidi više...
              <span className="material-icons">arrow_downward</span>
            </Button>
          </div>
        </BackgroundImage>
      </div>
    )
  } else {
    return (
      <div>
        <Navigation
          menuItems={menuItems}
          activePage={activePage}
          logo={data.logo.childImageSharp.fixed}
        />
      </div>
    )
  }
}

export default Header

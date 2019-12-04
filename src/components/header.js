import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Nav, Navbar } from "react-bootstrap"
import styles from "../styles/style.module.css"

const Header = ({ menuItems }) => {
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
    }
  `)

  return (
    <div>
      <header className={styles.Background}>
        <Navbar expand="lg" variant="dark">
          <Navbar.Brand>
            <Link to="/">
              <Img fixed={data.logo.childImageSharp.fixed} />
            </Link>
          </Navbar.Brand>
          <div className={styles.Profile}>
            <Img fixed={data.profile.childImageSharp.fixed} />
            <h1>Davor Bazina</h1>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {menuItems.map(menuLink => (
                <Nav.Link href={menuLink.path} key={menuLink.path}>
                  <div className={styles.Link}>{menuLink.text}</div>
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    </div>
  )
}

export default Header

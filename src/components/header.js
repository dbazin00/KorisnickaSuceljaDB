import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Nav, Navbar, Button } from "react-bootstrap"

import styles from "../styles/header.module.css"

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
    }
  `)

  var indexHome = 0,
    indexContact = 0,
    i = 0

  for (i = 0; i < menuItems.length; i++) {
    if (menuItems[i].text === "404") menuItems.splice(i, 1)
  }
  i = 0
  menuItems.map(item => {
    if (item.path === "/") {
      indexHome = i
    }
    i++
    return indexHome
  })
  i = 0

  menuItems.map(item => {
    if (item.path === "/kontakt") {
      indexContact = i
    }
    i++
    return indexContact
  })

  var tempHome = menuItems[indexHome]
  menuItems[indexHome] = menuItems[0]
  menuItems[0] = tempHome

  var tempContact = menuItems[indexContact]
  menuItems[indexContact] = menuItems[menuItems.length - 1]
  menuItems[menuItems.length - 1] = tempContact

  return (
    <div className={styles.Background}>
      <div className={styles.Navigation}>
        <Navbar expand="lg" variant="dark">
          <Navbar.Brand>
            <Link to="/">
              <Img fixed={data.logo.childImageSharp.fixed} />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {menuItems.map(menuLink => (
                <div className={styles.Link} key={menuLink.path}>
                  <Nav.Link href={menuLink.path}>
                    <div
                      className={styles.Link}
                      style={
                        menuLink.path === activePage ? { color: "white" } : {}
                      }
                    >
                      {menuLink.text}
                    </div>
                  </Nav.Link>
                </div>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div className={styles.Profile}>
        <Img fixed={data.profile.childImageSharp.fixed} />
        <h1>Davor Bazina</h1>
        <Button variant="dark" href="#contentRef">
          <span className="material-icons">arrow_downward</span>Vidi više...
          <span className="material-icons">arrow_downward</span>
        </Button>
      </div>
    </div>
  )
}

export default Header

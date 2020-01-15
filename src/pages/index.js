import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql, Link } from "gatsby"

import { Card } from "react-bootstrap"

import styles from "../styles/pocetna.module.css"

const IndexPage = () => {
  const data = useStaticQuery(
    graphql`
      query data {
        site {
          siteMetadata {
            description
          }
        }
      }
    `
  )

  const cardArray = [
    {
      path: "/blog",
      title: "Blog",
      text: "Na ovoj stranici možete vidjeti moj blog.",
    },
    {
      path: "/znanje",
      title: "Znanje",
      text: "Na ovoj stranici možete vidjeti moje znanje i vještine..",
    },
    {
      path: "/kontakt",
      title: "Kontakt",
      text: "Na ovoj stranici možete dobiti upute kako me možete kontaktirati.",
    },
  ]

  return (
    <div>
      <SEO title="Početna" keywords="Početna" />
      <Layout header={"Davor Bazina"} activePage={"/"}>
        <h5>{data.site.siteMetadata.description}</h5>
        <div className={styles.cardGroup}>
          {cardArray.map(card => (
            <Link to={card.path} className={styles.Link} key={card.path}>
              <Card
                style={{ maxWidth: "20rem", margin: "15px", marginLeft: "0" }}
                className={styles.Card1}
              >
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>{card.text}</Card.Text>
                </Card.Body>
                <Card.Footer style={{ color: "white" }}>
                  Vidi više...
                  <span className="material-icons">arrow_forward</span>
                </Card.Footer>
              </Card>
            </Link>
          ))}
        </div>
      </Layout>
    </div>
  )
}

export default IndexPage

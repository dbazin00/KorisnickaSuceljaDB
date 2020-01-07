import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

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
  return (
    <div>
      <SEO title="Početna" keywords="Početna" />
      <Layout header={"Davor Bazina"} activePage={"/"}>
        <h4>{data.site.siteMetadata.description}</h4>
        <div className={styles.cardGroup}>
          <Card style={{ width: "18rem", margin: "5px" }} bg="primary">
            <Card.Body>
              <Card.Title>Blog</Card.Title>
              <Card.Text>Na ovoj stranici možete vidjeti moj blog.</Card.Text>
              <Card.Link href="/blog" variant="dark" style={{ color: "black" }}>
                Vidi više...
                <span className="material-icons">arrow_forward</span>
              </Card.Link>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem", margin: "5px" }} bg="primary">
            <Card.Body>
              <Card.Title>Znanje</Card.Title>
              <Card.Text>
                Na ovoj stranici možete vidjeti moje znanje i vještine.
              </Card.Text>
              <Card.Link
                href="/znanje"
                variant="dark"
                style={{ color: "black" }}
              >
                Vidi više...
                <span className="material-icons">arrow_forward</span>
              </Card.Link>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem", margin: "5px" }} bg="primary">
            <Card.Body>
              <Card.Title>Kontakt</Card.Title>
              <Card.Text>
                Na ovoj stranici možete dobiti upute kako me možete
                kontaktirati.
              </Card.Text>
              <Card.Link
                href="/kontakt"
                variant="dark"
                style={{ color: "black" }}
              >
                Vidi više...
                <span className="material-icons">arrow_forward</span>
              </Card.Link>
            </Card.Body>
          </Card>
        </div>
      </Layout>
    </div>
  )
}

export default IndexPage

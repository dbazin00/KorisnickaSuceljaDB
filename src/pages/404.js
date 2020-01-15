import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"

const NotFound = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "30px",
      }}
    >
      <SEO title="404" keywords="Znanje" />
      <div>
        <Img fixed={data.logo.childImageSharp.fixed} />
      </div>
      <div>
        <h1 style={{ textAlign: "center" }}>
          Stranica nije pronađena...
          <span className="material-icons">
            <h1>sentiment_very_dissatisfied</h1>
          </span>
        </h1>
      </div>
      <div>
        <Link to="/">Povratak na početnu stranicu</Link>
      </div>
    </div>
  )
}

export default NotFound

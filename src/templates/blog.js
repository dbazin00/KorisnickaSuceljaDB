import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import SEO from "../components/seo"

import Layout from "../components/layout"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

const Blog = props => {
  const getFormattedDate = datum => {
    var getMonth = datum.getMonth() + 1
    return (datum.getDate() + ". " + getMonth + ". " + datum.getFullYear() + ".")
  }
  return (
    <div>
      <SEO title={props.data.markdownRemark.frontmatter.title} />
      <Layout header={props.data.markdownRemark.frontmatter.title}>
        <p style={{ textAlign: "right" }}>
          {getFormattedDate(new Date(props.data.markdownRemark.frontmatter.date))}
        </p>
        <div
          dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
        ></div>
        <Link to="/blog">
          <span className="material-icons">arrow_back</span>Natrag na blog
        </Link>
      </Layout>
    </div>
  )
}

export default Blog

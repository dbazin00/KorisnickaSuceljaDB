import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import SEO from "../components/seo"
import moment from "moment"

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
  return (
    <div>
      <SEO title={props.data.markdownRemark.frontmatter.title} />
      <Layout
        header={props.data.markdownRemark.frontmatter.title}
        activePage={"/blog"}
      >
        <p style={{ textAlign: "right" }}>
          {moment(new Date(props.data.markdownRemark.frontmatter.date)).format(
            "D. M. Y."
          )}
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

import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SEO from "../components/seo"
import { Link } from "gatsby"
import moment from "moment"

import { Card } from "react-bootstrap"

import Layout from "../components/layout"
import styles from "../styles/blog.module.css"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
              description
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.edges.sort((edge1, edge2) => {
    return edge1.node.frontmatter.date < edge2.node.frontmatter.date ? 1 : -1
  })
  return (
    <div>
      <SEO title="Blog" keywords="Blog" />
      <Layout header={"Blog"} activePage={"/blog"}>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <Link
              to={`/blog/${edge.node.fields.slug}`}
              className={styles.Link}
              key={edge.node.fields.slug}
            >
              <Card className={styles.Card1}>
                <Card.Body>
                  <Card.Title style={{ fontSize: "1.7rem" }}>
                    {edge.node.frontmatter.title}
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {moment(new Date(edge.node.frontmatter.date)).format("D. M. Y.")}
                  </Card.Subtitle>
                  <Card.Text>{edge.node.frontmatter.description}</Card.Text>
                </Card.Body>
                <Card.Footer className="text-primary">
                  Vidi više...
                  <span className="material-icons">arrow_forward</span>
                </Card.Footer>
              </Card>
            </Link>
          )
        })}
      </Layout>
    </div>
  )
}

export default BlogPage

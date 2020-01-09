import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SEO from "../components/seo"

import { Card } from "react-bootstrap"

import Layout from "../components/layout"
import styles  from "../styles/blog.module.css"

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

  return (
    <div>
      <SEO title="Blog" keywords="Blog" />
      <Layout header={"Blog"} activePage={"/blog"}>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <Card
              // style={{ margin: "15px", backgroundColor: "#222222" } }
              key={edge.node.fields.slug}
              className={styles.Card1}
            >
              <Card.Body>
                <Card.Title style={{fontSize: "1.75rem"}}>
                  {edge.node.frontmatter.title}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {edge.node.frontmatter.date}
                </Card.Subtitle>
                <Card.Text>{edge.node.frontmatter.description}</Card.Text>
                <Card.Link
                  href={`/blog/${edge.node.fields.slug}`}
                  className="stretched-link"
                >
                  Vidi više...
                  <span className="material-icons">arrow_forward</span>
                </Card.Link>
              </Card.Body>
            </Card>
          )
        })}
      </Layout>
    </div>
  )
}

export default BlogPage

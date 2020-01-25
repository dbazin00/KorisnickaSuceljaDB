import React from "react"
import SEO from "../components/seo"
import { Card } from "react-bootstrap"

import Layout from "../components/layout"
import styles from "../styles/cardGroup.module.css"
import osnovna from "../images/skolovanje/osnovnaskola.jpg"
import gimnazija from "../images/skolovanje/gimnazija.jpg"
import fakultet from "../images/skolovanje/fesb.jpg"

const Skolovanje = () => {
  const schoolArray = [
    {
      name: "Osnovna škola",
      picture: osnovna,
      beginYear: "2003",
      endYear: "2011",
    },
    {
      name: "Gimnazija",
      picture: gimnazija,
      beginYear: "2011",
      endYear: "2015",
    },
    {
      name: "Stručni studij računarstva",
      picture: fakultet,
      beginYear: "2015",
      endYear: "2018",
    },
    {
      name: "Razlikovni studij računarstva",
      picture: fakultet,
      beginYear: "2018",
      endYear: "2019",
    },
    {
      name: "Diplomski studij računarstva",
      picture: fakultet,
      beginYear: "2019",
      endYear: "X",
    },
  ]
  return (
    <div>
      <SEO title="Školovanje" keywords="Školovanje" />
      <Layout header={"Školovanje"} activePage={"/školovanje"}>
        <div className={styles.cardGroup}>
          {schoolArray.map(item => (
            <Card className={styles.Card1} key={item.name}>
              <Card.Img src={item.picture} height="150px" />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Subtitle>
                  {item.beginYear} - {item.endYear}
                </Card.Subtitle>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Layout>
    </div>
  )
}

export default Skolovanje

import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Container, Row, Col } from "react-bootstrap"
import styles from "../styles/style.module.css"

const Kontakt = () => {
  const contactItems = [
    {
      icon: "house",
      label: "Adresa",
      text: "xxxxxxx, 21 000 Split",
    },
    {
      icon: "email",
      label: "E-mail",
      text: "xxxxxxx@fesb.hr",
    },
    {
      icon: "phone_android",
      label: "Broj mobitela",
      text: "09x/xxxxxxx",
    },
    {
      icon: "call",
      label: "Broj telefona",
      text: "021/xxx-xxx",
    },
  ]
  return (
    <div>
      <SEO title="Kontakt" keywords="Kontakt" />
      <Layout>
        {/* <Table striped bordered hover>
  <thead>
          <th>Možete me kontaktirati preko:</th>
  </thead>
  <tbody>
    {contactItems.map(item=>
          <tr>
<td><span className="material-icons">{item.icon}</span> {item.label}</td>
    <td>{item.text}</td>
        </tr>
      )}
  </tbody>
</Table> */}
       <br/> <Container>
          <Col>
            <h1>Možete me kontaktirati na sljedeće načine:</h1>
          </Col><br/>
          {contactItems.map(item => (
            <Row key={item.label}>
              <Col>
                <span className="material-icons"><div className={styles.icon}>{item.icon}</div></span> {item.label}
              </Col>
              <Col>{item.text}</Col>
            </Row>
          ))}
        </Container>
      </Layout>
    </div>
  )
}

export default Kontakt

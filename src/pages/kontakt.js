import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Container, Table } from "react-bootstrap"

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
      <Layout header={"Kontakt"} activePage={"/kontakt"}>
        <br />
        <Container>
          <br />
          <Table responsive striped bordered hover variant="dark">
            
              {contactItems.map(item => (
              <tbody key={item.text}>
                <tr>
                  <td><span className="material-icons">{item.icon}</span>
                    <b>{item.label}</b>
                  </td>
                </tr>
                <tr>
                  <td>{item.text}</td>
                </tr></tbody>
              ))}
            
          </Table>
        </Container>
      </Layout>
    </div>
  )
}

export default Kontakt

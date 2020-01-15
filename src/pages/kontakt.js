import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

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
        {contactItems.map(item => (
          <div style={{ marginTop: "25px" }} key={item.text}>
            <span className="material-icons">{item.icon}</span> {item.text}
          </div>
        ))}
      </Layout>
    </div>
  )
}

export default Kontakt

import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from "../styles/kontakt.module.css"

import facebook from "../images/social-media/facebook.png"
import linkedin from "../images/social-media/linkedin.png"
import whatsapp from "../images/social-media/whatsapp.png"
import twitter from "../images/social-media/twitter.png"
import instagram from "../images/social-media/instagram.png"
import youtube from "../images/social-media/youtube.png"
import github from "../images/social-media/github.png"

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

  const socialMedia = [
    { icon: facebook, link: "https://www.facebook.com/" },
    { icon: linkedin, link: "https://www.linkedin.com/" },
    { icon: whatsapp, link: "https://www.whatsapp.com/" },
    { icon: twitter, link: "https://twitter.com/" },
    { icon: instagram, link: "https://www.instagram.com/" },
    { icon: youtube, link: "https://www.youtube.com/" },
    { icon: github, link: "https://github.com/" },
  ]
  return (
    <div>
      <SEO title="Kontakt" keywords="Kontakt" />
      <Layout header={"Kontakt"} activePage={"/kontakt"}>
        {contactItems.map(item => (
          <div className={styles.contact} key={item.text}>
            <span className="material-icons">{item.icon}</span> {item.text}
          </div>
        ))}
        {socialMedia.map(social => (
          <a
            href={social.link}
            key={social.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={social.icon}
              alt="Slika nije pronađena"
              width="35px"
              height="35px"
              className={styles.social}
            />
          </a>
        ))}
      </Layout>
    </div>
  )
}

export default Kontakt

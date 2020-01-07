import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Card } from "react-bootstrap"

const Projekti = () => {
  const projectArray = [
    {
      name: "Osobna stranica",
      technologies: "Gatsby, React, Javascript, GraphQL",
      description: "Seminarski rad kolegija Korisnička sučelja. Korištenjem Gatsby Frameworka i GraphQL-a napravljena je osobna stranica.",
      repository: "https://github.com/dbazin00/KorisnickaSuceljaDB",
      startDate: "listopad 2019.",
      endDate: "siječanj 2020.",
    },
    {
      name: "Snake",
      technologies: "Pygame, Python",
      description: "Seminarski rad kolegija Računalna grafika. Pomoću Pygame seta modula i programskog jezika Python napravljena je dvodimenzionalna igra Snake",
      repository: "https://github.com/dbazin00/Snake",
      startDate: "prosinac 2019.",
      endDate: "siječanj 2020.",
    },
    {
      name: "Završni rad",
      technologies: "Grails, Groovy, Java, PostgreSQL",
      description: "Aplikacija za interakciju dva fizički udaljena korisnika. Projekt je napravljen kao dio završnog rada ",
      repository: "https://github.com/dbazin00/Zavrsni",
      startDate: "ožujak 2018.",
      endDate: "srpanj 2018.",
    },
    {
      name: "BDhub",
      technologies: "ASP .Net MVC, C#, Angular, MS SQL, Blockchain, Network request/response",
      description: "U sklopu stručne prakse napravljen je projekt koji omogućava plaćanje gledanja videa  korištenjem BLockchain tehnologije",
      repository: "https://github.com/dbazin00/BDhub",
      startDate: "travanj 2018.",
      endDate: "srpanj 2018.",
    },
  ]
  return (
    <div>
      <SEO title="Projekti" keywords="Projekti" />
      <Layout header={"Projekti"} activePage={"/projekti"}>
        {projectArray.map(item => (
          <Card bg="dark" style={{ margin: "15px" }} key={item.repository}>
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {item.technologies}
              </Card.Subtitle>
              <Card.Text>{item.description}</Card.Text>
              <Card.Link href={item.repository} target="_blank">
                Repozitorij projekta
              </Card.Link>
            </Card.Body>
            <Card.Footer className="text-muted">
              {item.startDate} - {item.endDate}
            </Card.Footer>
          </Card>
        ))}
      </Layout>
    </div>
  )
}

export default Projekti

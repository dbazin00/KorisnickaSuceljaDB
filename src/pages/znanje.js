import React, { useState } from "react"
import SEO from "../components/seo"

import { Form, DropdownButton, Card } from "react-bootstrap"

import Layout from "../components/layout"

import styles from "../styles/cardGroup.module.css"
import aspmvc from "../images/znanje/asp-net-mvc.jpg"
import gatsby from "../images/znanje/gatsby-icon.png"
import groovy from "../images/znanje/Groovy-logo.png"
import csharp from "../images/znanje/csharp.png"
import grails from "../images/znanje/grails.jpg"
import react from "../images/znanje/react.png"
import angular from "../images/znanje/angular.png"
import javascript from "../images/znanje/javascript.png"
import mssql from "../images/znanje/mssql.png"
import postgresql from "../images/znanje/postgresql.svg"
import mysql from "../images/znanje/mysql.png"
import html from "../images/znanje/html.png"
import css from "../images/znanje/css.png"
import python from "../images/znanje/python.png"
import pygame from "../images/znanje/pygame.png"
import cpp from "../images/znanje/cpp.png"
import clanguage from "../images/znanje/c.png"
import java from "../images/znanje/java.jpeg"
import android from "../images/znanje/android.png"
import msoffice from "../images/znanje/msoffice.png"
import bootstrap from "../images/znanje/bootstrap.png"
import reactbootstrap from "../images/znanje/reactbootstrap.png"

const Znanje = () => {
  const knowledegeArray = [
    {
      name: "Gatsby",
      category: "Framework",
      picture: gatsby,
    },
    {
      name: "ASP .Net MVC",
      category: "Framework",
      picture: aspmvc,
    },
    {
      name: "Groovy",
      category: "Programski jezik",
      picture: groovy,
    },
    {
      name: "C#",
      category: "Programski jezik",
      picture: csharp,
    },
    {
      name: "Grails",
      category: "Framework",
      picture: grails,
    },
    {
      name: "React",
      category: "Framework",
      picture: react,
    },
    {
      name: "Angular",
      category: "Framework",
      picture: angular,
    },
    {
      name: "Javascript",
      category: "Programski jezik",
      picture: javascript,
    },
    {
      name: "MS SQL",
      category: "Baza podataka",
      picture: mssql,
    },
    {
      name: "PostgreSQL",
      category: "Baza podataka",
      picture: postgresql,
    },
    {
      name: "MySQL",
      category: "Baza podataka",
      picture: mysql,
    },
    {
      name: "HTML",
      category: "Programski jezik",
      picture: html,
    },
    {
      name: "CSS",
      category: "Programski jezik",
      picture: css,
    },
    {
      name: "Python",
      category: "Programski jezik",
      picture: python,
    },
    {
      name: "Pygame",
      category: "Framework",
      picture: pygame,
    },
    {
      name: "C++",
      category: "Programski jezik",
      picture: cpp,
    },
    {
      name: "C",
      category: "Programski jezik",
      picture: clanguage,
    },
    {
      name: "Java",
      category: "Programski jezik",
      picture: java,
    },
    {
      name: "Android",
      category: "Ostalo",
      picture: android,
    },
    {
      name: "MS Office",
      category: "Ostalo",
      picture: msoffice,
    },
    {
      name: "Bootstrap",
      category: "Framework",
      picture: bootstrap,
    },
    {
      name: "React Bootstrap",
      category: "Framework",
      picture: reactbootstrap,
    },
  ]

  const categoryArray = [...new Set(knowledegeArray.map(item => item.category))]

  const [filters, setFilters] = useState([])

  const showFilteredArray = item => (
    <Card
      style={{
        width: "15rem",
        height: "15rem",
        marginRight: "15px",
        marginTop: "50px",
        backgroundColor: "#222222",
      }}
      key={item.name}
    >
      <Card.Img src={item.picture} height="150px" />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Subtitle>{item.category}</Card.Subtitle>
      </Card.Body>
    </Card>
  )

  const handleFilterClick = name => {
    setFilters(filters =>
      filters.includes(name)
        ? filters.filter(item => item !== name)
        : [...filters, name]
    )
  }

  const getResultArray = () =>
    knowledegeArray.map(item =>
      filters.length === 0
        ? showFilteredArray(item)
        : filters.includes(item.category)
        ? showFilteredArray(item)
        : false
    )

  return (
    <div>
      <SEO title="Znanje" keywords="Znanje" />
      <Layout header={"Znanje"} activePage={"/znanje"}>
        <DropdownButton id="dropdown-basic-button" title="Pretraži listu...">
          <Form style={{ margin: "15px" }}>
            {["checkbox"].map(type => (
              <div key={`custom-${type}`} className="mb-3">
                {categoryArray.map(item => (
                  <Form.Check
                    custom
                    id={`custom-${item}`}
                    label={`${item}`}
                    onClick={() => handleFilterClick(item)}
                    key={item}
                  />
                ))}
              </div>
            ))}
          </Form>
        </DropdownButton>
        <div className={styles.cardGroup}>{getResultArray()}</div>
      </Layout>
    </div>
  )
}

export default Znanje

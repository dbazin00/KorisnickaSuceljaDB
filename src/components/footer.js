import React from "react"

import Clock from "react-live-clock"

import styles from "../styles/footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <span className="material-icons">copyright</span>Sva prava pridržana
      |&nbsp;
      <Clock format="D. M. YYYY. HH:mm:ss" ticking />
    </footer>
  )
}
export default Footer

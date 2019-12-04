import React from "react"
// import { Footer } from "react-bootstrap"
import styles from "../styles/style.module.css"
import Clock from 'react-live-clock'



const Footer = () => {
    const time = new Date()
    const today = time.getDay() + ". " + time.getMonth() + ". " + time.getFullYear() + ". "
    return(   
    <footer className={styles.Footer}>
        <span className="material-icons">copyright</span>Sva prava pridržana | {today} <Clock format="HH:mm:ss" ticking />

    </footer>
    )
}
export default Footer
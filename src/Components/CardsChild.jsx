import React from "react"

import styles from "./Card.module.css"
import CardLogo from "./CardLogo"
function CardChild({ date, heading, url, subheading, devices, color }) {
  return (
    <div>
      <div className={styles.main_container} style={color}>
        <div className={styles.first_cont}>
          <h3 className={styles.first_h3}>{date}</h3>
          <img className={styles.first_logo_img} src={url} alt="logo" />
        </div>
        <button className={styles.first_button}>Case Study</button>
        <h1 className={styles.first_heading}>{heading} Gift</h1>
        <h1 className={styles.first_subheading}>{subheading}</h1>
        <div className={styles.second_cont}>
          <h3 className={styles.sec_h3}>{devices}</h3>
          <CardLogo logo="arrow-right-solid.svg" />
        </div>
      </div>
    </div>
  )
}
export default CardChild

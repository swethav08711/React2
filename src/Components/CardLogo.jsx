import styles from "./Card.module.css"
function CardLogo({ logo }) {
  return (
    <>
      <img className={styles.second_logo_img} src={logo} alt="logo" />
    </>
  )
}
export default CardLogo

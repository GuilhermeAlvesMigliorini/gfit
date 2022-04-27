
import styles from '../styles/Nav.module.css'

function Nav() {
  return (
    <div className={styles.nav_container}>
      <div className={styles.nav}>
        <div className={styles.nav_item}>Home</div>
        <div className={styles.nav_item}>About</div>
        <div className={styles.nav_item}>Catalogue</div>
        <div className={styles.nav_item}>Buy</div>
      </div>
    </div>
  )
}

export default Nav
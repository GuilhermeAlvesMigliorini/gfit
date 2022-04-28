
import styles from '../styles/Nav.module.css'
import Image from 'next/image'
import logoGfitImage from '../assets/images/gfit.png'

function Nav() {
  return (
    <div className={styles.nav_container}>
      <div className={styles.nav_logo_gfit}> <Image src={logoGfitImage}/> </div>
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
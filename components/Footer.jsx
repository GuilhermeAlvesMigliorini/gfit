
import styles from '../styles/Footer.module.css'

import Image from 'next/image'
import footerImage from '../assets/images/footer_1.png'

function Footer() {
  return (
    <div className={styles.footer_image}>
      <Image src={footerImage}/>
    </div>
  )
}

export default Footer
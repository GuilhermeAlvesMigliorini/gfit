import styles from '../styles/Banner.module.css'
import Image from 'next/image'
import logoImage from '../assets/images/logo_gfit.png'

function Banner() {
  return (
    <div className={styles.container}>
      <div className={styles.container_image}>
        <Image
        src={logoImage}
        />
      </div>
    </div>
  )
}

export default Banner
import styles from '../styles/Banner.module.css'
import Image from 'next/image'
import logoImage from '../assets/images/logo_gfit.png'


function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.banner_fundo_image}>
        
      </div>

      <div className={styles.banner_logo_image}>
        <Image src={logoImage}/>
      </div>

      <div className={styles.banner_textbox}>
        
        <p className={styles.banner_textbox_text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <hr className={styles.banner_textbox_hr} />
      </div>
    </div>
  )
}

export default Banner
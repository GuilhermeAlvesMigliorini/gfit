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
        <h1 className={styles.banner_textbox_title}>Info</h1>
        <p className={styles.banner_textbox_text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Placeat voluptatibus dolores autem veritatis voluptatum impedit, blanditiis quo dignissimos earum
         at quas iure facere sunt laboriosam ab nisi amet aliquid ipsum!.</p>
      </div>
    </div>
  )
}

export default Banner
import styles from '../styles/Banner.module.css'
import Image from 'next/image'
import logoImage from '../assets/images/logo_gfitboneka.png'
import fundoImage from '../assets/images/fundo.png'


function Banner() {
  return (
    <div>
    <div className={styles.banner_image}><Image src={fundoImage} layout="responsive"/></div>
    <div className={styles.banner}>
      
      <div className={styles.banner_logo_image}><Image src={logoImage}/></div>

      <div className={styles.banner_textbox}>
        
        <p className={styles.banner_textbox_text}>Muito além de uma loja de roupas e acessórios Fitness</p>
        <hr className={styles.banner_textbox_hr} />
      </div>
    </div>
    </div>
  )
}

export default Banner
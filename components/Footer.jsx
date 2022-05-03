
import styles from '../styles/Footer.module.css'


function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_social} >
        <a href='https://www.instagram.com' className={styles.footer_social_icon} >
        <i className="fa-brands fa-instagram"></i>
        </a>
        <a href='https://www.facebook.com' className={styles.footer_social_icon} >
        <i className="fa-brands fa-facebook"></i>
        </a>
        <a href='https://www.whatsapp.com' className={styles.footer_social_icon} >
        <i className="fa-brands fa-whatsapp"></i>
        </a>
        
      </div>
    </div>
  )
}

export default Footer
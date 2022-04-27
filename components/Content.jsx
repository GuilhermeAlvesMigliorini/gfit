
import styles from '../styles/Content.module.css'

import Image from 'next/image'
import contentImage_1 from '../assets/images/content_1.jpg'


function Content() {
  return (
    <div className={styles.container}>
      <div className={styles.content_grid}>

        <div className={styles.content_text}>
          <h2 className={styles.content_text_h2}>Lorem ipsum</h2>
          <p className= {styles.content_text_p}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam,
            sint enim nisi, unde ipsum dolorum animi nam nemo sit perferendis
            vel accusamus hic optio voluptas fugiat, nostrum dolore illum soluta.
          </p>
        </div>
        
        <div className={styles.content_image}>
          <Image src={contentImage_1}/>
        </div>

        <div className={styles.content_image}>
          <Image src={contentImage_1}/>
        </div>

        <div className={styles.content_text}>
          <h2 className={styles.content_text_h2}>Lorem ipsum</h2>
          <p className= {styles.content_text_p}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam,
            sint enim nisi, unde ipsum dolorum animi nam nemo sit perferendis
            vel accusamus hic optio voluptas fugiat, nostrum dolore illum soluta.
          </p>
        </div>
        
        
      </div>
    </div>
  )
}

export default Content
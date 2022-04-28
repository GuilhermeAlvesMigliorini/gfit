
import styles from '../styles/Content.module.css'

import Image from 'next/image'
import contentImage_1 from '../assets/images/content_1.jpg'
import contentImage_2 from '../assets/images/content_2.png'


function Content() {
  return (
    <div className={styles.container}>
      <div className={styles.content_grid}>

        <div className={`${styles.content_text} ${styles.item_text1}`}>
          <h2 className={styles.content_text_h2}>Nossos Produtos</h2>
          <p className= {styles.content_text_p}>
          Buscamos sempre o melhor, com diversidade, qualidade e preço justo para lhe oferecer.
          Nossa loja conta com peças avulsas, como legging, top, cropped, short e etc,
          assim como lindos conjuntos. Conheça o nosso catálogo completo.
          </p>
          <a className={styles.content_link} href="">lojalink.com</a>
        </div>
        
        <div className={`${styles.content_image} ${styles.content_image1}`}>
          <Image src={contentImage_1}/>
        </div>

        <div className={`${styles.content_image} ${styles.content_image1}`}>
          <Image src={contentImage_2}/>
        </div>

        <div className={`${styles.content_text} ${styles.item_text2}`}>
          <h2 className={styles.content_text_h2}>Receitas</h2>
          <p className= {styles.content_text_p}>
          Sabemos que manter uma alimentação saudável faz parte vida Fitness de nossas clientes,
          então buscamos receitas que te ajudem a deixar a alimentação saudável e gostosa.
          Confira algumas receitas que compartilhamos aqui.
          </p>
          <a className={styles.content_link} href="">lojalink.com</a>
        </div>
        
        
      </div>
    </div>
  )
}

export default Content
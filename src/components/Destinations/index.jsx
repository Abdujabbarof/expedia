import React from 'react'
import styles from './destinations.module.scss'
import img1 from '../../images/image3.png'
import img2 from '../../images/image5.png'
import img3 from '../../images/image6.png'
import img4 from '../../images/image7.png'
import img5 from '../../images/image8.png'
import { Link } from 'react-router-dom'

const data = [
    {
        img: img1,
        text1: 'Moraine Lake',
        text2: 'Alberta, Canada'
    },
    {
        img: img4,
        text1: 'Cappadocia',
        text2: 'Anatolia, Turkey',
    },
    {
        img: img5,
        text1: 'Ubud',
        text2: 'Bali, Indonesia'
    },
    {
        img: img3,
        text1: 'Hokokuji Bamboo Forest',
        text2: 'Kamakura, Japan'
    },
    {
        img: img2,
        text1: 'Kirkjufell',
        text2: 'Grundarfjordur\'s, Iceland'
    },
]

const Destinations = () => {
  return (
    <section className={styles.destinations}>
        <div className="container">
            <div className={styles.container}>
                <h1>Top Most Popular Destinations</h1>

                <div className={styles.card__wrap}>
                    {
                        data?.map((card) => (
                            <Link className={styles.card} key={card.text1}>
                                <img src={card.img} alt="card img" />

                                <div className={styles.text}>
                                    <h3>{card?.text1}</h3>
                                    <p>{card?.text2}</p>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Destinations
import React from 'react'
import styles from './downloads.module.scss'
import appStore from '../../images/app-store.png'
import google from '../../images/play.png'
import { Link } from 'react-router-dom'


const Downloads = () => {
  return (
    <section className={styles.downloads}>
        <div className="container">
            <div className={styles.container}>
                <h1>Download 
                    Expedia App !</h1>
                
                <div className={styles.img_wrap}>
                    <Link to={'https://play.google.com/store/apps/details?id=com.expedia.bookings'} target='_blank'>
                        <img className={styles.g_play} src={google} alt="google play" />
                    </Link>
                    <Link to={'https://apps.apple.com/uz/app/expedia-travel-hotel-flight/id427916203'} target='_blank'>
                        <img src={appStore} alt="app store" />
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Downloads
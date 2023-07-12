import React, { useState } from 'react'
import styles from './order.module.scss'
import { NavLink } from 'react-router-dom'
import Form from '../Form'

const links = [
    {
        link: 'Stays'
    },
    {
        link: 'Flight'
    },
    {
        link: 'Cars'
    },
    {
        link: 'Packages'
    },
    {
        link: 'Things to do'
    }
]

const Order = () => {
    const [item, setItem] = useState('flight');

  return (
    <section className={styles.order}>
        <div className="container">
            <div className={styles.container}>
                <div className={styles.links}>
                    <ul>
                        {
                            links?.map((link) => (
                                <li key={link.link}>
                                    <NavLink onClick={() => setItem(link?.link?.toLowerCase())} className={`${styles.link} ${link.link.toLowerCase() === item && styles.active}`}>
                                        {link?.link}
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                {item === 'flight' ? <Form /> : <h1 className={styles.notFound}><span>{item}</span> not available :(</h1>}
            </div>
        </div>
    </section>
  )
}

export default Order
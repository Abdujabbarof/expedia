import React from 'react'
import styles from './header.module.scss'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../images/logo.svg'

const links = [ 
  {
    id: 1,
    link: "Home",
    path: '/'
  },
  {
    id: 2,
    link: "Trips",
    path: '/trips'
  },
  {
    id: 3,
    link: "About",
    path: '/about'
  },
  {
    id: 4,
    link: "Support",
    path: '/support'
  },
  {
    id: 5,
    link: "Travel",
    path: '/travel'
  },
]

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.container}>
          <Link to={'/'}>
            <img src={logo} alt="" />
          </Link>

          <input type="checkbox" id='checkbox' className={styles.checkbox} />
          
          <div className={styles.left}>
            <nav className={styles.nav}>
              {
                links.map((link) => (
                  <NavLink key={link?.id} className={({isActive}) => (isActive ? `${styles.link} ${styles.active}` : styles.link) } to={link?.path}>{link?.link}</NavLink>
                ))
              }
            </nav>

            <button className={styles.btn}>Sign Up</button>
          </div>

          <label htmlFor="checkbox" className={styles.bars}>
            <i className="fa-solid fa-bars"></i>
          </label>

          <label htmlFor="checkbox" className={styles.xmark}>
            <i className="fa-solid fa-xmark"></i>
          </label>

          <label htmlFor="checkbox" className={styles.cover}>
          </label>
        </div>
      </div>
    </header>
  )
}

export default Header
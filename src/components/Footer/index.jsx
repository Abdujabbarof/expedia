import React from 'react'
import styles from './footer.module.scss'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.svg'
import ig from '../../images/ig.svg'
import tw from '../../images/tw.svg'
import ln from '../../images/in.svg'

const sections = ["Company", "Explore", "Term and Policies", "Help"]
const links = [
  {
    id: 1,
    link: 'About us',
  },
  {
    id: 2,
    link: 'Jobs',
  },
  {
    id: 3,
    link: 'List your property',
  },
  {
    id: 4,
    link: 'Partnership',
  },
  {
    id: 5,
    link: "Advertising"
  }
]

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.left}>
            <Link to={'/'}>
              <img src={logo} alt="logo" />
            </Link>

            <p>© 2021 Expedia, Inc., an Expedia Group company. All rights reserved.</p>
          </div>

          <div className={styles.right}>
            {
              sections.map((section) => (
                <div  key={section} className={styles.links_wrap}>
                  <h3>{section}</h3>

                  <ul>
                    {
                      links.map((link) => (
                        <li key={link?.id}>
                          <Link to={link?.link?.toLowerCase()}>{link?.link}</Link>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              ))
            }

            <div className={styles.links_wrap}>
              <h3>Get in touch</h3>
              
              <p className={styles.questions}>Question or feedback?</p>
              <p className={styles.questions}>We’d love to hear from you</p>

              <nav className={styles.socials}>
                <Link>
                  <img src={ig} alt="ig" />
                </Link>
                <Link>
                  <img src={tw} alt="tw" />
                </Link>
                <Link>
                  <img src={ln} alt="in" />
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
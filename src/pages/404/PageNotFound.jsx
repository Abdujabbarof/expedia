import React from 'react'
import styles from './notFound.module.scss'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <>
      <div className={styles.notFound}>
        <h1><span>404</span> <br />OOPS, Page Not Found</h1>
        <Link to={'/'}><i className="fa-solid fa-arrow-left"></i> Back to Home</Link>
      </div>
    </>
  )
}

export default PageNotFound
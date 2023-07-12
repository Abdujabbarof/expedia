import React from 'react'
import Hero from '../../components/Hero'
import Downloads from '../../components/Downloads'
import Destinations from '../../components/Destinations'
import Order from '../../components/Order'

const Home = () => {
  return (
    <>
      <Hero />
      <Order />
      <Destinations />
      <Downloads />
    </>
  )
}

export default Home
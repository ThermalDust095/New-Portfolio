import React from 'react'
import Navbar from './Navbar'
import "./Home.css"

export default function Home(props) {
  return (
    <>
    <div id='background'>
        <Navbar/>
        <div id='rem-page'>
          <h1 className='mid-text-1'>Programmer <a className='blue-a'>+</a> Developer</h1>
          <h2 className='mid-text-2'>To Introduce myself, I am currently an Engineering Student at DSATM, Bangalore</h2>
        </div>
        
    </div>
    </>
  )
}

import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion'

export default function Navbar(props) {
  
  useEffect(() => {
    if(props.page != null){
      const elem = document.querySelector(`#${props.page}`)
      elem.style.color = "#0ff"
    }
    console.log(props)

  },[])

  return (
    <motion.div id='navbar' initial={{opacity: 0}} animate={{opacity:1}}>
            <h1 id='name'><Link to="/">Akhil Pendyala</Link></h1>
            <ul id='items'>
                <li id='about'><Link to="/about">About</Link></li>
                <li id='projects'><Link to="/projects">Projects</Link></li>
                <li id='artwork'><Link to="/">Artwork</Link></li>
            </ul>
    </motion.div>
  )
}

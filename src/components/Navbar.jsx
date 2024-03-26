import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import { useEffect, useState,useRef } from 'react';
import { motion } from 'framer-motion'

export default function Navbar(props) {

  const [mWindow, setMwindow] = useState(false)
  const [mnav, setmnav] = useState(true)

  const navbarRef = useRef(null)
  const itemsRef = useRef(null)
  
  function handleMclick(){

    setmnav(!mnav)

    if(mnav){
      itemsRef.current.style = "display: flex"
      navbarRef.current.style = "height: 100vh"
      navbarRef.current.style = "background: #000"
    }

    if(!mnav){
      itemsRef.current.style = "display: none"
      navbarRef.current.style = "height: 17.749vh"
      navbarRef.current.style = "background: transparent"
    }

  }
  
  useEffect(() => {
    if(props.page != null){
      const elem = document.querySelector(`#${props.page}`)
      elem.style.color = "#0ff"
    }

    if(window.innerWidth <= 768){
      setMwindow(true)
    }

    if(props.delay){
      navbarRef.current.style = "position:absolute";

    }

    console.log(props)

  },[])

  if(mWindow){
    return(
      <div div id='navbar' ref={navbarRef} style={{zIndex: 5, height: "17.749vh", background: "transparent"}}>
        <h1 id='name' onClick={(e) => handleMclick(e)}>Akhil Pendyala</h1>
        <ul id='items' ref={itemsRef} style={{display: "none"}}>
                <li id='home'><Link to="/">Home</Link></li>
                <li id='about'><Link to="/about">About</Link></li>
                <li id='projects'><Link to="/projects">Projects</Link></li>
                <li id='artwork'><Link to="/">Artwork</Link></li>
        </ul>
      </div>
    )
  }

  return (
    <motion.div id='navbar' ref={navbarRef} initial={{opacity: 0}} animate={{opacity:1}}>
            <h1 id='name'><Link to="/">Akhil Pendyala</Link></h1>
            <ul id='items'>
                <li id='about'><Link to="/about">About</Link></li>
                <li id='projects'><Link to="/projects">Projects</Link></li>
                <li id='artwork'><Link to="/">Artwork</Link></li>
            </ul>
            <></>
    </motion.div>
  )
}

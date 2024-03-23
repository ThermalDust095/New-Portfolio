import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import "./Home.css"
import { motion } from 'framer-motion'
import { TypewriterEffect } from './typewriter'

const str = "To Introduce myself, I am currently an Engineering Student at DSATM, Bangalore.";
const wordsWithStyles = str.split(" ").map(word => ({ text: word, className: "mid-text-2" }));

const list = [
  "Developer",
  "Designer",
  "Artist",
  "Player"
];

export default function Home(props) {
  const [ currItem, setCurrItem ] = useState(list[0]);  
  return (
    <>
    <div id='background'>
        <Navbar delay={true}/>
        <div id='rem-page'>
          <motion.h1 className='mid-text-1 flex justify-center items-center gap-3'>
              <motion.span initial={{opacity: 0}} animate={{opacity:1}} transition={{duration: 2}}> Programmer </motion.span>
              <motion.div
                className='blue-a leading-[1]' 
                initial={{
                  opacity: 0,
                  rotate: 0
                }}
                animate={{
                  opacity: 1,
                  rotate: 360
                }}

                transition={{
                  duration: 2
                }}
              >
                  +
              </motion.div> 
              <motion.pan initial={{opacity: 0}} animate={{opacity:1}} transition={{duration: 2}}> Developer  </motion.pan>
            </motion.h1>

          <TypewriterEffect 
            words={wordsWithStyles} 
            className="mid-text-2" 
            cursorClassName="hidden"
          />
        </div>
        
    </div>
    </>
  )
}

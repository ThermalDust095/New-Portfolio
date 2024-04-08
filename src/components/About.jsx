import React,{useRef, useState, useEffect} from 'react'
import Navbar from './Navbar'
import './About.css'
import { motion } from 'framer-motion'
import { ReactTyped } from "react-typed";

export default function About(props) {

  const sk= "“Skills”"
  const sk_k = "  \{"
  const sk_elem = `<a className='blue' style='color:#00FFFF'>${sk}</a>:<a>${sk_k}</a>`

  const data = ["<a>//about.json</a>","{",
  "<a><a className='blue' style='color:#00FFFF'>“Name”</a> : <a className='org' style='color:#F15700'>“Akhil Pendyala”</a>",
  "</a>,<a><a className='blue' style='color:#00FFFF'>“Description”</a>: <a className='org' style='color:#F15700'>“I am an Enthusiastic Programmer, looking to learn and build as many  interesting and unique projects possible”</a>,</a>",
  sk_elem,
  "<a> <a className='blue' style='color:#00FFFF'>“Technologies” </a>: <a className='org' style='color:#F15700'>[“React”, “Flask”,”Tensorflow”]</a>,</a>",
  "<a><a className='blue' style='color:#00FFFF'>“Languages”</a> : <a className='org' style='color:#F15700'>[“Python”, “Javascript”, “C++”, “R”, “Java”, “C#”, “HTML”, “CSS”, “MySQL”]</a></a>",
  "<a> <a className='blue' style='color:#00FFFF'>“Miscelaneous” </a>: <a className='org' style='color:#F15700'>[“video-editing”, “3D-Designing”]</a></a>",
  "}",
  "<a><a className='blue' style='color:#00FFFF'>“Interests” </a>: <a className='org' style='color:#F15700'>[“Technology”, “GeoPolitics”,”IndianPolitics”,”Comedy”, “Movies”, “WebSeries”, “Sitcoms”,“Chess”]</a></a>",
  "}"]

  const [hasClicked, setClicked] = useState(false)
  const [opt, setOpt] = useState("")
  const code = useRef()

  

  const values = {
    "me": <a style={{fontSize: "3.537vh"}}>Hi, My name is Akhil Pendyala, I like to enlarge my knowledge about the Computer Science field and learn technologies that are changing the world right now. I percieve myself to also be passionate about various other fields such as Chess, Geo-Poltics, Cinema, Post World War History</a>,
    "social":<><h2 className='options'><a href='https://www.instagram.com/imakhilpendyala/' target='__blank'>Instagram</a></h2><h2  className='options'><a href='https://github.com/ThermalDust095/' target='__blank'>Github</a></h2><h2 className='options'><a href='https://www.linkedin.com/in/akhil-pendyala-0380a71a6/' target='__blank'>LinkedIn</a></h2><h2  className='options'><a href='https://twitter.com/ImAkhilPendyala' target='__blank'>Twitter/X</a></h2></>,
    "skills":<a style={{fontSize: "3.537vh"}}>I believe to specialize myself with most of the high level languages like Python, Java, Javascript. While knowing the building blocks of backend and front end frameworks along with SQL. I have also worked on neural networks with the Tensorflow framework, I am increasingly interested in the Field of Neural Networks, and currently am looking for any opportunity to learn Machine Learning suitable for industrial standards</a>,
    "achievements":<ul style={{fontSize: "3.537vh", display: "flex", flexDirection:"column",gap:"10px", transition:"0.1s"}}><li>Winning 1st place at a 24-Hr Hackathon at Global Academy of Technology, Bangalore</li><li>Co-Hosting a College Event "Capture-The_Flag" to introduce a new concept of competition to the college atmosphere</li><li>Coming Top 25 in Inter College "DSI-Codeathon" organized by Neopat</li><li>Winning Smaller College Technical Events such as "CascadingCrafts" hosted by CSEDSATM</li></ul>
  }

  const handleClick = (e, opt) => {
    console.log("hi",opt, values[opt])
    console.log(code.current)
    setOpt(opt)
    setClicked(true)
  }

  const handleHClick = (e) =>{
    setClicked(false)
  }

  return (
    <div id='about-page'>
    <Navbar page="about"/>
      <div id='code-div' ref={code}>
        <ol>
          { data.map((val, idx) => (
            <><motion.li key={idx} initial={{opacity: 0}} animate={{ opacity: 1}} transition={{delay: 0.2*idx, duration: 2}} ><ReactTyped strings={[`${val}`]} typeSpeed={10} startWhenVisible contentType='html' showCursor={false} key={idx} startDelay={500*idx}/></motion.li></>
          )) }
        </ol>
      </div>

      <motion.div id='output-div' initial={{opacity: 1, scaleY: 0, y:-50}} animate={{opacity: 1, scaleY: 1, y:0}} transition={{delay: 3, duration: 0.1}}>
        <div>
        <h1 onClick={(e) => handleHClick(e)}>{hasClicked ? "Go back" : "Select an option"}</h1>
          <svg width="100%" height="1" viewBox="0 0 559 1" fill="none" xmlns="http://www.w3.org/2000/svg" id='line'>
          <line y1="0.5" x2="650" y2="0.5" stroke="#00FFFF"/>
          </svg>
        </div>
        <div>
          {hasClicked ? <h2 className='just-text'>{values[opt]}</h2> : <><h2 onClick={(e) => handleClick(e,"me")} className='options'>About Me</h2>
          <h2 onClick={(e) => handleClick(e,"social")} className='options'>Social</h2>
          <h2 onClick={(e) => handleClick(e,"skills")} className='options'>Skills</h2>
          <h2 onClick={(e) => handleClick(e,"achievements")} className='options'>Achievements</h2></>}
        </div>
      </motion.div>
    </div>
  )
}

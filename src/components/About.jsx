import React,{useRef, useState, useEffect} from 'react'
import Navbar from './Navbar'
import './About.css'

export default function About(props) {

  const sk= "“Skills”"
  const sk_k = "  \{"
  const sk_elem = <><a className='blue'>{sk}</a>:<a>{sk_k}</a></>

  const data = [<a>//about.json</a>,"{",
  <a><a className='blue'>“Name”</a> : <a className='org'>“Akhil Pendyala”</a>,
  </a>,<a><a className='blue'>“Description”</a>: <a className='org'>“I am an Enthusiastic Programmer, looking to learn and build as many  interesting and unique projects possible”</a>,</a>,
  sk_elem,
  <a> <a className='blue'>“Technologies” </a>: <a className='org'>[“React”, “Flask”,”Tensorflow”],“Languages” : [“Python”, “Javascript”, “C++”, “R”, “Java”, “C#”, “HTML”, “CSS”, “MySQL”]</a></a>,
  <a> <a className='blue'>“Miscelaneous” </a>: <a className='org'>[“video-editing”, “3D-Designing”]</a></a>,
  "}",
  <a><a className='blue'>“Interests” </a>: <a className='org'>[“Technology”, “GeoPolitics”,”IndianPolitics”,”Comedy”, “Movies”, “WebSeries”, “Sitcoms”]</a></a>,
  "}"]

  const [hasClicked, setClicked] = useState(false)
  const [opt, setOpt] = useState("")

  const values = {
    "name": "Hi, My name is Akhil Pendyala, I like to blah blah blah"
  }

  const handleClick = (e, opt) => {
    console.log("hi",opt, values[opt])
    setOpt(opt)
    setClicked(true)
  }

  const handleHClick = (e) =>{
    setClicked(false)
  }

  return (
    <div id='about-page'>
    <Navbar page="about"/>
      <div id='code-div'>
        <ol>
          { data.map((val, idx) => (
            <li key={idx}>{val}</li>
          )) }
        </ol>
      </div>

      <div id='output-div'>
        <div>
        <h1 onClick={(e) => handleHClick(e)}>{hasClicked ? "Go back" : "Select an option"}</h1>
          <svg width="36.393vw" height="1" viewBox="0 0 559 1" fill="none" xmlns="http://www.w3.org/2000/svg" id='line'>
          <line y1="0.5" x2="650" y2="0.5" stroke="#00FFFF"/>
          </svg>
        </div>
        <div>
          {hasClicked ? <h2>{values[opt]}</h2> : <><h2 onClick={(e) => handleClick(e,"name")}>Name</h2>
          <h2 onClick={(e) => handleClick(e,"description")}>Descripton</h2>
          <h2 onClick={(e) => handleClick(e,"skills")}>Skills</h2>
          <h2 onClick={(e) => handleClick(e,"interests")}>Interests</h2></>}
        </div>
      </div>
    </div>
  )
}

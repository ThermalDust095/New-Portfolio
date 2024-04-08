import React, {useEffect, useState} from 'react'
import "./ProjectElem.css"
import Draggable from 'react-draggable'

export default function ProjectElem(props) {

  const [mWindow, setMwindow] = useState(false)

  useEffect(() => {
    if(window.innerWidth <= 768){
      setMwindow(true)
    }
  }, [])

  return (
    <Draggable disabled={mWindow ? true : false}>
      <div id='pjct'>
          <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="3" viewBox="0 0 364 3" fill="none" id='line' style={{top: mWindow ? "1.2vh" : "1.6vh"}}>
                  <path d="M-1.5 2L364 1.02663" stroke="#00FFFF"/>
              </svg>
          </div>

          <div id='abt-pjct'>
              <h1 id='pjct-name'><a href={props.url} target="_blank">{props.name}</a></h1>
              <p id='pjct-desc'>{props.desc}</p>
          </div>
      </div>
    </Draggable>
  )
}

import React from 'react'
import Navbar from './Navbar'
import ProjectElem from './ProjectElem'
import "./Projects.css"

export default function Projects() {
  return (
    <div id='project-page'>
      <Navbar page="projects"/>
      <div id='projects-div'>
        <ProjectElem name="Chess Analyzer" desc="it is a cool "/>
        <ProjectElem />
        <ProjectElem />
        <ProjectElem />
        <ProjectElem />
        <ProjectElem />
      </div>
    </div>
  )
}

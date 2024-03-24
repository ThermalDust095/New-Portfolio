import React from 'react'
import Navbar from './Navbar'
import ProjectElem from './ProjectElem'
import "./Projects.css"

export default function Projects() {

  const prjData = [{"name": "Chess Analyzer", "desc":"This is a move analyzer for the games played in chess.com using Stockfish to determine the metrics. I had the inspiration to build this, because I had an addiction towards playing chess in 2023", "url":"https://github.com/ThermalDust095/chess-analyzer"},
  {"name":"Rapid Aid","desc":"An uber like web app designed to book ambulances. Built at a 24 hour hackathon IGNUS by InnoVisions.", "url":"https://github.com/ThermalDust095/rapidAid"},
  {"name":"Churn Predictor","desc":"An AI-ML project focused at predicting Customer's Churn Probability based on factors like Bill , Subscription Length and hosted on AWS using Flask","url":"https://github.com/ThermalDust095/Churn-Predictor"},
  {"name":"Swiftly", "desc":"Group DBMS project for a more fluid xerox file management web app for our college's library xerox shop","url":"https://github.com/ThermalDust095/Xerox-Management"},
  {"name":"Kenobi","desc":"A discord bot that runs thru Google's Perspective AI and stores the messages and calculates user's a rating based on his/her toxicity. One of my initial projects that I had worked on during Class 12"},
  {"name":"Accident Analysis","desc":"Data Analysis on Bangalore Accident using R by making a weight map of Bangalore's Wards and an Interactive Map that shows these data in coordinates.","url":"https://github.com/ThermalDust095/AccidentAnalysis"}
  ]
  

  return (
    <div id='project-page'>
      <Navbar page="projects"/>
      <div id='projects-div'>
        {
          prjData.map((val) => (
            <ProjectElem name={val["name"]} desc={val["desc"]} url={val["url"]}/>
          ))
        }
      </div>
    </div>
  )
}

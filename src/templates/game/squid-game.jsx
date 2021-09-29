
import { useState, useEffect } from 'react'
import { Tabs, Tab } from 'react-bootstrap';
import './squid-game.scss'

export const SquidGame = (props) => {

    return (
      <div class="home-card">


<div class="pCard_card pCard_on">
    
    <div class="pCard_up">
        <div class="pCard_text">
            <h2 style={{color: 'white'}}>GUEZZI Adil</h2>
            <p>FULLSTACK JAVASCRIPT</p>
        </div>
        
    </div>
    
    <div class="pCard_down">
        <div>
            <p>Experience</p>
            <p>7 years</p>
        </div>
        <div>
            <p>   </p>
            <p> </p>
        </div>
        <div>
            <p>Project</p>
            <p>21</p>
        </div>
    </div>
    
    <div class="pCard_back">
        <p>See My Latest Work Here</p>
          <a href="https://www.linkedin.com/in/adil-guezzi-a877b885/" target="_blank" tooltip="tooltip"><i class="fa fa-linkedin fa-2x fa-fw"></i></a>
          <a href="https://github.com/adilyop" target="_blank"><i class="fa fa-github fa-2x fa-fw"></i></a>
          <a href="https://drive.google.com/file/d/1tKESy8CGaX2aD0MOuhWylVR-7ATLfgld/view?usp=sharing" target="_blank"><i class="fa fa-file-pdf-o fa-2x fa-fw"></i></a> 
          <a href="https://play.google.com/store/apps/developer?id=Guezzi+Adil" target="_blank"><i class="fa fa-google fa-2x fa-fw"></i></a>
        <p>Contact Me...</p>
    </div>  
    
    </div>

  </div>
)}
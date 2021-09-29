
import { useState, useEffect } from 'react'
import { Tabs, Tab } from 'react-bootstrap';
import './id-card.scss'

export const TemplateCard = (props) => {

    return (
      <div class="home-card">


<div class="pCard_card pCard_on">
    
    <div class="pCard_up">
        <div class="pCard_text">
            <h2 style={{color: 'white'}}>LIONEL Messi</h2>
            <p>The GOAT</p>
        </div>
        
    </div>
    
    <div class="pCard_down">
        <div>
            <p>Ballon d'or</p>
            <p>5</p>
        </div>
        <div>
            <p>trophies</p>
            <p>35</p>
        </div>
        <div>
            <p>Goals</p>
            <p>750</p>
        </div>
    </div>
    
    <div class="pCard_back">
        <p>The best player</p>
          <a href="" target="_blank" tooltip="tooltip"><i class="fa fa-facebook fa-2x fa-fw"></i></a>
          <a href="" target="_blank"><i class="fa fa-instagram fa-2x fa-fw"></i></a>
          <a href="" target="_blank"><i class="fa fa-wechat fa-2x fa-fw"></i></a> 
          <a href="" target="_blank"><i class="fa fa-youtube fa-2x fa-fw"></i></a>
          <a href="" target="_blank"><i class="fa fa-whatsapp fa-2x fa-fw"></i></a>
        <p>Contact</p>
    </div>  
    
    </div>

  </div>
)}
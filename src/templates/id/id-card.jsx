
import { useState, useEffect } from 'react'
import { Tabs, Tab } from 'react-bootstrap';
import './id-card.scss'

export const IdCard = (props) => {
  const [tabSelected, setTabSelected] = useState('PLAT')
  const [isHeaderHidden, setIsHeaderHidden] = useState(true)
    useEffect(() => {
    }, [])
    function selectTab(tab) {
        setTabSelected(tab)
    }
    function hideHeader(tab) {
      console.log('dd')
    }

    return (
      <div class="home-card">


<div class="pCard_card pCard_on">
    
    <div class="pCard_up">
        <div class="pCard_text">
            <h2 style={{color: 'white'}}>GOMER Nelson</h2>
            <p>FULLSTACK JAVASCRIPT</p>
        </div>
        
    </div>
    
    <div class="pCard_down">
        <div>
            <p>Projects</p>
            <p>26</p>
        </div>
        <div>
            <p>Views</p>
            <p>21579</p>
        </div>
        <div>
            <p>Likes</p>
            <p>976</p>
        </div>
    </div>
    
    <div class="pCard_back">
        <p>See My Latest Work Here</p>
          <a href="#"><i class="fa fa-linkedin fa-2x fa-fw"></i></a>
          <a href="#"><i class="fa fa-github fa-2x fa-fw"></i></a>
          <a href="#"><i class="fa fa-behance fa-2x fa-fw"></i></a> 
          <a href="#"><i class="fa fa-codepen fa-2x fa-fw"></i></a>
          <a href="#"><i class="fa fa-facebook fa-2x fa-fw"></i></a>
          <a href="#"><i class="fa fa-instagram fa-2x fa-fw"></i></a>
        <p>Follow Me...</p>
    </div>  
    
    </div>

  </div>
)}
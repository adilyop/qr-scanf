
import { useState, useEffect } from 'react'
import background from '../img/menu-pizza.jpeg';
import pizzaImage from '../img/pizza.jpeg';
import mealImage from '../img/meal.jpeg';
import { Tabs, Tab } from 'react-bootstrap';
import './announcement.scss';

export default function MariageAnnouncement() {
    const [tabSelected, setTabSelected] = useState('PLAT')
    useEffect(() => {
    }, [])
    function selectTab(tab) {
        setTabSelected(tab)
    }
    return (
      <div class="home-card">

      <div class="container wide-2">
        
        <div class="card-section">
        
          <div class="left-col bg-color-2">
            
            <div class="item-box">
              <div class="content-element4">
                <img src="http://velikorodnov.com/html/wowedding/images/title@2x.png" alt="" width="250" height="197"/>
              </div>
              <div class="content-element4">
                
                <h2 class="title-large">Mark &amp; Gloria are Getting Married!</h2>
                <div class="section-pre-title content-element1">Saturday, July 29th, 2019  17:00 - 22:00 </div>
                <div class="section-pre-title">1900 Rio Grande, Austin TX 78705 </div>

              </div>

              <div class="countdown hasCountdown" data-year="2019" data-month="04" data-day="16" data-hours="15" data-minutes="0" data-seconds="0"><span class="countdown_row countdown_show3"><span class="countdown_section"><span class="countdown_amount">0</span>Hours</span><span class="countdown_section"><span class="countdown_amount">0</span>Minutes</span><span class="countdown_section"><span class="countdown_amount">0</span>Seconds</span></span></div>
            </div>

          </div>
          <div class="right-col">
            
            <div class="rsvp-form no-bg">

              <div class="form-header">
                
                <h2 class="icons-box-title">Tell Us if You're Coming!</h2>
                <p>Kindly R.S.V.P. online before July 29th, 2019</p>

              </div>
              
              <form id="rsvp-form" class="contact-form">
                  
                <div class="row">
                  
                  <div class="col-md-12">
                    
                    <div class="input-box">
                      
                      <input type="text" required="" name="cf-name"/>
                      <label>First name</label>

                    </div>

                    <div class="input-box">
                      
                      <input type="text" required="" name="cf-lname"/>
                      <label>Last name</label>

                    </div>

                    <div class="input-box">
                      
                      <input type="email" required="" name="cf-email"/>
                      <label>Email</label>

                    </div>

                  </div>

                  <div class="col-md-12 announcement-bg-color">
                    
                    <p>Will you attend wedding ceremony?</p>

                    <div class="input-wrapper">

                      <input type="radio" id="radio-1" name="cf-ceremony"/>
                      <label for="radio-1">Yes, I will be there</label>

                    </div>

                    <div class="input-wrapper">

                      <input type="radio" id="radio-2" name="cf-ceremony"/>
                      <label for="radio-2">Sorry, I can't come</label>

                    </div>

                  </div>
                  <div class="col-md-12 announcement-bg-color">
                    
                    <p>Will you attend wedding party?</p>

                    <div class="input-wrapper">

                      <input type="radio" id="radio-1" name="cf-ceremony"/>
                      <label for="radio-1">Yes, I will be there</label>

                    </div>

                    <div class="input-wrapper">

                      <input type="radio" id="radio-2" name="cf-ceremony"/>
                      <label for="radio-2">Sorry, I can't come</label>

                    </div>

                  </div>

                  <div class="col-md-12">
                    
                    <div class="input-box">
                      
                      <input type="text" name="cf-numb1" required=""/>
                      <label>Number of Adults</label>
                      <span class="filter">18 years and older</span>

                    </div>

                  </div>
                  <div class="col-md-12">
                    
                    <div class="input-box">
                      
                      <input type="text" name="cf-numb2" required=""/>
                      <label>Number of Children (optional)</label>
                      <span class="filter">17 years and under</span>

                    </div>

                  </div>

                  <div class="col-md-12">
                    
                    <div class="input-box">
                      
                      <textarea required="" name="cf-message"></textarea>
                      <label>Message (optional)</label>

                    </div>

                  </div>

                  <div class="col-md-12 margin-top">
                    
                    <div class="align-center">
                      
                      <button type="submit" class="btn">Submit</button>

                    </div>

                  </div>

                </div>

              <div class="message-container"></div></form>

            </div>

          </div>

        </div>

        <div class="page-section no-space">

          <div class="content-element4">
            
            <div class="row justify-content-center">
              <div class="col-lg-8">
                
                <div class="align-center">
                  
                  <h2 class="title-large">Gifts</h2>
                  <p>The most we want is to spend the day with family and all our friends. If you want to bless us,  here are a few things we need. Click the logos below to check out our registry.</p>

                </div>

              </div>
            </div>

          </div>

            
        </div>

      </div>
      
    </div>
    )}
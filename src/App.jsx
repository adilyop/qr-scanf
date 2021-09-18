import { useState, useEffect } from 'react'
import { Navigation } from './components/navigation'
import { Header } from './components/header'
import { Features } from './components/features'
import { About } from './components/about'
import { Services } from './components/services'
import { Gallery } from './components/gallery'
import { MenuBasic } from './templates/menu-basic'
import { Resume } from './templates/cv/resume'
import MenuDominos from './templates/menu-dominos'
import MenuFish from './templates/menu-fish'
import { Contact } from './components/contact'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import MariageAnnouncement from './templates/announcements/marriage-announcement'

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (

    <Router>
    <div className={"appContainer"}>
      <Switch>
            <Route exact path="/basic-menu">
              <MenuBasic />
            </Route>
            <Route exact path="/dominos-menu">
              <MenuDominos />
            </Route>
            <Route exact path="/fish-menu">
              <MenuFish />
            </Route>
            <Route exact path="/mariage-announcement">
              <MariageAnnouncement />
            </Route>
            <Route exact path="/resume">
              <Resume />
            </Route>
            <Route  path="/*">
              <div>
                <Navigation />
                <Header data={landingPageData.Header} />
                <Features data={landingPageData.Features} />
                <About data={landingPageData.About} />
                <Services data={landingPageData.Services} />
                <Gallery />
                <Contact data={landingPageData.Contact} />
              </div>
            </Route>
            </Switch>
        </div>
      </Router>
  )
}

export default App


import './menu-pizza.scss';
import { useState, useEffect } from 'react'
import background from './img/menu-pizza.jpeg';
import pizzaImage from './img/pizza.jpeg';
import { Tabs, Tab } from 'react-bootstrap';

export default function MenuDominos() {
    const [tabSelected, setTabSelected] = useState('PLAT')
    useEffect(() => {
    }, [])
    function selectTab(tab) {
        console.log('tab ', tab)
        setTabSelected(tab)
    }
    return (
    <div class="footer-parallax-container"> 
        <div className={"all-height-pizza"} style={{ backgroundImage: `url(${background})` }}>
                <div className={"all-width-pizza"}>
                    <h1>Menu list two</h1>
                    <p>Menu and portfolio</p>
            </div>
        </div>
    <div class="section-bg-image parallax-window" data-bleed="0" data-natural-height="2500" data-natural-width="1920" data-parallax="scroll" data-image-src="../images/hd-portrait-3.jpg">
        <div class="container content">
            <div class="row center-row">
                <div class="col-md-10 col-center">
                    <div class="title-base">
                        <h2>Menu dejeuner : <b>12$</b></h2>
                        <p>(Entrée + Plat + Dessert)</p>
                    </div>

                    <Tabs defaultActiveKey="profile" className="tab-menu" >
                        <Tab eventKey="home" title="Entrée">
                            <div class="row pizza-entree">
                                <div class="list-item list-item-img">
                                        <div class="row center-row-2">
                                            <div class="width-100px">
                                                <div className={"meal"} style={{ backgroundImage: `url(${background})` }}></div>
                                            </div>
                                            <div class="col-md-8">
                                                <div>
                                                    <h3>Steamed king crab</h3>
                                                    <p> Duis aute irure dolo irure dolor in reprehenderit in voluptate velito esse cillume. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                
                                <div class="separator"></div>
                                <div class="list-item list-item-img">
                                    <div class="row center-row-2">
                                        <div class="width-100px">
                                            <div className={"meal"} style={{ backgroundImage: `url(${background})` }}></div>
                                        </div>
                                        <div class="col-md-8">
                                            <div>
                                                <h3>Steamed king crab</h3>
                                                <p> Duis aute irure dolo irure dolor in reprehenderit in voluptate velito esse cillume. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="separator"></div>
                                <div class="list-item list-item-img">
                                    <div class="row center-row-2">
                                        <div class="width-100px">
                                            <div className={"meal"} style={{ backgroundImage: `url(${background})` }}></div>
                                        </div>
                                        <div class="col-md-8">
                                            <div>
                                                <h3>Steamed king crab</h3>
                                                <p> Duis aute irure dolo irure dolor in reprehenderit in voluptate velito esse cillume. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="separator"></div>
                                <div class="list-item list-item-img">
                                    <div class="row center-row-2">
                                        <div class="width-100px">
                                            <div className={"meal"} style={{ backgroundImage: `url(${background})` }}></div>
                                        </div>
                                        <div class="col-md-8">
                                            <div>
                                                <h3>Steamed king crab</h3>
                                                <p> Duis aute irure dolo irure dolor in reprehenderit in voluptate velito esse cillume. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="separator"></div>
                                <div class="list-item list-item-img">
                                        <div class="row center-row-2">
                                            <div class="width-100px">
                                                <div className={"meal"} style={{ backgroundImage: `url(${background})` }}></div>
                                            </div>
                                            <div class="col-md-8">
                                                <div>
                                                    <h3>Steamed king crab</h3>
                                                    <p> Duis aute irure dolo irure dolor in reprehenderit in voluptate velito esse cillume. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                
                                <div class="separator"></div>
                                <div class="list-item list-item-img">
                                    <div class="row center-row-2">
                                        <div class="width-100px">
                                            <div className={"meal"} style={{ backgroundImage: `url(${background})` }}></div>
                                        </div>
                                        <div class="col-md-8">
                                            <div>
                                                <h3>Steamed king crab</h3>
                                                <p> Duis aute irure dolo irure dolor in reprehenderit in voluptate velito esse cillume. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="separator"></div>
                                <div class="list-item list-item-img">
                                    <div class="row center-row-2">
                                        <div class="width-100px">
                                            <div className={"meal"} style={{ backgroundImage: `url(${background})` }}></div>
                                        </div>
                                        <div class="col-md-8">
                                            <div>
                                                <h3>Steamed king crab</h3>
                                                <p> Duis aute irure dolo irure dolor in reprehenderit in voluptate velito esse cillume. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="separator"></div>
                                <div class="list-item list-item-img">
                                        <div class="row center-row-2">
                                            <div class="width-100px">
                                                <div className={"meal"} style={{ backgroundImage: `url(${background})` }}></div>
                                            </div>
                                            <div class="col-md-8">
                                                <div>
                                                    <h3>Steamed king crab</h3>
                                                    <p> Duis aute irure dolo irure dolor in reprehenderit in voluptate velito esse cillume. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </Tab>
                        <Tab eventKey="profile" title="Plat">
                            <div class="row pizza-entree">
                                <div class="list-item list-item-img">
                                        <div class="row center-row-2">
                                            <div class="width-100px">
                                                <div className={"meal"} style={{ backgroundImage: `url(${pizzaImage})` }}></div>
                                            </div>
                                            <div class="col-md-8">
                                                <div>
                                                    <h3>Steamed king crab</h3>
                                                    <p> Duis aute irure dolo irure dolor in reprehenderit in voluptate velito esse cillume. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                
                                <div class="separator"></div>
                                <div class="list-item list-item-img">
                                    <div class="row center-row-2">
                                        <div class="width-100px">
                                            <div className={"meal"} style={{ backgroundImage: `url(${background})` }}></div>
                                        </div>
                                        <div class="col-md-8">
                                            <div>
                                                <h3>Steamed king crab</h3>
                                                <p> Duis aute irure dolo irure dolor in reprehenderit in voluptate velito esse cillume. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="separator"></div>
                                <div class="list-item list-item-img">
                                    <div class="row center-row-2">
                                        <div class="width-100px">
                                            <div className={"meal"} style={{ backgroundImage: `url(${background})` }}></div>
                                        </div>
                                        <div class="col-md-8">
                                            <div>
                                                <h3>Steamed king crab</h3>
                                                <p> Duis aute irure dolo irure dolor in reprehenderit in voluptate velito esse cillume. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="separator"></div>
                                <div class="list-item list-item-img">
                                    <div class="row center-row-2">
                                        <div class="width-100px">
                                            <div className={"meal"} style={{ backgroundImage: `url(${background})` }}></div>
                                        </div>
                                        <div class="col-md-8">
                                            <div>
                                                <h3>Steamed king crab</h3>
                                                <p> Duis aute irure dolo irure dolor in reprehenderit in voluptate velito esse cillume. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="separator"></div>
                                <div class="list-item list-item-img">
                                        <div class="row center-row-2">
                                            <div class="width-100px">
                                                <div className={"meal"} style={{ backgroundImage: `url(${background})` }}></div>
                                            </div>
                                            <div class="col-md-8">
                                                <div>
                                                    <h3>Steamed king crab</h3>
                                                    <p> Duis aute irure dolo irure dolor in reprehenderit in voluptate velito esse cillume. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                
                                <div class="separator"></div>
                                <div class="list-item list-item-img">
                                    <div class="row center-row-2">
                                        <div class="width-100px">
                                            <div className={"meal"} style={{ backgroundImage: `url(${background})` }}></div>
                                        </div>
                                        <div class="col-md-8">
                                            <div>
                                                <h3>Steamed king crab</h3>
                                                <p> Duis aute irure dolo irure dolor in reprehenderit in voluptate velito esse cillume. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="separator"></div>
                                <div class="list-item list-item-img">
                                    <div class="row center-row-2">
                                        <div class="width-100px">
                                            <div className={"meal"} style={{ backgroundImage: `url(${background})` }}></div>
                                        </div>
                                        <div class="col-md-8">
                                            <div>
                                                <h3>Steamed king crab</h3>
                                                <p> Duis aute irure dolo irure dolor in reprehenderit in voluptate velito esse cillume. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="separator"></div>
                                <div class="list-item list-item-img">
                                        <div class="row center-row-2">
                                            <div class="width-100px">
                                                <div className={"meal"} style={{ backgroundImage: `url(${background})` }}></div>
                                            </div>
                                            <div class="col-md-8">
                                                <div>
                                                    <h3>Steamed king crab</h3>
                                                    <p> Duis aute irure dolo irure dolor in reprehenderit in voluptate velito esse cillume. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </Tab>
                        <Tab eventKey="contact" title="Dessert">
                            <div class="row pizza-entree">
                                <div class="list-item list-item-img">
                                        <div class="row center-row-2">
                                            <div class="width-100px">
                                                <div className={"meal"} style={{ backgroundImage: `url(${pizzaImage})` }}></div>
                                            </div>
                                            <div class="col-md-8">
                                                <div>
                                                    <h3>Steamed king crab</h3>
                                                    <p> Duis aute irure dolo irure dolor in reprehenderit in voluptate velito esse cillume. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                
                                <div class="separator"></div>
                                <div class="list-item list-item-img">
                                    <div class="row center-row-2">
                                        <div class="width-100px">
                                            <div className={"meal"} style={{ backgroundImage: `url(${background})` }}></div>
                                        </div>
                                        <div class="col-md-8">
                                            <div>
                                                <h3>Steamed king crab</h3>
                                                <p> Duis aute irure dolo irure dolor in reprehenderit in voluptate velito esse cillume. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="separator"></div>
                                <div class="list-item list-item-img">
                                    <div class="row center-row-2">
                                        <div class="width-100px">
                                            <div className={"meal"} style={{ backgroundImage: `url(${background})` }}></div>
                                        </div>
                                        <div class="col-md-8">
                                            <div>
                                                <h3>Steamed king crab</h3>
                                                <p> Duis aute irure dolo irure dolor in reprehenderit in voluptate velito esse cillume. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="separator"></div>
                                <div class="list-item list-item-img">
                                    <div class="row center-row-2">
                                        <div class="width-100px">
                                            <div className={"meal"} style={{ backgroundImage: `url(${background})` }}></div>
                                        </div>
                                        <div class="col-md-8">
                                            <div>
                                                <h3>Steamed king crab</h3>
                                                <p> Duis aute irure dolo irure dolor in reprehenderit in voluptate velito esse cillume. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="separator"></div>
                                <div class="list-item list-item-img">
                                        <div class="row center-row-2">
                                            <div class="width-100px">
                                                <div className={"meal"} style={{ backgroundImage: `url(${background})` }}></div>
                                            </div>
                                            <div class="col-md-8">
                                                <div>
                                                    <h3>Steamed king crab</h3>
                                                    <p> Duis aute irure dolo irure dolor in reprehenderit in voluptate velito esse cillume. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                
                                <div class="separator"></div>
                                <div class="list-item list-item-img">
                                    <div class="row center-row-2">
                                        <div class="width-100px">
                                            <div className={"meal"} style={{ backgroundImage: `url(${background})` }}></div>
                                        </div>
                                        <div class="col-md-8">
                                            <div>
                                                <h3>Steamed king crab</h3>
                                                <p> Duis aute irure dolo irure dolor in reprehenderit in voluptate velito esse cillume. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="separator"></div>
                                <div class="list-item list-item-img">
                                    <div class="row center-row-2">
                                        <div class="width-100px">
                                            <div className={"meal"} style={{ backgroundImage: `url(${background})` }}></div>
                                        </div>
                                        <div class="col-md-8">
                                            <div>
                                                <h3>Steamed king crab</h3>
                                                <p> Duis aute irure dolo irure dolor in reprehenderit in voluptate velito esse cillume. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="separator"></div>
                                <div class="list-item list-item-img">
                                        <div class="row center-row-2">
                                            <div class="width-100px">
                                                <div className={"meal"} style={{ backgroundImage: `url(${background})` }}></div>
                                            </div>
                                            <div class="col-md-8">
                                                <div>
                                                    <h3>Steamed king crab</h3>
                                                    <p> Duis aute irure dolo irure dolor in reprehenderit in voluptate velito esse cillume. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </div>
    </div>

    <div class="social-group">
        <a target="_blank" href="#" data-social="share-facebook"><i class="fa fa-facebook"></i></a>
        <a target="_blank" href="#" data-social="share-twitter"><i class="fa fa-twitter"></i></a>
        <a target="_blank" href="#" data-social="share-google"><i class="fa fa-instagram"></i></a>
        <a target="_blank" href="#" data-social="share-linkedin"><i class="fa fa-youtube"></i></a>
    </div>
</div>
)}
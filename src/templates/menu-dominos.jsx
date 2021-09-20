
import './menu-pizza.scss';
import { useState, useEffect } from 'react'
import background from './img/menu-pizza.jpeg';
import pizzaImage from './img/pizza.jpeg';
import { Tabs, Tab } from 'react-bootstrap';

export default function MenuDominos() {
    const [tabSelected, setTabSelected] = useState('ENTREE')
    useEffect(() => {
    }, [])
    function selectTab(tab) {
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
    <div class="pizza-content" data-bleed="0" data-natural-height="2500" data-natural-width="1920" data-parallax="scroll" data-image-src="../images/hd-portrait-3.jpg">
        <div class="container content">
            <div class="row center-row">
                <div class="col-md-10 col-center">
                    <div class="title-base">
                        <h2>Menu dejeuner : <b>12$</b></h2>
                        <p>(Entrée + Plat + Dessert)</p>
                    </div>

                    <nav id='menu' className='navbar navbar-default center-tab'>
                        <ul className='nav navbar-nav '>
                            <li>
                            <a onClick={(e) => selectTab('ENTREE')} className='page-scroll cursor' style={{ fontWeight: tabSelected == 'ENTREE'  ? `bold` : ''}}>
                                ENTREE
                            </a>
                            </li>
                            <li>
                            <a onClick={(e) => selectTab('PLAT')} className='page-scroll cursor' style={{ fontWeight: tabSelected == 'PLAT'  ? `bold` : ''}}>
                                Plat
                            </a>
                            </li>
                            <li>
                            <a onClick={(e) => selectTab('DESSERT')} className='page-scroll cursor' style={{ fontWeight: tabSelected == 'DESSERT'  ? `bold` : ''}}>
                                Dessert
                            </a>
                            </li>
                        </ul>
                    </nav>
                        {tabSelected === 'ENTREE' ?
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
                            : null 
                        }

                        {tabSelected === 'PLAT' ?
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
                            </div>
                           : null 
                        } 

                        {tabSelected === 'DESSERT' ?
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
                            : null 
                        }
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
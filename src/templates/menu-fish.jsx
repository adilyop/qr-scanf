
import './menu-pizza.scss';
import { useState, useEffect } from 'react'
import background from './img/menu-pizza.jpeg';
import pizzaImage from './img/pizza.jpeg';
import mealImage from './img/meal.jpeg';
import { Tabs, Tab } from 'react-bootstrap';

export default function MenuFish() {
    const [tabSelected, setTabSelected] = useState('PLAT')
    useEffect(() => {
    }, [])
    function selectTab(tab) {
        setTabSelected(tab)
    }
    return (
    <div class="footer-parallax-container"> 
        <div className={"all-height-fish"} >
                <div className={"all-width-fish"}>
                    <h1>Italian Food</h1>
                    <p>Pasta && Pizza</p>
            </div>
        </div>
    <div class="fish-content" 
                      data-bleed="0" data-natural-height="2500" data-natural-width="1920" data-parallax="scroll" data-image-src="../images/hd-portrait-3.jpg">
        <div classx="container content">
            <div className="fish-title-sub-menu"> <span> Populaire </span></div>
        <div className='row'>
          <div className='portfolio-items'>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='fish-portfolio-item pizza-red'>
                  <div className='fish-price'>12$</div>
                  <div className='fish-image'>
                    <img 
                      className='fish-img-responsive'
                      src={pizzaImage}
                      alt='Project Title'
                    />
                  </div>
                <div className='fish-title'>
                    <h4>Greek salad</h4>
                </div>
                <div className='fish-desc'>
                    <p>Mixed lettuce, cherry tomatoes, onion, cucumber, olives and feta served with a Greek style dressing</p>
                </div>
              </div>
            
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
            <div className='fish-portfolio-item pizza-red'>
                  <div className='fish-price'>12$</div>
                  <div className='fish-image'>
                    <img 
                      className='fish-img-responsive'
                      src={mealImage}
                      alt='Project Title'
                    />
                  </div>
                <div className='fish-title'>
                    <h4>Carpaccio</h4>
                </div>
                <div className='fish-desc'>
                    <p>Wafer thin slices of Ostrich Carpaccio served with a small rocket salad, parmesan and a balsamic reduction</p>
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
            <div className='fish-portfolio-item pizza-red'>
                  <div className='fish-price'>12$</div>
                  <div className='fish-image'>
                    <img 
                      className='fish-img-responsive'
                      src={mealImage}
                      alt='Project Title'
                    />
                  </div>
                <div className='fish-title'>
                    <h4>Lorem Ipsum</h4>
                </div>
                <div className='fish-desc'>
                    <p>Lorem Ipsum</p>
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
            <div className='fish-portfolio-item pizza-red'>
                  <div className='fish-price'>12$</div>
                  <div className='fish-image'>
                    <img 
                      className='fish-img-responsive'
                      src={pizzaImage}
                      alt='Project Title'
                    />
                  </div>
                <div className='fish-title'>
                    <h4>Lorem Ipsum</h4>
                </div>
                <div className='fish-desc'>
                    <p>Lorem Ipsum</p>
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
            <div className='fish-portfolio-item pizza-red'>
                  <div className='fish-price'>12$</div>
                  <div className='fish-image'>
                    <img 
                      className='fish-img-responsive'
                      src={mealImage}
                      alt='Project Title'
                    />
                  </div>
                <div className='fish-title'>
                    <h4>Lorem Ipsum</h4>
                </div>
                <div className='fish-desc'>
                    <p>Lorem Ipsum</p>
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
            <div className='fish-portfolio-item pizza-red'>
                  <div className='fish-price'>12$</div>
                  <div className='fish-image'>
                    <img 
                      className='fish-img-responsive'
                      src={mealImage}
                      alt='Project Title'
                    />
                  </div>
                <div className='fish-title'>
                    <h4>Lorem Ipsum</h4>
                </div>
                <div className='fish-desc'>
                    <p>Lorem Ipsum</p>
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
            <div className='fish-portfolio-item pizza-red'>
                  <div className='fish-price'>12$</div>
                  <div className='fish-image'>
                    <img 
                      className='fish-img-responsive'
                      src={pizzaImage}
                      alt='Project Title'
                    />
                  </div>
                <div className='fish-title'>
                    <h4>Lorem Ipsum</h4>
                </div>
                <div className='fish-desc'>
                    <p>Lorem Ipsum</p>
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
            <div className='fish-portfolio-item pizza-red'>
                  <div className='fish-price'>12$</div>
                  <div className='fish-image'>
                    <img 
                      className='fish-img-responsive'
                      src={pizzaImage}
                      alt='Project Title'
                    />
                  </div>
                <div className='fish-title'>
                    <h4>Lorem Ipsum</h4>
                </div>
                <div className='fish-desc'>
                    <p>Lorem Ipsum</p>
                </div>
              </div>
            </div>
            
            <div className='col-sm-6 col-md-4 col-lg-4'>
            <div className='fish-portfolio-item pizza-red'>
                  <div className='fish-price'>12$</div>
                  <div className='fish-image'>
                    <img 
                      className='fish-img-responsive'
                      src={pizzaImage}
                      alt='Project Title'
                    />
                  </div>
                <div className='fish-title'>
                    <h4>Lorem Ipsum</h4>
                </div>
                <div className='fish-desc'>
                    <p>Lorem Ipsum</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      
        <div className="fish-title-sub-menu"> <span> Salades </span></div>
        <div className='row'>
          <div className='portfolio-items'>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='fish-portfolio-item pizza-green'>
                  <div className='fish-price'>12$</div>
                  <div className='fish-image'>
                    <img 
                      className='fish-img-responsive'
                      src={pizzaImage}
                      alt='Project Title'
                    />
                  </div>
                <div className='fish-title'>
                    <h4>Lorem Ipsum</h4>
                </div>
                <div className='fish-desc'>
                    <p>Lorem Ipsum</p>
                </div>
              </div>
            
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
            <div className='fish-portfolio-item pizza-green'>
                  <div className='fish-price'>12$</div>
                  <div className='fish-image'>
                    <img 
                      className='fish-img-responsive'
                      src={pizzaImage}
                      alt='Project Title'
                    />
                  </div>
                <div className='fish-title'>
                    <h4>Lorem Ipsum</h4>
                </div>
                <div className='fish-desc'>
                    <p>Lorem Ipsum</p>
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
            <div className='fish-portfolio-item pizza-green'>
                  <div className='fish-price'>12$</div>
                  <div className='fish-image'>
                    <img 
                      className='fish-img-responsive'
                      src={pizzaImage}
                      alt='Project Title'
                    />
                  </div>
                <div className='fish-title'>
                    <h4>Lorem Ipsum</h4>
                </div>
                <div className='fish-desc'>
                    <p>Lorem Ipsum</p>
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
            <div className='fish-portfolio-item pizza-green'>
                  <div className='fish-price'>12$</div>
                  <div className='fish-image'>
                    <img 
                      className='fish-img-responsive'
                      src={pizzaImage}
                      alt='Project Title'
                    />
                  </div>
                <div className='fish-title'>
                    <h4>Lorem Ipsum</h4>
                </div>
                <div className='fish-desc'>
                    <p>Lorem Ipsum</p>
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
            <div className='fish-portfolio-item pizza-green'>
                  <div className='fish-price'>12$</div>
                  <div className='fish-image'>
                    <img 
                      className='fish-img-responsive'
                      src={pizzaImage}
                      alt='Project Title'
                    />
                  </div>
                <div className='fish-title'>
                    <h4>Lorem Ipsum</h4>
                </div>
                <div className='fish-desc'>
                    <p>Lorem Ipsum</p>
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
            <div className='fish-portfolio-item pizza-green'>
                  <div className='fish-price'>12$</div>
                  <div className='fish-image'>
                    <img 
                      className='fish-img-responsive'
                      src={pizzaImage}
                      alt='Project Title'
                    />
                  </div>
                <div className='fish-title'>
                    <h4>Lorem Ipsum</h4>
                </div>
                <div className='fish-desc'>
                    <p>Lorem Ipsum</p>
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
            <div className='fish-portfolio-item pizza-green'>
                  <div className='fish-price'>12$</div>
                  <div className='fish-image'>
                    <img 
                      className='fish-img-responsive'
                      src={pizzaImage}
                      alt='Project Title'
                    />
                  </div>
                <div className='fish-title'>
                    <h4>Lorem Ipsum</h4>
                </div>
                <div className='fish-desc'>
                    <p>Lorem Ipsum</p>
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
            <div className='fish-portfolio-item pizza-green'>
                  <div className='fish-price'>12$</div>
                  <div className='fish-image'>
                    <img 
                      className='fish-img-responsive'
                      src={pizzaImage}
                      alt='Project Title'
                    />
                  </div>
                <div className='fish-title'>
                    <h4>Lorem Ipsum</h4>
                </div>
                <div className='fish-desc'>
                    <p>Lorem Ipsum</p>
                </div>
              </div>
            </div>
            
            <div className='col-sm-6 col-md-4 col-lg-4'>
            <div className='fish-portfolio-item pizza-green'>
                  <div className='fish-price'>12$</div>
                  <div className='fish-image'>
                    <img 
                      className='fish-img-responsive'
                      src={pizzaImage}
                      alt='Project Title'
                    />
                  </div>
                <div className='fish-title'>
                    <h4>Lorem Ipsum</h4>
                </div>
                <div className='fish-desc'>
                    <p>Lorem Ipsum</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      
        <div className="fish-title-sub-menu"> <span> Plat </span></div>
        <div className='row'>
          <div className='portfolio-items'>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='fish-portfolio-item pizza-purple'>
                  <div className='fish-price'>12$</div>
                  <div className='fish-image'>
                    <img 
                      className='fish-img-responsive'
                      src={pizzaImage}
                      alt='Project Title'
                    />
                  </div>
                <div className='fish-title'>
                    <h4>Lorem Ipsum</h4>
                </div>
                <div className='fish-desc'>
                    <p>Lorem Ipsum</p>
                </div>
              </div>
            
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
            <div className='fish-portfolio-item pizza-purple'>
                  <div className='fish-price'>12$</div>
                  <div className='fish-image'>
                    <img 
                      className='fish-img-responsive'
                      src={pizzaImage}
                      alt='Project Title'
                    />
                  </div>
                <div className='fish-title'>
                    <h4>Lorem Ipsum</h4>
                </div>
                <div className='fish-desc'>
                    <p>Lorem Ipsum</p>
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
            <div className='fish-portfolio-item pizza-purple'>
                  <div className='fish-price'>12$</div>
                  <div className='fish-image'>
                    <img 
                      className='fish-img-responsive'
                      src={pizzaImage}
                      alt='Project Title'
                    />
                  </div>
                <div className='fish-title'>
                    <h4>Lorem Ipsum</h4>
                </div>
                <div className='fish-desc'>
                    <p>Lorem Ipsum</p>
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
            <div className='fish-portfolio-item pizza-purple'>
                  <div className='fish-price'>12$</div>
                  <div className='fish-image'>
                    <img 
                      className='fish-img-responsive'
                      src={pizzaImage}
                      alt='Project Title'
                    />
                  </div>
                <div className='fish-title'>
                    <h4>Lorem Ipsum</h4>
                </div>
                <div className='fish-desc'>
                    <p>Lorem Ipsum</p>
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
            <div className='fish-portfolio-item pizza-purple'>
                  <div className='fish-price'>12$</div>
                  <div className='fish-image'>
                    <img 
                      className='fish-img-responsive'
                      src={pizzaImage}
                      alt='Project Title'
                    />
                  </div>
                <div className='fish-title'>
                    <h4>Lorem Ipsum</h4>
                </div>
                <div className='fish-desc'>
                    <p>Lorem Ipsum</p>
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
            <div className='fish-portfolio-item pizza-purple'>
                  <div className='fish-price'>12$</div>
                  <div className='fish-image'>
                    <img 
                      className='fish-img-responsive'
                      src={pizzaImage}
                      alt='Project Title'
                    />
                  </div>
                <div className='fish-title'>
                    <h4>Lorem Ipsum</h4>
                </div>
                <div className='fish-desc'>
                    <p>Lorem Ipsum</p>
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
            <div className='fish-portfolio-item pizza-purple'>
                  <div className='fish-price'>12$</div>
                  <div className='fish-image'>
                    <img 
                      className='fish-img-responsive'
                      src={pizzaImage}
                      alt='Project Title'
                    />
                  </div>
                <div className='fish-title'>
                    <h4>Lorem Ipsum</h4>
                </div>
                <div className='fish-desc'>
                    <p>Lorem Ipsum</p>
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
            <div className='fish-portfolio-item pizza-purple'>
                  <div className='fish-price'>12$</div>
                  <div className='fish-image'>
                    <img 
                      className='fish-img-responsive'
                      src={pizzaImage}
                      alt='Project Title'
                    />
                  </div>
                <div className='fish-title'>
                    <h4>Lorem Ipsum</h4>
                </div>
                <div className='fish-desc'>
                    <p>Lorem Ipsum</p>
                </div>
              </div>
            </div>
            
            <div className='col-sm-6 col-md-4 col-lg-4'>
            <div className='fish-portfolio-item pizza-purple'>
                  <div className='fish-price'>12$</div>
                  <div className='fish-image'>
                    <img 
                      className='fish-img-responsive'
                      src={pizzaImage}
                      alt='Project Title'
                    />
                  </div>
                <div className='fish-title'>
                    <h4>Lorem Ipsum</h4>
                </div>
                <div className='fish-desc'>
                    <p>Lorem Ipsum</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      
        <div className="fish-title-sub-menu"> <span> Dessert </span></div>
        <div className='row'>
          <div className='portfolio-items'>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='fish-portfolio-item pizza-yellow'>
                  <div className='fish-price'>12$</div>
                  <div className='fish-image'>
                    <img 
                      className='fish-img-responsive'
                      src={pizzaImage}
                      alt='Project Title'
                    />
                  </div>
                <div className='fish-title'>
                    <h4>Lorem Ipsum</h4>
                </div>
                <div className='fish-desc'>
                    <p>Lorem Ipsum</p>
                </div>
              </div>
            
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
            <div className='fish-portfolio-item pizza-yellow'>
                  <div className='fish-price'>12$</div>
                  <div className='fish-image'>
                    <img 
                      className='fish-img-responsive'
                      src={pizzaImage}
                      alt='Project Title'
                    />
                  </div>
                <div className='fish-title'>
                    <h4>Lorem Ipsum</h4>
                </div>
                <div className='fish-desc'>
                    <p>Lorem Ipsum</p>
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
            <div className='fish-portfolio-item pizza-yellow'>
                  <div className='fish-price'>12$</div>
                  <div className='fish-image'>
                    <img 
                      className='fish-img-responsive'
                      src={pizzaImage}
                      alt='Project Title'
                    />
                  </div>
                <div className='fish-title'>
                    <h4>Lorem Ipsum</h4>
                </div>
                <div className='fish-desc'>
                    <p>Lorem Ipsum</p>
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
            <div className='fish-portfolio-item pizza-yellow'>
                  <div className='fish-price'>12$</div>
                  <div className='fish-image'>
                    <img 
                      className='fish-img-responsive'
                      src={pizzaImage}
                      alt='Project Title'
                    />
                  </div>
                <div className='fish-title'>
                    <h4>Lorem Ipsum</h4>
                </div>
                <div className='fish-desc'>
                    <p>Lorem Ipsum</p>
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
            <div className='fish-portfolio-item pizza-yellow'>
                  <div className='fish-price'>12$</div>
                  <div className='fish-image'>
                    <img 
                      className='fish-img-responsive'
                      src={pizzaImage}
                      alt='Project Title'
                    />
                  </div>
                <div className='fish-title'>
                    <h4>Lorem Ipsum</h4>
                </div>
                <div className='fish-desc'>
                    <p>Lorem Ipsum</p>
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
            <div className='fish-portfolio-item pizza-yellow'>
                  <div className='fish-price'>12$</div>
                  <div className='fish-image'>
                    <img 
                      className='fish-img-responsive'
                      src={pizzaImage}
                      alt='Project Title'
                    />
                  </div>
                <div className='fish-title'>
                    <h4>Lorem Ipsum</h4>
                </div>
                <div className='fish-desc'>
                    <p>Lorem Ipsum</p>
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
            <div className='fish-portfolio-item pizza-yellow'>
                  <div className='fish-price'>12$</div>
                  <div className='fish-image'>
                    <img 
                      className='fish-img-responsive'
                      src={pizzaImage}
                      alt='Project Title'
                    />
                  </div>
                <div className='fish-title'>
                    <h4>Lorem Ipsum</h4>
                </div>
                <div className='fish-desc'>
                    <p>Lorem Ipsum</p>
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
            <div className='fish-portfolio-item pizza-yellow'>
                  <div className='fish-price'>12$</div>
                  <div className='fish-image'>
                    <img 
                      className='fish-img-responsive'
                      src={pizzaImage}
                      alt='Project Title'
                    />
                  </div>
                <div className='fish-title'>
                    <h4>Lorem Ipsum</h4>
                </div>
                <div className='fish-desc'>
                    <p>Lorem Ipsum</p>
                </div>
              </div>
            </div>
            
            <div className='col-sm-6 col-md-4 col-lg-4'>
            <div className='fish-portfolio-item pizza-yellow'>
                  <div className='fish-price'>12$</div>
                  <div className='fish-image'>
                    <img 
                      className='fish-img-responsive'
                      src={pizzaImage}
                      alt='Project Title'
                    />
                  </div>
                <div className='fish-title'>
                    <h4>Lorem Ipsum</h4>
                </div>
                <div className='fish-desc'>
                    <p>Lorem Ipsum</p>
                </div>
              </div>
            </div>
            
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
import {React,useState} from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import {Carousel} from "react-bootstrap";
import slideimg1 from "./assets/images/she-code-africa-logo.svg" ;
import slideimg2 from "./assets/images/jenkins-gsoc-transparent.png" ;
import slideimg3 from "./assets/images/jenkins-is-the-way.png";
import slideimg4 from "./assets/images/cdCon2021.jpg";
import slideimg5 from "./assets/images/Jenkins_Needs_You-transparent.png" ;

function Slider() {
    
       
  const [index, setIndex] = useState(0);

const handleSelect = (selectedIndex, e) => {
  setIndex(selectedIndex);
};

return (
  <div className="carousel-by-me">
    {/* <FontAwesomeIcon icon={faCoffee} /> */}
    {/* <FontAwesomeIcon icon={['fab', 'apple']} /> */}
    {/* <FontAwesomeIcon icon="coffee" /> */}
    {/* <FontAwesomeIcon icon="check-square" /> */}
    <div className="container">
  <Carousel controls={false} activeIndex={index} onSelect={handleSelect}>
    <Carousel.Item>
    <div className="row">
                  <div className="col-md-12 col-lg-8 order-first order-lg-last">
                 
                    <img className="slide-img" src={slideimg1} alt="slider_image" style={{height: '300px'}} />
                  </div>
                  <div className="col-md-12 col-lg-4 order-last order-lg-first">
                
                      <h2>
                        SheCodeAfrica Contributhon
                      </h2>
                      <p>
                        The SheCodeAfrica Contributhon started April 1, 2021. Jenkins Project is mentoring women in Africa as they propose pull requests to improve Pipeline help and Pipeline examples. The participants include Onyinye Ezike, Sharon Jebitok, Esther Ejidike, Cynthia Iradukunda, and Lucy Karimi
                      </p>
                   
                    <div>
                      <button className="btn btn-danger" href="#">
                        More info
                      </button>
                    </div>
                  </div>
                </div>
    </Carousel.Item>
    <Carousel.Item>
   
    <div className="row">
                  <div className="col-md-12 col-lg-8 order-first order-lg-last">
                   
                  <img className="slide-img" src={slideimg2} alt="slider_image" style={{height: '300px'}} />
                  </div>
                  <div className="col-md-12 col-lg-4 order-last order-lg-first">
                   
                      <h2>
                        GSoC 2021: Call for student proposals
                      </h2>
                      <p>
                        Jenkins project will be a mentoring organization in Google Summer of Code 2021. We are looking for students and mentors, join us! Applications close on April 13.
                      </p>
                   
                    <div>
                      <a className="btn btn-primary" href="#">
                        More info
                      </a>
                    </div>
                  </div>
                </div>
     
    </Carousel.Item>
    <Carousel.Item>
    <div className="row">
                  <div className="col-md-12 col-lg-8 order-first order-lg-last">
                    <img  className="slide-img" role="presentation" alt="slider_image" src={slideimg3} style={{height: '285px'}} />
                  </div>
                  <div className="col-md-12 col-lg-4 order-last order-lg-first">
            
                      <h2>
                        Jenkins is the Way!
                      </h2>
                      <p>
                        We are looking for experiences of Jenkins users from around the world showcasing how they are building, deploying, and automating great software with Jenkins. Check out their user stories and share yours
                      </p>
             
                    <div>
                      <a className="btn btn-primary" href="#">
                        More info
                      </a>
                    </div>
                  </div>
                </div>
       </Carousel.Item>
       <Carousel.Item>

       <div className="row">
                  <div className="col-md-12 col-lg-8 order-first order-lg-last">
                    <img className="slide-img" alt="slider_image" role="presentation" src={slideimg4} style={{height: '320px'}} />
                  </div>
                  <div className="col-md-12 col-lg-4 order-last order-lg-first">
                
                      <h2>
                        Participate and Contribute!
                      </h2>
                      <p>
                        Jenkins is a community-driven project. We invite everyone to join us and move it forward. Any contribution matters: code, documentation, localization, blog posts, artwork, meetups, and anything else. If you have five minutes or a few hours, you can help!
                      </p>
              
                    <div>
                      <a className="btn btn-primary" href="/participate/">
                        More info
                      </a>
                    </div>
                  </div>
                </div>
       </Carousel.Item>
       <Carousel.Item>
       <div className="row">
                  <div className="col-md-12 col-lg-8 order-first order-lg-last">
                    <img className="slide-img" alt="slider_image" role="presentation" src={slideimg5} style={{height: '300px'}} />
                  </div>
                  <div className="col-md-12 col-lg-4 order-last order-lg-first">
                 
                      <h2>
                        cdCon
                      </h2>
                      <p>
                        Join Jenkins at cdCon on June 22-25, 2021! The event is focused on improving the world's capacity to deliver software with security and speed. Become part of the conversation that drives continuous delivery by meeting peers, sharing ideas and talking to industry leaders on all things software delivery and DevOps.
                      </p>
             
                    <div>
                      <button className="btn btn-primary" href="#">
                        Register for cdCon
                      </button>
                    </div>
                  </div>
                </div>

       </Carousel.Item>
  </Carousel>
  </div>
  </div>
);
         
    
};

export default Slider;
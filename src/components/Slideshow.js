import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import '../styles/slideshowStyle.css';
 
const slideImages = [
  'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/PB-DesktopBanner_1512x.jpg?v=1596703805',
  'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD441pro-DesktopBanner_1512x.jpg?v=1596691389',
  'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Boat-Website-Banner_ProGear_1512x.jpg?v=1594301349'
];
 
const Slideshow = () => {

    const properties = {
    duration: 2000,
    transitionDuration: 300,
    infinite: true,
    pauseOnHover: true,
    nextArrow: <div style={{width: "30px",color: "white", position: "absolute", right: 0}}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><title>Right</title><polyline points="9 18 15 12 9 6"></polyline></svg></div>,
    prevArrow: <div style={{width: "30px",color: "white", position: "absolute"}}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><title>Left</title><polyline points="15 18 9 12 15 6"></polyline></svg></div>
    };

    return (
      <div className="slide-container">
        <Slide {...properties}> 
          <div className="each-slide">
            <div className="cd33" style={{'backgroundImage': `url(${slideImages[0]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div className="cd33" style={{'backgroundImage': `url(${slideImages[1]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div className="cd33" style={{'backgroundImage': `url(${slideImages[2]})`}}>
            </div>
          </div>
        </Slide>
      </div>
    )
}

export default Slideshow;
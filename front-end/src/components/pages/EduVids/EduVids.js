
import React from 'react';
import ReactDOM from 'react-dom';
import style from "./styleEV.css";
import {VIDEOS} from "./vidlinks"
import background from "./components/gradient_squares.png"
import ImageSlider from './components/ImageSlider';

function EduVidsApp() {
    return (
      <div className='EduVids'>
        <h1 id = "eduvidstitle">Educational Videos</h1>
        <h4 id = "eduvidspara">Educational videos designed for children ages 5-11</h4>
        <div className='container'>
          <ImageSlider images={VIDEOS} />
        </div>
      </div>
    );
  }

export default EduVidsApp;

import "./intro.scss"
import {init} from 'ityped';
import { useEffect, useRef } from "react";

export default function Intro() {
  const text =useRef();
  useEffect(()=>{
    init(text.current,{ 
      showCursor: true, 
      backDelay: 1500,
      backSpeed: 60,
      strings: ['Front-end', 'Back-end' ], 
    });
  },[])
  return (
    <div className="intro" id = "intro">
      <div className="left">
        <div className="img-container">
          <img src="assets/Artboard.png" alt="profile-image" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>hi there, I'm</h2>
          <h1>Alex Ndawula</h1>
          <h3>React <span ref={text}></span> Developer</h3>
          <a href="#portifolio">
          <img src="assets/down-arrow.svg" alt="" />
        </a>
        </div>
        
      </div>

    </div>
  )
}

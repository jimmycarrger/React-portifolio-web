import { useState } from 'react';
import './works.scss'

export default function Works() {
  const[currentSlide, setCurrentSlide]=useState(0);
  const data = [
    {
      id: 1,
      title: "Web Design",
      icon: "assets/globe.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea illum adipisci molestias reiciendis impedit, architecto minus?",
      img: "assets/front.png",
    },  
    {
      id: 2,
      title: "Mobile Application",
      icon: "assets/mobile.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea illum adipisci molestias reiciendis impedit, architecto minus?",
      img: "assets/front.png",
    },  
    {
      id: 3,
      title: "Design",
      icon: "assets/pc.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea illum adipisci molestias reiciendis impedit, architecto minus?",
      img: "assets/front.png",
    },  
  ];

  const handleClick = (way) =>{
    way==="left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 :2 ) :
    setCurrentSlide(currentSlide < data.length-1 ? currentSlide+1 : 0)
  };
  return (
    <div className="works" id ="works">
      <div className="slider" 
       style={{transform:`translateX(-${currentSlide*100}vw)`}}>
        { data.map(d=>(
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftcontainer">
                <div className="imgcontainer">
                  <img src={d.icon} alt='' />
                </div>
                <h2>{d.title}</h2>
                <p>{d.desc}</p>
                <span>Project</span>
              </div>
            </div>
            <div className="right">
              <img src={d.img} alt='' />
            </div>
          </div>
        </div>))}
      </div>
      <img src='assets/arro.png ' className='arrow left' alt='' onClick={()=>handleClick("left")} />
      <img src='assets/arro.png ' className='arrow right' alt='' onClick={()=>handleClick()} />
    </div>
  )
}

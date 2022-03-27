import {useEffect, useState } from 'react'
import PortifolioList from '../portifolioList/PortifolioList'
import './portifolio.scss'
import { 
  Featuredportifolio,
  WebDesignPortifolio,
  MotionDesignPortifolio,
  GraphicsDesignPortifolio,
  DigitalMarketerPortifolio
 } from '../../data';

export default function Portifolio() {
  const[ selected, setSelected] = useState("featured");
  const[ data, setData] = useState([]);
  const list =[
    {
      id: "featured",
      title: " Featured",
    },
    {
      id: "web design",
      title: "Web Design",
    },
    {
      id: "motion design",
      title: "Motion Design",
    },
    {
      id: "graphics design",
      title: " Graphics Design",
    },
    {
      id: "digital marketer",
      title:  " Digital Marketer",
    },
    
  ];

  useEffect(()=>{
    switch (selected) {
      case "featured":
        setData(Featuredportifolio)
        break;
      case "web design":
        setData(WebDesignPortifolio)
        break;
      case "motion design":
        setData(MotionDesignPortifolio)
        break;
      case "graphics design":
        setData(GraphicsDesignPortifolio)
        break;
      case "digital marketer":
        setData(DigitalMarketerPortifolio)
        break;
    
      default:
        setData(Featuredportifolio)
        break;
    }

  }, [selected]);
  return (
    <div className="portifolio" id ="portifolio">
      <h1>Portifolio</h1>
      <ul>
        {list.map((item) =>(
          <PortifolioList 
          title = {item.title} 
          active ={selected === item.id} 
          setSelected ={setSelected}
          id = {item.id} 
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d)=>(
        <div className="item">
          <img src= {d.img} alt='' />
          <h3>{d.title}</h3>
        </div>
        ))}
      </div>

    </div>
  )
}

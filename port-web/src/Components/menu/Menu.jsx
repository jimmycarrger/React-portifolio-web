import './menu.scss'

import React from 'react'

export default function Menu({menuopen, setMenuopen}) {
  return (
    <div className={"menu " + (menuopen && "active")}>
        <ul>
            <li onClick={()=>setMenuopen(false)}>
                <a href="#intro">Home</a>
            </li>
            <li onClick={()=>setMenuopen(false)}>
                <a href="#portifolio">Portifolio</a>
            </li>
            <li onClick={()=>setMenuopen(false)}>
                <a href="#works">Works</a>
            </li>
            <li onClick={()=>setMenuopen(false)}>
                <a href="#testimonials">Testimonials</a>
            </li>
            <li onClick={()=>setMenuopen(false)}>
                <a href="#contact">contact</a>
            </li>
        </ul>

    </div>
  )
}

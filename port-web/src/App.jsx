import Topbar from './Components/topbar/Topbar';
import Intro from './Components/intro/Intro';
import Portifolio from './Components/portifolio/Portifolio';
import Works from './Components/works/Works';
import Testimonials from './Components/testimonials/Testimonials';
import Contact from './Components/contact/Contact';
import "./app.scss"
import { useState } from 'react';
import Menu from './Components/menu/Menu';

function App() {
  const[menuopen, setMenuopen] =useState(false)
  return (
    <div className="app">
     <Topbar menuopen ={menuopen} setMenuopen ={setMenuopen}/>
     <Menu menuopen ={menuopen} setMenuopen ={setMenuopen}/>
     <div className="section">
       <Intro/>
       <Portifolio/>
       <Works/>
       <Testimonials/>
       <Contact/>
     </div>
    </div>
  );
}

export default App;

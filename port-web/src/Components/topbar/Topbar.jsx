import "./topbar.scss"
import {Person, Mail} from '@material-ui/icons';

export default function Topbar({menuopen, setMenuopen}) {
  return (
    <div className={"topbar " + (menuopen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">alex.</a>
          <div className="item-container">
            <Person className="icon"/>
            <span>+256 703021938</span>
          </div>
          <div className="item-container">
            <Mail className="icon"/>
            <span>alexndawula@arrowmedia.com</span>
          </div>
        </div>
        <div className="right" onClick={()=>setMenuopen(!menuopen)}>
          <div className="hamburger">
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

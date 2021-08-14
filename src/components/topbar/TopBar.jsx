import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";

export default function TopBar({menuOpen,setMenuOpen}) {
  return (
    <div className={"topbar "+(menuOpen&&"active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            METWAL
          </a>
          <div className="itemContainer">
            <Person className="icon"/>
            <span>+91-9990033189</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon"/>
            <span>ankitmetwal10jan@gmail.com</span>
          </div>
        </div>
        <div className="right">
            <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                <span className="line1"></span>
                <span className="line2"></span>
                <span className="line3"></span>
            </div>
        </div>
      </div>
    </div>
  );
}

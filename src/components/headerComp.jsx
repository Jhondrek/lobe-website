import "./headerStyles.css"
import { useState } from "react"
import logo from "../assets/logo.png"
import {Link, NavLink} from "react-router-dom"
export default function Header(){

    const [isMenuOpen, setMenuOpen] = useState(false)

    // toggles the menu state from open/closed
    function toggleActive(){
        setMenuOpen((prevIsMenuOpen)=>!prevIsMenuOpen)
    }

    return(
    <header>
       
        <div className="header">
            <Link className="header__logo"  to={"/"} >
                <img  src={logo}  alt="Company logo: the word in bold with a green and red square intersecting to form a small black square." />
            </Link>

            <div className={`hamb-menu ${isMenuOpen ? 'active' : ''}`} onClick={()=>{toggleActive()}}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <nav className={`off-screen-menu ${isMenuOpen ?`active` : ``}`}>
                <ul>
                    <li><NavLink className={({isActive})=> ` ${isActive ? "my__link navmenu__link" : "navmenu__link"}`}  to="/" onClick={()=>{toggleActive()}}>Overview</NavLink></li>

                    <li><NavLink className={({isActive})=> ` ${isActive ? "my__link navmenu__link" : "navmenu__link"}`} to="/examples" onClick={()=>{toggleActive()}}>Examples</NavLink></li>

                    <li><NavLink className={({isActive})=> ` ${isActive ? "my__link navmenu__link" : "navmenu__link"}`} to="/help" onClick={()=>{toggleActive()}}>Help</NavLink></li>
                </ul>
            </nav>

            <button className='header__btn'>Download</button>

        </div>

        
        
        
    </header>
)
}
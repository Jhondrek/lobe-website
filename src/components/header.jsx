import "./headerStyles.css"
import { useState, useEffect } from "react"
import logo from "../assets/logo.png"
export default function Header(){

    const [isMenuOpen, setMenuOpen] = useState(false)

    function toggleActive(){
        setMenuOpen((prevIsMenuOpen)=>!prevIsMenuOpen)
    }

    useEffect(()=>{}, [])

    return(
    <header>
       
        <nav className="header">
            <img className="header__logo" src={logo} alt="Company logo: the word in bold with a green and red square intersecting to form a small black square." />

            <div className={`hamb-menu ${isMenuOpen ? 'active' : ''}`} onClick={()=>{toggleActive()}}>
                <span></span>
                <span></span>
                <span></span>
            </div>

        </nav>

        <div className={`off-screen-menu ${isMenuOpen ?`active` : ``}`}>
            <ul>
                <li><a className="navmenu__link" href="">Overview</a></li>
                <li><a className="navmenu__link" href="">Examples</a></li>
                <li><a className="navmenu__link" href="">Help</a></li>
            </ul>
        </div>
        
        
    </header>
)
}
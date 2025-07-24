import "./Footer.css"
import { useState } from "react"
import { faYoutube, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faComment} from "@fortawesome/free-solid-svg-icons"
import logo from "../assets/logo.png"



export default function(){

    const [isClicked, setIsClicked] = useState([false,false, false])

    function toggleIsClicked(position){
        setIsClicked((prevIsClicked)=> prevIsClicked.map((isClicked, index)=> index ===position ? !isClicked : isClicked) )
    }

    return(
        
    <footer>
        <span className='hero__divider'/>

        <div className="footer__dropdown">
            <button className="footer__btn" onClick={()=>toggleIsClicked(0)}>About <span className={`footer__btn--arrow ${isClicked[0] && "clicked"}`}>∨</span></button>

            <ol className={`footer__dropdown__options ${isClicked[0] && "clicked"}`}>
                <li className="footer__dropdown__option">Download</li>
                <li className="footer__dropdown__option">Overview</li>
                <li className="footer__dropdown__option">Examples</li>
            </ol>

            <button className="footer__btn" onClick={()=>toggleIsClicked(1)}>General <span className={`footer__btn--arrow ${isClicked[1] && "clicked"}`}>∨</span></button>
            <ol className={`footer__dropdown__options ${isClicked[1] && "clicked"}`}>
                <li className="footer__dropdown__option">Overview</li>
                <li className="footer__dropdown__option">Download</li>
                <li className="footer__dropdown__option">Examples</li>
            </ol>

            <button className="footer__btn" onClick={()=>toggleIsClicked(2)}>Resources <span className={`footer__btn--arrow ${isClicked[2] && "clicked"}`}>∨</span></button>
            <ol className={`footer__dropdown__options ${isClicked[2] && "clicked"}`}>
                <li className="footer__dropdown__option">Help</li>
                <li className="footer__dropdown__option">Contact</li>
                <li className="footer__dropdown__option">Privacy</li>
            </ol>
        </div>

        <div className="footer__socials">
            <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faComment} className="footer__icon" />
            </a>

            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} className="footer__icon" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} className="footer__icon" />
            </a>
            
            
        </div>

        <div className="branding">
            <img src={logo} alt="Lobe logo" className="branding__logo"/>
            <p className="branding__info">A product from Microsoft</p>
            <p className="branding__info">All rights reserved</p>
            <p className="branding__info">© Microsoft 2021</p>
        </div>

    </footer>
    )
}
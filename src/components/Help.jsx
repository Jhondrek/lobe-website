import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faAngleUp} from "@fortawesome/free-solid-svg-icons"
import "./genericStyles.css"
import "./help.css"
import {helpFAQs} from "../data/helpFAQs"
import { NavLink, Outlet } from "react-router-dom"

export default function Help(){

   
    const [qaOpenState, setQaOpenState] = useState(createInitialQaStateArray())

    //returns an array with the same number of false elements than the number of elements in helpFAQs
    function createInitialQaStateArray(){
        let qaStateInitialArray = []
        helpFAQs.forEach(()=>{qaStateInitialArray.push(false)})
        return qaStateInitialArray
    }
    
    
//chages toggles the open/closed state for the clicked question
    function toggleSingleQaOpenState(i){
    setQaOpenState((prevQaOpenState) =>
        prevQaOpenState.map((val, index) => index === i ? !val : val)
    );
}

//returns an array with only the name of the individual cathegories
 const menuUniqueCathegories = [...new Set(helpFAQs.map((faq)=>faq.type))]

// creates the cathegories links to open the nested question componets
const menuCathegoriesJsx = menuUniqueCathegories.map((cathegorie)=>
    <NavLink to={`/help/${cathegorie}`} className={`cathegorie ${({isActive})=>isActive ? "a":""}`}>{cathegorie}</NavLink> ) 

//creates the mobile faq section
    const faqJsxMobile = helpFAQs.map((faq, i)=> 

        <article className="faq">
            <div className="faq__qa">
                <h2 className="faq__question">{faq.question}</h2> 
                <FontAwesomeIcon icon={faAngleUp} className={`faq__arrow ${qaOpenState[i] ? "active":""}`}  onClick={()=>{toggleSingleQaOpenState(i)}}/>
            </div>
            <p className={`faq__answer ${qaOpenState[i] ? "active":""}`}>{faq.answer}</p>

            <span className="faq__division--line"></span>

        </article>)



    return( 

            <main>
                <section className="hero">
                    <h1 className="hero__tittle">Lobe <span className="hero__tittle-secondary-color">Help</span></h1>
                    <p className="hero__description">Everything you need to know to <br /> train great machine learning <br /> models with lobe</p>
                </section>

                {faqJsxMobile}

                <div className="long_cathegories">

                    <div className="long_cathegories__cathegories">
                        {menuCathegoriesJsx}    
                    </div>

                    <div className="long_cathegories__qa">
                        <Outlet/>
                    </div>

                </div>

            </main>
    )
}


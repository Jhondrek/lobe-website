import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faAngleUp} from "@fortawesome/free-solid-svg-icons"
import "./genericStyles.css"
import "./help.css"
import { NavLink, Route, Outlet, useParams } from "react-router-dom"



export default function Help(){

    const helpFAQArray = [{question:"what is lobe?", answer:"Lobe is a free, private desktop application that has everything you need to take your machine learning ideas from prototype to production.", type: "lobe"}, {question:"What is training?", answer:"Training is how your model learns to predict the correct labels from your examples. You can think of your examples as a collection of flashcards. During training, your model will continually look through the flashcards and try to find similar patterns that help it guess the right answers.", type:"train"}, {question:"How long will training take?", answer:"Training time is quite variable and depends on how hard it is to distinguish between the labels in your examples and how many examples you have. It can take anywhere from minutes to hours, and sometimes days for very large problems.", type:"train"}, {question:"What are my training results?", answer:"Your results show you which images your model is predicting correctly and incorrectly. Correct predictions have green labels and incorrect predictions have red labels. The width of the label bar represents how confident the model was in that prediction.", type: "train"}, {question:"How do I see labels that are confused with one another?", answer:"Your results show you which images your model is predicting correctly and incorrectly. Correct predictions have green labels and incorrect predictions have red labels. The width of the label bar represents how confident the model was in that prediction.", type:"label"}
    ]
    const [qaOpenState, setQaOpenState] = useState(createInitialQaStateArray())

    function createInitialQaStateArray(){
        let qaStateInitialArray = []
        helpFAQArray.forEach(()=>{qaStateInitialArray.push(false)})
        return qaStateInitialArray
    }

    

    function toggleState(i){
    setQaOpenState((prevQaOpenState) =>
        prevQaOpenState.map((val, index) => index === i ? !val : val)
    );
}


 const menuUniqueCathegories = [...new Set(helpFAQArray.map((faq)=>faq.type))]


const menuCathegoriesJsx = menuUniqueCathegories.map((cathegorie, i)=>
    <NavLink to={`/help/${cathegorie}`} Index className={`cathegorie ${({isActive})=>isActive ? "a":""}`}>{cathegorie}</NavLink> ) 

    const faqJsxMobile = helpFAQArray.map((faq, i)=> 
        <article className="faq">
            <div className="faq__qa">
                <h2 className="faq__question">{faq.question}</h2> 
                <FontAwesomeIcon icon={faAngleUp} className={`faq__arrow ${qaOpenState[i] ? "active":""}`}  onClick={()=>{toggleState(i)}}/>
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


import "./help.css"
import { useParams } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faAngleUp} from "@fortawesome/free-solid-svg-icons"
import { useState, useEffect } from "react"
import {helpFAQs} from "../data/helpFAQs"

export default function Qa(){

    
    //imports the id of the current cathegory of questions and filters the qa array so it only stores the qas that match the id
    const {id} = useParams()
    const filteredQAs = helpFAQs.filter((currentQa)=> currentQa.type === id)


   // Initializes visibility state based on the number of questions in the category
    const [questionsVisibility, setQuestionsVisibility] = useState(Array(filteredQAs.length).fill(false))

    //Reset all question visibilities to false
    useEffect(()=>resetVisibilityState(),[id])

    function resetVisibilityState(){
        setQuestionsVisibility((prevToggles)=> Array(filteredQAs.length).fill(false))
   }

   //Toggle visibility of the clicked question
    function toggleVisibilityState(i){
        setQuestionsVisibility((prevToggleState)=> prevToggleState.map((currentToggle, n)=> n === i ? !currentToggle : currentToggle))
        console.log(questionsVisibility)
    }

   

    
    

//creates a jsx variable with all the qas so they will be shown in the main page
    const qAsJsx = filteredQAs.map((qa, i)=> 
    
        <div className="long_cathegories__qa" onClick={()=> toggleVisibilityState(i)}>
            <div className="long_cathegories__q--container">
                <button  className="long_cathegories__q">{qa.question}</button>
                <FontAwesomeIcon icon={faAngleUp} className={`icon ${ questionsVisibility[i] ? 'clicked--angle' : ""}`} />
            </div>
            <p className={`long_cathegories__a ${ questionsVisibility[i] ? 'clicked' : ""}`}>{qa.answer}</p>
        </div>
    )

    return(
        <section className="long__cathegories__section">
            {qAsJsx}
        </section>
    )
    
}
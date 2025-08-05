import "./help.css"
import { useParams } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faAngleUp} from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

export default function Qa(){

    const [toggleState, setToggleState] = useState(Array(3).fill(false))

    function toggleClickedState(i){
        setToggleState((prevToggleState)=> prevToggleState.map((currentToggle, n)=> n === i ? !currentToggle : currentToggle))
        console.log(toggleState)
    }

    const helpFAQArray = [{question:"what is lobe?", answer:"Lobe is a free, private desktop application that has everything you need to take your machine learning ideas from prototype to production.", type: "lobe"}, {question:"What is training?", answer:"Training is how your model learns to predict the correct labels from your examples. You can think of your examples as a collection of flashcards. During training, your model will continually look through the flashcards and try to find similar patterns that help it guess the right answers.", type:"train"}, {question:"How long will training take?", answer:"Training time is quite variable and depends on how hard it is to distinguish between the labels in your examples and how many examples you have. It can take anywhere from minutes to hours, and sometimes days for very large problems.", type:"train"}, {question:"What are my training results?", answer:"Your results show you which images your model is predicting correctly and incorrectly. Correct predictions have green labels and incorrect predictions have red labels. The width of the label bar represents how confident the model was in that prediction.", type: "train"}, {question:"How do I see labels that are confused with one another?", answer:"Your results show you which images your model is predicting correctly and incorrectly. Correct predictions have green labels and incorrect predictions have red labels. The width of the label bar represents how confident the model was in that prediction.", type:"label"}]

    
    const {id} = useParams()

    const filteredQAs = helpFAQArray.filter((currentQa)=> currentQa.type === id)
    console.log(filteredQAs.length)

    const qAsJsx = filteredQAs.map((qa, i)=> 
    
        <div className="long_cathegories__qa" onClick={()=> toggleClickedState(i)}>
            <div className="long_cathegories__q--container">
                <button  className="long_cathegories__q">{qa.question}</button>
                <FontAwesomeIcon icon={faAngleUp} className={`icon `} />
            </div>
            <p className={`long_cathegories__a ${ toggleState[i] ? 'clicked' : ""}`}>{qa.answer}</p>
        </div>
    )


    return(
        <section className="long__cathegories__section">
            {qAsJsx}
        </section>
    )
}
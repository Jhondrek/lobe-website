import { useEffect, useState } from "react"
import "./genericStyles.css"
import "./examples.css"

export default function Examples(){

    const [renderedImgs, setRenderedImgs] = useState(null)

    useEffect(()=>{
        fetch('https://picsum.photos/v2/list')
        .then(res=>res.json())
        .then(photos=> setRenderedImgs( photos.slice(0,6).map((photo)=>
            <article key={photo.id} className="example">
                <img className="example__img" src={`https://picsum.photos/id/${photo.id}/400/250`}/>
                <h2 className="example__title">photo number {photo.id + 1}</h2>
                <p className="example__p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ipsam facere officia? Obcaecati odio iusto minima, unde fugit autem iste facere.</p>
            </article>
        )))
    },[])

    return(
        <main className="example__container">
            <section className="hero">
                <h1 className='hero__tittle'>Lobe <span className='hero__tittle-secondary-color'>Examples</span></h1>
                <p className='hero__description'>One tool, endless possibilities. Discover all the 
                machine learning models you can train with Lobe.</p>
            </section>
            <section className="examples__container">
                {renderedImgs}
            </section>
        </main>
    )
}
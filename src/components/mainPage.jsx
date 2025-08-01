import websiteImg from '../assets/websiteImg.jpg';
import "./mainPageStyles.css"
import "./genericStyles.css"

export default function MainPage(){
    return(
        <main className='hero'>
            <h1 className='hero__tittle'>Lobe <span className='hero__tittle-secondary-color'>Tour</span></h1>

            <p className='hero__description'>Build your first machine <br /> learning model in ten minutes. <br />No code or eperience <br /> required</p>

            <img src={websiteImg} className='hero__preview' />
            <h2 className='hero__subtitle'>Train your app <br/> with Lobe</h2>
            <button className='hero__btn'>Download</button>
        </main>
    )
}
import './App.css'
import Header from './Components/Header'
import MainPage from './Components/mainPage'
import Footer from './Components/footer'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App

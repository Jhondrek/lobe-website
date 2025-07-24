import './App.css'
import Header from './Components/Header.jsx'
import MainPage from './Components/mainPage.jsx'
import Footer from './Components/footer.jsx'
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

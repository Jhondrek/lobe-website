import './App.css'
import Header from './Components/header.jsx'
import MainPage from './Components/mainPage.jsx'
import Footer from './Components/footer.jsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<MainPage/>}>
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App

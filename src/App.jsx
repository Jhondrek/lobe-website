import './App.css'
import Header from './components/header.jsx'
import MainPage from './components/mainPage.jsx'
import Footer from './components/footer.jsx'

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

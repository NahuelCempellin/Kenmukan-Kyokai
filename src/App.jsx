import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Nav/Navbar'
import Landing from './pages/Landing/Landing'
import {Route, Routes} from 'react-router-dom'

function App() {
  

  return (
    <div className="App">
          <Navbar/>
          <Routes>
          <Route path='/' element={<Landing/>}/> 
          </Routes>
          <div className='footer-box' id='footer'>
            <Footer/>
          </div>
    </div>
  )
}

export default App

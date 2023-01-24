import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Nav/Navbar'

function App() {
  

  return (
    <div className="App">
          <Navbar/>

          <div className='title-container'>

            <div className='title'>
            <h2>Bienvenidos a</h2>
            <h1>Kenmukan Kyokai</h1>
            <p>
            Acérquese a conocer el mundo de la esgrima japonesa, e informarse acerca de nuestra organización y sus distintas sedes.
            </p>

            <div className='button-container'>
              <a>Mas info...</a>
              <a>¿Que es Kendo y Iaido?</a>
            </div>
            </div>
          </div>


          <div className='footer-box'>
            <Footer/>
          </div>
    </div>
  )
}

export default App

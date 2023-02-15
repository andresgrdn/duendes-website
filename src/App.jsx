import reactLogo from './assets/react.svg'
import './App.css'

import NavBar from './NavBar'
import Gallery from './Gallery'

function App() {
  return (
    <div className="App">
      <div>
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      {/* <h1>Duendes</h1> */}
      <NavBar />
      <Gallery />
      <div className="card">
        <p>
          Pagina prueba
        </p>
      </div>
      <p className="read-the-docs">
        Made by arcano
      </p>
    </div>
  )
}

export default App

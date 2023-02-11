import reactLogo from './assets/react.svg'
import './App.css'

import NavBar from './NavBar'

function App() {
  return (
    <div className="App">
      <NavBar />
      <div>
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Duendes</h1>
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

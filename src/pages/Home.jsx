import './Home.css'

import NavBar from '../components/NavBar'
import Gallery from '../components/Gallery'

function Home() {
  return (
    <div className="Home">
      <NavBar />
      <div>
        Descripcion del negocio
      </div>
      <Gallery />
      <p className="read-the-docs">
        Made by arcano
      </p>
    </div>
  )
}

export default Home
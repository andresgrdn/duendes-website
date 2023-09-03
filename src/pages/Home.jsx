import './Home.css'

import NavBar from '../components/NavBar'

function Home() {
  return (
    <div className="Home">
      <NavBar />
      <div>
        Descripcion del negocio
      </div>
      <p className="read-the-docs">
        Made by arcano
      </p>
    </div>
  )
}

export default Home
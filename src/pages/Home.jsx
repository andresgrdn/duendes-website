import reactLogo from '../assets/react.svg'
import './Home.css'

import NavBar from '../components/NavBar'
import Gallery from '../components/Gallery'

function Home() {
  return (
    <div className="Home">
      <div>
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      {/* <h1>Duendes</h1> */}
      <NavBar />
      <Gallery />
      <p className="read-the-docs">
        Made by arcano
      </p>
    </div>
  )
}

export default Home
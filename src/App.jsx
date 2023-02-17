import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import Contacts from './pages/Contacts'
import NotFound from './pages/NotFound'
import GalleryPage from './pages/GalleryPage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/galeria" element={<GalleryPage />} />
          <Route exact path="/contactos" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

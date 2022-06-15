import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DownloadPage from './pages/DownloadPage'
import Home from './pages/Home'
import NavBar from './NavBar'

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/download' element={<DownloadPage />} />
          </Routes>
      </BrowserRouter>
      <NavBar/>
    </div>
  )
}

export default App
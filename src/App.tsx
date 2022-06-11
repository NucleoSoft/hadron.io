import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DownloadPage from './pages/DownloadPage'
import Home from './pages/Home'

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
              <Route path='/' exact element={<Home/>}/>
              <Route path='/download' element={<DownloadPage/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { AuthContextProvider } from './context/AuthContext'
import Home from './pages/Home'

function App() {

  return (
    <div>
      <AuthContextProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
      </AuthContextProvider>
    </div>
  )
}

export default App

import './App.css'
import React from 'react'
import Login from './components/login'
import Admin from './components/adminPage'
import Form from './components/formPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="src/components/main.js" element={<Admin />} />
            <Route path="src/components/formPage.js" element={<Form />} />
          </Routes>
        </Router>
      </header>
    </div>
  )
}

export default App

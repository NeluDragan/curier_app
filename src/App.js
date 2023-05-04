import './App.css'
import React from 'react'
import Login from './components/Pages/loginPage'
import Admin from './components/Pages/adminPage'
import Form from './components/Pages/formPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserForm from './components/Form/UserForm'
import Appbar from './components/comp/AppBar'
import Curier from './components/Pages/curierPage'
import Client from './components/Pages/clientPage'
import CurierSlider from './components/comp/curierSlider'

function App() {
  return (
    <div className="App">
      <Appbar />
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/adminPage" element={<Admin />} />
            <Route path="/formPage" element={<Form />} />
            <Route path="/userForm" element={<UserForm />} />
            <Route path="/curierPage" element={<Curier />} />
            <Route path="/clientPage" element={<Client />} />
            <Route path="/curierSlider" element={<CurierSlider />} />
            <Route path="/loginPage" element={<Login />} />
          </Routes>
        </Router>
      </header>
    </div>
  )
}

export default App

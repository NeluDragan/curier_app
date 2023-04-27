import './App.css'
import React from 'react'
import Login from './components/Pages/loginPage'
import Admin from './components/Pages/adminPage'
import Form from './components/comp/formPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserForm from './components/Form/UserForm'
import Appbar from './components/comp/AppBar'
function App() {
  return (
    <div className="App">
      <Appbar />
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="src/components/main.js" element={<Admin />} />
            <Route path="src/components/formPage.js" element={<Form />} />
            <Route
              path="src/components/Form/UserForm.js"
              element={<UserForm />}
            />
          </Routes>
        </Router>
      </header>
    </div>
  )
}

export default App

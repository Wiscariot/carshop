import React from 'react'
import './style.css'
import './App.css'
import Header from './components/Header'
import Carlist from './components/carlist'



function App() {
  return (
    <div className="App">
      <Header className="appBar" position="static" />
      <Carlist />
    </div>
  )
}

export default App

import React from 'react'
import './App.css'
import Header from './components/Header'

const App = () => {
  return (
    <div>
      <Header titulo="Compras do mês"/>
      <div>
        <ul>
          <h2>Lista compras: </h2>
          <li>Ovos</li>
          <li>Tomate</li>
          <li>Cenoura</li>
        </ul>
      </div>
    </div>
  )
}

export default App

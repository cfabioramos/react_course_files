import React from 'react'
import './App.css'
import MyInternalHeader from './components/MyInternalHeader'
import Home from './pages/Home'
import CalculoImposto from './components/CalculoImposto'

export default function App () {

  const myCbFunctionAfterCalc = () => console.log('Realizou a operação de CB')
  
  return (
    <div>
      <MyInternalHeader />
      <main>
        <Home />
        <section id="contact">
          <h2>Contact</h2>
          <main>
            <p>Contato: 99999-9999</p>
          </main>
        </section>
        <section id="about">
          <h2>About Us</h2>
          <main>
            <p>Nossa empresa...</p>
          </main>
        </section>
      </main>

      Resultado: <CalculoImposto valorA={2} valorB={3} cbFunction={myCbFunctionAfterCalc}/>
    </div>
  )
}
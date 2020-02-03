import React from 'react';
import './App.css';
import MyInternalHeader from './components/MyInternalHeader'
import About from './pages/About'


export default function App() {
  
  const propriedade = {count: 5, calculoImposto: () => 6 - (6 * 0.02)}
  const theme = {color: "white", backgroundColor: "black"}
  
  return (
    <div>
      <MyInternalHeader theme={theme} />
      <main>
        <div style={theme}>
          Valor: { propriedade.count } <br />
          Resultado do cálculo: { propriedade.calculoImposto() }
        </div>
        <div>
          <About />
          <section id="contact">
            Aqui coloco os contatos da empresa...
          </section>
        </div>
      </main>
    </div>
  );
}
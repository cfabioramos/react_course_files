import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'

function App () {

  const [quantidade, setQuantidade] = useState(0)
  const [buttonName] = useState('Meu botão')
  const [items] = useState([])
  const [itensCompra] = useState({nome: 'Ovos de quintal'})

  return (
    <div>
      <Header titulo="Compras do mês"/>
      <div>
        <ul>
          <h2>Lista compras: </h2>
          <li>{itensCompra.nome}</li>
          <li>Tomate</li>
          <li>Cenoura</li>
        </ul>

        <h3>Meus itens: </h3>
        <div>{items.join()}</div>
        
        <p>Você clicou {quantidade} vezes</p>
        <button onClick={() => {
          setQuantidade(quantidade + 1)
          items.push('item ' + quantidade)
          } }>{buttonName}</button>

      </div>
    </div>
  )
}

export default App

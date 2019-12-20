import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [quantidade, setQuantidade] = useState(0)

  useEffect(() => {
    console.log('obter dados da grid')

    return () => console.log('Unmount...')


  }, [quantidade])

  return (
    <div>
        <p>Você clicou {quantidade} vezes</p>
        <button onClick={() => setQuantidade(quantidade + 1)} > Clique Aqui</button>
    </div>
  )
}

export default App;

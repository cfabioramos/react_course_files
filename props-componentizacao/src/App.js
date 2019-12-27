import React from 'react';
import './App.css';
import ContactCard from './componentes/ContactCard'

function App() {
  return (
    <div className="contacts">
      <ContactCard 
        name="Jão da Silva" 
        imgUrl="http://placekitten.com/300/200" 
        phone="99999-9999" 
        email="jaodasilva@gmail.com" />

      <ContactCard name="Rocky Balboa" 
        imgUrl="http://placekitten.com/400/200" 
        phone="98888-8888" 
        email="rocky@gmail.com"/>
        
      <ContactCard name="Luiz José" 
        imgUrl="http://placekitten.com/400/300" 
        phone="98888-7777" 
        email="ze@gmail.com" />
    </div>
  );
}

export default App;

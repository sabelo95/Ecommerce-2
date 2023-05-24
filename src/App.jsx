import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/navbar/navbar'
import carWidget from './components/CarWidget/CarWidget'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'




function App() {
    return (
      <div>
        <Navbar />
        <ItemListContainer greeting={'¡lAS MEJORES PROTEINAS Y CREATINAS DEL MERCADO AL MEJOR PRECIO!'}/>
      </div>
      
      
    )
  
}

export default App

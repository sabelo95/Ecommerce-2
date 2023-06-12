import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetatilContainer'




function App() {
    return (
      <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'¡LAS MEJORES PROTEINAS Y CREATINAS DEL MERCADO AL MEJOR PRECIO!'}/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos filtrados'}/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
          
        </Routes>
        </BrowserRouter>
        
      </>
      
      
    )
  
}

export default App

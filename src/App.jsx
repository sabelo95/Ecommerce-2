import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetatilContainer'
import { CartProvider } from './context/cartContext';
import Cart from './components/Cart/cart';
import Checkout from './components/Checkout/Checkout';



function App() {
    return (
      <>
      <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'¡LAS MEJORES PROTEINAS Y CREATINAS DEL MERCADO AL MEJOR PRECIO!'}/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos filtrados'}/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
          </Routes>
        </CartProvider>
        </BrowserRouter>
        
      </>
      
      
    )
  
}

export default App

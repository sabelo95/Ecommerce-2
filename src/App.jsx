import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetatilContainer'
import { CartProvider } from './context/cartContext';
import Cart from './components/Cart/cart';
import Checkout from './components/Checkout/Checkout';
import { NotificationProvider } from './notification/notificationService';
import UploadFiles from './services/uploadFiles';


function App() {
  return (
    <>
      <BrowserRouter>
        <NotificationProvider>
          <CartProvider>
            <Navbar />
            <Routes>
              <Route path='/' element={<ItemListContainer greeting={'Listado de productos'}/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Listado de productos filtrados'}/>}/>
              <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
              <Route path='/cart' element={<Cart />}/>
              <Route path='/checkout' element={<Checkout />}/>
              <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
            </Routes>
          </CartProvider>
        </NotificationProvider>
      </BrowserRouter>
   
    </>
  )
}

export default App

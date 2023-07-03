import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useCart } from '../../context/cartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart,totalPrice, totalQuantity,clearCart,removeItem } = useCart();

  console.log(cart);
  

  if (totalQuantity===0) {
    return (
      <div>
        <h1>NO HAY ITEMS EN EL CARRITO</h1>
        <Link to={'/'} className='btn btn-dark'>PRODUCTOS</Link>
      </div>
    )
    
  }

  return (
    <div>
    <table className='table table-light table-hover'>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Foto</th>
          <th>Cantidad</th>
          <th>Precio Total</th>
        </tr>
      </thead>
      <tbody className=''>
        {cart.map((prod) => (
          <tr key={prod.id}>
            <td>{prod.name}</td>
            <td>
              <img style={{width:'100px'}} src={prod.image} alt={prod.name} />
            </td>
            <td>{prod.quantity}</td>
            <td>{prod.price * prod.quantity}</td>
            <td><button onClick={()=> removeItem(prod.id)}>X</button></td>
          </tr>
        ))}
        <tr>
          <td>Total</td>
          <td></td>
          <td></td>
          <td>{totalPrice}</td>
        </tr>
      </tbody>
      </table>
      <div style={{display:'flex', justifyContent:'center'}}>
        <button className='btn btn-dark' style={{margin:'10px'}} onClick={() => clearCart()}>Limpiar carrito</button>
       <Link className='btn btn-dark' style={{margin:'10px'}} to={'/checkout'}>Checkout</Link>
      </div>
    </div>
    
  );
};

export default Cart;



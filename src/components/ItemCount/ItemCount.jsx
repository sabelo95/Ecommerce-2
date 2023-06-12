import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const ItemCount = ({stock, initial, onAdd}) => {
  const [quantity, setQuantity] = useState(initial);

  const aumentar = () => {
    if (quantity < stock)
    setQuantity(quantity + 1);
  };

  const decrementar = () => {
    if (quantity > 1)
    setQuantity(quantity - 1);
  };

  return (
    <div>
      <div style={{display:'flex', flexDirection:'row', alignContent:'center' , textAlign:'center', justifyContent:'center', padding:'5px'}}>
        <button className="btn btn-dark" onClick={decrementar}>-</button>
        <h2 style={{margin:'10px'}}>{quantity}</h2>
        <button className="btn btn-dark" onClick={aumentar}>+</button>
      </div>
      
      <button className="btn btn-dark" onClick={() => onAdd(quantity)} disabled={!stock}>Agregar al carrito</button>
      
    </div>
  );
};

export default ItemCount;

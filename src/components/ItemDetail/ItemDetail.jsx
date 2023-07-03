import ItemCount from '../ItemCount/ItemCount'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/cartContext';


const ItemDetail = ({id,name,image,price,stock=10}) =>{
    const [quantity, setQuantity] = useState(0)
    const { addItem } = useCart()
    const handleOnAdd = (quantity) => {
        const objProductToAdd = {
            id, name,image, price, quantity
        }

        addItem(objProductToAdd)
        
        setQuantity(quantity)
    }


    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid rgb(64, 63, 63)', padding:'10px' }} >
            <h3>{name}</h3>
            <img  style={{ width: '200px' }} src={image} alt='proteina' />
            <h3>price: ${price}</h3>
            
            {
                    quantity === 0 ? (
                        <ItemCount onAdd={handleOnAdd} stock={stock} initial={1}/>
                    ) : (
                        <Link  className='btn btn-dark' to={'/cart'}>Finalizar compra</Link>
                    )
                }
                       
                  
        </div>
       
    )
}

export default ItemDetail
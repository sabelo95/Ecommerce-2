import ItemCount from '../ItemCount/ItemCount'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';



const ItemDetail = ({id,name,image,price,stock}) =>{
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid rgb(64, 63, 63)', padding:'10px' }} >
            <h3>{name}</h3>
            <img  style={{ width: '200px' }} src={image} />
            <h3>price: ${price}</h3>
            <ItemCount stock={10} initial={0} onAdd={(quantity) => console.log('cantidad agregada:', quantity)}
/>
        </div>
       
    )
}

export default ItemDetail
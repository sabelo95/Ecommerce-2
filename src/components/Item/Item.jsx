import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from 'react-router-dom';
const Item = ({ id,image, name,category, price }) => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid rgb(64, 63, 63)', padding:'10px' }} >
            <h3>{name}</h3>
            <img  style={{ width: '200px' }} src={image} alt='proteina'/>
            <h3>{category}</h3>
            <h3>price: ${price}</h3>
            <Link className='btn btn-dark' to={`/item/${id}`}>Ver detalle</Link>
        </div>
    )
}

export default Item
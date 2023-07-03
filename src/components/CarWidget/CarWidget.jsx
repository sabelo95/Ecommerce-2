import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../../context/cartContext';


const CarWidget = () => {
    const { totalQuantity } = useCart()
   return (
        <div>
            <FontAwesomeIcon icon={faCartShopping} />
            {totalQuantity}
        </div>
    );
};

export default CarWidget;

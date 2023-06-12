import { useEffect, useState } from "react"
import { getProductsById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading]= useState(true)

    const {itemId}=useParams()
    
    useEffect(() =>{
        document.title = !loading ? product.name : 'Mi Ecommerce'
        return () => document.title = 'Mi Ecommerce'
      },[itemId,loading])
    
    useEffect(()=>{
        setLoading(true)
        getProductsById(itemId)
        .then(response => {
            setProduct(response)
        })
        .catch(error => {
            console.error(error)
        })
        .finally(()=> {
            setLoading(false)})
    },[itemId])

    if(loading) {
        return <h1>Cargando....</h1>
    }

    return(
        <div>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer
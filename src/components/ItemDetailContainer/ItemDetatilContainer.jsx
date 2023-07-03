import { useEffect, useState } from "react"
import { getProductsById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { ClipLoader } from "react-spinners";

import { getDoc, doc} from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";





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
        const productRef = doc(db,'products', itemId)

        getDoc(productRef)
        .then(querySnapshot => {
            console.log(querySnapshot)
            const fields=querySnapshot.data()
            const productAdapted = {id: querySnapshot.id, ...fields}
            setProduct(productAdapted)
        })
        .finally(()=>{
            setLoading(false)
        })
        // setLoading(true)
        // getProductsById(itemId)
        // .then(response => {
        //     setProduct(response)
        // })
        // .catch(error => {
        //     console.error(error)
        // })
        // .finally(()=> {
        //     setLoading(false)})
    },[itemId])

    if(loading) {
        return (
            <div>
                <h1>cargando...</h1>
                <ClipLoader color="black" loading={true} size={50} />
            </div>
        )
    }

    return(
        <div> 
           <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer
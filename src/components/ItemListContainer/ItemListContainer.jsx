import { useState, useEffect } from "react"
import { getProductsByCategory } from "../../asyncMock";
import { getProducts } from "../../asyncMock"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ItemList from "../Itemlist/Itemlist";
import { useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";

import { getDocs,collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";


const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading]= useState(true)

  const {categoryId}=useParams()
  console.log({categoryId})

  useEffect(() =>{
    document.title = categoryId ? `Categoria: ${categoryId}` : `Todos los productos`
    return () => document.title = 'Mi ecommerce'
  })
  
  

  useEffect(() => {
    const productsRef= !categoryId ? collection(db,'products')
    : query(collection(db,'products'),where('category', '==', categoryId))
    
    setLoading(true)
    getDocs(productsRef)
    .then(querySnapshot => {
      
      const productsAdapted=querySnapshot.docs.map(doc => {
          const fields = doc.data()
          console.log(fields)
          return {id:doc.id, ...fields}
      })
      setProducts(productsAdapted)
    })
    .finally(()=>{
      setLoading(false)
    })
      

  //   const asyncFunction = categoryId ? getProductsByCategory : getProducts

  //   asyncFunction(categoryId).then(response => {
  //     setProducts(response)
  //   })
  //   .finally(()=> {
  //     setLoading(false)})
   
   }, [categoryId])

  const arrayComponents = <ItemList   key={products.id} products={products}/>
    
  if(loading) {
    return (
        <div>
            <h1>cargando...</h1>
            <ClipLoader color="black" loading={true} size={50} />
        </div>
    )
} 
   

  return (
    <>
    <h2 style={{textAlign:'center'}}>{greeting}</h2>
    <br />
    <div >
      {arrayComponents}
      
    </div>
    </>
  )
}

export default ItemListContainer;

import { useState, useEffect } from "react"
import { getProductsByCategory } from "../../asyncMock";
import { getProducts } from "../../asyncMock"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ItemList from "../Itemlist/Itemlist";
import { useParams } from "react-router-dom";


const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])

  const {categoryId}=useParams()

  useEffect(() =>{
    document.title = categoryId ? `Categoria: ${categoryId}` : `Todos los productos`
    return () => document.title = 'Mi ecommerce'
  })
  
  

  useEffect(() => {

    const asyncFunction = categoryId ? getProductsByCategory : getProducts

    asyncFunction(categoryId).then(response => {
      setProducts(response)
    })
   /* if (categoryId){ 
      getProductsByCategory(categoryId).then(response => {
        setProducts(response)
       
      }) 
   
     } else {
    getProducts().then(response => {
      setProducts(response)
      
    })}  */
  }, [categoryId])

  const arrayComponents = <ItemList   key={products.id} products={products}/>
    
      
   

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

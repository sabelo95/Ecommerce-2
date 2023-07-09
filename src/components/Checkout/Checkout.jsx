import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import "./Checkout.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useCart } from "../../context/cartContext";
import { db } from "../../services/firebase/firebaseConfig";
import { collection, query, where, documentId, getDocs, writeBatch, addDoc} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useNotification } from "../../notification/notificationService";


const Checkout = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [loading, setLoading] = useState(false)
  const { cart, totalPrice, clearCart } = useCart()

  const { setNotification } = useNotification()
  const { data,setData }= useState()

  const navigate = useNavigate()

  const createOrder = async (data) => {
      setLoading(true)
      const objOrder = {
        buyer: {
          name: data.firstName,
          secondName: data.secondName,
          cel: data.Cel,
          email: data.Email
        },
        items: cart,
        total: totalPrice
      };

      try {
          const ids = cart.map(prod => prod.id)

          const productsRef = query(collection(db, 'products'), where(documentId(), 'in', ids))
  
          // getDocs(productsRef).then(querySnapshot => {
          // })
  
          const { docs } = await getDocs(productsRef)
  
          const batch = writeBatch(db)
  
          const outOfStock = []
  
          docs.forEach(doc => {
              const fieldsDoc = doc.data()
              const stockDb = fieldsDoc.stock
  
              const productAddedToCart = cart.find(prod => prod.id === doc.id)
              const prodQuantity = productAddedToCart?.quantity
  
              if(stockDb >= prodQuantity) {
                  //updateDoc
                  batch.update(doc.ref, { stock: stockDb - prodQuantity })
              } else {
                  outOfStock.push({ id: doc.id, ...fieldsDoc})
              }
          })
  
          if(outOfStock.length === 0) {
              batch.commit()
              
              const ordersRef = collection(db, 'orders')
  
              const { id } = await addDoc(ordersRef, objOrder)

              setNotification('success', 'La orden fue generada correctamente, el id es: ' + id)
               clearCart()
               navigate('/')
          } else {
              setNotification('error', 'hay productos que no tienen stock')
          }
      } catch (error) {
          setNotification('error', 'hubo un error en la generacion de la orden')
      } finally {
          setLoading(false)
      }
  }

  if(loading) {
      return (
          <h1>Se esta generando su orden...</h1>
      )
  }

  const onSubmit = (data) => {
    
    createOrder(data);
  };

  return (
    <>
      <h2>Formulario</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <input
            {...register("firstName", { required: true, maxLength: 20 })}
            className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
            placeholder="Ingresa tu nombre"
          />
          {errors.firstName && (
            <span className="invalid-feedback">
              El campo nombre es requerido
            </span>
          )}
        </div>

        <div className="form-group">
          <input
            {...register("secondName", { required: true, maxLength: 20 })}
            className={`form-control ${errors.secondName ? "is-invalid" : ""}`}
            placeholder="Ingresa tu Apellido"
          />
          {errors.secondName && (
            <span className="invalid-feedback">
              El campo apellido es requerido
            </span>
          )}
        </div>

        <div className="form-group">
          <input
            {...register("Cel", { required: true, maxLength: 20 })}
            className={`form-control ${errors.Cel ? "is-invalid" : ""}`}
            placeholder="Celular"
          />
          {errors.Cel && (
            <span className="invalid-feedback">
              El campo celular es requerido
            </span>
          )}
        </div>

        <div className="form-group">
          <input
            {...register("Email", { required: true, maxLength: 50 })}
            className={`form-control ${errors.Email ? "is-invalid" : ""}`}
            placeholder="Email"
          />
          {errors.Email && (
            <span className="invalid-feedback">
              El campo email es requerido
            </span>
          )}
        </div>

        <input
          className="btn btn-dark"
          type="submit"
          value="Generar orden de compra"
        />
      </form>
      
    </>
  );
};

export default Checkout;



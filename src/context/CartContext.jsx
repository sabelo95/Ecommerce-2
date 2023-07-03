import { useState, createContext, useContext } from 'react'

const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    console.log(cart)

    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)) {
        setCart(prev => {
            console.log(prev)
            return [...prev, productToAdd]
        })
        } else {
            console.error('Ya esta agregado')
        }
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const getTotalQuantity = () => {
        let totalQuantity = 0

        cart.forEach(prod => {
            totalQuantity += prod.quantity
        })

        return totalQuantity
    }
    const getTotalPrice = () => {
        let totalPrice = 0

        cart.forEach(prod => {
            totalPrice += prod.price*prod.quantity
        })

        return totalPrice
    }

    const clearCart = ()=>{
        setCart([])
      }

    const removeItem = (itemId)=>{
        const cartUpdated= cart.filter(prod => prod.id!==itemId)
        setCart(cartUpdated)
    }

    const totalQuantity = getTotalQuantity()
    const totalPrice = getTotalPrice()

    return (
        <CartContext.Provider value={{ cart, addItem, totalQuantity, totalPrice,clearCart , removeItem}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}
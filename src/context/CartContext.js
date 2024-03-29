import React, {createContext} from "react";
import {useLocalStorage} from "../hooks/useLocalStorage";

export const CartContext = createContext();
export const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useLocalStorage(  'shopping-cart', []);
    // add
    const addToCart = (item) => {
        const existingItem = cartItems.find(cartItem => cartItem.id === item.id)
        if (existingItem) {
            const updatedCartItems = cartItems.map(cartItem =>
                cartItem.id === item.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
            )
            setCartItems(updatedCartItems)
        } else {
            setCartItems([...cartItems, {...item, quantity: 1}])
        }
    }
    // delete
    const removeFromCart = (item) => {
        const updatedCartItems = cartItems.filter(cartItem => cartItem.id !== item.id)
        setCartItems(updatedCartItems)
    }
    // counter
    const increaseQuantity = (item) => {
        const updatedCartItems = cartItems.map(cartItem =>
            cartItem.id === item.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
        )
        setCartItems(updatedCartItems)
    }
    const decreaseQuantity = (item) => {
        const updatedCartItems = cartItems.map(cartItem =>
            cartItem.id === item.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem
        ).filter(cartItem => cartItem.quantity !== 0)
        setCartItems(updatedCartItems)
    }

    return (
        <CartContext.Provider value={ { cartItems, setCartItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity } }>
            {children}
        </CartContext.Provider>
    );
}

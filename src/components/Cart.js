import React, {useContext} from 'react';
import {CartContext} from "../context/CartContext";
import {Offcanvas, Stack} from "react-bootstrap";
import CartItems from "./CartItems";
import storeItems from '../data/items.json'
import {formatCurrency} from "../formatter/currencyFormatter";

const Cart = ({closeCart, isCartOpen}) => {

    const {cartItems} = useContext(CartContext);

    return (
        <Offcanvas show={isCartOpen} onHide={closeCart} placement='end'>
            <Offcanvas.Header closeButton>

                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>

                <Stack gap={3}>
                    {cartItems.map(item =>
                        <CartItems
                            key={item.id}
                            {...item}
                        />)}

                    <div>
                        Total{' '}
                        {formatCurrency(cartItems.reduce((total, cartItem) => {
                            const item = storeItems.find(item => item.id === cartItem.id)
                            return total + (item.price || 0) * cartItem.quantity
                        }, 0))
                        }
                    </div>

                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default Cart;

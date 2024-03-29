import React, {useContext} from 'react';
import {Button, Stack} from "react-bootstrap";
import storeItems from '../data/items.json'
import {formatCurrency} from "../formatter/currencyFormatter";
import {CartContext} from "../context/CartContext";

const CartItems = ({id, quantity}) => {

    const {removeFromCart} = useContext(CartContext);

    const item = storeItems.find(item => item.id === id)
    if (item == null) return null

    return (
        <Stack direction="horizontal" gap={3}>
            <img src={item.imgUrl}
                 alt=""
                 style={{width: '80px', height: '60px', objectFit: 'cover'}}
            />

            <div>
                <div>
                    {item.name}{' '}
                    {quantity > 1 && (
                        <span className='text-muted' style={{fontSize: '.8rem'}}>
                            x{quantity}
                        </span>
                    )}
                </div>
            </div>

            <div style={{fontSize: '.8rem'}}>
                {formatCurrency(item.price * quantity)}
            </div>

            <div>
                <Button
                    onClick={()=>removeFromCart(item)}
                    variant='outline-secondary'
                    size='sm'>
                    &times;
                </Button>
            </div>

        </Stack>
    );
};

export default CartItems;

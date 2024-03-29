import React, {useContext} from 'react';
import {Button, Card} from "react-bootstrap";
import {formatCurrency} from "../formatter/currencyFormatter";
import {CartContext} from "../context/CartContext";

const StoreItem = ({item, addToCart}) => {

    const {cartItems, removeFromCart, increaseQuantity, decreaseQuantity} = useContext(CartContext);
    const {id, name, price, imgUrl} = item
    const cartItem = cartItems.find(cartItem => cartItem.id === id);
    const quantity = cartItem ? cartItem.quantity : 0
    // const quantity = 5;

    return (
        <Card className='h-100'>

            {imgUrl && (
                <Card.Img
                    variant="top"
                    src={imgUrl}
                    style={{objectFit: 'contain'}}
                />

            )}


            <Card.Body
                className='d-flex-column'
                height='350px'
                width='350px'
            >
                <Card.Title
                    className='d-flex
                    justify-content-space-between
                    align-items-baseline
                    mb-4'
                >
                    <span>{name}</span>
                    <span className='ms-auto text-muted'>{formatCurrency(price)}</span>

                </Card.Title>

                {!quantity ?
                    <Button onClick={() => addToCart(item)} variant="outline-primary" className='w-100'>Add To Cart</Button> :
                    <>
                        <Button onClick={() => increaseQuantity(item)} variant="outline-secondary">+</Button>
                        <span className='fs-5'>{quantity}</span>
                        <Button onClick={() => decreaseQuantity(item)} variant="outline-secondary">-</Button>
                        <br/>
                        <div className='fs-3' style={{gap: ".5rem"}}>
                            <Button onClick={()=>removeFromCart(item)} variant="outline-danger">Remove</Button>
                        </div>
                    </>
                }

            </Card.Body>


        </Card>
    );
};

export default StoreItem;

import React, {useContext} from 'react';
import storeItems from '../data/items.json'
import {Col, Row} from "react-bootstrap";
import StoreItem from "../components/StoreItem";
import {CartContext} from "../context/CartContext";

const Store = ({searchText}) => {

    const {addToCart} = useContext(CartContext);

    const filteredItems = storeItems.filter(item => {
        return item.name.toLowerCase().includes(searchText.toLowerCase())
    })

    return (
        <div>
            <h1>Store</h1>

            <Row>
                {filteredItems.map(item => (
                    <Col>
                        <StoreItem
                            item={item}
                            addToCart={addToCart}
                        />
                    </Col>
                ))}
            </Row>

        </div>
    );
};

export default Store;

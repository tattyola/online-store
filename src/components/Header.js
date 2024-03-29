import React, {useState} from 'react';
import {Button, Container, Form, Nav, Navbar} from "react-bootstrap";
import {NavLink, Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Store from "../pages/Store";
import {FaShoppingCart} from "react-icons/fa";
import Cart from "./Cart";

const Header = () => {

    const [searchText, setSearchText] = useState('');
    const [isCartOpen, setIsCartOpen] = useState(false);
    const handleCartToggle = () => {
        setIsCartOpen(!isCartOpen)
    }
    const closeCart = () => {
        setIsCartOpen(false)
    }
    const handleSearch = (event) => {
        setSearchText(event.target.value)
    }

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>

                    <Navbar.Brand href="/">
                        <img
                            src='/images/apple.webp'
                            alt="logo"
                            height='50'
                            width='80'
                        />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                            <Nav.Link to="/blog" as={NavLink}>Blog</Nav.Link>
                            <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>
                        </Nav>

                        <Form inline='true' className='d-flex justify-content-center'>
                            <Form.Control

                                placeholder="Search..."
                                type='text'
                                className='me-md-2'
                                onChange={handleSearch}
                            />

                            <Button
                                variant='outline-secondary'
                                className='rounded-circle'
                                style={{width: "3rem", height: "3rem", position: "relative"}}
                                onClick={handleCartToggle}
                            >
                                <FaShoppingCart
                                    className='ml-3'
                                    size={20}
                                />
                                {/*// quantity*/}
                            </Button>
                        </Form>
                    </Navbar.Collapse>

                    <Cart
                        closeCart={closeCart}
                        isCartOpen={isCartOpen}
                        // cartItems={cartItems}
                    />
                </Container>
            </Navbar>

            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/blog' element={<Blog/>}/>
                <Route path='/store' element={<Store searchText={searchText}/>}/>
            </Routes>
        </>
    );
};

export default Header;

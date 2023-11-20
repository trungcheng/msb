import React, { createContext, useState, useEffect } from 'react';
import { getToken } from "./utils";

export const Context = createContext();

export const Provider = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const isLoggedIn = () => {
        return getToken() ? true : false;
    };

    const value = {
        products: products,
        isLoggedIn: isLoggedIn()
    }

    return (
        <Context.Provider value={value}>
            {props.children}
        </Context.Provider>
    )
}
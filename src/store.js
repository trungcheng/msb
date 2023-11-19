import React, { createContext, useState, useEffect } from 'react';
import { getToken } from "./utils";

export const Context = createContext();

export const Provider = (props) => {
    const [products, setProducts] = useState([]);

    const isLoggedIn = () => {
        return getToken() ? true : false;
    };

    const getData = () => {
        fetch('data.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            setProducts(myJson);
        });
    }

    useEffect(() => {
        getData();
    }, []);

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
import { createContext, useState, useEffect } from "react";
import PRODUCTS from "../shop-data.json";

export const ProductsContext = createContext({
    setCurrentProducts: () => null,
    currentProducts: null,
});

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState(null);
    useEffect(() => {
        setProducts(PRODUCTS);
    }, []);
    const value = { products, setProducts };
    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    );
};

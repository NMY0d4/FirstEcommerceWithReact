import { createContext, useEffect, useState } from "react";

import {
    /*addCollectionAndDocuments*/ getCategoriesAndDocuments,
} from "../utils/firebase/firebase.utils";

// import SHOP_DATA from "../shop-data";

export const ProductsContext = createContext({
    setProducts: () => null,
    products: null,
});

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            console.log(categoryMap);
        };
        getCategoriesMap();
    });

    // useEffect(() => {
    //     addCollectionAndDocuments("categories", SHOP_DATA);
    // }, []);

    const value = { products, setProducts };
    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    );
};

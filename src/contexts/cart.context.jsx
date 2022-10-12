import { createContext, useState } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemtoCart: () => {},
});

const addCartItem = (cartItems, ProductToAdd) => {
    // find if cartItems contains productToAdd
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === ProductToAdd.id
    );
    // If found, increment quantity
    if (existingCartItem)
        return cartItems.map((cartItem) =>
            cartItem.id === ProductToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );

    //  return new array with modified cartItems/new cart item
    return [...cartItems, { ...ProductToAdd, quantity: 1 }];
};

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCarTItems] = useState([]);

    const addItemToCart = (ProductToAdd) => {
        setCarTItems(addCartItem(cartItems, ProductToAdd));
    };

    const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems };
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};

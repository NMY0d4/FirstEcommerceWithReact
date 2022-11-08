//  ADD AN ITEM -----------------------------------------------------------
export const addCartItem = (cartItems, ProductToAdd) => {
    // find if cartItems contains productToAdd
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === ProductToAdd.id
    );
    // If found, increment quantity
    if (existingCartItem)
        return cartItems.map((cartItem) =>
            cartItem.id === ProductToAdd.id
                ? {
                      ...cartItem,
                      quantity: cartItem.quantity + 1,
                  }
                : cartItem
        );
    //  return new array with modified cartItems/new cart item
    return [...cartItems, { ...ProductToAdd, quantity: 1 }];
};

//  REMOVE AN ITEM ---------------------------------------------------------
export const removeCartItem = (cartItems, cartItemToRemove) => {
    // find the cart item to remove
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    );
    // check if quantity is equal to 1, if it is remove that item from the cart
    if (existingCartItem.quantity === 1) {
        return cartItems.filter(
            (cartItem) => cartItem.id !== cartItemToRemove.id
        );
    }
    // return back cartItems with matching cart item with reduced quantity
    return cartItems.map((cartItem) =>
        cartItem.id === cartItemToRemove.id
            ? {
                  ...cartItem,
                  quantity: cartItem.quantity - 1,
              }
            : cartItem
    );
};

//  REMOVE A PRODUCT---------------------------------------------------
export const removeProductItem = (cartItems, cartProductToRemove) =>
    cartItems.filter((cartItem) => cartItem.id !== cartProductToRemove.id);

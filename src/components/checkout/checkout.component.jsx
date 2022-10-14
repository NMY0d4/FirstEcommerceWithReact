import "./checkout.styles.scss";

import React, { Fragment, useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const Checkout = () => {
    const { cartItems, addItemToCart, removeItemFromCart } =
        useContext(CartContext);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item) => {
                        let { id, name, imageUrl, quantity, price } = item;
                        return (
                            <Fragment key={id}>
                                <hr />
                                <tr>
                                    <td>
                                        <img src={imageUrl} alt={`${name}`} />
                                    </td>
                                    <td>{name}</td>
                                    <td>
                                        <span
                                            onClick={() =>
                                                removeItemFromCart(item)
                                            }
                                        >
                                            &#12296;
                                        </span>
                                        {quantity}
                                        <span
                                            onClick={() => addItemToCart(item)}
                                        >
                                            &#12297;
                                        </span>
                                    </td>
                                    <td>${price}</td>
                                    <td>X</td>
                                </tr>
                            </Fragment>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Checkout;

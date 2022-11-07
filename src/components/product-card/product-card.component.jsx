import { ProductCardContainer, Footer } from "./product-card.styles";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemtoCart } from "../../store/cart/cart.action";

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const addPRoductToCart = () => dispatch(addItemtoCart(cartItems, product));

    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={`${name}`} />
            <Footer>
                <span className="name">{name}</span>
                <span className="price">{price}$</span>
            </Footer>
            <Button
                buttonType={BUTTON_TYPE_CLASSES.inverted}
                onClick={addPRoductToCart}
            >
                Add to cart
            </Button>
        </ProductCardContainer>
    );
};

export default ProductCard;

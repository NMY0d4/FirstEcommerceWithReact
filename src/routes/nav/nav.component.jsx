import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { ReactComponent as GmwebLogo } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import {
    NavigationContainer,
    LogoContainer,
    NavLinks,
    NavLink,
} from "./nav.styles.jsx";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";

const Nav = () => {
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to="/">
                    <GmwebLogo className="logo" />
                </LogoContainer>
                <NavLinks>
                    <NavLink to="/shop">SHOP</NavLink>
                    {currentUser ? (
                        <NavLink as="span" onClick={signOutUser}>
                            SIGN OUT
                        </NavLink>
                    ) : (
                        <NavLink to="/authentication">AUTHENTIFICATION</NavLink>
                    )}
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            {/* *Output to the path */}
            <Outlet />
        </Fragment>
    );
};

export default Nav;

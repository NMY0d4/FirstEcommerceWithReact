import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as GmwebLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./nav.styles.scss";

const Nav = () => {
    const { currentUser } = useContext(UserContext);

    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <GmwebLogo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                        SHOP
                    </Link>
                    {currentUser ? (
                        <span className="nav-link" onClick={signOutUser}>
                            SIGN OUT
                        </span>
                    ) : (
                        <Link className="nav-link" to="/authentication">
                            AUTHENTIFICATION
                        </Link>
                    )}
                </div>
            </div>
            {/* *Output to the path */}
            <Outlet />
        </Fragment>
    );
};

export default Nav;

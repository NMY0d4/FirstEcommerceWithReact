import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as GmwebLogo } from "../../assets/crown.svg";
import "./nav.styles.scss";

const Nav = () => {
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
                    <Link className="nav-link" to="/authentication">
                        Authentication
                    </Link>
                </div>
            </div>
            {/* *Output to the path */}
            <Outlet />
        </Fragment>
    );
};

export default Nav;

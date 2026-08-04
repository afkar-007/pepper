import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import '../styles/Bottomnav.css'



function MobileBottomNav() {
    const { cart, wishlist } = useContext(CartContext);
    const location = useLocation();

    return (
        <div className="mobile-nav">

            <Link
                to="/home"
                className={location.pathname === "/home" ? "active" : ""}
            >
                <i className="bi bi-house-door"></i>
                <span>Home</span>
            </Link>

            <Link
                to="/wishlist"
                className={location.pathname === "/wishlist" ? "active" : ""}
            >
                <div className="icon-box">
                    <i className="bi bi-heart"></i>

                    {wishlist.length > 0 &&
                        <div className="badge">{wishlist.length}</div>}
                </div>

                <span>Wishlist</span>
            </Link>

            <Link
                to="/cart"
                className={location.pathname === "/cart" ? "active" : ""}
            >
                <div className="icon-box">
                    <i className="bi bi-cart3"></i>

                    {cart.length > 0 &&
                        <div className="badge">{cart.length}</div>}
                </div>

                <span>Cart</span>
            </Link>

            <Link
                to="/profile"
                className={location.pathname === "/profile" ? "active" : ""}
            >
                <i className="bi bi-person"></i>
                <span>Profile</span>
            </Link>

        </div>
    );
}

export default MobileBottomNav;
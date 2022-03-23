import "./navbar.css";

export const Navbar = () => {
    return <nav className="nav-bar">
                <div className="h3 nav-txt"><a href=""><i className="fas fa-store"></i> Sheh Mart</a></div>
                <a href="" className="icon-in-nav"><i className="fas fa-search"></i></a>
                <a href="/categories/cart.html" className="icon-in-nav"><i className="fas fa-shopping-basket"></i></a>
                <a href="/categories/wishlist.html" className="icon-in-nav"><i className="far fa-heart"></i></a>
                <a href="/auth/login.html" className="icon-in-nav"><i className="far fa-user-circle"></i></a>
                <a href="" className="icon-in-nav nav-hamburger"><i className="fas fa-bars"></i></a>
    </nav>
}
    
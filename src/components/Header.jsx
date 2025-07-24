import {Link} from "react-router-dom";
import './Header.css';
function Header() {
    return (
        <header>
            <h1>🌟 Welcome to My App!</h1>
            <nav className="navbar">
                <h1 className="logo">My Website</h1>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/blog">Blog</Link></li>
                </ul>

            </nav>
        </header>
    );
}
export default Header;
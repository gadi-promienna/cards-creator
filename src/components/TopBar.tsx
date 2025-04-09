import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

function TopBar() {
    return ( 
        <nav className="top-bar flex justify-between items-center px-4">
                        <div className="logo"><img src={logo} alt="logo"/></div>
                        <div className="social-links flex justify-between gap-2">
                            <Link to="/about">O projekcie</Link>
                            <Link to="/contact">Kontakt</Link>
                        </div>
        </nav>
     );
}

export default TopBar;
import { Link } from "react-router-dom";

function TopBar() {
    return ( 
        <nav className="top-bar flex justify-between px-3 py-4">
                        <div className="logo">logo</div>
                        <div className="social-links flex justify-between gap-2">
                            <Link to="/about">O projekcie</Link>
                            <Link to="/contact">Kontakt</Link>
                        </div>
        </nav>
     );
}

export default TopBar;
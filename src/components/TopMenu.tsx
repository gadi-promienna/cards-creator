import { Link } from "react-router-dom";

function TopMenu() {
    return ( 
        <nav className="top-menu">
                <ul className="flex justify-around px-3 py-8">
                    <Link to="/">Home</Link>
                    <Link to="/my-lists">Moje kategorie</Link>
                    <Link to="/presentation/cards">Generuj karty</Link>
                    <Link to="/presentation/slides">Uruchom pokaz slajdów</Link>
                </ul>
            </nav>
     );
}

export default TopMenu;
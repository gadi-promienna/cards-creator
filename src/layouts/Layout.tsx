import { Outlet, Link } from "react-router-dom";

function Layout(){
    return(
        <div className="layout">
            <div className="top-menu">
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/account">Ustawienia</Link>
                    <Link to="/my-lists">Moje kategorie</Link>
                    <Link to="/my-lists/new">Nowa Kategoria</Link>
                    <Link to="/my-lists/cards">Generuj karty</Link>
                    <Link to="/my-lists/slides">Uruchom pokaz slajdów</Link>
                </ul>
            </div>
            <div className="page">
                <Outlet />
            </div>
        </div>
    )
}
export default Layout;
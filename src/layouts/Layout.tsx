import { Outlet, Link } from "react-router-dom";

function Layout(){
    return(
        <div className="layout">
            <div className="top-menu">
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/my-lists">Moje kategorie</Link>
                    <Link to="/presentation/cards">Generuj karty</Link>
                    <Link to="/presentation/slides/1">Uruchom pokaz slajdów</Link>
                </ul>
            </div>
            <div className="page">
                    <Outlet />
            </div>
        </div>
    )
}
export default Layout;
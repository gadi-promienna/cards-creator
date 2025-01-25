import { Outlet, Link } from "react-router-dom";
import { ListsContextProvider } from "../context/Lists";

function Layout(){
    return(
        <div className="layout">
            <div className="top-menu">
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/my-lists">Moje kategorie</Link>
                    <Link to="/my-lists/cards">Generuj karty</Link>
                    <Link to="/my-lists/slides">Uruchom pokaz slajdów</Link>
                </ul>
            </div>
            <div className="page">
                <ListsContextProvider>
                    <Outlet />
                </ListsContextProvider>
            </div>
        </div>
    )
}
export default Layout;
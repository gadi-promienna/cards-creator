import { Outlet, Link } from "react-router-dom";
import { CardsContextProvider } from "../context/Cards";
import { ListsContextProvider } from "../context/Lists";

export default function PresentationLayout(){
    return(
        <div className="presentation_layout">
            <div className="control-menu">
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/presentation/slides/1">Slajdy</Link>
                    <Link to="/presentation/cards">Karty</Link>
                </ul>
            </div>
            <div className="page">
                        <Outlet />
            </div>
        </div>
    )
}

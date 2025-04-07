import { Outlet, Link } from "react-router-dom";
import { CardsContextProvider } from "../context/Cards";
import { ListsContextProvider } from "../context/Lists";
import Footer from "../components/Footer";

export default function PresentationLayout(){
    return(
        <div className="presentation_layout pb-8">
            <div className="control-menu">
                <ul className="flex justify-around px-3 pt-4 pb-4">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/presentation/cards">Karty</Link></li>
                    <li><Link to="/presentation/slides">Slajdy</Link></li>
                </ul>
            </div>
            <div className="page px-8 py-3">
                        <Outlet />
                        <div className="bottom m-8 text-sm">
                            <Footer />
                        </div>
            </div>
        </div>
    )
}

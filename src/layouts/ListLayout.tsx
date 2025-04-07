import { Outlet, Link } from "react-router-dom";
import { ListsContextProvider } from "../context/Lists";

function ListLayout(){
    return(
        <div className="layout">
            <div className="top-menu">
                <h1>My lists</h1>
            </div>
                <div className="page">
                    <Outlet />
                </div>
        </div>
    )
}

export default ListLayout;
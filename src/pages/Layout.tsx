import { Outlet, Link } from "react-router-dom";

function Layout(){
    return(
        <div className="layout">
            <div className="top-menu">
                <ul>
                    <Link to="/create">Create</Link>
                    <Link to="/login">Login</Link>
                </ul>
            </div>
            <div className="page">
                <Outlet />
            </div>
        </div>
    )
}
export default Layout;
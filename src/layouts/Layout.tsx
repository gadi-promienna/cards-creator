import { Outlet} from "react-router-dom";
import TopMenu from "../components/TopMenu";
import TopBar from "../components/TopBar";
import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";
import Description from "../components/Description";
import Footer from "../components/Footer";

function Layout(){
    return(
        <div className="layout">
           <TopBar />
           <TopMenu />
           <div className="page px-6">
                <Hero />
                <Description />
                <div className="top-box1 image-box"></div><div className="top-box2 image-box"></div><div className="top-box3 image-box"></div>
                <div className="main-content"><Outlet/></div><Sidebar />
                <div className="bottom-box1 image-box"></div><div className="bottom-box2 image-box"></div><div className="bottom-box3 image-box"></div>
                <Footer />
           </div>
        </div>
    )
}
export default Layout;
import { Outlet} from "react-router-dom";
import TopMenu from "../components/TopMenu";
import TopBar from "../components/TopBar";
import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";
import Description from "../components/Description";
import Footer from "../components/Footer";

//** Images */
import box1 from "../assets/images/box1.jpg";
import box2 from "../assets/images/box2.jpg";
import box3 from "../assets/images/box3.jpg";
import box4 from "../assets/images/box4.jpg";
import box5 from "../assets/images/box5.jpg";
import box6 from "../assets/images/box6.jpg";

function Layout(){
    return(
        <div className="layout">
           <TopBar />
           <TopMenu />
           <div className="page px-6">
                <Hero />
                <Description />
                <div className="top-box1 image-box"><img src={box1}/></div>
                <div className="top-box2 image-box"><img src={box2}/></div>
                <div className="top-box3 image-box"><img src={box3}/></div>
                <div className="main-content"><Outlet/></div><Sidebar />
                <div className="bottom-box1 image-box"><img src={box4}/></div>
                <div className="bottom-box2 image-box"><img src={box5}/></div>
                <div className="bottom-box3 image-box"><img src={box6}/></div>
                <Footer />
           </div>
        </div>
    )
}
export default Layout;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Lists from "./pages/lists/Lists";
import About from "./pages/About";
import Slides from "./pages/lists/Slides";
import Cards from "./pages/lists/Cards";
import ListLayout from "./layouts/ListLayout";
import PresentationLayout from "./layouts/PresentationLayout";
import Contact from "./pages/Contact";
function Routing(){
   return( <BrowserRouter>
        <Routes>
        <Route path="/presentation" element={<PresentationLayout />}>
            <Route path="/presentation/slides/:id" element={<Slides />} />
            <Route path="/presentation/cards" element={<Cards />} />
        </Route>
        <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route index element={<About />} />
                <Route index element={<Contact />} />
        </Route>
        </Routes>
    </BrowserRouter>
   )
}

export default Routing;
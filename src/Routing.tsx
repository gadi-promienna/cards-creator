import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Account from "./pages/Account";
import Lists from "./pages/lists/Lists";
import New from "./pages/lists/New";
import Slides from "./pages/lists/Slides";
import Cards from "./pages/lists/Cards";
import ListLayout from "./layouts/ListLayout";
function Routing(){
   return( <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route index element={<Account />} />
                <Route path="/my-lists" element={<ListLayout />}>
                    <Route index element={<Lists />} />
                    <Route path="/my-lists/new" element={<New />} />
                    <Route path="/my-lists/slides" element={<Slides />} />
                    <Route path="/my-lists/cards" element={<Cards />} />
                </Route>
            </Route>
        </Routes>
    </BrowserRouter>
   )
}

export default Routing;
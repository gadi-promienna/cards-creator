import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./pages/Create";
import Layout from "./pages/Layout";
import Login from "./pages/Login";

function Routing(){
   return( <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/create" element={<Create />} />
                <Route path="/login" element={<Login />} />
            </Route>
        </Routes>
    </BrowserRouter>
   )
}

export default Routing;
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../Home";
import Sobre from "../Sobre";
import Servicos from "../Servicos";
import Contato from "../Contato";

function Rotas() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/sobre" element={<Sobre/>}></Route>
            <Route path="/servicos" element={<Servicos/>}></Route>
            <Route path="/contato" element={<Contato/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}

export default Rotas; 
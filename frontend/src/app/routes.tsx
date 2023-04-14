// Unica e exclusivamente para registro das rotas!
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/home/Home"
import LoginPage from "./pages/auth";
import InfoPage from "./pages/info";
import SobrePage from './pages/sobre';

export default function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/login" element={<LoginPage />}></Route>
                <Route path="/info" element={<InfoPage/>}></Route>
                <Route path="/sobre" element={<SobrePage/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}
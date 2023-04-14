// Unica e exclusivamente para registro das rotas!
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/home/Home"
import LoginPage from "./pages/auth/login";
import AccessPage from "./pages/auth/access";

export default function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/login" element={<LoginPage />}></Route>
                <Route path="/access" element={<AccessPage />}></Route>
            </Routes>
        </BrowserRouter>
    );
}
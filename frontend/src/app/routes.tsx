// Unica e exclusivamente para registro das rotas!
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignInPage from "./pages/home/signInPage"
import SignUpPage from "./pages/home/signUpPage";
import ForgotPassPage from "./pages/home/forgotPassPage";
import AskChatPage from "./pages/home/askChatPage";

export default function Router() {

    return (
        <BrowserRouter>
            <Routes>
                {/* Rotas de acesso para as HOME PAGES */}
                <Route path="/" element={<SignInPage />}></Route>
                <Route path="/signup" element={<SignUpPage/>}></Route>
                <Route path="/forgotpass" element={<ForgotPassPage/>}></Route>
                <Route path="/askchat" element={<AskChatPage/>}></Route> 
            </Routes>
        </BrowserRouter>
    );
}
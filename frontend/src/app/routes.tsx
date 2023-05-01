// Unica e exclusivamente para registro das rotas!
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

{/* Declaração para as HOME PAGES */}
import HomePage from "./pages/home/homePage"
import InfoPage from "./pages/home/infoPage";
import SobrePage from './pages/home/sobrePage';
import AjudaPage from "./pages/home/ajudaPage";
import LoginPage from "./pages/auth/loginPage";
import RegisterPage from "./pages/auth/registerPage";
import ForgotpassPage from "./pages/auth/forgotpassPage";

{/* Declaração para as USER PAGES */}
import PerfilPage from "./pages/auth/access/perfilPage";
import DadosPage from "./pages/auth/access/dadosPage";
import AnaliticoPage from "./pages/auth/access/analiticoPage";
import PlanejamentoPage from "./pages/auth/access/planejamentoPage";
import RelatorioPage from "./pages/auth/access/relatorioPage";

export default function Router() {

    return (
        <BrowserRouter>
            <Routes>
                {/* Rotas de acesso para as HOME PAGES */}
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/info" element={<InfoPage/>}></Route>
                <Route path="/sobre" element={<SobrePage/>}></Route>
                <Route path="/ajuda" element={<AjudaPage/>}></Route>
                <Route path="/login" element={<LoginPage/>}></Route>
                <Route path="/register" element={<RegisterPage/>}></Route>
                <Route path="/forgotpass" element={<ForgotpassPage/>}></Route>

                {/* Rotas de acesso para as USER PAGES */}
                <Route path="/perfil" element={<PerfilPage/>}></Route>
                <Route path="/dados" element={<DadosPage/>}></Route>
                <Route path="/analitico" element={<AnaliticoPage/>}></Route>
                <Route path="/planejamento" element={<PlanejamentoPage/>}></Route>
                <Route path="/relatorio" element={<RelatorioPage/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignInPage from "./pages/home/signInPage"
import SignUpPage from "./pages/home/signUpPage";

import DashboardPage from "./pages/auth/dashboardPage";

export default function Router() {

    return (
        <BrowserRouter>
            <Routes>
                {/* Rotas de acesso livre */}
                <Route path="/" element={<SignInPage />}></Route>
                <Route path="/signup" element={<SignUpPage/>}></Route>

                {/* Rotas de acesso protegidas */}
                <Route path="/dashboard" element={<DashboardPage/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}
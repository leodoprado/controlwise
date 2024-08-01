import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignInPage from "./pages/home/signInPage"
import SignUpPage from "./pages/home/signUpPage";
import ForgotPassPage from './pages/home/forgotPassPage';

import DashboardPage from './pages/auth/expenses/dashboard';

export default function Router() {

    return (
        <BrowserRouter>
            <Routes>
                {/* Rotas de acesso livre */}
                <Route path="/" element={<SignInPage />}></Route>
                <Route path="/signup" element={<SignUpPage/>}></Route>
                <Route path="/forgotpass" element={<ForgotPassPage/>}></Route> 

                {/* Rotas de acesso protegidas */}
                <Route path="/dashboard" element={<DashboardPage/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import SignInPage from "./pages/home/signInPage"
import SignUpPage from "./pages/home/signUpPage";
import ForgotPassPage from './pages/home/forgotPassPage';

import ProfilePage from './pages/auth/settings/profile';
import CategoriesPage from './pages/auth/settings/categories';

import DashboardPage from './pages/auth/expenses/dashboard';
import TransactionsPage from './pages/auth/expenses/transactions';
import PlanningPage from './pages/auth/expenses/planning';
import GoalsPage from './pages/auth/expenses/goals';
import AnalysisPage from './pages/auth/expenses/analysis';
import ReportsPage from './pages/auth/expenses/reports';

export default function Router() {

    return (
        <BrowserRouter>
            <Routes>
                {/* Rotas de acesso livre */}
                <Route path="/" element={<Navigate to="/signin" replace />}/> {/*Retorna '/signin' para default*/}
                <Route path="/signin" element={<SignInPage />}></Route>
                <Route path="/signup" element={<SignUpPage/>}></Route>
                <Route path="/forgotpass" element={<ForgotPassPage/>}></Route> 

                {/* Rotas de acesso protegidas: Configurações */}
                <Route path='/settings/profile' element={<ProfilePage/>}></Route>
                <Route path='/settings/categories' element={<CategoriesPage/>}></Route>

                {/* Rotas de acesso protegidas: Gestão de Despesas */}
                <Route path="/myexpenses/dashboard" element={<DashboardPage/>}></Route>
                <Route path="/myexpenses/transactions" element={<TransactionsPage/>}></Route>
                <Route path="/myexpenses/planning" element={<PlanningPage/>}></Route>
                <Route path="/myexpenses/goals" element={<GoalsPage/>}></Route>
                <Route path="/myexpenses/analysis" element={<AnalysisPage/>}></Route>
                <Route path="/myexpenses/reports" element={<ReportsPage/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}
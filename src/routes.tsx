import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignInPage from "./pages/home/signInPage"
import SignUpPage from "./pages/home/signUpPage";
import ForgotPassPage from './pages/home/forgotPassPage';

import DashboardPage from './pages/auth/expenses/dashboard';
import TransactionsPage from './pages/auth/expenses/transactions';
import PlanningPage from './pages/auth/expenses/planning';
import GoalsPage from './pages/auth/expenses/goals';
import AnalysisPage from './pages/auth/expenses/analysis';
import ReportsPage from './pages/auth/expenses/reports';
import ProfilePage from './pages/auth/profile';

export default function Router() {

    return (
        <BrowserRouter>
            <Routes>
                {/* Rotas de acesso livre */}
                <Route path="/signin" element={<SignInPage />}></Route>
                <Route path="/signup" element={<SignUpPage/>}></Route>
                <Route path="/forgotpass" element={<ForgotPassPage/>}></Route> 

                {/* Rotas de acesso protegidas: Geral */}
                <Route path='/profile' element={<ProfilePage/>}></Route>

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
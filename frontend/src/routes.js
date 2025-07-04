import { Routes, Route } from "react-router-dom";
import pages from "./utils/loadPage"; // 여기서 다 가져옴
import NotFound from "./pages/NotFound";
import AccountDetail from "./pages/AccountDetail";
import PrivateRoute from "./components/PrivateRoute";
import LayoutSettings from "./pages/settings/LayoutSettings";
import Settings from "./pages/settings/Settings";
import PasswordChange from "./pages/settings/PasswordChange";
import Notification from "./pages/settings/Notification";
import TransferLimit from "./pages/settings/TransferLimit";
import Withdraw from "./pages/settings/Withdraw";
import LoginHistory from "./pages/settings/LoginHistory";
import MainAccountSettings from "./pages/settings/MainAccountSettings";
import FindEmail from "./pages/FindEmail";
import FindPassword from "./pages/FindPassword";
import ResetPassword from "./pages/ResetPassword";

const AppRoutes = () => {
  return (
    <Routes>
      {/* 비로그인 접근 가능 */}
      <Route path="/" element={<pages.Home />} />
      <Route path="/login" element={<pages.Login />} />
      <Route path="/signup" element={<pages.Signup />} />
      <Route path="/find-email" element={<FindEmail/>} />
      <Route path="/find-password" element={<FindPassword/>} />
      <Route path="/reset-password" element={<ResetPassword />} />

      {/* 로그인 후 접근 가능 */}
      <Route path="/dashboard" element={<PrivateRoute><pages.Dashboard /></PrivateRoute>} />
      <Route path="/send" element={<PrivateRoute><pages.SendMoney /></PrivateRoute>} />
      <Route path="/create-account" element={<PrivateRoute><pages.CreateAccount /></PrivateRoute>} />
      <Route path="/transactions" element={<PrivateRoute><pages.TransactionHistory /></PrivateRoute>} />
      <Route path="/accounts" element={<PrivateRoute><pages.ViewAccounts /></PrivateRoute>} />
      <Route path="/account/:id" element={<PrivateRoute><AccountDetail /></PrivateRoute>} />

      {/* 달력 관련 */}
      <Route path="/calendar" element={<PrivateRoute><pages.CalendarPage /></PrivateRoute>} />

      {/* 환경설정 */}
      <Route path="/settings/*" element={<PrivateRoute><LayoutSettings /></PrivateRoute>}>
        <Route index element={<Settings />} />
        <Route path="password" element={<PasswordChange />} />
        <Route path="notification" element={<Notification />} />
        <Route path="transfer-limit" element={<TransferLimit />} />
        <Route path="withdraw" element={<Withdraw />} />
        <Route path="login-history" element={<LoginHistory />} />
        <Route path="main-account" element={<MainAccountSettings />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;

import { Routes, Route, Navigate } from "react-router-dom";
import {
  Login,
  ForgotPassword,
  ResetPassword,
  Dashboard,
  PageNotFound,
} from "./pages/index";
import Layout from "./components/layout/Layout";
import ProtectedRoutes from "./components/privateRoutes/ProtectedRoutes";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password/:resetToken" element={<ResetPassword />} />

      <Route element={<ProtectedRoutes />}>
        <Route path="admin" element={<Layout />}>
          <Route index element={<Navigate to="/admin/dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<div>users</div>} />
          <Route path="products" element={<div>Products</div>} />
        </Route>
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default App;

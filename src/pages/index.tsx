import { Route, Routes, Navigate } from "react-router-dom";
import { lazy } from "react";

const LoginPage = lazy(() => import("./login-page"));
const MerchantPage = lazy(() => import("./merchant-page"));
const MerchantsPage = lazy(() => import("./merchants-page"));
const OperationPage = lazy(() => import("./operation-page"));
const OperationsPage = lazy(() => import("./operations-page"));
const ProfilePage = lazy(() => import("./profile-page"));


export const Routing = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/merchant" element={<MerchantPage />} />
      <Route path="/merchants" element={<MerchantsPage />} />
      <Route path="/operation" element={<OperationPage />} />
      <Route path="/operations" element={<OperationsPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="*" element={<Navigate to={{ pathname: '/login' }} />} />
    </Routes>
  );
};
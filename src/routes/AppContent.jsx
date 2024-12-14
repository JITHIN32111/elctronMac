import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import AuthLayout from '../layout/AuthLayout';
import { useSelector } from 'react-redux';
import useTokenExpiry from '../customHooks/useTokenExpiry';
import { ProtectedRoute, PublicRoute } from './Routes';
import Loader from '../layout/Loader2'
// Lazy load components
const Dashboard = lazy(() => import('../components/userPannel/Dashboard'));
const Calander = lazy(() => import('../components/userPannel/Calander'));
const Company = lazy(() => import('../components/userPannel/Company'));
const Login = lazy(() => import('../pages/authPages/Login'));
const Signup = lazy(() => import('../pages/authPages/Signup'));
const ForgotPassword = lazy(() => import('../pages/authPages/ForgotPassword'));
const NewPassword = lazy(() => import('../pages/authPages/CreatePassword'));
const Success = lazy(() => import('../pages/authPages/PassChangeSuccess'));

const AppContent = () => {
  // const accessToken = useSelector((state) => state.auth.accessToken);
  // useTokenExpiry(accessToken);

  return (
    <Suspense fallback={<Loader />}>

      <Routes>
        <Route path="/user" element={<ProtectedRoute component={MainLayout} />}>
          <Route path="/user" element={<Dashboard />} />
          <Route path="/user/calander" element={<Calander />} />
          <Route path="/user/company" element={<Company />} />

        </Route>

        {/* Routes that don't require sidebar and header */}
        <Route path="/" element={<PublicRoute component={AuthLayout} />}>
          <Route path="/" element={<PublicRoute component={Login} />} />
          <Route path="/signup" element={<PublicRoute component={Signup} />} />
          <Route path="/forgot-password" element={<PublicRoute component={ForgotPassword} />} />
          <Route path="/new-password" element={<PublicRoute component={NewPassword} />} />
          <Route path="/success" element={<PublicRoute component={Success} />} />

        </Route>

        {/* Routes that require sidebar and header */}

      </Routes>
    </Suspense>
  );
};

export default AppContent;

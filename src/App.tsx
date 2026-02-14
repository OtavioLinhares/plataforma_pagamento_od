import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';
import OrderDetails from './pages/OrderDetails';
import Reconciliation from './pages/Reconciliation';
import CashManagement from './pages/CashManagement';
import CashFlow from './pages/CashFlow';
import PostSales from './pages/PostSales';

function App() {
  return (
    <BrowserRouter basename="/plataforma_pagamento_od">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="order-details" element={<OrderDetails />} />
          <Route path="reconciliation" element={<Reconciliation />} />
          <Route path="daily-cash" element={<CashManagement />} />
          <Route path="cash-flow" element={<CashFlow />} />
          <Route path="post-sales" element={<PostSales />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

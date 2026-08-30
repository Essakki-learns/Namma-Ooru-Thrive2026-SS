import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AudioAlert from './components/AudioAlert';

// Pages
import Login from './pages/Login';
import Home from './pages/Home';
import Schemes from './pages/Schemes';
import Panchayat from './pages/Panchayat';
import Market from './pages/Market';
import Services from './pages/Services';
import Infrastructure from './pages/Infrastructure';
import Links from './pages/Links';
import Profile from './pages/Profile';

function MainLayout() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-emerald-200 selection:text-emerald-900">
      {/* Sticky Top Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 pb-16">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/schemes" element={<Schemes />} />
          <Route path="/panchayat" element={<Panchayat />} />
          <Route path="/market" element={<Market />} />
          <Route path="/services" element={<Services />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/links" element={<Links />} />
          <Route path="/profile" element={<Profile />} />
          {/* Fallback */}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </main>

      {/* Floating Audio Alert button across the portal */}
      <AudioAlert />

      {/* Mandatory Team Stainless Steel Footer on EVERY page */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    </AppProvider>
  );
}

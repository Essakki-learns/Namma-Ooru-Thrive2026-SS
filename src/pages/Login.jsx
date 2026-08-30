import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import {
  FaMobileAlt,
  FaKey,
  FaUser,
  FaMapMarkerAlt,
  FaFlag,
  FaShieldAlt,
  FaLeaf,
  FaCheckCircle,
  FaHandsHelping
} from 'react-icons/fa';

export default function Login() {
  const { t, login } = useApp();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [village, setVillage] = useState('');
  const [state, setState] = useState('Tamil Nadu');
  const [otpSent, setOtpSent] = useState(false);

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (!phone || phone.length < 10) {
      alert('Please enter a valid 10-digit mobile number');
      return;
    }
    setOtpSent(true);
    setOtp('1234'); // Pre-fill sample OTP for ease of village users
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    const userName = name.trim() || 'Ramu K';
    const userPhone = phone.trim() || '9840123456';
    const userVillage = village.trim() || 'Sundarpur';
    const userState = state.trim() || 'Tamil Nadu';

    // Store in localStorage as requested
    localStorage.setItem('user', userName);

    login({
      name: userName,
      phone: userPhone,
      village: userVillage,
      state: userState
    });

    alert('Logged In');
    navigate('/home');
  };

  const handleQuickDemo = () => {
    setName('Essakki Muthuraja S');
    setPhone('9876543210');
    setOtp('1234');
    setVillage('Sundarpur Gramam');
    setState('Tamil Nadu');
    setOtpSent(true);
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-100 to-slate-200">
      <div className="max-w-md w-full space-y-6 bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-slate-200">
        
        {/* Header Branding */}
        <div className="text-center">
          <div className="mx-auto w-16 h-16 bg-gradient-to-tr from-emerald-700 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg mb-3">
            <FaLeaf className="text-amber-300 text-3xl" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {t('app_name')}
          </h1>
          <p className="text-sm font-semibold text-emerald-700 mt-1">
            {t('login_title')}
          </p>
          <p className="text-xs text-slate-500 mt-1">
            {t('login_subtitle')}
          </p>
        </div>

        {/* Quick Demo Autofill Button for Hackathon Judges */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-900">
            <FaCheckCircle className="text-emerald-600" />
            <span>Fast Hackathon / Demo Mode</span>
          </div>
          <button
            type="button"
            onClick={handleQuickDemo}
            id="demo-autofill-btn"
            className="px-3 py-1.5 min-h-[44px] bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-bold transition-transform active:scale-95 cursor-pointer shadow-sm"
          >
            {t('demo_autofill')}
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleLoginSubmit} className="space-y-4" id="login-form">
          
          {/* Full Name */}
          <div>
            <label htmlFor="user-name-input" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              {t('name_label')} *
            </label>
            <div className="relative rounded-lg shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <FaUser />
              </div>
              <input
                id="user-name-input"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Ramu K / Priya R"
                className="block w-full pl-10 pr-3 py-3 min-h-[44px] border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 sm:text-sm font-medium"
              />
            </div>
          </div>

          {/* Mobile Number (+91) */}
          <div>
            <label htmlFor="user-phone-input" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              {t('phone_label')} (+91) *
            </label>
            <div className="flex gap-2">
              <div className="relative flex-1 rounded-lg shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <FaMobileAlt />
                </div>
                <input
                  id="user-phone-input"
                  type="tel"
                  required
                  maxLength={10}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                  placeholder="9876543210"
                  className="block w-full pl-10 pr-3 py-3 min-h-[44px] border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 sm:text-sm font-medium"
                />
              </div>
              <button
                type="button"
                id="send-otp-btn"
                onClick={handleSendOtp}
                className="px-3.5 py-2 min-h-[44px] bg-slate-800 hover:bg-slate-900 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer whitespace-nowrap"
              >
                {otpSent ? 'Resend' : 'Get OTP'}
              </button>
            </div>
          </div>

          {/* 4-digit OTP */}
          <div>
            <label htmlFor="user-otp-input" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              {t('otp_label')} (Demo default: 1234) *
            </label>
            <div className="relative rounded-lg shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <FaKey />
              </div>
              <input
                id="user-otp-input"
                type="text"
                required
                maxLength={4}
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                placeholder="1234"
                className="block w-full pl-10 pr-3 py-3 min-h-[44px] border border-slate-300 rounded-xl text-slate-900 tracking-widest font-bold placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 sm:text-sm"
              />
            </div>
          </div>

          {/* Village & State Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor="user-village-input" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                {t('village_label')} *
              </label>
              <div className="relative rounded-lg shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <FaMapMarkerAlt />
                </div>
                <input
                  id="user-village-input"
                  type="text"
                  required
                  value={village}
                  onChange={(e) => setVillage(e.target.value)}
                  placeholder="Sundarpur"
                  className="block w-full pl-10 pr-3 py-3 min-h-[44px] border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 text-sm font-medium"
                />
              </div>
            </div>

            <div>
              <label htmlFor="user-state-select" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                {t('state_label')} *
              </label>
              <div className="relative rounded-lg shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <FaFlag />
                </div>
                <select
                  id="user-state-select"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 min-h-[44px] border border-slate-300 rounded-xl bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 text-sm font-medium cursor-pointer"
                >
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Karnataka">Karnataka</option>
                </select>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            id="login-submit-button"
            className="w-full mt-2 flex items-center justify-center gap-2 py-3.5 px-4 min-h-[48px] rounded-xl text-base font-bold text-white bg-emerald-700 hover:bg-emerald-800 shadow-lg shadow-emerald-700/30 transition-all duration-200 active:scale-[0.98] cursor-pointer"
          >
            <FaShieldAlt />
            <span>{t('btn_login')}</span>
          </button>
        </form>

        <div className="text-center text-xs text-slate-500 flex items-center justify-center gap-1.5 pt-2">
          <FaHandsHelping className="text-emerald-700" />
          <span>Simple OTP verification for all village residents</span>
        </div>

      </div>
    </div>
  );
}

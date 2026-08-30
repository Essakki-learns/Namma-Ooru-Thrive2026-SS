import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import {
  FaUserCircle,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFlag,
  FaGlobe,
  FaSignOutAlt,
  FaCheckCircle,
  FaHistory,
  FaEdit,
  FaShieldAlt,
  FaExclamationTriangle
} from 'react-icons/fa';

export default function Profile() {
  const { user, login, logout, language, setLanguage, t, complaints } = useApp();
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user?.name || 'Ramu K');
  const [phone, setPhone] = useState(user?.phone || '9840123456');
  const [village, setVillage] = useState(user?.village || 'Sundarpur');
  const [state, setState] = useState(user?.state || 'Tamil Nadu');

  const handleSaveProfile = (e) => {
    e.preventDefault();
    login({
      name,
      phone,
      village,
      state
    });
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  const handleLogout = () => {
    logout();
    alert('Logged out successfully');
    navigate('/');
  };

  const languages = [
    { code: 'en', label: 'English', native: 'English' },
    { code: 'hi', label: 'Hindi', native: 'हिन्दी' },
    { code: 'ta', label: 'Tamil', native: 'தமிழ்' },
    { code: 'mr', label: 'Marathi', native: 'मराठी' },
    { code: 'te', label: 'Telugu', native: 'తెలుగు' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8 space-y-6">
      
      {/* Profile Header Card */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-emerald-700 text-amber-300 flex items-center justify-center font-black text-3xl sm:text-4xl shadow-lg border-4 border-emerald-100">
              {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wide mb-1">
                <FaCheckCircle /> Verified Village Resident
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {user?.name || 'Village Citizen'}
              </h1>
              <p className="text-sm font-semibold text-slate-500 mt-0.5">
                📍 {user?.village || 'Sundarpur'}, {user?.state || 'Tamil Nadu'}
              </p>
              <p className="text-xs text-slate-400 mt-1 font-mono">
                📱 +91 {user?.phone || '9840123456'}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2 w-full sm:w-auto">
            <button
              type="button"
              id="edit-profile-toggle-btn"
              onClick={() => setIsEditing(!isEditing)}
              className="px-4 py-2.5 min-h-[44px] bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 cursor-pointer transition-colors"
            >
              <FaEdit />
              <span>{isEditing ? 'Cancel Edit' : 'Edit Profile'}</span>
            </button>
            <button
              type="button"
              id="profile-logout-btn"
              onClick={handleLogout}
              className="px-4 py-2.5 min-h-[44px] bg-rose-50 hover:bg-rose-100 text-rose-700 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 cursor-pointer transition-colors border border-rose-200"
            >
              <FaSignOutAlt />
              <span>{t('logout')}</span>
            </button>
          </div>
        </div>

        {/* Edit Profile Form */}
        {isEditing && (
          <form onSubmit={handleSaveProfile} className="mt-6 pt-6 border-t border-slate-200 space-y-4">
            <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider">
              Update Citizen Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2.5 min-h-[44px] border border-slate-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2.5 min-h-[44px] border border-slate-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Village / Gramam
                </label>
                <input
                  type="text"
                  required
                  value={village}
                  onChange={(e) => setVillage(e.target.value)}
                  className="w-full px-3 py-2.5 min-h-[44px] border border-slate-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  State
                </label>
                <input
                  type="text"
                  required
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="w-full px-3 py-2.5 min-h-[44px] border border-slate-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="py-3 px-6 min-h-[44px] bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl text-sm shadow cursor-pointer"
            >
              Save Changes
            </button>
          </form>
        )}
      </div>

      {/* Language Preference Section */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 space-y-4">
        <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <FaGlobe className="text-emerald-600" />
          <span>{t('select_language')}</span>
        </h2>
        <p className="text-xs text-slate-500">
          Choose your preferred regional dialect. The entire portal interface translates immediately.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
          {languages.map((lang) => {
            const isSelected = language === lang.code;
            return (
              <button
                key={lang.code}
                type="button"
                id={`profile-lang-${lang.code}`}
                onClick={() => setLanguage(lang.code)}
                className={`p-3 min-h-[48px] rounded-xl border-2 text-center transition-all cursor-pointer flex flex-col items-center justify-center ${
                  isSelected
                    ? 'border-emerald-600 bg-emerald-50 text-emerald-900 font-extrabold shadow-sm'
                    : 'border-slate-200 hover:border-slate-300 text-slate-700'
                }`}
              >
                <span className="text-sm font-black">{lang.native}</span>
                <span className="text-[11px] text-slate-500">{lang.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* My Submitted Grievances */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <FaHistory className="text-slate-600" />
            <span>My Submitted Complaints &amp; Requests</span>
          </h2>
          <Link
            to="/infrastructure"
            className="text-xs font-bold text-red-600 hover:underline flex items-center gap-1"
          >
            <FaExclamationTriangle />
            <span>New Complaint</span>
          </Link>
        </div>

        {complaints.length === 0 ? (
          <p className="text-xs text-slate-400 py-4 text-center">
            No complaints submitted yet.
          </p>
        ) : (
          <div className="space-y-3">
            {complaints.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black text-slate-900">{item.id}</span>
                    <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1 font-medium">
                    {item.description}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Date: {item.date}
                  </p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold self-start sm:self-center ${
                  item.status === 'Resolved'
                    ? 'bg-emerald-100 text-emerald-800'
                    : 'bg-amber-100 text-amber-900'
                }`}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}

import React, { createContext, useContext, useState, useEffect } from 'react';
import translations from '../translations.json';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    return localStorage.getItem('namma_ooru_lang') || 'en';
  });

  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('user');
    const savedDetails = localStorage.getItem('namma_ooru_user_details');
    if (savedDetails) {
      try {
        return JSON.parse(savedDetails);
      } catch (e) {
        // fallback
      }
    }
    if (saved) {
      return {
        name: saved,
        phone: '9840123456',
        village: 'Sundarpur',
        state: 'Tamil Nadu'
      };
    }
    return {
      name: 'Ramu K',
      phone: '9840123456',
      village: 'Sundarpur',
      state: 'Tamil Nadu'
    };
  });

  const [complaints, setComplaints] = useState(() => {
    const saved = localStorage.getItem('namma_ooru_complaints');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {}
    }
    return [
      {
        id: 'GP-1092',
        category: 'Water Supply',
        description: 'Main pipeline leak near North Temple street',
        date: '2026-08-28',
        status: 'In Progress'
      },
      {
        id: 'GP-1085',
        category: 'Electricity',
        description: 'Street light bulb replacement at Bus Stand junction',
        date: '2026-08-25',
        status: 'Resolved'
      }
    ];
  });

  const [toastMessage, setToastMessage] = useState(null);

  const setLanguage = (lang) => {
    setLanguageState(lang);
    localStorage.setItem('namma_ooru_lang', lang);
  };

  const t = (key) => {
    const langDict = translations[language] || translations['en'];
    return langDict[key] || translations['en'][key] || key;
  };

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', userData.name);
    localStorage.setItem('namma_ooru_user_details', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('namma_ooru_user_details');
  };

  const addComplaint = (newComplaint) => {
    const complaintObj = {
      id: `GP-${Math.floor(1000 + Math.random() * 9000)}`,
      ...newComplaint,
      date: new Date().toISOString().split('T')[0],
      status: 'Submitted'
    };
    const updated = [complaintObj, ...complaints];
    setComplaints(updated);
    localStorage.setItem('namma_ooru_complaints', JSON.stringify(updated));
    return complaintObj.id;
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        t,
        user,
        login,
        logout,
        complaints,
        addComplaint,
        toastMessage,
        showToast
      }}
    >
      {children}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 max-w-md bg-emerald-800 text-white px-5 py-3.5 rounded-xl shadow-2xl flex items-center gap-3 border border-emerald-600 animate-bounce">
          <span className="text-xl">✅</span>
          <p className="font-medium text-sm sm:text-base leading-snug">{toastMessage}</p>
        </div>
      )}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}

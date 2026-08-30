import React from 'react';
import { useApp } from '../context/AppContext';
import { FaPhoneAlt, FaLeaf, FaHandsHelping, FaShieldAlt } from 'react-icons/fa';

export default function Footer() {
  const { t } = useApp();

  return (
    <footer id="main-footer" className="bg-slate-900 text-slate-200 mt-auto border-t-4 border-emerald-600">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        
        {/* Quick Emergency Banner in Footer */}
        <div className="bg-slate-800/80 rounded-xl p-4 mb-6 border border-slate-700/60 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="p-2 bg-orange-600 text-white rounded-lg">
              <FaPhoneAlt className="text-base" />
            </span>
            <div>
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                {t('emergency_title')}
              </p>
              <p className="text-sm font-bold text-white">
                Police: 100 | Fire: 101 | Ambulance: 102 | Kisan Helpline: 1800-180-1551
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="tel:100"
              className="px-3 py-1.5 min-h-[38px] bg-red-700 hover:bg-red-800 text-white text-xs font-bold rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <FaShieldAlt /> 100 Police
            </a>
            <a
              href="tel:102"
              className="px-3 py-1.5 min-h-[38px] bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <FaPhoneAlt /> 102 Ambulance
            </a>
          </div>
        </div>

        {/* Mandatory Team Credit Block */}
        <div className="text-center py-4 border-t border-slate-800">
          <div className="inline-flex items-center gap-2 text-emerald-400 font-bold text-base mb-2">
            <FaLeaf /> Namma Ooru - Village Community Hub
          </div>
          <p id="mandatory-team-credit" className="text-sm sm:text-base font-semibold text-slate-100 tracking-wide">
            Team STAINLESS STEEL | Lead: Essakki Muthuraja S | Members: Mihil Shantha Nivash V, Sabari Ganesh G | © 2026 Namma Ooru
          </p>
          <p className="text-xs text-slate-400 mt-2">
            Built with care for Rural India &amp; Digital Village Empowerment
          </p>
        </div>

      </div>
    </footer>
  );
}

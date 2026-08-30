import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { FaGlobe, FaChevronDown, FaCheck } from 'react-icons/fa';

const languages = [
  { code: 'en', label: 'English', native: 'English' },
  { code: 'hi', label: 'Hindi', native: 'हिन्दी' },
  { code: 'ta', label: 'Tamil', native: 'தமிழ்' },
  { code: 'mr', label: 'Marathi', native: 'मराठी' },
  { code: 'te', label: 'Telugu', native: 'తెలుగు' },
];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLang = languages.find((l) => l.code === language) || languages[0];

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        id="language-switcher-button"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Select Language"
        className="flex items-center gap-2 px-3 py-2 min-h-[44px] bg-emerald-800 hover:bg-emerald-900 text-white rounded-lg border border-emerald-600 font-medium text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400 cursor-pointer shadow-sm"
      >
        <FaGlobe className="text-amber-300 text-base" />
        <span className="font-semibold">{currentLang.native}</span>
        <FaChevronDown className={`text-xs text-emerald-200 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div
          id="language-dropdown-menu"
          className="absolute right-0 mt-2 w-48 rounded-xl bg-white shadow-2xl ring-1 ring-black/10 py-1.5 z-50 divide-y divide-slate-100 border border-slate-200 animate-in fade-in zoom-in-95 duration-100"
        >
          <div className="px-3 py-1.5 text-xs font-semibold text-slate-500 uppercase tracking-wider bg-slate-50">
            Select Language / भाषा
          </div>
          <div className="py-1">
            {languages.map((lang) => {
              const isSelected = language === lang.code;
              return (
                <button
                  key={lang.code}
                  id={`lang-option-${lang.code}`}
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 min-h-[44px] text-sm text-left font-medium transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-emerald-50 text-emerald-800 font-bold'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">{lang.native}</span>
                    <span className="text-xs text-slate-500">{lang.label}</span>
                  </div>
                  {isSelected && <FaCheck className="text-emerald-700 text-sm" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

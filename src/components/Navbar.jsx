import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import LanguageSwitcher from './LanguageSwitcher';
import {
  FaHome,
  FaFileAlt,
  FaUsers,
  FaStore,
  FaHandsHelping,
  FaBus,
  FaExternalLinkAlt,
  FaUserCircle,
  FaPhoneAlt,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaAmbulance,
  FaShieldAlt,
  FaFireExtinguisher,
  FaLeaf
} from 'react-icons/fa';

export default function Navbar() {
  const { t, user } = useApp();
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const navItems = [
    { path: '/home', labelKey: 'nav_home', icon: FaHome },
    { path: '/schemes', labelKey: 'nav_schemes', icon: FaFileAlt },
    { path: '/panchayat', labelKey: 'nav_panchayat', icon: FaUsers },
    { path: '/market', labelKey: 'nav_market', icon: FaStore },
    { path: '/services', labelKey: 'nav_services', icon: FaHandsHelping },
    { path: '/infrastructure', labelKey: 'nav_infra', icon: FaBus },
    { path: '/links', labelKey: 'nav_links', icon: FaExternalLinkAlt },
  ];

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setPagesDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setPagesDropdownOpen(false);
  }, [location.pathname]);

  const isCurrentPage = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 bg-emerald-700 text-white shadow-lg border-b-2 border-emerald-800">
      {/* Top Emergency Strip for instant single-tap phone dials */}
      <div className="bg-emerald-900/90 px-3 py-1 text-xs border-b border-emerald-800/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-1.5 text-emerald-200 text-[11px] font-medium whitespace-nowrap">
            <span className="inline-block w-2 h-2 rounded-full bg-red-400 animate-ping"></span>
            <span className="font-bold uppercase tracking-wider text-amber-300">Quick Helplines:</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 whitespace-nowrap">
            <a
              href="tel:100"
              id="emergency-police-btn"
              title="Call Police"
              className="inline-flex items-center gap-1 px-2.5 py-1 min-h-[30px] rounded-md bg-red-600 hover:bg-red-700 text-white text-[11px] sm:text-xs font-bold transition-transform active:scale-95 cursor-pointer shadow"
            >
              <FaShieldAlt className="text-[10px]" />
              <span>Police 100</span>
            </a>
            <a
              href="tel:101"
              id="emergency-fire-btn"
              title="Call Fire Service"
              className="inline-flex items-center gap-1 px-2.5 py-1 min-h-[30px] rounded-md bg-amber-600 hover:bg-amber-700 text-white text-[11px] sm:text-xs font-bold transition-transform active:scale-95 cursor-pointer shadow"
            >
              <FaFireExtinguisher className="text-[10px]" />
              <span>Fire 101</span>
            </a>
            <a
              href="tel:102"
              id="emergency-ambulance-btn"
              title="Call Ambulance"
              className="inline-flex items-center gap-1 px-2.5 py-1 min-h-[30px] rounded-md bg-rose-600 hover:bg-rose-700 text-white text-[11px] sm:text-xs font-bold transition-transform active:scale-95 cursor-pointer shadow"
            >
              <FaAmbulance className="text-[10px]" />
              <span>Ambulance 102</span>
            </a>
            <a
              href="tel:18001801551"
              id="emergency-kisan-btn"
              title="Kisan Call Center"
              className="hidden md:inline-flex items-center gap-1 px-2.5 py-1 min-h-[30px] rounded-md bg-emerald-800 hover:bg-emerald-950 text-amber-300 text-[11px] sm:text-xs font-bold transition-transform active:scale-95 cursor-pointer border border-emerald-600"
            >
              <FaPhoneAlt className="text-[10px]" />
              <span>Kisan 1800-180-1551</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 gap-2">
          
          {/* Left: Logo */}
          <Link
            to="/home"
            id="nav-logo-link"
            className="flex items-center gap-2.5 min-h-[44px] group focus:outline-none focus:ring-2 focus:ring-amber-400 rounded-lg p-1"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-amber-400 to-amber-300 text-emerald-900 flex items-center justify-center font-black text-xl shadow-md group-hover:scale-105 transition-transform">
              <FaLeaf className="text-emerald-800 text-xl" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white flex items-center gap-1">
                {t('app_name')}
              </span>
              <span className="text-[11px] sm:text-xs text-amber-200 font-medium -mt-1 tracking-wide">
                {t('tagline')}
              </span>
            </div>
          </Link>

          {/* Center: Desktop Quick Links & Pages Dropdown */}
          <nav className="hidden lg:flex items-center gap-1.5" aria-label="Main Navigation">
            {navItems.slice(0, 4).map((item) => {
              const Icon = item.icon;
              const active = isCurrentPage(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  id={`nav-link-${item.path.replace('/', '')}`}
                  className={`flex items-center gap-1.5 px-3 py-2 min-h-[44px] rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                    active
                      ? 'bg-emerald-900 text-amber-300 shadow-inner font-bold'
                      : 'text-emerald-50 hover:bg-emerald-600 hover:text-white'
                  }`}
                >
                  <Icon className="text-base" />
                  <span>{t(item.labelKey)}</span>
                </Link>
              );
            })}

            {/* Dropdown Menu for all pages */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                id="nav-all-pages-dropdown-btn"
                onClick={() => setPagesDropdownOpen(!pagesDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-2 min-h-[44px] rounded-lg text-sm font-semibold text-emerald-50 hover:bg-emerald-600 hover:text-white transition-colors cursor-pointer"
              >
                <span>More Pages</span>
                <FaChevronDown className={`text-xs transition-transform ${pagesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {pagesDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-xl bg-white shadow-2xl ring-1 ring-black/10 py-2 z-50 border border-slate-200">
                  <div className="px-3 py-1 text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Village Sections
                  </div>
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    const active = isCurrentPage(item.path);
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setPagesDropdownOpen(false)}
                        className={`flex items-center gap-2.5 px-3.5 py-2.5 text-sm font-medium transition-colors ${
                          active
                            ? 'bg-emerald-50 text-emerald-800 font-bold'
                            : 'text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        <Icon className={active ? 'text-emerald-700' : 'text-slate-500'} />
                        <span>{t(item.labelKey)}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </nav>

          {/* Right: Language switcher & User Avatar & Mobile menu toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageSwitcher />

            {/* Profile Avatar button */}
            <Link
              to="/profile"
              id="nav-user-avatar-btn"
              title="Villager Profile"
              aria-label="Villager Profile"
              className={`flex items-center gap-2 px-2.5 py-1.5 min-h-[44px] min-w-[44px] rounded-xl bg-emerald-800 hover:bg-emerald-900 border border-emerald-600 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400 cursor-pointer ${
                isCurrentPage('/profile') ? 'ring-2 ring-amber-300' : ''
              }`}
            >
              <div className="w-8 h-8 rounded-full bg-amber-400 text-emerald-950 flex items-center justify-center font-extrabold text-sm shadow">
                {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
              </div>
              <div className="hidden md:flex flex-col text-left">
                <span className="text-xs font-bold text-white max-w-[90px] truncate leading-tight">
                  {user?.name || 'Citizen'}
                </span>
                <span className="text-[10px] text-amber-200 leading-tight">
                  {user?.village || 'Villager'}
                </span>
              </div>
            </Link>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              id="mobile-nav-toggle-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 min-h-[44px] min-w-[44px] rounded-lg bg-emerald-800 hover:bg-emerald-900 text-white focus:outline-none focus:ring-2 focus:ring-amber-400 cursor-pointer flex items-center justify-center"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Navigation Menu */}
      {mobileMenuOpen && (
        <div id="mobile-nav-menu" className="lg:hidden bg-emerald-800 border-t border-emerald-900 px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top-2 duration-150">
          <div className="text-xs font-bold text-emerald-200 uppercase tracking-wider px-2 py-1">
            Navigate Portal / மெனு
          </div>
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isCurrentPage(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  id={`mobile-nav-${item.path.replace('/', '')}`}
                  className={`flex items-center gap-2 px-3 py-3 min-h-[44px] rounded-xl text-sm font-semibold transition-all ${
                    active
                      ? 'bg-amber-400 text-emerald-950 font-bold shadow'
                      : 'bg-emerald-900/60 text-white hover:bg-emerald-700'
                  }`}
                >
                  <Icon className="text-base shrink-0" />
                  <span className="truncate">{t(item.labelKey)}</span>
                </Link>
              );
            })}
          </div>

          <div className="pt-2 border-t border-emerald-700/60 flex items-center justify-between">
            <Link
              to="/profile"
              className="flex items-center gap-2 text-sm text-amber-200 hover:text-white font-medium p-2 min-h-[44px]"
            >
              <FaUserCircle className="text-lg" />
              <span>{t('nav_profile')} ({user?.name || 'Guest'})</span>
            </Link>
            <Link
              to="/"
              className="text-xs bg-emerald-950 hover:bg-black text-amber-300 px-3 py-2 rounded-lg font-bold border border-emerald-700 min-h-[40px] flex items-center"
            >
              {t('nav_login')} / Switch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

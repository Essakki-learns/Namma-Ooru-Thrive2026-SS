import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import {
  FaCloudRain,
  FaSun,
  FaSmog,
  FaBus,
  FaStore,
  FaFileAlt,
  FaUsers,
  FaHeartbeat,
  FaBriefcase,
  FaExclamationTriangle,
  FaPhoneAlt,
  FaLeaf,
  FaArrowRight,
  FaBell,
  FaCheckCircle
} from 'react-icons/fa';

export default function Home() {
  const { t, user } = useApp();
  // Weather condition state: 'norain' | 'rain' | 'humid'
  const [weatherCondition, setWeatherCondition] = useState('norain');

  const weatherConfig = {
    norain: {
      labelKey: 'weather_norain',
      descKey: 'weather_norain_desc',
      emoji: '☀️',
      icon: FaSun,
      temp: '32°C',
      color: 'bg-amber-50 border-amber-300 text-amber-900',
      badgeColor: 'bg-amber-500 text-white'
    },
    rain: {
      labelKey: 'weather_rain',
      descKey: 'weather_rain_desc',
      emoji: '🌧️',
      icon: FaCloudRain,
      temp: '26°C',
      color: 'bg-blue-50 border-blue-300 text-blue-900',
      badgeColor: 'bg-blue-600 text-white'
    },
    humid: {
      labelKey: 'weather_humid',
      descKey: 'weather_humid_desc',
      emoji: '⛅',
      icon: FaSmog,
      temp: '30°C',
      color: 'bg-emerald-50 border-emerald-300 text-emerald-900',
      badgeColor: 'bg-emerald-600 text-white'
    }
  };

  const currentW = weatherConfig[weatherCondition];

  const dashboardCards = [
    {
      id: 'card-schemes',
      to: '/schemes',
      titleKey: 'card_schemes',
      subKey: 'card_schemes_sub',
      icon: FaFileAlt,
      color: 'bg-emerald-600',
      badge: '5 Schemes'
    },
    {
      id: 'card-market',
      to: '/market',
      titleKey: 'card_market',
      subKey: 'card_market_sub',
      icon: FaStore,
      color: 'bg-orange-600',
      badge: 'Live Rates'
    },
    {
      id: 'card-panchayat',
      to: '/panchayat',
      titleKey: 'card_panchayat',
      subKey: 'card_panchayat_sub',
      icon: FaUsers,
      color: 'bg-blue-700',
      badge: 'Sarpanch Info'
    },
    {
      id: 'card-bus',
      to: '/infrastructure',
      titleKey: 'card_bus',
      subKey: 'card_bus_sub',
      icon: FaBus,
      color: 'bg-indigo-600',
      badge: '4 Daily Buses'
    },
    {
      id: 'card-health',
      to: '/services',
      titleKey: 'card_health',
      subKey: 'card_health_sub',
      icon: FaHeartbeat,
      color: 'bg-rose-600',
      badge: '3 PHCs Near'
    },
    {
      id: 'card-jobs',
      to: '/services',
      titleKey: 'card_jobs',
      subKey: 'card_jobs_sub',
      icon: FaBriefcase,
      color: 'bg-amber-600',
      badge: 'Local Work'
    },
    {
      id: 'card-issues',
      to: '/infrastructure',
      titleKey: 'card_issues',
      subKey: 'card_issues_sub',
      icon: FaExclamationTriangle,
      color: 'bg-red-600',
      badge: 'Direct GP'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 space-y-6">
      
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-900 rounded-2xl p-5 sm:p-7 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/80 text-amber-300 text-xs font-bold mb-2 border border-emerald-600">
              <FaLeaf /> Gramin Digital Seva
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {t('home_welcome')}, {user?.name || 'Villager'}!
            </h1>
            <p className="text-emerald-100 text-sm sm:text-base mt-1 max-w-2xl">
              Village: <span className="font-bold text-amber-200">{user?.village || 'Sundarpur'}</span> | State: <span className="font-bold text-amber-200">{user?.state || 'Tamil Nadu'}</span>
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              to="/schemes"
              id="home-banner-schemes-btn"
              className="px-4 py-2.5 min-h-[44px] bg-amber-400 hover:bg-amber-500 text-emerald-950 font-bold rounded-xl text-sm transition-all shadow active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <span>View PM Kisan &amp; Schemes</span>
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>

      {/* 1. WEATHER SECTION WITH 3-WAY TOGGLE AS REQUIRED */}
      <section id="weather-section" className="bg-white rounded-2xl p-5 sm:p-6 shadow-md border border-slate-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 flex items-center gap-2">
              <span>🌾</span> {t('weather_title')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Tap below to inspect weather impact on local crops &amp; village farm tasks
            </p>
          </div>

          {/* 3 Toggle Buttons: Rain / No Rain / Humid */}
          <div className="inline-flex p-1 bg-slate-100 rounded-xl border border-slate-300 self-start sm:self-auto gap-1">
            <button
              type="button"
              id="weather-toggle-norain"
              onClick={() => setWeatherCondition('norain')}
              className={`px-3.5 py-2 min-h-[44px] rounded-lg text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                weatherCondition === 'norain'
                  ? 'bg-amber-500 text-white shadow-md'
                  : 'text-slate-700 hover:bg-slate-200'
              }`}
            >
              <span>☀️</span>
              <span>{t('weather_norain')}</span>
            </button>

            <button
              type="button"
              id="weather-toggle-rain"
              onClick={() => setWeatherCondition('rain')}
              className={`px-3.5 py-2 min-h-[44px] rounded-lg text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                weatherCondition === 'rain'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-700 hover:bg-slate-200'
              }`}
            >
              <span>🌧️</span>
              <span>{t('weather_rain')}</span>
            </button>

            <button
              type="button"
              id="weather-toggle-humid"
              onClick={() => setWeatherCondition('humid')}
              className={`px-3.5 py-2 min-h-[44px] rounded-lg text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                weatherCondition === 'humid'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-slate-700 hover:bg-slate-200'
              }`}
            >
              <span>⛅</span>
              <span>{t('weather_humid')}</span>
            </button>
          </div>
        </div>

        {/* Dynamic Weather Display Card */}
        <div className={`p-4 sm:p-5 rounded-xl border-2 transition-all ${currentW.color} flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4`}>
          <div className="flex items-center gap-4">
            <span className="text-4xl sm:text-5xl">{currentW.emoji}</span>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-black">{currentW.temp}</span>
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold uppercase ${currentW.badgeColor}`}>
                  {t(currentW.labelKey)}
                </span>
              </div>
              <p className="text-sm font-semibold mt-1">
                {t(currentW.descKey)}
              </p>
            </div>
          </div>
          <div className="text-xs bg-white/80 p-2.5 rounded-lg border border-slate-200 font-medium text-slate-700 self-stretch sm:self-auto sm:text-right">
            💧 Humidity: 68% | 💨 Wind: 12 km/h | 🌾 Advisory Active
          </div>
        </div>
      </section>

      {/* DASHBOARD SERVICES GRID */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 flex items-center gap-2">
            <span>🏛️</span> {t('quick_services')}
          </h2>
          <span className="text-xs font-semibold text-slate-500">Touch friendly cards</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {dashboardCards.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.id}
                to={card.to}
                id={card.id}
                className="group bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-500 transition-all duration-200 flex flex-col justify-between min-h-[140px] cursor-pointer"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className={`w-12 h-12 rounded-xl ${card.color} text-white flex items-center justify-center text-xl shadow-md group-hover:scale-105 transition-transform`}>
                    <Icon />
                  </div>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 group-hover:bg-emerald-100 group-hover:text-emerald-800 transition-colors">
                    {card.badge}
                  </span>
                </div>

                <div className="mt-4">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors flex items-center justify-between">
                    <span>{t(card.titleKey)}</span>
                    <FaArrowRight className="text-xs text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {t(card.subKey)}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Live Village Bulletins */}
      <div className="bg-amber-50 rounded-2xl p-4 sm:p-5 border border-amber-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center text-lg shrink-0">
            <FaBell />
          </div>
          <div>
            <p className="text-xs font-bold text-amber-900 uppercase tracking-wider">
              Gram Sabha Notice
            </p>
            <p className="text-sm font-semibold text-slate-800">
              Next Village Panchayat General Meeting scheduled this Friday at 10:00 AM at Community Hall.
            </p>
          </div>
        </div>
        <Link
          to="/panchayat"
          className="px-4 py-2 min-h-[44px] bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-bold whitespace-nowrap flex items-center gap-1 cursor-pointer transition-colors shadow-sm self-stretch sm:self-auto justify-center"
        >
          <span>Panchayat Details</span>
          <FaArrowRight />
        </Link>
      </div>

    </div>
  );
}

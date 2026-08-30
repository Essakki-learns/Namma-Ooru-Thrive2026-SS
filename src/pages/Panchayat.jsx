import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import {
  FaUsers,
  FaPhoneAlt,
  FaUserTie,
  FaTint,
  FaRoad,
  FaBolt,
  FaBuilding,
  FaCalendarAlt,
  FaCheckCircle,
  FaExclamationTriangle,
  FaShieldAlt
} from 'react-icons/fa';

export default function Panchayat() {
  const { t } = useApp();

  // Exactly as requested:
  // Sarpanch: Name: Priya R, Contact: 9876543210
  // Ward 1: Rajesh - Water Supply
  // Ward 2: Meena - Roads
  // Ward 3: Kumar - Electricity
  const sarpanch = {
    name: "Priya R",
    role: "Gram Panchayat Sarpanch / Village President",
    contact: "9876543210",
    experience: "Elected Representative (Term: 2024 - 2029)",
    officeHours: "Monday to Friday: 9:30 AM - 4:00 PM",
    officeLocation: "Sundarpur Gram Panchayat Main Bhavan, Near Temple Road",
    priority: "Village drinking water cleanliness, road expansion, farmer welfare distribution"
  };

  const wardMembers = [
    {
      wardNumber: 1,
      name: "Rajesh",
      department: "Water Supply & Irrigation",
      contact: "9876543211",
      icon: FaTint,
      color: "bg-blue-600",
      accent: "border-blue-200 bg-blue-50/50",
      duties: "Drinking water pipeline maintenance, overhead tank chlorination, borewell repairs."
    },
    {
      wardNumber: 2,
      name: "Meena",
      department: "Roads & Village Sanitation",
      contact: "9876543212",
      icon: FaRoad,
      color: "bg-amber-600",
      accent: "border-amber-200 bg-amber-50/50",
      duties: "Street concrete paving, drainage cleaning, garbage collection & sanitation drives."
    },
    {
      wardNumber: 3,
      name: "Kumar",
      department: "Electricity & Public Lighting",
      contact: "9876543213",
      icon: FaBolt,
      color: "bg-emerald-600",
      accent: "border-emerald-200 bg-emerald-50/50",
      duties: "Street light repairs, power outage liaison with TNEB, agricultural feeder lines."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 space-y-6">
      
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-2.5">
              <span className="p-2.5 bg-blue-100 text-blue-800 rounded-xl">
                <FaUsers className="text-2xl" />
              </span>
              {t('panchayat_title')}
            </h1>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              {t('panchayat_sub')}
            </p>
          </div>
          <Link
            to="/infrastructure"
            className="px-4 py-2.5 min-h-[44px] bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 shadow-sm transition-transform active:scale-95 cursor-pointer self-start md:self-auto"
          >
            <FaExclamationTriangle />
            <span>File Issue to Panchayat</span>
          </Link>
        </div>
      </div>

      {/* SARPANCH SPOTLIGHT CARD */}
      <div id="sarpanch-card" className="bg-gradient-to-br from-emerald-800 via-emerald-700 to-emerald-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl border-2 border-emerald-600">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-amber-400 text-emerald-950 flex items-center justify-center font-black text-3xl sm:text-4xl shadow-lg shrink-0 border-4 border-white/20">
              PR
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400 text-emerald-950 text-xs font-black uppercase tracking-wider mb-1.5 shadow">
                <FaShieldAlt /> {t('sarpanch_badge')}
              </div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                {sarpanch.name}
              </h2>
              <p className="text-emerald-100 text-sm font-medium">
                {sarpanch.role}
              </p>
              <div className="mt-2 text-xs text-emerald-200 space-y-0.5">
                <p>📍 {sarpanch.officeLocation}</p>
                <p>⏰ {sarpanch.officeHours}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
            <a
              href={`tel:${sarpanch.contact}`}
              id="sarpanch-call-btn"
              className="px-6 py-3.5 min-h-[48px] bg-amber-400 hover:bg-amber-500 text-emerald-950 rounded-xl text-sm font-extrabold flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-95 cursor-pointer whitespace-nowrap"
            >
              <FaPhoneAlt />
              <span>Call Sarpanch ({sarpanch.contact})</span>
            </a>
          </div>
        </div>

        <div className="mt-5 pt-4 border-t border-emerald-600/60 text-xs text-emerald-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <span>🎯 <strong>Current Village Priorities:</strong> {sarpanch.priority}</span>
          <span className="font-bold text-amber-300">✅ Gram Sabha Active</span>
        </div>
      </div>

      {/* 3 WARD MEMBERS GRID */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-6 bg-emerald-600 rounded-full"></span>
            <h2 className="text-xl font-extrabold text-slate-900">
              {t('ward_members')} (Wards 1, 2, 3)
            </h2>
          </div>
          <span className="text-xs font-semibold text-slate-500">Direct Contact Available</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {wardMembers.map((member) => {
            const Icon = member.icon;
            return (
              <div
                key={member.wardNumber}
                id={`ward-member-card-${member.wardNumber}`}
                className={`bg-white rounded-2xl p-5 border-2 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4 ${member.accent}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-slate-900 text-white uppercase">
                      {t('ward')} {member.wardNumber}
                    </span>
                    <div className={`w-10 h-10 rounded-xl ${member.color} text-white flex items-center justify-center text-lg shadow`}>
                      <Icon />
                    </div>
                  </div>

                  <h3 className="text-lg font-black text-slate-900">
                    {member.name}
                  </h3>
                  <p className="text-xs font-bold text-emerald-800 uppercase tracking-wide mt-0.5">
                    {member.department}
                  </p>

                  <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                    {member.duties}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200">
                  <a
                    href={`tel:${member.contact}`}
                    id={`ward-member-call-${member.wardNumber}`}
                    className="w-full py-2.5 min-h-[44px] bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all active:scale-95 shadow cursor-pointer"
                  >
                    <FaPhoneAlt className="text-amber-400" />
                    <span>Call {member.name} ({member.contact})</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Panchayat Bhavan Information & Timings */}
      <div className="bg-slate-100 rounded-2xl p-5 border border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-start gap-3">
          <div className="p-3 bg-white rounded-xl text-emerald-700 shadow-sm">
            <FaBuilding className="text-xl" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900">Gram Panchayat Administrative Office</h4>
            <p className="text-xs text-slate-600 mt-1">
              Sundarpur Village Office, Panchayat Bhavan, Main Road.
            </p>
            <p className="text-xs text-slate-500 mt-0.5">
              Working Hours: Monday to Saturday, 9:00 AM – 5:00 PM (Lunch 1:30 - 2:00 PM)
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="p-3 bg-white rounded-xl text-amber-700 shadow-sm">
            <FaCalendarAlt className="text-xl" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900">Scheduled Gram Sabha Meetings</h4>
            <p className="text-xs text-slate-600 mt-1">
              General meetings held on Republic Day (Jan 26), May Day (May 1), Independence Day (Aug 15), and Gandhi Jayanti (Oct 2).
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

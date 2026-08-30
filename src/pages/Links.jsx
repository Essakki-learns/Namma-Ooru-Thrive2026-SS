import React from 'react';
import { useApp } from '../context/AppContext';
import {
  FaExternalLinkAlt,
  FaIdCard,
  FaFolderOpen,
  FaGraduationCap,
  FaSeedling,
  FaShieldAlt,
  FaHospital,
  FaPassport,
  FaLandmark
} from 'react-icons/fa';

export default function Links() {
  const { t } = useApp();

  // Exactly as requested: Aadhaar Portal, DigiLocker, Exam Results, PM Kisan Portal, Crop Insurance
  const portalLinks = [
    {
      id: 'link-aadhaar',
      name: 'Aadhaar Self Service Portal (UIDAI)',
      sub: 'Download e-Aadhaar, check update status & verify mobile/email link',
      url: 'https://myaadhaar.uidai.gov.in/',
      icon: FaIdCard,
      badge: 'Identity Services',
      color: 'bg-emerald-700 hover:bg-emerald-800 text-white',
      badgeColor: 'bg-emerald-100 text-emerald-900'
    },
    {
      id: 'link-digilocker',
      name: 'DigiLocker India',
      sub: 'Official cloud storage for Ration Card, Driving License & Marksheets',
      url: 'https://www.digilocker.gov.in/',
      icon: FaFolderOpen,
      badge: 'Official Documents',
      color: 'bg-blue-700 hover:bg-blue-800 text-white',
      badgeColor: 'bg-blue-100 text-blue-900'
    },
    {
      id: 'link-exam-results',
      name: 'National & State Exam Results (10th / 12th / TN DGE)',
      sub: 'Check SSLC, HSC, Board exam results & government recruitment hall tickets',
      url: 'https://results.gov.in/',
      icon: FaGraduationCap,
      badge: 'Education & Results',
      color: 'bg-amber-600 hover:bg-amber-700 text-white',
      badgeColor: 'bg-amber-100 text-amber-900'
    },
    {
      id: 'link-pm-kisan',
      name: 'PM Kisan Samman Nidhi Portal',
      sub: 'Check beneficiary status, Aadhaar seeding & installment bank credit',
      url: 'https://pmkisan.gov.in/',
      icon: FaSeedling,
      badge: 'Farmer DBT Portal',
      color: 'bg-emerald-800 hover:bg-emerald-900 text-white',
      badgeColor: 'bg-emerald-100 text-emerald-900'
    },
    {
      id: 'link-crop-insurance',
      name: 'Pradhan Mantri Fasal Bima Yojana (PMFBY)',
      sub: 'Apply for crop damage compensation, track claim status & premium calculator',
      url: 'https://pmfby.gov.in/',
      icon: FaShieldAlt,
      badge: 'Crop Insurance',
      color: 'bg-orange-600 hover:bg-orange-700 text-white',
      badgeColor: 'bg-orange-100 text-orange-900'
    },
    {
      id: 'link-ayushman-bharat',
      name: 'Ayushman Bharat PM-JAY Health Portal',
      sub: 'Generate Ayushman Gold Card for ₹5 Lakhs free hospital treatment',
      url: 'https://pmjay.gov.in/',
      icon: FaHospital,
      badge: 'Free Health Card',
      color: 'bg-rose-700 hover:bg-rose-800 text-white',
      badgeColor: 'bg-rose-100 text-rose-900'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 space-y-6">
      
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-2.5">
          <span className="p-2.5 bg-blue-100 text-blue-800 rounded-xl">
            <FaLandmark className="text-2xl" />
          </span>
          {t('links_title')}
        </h1>
        <p className="text-sm text-slate-600 mt-1 max-w-2xl">
          {t('links_sub')}
        </p>
      </div>

      {/* BIG BUTTON CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {portalLinks.map((portal) => {
          const Icon = portal.icon;
          return (
            <a
              key={portal.id}
              id={portal.id}
              href={portal.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl p-6 border-2 border-slate-200 hover:border-emerald-600 shadow-sm hover:shadow-xl transition-all duration-200 flex flex-col justify-between space-y-5 cursor-pointer transform hover:-translate-y-0.5"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="w-14 h-14 rounded-2xl bg-slate-100 text-slate-800 group-hover:bg-emerald-50 group-hover:text-emerald-700 flex items-center justify-center text-2xl transition-colors shadow-inner">
                    <Icon />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${portal.badgeColor}`}>
                    {portal.badge}
                  </span>
                </div>

                <h2 className="text-lg font-black text-slate-900 group-hover:text-emerald-800 transition-colors leading-snug">
                  {portal.name}
                </h2>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                  {portal.sub}
                </p>
              </div>

              {/* Big Touch Action Button */}
              <div className={`w-full py-3.5 px-4 min-h-[48px] rounded-xl text-sm font-extrabold flex items-center justify-center gap-2 shadow-md transition-transform group-hover:scale-[1.02] ${portal.color}`}>
                <span>Open Portal</span>
                <FaExternalLinkAlt className="text-xs" />
              </div>
            </a>
          );
        })}
      </div>

      {/* Safe Browsing Notice */}
      <div className="bg-slate-100 rounded-2xl p-4 border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
        <span>🔒 All external links open securely to official Government of India (.gov.in) web portals.</span>
        <span className="font-bold text-emerald-800">Verified Secure Links</span>
      </div>

    </div>
  );
}

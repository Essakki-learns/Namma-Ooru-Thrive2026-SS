import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  FaFileInvoiceDollar,
  FaCheckCircle,
  FaSearch,
  FaHandsHelping,
  FaExternalLinkAlt,
  FaPhoneAlt,
  FaInfoCircle,
  FaShieldAlt,
  FaSeedling,
  FaSolarPanel,
  FaCreditCard
} from 'react-icons/fa';

export default function Schemes() {
  const { t } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'gov' | 'funds'

  // Exact dummy data requested by user
  const schemesData = [
    {
      id: 1,
      name: "PM Kisan Samman Nidhi",
      desc: "₹6000/year to farmers",
      benefit: "₹2,000 every 4 months directly into Bank Account via DBT",
      eligibility: "Small and marginal farmer families having cultivable landholding up to 2 hectares.",
      documents: "Aadhaar Card, Land Ownership Patta/Chitta, Bank Account details.",
      icon: FaSeedling,
      tag: "Direct Cash"
    },
    {
      id: 2,
      name: "MNREGA",
      desc: "100 days wage guarantee",
      benefit: "Guaranteed 100 days of wage employment per financial year for rural households",
      eligibility: "Any adult member of a rural household willing to do unskilled manual work.",
      documents: "Job Card issued by Gram Panchayat, Bank/Post Office account.",
      icon: FaHandsHelping,
      tag: "Wage Work"
    },
    {
      id: 3,
      name: "PM Fasal Bima",
      desc: "Crop insurance",
      benefit: "Comprehensive insurance coverage against crop failure due to non-preventable natural risks",
      eligibility: "All farmers growing notified crops in notified areas during Kharif/Rabi seasons.",
      documents: "Sowing Certificate, Land Record document, Aadhaar, Bank Passbook.",
      icon: FaShieldAlt,
      tag: "Insurance"
    },
    {
      id: 4,
      name: "Kisan Credit Card",
      desc: "Easy loans",
      benefit: "Low-interest loans (4% effective interest rate) for agriculture and allied activities",
      eligibility: "All farmers, tenant farmers, oral lessees, and self-help group farmer members.",
      documents: "Identity proof, Address proof, Land cultivation records.",
      icon: FaCreditCard,
      tag: "Easy Credit"
    },
    {
      id: 5,
      name: "Solar Pump Scheme",
      desc: "Subsidy for solar pumps",
      benefit: "Up to 60% government subsidy to install standalone off-grid solar agriculture pumps",
      eligibility: "Individual farmers, water user associations, and farmer producer groups.",
      documents: "Electricity NOC, Borewell/Water source certification, Land Patta.",
      icon: FaSolarPanel,
      tag: "Subsidy"
    }
  ];

  // 3 Farmer Funds with eligibility
  const farmerFundsData = [
    {
      id: 101,
      name: "State Agri Drought & Flood Relief Fund",
      desc: "Direct financial relief for unexpected crop damage due to weather anomalies",
      benefit: "Immediate compensation up to ₹13,500/hectare for rainfed and irrigated crop losses",
      eligibility: "Resident village farmers whose crop loss is certified at >33% by Village Administrative Officer (VAO).",
      documents: "Crop Damage Certificate, VAO Recommendation, Bank details.",
      tag: "Disaster Fund"
    },
    {
      id: 102,
      name: "Rural Animal Husbandry & Cattle Fund",
      desc: "Subsidized dairy cattle insurance, nutritional fodder kits, and medical care support",
      benefit: "50% subsidy on cattle feed and free veterinary health checkup camps",
      eligibility: "Rural families with indigenous cows, buffaloes, or sheep/goat herds in the village.",
      documents: "Cattle tag verification, Ration card, Aadhar.",
      tag: "Livestock Fund"
    },
    {
      id: 103,
      name: "Micro-Irrigation Drip Subsidy Fund",
      desc: "Special grants for drip and sprinkler irrigation system installation",
      benefit: "Up to 100% subsidy for small/marginal farmers and 75% for other farmers",
      eligibility: "Farmers with assured irrigation source (well/borewell) and valid land ownership.",
      documents: "Soil & Water Test report, Land Map, Bank Account.",
      tag: "Water Fund"
    }
  ];

  const filteredSchemes = schemesData.filter((s) =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredFunds = farmerFundsData.filter((f) =>
    f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    f.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleApplyClick = (name) => {
    alert(`To apply for ${name}, please visit your nearest Gram Panchayat Common Service Center (CSC) or contact the Village Administrative Officer.`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 space-y-6">
      
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-2.5">
              <span className="p-2.5 bg-emerald-100 text-emerald-800 rounded-xl">
                <FaFileInvoiceDollar className="text-2xl" />
              </span>
              {t('schemes_title')}
            </h1>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              {t('schemes_sub')}
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <FaSearch />
            </div>
            <input
              type="text"
              id="schemes-search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search scheme name..."
              className="block w-full pl-10 pr-4 py-2.5 min-h-[44px] border border-slate-300 rounded-xl bg-slate-50 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600 text-sm font-medium"
            />
          </div>
        </div>

        {/* Tab filters */}
        <div className="flex gap-2 mt-4 pt-4 border-t border-slate-100 overflow-x-auto">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 min-h-[44px] rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'bg-emerald-700 text-white shadow'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            All Programs ({schemesData.length + farmerFundsData.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('gov')}
            className={`px-4 py-2 min-h-[44px] rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'gov'
                ? 'bg-emerald-700 text-white shadow'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Govt Schemes (5)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('funds')}
            className={`px-4 py-2 min-h-[44px] rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'funds'
                ? 'bg-emerald-700 text-white shadow'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Farmer Funds (3)
          </button>
        </div>
      </div>

      {/* SECTION 1: 5 GOVT SCHEMES */}
      {(activeTab === 'all' || activeTab === 'gov') && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-6 bg-emerald-600 rounded-full"></span>
            <h2 className="text-xl font-extrabold text-slate-900">
              {t('schemes_gov_heading')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredSchemes.map((scheme) => {
              const Icon = scheme.icon;
              return (
                <div
                  key={scheme.id}
                  id={`scheme-card-${scheme.id}`}
                  className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-emerald-500 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center text-lg font-bold">
                          <Icon />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-emerald-700 uppercase tracking-wide">
                            Scheme #{scheme.id}
                          </span>
                          <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                            {scheme.name}
                          </h3>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 shrink-0">
                        {scheme.tag}
                      </span>
                    </div>

                    <div className="bg-emerald-50/70 p-3 rounded-xl border border-emerald-100 my-2">
                      <p className="text-xs font-bold text-emerald-950">
                        🌟 Highlight: {scheme.desc}
                      </p>
                      <p className="text-xs text-emerald-800 mt-0.5">
                        {scheme.benefit}
                      </p>
                    </div>

                    <div className="space-y-1.5 text-xs text-slate-600 mt-3">
                      <p>
                        <strong className="text-slate-800 font-bold">{t('eligibility')}:</strong> {scheme.eligibility}
                      </p>
                      <p>
                        <strong className="text-slate-800 font-bold">Required Documents:</strong> {scheme.documents}
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                    <span className="text-xs font-semibold text-slate-500">
                      Gram Panchayat Verified
                    </span>
                    <button
                      type="button"
                      onClick={() => handleApplyClick(scheme.name)}
                      className="px-4 py-2 min-h-[44px] bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer shadow-sm flex items-center gap-1.5"
                    >
                      <span>{t('apply_now')}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* SECTION 2: 3 FARMER FUNDS */}
      {(activeTab === 'all' || activeTab === 'funds') && (
        <div className="space-y-4 pt-2">
          <div className="flex items-center gap-2">
            <span className="w-3 h-6 bg-orange-600 rounded-full"></span>
            <h2 className="text-xl font-extrabold text-slate-900">
              {t('schemes_funds_heading')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {filteredFunds.map((fund) => (
              <div
                key={fund.id}
                id={`fund-card-${fund.id}`}
                className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-orange-500 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="text-xs font-bold text-orange-700 uppercase tracking-wide">
                      Fund #{fund.id}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-900">
                      {fund.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900">
                    {fund.name}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    {fund.desc}
                  </p>

                  <div className="bg-orange-50 p-3 rounded-xl border border-orange-100 my-3">
                    <p className="text-xs font-bold text-orange-950">
                      💰 Grant / Benefit:
                    </p>
                    <p className="text-xs text-orange-900 mt-0.5">
                      {fund.benefit}
                    </p>
                  </div>

                  <div className="text-xs text-slate-600 space-y-1">
                    <p>
                      <strong className="text-slate-800 font-bold">{t('eligibility')}:</strong> {fund.eligibility}
                    </p>
                    <p>
                      <strong className="text-slate-800 font-bold">Documents:</strong> {fund.documents}
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => handleApplyClick(fund.name)}
                    className="w-full py-2.5 min-h-[44px] bg-orange-600 hover:bg-orange-700 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer shadow-sm text-center"
                  >
                    Check Eligibility &amp; Apply
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Assistance Helpline Box */}
      <div className="bg-emerald-900 text-white rounded-2xl p-5 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-emerald-800 flex items-center justify-center text-amber-300 text-xl shrink-0">
            <FaPhoneAlt />
          </div>
          <div>
            <h4 className="text-base font-bold">Need Help with Scheme Registration?</h4>
            <p className="text-xs text-emerald-200 mt-0.5">
              Call Kisan Call Center toll-free at 1800-180-1551 or visit Gram Panchayat Sarpanch office.
            </p>
          </div>
        </div>
        <a
          href="tel:18001801551"
          className="px-5 py-2.5 min-h-[44px] bg-amber-400 hover:bg-amber-500 text-emerald-950 rounded-xl text-xs font-extrabold flex items-center gap-2 whitespace-nowrap shadow cursor-pointer transition-transform active:scale-95"
        >
          <FaPhoneAlt />
          <span>Call 1800-180-1551</span>
        </a>
      </div>

    </div>
  );
}

import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  FaBus,
  FaExclamationTriangle,
  FaClock,
  FaMapMarkerAlt,
  FaTint,
  FaBolt,
  FaRoad,
  FaCheckCircle,
  FaPaperPlane,
  FaPhoneAlt,
  FaShieldAlt,
  FaHistory
} from 'react-icons/fa';

export default function Infrastructure() {
  const { t, addComplaint, showToast, complaints, user } = useApp();

  // Exact dummy bus data requested by user
  const busData = [
    { id: 1, time: "6:00 AM", destination: "City Center", route: "Sundarpur -> Alwarpet -> City Central Terminus", type: "Ordinary Express", platform: "Bay 1" },
    { id: 2, time: "9:00 AM", destination: "Market", route: "Sundarpur -> Farmer Bazaar -> Taluk Vegetable Mandi", type: "Village Shuttle", platform: "Bay 2" },
    { id: 3, time: "2:00 PM", destination: "City Center", route: "Sundarpur -> Govt Hospital -> City Central Terminus", type: "Ordinary Express", platform: "Bay 1" },
    { id: 4, time: "6:00 PM", destination: "Railway Station", route: "Sundarpur -> Junction Junction -> Central Railway Stn", type: "Night Connector", platform: "Bay 3" }
  ];

  // Form State
  const [category, setCategory] = useState('Water Supply');
  const [description, setDescription] = useState('');
  const [locationName, setLocationName] = useState('');
  const [urgency, setUrgency] = useState('Normal');
  const [submittedRef, setSubmittedRef] = useState(null);

  const handleComplaintSubmit = (e) => {
    e.preventDefault();
    if (!description.trim()) {
      alert('Please describe the issue or problem location.');
      return;
    }

    const refId = addComplaint({
      category,
      description: `${description} (Location: ${locationName || 'Sundarpur Village'})`,
      urgency,
      reporter: user?.name || 'Citizen'
    });

    setSubmittedRef(refId);
    setDescription('');
    setLocationName('');

    // Toast and alert as requested in requirements
    showToast(`Complaint sent to Gram Panchayat! Reference #${refId}`);
    alert("Complaint sent to Gram Panchayat!");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 space-y-8">
      
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-2.5">
          <span className="p-2.5 bg-indigo-100 text-indigo-800 rounded-xl">
            <FaBus className="text-2xl" />
          </span>
          {t('infra_title')}
        </h1>
        <p className="text-sm text-slate-600 mt-1 max-w-2xl">
          {t('infra_sub')}
        </p>
      </div>

      {/* SECTION A: BUS TIMING SCHEDULE */}
      <section id="bus-schedule-section" className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-3 h-6 bg-indigo-600 rounded-full"></span>
            <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
              <FaBus className="text-indigo-600" />
              <span>{t('bus_schedule_heading')}</span>
            </h2>
          </div>
          <span className="text-xs font-bold text-slate-500 bg-indigo-50 text-indigo-900 px-3 py-1.5 rounded-lg border border-indigo-200">
            Daily Village Bus Service
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {busData.map((bus) => (
            <div
              key={bus.id}
              id={`bus-card-${bus.id}`}
              className="bg-white rounded-2xl p-5 border-2 border-indigo-100 shadow-sm hover:border-indigo-500 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full text-xs font-black bg-indigo-900 text-white flex items-center gap-1">
                    <FaClock className="text-amber-400 text-xs" />
                    {bus.time}
                  </span>
                  <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md">
                    {bus.platform}
                  </span>
                </div>

                <div className="mt-2">
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                    {t('bus_dest')}
                  </p>
                  <h3 className="text-lg font-black text-slate-900">
                    {bus.destination}
                  </h3>
                </div>

                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  <strong>Route:</strong> {bus.route}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 font-medium">
                <span>{bus.type}</span>
                <span className="text-emerald-700 font-bold">On Time</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-100 rounded-xl p-3 text-xs text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>📍 Village Bus Stop: Sundarpur Main Junction (Near Banyan Tree)</span>
          <span className="font-semibold text-slate-800">State Transport Inquiry: 044-2456789</span>
        </div>
      </section>

      {/* SECTION B: COMPLAINT FORM FOR WATER / ELECTRICITY / INFRASTRUCTURE */}
      <section id="panchayat-complaint-section" className="space-y-4 pt-4">
        <div className="flex items-center gap-2">
          <span className="w-3 h-6 bg-red-600 rounded-full"></span>
          <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
            <FaExclamationTriangle className="text-red-600" />
            <span>{t('complaint_heading')}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Complaint Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
            <form onSubmit={handleComplaintSubmit} className="space-y-4" id="infrastructure-complaint-form">
              
              {/* Category selector */}
              <div>
                <label htmlFor="complaint-category" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  {t('complaint_type')} *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    { label: 'Water Supply', icon: FaTint, color: 'border-blue-300 text-blue-800' },
                    { label: 'Electricity', icon: FaBolt, color: 'border-amber-300 text-amber-800' },
                    { label: 'Road Repair', icon: FaRoad, color: 'border-slate-300 text-slate-800' }
                  ].map((cat) => {
                    const Icon = cat.icon;
                    const isSelected = category === cat.label;
                    return (
                      <button
                        key={cat.label}
                        type="button"
                        onClick={() => setCategory(cat.label)}
                        className={`p-3 min-h-[44px] rounded-xl border-2 text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-slate-900 text-white border-slate-900 shadow'
                            : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        <Icon />
                        <span>{cat.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Location */}
              <div>
                <label htmlFor="complaint-location" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Specific Street / Ward Location
                </label>
                <div className="relative rounded-lg shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <FaMapMarkerAlt />
                  </div>
                  <input
                    id="complaint-location"
                    type="text"
                    value={locationName}
                    onChange={(e) => setLocationName(e.target.value)}
                    placeholder="e.g. Ward 1, North Pillayar Temple street"
                    className="block w-full pl-10 pr-4 py-2.5 min-h-[44px] border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-600 text-sm font-medium"
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label htmlFor="complaint-description" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  {t('complaint_desc')} *
                </label>
                <textarea
                  id="complaint-description"
                  required
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe the issue clearly (e.g. Drinking water pump broken for 2 days, or street light wire sparking)..."
                  className="block w-full p-3 min-h-[100px] border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-600 text-sm font-medium"
                />
              </div>

              {/* Urgency selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Urgency Level
                </label>
                <div className="flex gap-2">
                  {['Normal', 'Urgent (Same Day)', 'Emergency'].map((level) => (
                    <button
                      key={level}
                      type="button"
                      onClick={() => setUrgency(level)}
                      className={`px-3 py-1.5 min-h-[44px] rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                        urgency === level
                          ? 'bg-red-700 text-white'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                id="submit-complaint-btn"
                className="w-full py-3.5 px-4 min-h-[48px] rounded-xl text-base font-bold text-white bg-red-600 hover:bg-red-700 shadow-lg shadow-red-600/30 transition-transform active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
              >
                <FaPaperPlane />
                <span>{t('complaint_submit')}</span>
              </button>
            </form>
          </div>

          {/* Grievance Tracking / Recent List */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                  <FaHistory className="text-slate-500" />
                  <span>Village Grievances Log</span>
                </h3>
                <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                  {complaints.length} Reported
                </span>
              </div>

              <div className="space-y-3 max-h-[360px] overflow-y-auto pr-1">
                {complaints.map((item) => (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-slate-50 space-y-1.5 transition-colors"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-black text-slate-900">
                        {item.id}
                      </span>
                      <span className={`px-2 py-0.5 rounded-full text-[11px] font-extrabold ${
                        item.status === 'Resolved'
                          ? 'bg-emerald-100 text-emerald-800'
                          : item.status === 'In Progress'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                    <p className="text-xs font-bold text-slate-800">
                      {item.category}
                    </p>
                    <p className="text-xs text-slate-600 leading-snug">
                      {item.description}
                    </p>
                    <div className="text-[11px] text-slate-400 pt-1 flex items-center justify-between">
                      <span>Reported: {item.date}</span>
                      <span>Ward Officer Assigned</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-200 text-xs text-emerald-950 space-y-1">
              <p className="font-bold flex items-center gap-1">
                <FaCheckCircle className="text-emerald-600" /> Panchayat Resolution Guarantee
              </p>
              <p className="text-emerald-800">
                Water supply issues are addressed within 24 hours. Electricity complaints are forwarded to the Junior Engineer automatically.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  FaHandsHelping,
  FaHeartbeat,
  FaBriefcase,
  FaTools,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaUserMd,
  FaMoneyBillWave,
  FaUserCheck,
  FaCheckCircle
} from 'react-icons/fa';

export default function Services() {
  const { t } = useApp();
  const [activeSection, setActiveSection] = useState('all'); // 'all' | 'health' | 'jobs' | 'skills'

  // Exact dummy data specified by user + 3rd PHC to fulfill "3 nearby PHCs"
  const phcData = [
    {
      id: 1,
      name: "PHC Sundarpur",
      contact: "044-1234",
      distance: "0.8 km (Village Main Gate)",
      doctor: "Dr. Ananya Sharma (MBBS)",
      timings: "8:00 AM - 4:00 PM (Emergency 24x7)",
      services: "General OPD, Free Maternity Care, Child Immunization, Snake Bite Antivenom, Free Medicines."
    },
    {
      id: 2,
      name: "PHC Kanchipuram",
      contact: "044-5678",
      distance: "4.5 km (Near Taluk Office)",
      doctor: "Dr. K. Vijayakumar (Chief Medical Officer)",
      timings: "24x7 Full Service Facility",
      services: "Emergency Trauma Care, Lab Diagnostic Tests, Dental OPD, Ambulance Station."
    },
    {
      id: 3,
      name: "PHC Perungudi",
      contact: "044-9012",
      distance: "3.2 km (East Canal Road)",
      doctor: "Dr. S. Ramesh (Community Health Specialist)",
      timings: "9:00 AM - 5:00 PM",
      services: "Fever Clinic, Diabetes & BP Screening, AYUSH Herbal Dispensary, Vaccination Depot."
    }
  ];

  // Exact dummy jobs data specified by user + enriched entries
  const jobsData = [
    {
      id: 1,
      title: "Shop Assistant",
      company: "Local Grocery",
      location: "Near Bus Stand",
      wage: "₹350 / day",
      type: "Full-time (8 AM - 6 PM)",
      contact: "9841023456",
      requirements: "Basic arithmetic, billing, stock arranging."
    },
    {
      id: 2,
      title: "Farm Worker",
      company: "Green Farms",
      location: "Sundarpur East",
      wage: "₹450 / day (with lunch)",
      type: "Daily Wage / Seasonal",
      contact: "9841098765",
      requirements: "Harvesting, paddy de-weeding, field irrigation."
    },
    {
      id: 3,
      title: "Tractor & Thresher Driver",
      company: "Village Agro Equipment Center",
      location: "North Canal Road",
      wage: "₹650 / day",
      type: "Immediate (Contract)",
      contact: "9841033221",
      requirements: "Valid driving license, experience with Mahindra/Swaraj tractors."
    },
    {
      id: 4,
      title: "Dairy Farm Milk Collector",
      company: "Sundarpur Milk Cooperative Society",
      location: "East Village Dairy Booth",
      wage: "₹400 / day",
      type: "Morning & Evening Shift",
      contact: "9841044556",
      requirements: "Milk fat testing, can handling, record register entry."
    }
  ];

  // Section 3: Skill Listings (Carpenters, Electricians, Plumbers, etc.)
  const skillListings = [
    {
      id: 1,
      name: "Murugan Carpenter",
      trade: "Carpenter & Woodworker",
      skills: "Doors, Windows, Cots, Roof Trusses, Plough repair",
      contact: "9840155667",
      rating: "4.9 / 5 (38 jobs)",
      experience: "15+ Years in Village"
    },
    {
      id: 2,
      name: "Senthil Electrician",
      trade: "Licensed Wireman & Electrician",
      skills: "House wiring, Agricultural Motor rewinding, Solar inverter repair",
      contact: "9840166778",
      rating: "4.8 / 5 (54 jobs)",
      experience: "10+ Years"
    },
    {
      id: 3,
      name: "Dhanapal Plumber",
      trade: "Plumber & Pipe Fitter",
      skills: "Borewell motor fitting, PVC pipeline joints, Drip irrigation lines",
      contact: "9840177889",
      rating: "4.7 / 5 (29 jobs)",
      experience: "8 Years"
    },
    {
      id: 4,
      name: "Velu Mason (Kothanar)",
      trade: "Civil Mason & Concrete Worker",
      skills: "House construction, Water tank building, Plastering, Compound wall",
      contact: "9840188990",
      rating: "4.9 / 5 (45 jobs)",
      experience: "18 Years"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 space-y-6">
      
      {/* Header */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-2.5">
              <span className="p-2.5 bg-rose-100 text-rose-800 rounded-xl">
                <FaHandsHelping className="text-2xl" />
              </span>
              {t('services_title')}
            </h1>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              {t('services_sub')}
            </p>
          </div>

          {/* Quick Filter tabs */}
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveSection('all')}
              className={`px-3.5 py-2 min-h-[44px] rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeSection === 'all'
                  ? 'bg-slate-900 text-white shadow'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All Services
            </button>
            <button
              type="button"
              onClick={() => setActiveSection('health')}
              className={`px-3.5 py-2 min-h-[44px] rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeSection === 'health'
                  ? 'bg-rose-600 text-white shadow'
                  : 'bg-rose-50 text-rose-800 hover:bg-rose-100'
              }`}
            >
              <FaHeartbeat />
              <span>Healthcare (3)</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveSection('jobs')}
              className={`px-3.5 py-2 min-h-[44px] rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeSection === 'jobs'
                  ? 'bg-amber-600 text-white shadow'
                  : 'bg-amber-50 text-amber-900 hover:bg-amber-100'
              }`}
            >
              <FaBriefcase />
              <span>Jobs (4)</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveSection('skills')}
              className={`px-3.5 py-2 min-h-[44px] rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeSection === 'skills'
                  ? 'bg-emerald-700 text-white shadow'
                  : 'bg-emerald-50 text-emerald-900 hover:bg-emerald-100'
              }`}
            >
              <FaTools />
              <span>Skills (4)</span>
            </button>
          </div>
        </div>
      </div>

      {/* SECTION 1: HEALTHCARE (3 NEARBY PHCs) */}
      {(activeSection === 'all' || activeSection === 'health') && (
        <section id="services-healthcare-section" className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-6 bg-rose-600 rounded-full"></span>
              <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                <FaHeartbeat className="text-rose-600" />
                <span>{t('sec_healthcare')}</span>
              </h2>
            </div>
            <a
              href="tel:108"
              className="text-xs font-bold text-rose-700 bg-rose-50 hover:bg-rose-100 px-3 py-1.5 rounded-lg border border-rose-200 flex items-center gap-1"
            >
              <span>Emergency 108 Ambulance</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {phcData.map((phc) => (
              <div
                key={phc.id}
                id={`phc-card-${phc.id}`}
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:border-rose-400 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-100 text-rose-800">
                      Govt Health Center
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      {phc.distance}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-slate-900">
                    {phc.name}
                  </h3>
                  <p className="text-xs font-bold text-rose-700 mt-0.5 flex items-center gap-1">
                    <FaUserMd /> {phc.doctor}
                  </p>

                  <div className="mt-3 text-xs text-slate-600 space-y-1.5 bg-slate-50 p-3 rounded-xl">
                    <p className="flex items-center gap-1 text-slate-700 font-semibold">
                      <FaClock className="text-slate-400" /> {phc.timings}
                    </p>
                    <p className="text-slate-600 leading-snug">
                      <strong>Services:</strong> {phc.services}
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <a
                    href={`tel:${phc.contact}`}
                    id={`call-phc-${phc.id}`}
                    className="w-full py-2.5 min-h-[44px] bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-transform active:scale-95 shadow cursor-pointer"
                  >
                    <FaPhoneAlt />
                    <span>Call Health Center ({phc.contact})</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SECTION 2: LOCAL JOBS & VACANCIES */}
      {(activeSection === 'all' || activeSection === 'jobs') && (
        <section id="services-jobs-section" className="space-y-4 pt-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-6 bg-amber-600 rounded-full"></span>
              <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                <FaBriefcase className="text-amber-600" />
                <span>{t('sec_jobs')}</span>
              </h2>
            </div>
            <span className="text-xs font-semibold text-slate-500">Verified Local Work</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {jobsData.map((job) => (
              <div
                key={job.id}
                id={`job-card-${job.id}`}
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <div>
                      <span className="text-xs font-bold text-amber-700 uppercase tracking-wide">
                        {job.company}
                      </span>
                      <h3 className="text-lg font-black text-slate-900">
                        {job.title}
                      </h3>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-black bg-emerald-100 text-emerald-800 whitespace-nowrap">
                      {job.wage}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 flex items-center gap-1.5 mt-1 font-medium">
                    <FaMapMarkerAlt className="text-slate-400" />
                    <span>Location: {job.location}</span>
                    <span className="text-slate-300">•</span>
                    <span>{job.type}</span>
                  </p>

                  <div className="bg-amber-50/60 p-3 rounded-xl border border-amber-100 mt-3 text-xs text-slate-700">
                    <strong className="text-amber-950 font-bold">Work details:</strong> {job.requirements}
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                  <span className="text-xs text-slate-500 font-semibold">Immediate Joining</span>
                  <a
                    href={`tel:${job.contact}`}
                    id={`apply-job-${job.id}`}
                    className="px-4 py-2 min-h-[44px] bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow transition-transform active:scale-95 cursor-pointer"
                  >
                    <FaPhoneAlt />
                    <span>Call Employer ({job.contact})</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SECTION 3: SKILL LISTINGS (CARPENTERS, ELECTRICIANS, PLUMBERS) */}
      {(activeSection === 'all' || activeSection === 'skills') && (
        <section id="services-skills-section" className="space-y-4 pt-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-6 bg-emerald-600 rounded-full"></span>
              <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                <FaTools className="text-emerald-700" />
                <span>{t('sec_skills')}</span>
              </h2>
            </div>
            <span className="text-xs font-semibold text-slate-500">Call Directly for Home &amp; Farm Visits</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {skillListings.map((artisan) => (
              <div
                key={artisan.id}
                id={`artisan-card-${artisan.id}`}
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:border-emerald-500 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-lg mb-2">
                    <FaTools />
                  </div>
                  <h3 className="text-base font-black text-slate-900">
                    {artisan.name}
                  </h3>
                  <p className="text-xs font-bold text-emerald-700 uppercase tracking-wide mt-0.5">
                    {artisan.trade}
                  </p>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    {artisan.skills}
                  </p>
                  <div className="mt-3 text-[11px] text-slate-500 font-semibold bg-slate-50 p-2 rounded-lg">
                    ⭐ {artisan.rating} | ⏱️ {artisan.experience}
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <a
                    href={`tel:${artisan.contact}`}
                    id={`call-artisan-${artisan.id}`}
                    className="w-full py-2.5 min-h-[44px] bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow transition-transform active:scale-95 cursor-pointer"
                  >
                    <FaPhoneAlt className="text-amber-300" />
                    <span>Call ({artisan.contact})</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

    </div>
  );
}

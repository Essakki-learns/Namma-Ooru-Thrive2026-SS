import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  FaStore,
  FaPhoneAlt,
  FaPlus,
  FaLeaf,
  FaTag,
  FaWeightHanging,
  FaCheckCircle,
  FaUserCheck,
  FaExchangeAlt
} from 'react-icons/fa';

export default function Market() {
  const { t } = useApp();
  // 'seller' | 'buyer'
  const [viewMode, setViewMode] = useState('seller');
  const isBuyer = viewMode === 'buyer';

  // Exact dummy data requested by user
  const initialMarketData = [
    { id: 1, crop: "Wheat", price: 2500, qty: "100kg", seller: "Murugan S", contact: "9840112233", mandi: "Sundarpur Central Mandi", date: "Today" },
    { id: 2, crop: "Rice", price: 3200, qty: "200kg", seller: "Kaliappan M", contact: "9840223344", mandi: "Sundarpur Central Mandi", date: "Today" },
    { id: 3, crop: "Tomato", price: 1500, qty: "50kg", seller: "Lakshmi G", contact: "9840334455", mandi: "Farmer Sub-Market", date: "Today" }
  ];

  const [marketItems, setMarketItems] = useState(initialMarketData);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newCrop, setNewCrop] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [newQty, setNewQty] = useState('');
  const [newSeller, setNewSeller] = useState('');
  const [newContact, setNewContact] = useState('');

  const handleAddCropSubmit = (e) => {
    e.preventDefault();
    if (!newCrop || !newPrice || !newQty) {
      alert('Please fill in crop name, price, and quantity');
      return;
    }

    const newItem = {
      id: Date.now(),
      crop: newCrop,
      price: Number(newPrice),
      qty: newQty.includes('kg') || newQty.includes('quintal') ? newQty : `${newQty}kg`,
      seller: newSeller || 'Local Farmer',
      contact: newContact || '9876500000',
      mandi: 'Sundarpur Central Mandi',
      date: 'Just now'
    };

    setMarketItems([newItem, ...marketItems]);
    setShowAddModal(false);
    setNewCrop('');
    setNewPrice('');
    setNewQty('');
    setNewSeller('');
    setNewContact('');
    alert(`Success: ${newCrop} listing added to Mandi Market!`);
  };

  const handleContactSeller = (item) => {
    alert(`Connecting with Farmer ${item.seller} for ${item.crop} (${item.qty}). Phone: ${item.contact}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 space-y-6">
      
      {/* Header & Mode Switcher */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-2.5">
              <span className="p-2.5 bg-orange-100 text-orange-800 rounded-xl">
                <FaStore className="text-2xl" />
              </span>
              {t('market_title')}
            </h1>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              {t('market_sub')}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* SELLER / BUYER TOGGLE AS SPECIFIED IN USER REQUIREMENT */}
            <div className="inline-flex p-1 bg-slate-100 rounded-xl border border-slate-300">
              <button
                type="button"
                id="market-toggle-seller"
                onClick={() => setViewMode('seller')}
                className={`px-4 py-2 min-h-[44px] rounded-lg text-xs sm:text-sm font-extrabold transition-all cursor-pointer flex items-center gap-1.5 ${
                  !isBuyer
                    ? 'bg-emerald-700 text-white shadow-md'
                    : 'text-slate-700 hover:bg-slate-200'
                }`}
              >
                <span>🌾</span>
                <span>{t('market_seller')}</span>
              </button>

              <button
                type="button"
                id="market-toggle-buyer"
                onClick={() => setViewMode('buyer')}
                className={`px-4 py-2 min-h-[44px] rounded-lg text-xs sm:text-sm font-extrabold transition-all cursor-pointer flex items-center gap-1.5 ${
                  isBuyer
                    ? 'bg-orange-600 text-white shadow-md'
                    : 'text-slate-700 hover:bg-slate-200'
                }`}
              >
                <span>🛒</span>
                <span>{t('market_buyer')}</span>
              </button>
            </div>

            {!isBuyer && (
              <button
                type="button"
                id="add-crop-listing-btn"
                onClick={() => setShowAddModal(true)}
                className="px-4 py-2.5 min-h-[44px] bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-sm transition-transform active:scale-95 cursor-pointer"
              >
                <FaPlus />
                <span>Add Crop</span>
              </button>
            )}
          </div>
        </div>

        {/* View Mode Indicator Banner */}
        <div className={`mt-4 p-3.5 rounded-xl border text-xs sm:text-sm font-semibold flex items-center justify-between ${
          isBuyer
            ? 'bg-orange-50 border-orange-200 text-orange-950'
            : 'bg-emerald-50 border-emerald-200 text-emerald-950'
        }`}>
          <div className="flex items-center gap-2">
            <span className="text-lg">{isBuyer ? '🛒' : '👨‍🌾'}</span>
            <span>
              {isBuyer
                ? 'Buyer / Trader Mode: Price column is hidden for negotiated direct wholesale purchasing. Tap "Contact Seller" to call farmers directly.'
                : 'Farmer / Seller Mode: Full pricing transparency and market rate benchmarks are visible.'}
            </span>
          </div>
          <span className="hidden sm:inline-block px-2.5 py-1 rounded-full bg-white text-xs font-bold shadow-sm">
            {isBuyer ? 'Buyer View' : 'Seller View'}
          </span>
        </div>
      </div>

      {/* CROP MARKET TABLE / CARDS */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200 bg-slate-50/70 flex items-center justify-between">
          <h2 className="text-base sm:text-lg font-extrabold text-slate-900 flex items-center gap-2">
            <span>🌾</span> Today's Produce Listings &amp; Mandi Rates
          </h2>
          <span className="text-xs font-bold text-slate-500 bg-slate-200/80 px-2.5 py-1 rounded-lg">
            {marketItems.length} Crops Active
          </span>
        </div>

        {/* Responsive Table with Price Conditional Rendering */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse" id="market-crops-table">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-100/80 text-xs font-black uppercase text-slate-700 tracking-wider">
                <th className="py-3.5 px-4 sm:px-6">#</th>
                <th className="py-3.5 px-4 sm:px-6">{t('market_crop')}</th>
                {/* CONDITIONAL RENDERING OF PRICE COLUMN AS REQUIRED:
                    If isBuyer is true, Price header is omitted/hidden */}
                {!isBuyer && (
                  <th className="py-3.5 px-4 sm:px-6 text-emerald-800">{t('market_price')}</th>
                )}
                <th className="py-3.5 px-4 sm:px-6">{t('market_qty')}</th>
                <th className="py-3.5 px-4 sm:px-6">Farmer / Location</th>
                <th className="py-3.5 px-4 sm:px-6 text-right">{t('market_action')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-sm">
              {marketItems.map((item, index) => (
                <tr
                  key={item.id}
                  id={`crop-row-${item.id}`}
                  className="hover:bg-slate-50/80 transition-colors"
                >
                  <td className="py-4 px-4 sm:px-6 font-bold text-slate-400">
                    {index + 1}
                  </td>
                  <td className="py-4 px-4 sm:px-6">
                    <div className="flex items-center gap-2.5">
                      <span className="text-2xl">
                        {item.crop.toLowerCase().includes('wheat') ? '🌾' :
                         item.crop.toLowerCase().includes('rice') ? '🍚' :
                         item.crop.toLowerCase().includes('tomato') ? '🍅' : '🌱'}
                      </span>
                      <div>
                        <div className="font-extrabold text-slate-900 text-base">{item.crop}</div>
                        <div className="text-xs text-slate-500">{item.mandi}</div>
                      </div>
                    </div>
                  </td>

                  {/* PRICE COLUMN CONDITIONAL RENDERING:
                      In Seller View: Shows ₹{price}
                      In Buyer View: Price column literally hidden (null) */}
                  {isBuyer ? null : (
                    <td className="py-4 px-4 sm:px-6 font-extrabold text-emerald-700 text-base sm:text-lg whitespace-nowrap">
                      ₹{item.price.toLocaleString('en-IN')}
                      <span className="text-xs font-medium text-slate-500 ml-1">/ quintal</span>
                    </td>
                  )}

                  <td className="py-4 px-4 sm:px-6 font-semibold text-slate-700">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 text-xs font-bold text-slate-800">
                      <FaWeightHanging className="text-slate-400 text-[10px]" />
                      {item.qty}
                    </span>
                  </td>

                  <td className="py-4 px-4 sm:px-6">
                    <div className="font-medium text-slate-800 text-xs sm:text-sm">{item.seller}</div>
                    <div className="text-[11px] text-slate-500">Sundarpur East</div>
                  </td>

                  <td className="py-4 px-4 sm:px-6 text-right whitespace-nowrap">
                    {isBuyer ? (
                      <a
                        href={`tel:${item.contact}`}
                        id={`contact-seller-btn-${item.id}`}
                        onClick={() => handleContactSeller(item)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 min-h-[44px] bg-orange-600 hover:bg-orange-700 text-white rounded-xl text-xs font-extrabold transition-transform active:scale-95 shadow cursor-pointer"
                      >
                        <FaPhoneAlt />
                        <span>{t('contact_seller')}</span>
                      </a>
                    ) : (
                      <a
                        href={`tel:${item.contact}`}
                        className="inline-flex items-center gap-1.5 px-3 py-2 min-h-[44px] bg-emerald-100 hover:bg-emerald-200 text-emerald-900 rounded-xl text-xs font-bold transition-colors cursor-pointer"
                      >
                        <FaPhoneAlt className="text-emerald-700" />
                        <span>Call ({item.contact})</span>
                      </a>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Crop Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <FaLeaf className="text-emerald-600" /> Add Crop to Village Mandi
              </h3>
              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                className="text-slate-400 hover:text-slate-600 text-lg p-2 min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddCropSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Crop Name *
                </label>
                <input
                  type="text"
                  required
                  value={newCrop}
                  onChange={(e) => setNewCrop(e.target.value)}
                  placeholder="e.g. Cotton, Onion, Sugarcane"
                  className="w-full px-3 py-2.5 min-h-[44px] border border-slate-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Price (₹) *
                  </label>
                  <input
                    type="number"
                    required
                    value={newPrice}
                    onChange={(e) => setNewPrice(e.target.value)}
                    placeholder="2500"
                    className="w-full px-3 py-2.5 min-h-[44px] border border-slate-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Quantity *
                  </label>
                  <input
                    type="text"
                    required
                    value={newQty}
                    onChange={(e) => setNewQty(e.target.value)}
                    placeholder="100kg / 2 quintals"
                    className="w-full px-3 py-2.5 min-h-[44px] border border-slate-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Farmer Name &amp; Contact Number
                </label>
                <input
                  type="text"
                  value={newSeller}
                  onChange={(e) => setNewSeller(e.target.value)}
                  placeholder="Ramu Farmer (9840123456)"
                  className="w-full px-3 py-2.5 min-h-[44px] border border-slate-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                />
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 py-3 min-h-[44px] bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-sm cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 min-h-[44px] bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl text-sm shadow cursor-pointer"
                >
                  Publish Listing
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}

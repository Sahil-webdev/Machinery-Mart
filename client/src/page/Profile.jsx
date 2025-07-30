// src/pages/UserProfile.jsx
import React, { useState } from "react";
import pfp from "../assets/profile.jpg";

const userData = {
  name: "Arjun Sharma",
  email: "arjun.sharma@email.com",
  phone: "+91 98765 43210",
  profileImage: pfp
};

export default function UserProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(userData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    // Save logic/API yaha laga sakte ho
    setIsEditing(false);
  };

  const handleMyOrders = () => {
    window.location.href = "/my-orders";
  };

  const handleContactUs = () => {
    window.location.href = "/enquiry";
  };

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      localStorage.removeItem('authToken');
      window.location.href = "/login";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 py-8 px-4 pb-22 md:pb-30">
      <div className="max-w-2xl mx-auto">
        {/* Profile Card */}
        <div className="bg-gray-100 rounded-2xl shadow-lg border border-gray-200 p-8 mb-6">
          <div className="text-center mb-8">
            <div className="relative inline-block mb-6">
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600 p-1 shadow-lg">
                <img
                  src={formData.profileImage}
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover border-4 border-white"
                  onError={e => { e.target.src = "/default-avatar.png" }}
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-green-400 to-green-500 rounded-full border-4 border-white flex items-center justify-center">
                <span className="text-white text-sm">✓</span>
              </div>
              {/* Simple Animated Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-blue-400/30 animate-ping"></div>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              My Profile
            </h1>
            <p className="text-gray-600 text-lg">Manage your account information</p>
          </div>
          {/* Profile Info */}
          <div className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name
              </label>
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-5 py-3 bg-gray-50 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none text-gray-800 font-medium"
                  required
                />
              ) : (
                <div className="w-full px-5 py-3 bg-gray-50 rounded-2xl border border-gray-200">
                  <span className="text-gray-800 font-semibold text-lg">{formData.name}</span>
                </div>
              )}
            </div>
            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-5 py-3 bg-gray-50 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 outline-none text-gray-800 font-medium"
                  required
                />
              ) : (
                <div className="w-full px-5 py-3 bg-gray-50 rounded-2xl border border-gray-200">
                  <span className="text-gray-800 font-semibold text-lg">{formData.email}</span>
                </div>
              )}
            </div>
            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Mobile Number
              </label>
              {isEditing ? (
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-5 py-3 bg-gray-50 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none text-gray-800 font-medium"
                  required
                />
              ) : (
                <div className="w-full px-5 py-3 bg-gray-50 rounded-2xl border border-gray-200">
                  <span className="text-gray-800 font-semibold text-lg">{formData.phone}</span>
                </div>
              )}
            </div>
            {/* Edit/Save/Cancel */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              {isEditing ? (
                <>
                  <button
                    onClick={handleSave}
                    className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 px-6 rounded-2xl font-semibold text-lg hover:from-green-600 hover:to-emerald-700 transition"
                  >
                    💾 Save
                  </button>
                  <button
                    onClick={() => {
                      setFormData(userData);
                      setIsEditing(false);
                    }}
                    className="flex-1 bg-gradient-to-r from-gray-500 to-gray-600 text-white py-3 px-6 rounded-2xl font-semibold text-lg hover:from-gray-600 hover:to-gray-700 transition"
                  >
                    ❌ Cancel
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="w-full bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 text-white py-3 px-6 rounded-2xl font-semibold text-lg hover:from-blue-600 hover:to-cyan-700 transition"
                >
                  ✏️ Edit Profile
                </button>
              )}
            </div>
          </div>
        </div>
        {/* Actions */}
        <div className="space-y-4">
          <button
            onClick={handleMyOrders}
            className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 border border-gray-200 text-white py-4 px-8 rounded-2xl font-bold text-lg hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 transition flex items-center justify-between group"
          >
            <div className="flex items-center gap-4">
              <span className="text-xl">My Orders</span>
            </div>
            <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span>
          </button>
          <button
            onClick={handleContactUs}
            className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 border border-gray-200 text-white py-4 px-8 rounded-2xl font-bold text-lg hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 transition flex items-center justify-between group"
          >
            <div className="flex items-center gap-4">
              <span className="text-xl">Enquiry</span>
            </div>
            <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span>
          </button>
          <button
            onClick={handleLogout}
            className="w-full bg-gradient-to-r from-red-500 via-pink-500 to-red-600 border border-gray-200 text-white py-4 px-8 rounded-2xl font-bold text-lg hover:from-red-600 hover:via-pink-600 hover:to-red-700 transition flex items-center justify-center gap-4"
          >
            <span className="text-xl">Logout</span>
          </button>
        </div>
        {/* Support */}
        <div className="text-center mt-8 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <p className="text-gray-600 font-medium">Need help? Contact our support team</p>
          </div>
          <p className="text-blue-600 font-bold text-lg">
            support@machinerymart.com
          </p>
        </div>
      </div>
    </div>
  );
}

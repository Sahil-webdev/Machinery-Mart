// src/components/EnquiryForm.jsx
import React, { useState, useEffect } from "react";

export default function EnquiryForm() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    // Show form after 5 seconds
    const timer = setTimeout(() => setShowForm(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // API call kar sakte hain yahan
    alert("Thank you for your enquiry! We'll contact you soon.");
    setShowForm(false);
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  }

  function closeForm() {
    setShowForm(false);
  }

  if (!showForm) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4 backdrop-blur-sm bg-white/20">
      <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl max-w-lg w-full p-8 relative border border-white/30 animate-slideUp">
        {/* Close Button */}
        <button
          onClick={closeForm}
          aria-label="Close Form"
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 transition-all duration-200 hover:scale-110"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Get Free Quote</h2>
          <p className="text-gray-600 text-sm">Fill out the form and we'll get back to you within 24 hours</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                required
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-blue-500 focus:ring-0 outline-none transition-colors duration-200 bg-white/80"
              />
            </div>
            <div>
              <input
                required
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-blue-500 focus:ring-0 outline-none transition-colors duration-200 bg-white/80"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-blue-500 focus:ring-0 outline-none transition-colors duration-200 bg-white/80"
              />
            </div>
            <div>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-blue-500 focus:ring-0 outline-none transition-colors duration-200 bg-white/80"
              >
                <option value="">Select Service</option>
                <option value="machinery-repair">Machinery Repair</option>
                <option value="maintenance">Maintenance</option>
                <option value="installation">Installation</option>
                <option value="parts-supply">Parts Supply</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <textarea
              required
              name="message"
              placeholder="Tell us about your requirements..."
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-blue-500 focus:ring-0 outline-none transition-colors duration-200 bg-white/80 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg"
          >
            Send Enquiry
          </button>
        </form>

        {/* Footer */}
        <div className="text-center mt-4">
          <p className="text-xs text-gray-500">
            We respect your privacy. Your information is secure with us.
          </p>
        </div>
      </div>
    </div>
  );
}

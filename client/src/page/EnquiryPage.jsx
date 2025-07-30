// src/pages/ContactUs.jsx
import React, { useState, useEffect } from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram,
    FaYoutube,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaClock,
  } from "react-icons/fa";

const contactInfo = {
    address: "123 Industrial Area, Sector 15, Gurgaon, Haryana 122001",
    phone: "+91 88265 89619",
    email: "info@machinerymart.com",
    site: "www.machinerymart.com",
    hours: "Monday - Saturday: 9:00 AM - 7:00 PM",
    emergencySupport: "+91 98765 43210",
}

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        department: ""
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
        // API call logic here
        alert("Thank you for contacting us! We'll get back to you within 24 hours.");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "", department: "" });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden pb-10 md:pb-20">

            {/* Animated Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-200/10 rounded-full blur-2xl animate-bounce"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 py-12">

                {/* Header */}
                <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <h1 className="text-5xl font-black mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Get In Touch
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Have questions about our machinery products or services? We're here to help!
                        Reach out to us and our expert team will assist you with all your industrial needs.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Contact Form */}
                    <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
                        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                            placeholder="Enter your full name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                            placeholder="Enter your phone number"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Department</label>
                                        <select
                                            name="department"
                                            value={formData.department}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                        >
                                            <option value="">Select Department</option>
                                            <option value="sales">Sales Inquiry</option>
                                            <option value="support">Technical Support</option>
                                            <option value="service">Service Booking</option>
                                            <option value="care">Customer Care</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Subject *</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                        placeholder="Enter message subject"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none"
                                        placeholder="Enter your message here..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitted}
                                    className={`w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 transform ${isSubmitted
                                        ? 'bg-green-500 text-white scale-105'
                                        : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 hover:scale-105 shadow-lg hover:shadow-xl'
                                        }`}
                                >
                                    {isSubmitted ? '✓ Message Sent!' : '📧 Send Message'}
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className={`space-y-8 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>



                        {/* info + socials */}
                        <div className="flex flex-col gap-10 animate-fade-right">
                            {/* contact info */}
                            <div className="bg-white/90 backdrop-blur rounded-3xl shadow-2xl p-10 border border-gray-200 space-y-6">
                                <h2 className="text-2xl font-bold mb-4">Informations</h2>
                                <ContactRow icon={<FaMapMarkerAlt />} label={contactInfo.address} />
                                <ContactRow icon={<FaPhoneAlt />} label={contactInfo.phone} />
                                <ContactRow icon={<FaEnvelope />} label={contactInfo.email} />
                                <ContactRow icon={<FaClock />} label={contactInfo.hours} />
                            </div>

                            {/* social */}
                            <div className="bg-white/90 backdrop-blur rounded-3xl shadow-2xl p-8 border border-gray-200 flex flex-col items-center">
                                <h3 className="text-xl font-bold mb-4">Follow&nbsp;Us</h3>
                                <div className="flex gap-4">
                                    <SocialLink Icon={FaFacebookF} color="#1877F2" />
                                    <SocialLink Icon={FaTwitter} color="#1DA1F2" />
                                    <SocialLink Icon={FaLinkedinIn} color="#0A66C2" />
                                    <SocialLink Icon={FaInstagram} color="#E4405F" />
                                    <SocialLink Icon={FaYoutube} color="#FF0000" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ---------- small helpers ---------- */
const ContactRow = ({ icon, label }) => (
    <div className="flex items-start gap-4">
      <div className="text-2xl text-blue-600">{icon}</div>
      <p className="text-gray-700">{label}</p>
    </div>
  );
  
  const SocialLink = ({ Icon, color }) => (
    <a
      href="#"
      className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
      style={{ backgroundColor: color }}
    >
      <Icon className="text-white text-xl" />
    </a>
  );
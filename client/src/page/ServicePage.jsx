// src/pages/ServiceDetails.jsx
import React, { useState, useEffect } from "react";

// Sample service data
const serviceData = {
    id: 1,
    name: "Industrial Machine Maintenance",
    category: "Preventive Maintenance",
    description: "Comprehensive maintenance service for industrial machinery to ensure optimal performance and prevent costly breakdowns. Our certified technicians provide thorough inspection, cleaning, lubrication, and component replacement.",
    price: 2500,
    originalPrice: 3000,
    discount: 17,
    duration: "2-4 hours",
    warranty: "6 months",
    rating: 4.9,
    reviewCount: 89,
    availability: "Available",
    images: [
        "https://media.gettyimages.com/id/155909002/photo/industrial-sewing-machines.jpg?s=612x612&w=gi&k=20&c=e854lJBmrPgu50pVvSUuWZt1YAJR1VEU-htgVegKJsI=",
    ],
    features: [
        "Complete machinery inspection",
        "Preventive maintenance checklist",
        "Component lubrication & cleaning",
        "Performance optimization",
        "Detailed maintenance report",
        "6-month service warranty"
    ],
    inclusions: [
        "Labor charges included",
        "Basic consumables provided",
        "Transportation within city limits",
        "Digital service report",
        "Follow-up support call"
    ],
    timeSlots: [
        "09:00 AM - 12:00 PM",
        "01:00 PM - 04:00 PM",
        "05:00 PM - 08:00 PM"
    ],
    serviceProcess: [
        { step: 1, title: "Initial Assessment", desc: "Thorough inspection of your machinery" },
        { step: 2, title: "Maintenance Plan", desc: "Custom maintenance schedule creation" },
        { step: 3, title: "Service Execution", desc: "Professional maintenance service" },
        { step: 4, title: "Quality Check", desc: "Final testing and performance verification" }
    ]
};

const relatedServices = [
    { id: 2, name: "Emergency Repair", price: 3500, image: "/service-repair.jpg", rating: 4.7 },
    { id: 3, name: "Installation Service", price: 4000, image: "/service-installation.jpg", rating: 4.8 },
    { id: 4, name: "Equipment Calibration", price: 2000, image: "/service-calibration.jpg", rating: 4.6 },
    { id: 5, name: "Safety Inspection", price: 1800, image: "/service-safety.jpg", rating: 4.9 }
];

const reviews = [
    {
        id: 1,
        user: "Manufacturing Corp",
        rating: 5,
        date: "20 Jul 2025",
        comment: "Excellent service! Our machines are running smoothly after the maintenance. Highly professional team."
    },
    {
        id: 2,
        user: "Priya Industries",
        rating: 5,
        date: "15 Jul 2025",
        comment: "Very satisfied with the service quality. Technician was knowledgeable and completed work on time."
    },
    {
        id: 3,
        user: "Kumar Engineering",
        rating: 4,
        date: "10 Jul 2025",
        comment: "Good maintenance service. Detailed report provided and follow-up was helpful."
    }
];

export default function ServiceDetails() {
    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [activeTab, setActiveTab] = useState("overview");
    const [isBooked, setIsBooked] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    // Animation effects
    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);

        // Trigger entrance animations
        setTimeout(() => setIsVisible(true), 100);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleBookService = () => {
        if (!selectedDate || !selectedTime) {
            alert("Please select date and time slot");
            return;
        }
        setIsBooked(true);
        setTimeout(() => setIsBooked(false), 3000);
        alert(`Service booked for ${selectedDate} at ${selectedTime}!`);
    };

    const handleGetQuote = () => {
        alert("Redirecting to custom quote form...");
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-white relative overflow-hidden pb-5 md:pb-20">

            {/* Animated Background Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute -top-20 -right-20 w-40 h-40 bg-blue-200/30 rounded-full blur-2xl animate-pulse"
                    style={{ transform: `translateY(${scrollY * 0.1}px)` }}
                ></div>
                <div
                    className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000"
                    style={{ transform: `translateY(${-scrollY * 0.05}px)` }}
                ></div>
                <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-cyan-200/10 rounded-full blur-xl animate-bounce"></div>
            </div>


            <div className="relative max-w-7xl mx-auto px-4 py-8">

                {/* Hero Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">

                    {/* Service Images */}
                    <div className={`space-y-4 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
                        {/* Main Image */}
                        <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden group">
                            <div className="aspect-video">
                                <img
                                    src={serviceData.images[selectedImage]}
                                    alt={serviceData.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    onError={(e) => { e.target.src = "/default-service.png"; }}
                                />
                            </div>

                            {/* Discount Badge */}
                            {serviceData.discount > 0 && (
                                <div className="absolute top-6 left-6 bg-gradient-to-r from-red-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold animate-bounce shadow-lg">
                                    Save {serviceData.discount}%
                                </div>
                            )}

                            {/* Availability Badge */}
                            <div className="absolute top-6 right-6">
                                <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">
                                    ✓ {serviceData.availability}
                                </span>
                            </div>

                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                                <button className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform">
                                    <span className="text-2xl text-blue-600">▶️</span>
                                </button>
                            </div>
                        </div>

                    </div>

                    {/* Service Info */}
                    <div className={`space-y-6 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>

                        {/* Header */}
                        <div className="space-y-4">
                            <div className="inline-block px-4 py-2 bg-blue-100 rounded-full">
                                <span className="text-blue-600 text-sm font-semibold">{serviceData.category}</span>
                            </div>

                            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                {serviceData.name}
                            </h1>

                            {/* Rating */}
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className={`text-xl ${i < Math.floor(serviceData.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
                                            ⭐
                                        </span>
                                    ))}
                                    <span className="text-gray-700 ml-2 font-bold">{serviceData.rating}</span>
                                </div>
                                <span className="text-gray-500">({serviceData.reviewCount} reviews)</span>
                            </div>
                        </div>

                        {/* Pricing */}
                        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-200">
                            <div className="flex items-end gap-4 mb-3">
                                <span className="text-4xl font-black text-blue-600">₹{serviceData.price.toLocaleString()}</span>
                                {serviceData.originalPrice > serviceData.price && (
                                    <span className="text-xl text-gray-500 line-through">₹{serviceData.originalPrice.toLocaleString()}</span>
                                )}
                            </div>
                            <div className="flex items-center gap-6 text-sm text-gray-600">
                                <div className="flex items-center gap-2">
                                    <span>⏱️</span>
                                    <span>Duration: {serviceData.duration}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span>🛡️</span>
                                    <span>Warranty: {serviceData.warranty}</span>
                                </div>
                            </div>
                        </div>

                        {/* Key Features */}
                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Service Includes:</h3>
                            <div className="grid grid-cols-1 gap-3">
                                {serviceData.features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-3 text-gray-700 transform transition-all duration-500 hover:text-blue-600 hover:translate-x-2"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Technician Info */}
                        {/* <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-200">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Assigned Technician</h3>
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center overflow-hidden">
                                    <img
                                        src={serviceData.technician.image}
                                        alt={serviceData.technician.name}
                                        className="w-full h-full object-cover"
                                        onError={(e) => { e.target.src = "/default-avatar.png"; }}
                                    />
                                </div>
                                <div className="flex-1">
                                    <p className="font-bold text-gray-900">{serviceData.technician.name}</p>
                                    <p className="text-sm text-gray-600">{serviceData.technician.experience} • {serviceData.technician.specialization}</p>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="text-yellow-400">⭐</span>
                                        <span className="text-sm text-gray-600">{serviceData.technician.rating} • {serviceData.technician.completedServices} services</span>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                        {/* Booking Section */}
                        <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-200">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Book This Service</h3>

                            {/* Date Selection */}
                            <div className="mb-4">
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Select Date</label>
                                <input
                                    type="date"
                                    value={selectedDate}
                                    onChange={(e) => setSelectedDate(e.target.value)}
                                    min={new Date().toISOString().split('T')[0]}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                />
                            </div>

                            {/* Time Slot Selection */}
                            <div className="mb-6">
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Select Time Slot</label>
                                <div className="grid grid-cols-1 gap-2">
                                    {serviceData.timeSlots.map((slot, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setSelectedTime(slot)}
                                            className={`p-3 rounded-xl border-2 transition-all duration-300 text-left ${selectedTime === slot
                                                ? 'border-blue-500 bg-blue-50 text-blue-700 font-semibold'
                                                : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                                                }`}
                                        >
                                            {slot}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={handleBookService}
                                    className={`flex-1 relative overflow-hidden py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-500 transform ${isBooked
                                        ? 'bg-green-500 text-white scale-105 shadow-2xl shadow-green-500/50'
                                        : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 hover:scale-105 shadow-xl shadow-blue-500/30'
                                        }`}
                                >
                                    <span className="relative z-10">
                                        {isBooked ? '✓ Service Booked!' : '📅 Book Now'}
                                    </span>
                                    {!isBooked && (
                                        <div className="absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                    )}
                                </button>

                                <button
                                    onClick={handleGetQuote}
                                    className="flex-1 bg-white border-2 border-blue-600 text-blue-600 py-4 px-6 rounded-2xl font-bold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
                                >
                                    💬 Get Quote
                                </button>
                            </div>
                        </div>

                        {/* Trust Badges */}
                        <div className="grid grid-cols-3 gap-4">
                            <div className="text-center p-4 bg-white/50 rounded-xl backdrop-blur-sm">
                                <div className="text-2xl mb-2">🔧</div>
                                <p className="text-xs text-gray-600 font-medium">Certified Service</p>
                            </div>
                            <div className="text-center p-4 bg-white/50 rounded-xl backdrop-blur-sm">
                                <div className="text-2xl mb-2">🛡️</div>
                                <p className="text-xs text-gray-600 font-medium">Service Warranty</p>
                            </div>
                            <div className="text-center p-4 bg-white/50 rounded-xl backdrop-blur-sm">
                                <div className="text-2xl mb-2">📞</div>
                                <p className="text-xs text-gray-600 font-medium">24/7 Support</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Service Details Tabs */}
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl mb-16 border border-white/50">
                    {/* Tab Headers */}
                    <div className="border-b border-gray-200">
                        <div className="flex flex-wrap justify-center gap-2 p-2">
                            {[
                                { id: 'overview', label: 'Overview', icon: '📋' },
                                { id: 'process', label: 'Service Process', icon: '⚙️' },
                                { id: 'inclusions', label: 'Inclusions', icon: '✅' },
                                { id: 'reviews', label: `Reviews (${serviceData.reviewCount})`, icon: '⭐' }
                            ].map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${activeTab === tab.id
                                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transform scale-105'
                                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                                        }`}
                                >
                                    <span className="text-lg">{tab.icon}</span>
                                    <span className="hidden sm:inline">{tab.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Tab Content */}
                    <div className="p-8">
                        {activeTab === 'overview' && (
                            <div className="space-y-6 animate-fadeIn">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Service Overview</h2>
                                <p className="text-gray-700 text-lg leading-relaxed">{serviceData.description}</p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                                    <div className="bg-blue-50 rounded-2xl p-6">
                                        <h3 className="text-xl font-bold text-blue-900 mb-4">Why Choose This Service?</h3>
                                        <ul className="space-y-2 text-blue-800">
                                            <li className="flex items-center gap-2">
                                                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                                Professional certified technicians
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                                Advanced diagnostic equipment
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                                Genuine parts and materials
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                                Comprehensive service warranty
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-purple-50 rounded-2xl p-6">
                                        <h3 className="text-xl font-bold text-purple-900 mb-4">Service Benefits</h3>
                                        <ul className="space-y-2 text-purple-800">
                                            <li className="flex items-center gap-2">
                                                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                                                Increased machine efficiency
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                                                Reduced downtime and costs
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                                                Extended equipment lifespan
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                                                Preventive issue detection
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'process' && (
                            <div className="animate-fadeIn">
                                <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Service Process</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {serviceData.serviceProcess.map((process, index) => (
                                        <div
                                            key={process.step}
                                            className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                                            style={{ animationDelay: `${index * 200}ms` }}
                                        >
                                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                                                <span className="text-white font-bold text-lg">{process.step}</span>
                                            </div>
                                            <h3 className="font-bold text-gray-900 mb-2">{process.title}</h3>
                                            <p className="text-gray-600 text-sm">{process.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === 'inclusions' && (
                            <div className="animate-fadeIn">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">What's Included</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="text-xl font-bold text-green-700 mb-4">✅ Included in Service</h3>
                                        <div className="space-y-3">
                                            {serviceData.inclusions.map((inclusion, index) => (
                                                <div key={index} className="flex items-center gap-3 text-gray-700 bg-green-50 p-3 rounded-lg">
                                                    <span className="text-green-600 text-lg">✓</span>
                                                    <span>{inclusion}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-red-700 mb-4">❌ Not Included</h3>
                                        <div className="space-y-3">
                                            {[
                                                "Replacement parts (if required)",
                                                "Transportation beyond city limits",
                                                "Emergency service charges",
                                                "Additional repairs not in scope"
                                            ].map((exclusion, index) => (
                                                <div key={index} className="flex items-center gap-3 text-gray-700 bg-red-50 p-3 rounded-lg">
                                                    <span className="text-red-600 text-lg">✗</span>
                                                    <span>{exclusion}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'reviews' && (
                            <div className="animate-fadeIn space-y-6">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Customer Reviews</h2>
                                {reviews.map((review, index) => (
                                    <div
                                        key={review.id}
                                        className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
                                        style={{ animationDelay: `${index * 200}ms` }}
                                    >
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                                                    <span className="text-white font-bold text-lg">{review.user.charAt(0)}</span>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-gray-900">{review.user}</p>
                                                    <p className="text-gray-500 text-sm">{review.date}</p>
                                                </div>
                                            </div>
                                            <div className="flex">
                                                {[...Array(5)].map((_, i) => (
                                                    <span key={i} className={`text-lg ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}>
                                                        ⭐
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-gray-700">{review.comment}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Related Services */}
                <div className="mb-16">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Related Services
                        </span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {relatedServices.map((service, index) => (
                            <div
                                key={service.id}
                                className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-rotate-1 cursor-pointer"
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                <div className="aspect-video bg-gray-100 overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        onError={(e) => { e.target.src = "/default-service.png"; }}
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="font-bold text-gray-900 mb-2 truncate">{service.name}</h3>
                                    <div className="flex items-center justify-between">
                                        <span className="text-blue-600 font-bold text-lg">₹{service.price.toLocaleString()}</span>
                                        <div className="flex items-center gap-1">
                                            <span className="text-yellow-400">⭐</span>
                                            <span className="text-gray-600 text-sm">{service.rating}</span>
                                        </div>
                                    </div>
                                    <button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-semibold">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Floating Contact Button */}
            <div className="fixed bottom-8 right-8 z-50">
                <button className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full shadow-2xl shadow-green-500/50 flex items-center justify-center text-white hover:scale-110 transition-all duration-300 animate-bounce">
                    <span className="text-2xl">💬</span>
                </button>
            </div>

            {/* CSS Animations */}
            <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
        </div>
    );
}

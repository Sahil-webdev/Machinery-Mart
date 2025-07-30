// src/pages/Checkout.jsx
import React, { useState, useEffect } from "react";
import {
    FaCreditCard,
    FaPaypal,
    FaUniversity,
    FaMobile,
    FaShieldAlt,
    FaTruck,
    FaCheckCircle
} from "react-icons/fa";
import hp from "../assets/hpimg.jpeg"
import eg from "../assets/electricgrinder.jpg"
import helmetset from "../assets/safetyhelmetset.jpeg"

// Sample cart data (this would come from your cart state/context)
const cartItems = [
    {
        id: 1,
        name: "Industrial Hydraulic Pump HP-2500",
        quantity: 1,
        price: 45000,
        image: hp
    },
    {
        id: 2,
        name: "Electric Grinder Pro-150",
        quantity: 2,
        price: 12500,
        image: eg
    },
    {
        id: 3,
        name: "Safety Helmet Set",
        quantity: 3,
        price: 850,
        image: helmetset
    },
];

const paymentMethods = [
    { id: "card", label: "Credit/Debit Card", icon: FaCreditCard, desc: "Visa, Mastercard, RuPay" },
    { id: "upi", label: "UPI Payment", icon: FaMobile, desc: "Google Pay, PhonePe, Paytm" },
    { id: "netbanking", label: "Net Banking", icon: FaUniversity, desc: "All major banks" },
    { id: "cod", label: "Cash on Delivery", icon: FaTruck, desc: "Pay when you receive" },
]

export default function Checkout() {
    const [currentStep, setCurrentStep] = useState(1);
    const [isVisible, setIsVisible] = useState(false);
    const [orderPlaced, setOrderPlaced] = useState(false);

    const [shippingInfo, setShippingInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        company: ""
    });

    const [billingInfo, setBillingInfo] = useState({
        sameAsShipping: true,
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        state: "",
        pincode: ""
    });

    const [paymentInfo, setPaymentInfo] = useState({
        method: "",
        cardNumber: "",
        expiryDate: "",
        cvv: "",
        cardName: "",
        upiId: "",
        bankName: ""
    });

    // Calculations
    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 50000 ? 0 : 500;
    const tax = Math.round(subtotal * 0.18);
    const total = subtotal + shipping + tax;

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    const handleShippingChange = (e) => {
        const { name, value } = e.target;
        setShippingInfo(prev => ({ ...prev, [name]: value }));
    };

    const handleBillingChange = (e) => {
        const { name, value, type, checked } = e.target;
        setBillingInfo(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handlePaymentChange = (e) => {
        const { name, value } = e.target;
        setPaymentInfo(prev => ({ ...prev, [name]: value }));
    };

    const handleNextStep = () => {
        if (currentStep < 4) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handlePrevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handlePlaceOrder = () => {
        setOrderPlaced(true);
        // Here you would typically send the order to your backend
        alert(`Order placed successfully! Total: ₹${total.toLocaleString()}`);
    };

    const steps = [
        { id: 1, title: "Shipping", icon: "📦" },
        { id: 2, title: "Payment", icon: "💳" },
        { id: 3, title: "Review", icon: "✅" }
    ];

    if (orderPlaced) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 flex items-center justify-center px-4">
                <div className="max-w-md mx-auto text-center bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
                    <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                        <FaCheckCircle className="text-white text-3xl" />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Confirmed!</h1>
                    <p className="text-gray-600 mb-6">
                        Thank you for your purchase. Your order has been placed successfully and will be processed soon.
                    </p>
                    <div className="bg-gray-50 rounded-xl p-4 mb-6">
                        <p className="text-sm text-gray-600">Order Total</p>
                        <p className="text-2xl font-bold text-blue-600">₹{total.toLocaleString()}</p>
                    </div>
                    <button
                        onClick={() => window.location.href = "/my-orders"}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                    >
                        Track Your Order
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8 pb-25 md:pb-30">

            {/* Header */}
            <div className={`text-center mb-8 px-4 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                    Checkout
                </h1>
                <p className="text-gray-600">Complete your purchase in a few simple steps</p>
            </div>

            {/* Progress Indicator */}
            <div className={`flex justify-center mb-12 px-4 transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="flex items-center space-x-4">
                    {steps.map((step, index) => (
                        <div key={step.id} className="flex items-center">
                            <div className={`relative w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${currentStep >= step.id
                                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white scale-110'
                                : 'bg-gray-200 text-gray-600'
                                }`}>
                                <span className="text-lg">{step.icon}</span>
                                {currentStep > step.id && (
                                    <div className="absolute inset-0 bg-green-500 rounded-full flex items-center justify-center">
                                        <span className="text-white">✓</span>
                                    </div>
                                )}
                            </div>
                            {index < steps.length - 1 && (
                                <div className={`w-6 md:w-16 h-1 mx-2 transition-all duration-300 ${currentStep > step.id ? 'bg-gradient-to-r from-blue-500 to-purple-600' : 'bg-gray-200'
                                    }`}></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Main Form */}
                    <div className="lg:col-span-2">
                        <div className={`bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-8 transition-all duration-1000 delay-400 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>

                            {/* Step 1: Shipping Information */}
                            {currentStep === 1 && (
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                        <span className="text-3xl">📦</span>
                                        Shipping Information
                                    </h2>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
                                            <input
                                                type="text"
                                                name="firstName"
                                                value={shippingInfo.firstName}
                                                onChange={handleShippingChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                                placeholder="Enter first name"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
                                            <input
                                                type="text"
                                                name="lastName"
                                                value={shippingInfo.lastName}
                                                onChange={handleShippingChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                                placeholder="Enter last name"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={shippingInfo.email}
                                                onChange={handleShippingChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                                placeholder="Enter email address"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={shippingInfo.phone}
                                                onChange={handleShippingChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                                placeholder="Enter phone number"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name (Optional)</label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={shippingInfo.company}
                                            onChange={handleShippingChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                            placeholder="Enter company name"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Address *</label>
                                        <textarea
                                            name="address"
                                            value={shippingInfo.address}
                                            onChange={handleShippingChange}
                                            required
                                            rows={3}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none"
                                            placeholder="Enter complete address"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">City *</label>
                                            <input
                                                type="text"
                                                name="city"
                                                value={shippingInfo.city}
                                                onChange={handleShippingChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                                placeholder="Enter city"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">State *</label>
                                            <select
                                                name="state"
                                                value={shippingInfo.state}
                                                onChange={handleShippingChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                            >
                                                <option value="">Select State</option>
                                                <option value="Haryana">Haryana</option>
                                                <option value="Delhi">Delhi</option>
                                                <option value="Uttar Pradesh">Uttar Pradesh</option>
                                                <option value="Punjab">Punjab</option>
                                                <option value="Rajasthan">Rajasthan</option>
                                                {/* Add more states as needed */}
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">PIN Code *</label>
                                            <input
                                                type="text"
                                                name="pincode"
                                                value={shippingInfo.pincode}
                                                onChange={handleShippingChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                                placeholder="Enter PIN code"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}


                            {/* Step 2: Payment Method */}
                            {currentStep === 2 && (
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                        <span className="text-3xl">💳</span>
                                        Payment Method
                                    </h2>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {paymentMethods.map((method) => (
                                            <button
                                                key={method.id}
                                                type="button"
                                                onClick={() => setPaymentInfo(prev => ({ ...prev, method: method.id }))}
                                                className={`p-6 rounded-2xl border-2 text-left transition-all duration-300 transform hover:scale-105 ${paymentInfo.method === method.id
                                                    ? 'border-blue-500 bg-blue-50 shadow-lg'
                                                    : 'border-gray-200 hover:border-blue-300'
                                                    }`}
                                            >
                                                <div className="flex items-center gap-4 mb-2">
                                                    <method.icon className="text-2xl text-blue-600" />
                                                    <h3 className="font-bold text-gray-900">{method.label}</h3>
                                                </div>
                                                <p className="text-gray-600 text-sm">{method.desc}</p>
                                            </button>
                                        ))}
                                    </div>

                                    {/* Payment Details */}
                                    {paymentInfo.method && (
                                        <div className="mt-8 p-6 bg-gray-50 rounded-2xl">
                                            {paymentInfo.method === 'card' && (
                                                <div className="space-y-4">
                                                    <h3 className="font-bold text-gray-900 mb-4">Card Details</h3>
                                                    <div>
                                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Card Number *</label>
                                                        <input
                                                            type="text"
                                                            name="cardNumber"
                                                            value={paymentInfo.cardNumber}
                                                            onChange={handlePaymentChange}
                                                            placeholder="1234 5678 9012 3456"
                                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                                        />
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-4">
                                                        <div>
                                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Expiry Date *</label>
                                                            <input
                                                                type="text"
                                                                name="expiryDate"
                                                                value={paymentInfo.expiryDate}
                                                                onChange={handlePaymentChange}
                                                                placeholder="MM/YY"
                                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                                            />
                                                        </div>
                                                        <div>
                                                            <label className="block text-sm font-semibold text-gray-700 mb-2">CVV *</label>
                                                            <input
                                                                type="text"
                                                                name="cvv"
                                                                value={paymentInfo.cvv}
                                                                onChange={handlePaymentChange}
                                                                placeholder="123"
                                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Cardholder Name *</label>
                                                        <input
                                                            type="text"
                                                            name="cardName"
                                                            value={paymentInfo.cardName}
                                                            onChange={handlePaymentChange}
                                                            placeholder="Enter name on card"
                                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                                        />
                                                    </div>
                                                </div>
                                            )}

                                            {paymentInfo.method === 'upi' && (
                                                <div>
                                                    <h3 className="font-bold text-gray-900 mb-4">UPI Details</h3>
                                                    <div>
                                                        <label className="block text-sm font-semibold text-gray-700 mb-2">UPI ID *</label>
                                                        <input
                                                            type="text"
                                                            name="upiId"
                                                            value={paymentInfo.upiId}
                                                            onChange={handlePaymentChange}
                                                            placeholder="example@paytm"
                                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                                        />
                                                    </div>
                                                </div>
                                            )}

                                            {paymentInfo.method === 'netbanking' && (
                                                <div>
                                                    <h3 className="font-bold text-gray-900 mb-4">Net Banking</h3>
                                                    <div>
                                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Select Bank *</label>
                                                        <select
                                                            name="bankName"
                                                            value={paymentInfo.bankName}
                                                            onChange={handlePaymentChange}
                                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                                        >
                                                            <option value="">Choose your bank</option>
                                                            <option value="sbi">State Bank of India</option>
                                                            <option value="hdfc">HDFC Bank</option>
                                                            <option value="icici">ICICI Bank</option>
                                                            <option value="axis">Axis Bank</option>
                                                            <option value="pnb">Punjab National Bank</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            )}

                                            {paymentInfo.method === 'cod' && (
                                                <div className="text-center">
                                                    <h3 className="font-bold text-gray-900 mb-2">Cash on Delivery</h3>
                                                    <p className="text-gray-600">You will pay ₹{total.toLocaleString()} when the order is delivered.</p>
                                                    <div className="mt-4 p-4 bg-yellow-100 rounded-lg">
                                                        <p className="text-yellow-800 text-sm">
                                                            ⚠️ COD orders may take 1-2 additional days for processing
                                                        </p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Step 3: Order Review */}
                            {currentStep === 3 && (
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                        <span className="text-3xl">✅</span>
                                        Review Your Order
                                    </h2>

                                    {/* Order Items */}
                                    <div className="bg-gray-50 rounded-2xl p-6">
                                        <h3 className="font-bold text-gray-900 mb-4">Order Items</h3>
                                        {cartItems.map((item) => (
                                            <div key={item.id} className="flex items-center justify-between py-3 border-b border-gray-200 last:border-b-0">
                                                <div className="flex items-center gap-4">
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="w-16 h-16 object-cover rounded-lg"
                                                        onError={(e) => { e.target.src = "/default-product.png"; }}
                                                    />
                                                    <div>
                                                        <h4 className="font-semibold text-gray-900">{item.name}</h4>
                                                        <p className="text-gray-600">Qty: {item.quantity}</p>
                                                    </div>
                                                </div>
                                                <p className="font-bold text-gray-900">₹{(item.price * item.quantity).toLocaleString()}</p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Shipping Address */}
                                    <div className="bg-blue-50 rounded-2xl p-6">
                                        <h3 className="font-bold text-gray-900 mb-4">Shipping Address</h3>
                                        <div className="text-gray-700">
                                            <p className="font-semibold">{shippingInfo.firstName} {shippingInfo.lastName}</p>
                                            {shippingInfo.company && <p>{shippingInfo.company}</p>}
                                            <p>{shippingInfo.address}</p>
                                            <p>{shippingInfo.city}, {shippingInfo.state} {shippingInfo.pincode}</p>
                                            <p>📞 {shippingInfo.phone}</p>
                                            <p>📧 {shippingInfo.email}</p>
                                        </div>
                                    </div>

                                    {/* Payment Method */}
                                    <div className="bg-green-50 rounded-2xl p-6">
                                        <h3 className="font-bold text-gray-900 mb-4">Payment Method</h3>
                                        <p className="text-gray-700">
                                            {paymentMethods.find(method => method.id === paymentInfo.method)?.label}
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* Navigation Buttons */}
                            <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                                {currentStep > 1 ? (
                                    <button
                                        type="button"
                                        onClick={handlePrevStep}
                                        className="bg-gray-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-600 transition-all duration-300 transform hover:scale-105"
                                    >
                                        ← Previous
                                    </button>
                                ) : (
                                    <span></span>
                                )}

                                {currentStep < 3 ? (
                                    <button
                                        type="button"
                                        onClick={handleNextStep}
                                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                                    >
                                        Next Step →
                                    </button>
                                ) : (
                                    <button
                                        type="button"
                                        onClick={handlePlaceOrder}
                                        className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 text-center rounded-xl font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                                    >
                                        Place Order
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Order Summary Sidebar */}
                    <div className="lg:col-span-1">
                        <div className={`bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-6 sticky top-8 transition-all duration-1000 delay-600 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <span>🛒</span>
                                Order Summary
                            </h2>

                            {/* Cart Items */}
                            <div className="space-y-4 mb-6">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-12 h-12 object-cover rounded-lg"
                                            onError={(e) => { e.target.src = "/default-product.png"; }}
                                        />
                                        <div className="flex-1 flex-nowrap w-10">
                                            <h4 className="font-semibold text-gray-900 text-sm truncate">{item.name}</h4>
                                            <p className="text-gray-600 text-sm">Qty: {item.quantity}</p>
                                        </div>
                                        <p className="font-bold text-gray-900">₹{(item.price * item.quantity).toLocaleString()}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Price Breakdown */}
                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Subtotal</span>
                                    <span className="font-medium">₹{subtotal.toLocaleString()}</span>
                                </div>

                                <div className="flex justify-between">
                                    <span className="text-gray-600">Shipping</span>
                                    <span className="font-medium">
                                        {shipping === 0 ? (
                                            <span className="text-green-600">Free</span>
                                        ) : (
                                            `₹${shipping}`
                                        )}
                                    </span>
                                </div>

                                <div className="flex justify-between">
                                    <span className="text-gray-600">GST (18%)</span>
                                    <span className="font-medium">₹{tax.toLocaleString()}</span>
                                </div>

                                <div className="border-t border-gray-200 pt-3">
                                    <div className="flex justify-between">
                                        <span className="font-bold text-gray-900 text-lg">Total</span>
                                        <span className="font-bold text-2xl text-blue-600">₹{total.toLocaleString()}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Security Badge */}
                            <div className="bg-green-50 rounded-xl p-4 text-center">
                                <FaShieldAlt className="text-3xl text-green-600 mx-auto mb-2" />
                                <p className="text-green-800 font-semibold text-sm">Secure Checkout</p>
                                <p className="text-green-700 text-xs">Your payment information is protected</p>
                            </div>

                            {/* Free Shipping Notice */}
                            {shipping > 0 && (
                                <div className="mt-4 bg-blue-50 rounded-xl p-4 text-center">
                                    <p className="text-blue-700 text-sm font-medium">
                                        🚚 Add ₹{(50000 - subtotal).toLocaleString()} more for free shipping!
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

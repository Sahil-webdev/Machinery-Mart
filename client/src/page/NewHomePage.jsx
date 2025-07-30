"use client"

import { useState, useEffect } from "react"
import crane from "../assets/machine.jpg"
import hpimg from "../assets/hpimg.jpeg"
import electricgrinder from "../assets/electricgrinder.jpg"
import cuttingblade from "../assets/cuttingblade.jpeg"
import weldingtorch from "../assets/weldingtorch.jpeg"
import { Link } from "react-router-dom"
import EnquiryForm from "../component/EnquiryForm"

// Custom Button Component
const Button = ({ children, className = "", variant = "default", size = "default", ...props }) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"

  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 shadow-lg hover:shadow-xl",
    outline: "border-2 border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50 focus:ring-gray-500",
    ghost: "text-gray-700 hover:bg-gray-100 focus:ring-gray-500",
  }

  const sizes = {
    default: "h-10 px-4 py-2 text-sm",
    sm: "h-9 px-3 text-sm",
    lg: "h-12 px-8 py-3 text-lg",
  }

  return (
    <button className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  )
}

// Custom Card Components
const Card = ({ children, className = "", ...props }) => (
  <div className={`rounded-xl border border-gray-200 bg-white shadow-sm ${className}`} {...props}>
    {children}
  </div>
)

const CardContent = ({ children, className = "", ...props }) => (
  <div className={`p-6 ${className}`} {...props}>
    {children}
  </div>
)

// Custom Badge Component
const Badge = ({ children, className = "", ...props }) => (
  <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${className}`} {...props}>
    {children}
  </span>
)

// Custom Icons
const ShoppingCart = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5-6m0 0h15M17 21a2 2 0 100-4 2 2 0 000 4zM9 21a2 2 0 100-4 2 2 0 000 4z"
    />
  </svg>
)

const User = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
)

const Menu = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
)

const X = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
)

const ArrowRight = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

const Star = ({ className = "w-4 h-4", filled = false }) => (
  <svg className={className} fill={filled ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
    />
  </svg>
)

const Play = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
      clipRule="evenodd"
    />
  </svg>
)

const Phone = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
)

const MessageCircle = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
    />
  </svg>
)

// Add this new WhatsApp icon component after the other icon components
const WhatsApp = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
  </svg>
)

const Settings = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const CheckCircle = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
)

// Feature Icons
const Wrench = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const Clock = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

const Shield = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
)

const Quote = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
      clipRule="evenodd"
    />
  </svg>
)

export default function MachineryMartHome() {
  const [isVisible, setIsVisible] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const tools = [
    {
      id: 1,
      name: "Hydraulic Pump",
      price: "₹4,200",
      originalPrice: "₹5,200",
      img: hpimg,
      rating: 4.8,
      reviews: 124,
    },
    {
      id: 2,
      name: "Electric Grinder",
      price: "₹2,100",
      originalPrice: "₹2,800",
      img: electricgrinder,
      rating: 4.6,
      reviews: 89,
    },
    {
      id: 3,
      name: "Cutting Blade",
      price: "₹350",
      originalPrice: "₹450",
      img: cuttingblade,
      rating: 4.9,
      reviews: 203,
    },
    {
      id: 4,
      name: "Welding Torch",
      price: "₹1,800",
      originalPrice: "₹2,200",
      img: weldingtorch,
      rating: 4.7,
      reviews: 156,
    },
  ]

  const categories = [
    {
      name: "Hydraulic Tools",
      icon: "💧",
      gradient: "bg-gradient-to-br from-blue-500 to-cyan-500",
      count: "150+ items",
    },
    {
      name: "Electrical Parts",
      icon: "⚡",
      gradient: "bg-gradient-to-br from-yellow-500 to-orange-500",
      count: "200+ items",
    },
    {
      name: "Cutting Tools",
      icon: "🛠️",
      gradient: "bg-gradient-to-br from-green-500 to-emerald-500",
      count: "180+ items",
    },
    {
      name: "Safety Equipment",
      icon: "🦺",
      gradient: "bg-gradient-to-br from-red-500 to-pink-500",
      count: "120+ items",
    },
  ]

  const testimonials = [
    {
      name: "Arjun Sharma",
      text: "Original parts & quick service, highly recommended! The quality exceeded my expectations.",
      rating: 5,
      location: "Mumbai",
    },
    {
      name: "Divya Tiwari",
      text: "Support 24x7 and certified engineers. Bahut badiya! Professional service at its best.",
      rating: 5,
      location: "Delhi",
    },
    {
      name: "WorkshopX Industries",
      text: "Sahi price, asaan booking, super satisfied! Great experience for bulk orders.",
      rating: 5,
      location: "Pune",
    },
  ]

  const features = [
    { icon: Wrench, title: "Certified Technicians", desc: "Expert professionals with industry certifications" },
    { icon: Clock, title: "On-time Service", desc: "Guaranteed timely delivery and service" },
    { icon: Shield, title: "Genuine Parts Warranty", desc: "100% authentic parts with full warranty" },
    { icon: Phone, title: "Support 24x7", desc: "Round-the-clock customer support" },
  ]

  const stats = [
    { number: "500+", label: "Happy Factories" },
    { number: "10K+", label: "Tools Sold" },
    { number: "24/7", label: "Support" },
    { number: "99%", label: "Satisfaction" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <EnquiryForm />
      {/* Modern Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-lg border-b border-gray-200/50 z-50 transition-all duration-300">
        <nav className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex justify-between items-center">
            <div
              className={`text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
            >
              MachineryMart
            </div>

            {/* Desktop Navigation */}
            {/* <ul className="hidden lg:flex gap-8 items-center">
              {["Home", "Tools/Parts", "Services", "Offers", "About Us", "Contact"].map((item, index) => (
                <li
                  key={item}
                  className={`text-gray-700 hover:text-blue-600 font-medium cursor-pointer transition-all duration-300 relative group ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
                    }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                </li>
              ))}
            </ul> */}

            <div className="flex gap-4 items-center mr-5">
              <Link to="/login-signup">
                <Button variant="ghost" className="hidden md:flex text-gray-700 hover:text-blue-600">
                  <User className="w-7 h-7 mr-2" />
                  {/* Login / Signup */}
                </Button>
              </Link>
              <Link to="/cart">
                <Button variant="ghost" size="sm" className="relative">
                  <ShoppingCart className="w-7 h-7" />
                  <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full min-w-[20px] h-5 flex items-center justify-center">
                    3
                  </Badge>
                </Button>
              </Link>

              {/* Mobile Menu Button */}
              {/* <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button> */}
            </div>
          </div>

          {/* Mobile Menu */}
          {/* {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 animate-in slide-in-from-top duration-300">
              <ul className="flex flex-col space-y-4 pt-4">
                {["Home", "Tools/Parts", "Services", "Offers", "About Us", "Contact"].map((item) => (
                  <li
                    key={item}
                    className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer transition-colors duration-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )} */}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
            >
              {/* <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200">🏭 Trusted by 500+ Factories</Badge> */}

              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 my-6 leading-tight">
                Buy Genuine
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}
                  Machine Tools
                </span>
                <br />& Book Reliable Services
                <span className="text-green-600"> Easy!</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Best prices. Certified service engineers. Trusted by 500+ factories across India.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
                >
                  Shop Tools
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 !border-blue-600 !text-blue-600 !hover:bg-blue-600 hover:text-white px-8 py-4 text-lg !font-semibold transform hover:scale-105 transition-all duration-300 group bg-transparent"
                >
                  <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  Book Services
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                      }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">{stat.number}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
              <img
                src={crane || "/placeholder.svg"}
                alt="Machinery Banner"
                className="relative w-full rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Tools Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">Best Sellers</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Popular <span className="text-blue-600">Tools & Parts</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most trusted and high-quality tools used by professionals across industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tools.map((tool, index) => (
              <Card
                key={tool.id}
                className={`group hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 border-0 bg-white overflow-hidden ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={tool.img || "/placeholder.svg"}
                      alt={tool.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <Badge className="absolute top-3 left-3 bg-red-500 text-white">
                      Save ₹
                      {Number.parseInt(tool.originalPrice.replace("₹", "").replace(",", "")) -
                        Number.parseInt(tool.price.replace("₹", "").replace(",", ""))}
                    </Badge>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {tool.name}
                    </h3>

                    <div className="flex items-center mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(tool.rating) ? "text-yellow-400" : "text-gray-300"}`}
                            filled={i < Math.floor(tool.rating)}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 ml-2">({tool.reviews})</span>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-2xl font-bold text-blue-600">{tool.price}</span>
                        <span className="text-sm text-gray-500 line-through ml-2">{tool.originalPrice}</span>
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transform hover:scale-105 transition-all duration-300">
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Booking Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">Quick Booking</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Book a Service in <span className="text-blue-600">Seconds</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Get professional maintenance and repair services from certified technicians at your doorstep.
              </p>

              <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Service Type</label>
                      <select className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white">
                        <option>Repair Service</option>
                        <option>Maintenance</option>
                        <option>Installation</option>
                        <option>Inspection</option>
                      </select>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                        <input
                          type="date"
                          className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
                        <input
                          type="time"
                          className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        />
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                      Book Now - Free Consultation
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-3xl blur-3xl"></div>
              <img
                src="https://img.freepik.com/free-photo/standard-quality-control-collage-concept_23-2149595847.jpg?semt=ais_hybrid&w=740"
                alt="Service Booking"
                className="relative w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-800 border-purple-200">Categories</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Explore <span className="text-purple-600">Categories</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <Card
                key={category.name}
                className={`group hover:shadow-xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 border-0 ${category.gradient} text-white overflow-hidden ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                  <p className="text-white/80 text-sm">{category.count}</p>
                  <div className="mt-4 flex items-center justify-center text-white group-hover:translate-x-2 transition-transform duration-300">
                    Explore
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">Why Choose Us</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why <span className="text-blue-600">Choose Us?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card
                  key={feature.title}
                  className={`group hover:shadow-xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 border-0 bg-white ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-8 text-center">
                    <div className="mb-6 flex justify-center">
                      <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.desc}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Offers Banner */}
      <section className="py-12 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-white">
            <div className="flex items-center gap-4">
              <div className="text-4xl animate-bounce">⚡</div>
              <div>
                <h3 className="text-2xl font-bold mb-1">Upto 35% Off on Electric Tools!</h3>
                <p className="text-white/90">Use Code: TOOL35 | Limited Time Offer</p>
              </div>
            </div>
            <Button className="bg-white !text-orange-600 !hover:bg-gray-100 px-8 py-3 !text-lg !font-semibold shadow-lg !hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Shop Now
            </Button>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">Testimonials</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What <span className="text-green-600">Users Say</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.name}
                className={`group hover:shadow-xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-gray-50 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  <Quote className="w-8 h-8 text-blue-500 mb-4" />
                  <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.location}</div>
                    </div>
                    <div className="flex items-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400" filled={true} />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-indigo-100 text-indigo-800 border-indigo-200">Process</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              How It <span className="text-indigo-600">Works</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <ShoppingCart className="w-6 h-6 mr-3 text-blue-600" />
                  Tools Purchase
                </h3>
                <div className="space-y-4">
                  {["Browse Tools", "Add to Cart", "Secure Checkout", "Fast Delivery"].map((step, index) => (
                    <div key={step} className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                      <span className="text-gray-700 font-medium">{step}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Settings className="w-6 h-6 mr-3 text-green-600" />
                  Service Booking
                </h3>
                <div className="space-y-4">
                  {["Select Service", "Book Slot", "Expert Visit", "Quality Service"].map((step, index) => (
                    <div key={step} className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                      <span className="text-gray-700 font-medium">{step}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                MachineryMart
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Best place for genuine tools & certified services. Trusted by professionals across India.
              </p>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>support@machinerymart.com</span>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {["Privacy Policy", "Terms & Conditions", "Support Center", "Track Order", "Return Policy"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                      >
                        <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        {item}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6 text-white">Categories</h4>
              <ul className="space-y-3">
                {["Hydraulic Tools", "Electrical Parts", "Cutting Tools", "Safety Equipment", "Spare Parts"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                      >
                        <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        {item}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6 text-white">Follow Us</h4>
              <div className="flex space-x-4 mb-6">
                {["🌐", "📸", "🐦", "📘"].map((icon, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer"
                  >
                    <span className="text-lg">{icon}</span>
                  </div>
                ))}
              </div>
              <div className="text-gray-400">
                <p className="mb-2">📍 Mumbai, Delhi, Pune, Bangalore</p>
                <p>📞 1800-123-4567 (Toll Free)</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">&copy; 2025 MachineryMart. All rights reserved.</p>
            <div className="flex items-center space-x-4">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-gray-400 text-sm">Secure & Trusted Platform</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons - Responsive */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 flex flex-col gap-3 sm:gap-4 z-50 ">
        {/* WhatsApp Button */}
        <div className="group relative">
          <button
            onClick={() => {
              const message = encodeURIComponent("Hello! I'm interested in your machinery tools and services.")
              const whatsappUrl = `https://wa.me/918826589619?text=${message}`
              window.open(whatsappUrl, "_blank")
            }}
            className="w-12 h-12 sm:w-14 sm:h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 cursor-pointer animate-bounce"
          >
            <WhatsApp className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
          </button>
          <div className="absolute right-14 sm:right-16 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-lg text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap hidden sm:block">
            WhatsApp Chat
          </div>
        </div>

        {/* Call Button */}
        <div className="group relative ">
          <button
            onClick={() => {
              window.location.href = "tel:+918826589619"
            }}
            className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 cursor-pointer animate-pulse"
          >
            <Phone className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
          </button>
          <div className="absolute right-14 sm:right-16 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-lg text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap hidden sm:block">
            Call Now
          </div>
        </div>
      </div>
    </div>
  )
}

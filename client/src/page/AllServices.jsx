"use client"

import { useState } from "react"
import {
  Search,
  SlidersHorizontal,
  ArrowLeft,
  Star,
  Clock,
  Users,
  Zap,
  Shield,
  Headphones,
  Truck,
  Settings,
  Palette,
  Code,
  Camera,
  Megaphone,
  BarChart3,
  Globe,
  ArrowRight,
  Heart,
  TrendingUp,
} from "lucide-react"
import { Link } from "react-router-dom"

const ServicesPage = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [showFilters, setShowFilters] = useState(false)

  const categories = [
    {
      id: "all",
      name: "All Services",
      count: 16,
      gradient: "from-indigo-400 to-purple-400",
      bg: "bg-indigo-50",
      text: "text-indigo-700",
    }
  ]

  const services = [
    {
      id: 1,
      name: "Machine Installation",
      category: "design",
      description: "Transform your vision into stunning, responsive websites that captivate and convert",
      price: 299,
      originalPrice: 399,
      duration: "3-5 days",
      rating: 4.8,
      reviews: 156,
      popular: true,
      cardBg: "bg-gradient-to-br from-cyan-50 to-blue-50",
      iconBg: "bg-rose-100",
      iconColor: "text-rose-600",
      buttonGradient: "from-sky-500 to-blue-500",
      image: "https://media.gettyimages.com/id/155909002/photo/industrial-sewing-machines.jpg?s=612x612&w=gi&k=20&c=e854lJBmrPgu50pVvSUuWZt1YAJR1VEU-htgVegKJsI=",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading"],
    },
    {
      id: 2,
      name: "Manufacturing",
      category: "development",
      description: "Build powerful native apps that deliver exceptional user experiences across all devices",
      price: 1299,
      originalPrice: 1599,
      duration: "2-4 weeks",
      rating: 4.9,
      reviews: 89,
      popular: true,
      cardBg: "bg-gradient-to-br from-cyan-50 to-blue-50",
      iconBg: "bg-sky-100",
      iconColor: "text-sky-600",
      buttonGradient: "from-sky-500 to-blue-500",
      image: "https://media.istockphoto.com/id/510162486/photo/production-line-of-plastic-industry.jpg?s=612x612&w=0&k=20&c=n5y1V3eYDO7mBf1PR7Q-zARjqyxkWD4eKpe9UhKD6IM=",
      features: ["iOS & Android", "Cloud Integration", "Push Notifications"],
    },
    {
      id: 3,
      name: "Machine Maintenance",
      category: "marketing",
      description: "Skyrocket your brand with data-driven marketing strategies that deliver real results",
      price: 599,
      originalPrice: 799,
      duration: "1-2 weeks",
      rating: 4.7,
      reviews: 234,
      popular: false,
      cardBg: "bg-gradient-to-br from-cyan-50 to-blue-50",
      iconBg: "bg-violet-100",
      iconColor: "text-violet-600",
      buttonGradient: "from-sky-500 to-blue-500",
      image: "https://img.machinedesign.com/files/base/ebm/machinedesign/image/2019/05/machinedesign_com_sites_machinedesign.com_files_3._Cleaning_the_Machines.png?auto=format,compress&fit=max&q=45&w=640&width=640",
      features: ["Social Media", "PPC Campaigns", "Analytics"],
    },
    {
      id: 4,
      name: "24/7 Support",
      category: "support",
      description: "Never worry again with our round-the-clock expert support and maintenance services",
      price: 99,
      originalPrice: 149,
      duration: "Monthly",
      rating: 4.6,
      reviews: 445,
      popular: false,
      cardBg: "bg-gradient-to-br from-cyan-50 to-blue-50",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
      buttonGradient: "from-sky-500 to-blue-500",
      image: "https://media.gettyimages.com/id/1057719100/photo/young-latin-engineer-calibrating-drill.jpg?s=612x612&w=gi&k=20&c=oixA2fwHfJXZB2DwFsU38-fIrYNwbKVQjxpNJS1OgpM=",
      features: ["Live Chat", "Phone Support", "Remote Assistance"],
    },
    {
      id: 5,
      name: "Activation Appliance Repair",
      category: "development",
      description: "Launch your online empire with feature-rich stores that maximize sales and conversions",
      price: 899,
      originalPrice: 1199,
      duration: "1-3 weeks",
      rating: 4.8,
      reviews: 167,
      popular: true,
      cardBg: "bg-gradient-to-br from-indigo-50 to-blue-50",
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600",
      buttonGradient: "from-sky-500 to-blue-500",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3RN3m_3uLxxvpyEQTE67TbJBozj1eJmlkQA&s",
      features: ["Inventory Management", "Mobile Optimized"],
    }
  ]

  const filteredServices = services.filter((service) => {
    const matchesCategory = selectedCategory === "all" || service.category === selectedCategory
    const matchesSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleServiceClick = (service) => {
    console.log(`Selected service: ${service.name}`)
    // Here you can add navigation to service details or booking
  }

  const selectedCategoryData = categories.find((cat) => cat.id === selectedCategory) || categories[0]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 pb-25">
      <div className="px-4 py-6 md:px-6 lg:px-8 max-w-7xl mx-auto md:py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 md:mb-6">
          <Link to="/" className="flex items-center gap-4 md:gap-3">
            <button className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-indigo-200 md:p-2 md:rounded-xl">
              <ArrowLeft className="text-white md:w-5 md:h-5" size={24} />
            </button>
            <div>
              <h1 className="text-2xl font-bold bg-blue-700 bg-clip-text text-transparent md:text-xl">
                Our Services
              </h1>
              <p className="text-gray-500 text-sm">Choose from our premium service collection</p>
            </div>
          </Link>
        </div>

        {/* Search Bar */}
        <div className="mb-8 md:mb-6">
          <div className="flex bg-white/80 backdrop-blur-sm items-center h-14 pl-5 px-3 py-4 rounded-2xl shadow-lg border border-indigo-100 md:py-3 md:rounded-xl md:pl-4 md:px-3 md:h-12 hover:shadow-xl transition-all duration-300">
            <Search size={24} className="text-indigo-500 md:w-5 md:h-5" />
            <input
              className="w-full pl-4 outline-none bg-transparent text-gray-700 placeholder-indigo-400 font-medium md:text-sm md:pl-3"
              type="text"
              placeholder="Search for amazing services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-10 md:mb-8">
          <div className="flex gap-4 mb-6 overflow-x-auto pb-2 md:gap-3 md:mb-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex-shrink-0 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 md:px-5 md:py-3 md:rounded-xl md:text-sm ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg hover:shadow-xl transform scale-105`
                    : `${category.bg} ${category.text} hover:shadow-lg border border-white/50 hover:scale-105`
                }`}
              >
                {category.name} 
              </button>
            ))}
          </div>
        </div>

        {/* Services Count */}
        <div className="flex items-center justify-between mb-8 md:mb-6">
          <div
            className={`${selectedCategoryData.bg} px-6 py-4 rounded-2xl border border-white/50 shadow-md md:px-4 md:py-3 md:rounded-xl`}
          >
            <p className={`${selectedCategoryData.text} text-lg md:text-base font-bold`}>
              Showing <span className="text-2xl md:text-xl">{filteredServices.length}</span> amazing services
            </p>
            <p className="text-gray-500 text-sm">Handpicked for your success</p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 mb-12 md:mb-10">
          {filteredServices.map((service) => {
            return (
              <div
                key={service.id}
                className={`group relative ${service.cardBg} rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/50 md:rounded-2xl`}
              >
                

                {/* Heart Icon */}
                <button className="absolute top-5 left-5 z-20 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:scale-110 transition-all duration-300 md:top-4 md:left-4 md:p-2 hover:bg-red-50">
                  <Heart
                    className="text-gray-400 hover:text-red-500 transition-colors duration-300 md:w-4 md:h-4"
                    size={18}
                  />
                </button>

                {/* Service Image */}
                <div className="relative h-64 md:h-52 overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-80`}></div>


                  {/* Price Badge */}
                  <div className="absolute bottom-5 right-5 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg md:bottom-4 md:right-4 md:px-3 md:py-2 md:rounded-xl border border-white/50">
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-800 md:text-xl">${service.price}</div>
                      <div className="text-sm text-gray-500 line-through">${service.originalPrice}</div>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 md:p-5">
                  {/* Service Header */}
                  <div className="mb-4 md:mb-3">
                    <h3 className="text-gray-800 font-bold text-2xl md:text-xl mb-3 md:mb-2 group-hover:text-gray-900 transition-all duration-300">
                      {service.name}
                    </h3>

                    {/* Rating & Reviews */}
                    <div className="flex items-center justify-between mb-4 md:mb-3">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center bg-yellow-100 px-3 py-1.5 rounded-full border border-yellow-200">
                          <Star size={16} fill="currentColor" className="text-yellow-500 md:w-4 md:h-4" />
                          <span className="text-yellow-700 text-sm md:text-sm ml-1 font-bold">{service.rating}</span>
                        </div>
                        <span className="text-gray-500 text-sm md:text-sm">({service.reviews} reviews)</span>
                      </div>

                      {/* Duration */}
                      <div
                        className={`flex items-center gap-2 ${service.iconBg} px-3 py-1.5 rounded-full border border-white/50`}
                      >
                        <Clock className={`${service.iconColor} md:w-4 md:h-4`} size={16} />
                        <span className={`${service.iconColor} text-sm md:text-sm font-medium`}>
                          {service.duration}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Service Description */}
                  <p className="text-gray-600 text-base md:text-sm mb-5 md:mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6 md:mb-5">
                    <div className="flex flex-wrap gap-2 md:gap-1.5">
                      {service.features.map((feature, index) => (
                        <span
                          key={index}
                          className="text-sm bg-white/80 text-gray-700 px-3 py-1.5 rounded-full font-medium shadow-sm border border-white/50 md:text-xs md:px-2 md:py-1"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => handleServiceClick(service)}
                    className={`w-full bg-gradient-to-r ${service.buttonGradient} text-white p-4 md:p-3 rounded-2xl md:rounded-xl font-bold text-lg md:text-base  transition-all duration-300 group-hover:scale-105 flex items-center justify-center gap-3 md:gap-2 shadow-lg hover:shadow-xl`}
                  >
                    <span>Get Started Now</span>
                    <ArrowRight
                      className="group-hover:translate-x-1 transition-transform duration-300 md:w-5 md:h-5"
                      size={20}
                    />
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-br from-white via-indigo-50/50 to-purple-50/50 rounded-3xl p-12 md:p-10 shadow-xl border border-white/50 md:rounded-2xl backdrop-blur-sm">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex p-5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl shadow-lg mb-8 md:p-4 md:rounded-2xl md:mb-6">
              <Zap className="text-white md:w-8 md:h-8" size={40} />
            </div>
            <h2 className="text-4xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-4">
              Need Something{" "}
              <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                Custom?
              </span>
            </h2>
            <p className="text-gray-600 text-xl md:text-lg mb-10 md:mb-8 leading-relaxed">
              Don't see exactly what you need? Let's create something amazing together! Our team specializes in custom
              solutions tailored to your unique requirements.
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-12 py-5 md:px-10 md:py-4 rounded-2xl md:rounded-xl font-bold text-xl md:text-lg hover:shadow-lg hover:shadow-indigo-200 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-4 md:gap-3 shadow-lg hover:from-indigo-600 hover:to-purple-600">
              Let's Create Magic Together
              <ArrowRight className="md:w-6 md:h-6" size={28} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesPage

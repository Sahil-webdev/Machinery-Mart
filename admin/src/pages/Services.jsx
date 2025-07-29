// src/pages/admin/ServicesManagement.jsx
import React, { useState, useEffect } from "react";
import {
  FaPlus,
  FaEdit,
  FaTrash,
  FaEye,
  FaSearch,
  FaFilter,
  FaDownload,
  FaUpload,
  FaTools,
  FaWrench,
  FaStar,
  FaCheckCircle,
  FaTimesCircle,
  FaSortAmountDown,
  FaSortAmountUp,
  FaCopy,
  FaTimes,
  FaSave,
  FaSpinner,
  FaCloudUploadAlt,
  FaBars,
  FaTh,
  FaChevronLeft,
  FaChevronRight,
  FaClock,
  FaUserTie,
  FaMapMarkerAlt,
  FaRupeeSign,
  FaCalendarAlt,
  FaHeart,
  FaShare,
  FaBolt,
  FaShieldAlt,
} from "react-icons/fa";

// Sample Services Data
const initialServices = [
  {
    id: 1,
    name: "Industrial Machine Maintenance",
    category: "Preventive Maintenance",
    description: "Comprehensive maintenance service for industrial machinery to ensure optimal performance",
    price: 2500,
    originalPrice: 3000,
    duration: "2-4 hours",
    availability: "available",
    technician: "Rajesh Kumar",
    technicianExp: "8+ years",
    rating: 4.9,
    reviews: 45,
    image: "/service-maintenance.jpg",
    featured: true,
    warranty: "6 months",
    location: "On-site",
    bookings: 156,
    lastUpdated: "2025-07-25",
    urgency: "standard",
    color: "emerald"
  },
  {
    id: 2,
    name: "Emergency Equipment Repair",
    category: "Emergency Repair",
    description: "24/7 emergency repair service for critical machinery breakdowns",
    price: 4500,
    originalPrice: 5500,
    duration: "1-6 hours",
    availability: "available",
    technician: "Amit Singh",
    technicianExp: "10+ years",
    rating: 4.8,
    reviews: 78,
    image: "/service-repair.jpg",
    featured: true,
    warranty: "3 months",
    location: "On-site",
    bookings: 89,
    lastUpdated: "2025-07-24",
    urgency: "urgent",
    color: "red"
  },
  {
    id: 3,
    name: "Equipment Installation Service",
    category: "Installation",
    description: "Professional installation and setup of new machinery and equipment",
    price: 3500,
    originalPrice: 4200,
    duration: "4-8 hours",
    availability: "available",
    technician: "Priya Sharma",
    technicianExp: "6+ years",
    rating: 4.7,
    reviews: 34,
    image: "/service-installation.jpg",
    featured: false,
    warranty: "1 year",
    location: "On-site",
    bookings: 67,
    lastUpdated: "2025-07-23",
    urgency: "standard",
    color: "blue"
  },
  {
    id: 4,
    name: "Safety Inspection & Audit",
    category: "Safety Inspection",
    description: "Comprehensive safety inspection and compliance audit for industrial equipment",
    price: 1800,
    originalPrice: 2400,
    duration: "3-5 hours",
    availability: "unavailable",
    technician: "Dr. Vikash Gupta",
    technicianExp: "12+ years",
    rating: 4.9,
    reviews: 92,
    image: "/service-safety.jpg",
    featured: false,
    warranty: "Report valid 1 year",
    location: "On-site",
    bookings: 123,
    lastUpdated: "2025-07-22",
    urgency: "high",
    color: "amber"
  },
  {
    id: 5,
    name: "Equipment Calibration",
    category: "Calibration",
    description: "Precision calibration service for measuring and testing equipment",
    price: 2200,
    originalPrice: 2800,
    duration: "2-3 hours",
    availability: "available",
    technician: "Suresh Patel",
    technicianExp: "9+ years",
    rating: 4.6,
    reviews: 28,
    image: "/service-calibration.jpg",
    featured: false,
    warranty: "6 months",
    location: "Lab/On-site",
    bookings: 45,
    lastUpdated: "2025-07-21",
    urgency: "standard",
    color: "purple"
  },
];

const serviceCategories = [
  "All Categories",
  "Preventive Maintenance",
  "Emergency Repair",
  "Installation",
  "Safety Inspection",
  "Calibration",
  "Training & Consulting",
  "Custom Solutions",
];

const technicians = [
  "All Technicians",
  "Rajesh Kumar",
  "Amit Singh",
  "Priya Sharma",
  "Dr. Vikash Gupta",
  "Suresh Patel",
  "Rohit Verma",
  "Anita Joshi",
];

export default function ServicesManagement() {
  const [services, setServices] = useState(initialServices);
  const [filteredServices, setFilteredServices] = useState(initialServices);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedTechnician, setSelectedTechnician] = useState("All Technicians");
  const [selectedAvailability, setSelectedAvailability] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [viewMode, setViewMode] = useState("cards");
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);
  
  // Modal states
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  // Form states
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    price: "",
    originalPrice: "",
    duration: "",
    technician: "",
    technicianExp: "",
    warranty: "",
    location: "",
    image: null,
    availability: "available",
    featured: false,
  });

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 300);
  }, []);

  // Filter and Search Logic
  useEffect(() => {
    let filtered = services.filter((service) => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.technician.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === "All Categories" || service.category === selectedCategory;
      const matchesTechnician = selectedTechnician === "All Technicians" || service.technician === selectedTechnician;
      const matchesAvailability = selectedAvailability === "all" || service.availability === selectedAvailability;

      return matchesSearch && matchesCategory && matchesTechnician && matchesAvailability;
    });

    // Sort services
    filtered.sort((a, b) => {
      let aValue = a[sortBy];
      let bValue = b[sortBy];
      
      if (typeof aValue === 'string') {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }
      
      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    setFilteredServices(filtered);
    setCurrentPage(1);
  }, [services, searchTerm, selectedCategory, selectedTechnician, selectedAvailability, sortBy, sortOrder]);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentServices = filteredServices.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredServices.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Form handlers
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, image: file }));
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      category: "",
      description: "",
      price: "",
      originalPrice: "",
      duration: "",
      technician: "",
      technicianExp: "",
      warranty: "",
      location: "",
      image: null,
      availability: "available",
      featured: false,
    });
  };

  // Service actions
  const handleAddService = () => {
    resetForm();
    setShowAddModal(true);
  };

  const handleEditService = (service) => {
    setSelectedService(service);
    setFormData({
      name: service.name,
      category: service.category,
      description: service.description,
      price: service.price.toString(),
      originalPrice: service.originalPrice?.toString() || "",
      duration: service.duration,
      technician: service.technician,
      technicianExp: service.technicianExp,
      warranty: service.warranty,
      location: service.location,
      image: null,
      availability: service.availability,
      featured: service.featured,
    });
    setShowEditModal(true);
  };

  const handleViewService = (service) => {
    setSelectedService(service);
    setShowViewModal(true);
  };

  const handleDeleteService = (serviceId) => {
    if (window.confirm("Are you sure you want to delete this service?")) {
      setIsLoading(true);
      setTimeout(() => {
        setServices(services.filter(s => s.id !== serviceId));
        setIsLoading(false);
        alert("Service deleted successfully!");
      }, 1000);
    }
  };

  const handleSaveService = () => {
    if (!formData.name || !formData.category || !formData.price) {
      alert("Please fill in all required fields");
      return;
    }

    setIsLoading(true);
    
    setTimeout(() => {
      if (showEditModal) {
        setServices(services.map(s => 
          s.id === selectedService.id 
            ? {
                ...s,
                ...formData,
                price: parseFloat(formData.price),
                originalPrice: formData.originalPrice ? parseFloat(formData.originalPrice) : null,
                lastUpdated: new Date().toISOString().split('T')[0],
              }
            : s
        ));
        alert("Service updated successfully!");
        setShowEditModal(false);
      } else {
        const newService = {
          id: Date.now(),
          ...formData,
          price: parseFloat(formData.price),
          originalPrice: formData.originalPrice ? parseFloat(formData.originalPrice) : null,
          rating: 0,
          reviews: 0,
          bookings: 0,
          image: "/default-service.png",
          lastUpdated: new Date().toISOString().split('T')[0],
          urgency: "standard",
          color: "blue"
        };
        setServices([...services, newService]);
        alert("Service added successfully!");
        setShowAddModal(false);
      }
      
      resetForm();
      setIsLoading(false);
    }, 1500);
  };

  const handleToggleAvailability = (serviceId) => {
    setServices(services.map(s => 
      s.id === serviceId 
        ? { ...s, availability: s.availability === 'available' ? 'unavailable' : 'available' }
        : s
    ));
  };

  const handleToggleFeatured = (serviceId) => {
    setServices(services.map(s => 
      s.id === serviceId 
        ? { ...s, featured: !s.featured }
        : s
    ));
  };

  const handleDuplicateService = (service) => {
    const duplicatedService = {
      ...service,
      id: Date.now(),
      name: service.name + " (Copy)",
      featured: false,
      lastUpdated: new Date().toISOString().split('T')[0],
    };
    setServices([...services, duplicatedService]);
    alert("Service duplicated successfully!");
  };

  const handleBulkExport = () => {
    const csvContent = "data:text/csv;charset=utf-8," + 
      "Name,Category,Price,Duration,Technician,Availability\n" +
      services.map(s => `${s.name},${s.category},${s.price},${s.duration},${s.technician},${s.availability}`).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "services.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    alert("Services exported successfully!");
  };

  const handleBulkImport = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.csv';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        alert("Import functionality would process the CSV file here");
      }
    };
    input.click();
  };

  const getColorClasses = (color) => {
    const colors = {
      emerald: {
        bg: 'from-emerald-500 to-teal-600',
        text: 'text-emerald-600',
        badge: 'bg-emerald-100 text-emerald-800 border-emerald-200',
        button: 'bg-emerald-50 hover:bg-emerald-100 text-emerald-600',
        ring: 'ring-emerald-200'
      },
      red: {
        bg: 'from-red-500 to-rose-600',
        text: 'text-red-600',
        badge: 'bg-red-100 text-red-800 border-red-200',
        button: 'bg-red-50 hover:bg-red-100 text-red-600',
        ring: 'ring-red-200'
      },
      blue: {
        bg: 'from-blue-500 to-indigo-600',
        text: 'text-blue-600',
        badge: 'bg-blue-100 text-blue-800 border-blue-200',
        button: 'bg-blue-50 hover:bg-blue-100 text-blue-600',
        ring: 'ring-blue-200'
      },
      amber: {
        bg: 'from-amber-500 to-orange-600',
        text: 'text-amber-600',
        badge: 'bg-amber-100 text-amber-800 border-amber-200',
        button: 'bg-amber-50 hover:bg-amber-100 text-amber-600',
        ring: 'ring-amber-200'
      },
      purple: {
        bg: 'from-purple-500 to-violet-600',
        text: 'text-purple-600',
        badge: 'bg-purple-100 text-purple-800 border-purple-200',
        button: 'bg-purple-50 hover:bg-purple-100 text-purple-600',
        ring: 'ring-purple-200'
      }
    };
    return colors[color] || colors.blue;
  };

  // Modal Component
  const Modal = ({ isOpen, onClose, title, children, size = "max-w-2xl" }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4">
        <div className={`bg-white rounded-3xl shadow-2xl ${size} w-full max-h-[90vh] overflow-hidden border border-gray-200`}>
          <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
            <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-200 rounded-full transition-colors"
            >
              <FaTimes className="text-gray-500" />
            </button>
          </div>
          <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
            {children}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 lg:p-8">
      
      {/* Header Section - Dark Theme with Orange Accents */}
      <div className={`bg-gradient-to-r from-gray-900 via-gray-800 to-black rounded-3xl p-6 lg:p-8 mb-8 shadow-2xl border border-gray-700 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl shadow-lg">
                <FaTools className="text-2xl text-white" />
              </div>
              <div>
                <h1 className="text-3xl lg:text-4xl font-black text-white mb-2">
                  Service Hub
                </h1>
                <p className="text-gray-300 text-lg">
                  Manage your professional machinery services & technician assignments
                </p>
              </div>
            </div>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-gray-300">{services.filter(s => s.availability === 'available').length} Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
                <span className="text-gray-300">{services.filter(s => s.featured).length} Featured</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-gray-300">{services.reduce((acc, s) => acc + s.bookings, 0)} Total Bookings</span>
              </div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={handleAddService}
              className="flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-6 py-3 rounded-2xl font-bold text-sm lg:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <FaPlus />
              <span className="hidden sm:inline">Add Service</span>
            </button>
            
            <button
              onClick={handleBulkImport}
              className="flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-2xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <FaUpload />
              <span className="hidden sm:inline">Import</span>
            </button>
            
            <button
              onClick={handleBulkExport}
              className="flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-2xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <FaDownload />
              <span className="hidden sm:inline">Export</span>
            </button>
          </div>
        </div>
      </div>

      {/* Analytics Cards - Neon Style */}
      <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        {[
          { 
            title: "Total Services", 
            value: services.length, 
            icon: FaTools, 
            color: "from-cyan-400 to-blue-500",
            bg: "bg-cyan-500/10",
            border: "border-cyan-400/30",
            glow: "shadow-cyan-400/20"
          },
          { 
            title: "Available Now", 
            value: services.filter(s => s.availability === 'available').length, 
            icon: FaCheckCircle, 
            color: "from-green-400 to-emerald-500",
            bg: "bg-green-500/10",
            border: "border-green-400/30",
            glow: "shadow-green-400/20"
          },
          { 
            title: "Premium Services", 
            value: services.filter(s => s.featured).length, 
            icon: FaStar, 
            color: "from-yellow-400 to-orange-500",
            bg: "bg-yellow-500/10",
            border: "border-yellow-400/30",
            glow: "shadow-yellow-400/20"
          },
          { 
            title: "Active Technicians", 
            value: [...new Set(services.map(s => s.technician))].length, 
            icon: FaUserTie, 
            color: "from-purple-400 to-pink-500",
            bg: "bg-purple-500/10",
            border: "border-purple-400/30",
            glow: "shadow-purple-400/20"
          },
        ].map((stat, index) => (
          <div 
            key={stat.title} 
            className={`relative bg-white border-2 ${stat.border} rounded-2xl p-4 lg:p-6 hover:shadow-2xl ${stat.glow} transition-all duration-500 transform hover:scale-105 hover:-rotate-1 group overflow-hidden`}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-gradient-to-br from-current to-transparent"></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-3">
                <div className={`p-3 rounded-xl ${stat.bg} group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className={`text-xl lg:text-2xl bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`} />
                </div>
                <div className="text-right">
                  <div className={`text-2xl lg:text-3xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                </div>
              </div>
              <h3 className="text-gray-600 text-sm lg:text-base font-semibold">{stat.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Search and Filters - Glassmorphism Style */}
      <div className={`bg-white/70 backdrop-blur-xl border border-white/30 rounded-3xl p-6 shadow-xl mb-8 transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        
        {/* Advanced Search Bar */}
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <FaSearch className="text-gray-400 text-lg" />
          </div>
          <input
            type="text"
            placeholder="Search services, technicians, descriptions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white/50 border-2 border-gray-200/50 rounded-2xl focus:border-orange-400 focus:bg-white/80 outline-none transition-all duration-300 text-gray-800 placeholder-gray-500 backdrop-blur-sm"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute inset-y-0 right-0 pr-4 flex items-center"
            >
              <FaTimes className="text-gray-400 hover:text-gray-600 transition-colors" />
            </button>
          )}
        </div>

        {/* Filter Controls */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-3 bg-white/50 border-2 border-gray-200/50 rounded-xl focus:border-orange-400 focus:bg-white/80 outline-none transition-all duration-300 backdrop-blur-sm"
          >
            {serviceCategories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>

          <select
            value={selectedTechnician}
            onChange={(e) => setSelectedTechnician(e.target.value)}
            className="px-4 py-3 bg-white/50 border-2 border-gray-200/50 rounded-xl focus:border-orange-400 focus:bg-white/80 outline-none transition-all duration-300 backdrop-blur-sm"
          >
            {technicians.map(tech => (
              <option key={tech} value={tech}>{tech}</option>
            ))}
          </select>

          <select
            value={selectedAvailability}
            onChange={(e) => setSelectedAvailability(e.target.value)}
            className="px-4 py-3 bg-white/50 border-2 border-gray-200/50 rounded-xl focus:border-orange-400 focus:bg-white/80 outline-none transition-all duration-300 backdrop-blur-sm"
          >
            <option value="all">All Status</option>
            <option value="available">Available</option>
            <option value="unavailable">Unavailable</option>
            <option value="busy">Busy</option>
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-3 bg-white/50 border-2 border-gray-200/50 rounded-xl focus:border-orange-400 focus:bg-white/80 outline-none transition-all duration-300 backdrop-blur-sm"
          >
            <option value="name">Sort by Name</option>
            <option value="price">Sort by Price</option>
            <option value="rating">Sort by Rating</option>
            <option value="bookings">Sort by Bookings</option>
          </select>

          <div className="flex gap-2">
            <button
              onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
              className="flex-1 px-4 py-3 bg-gradient-to-r from-orange-100 to-red-100 hover:from-orange-200 hover:to-red-200 border-2 border-orange-200 rounded-xl transition-all duration-300 flex items-center justify-center"
            >
              {sortOrder === 'asc' ? <FaSortAmountUp className="text-orange-600" /> : <FaSortAmountDown className="text-orange-600" />}
            </button>
          </div>
        </div>

        {/* View Controls and Results */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="text-gray-600 font-medium">
            Found {filteredServices.length} services • Showing {currentServices.length} results
          </div>
          
          <div className="flex items-center gap-2 bg-gray-100 rounded-2xl p-1">
            <button
              onClick={() => setViewMode('cards')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
                viewMode === 'cards' 
                  ? 'bg-white shadow-sm text-orange-600 font-semibold' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <FaTh className="text-sm" />
              <span className="hidden sm:inline">Cards</span>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
                viewMode === 'list' 
                  ? 'bg-white shadow-sm text-orange-600 font-semibold' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <FaBars className="text-sm" />
              <span className="hidden sm:inline">List</span>
            </button>
          </div>
        </div>
      </div>

      {/* Services Display */}
      <div className={`transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        {viewMode === 'cards' ? (
          /* Modern Card View */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {currentServices.map((service, index) => {
              const colorClasses = getColorClasses(service.color);
              return (
                <div
                  key={service.id}
                  className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-gray-100 overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Service Image with Overlay */}
                  <div className="relative h-48 overflow-hidden rounded-t-3xl">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => { e.target.src = "/default-service.png"; }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${colorClasses.bg} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                    
                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      {service.availability === 'available' ? (
                        <span className="bg-green-500/90 text-white px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm">
                          ● AVAILABLE
                        </span>
                      ) : (
                        <span className="bg-red-500/90 text-white px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm">
                          ● BUSY
                        </span>
                      )}
                      
                      {service.featured && (
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm flex items-center gap-1">
                          <FaStar className="text-xs" />
                          FEATURED
                        </span>
                      )}
                    </div>

                    {/* Action Buttons Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                      <button
                        onClick={() => handleViewService(service)}
                        className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors transform hover:scale-110"
                        title="View Details"
                      >
                        <FaEye className="text-blue-600" />
                      </button>
                      <button
                        onClick={() => handleEditService(service)}
                        className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors transform hover:scale-110"
                        title="Edit Service"
                      >
                        <FaEdit className="text-green-600" />
                      </button>
                      <button
                        onClick={() => handleDuplicateService(service)}
                        className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors transform hover:scale-110"
                        title="Duplicate"
                      >
                        <FaCopy className="text-purple-600" />
                      </button>
                      <button
                        onClick={() => handleDeleteService(service.id)}
                        className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors transform hover:scale-110"
                        title="Delete"
                      >
                        <FaTrash className="text-red-600" />
                      </button>
                    </div>
                  </div>

                  {/* Service Details */}
                  <div className="p-6">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900 leading-tight">{service.name}</h3>
                        <button
                          onClick={() => handleToggleFeatured(service.id)}
                          className="text-gray-400 hover:text-yellow-500 transition-colors"
                        >
                          {service.featured ? <FaHeart className="text-red-500" /> : <FaHeart />}
                        </button>
                      </div>
                      <p className={`text-sm font-medium ${colorClasses.text}`}>{service.category}</p>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <FaStar 
                            key={i} 
                            className={`text-sm ${i < Math.floor(service.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm font-medium text-gray-700">{service.rating}</span>
                      <span className="text-xs text-gray-500">({service.reviews} reviews)</span>
                    </div>

                    {/* Technician Info */}
                    <div className="flex items-center gap-3 mb-4 p-3 bg-gray-50 rounded-xl">
                      <div className="w-8 h-8 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full flex items-center justify-center">
                        <FaUserTie className="text-white text-sm" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{service.technician}</p>
                        <p className="text-xs text-gray-500">{service.technicianExp}</p>
                      </div>
                    </div>

                    {/* Service Details */}
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-2 text-gray-600">
                        <FaClock className="text-orange-500" />
                        <span>{service.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <FaMapMarkerAlt className="text-orange-500" />
                        <span>{service.location}</span>
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="flex items-end justify-between mb-6">
                      <div>
                        <div className="flex items-center gap-2">
                          <FaRupeeSign className={`text-lg ${colorClasses.text}`} />
                          <span className={`text-2xl font-black ${colorClasses.text}`}>
                            {service.price.toLocaleString()}
                          </span>
                        </div>
                        {service.originalPrice && service.originalPrice > service.price && (
                          <p className="text-sm text-gray-400 line-through">
                            ₹{service.originalPrice.toLocaleString()}
                          </p>
                        )}
                      </div>
                      <div className="text-right text-xs text-gray-500">
                        <p>{service.bookings} bookings</p>
                        <p>{service.warranty} warranty</p>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEditService(service)}
                        className={`flex-1 py-2.5 px-4 rounded-xl font-semibold text-sm transition-all duration-300 ${colorClasses.button}`}
                      >
                        Edit Service
                      </button>
                      <button
                        onClick={() => handleToggleAvailability(service.id)}
                        className={`px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                          service.availability === 'available' 
                            ? 'bg-red-50 hover:bg-red-100 text-red-600' 
                            : 'bg-green-50 hover:bg-green-100 text-green-600'
                        }`}
                      >
                        {service.availability === 'available' ? 'Disable' : 'Enable'}
                      </button>
                    </div>
                  </div>

                  {/* Bottom Glow Effect */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${colorClasses.bg} opacity-50`}></div>
                </div>
              );
            })}
          </div>
        ) : (
          /* List View */
          <div className="space-y-4">
            {currentServices.map((service, index) => {
              const colorClasses = getColorClasses(service.color);
              return (
                <div
                  key={service.id}
                  className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 p-6"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Service Image */}
                    <div className="relative w-full lg:w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => { e.target.src = "/default-service.png"; }}
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${colorClasses.bg} opacity-20`}></div>
                    </div>

                    {/* Service Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col lg:flex-row justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-start gap-3 mb-2">
                            <div>
                              <h3 className="text-xl font-bold text-gray-900 mb-1">{service.name}</h3>
                              <p className={`text-sm font-medium ${colorClasses.text}`}>{service.category}</p>
                            </div>
                            <div className="flex gap-1">
                              {service.featured && <FaStar className="text-yellow-400 text-sm" />}
                              {service.availability === 'available' ? 
                                <FaCheckCircle className="text-green-500 text-sm" /> : 
                                <FaTimesCircle className="text-red-500 text-sm" />
                              }
                            </div>
                          </div>

                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                            <div className="flex items-center gap-1">
                              <FaUserTie className="text-orange-500" />
                              <span>{service.technician}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <FaClock className="text-orange-500" />
                              <span>{service.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <FaMapMarkerAlt className="text-orange-500" />
                              <span>{service.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <FaStar className="text-yellow-400" />
                              <span>{service.rating} ({service.reviews} reviews)</span>
                            </div>
                          </div>

                          <p className="text-gray-600 text-sm line-clamp-2">{service.description}</p>
                        </div>

                        {/* Price and Actions */}
                        <div className="lg:text-right flex lg:flex-col justify-between lg:justify-start items-end lg:items-end gap-4">
                          <div>
                            <div className="flex items-center gap-1 justify-end">
                              <FaRupeeSign className={`text-lg ${colorClasses.text}`} />
                              <span className={`text-2xl font-black ${colorClasses.text}`}>
                                {service.price.toLocaleString()}
                              </span>
                            </div>
                            {service.originalPrice && service.originalPrice > service.price && (
                              <p className="text-sm text-gray-400 line-through">
                                ₹{service.originalPrice.toLocaleString()}
                              </p>
                            )}
                            <p className="text-xs text-gray-500 mt-1">{service.bookings} bookings</p>
                          </div>

                          <div className="flex gap-2">
                            <button
                              onClick={() => handleViewService(service)}
                              className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
                              title="View"
                            >
                              <FaEye className="text-sm" />
                            </button>
                            <button
                              onClick={() => handleEditService(service)}
                              className="p-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors"
                              title="Edit"
                            >
                              <FaEdit className="text-sm" />
                            </button>
                            <button
                              onClick={() => handleDuplicateService(service)}
                              className="p-2 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 transition-colors"
                              title="Duplicate"
                            >
                              <FaCopy className="text-sm" />
                            </button>
                            <button
                              onClick={() => handleDeleteService(service.id)}
                              className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
                              title="Delete"
                            >
                              <FaTrash className="text-sm" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row items-center justify-between mt-12 gap-4">
          <div className="text-gray-600">
            Page {currentPage} of {totalPages} • {filteredServices.length} total results
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-3 bg-white border-2 border-gray-200 rounded-xl hover:border-orange-400 hover:bg-orange-50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FaChevronLeft className="text-sm" />
            </button>
            
            <div className="flex gap-1">
              {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                let pageNum = i + 1;
                if (totalPages > 5) {
                  const start = Math.max(1, currentPage - 2);
                  pageNum = start + i;
                }
                
                if (pageNum > totalPages) return null;
                
                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      currentPage === pageNum
                        ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg'
                        : 'bg-white border-2 border-gray-200 hover:border-orange-400 hover:bg-orange-50 text-gray-700'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>
            
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-3 bg-white border-2 border-gray-200 rounded-xl hover:border-orange-400 hover:bg-orange-50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FaChevronRight className="text-sm" />
            </button>
          </div>
        </div>
      )}

      {/* Empty State */}
      {filteredServices.length === 0 && (
        <div className="text-center py-16">
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100 max-w-md mx-auto">
            <div className="w-24 h-24 bg-gradient-to-r from-orange-100 to-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaTools className="text-3xl text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No Services Found</h3>
            <p className="text-gray-600 mb-8">
              {searchTerm || selectedCategory !== "All Categories" || selectedTechnician !== "All Technicians" || selectedAvailability !== "all"
                ? "Try adjusting your search filters to find what you're looking for."
                : "Get started by adding your first service to the platform."
              }
            </p>
            <button
              onClick={handleAddService}
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-3 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <FaPlus className="inline mr-2" />
              Add Your First Service
            </button>
          </div>
        </div>
      )}

      {/* Add/Edit Service Modal */}
      <Modal
        isOpen={showAddModal || showEditModal}
        onClose={() => {
          setShowAddModal(false);
          setShowEditModal(false);
          resetForm();
        }}
        title={showEditModal ? "Edit Service" : "Add New Service"}
        size="max-w-4xl"
      >
        <div className="p-6">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Service Name */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Service Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-400 focus:outline-none transition-all duration-300"
                  placeholder="Enter service name"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Category *</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-400 focus:outline-none transition-all duration-300"
                >
                  <option value="">Select Category</option>
                  {serviceCategories.slice(1).map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Price */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Price (₹) *</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  required
                  min="0"
                  step="0.01"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-400 focus:outline-none transition-all duration-300"
                  placeholder="Enter service price"
                />
              </div>

              {/* Original Price */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Original Price (₹)</label>
                <input
                  type="number"
                  name="originalPrice"
                  value={formData.originalPrice}
                  onChange={handleInputChange}
                  min="0"
                  step="0.01"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-400 focus:outline-none transition-all duration-300"
                  placeholder="Enter original price (optional)"
                />
              </div>

              {/* Duration */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Duration *</label>
                <input
                  type="text"
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-400 focus:outline-none transition-all duration-300"
                  placeholder="e.g., 2-4 hours"
                />
              </div>

              {/* Technician */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Technician *</label>
                <select
                  name="technician"
                  value={formData.technician}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-400 focus:outline-none transition-all duration-300"
                >
                  <option value="">Select Technician</option>
                  {technicians.slice(1).map(tech => (
                    <option key={tech} value={tech}>{tech}</option>
                  ))}
                </select>
              </div>

              {/* Technician Experience */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Experience</label>
                <input
                  type="text"
                  name="technicianExp"
                  value={formData.technicianExp}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-400 focus:outline-none transition-all duration-300"
                  placeholder="e.g., 8+ years"
                />
              </div>

              {/* Warranty */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Warranty</label>
                <input
                  type="text"
                  name="warranty"
                  value={formData.warranty}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-400 focus:outline-none transition-all duration-300"
                  placeholder="e.g., 6 months"
                />
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-400 focus:outline-none transition-all duration-300"
                  placeholder="e.g., On-site"
                />
              </div>

              {/* Availability */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Availability *</label>
                <select
                  name="availability"
                  value={formData.availability}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-400 focus:outline-none transition-all duration-300"
                >
                  <option value="available">Available</option>
                  <option value="unavailable">Unavailable</option>
                  <option value="busy">Busy</option>
                </select>
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Service Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-400 focus:outline-none transition-all duration-300 resize-none"
                placeholder="Enter detailed service description"
              />
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Service Image</label>
              <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:border-orange-400 transition-colors">
                <input
                  type="file"
                  onChange={handleImageUpload}
                  accept="image/*"
                  className="hidden"
                  id="service-image-upload"
                />
                <label htmlFor="service-image-upload" className="cursor-pointer">
                  <FaCloudUploadAlt className="text-4xl text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">Click to upload service image</p>
                  <p className="text-gray-500 text-sm">JPG, PNG or GIF (Max 10MB)</p>
                  {formData.image && (
                    <p className="text-orange-600 font-medium mt-2">
                      Selected: {formData.image.name}
                    </p>
                  )}
                </label>
              </div>
            </div>

            {/* Featured Toggle */}
            <div className="flex items-center gap-3 p-4 bg-orange-50 rounded-xl">
              <input
                type="checkbox"
                name="featured"
                checked={formData.featured}
                onChange={handleInputChange}
                className="w-5 h-5 text-orange-600 rounded focus:ring-orange-500"
                id="service-featured-toggle"
              />
              <label htmlFor="service-featured-toggle" className="text-sm font-bold text-gray-700 flex items-center gap-2">
                <FaStar className="text-orange-500" />
                Mark as Featured Service
              </label>
            </div>

            {/* Form Actions */}
            <div className="flex flex-col sm:flex-row justify-end gap-4 pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={() => {
                  setShowAddModal(false);
                  setShowEditModal(false);
                  resetForm();
                }}
                className="px-8 py-3 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSaveService}
                disabled={isLoading}
                className="flex items-center justify-center gap-3 px-8 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl font-bold hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <FaSpinner className="animate-spin" />
                    {showEditModal ? "Updating..." : "Adding..."}
                  </>
                ) : (
                  <>
                    <FaSave />
                    {showEditModal ? "Update Service" : "Add Service"}
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </Modal>

      {/* View Service Modal */}
      <Modal
        isOpen={showViewModal}
        onClose={() => setShowViewModal(false)}
        title="Service Details"
        size="max-w-4xl"
      >
        {selectedService && (
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Service Image */}
              <div className="relative">
                <img
                  src={selectedService.image}
                  alt={selectedService.name}
                  className="w-full h-80 object-cover rounded-2xl"
                  onError={(e) => { e.target.src = "/default-service.png"; }}
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {selectedService.availability === 'available' ? (
                    <span className="bg-green-500/90 text-white px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm">
                      ● AVAILABLE
                    </span>
                  ) : (
                    <span className="bg-red-500/90 text-white px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm">
                      ● BUSY
                    </span>
                  )}
                  {selectedService.featured && (
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm flex items-center gap-1">
                      <FaStar className="text-xs" />
                      FEATURED
                    </span>
                  )}
                </div>
              </div>

              {/* Service Info */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedService.name}</h2>
                  <p className="text-orange-600 font-semibold text-lg">{selectedService.category}</p>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i} 
                        className={`text-lg ${i < Math.floor(selectedService.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="font-bold text-gray-700">{selectedService.rating}</span>
                  <span className="text-gray-500">({selectedService.reviews} reviews)</span>
                </div>

                <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <FaRupeeSign className="text-2xl" />
                    <span className="text-4xl font-black">{selectedService.price.toLocaleString()}</span>
                  </div>
                  {selectedService.originalPrice && selectedService.originalPrice > selectedService.price && (
                    <p className="text-white/80 line-through text-lg">
                      ₹{selectedService.originalPrice.toLocaleString()}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-gray-500 text-sm mb-1">Duration</p>
                    <p className="font-bold text-gray-900">{selectedService.duration}</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-gray-500 text-sm mb-1">Location</p>
                    <p className="font-bold text-gray-900">{selectedService.location}</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-gray-500 text-sm mb-1">Technician</p>
                    <p className="font-bold text-gray-900">{selectedService.technician}</p>
                    <p className="text-gray-500 text-xs">{selectedService.technicianExp}</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-gray-500 text-sm mb-1">Warranty</p>
                    <p className="font-bold text-gray-900">{selectedService.warranty}</p>
                  </div>
                </div>

                {selectedService.description && (
                  <div>
                    <p className="text-gray-500 text-sm mb-2">Description</p>
                    <p className="text-gray-700 leading-relaxed">{selectedService.description}</p>
                  </div>
                )}

                <div className="flex gap-4 pt-4">
                  <button
                    onClick={() => {
                      setShowViewModal(false);
                      handleEditService(selectedService);
                    }}
                    className="flex-1 bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 rounded-xl font-bold hover:from-orange-600 hover:to-red-700 transition-all duration-300"
                  >
                    Edit Service
                  </button>
                  <button
                    onClick={() => handleDuplicateService(selectedService)}
                    className="px-6 py-3 bg-purple-600 text-white rounded-xl font-bold hover:bg-purple-700 transition-colors"
                  >
                    Duplicate
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>

      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center">
          <div className="bg-white rounded-3xl p-8 flex items-center gap-4 shadow-2xl">
            <FaSpinner className="text-3xl text-orange-600 animate-spin" />
            <span className="text-xl font-bold text-gray-900">Processing...</span>
          </div>
        </div>
      )}
    </div>
  );
}

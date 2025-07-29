// src/pages/admin/ProductsManagement.jsx
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
  FaBoxOpen,
  FaTag,
  FaStar,
  FaCheckCircle,
  FaTimesCircle,
  FaImage,
  FaSortAmountDown,
  FaSortAmountUp,
  FaCopy,
  FaExternalLinkAlt,
  FaTimes,
  FaSave,
  FaSpinner,
  FaCamera,
  FaCloudUploadAlt,
  FaBars,
  FaTh,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

// Sample Products Data
const initialProducts = [
  {
    id: 1,
    name: "Industrial Hydraulic Pump HP-2500",
    category: "Hydraulic Tools",
    brand: "Bosch Professional",
    price: 45000,
    originalPrice: 52000,
    stock: 12,
    sku: "HP2500-BSH-001",
    status: "active",
    rating: 4.8,
    reviews: 24,
    image: "/hydraulic-pump.jpg",
    featured: true,
    description: "High-performance hydraulic pump for industrial applications",
    lastUpdated: "2025-07-25",
  },
  {
    id: 2,
    name: "Electric Grinder Pro-150",
    category: "Electrical Tools",
    brand: "Makita",
    price: 12500,
    originalPrice: 15000,
    stock: 8,
    sku: "EG150-MAK-002",
    status: "active",
    rating: 4.6,
    reviews: 18,
    image: "/electric-grinder.jpg",
    featured: false,
    description: "Professional electric grinder for precision work",
    lastUpdated: "2025-07-24",
  },
  {
    id: 3,
    name: "Safety Helmet Premium",
    category: "Safety Equipment",
    brand: "3M",
    price: 850,
    originalPrice: 1200,
    stock: 0,
    sku: "SH-3M-003",
    status: "out_of_stock",
    rating: 4.9,
    reviews: 56,
    image: "/safety-helmet.jpg",
    featured: false,
    description: "Premium safety helmet with advanced protection",
    lastUpdated: "2025-07-23",
  },
  {
    id: 4,
    name: "Welding Machine Arc-300",
    category: "Welding Equipment",
    brand: "Lincoln Electric",
    price: 35000,
    originalPrice: 40000,
    stock: 5,
    sku: "WM300-LE-004",
    status: "active",
    rating: 4.7,
    reviews: 31,
    image: "/welding-machine.jpg",
    featured: true,
    description: "Professional arc welding machine for heavy-duty work",
    lastUpdated: "2025-07-22",
  },
  {
    id: 5,
    name: "Measuring Tape Digital",
    category: "Measuring Tools",
    brand: "Stanley",
    price: 2200,
    originalPrice: 2800,
    stock: 25,
    sku: "MT-STN-005",
    status: "active",
    rating: 4.4,
    reviews: 12,
    image: "/measuring-tape.jpg",
    featured: false,
    description: "Digital measuring tape with LCD display",
    lastUpdated: "2025-07-21",
  },
];

const categories = [
  "All Categories",
  "Hydraulic Tools",
  "Electrical Tools", 
  "Safety Equipment",
  "Welding Equipment",
  "Measuring Tools",
  "Cutting Tools",
  "Pneumatic Tools",
];

const brands = [
  "All Brands", 
  "Bosch Professional",
  "Makita",
  "3M",
  "Lincoln Electric",
  "Stanley",
  "DeWalt",
  "Hilti",
];

export default function ProductsManagement() {
  const [products, setProducts] = useState(initialProducts);
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedBrand, setSelectedBrand] = useState("All Brands");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [viewMode, setViewMode] = useState("grid");
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);
  
  // Modal states
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  // Form states
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    brand: "",
    price: "",
    originalPrice: "",
    stock: "",
    sku: "",
    description: "",
    image: null,
    status: "active",
    featured: false,
  });

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 300);
  }, []);

  // Filter and Search Logic
  useEffect(() => {
    let filtered = products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.brand.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === "All Categories" || product.category === selectedCategory;
      const matchesBrand = selectedBrand === "All Brands" || product.brand === selectedBrand;
      const matchesStatus = selectedStatus === "all" || product.status === selectedStatus;

      return matchesSearch && matchesCategory && matchesBrand && matchesStatus;
    });

    // Sort products
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

    setFilteredProducts(filtered);
    setCurrentPage(1);
  }, [products, searchTerm, selectedCategory, selectedBrand, selectedStatus, sortBy, sortOrder]);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

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
      brand: "",
      price: "",
      originalPrice: "",
      stock: "",
      sku: "",
      description: "",
      image: null,
      status: "active",
      featured: false,
    });
  };

  // Product actions
  const handleAddProduct = () => {
    resetForm();
    setShowAddModal(true);
  };

  const handleEditProduct = (product) => {
    setSelectedProduct(product);
    setFormData({
      name: product.name,
      category: product.category,
      brand: product.brand,
      price: product.price.toString(),
      originalPrice: product.originalPrice?.toString() || "",
      stock: product.stock.toString(),
      sku: product.sku,
      description: product.description,
      image: null,
      status: product.status,
      featured: product.featured,
    });
    setShowEditModal(true);
  };

  const handleViewProduct = (product) => {
    setSelectedProduct(product);
    setShowViewModal(true);
  };

  const handleDeleteProduct = (productId) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setIsLoading(true);
      setTimeout(() => {
        setProducts(products.filter(p => p.id !== productId));
        setIsLoading(false);
        alert("Product deleted successfully!");
      }, 1000);
    }
  };

  const handleSaveProduct = () => {
    if (!formData.name || !formData.category || !formData.price) {
      alert("Please fill in all required fields");
      return;
    }

    setIsLoading(true);
    
    setTimeout(() => {
      if (showEditModal) {
        // Update existing product
        setProducts(products.map(p => 
          p.id === selectedProduct.id 
            ? {
                ...p,
                ...formData,
                price: parseFloat(formData.price),
                originalPrice: formData.originalPrice ? parseFloat(formData.originalPrice) : null,
                stock: parseInt(formData.stock),
                lastUpdated: new Date().toISOString().split('T')[0],
              }
            : p
        ));
        alert("Product updated successfully!");
        setShowEditModal(false);
      } else {
        // Add new product
        const newProduct = {
          id: Date.now(),
          ...formData,
          price: parseFloat(formData.price),
          originalPrice: formData.originalPrice ? parseFloat(formData.originalPrice) : null,
          stock: parseInt(formData.stock),
          rating: 0,
          reviews: 0,
          image: "/default-product.png",
          lastUpdated: new Date().toISOString().split('T')[0],
        };
        setProducts([...products, newProduct]);
        alert("Product added successfully!");
        setShowAddModal(false);
      }
      
      resetForm();
      setIsLoading(false);
    }, 1500);
  };

  const handleToggleStatus = (productId) => {
    setProducts(products.map(p => 
      p.id === productId 
        ? { ...p, status: p.status === 'active' ? 'inactive' : 'active' }
        : p
    ));
  };

  const handleToggleFeatured = (productId) => {
    setProducts(products.map(p => 
      p.id === productId 
        ? { ...p, featured: !p.featured }
        : p
    ));
  };

  const handleDuplicateProduct = (product) => {
    const duplicatedProduct = {
      ...product,
      id: Date.now(),
      name: product.name + " (Copy)",
      sku: product.sku + "-COPY",
      featured: false,
      lastUpdated: new Date().toISOString().split('T')[0],
    };
    setProducts([...products, duplicatedProduct]);
    alert("Product duplicated successfully!");
  };

  const handleBulkExport = () => {
    const csvContent = "data:text/csv;charset=utf-8," + 
      "Name,Category,Brand,Price,Stock,SKU,Status\n" +
      products.map(p => `${p.name},${p.category},${p.brand},${p.price},${p.stock},${p.sku},${p.status}`).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "products.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    alert("Products exported successfully!");
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

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'inactive': return 'bg-gray-100 text-gray-800';
      case 'out_of_stock': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'active': return <FaCheckCircle className="text-green-600" />;
      case 'inactive': return <FaTimesCircle className="text-gray-600" />;
      case 'out_of_stock': return <FaBoxOpen className="text-red-600" />;
      default: return <FaTimesCircle className="text-gray-600" />;
    }
  };

  // Modal Component
  const Modal = ({ isOpen, onClose, title, children, size = "max-w-2xl" }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className={`bg-white rounded-3xl shadow-2xl ${size} w-full max-h-[90vh] overflow-hidden`}>
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-3 sm:p-6">
      
      {/* Header - Fully Responsive */}
      <div className={`flex flex-col space-y-4 lg:flex-row lg:justify-between lg:items-center lg:space-y-0 mb-6 sm:mb-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="flex-1">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-2">
            Products Management
          </h1>
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg">
            Manage your machinery products, inventory, and pricing
          </p>
        </div>
        
        <div className="flex flex-wrap items-center gap-2 sm:gap-4">
          <button
            onClick={handleAddProduct}
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl text-sm sm:text-base font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <FaPlus className="text-sm sm:text-base" />
            <span className="hidden sm:inline">Add Product</span>
            <span className="sm:hidden">Add</span>
          </button>
          
          <button
            onClick={handleBulkImport}
            className="flex items-center gap-2 bg-white text-slate-700 px-3 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl text-sm sm:text-base font-semibold hover:bg-slate-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <FaUpload className="text-sm sm:text-base" />
            <span className="hidden sm:inline">Import</span>
          </button>
          
          <button
            onClick={handleBulkExport}
            className="flex items-center gap-2 bg-white text-slate-700 px-3 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl text-sm sm:text-base font-semibold hover:bg-slate-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <FaDownload className="text-sm sm:text-base" />
            <span className="hidden sm:inline">Export</span>
          </button>
        </div>
      </div>

      {/* Stats Cards - Responsive Grid */}
      <div className={`grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-8 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        {[
          { title: "Total Products", value: products.length, icon: FaBoxOpen, color: "from-blue-500 to-blue-600", bg: "bg-blue-50" },
          { title: "Active Products", value: products.filter(p => p.status === 'active').length, icon: FaCheckCircle, color: "from-green-500 to-green-600", bg: "bg-green-50" },
          { title: "Out of Stock", value: products.filter(p => p.status === 'out_of_stock').length, icon: FaTimesCircle, color: "from-red-500 to-red-600", bg: "bg-red-50" },
          { title: "Featured", value: products.filter(p => p.featured).length, icon: FaStar, color: "from-yellow-500 to-yellow-600", bg: "bg-yellow-50" },
        ].map((stat, index) => (
          <div key={stat.title} className="bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-white/20">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
              <div className="mb-2 sm:mb-0">
                <p className="text-slate-500 text-xs sm:text-sm font-medium mb-1">{stat.title}</p>
                <p className="text-xl sm:text-3xl font-black text-slate-900">{stat.value}</p>
              </div>
              <div className={`p-2 sm:p-4 rounded-xl sm:rounded-2xl ${stat.bg} self-end sm:self-auto`}>
                <stat.icon className={`text-lg sm:text-2xl bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Filters and Search - Fully Responsive */}
      <div className={`bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg mb-6 sm:mb-8 border border-white/20 transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        
        {/* Search Bar - Full width on mobile */}
        <div className="mb-4 sm:mb-6">
          <div className="relative">
            <FaSearch className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-slate-400 text-sm sm:text-base" />
            <input
              type="text"
              placeholder="Search products, SKU, brand..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 sm:pl-12 pr-4 py-2 sm:py-3 border border-slate-200 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm sm:text-base"
            />
          </div>
        </div>

        {/* Filters - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 mb-4 sm:mb-6">
          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 sm:px-4 py-2 sm:py-3 border border-slate-200 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm sm:text-base"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>

          {/* Brand Filter */}
          <select
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            className="px-3 sm:px-4 py-2 sm:py-3 border border-slate-200 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm sm:text-base"
          >
            {brands.map(brand => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>

          {/* Status Filter */}
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-3 sm:px-4 py-2 sm:py-3 border border-slate-200 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm sm:text-base"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="out_of_stock">Out of Stock</option>
          </select>

          {/* Sort By */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 sm:px-4 py-2 sm:py-3 border border-slate-200 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm sm:text-base"
          >
            <option value="name">Sort by Name</option>
            <option value="price">Sort by Price</option>
            <option value="stock">Sort by Stock</option>
            <option value="rating">Sort by Rating</option>
            <option value="lastUpdated">Sort by Date</option>
          </select>

          {/* Sort Order */}
          <div className="flex gap-2">
            <button
              onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
              className="flex-1 sm:flex-none px-3 sm:px-4 py-2 sm:py-3 bg-slate-100 hover:bg-slate-200 rounded-xl sm:rounded-2xl transition-colors flex items-center justify-center"
            >
              {sortOrder === 'asc' ? <FaSortAmountUp /> : <FaSortAmountDown />}
            </button>
          </div>
        </div>

        {/* View Controls - Mobile Optimized */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="text-slate-600 font-medium text-sm sm:text-base">
            Showing {currentProducts.length} of {filteredProducts.length} products
          </div>
          
          <div className="flex items-center gap-2 bg-slate-100 rounded-xl sm:rounded-2xl p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl transition-all text-sm sm:text-base ${viewMode === 'grid' ? 'bg-white shadow-sm' : 'hover:bg-slate-200'}`}
            >
              <FaTh className="text-sm" />
              <span className="hidden sm:inline">Grid</span>
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl transition-all text-sm sm:text-base ${viewMode === 'table' ? 'bg-white shadow-sm' : 'hover:bg-slate-200'}`}
            >
              <FaBars className="text-sm" />
              <span className="hidden sm:inline">Table</span>
            </button>
          </div>
        </div>
      </div>

      {/* Products Display - Responsive */}
      <div className={`transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        {viewMode === 'grid' ? (
          /* Grid View - Responsive */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {currentProducts.map((product, index) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-white/20 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Product Image */}
                <div className="relative h-36 sm:h-48 bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => { e.target.src = "/default-product.png"; }}
                  />
                  
                  {/* Status Badge */}
                  <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
                    <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(product.status)}`}>
                      {product.status.replace('_', ' ').toUpperCase()}
                    </span>
                  </div>

                  {/* Featured Badge */}
                  {product.featured && (
                    <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                      <FaStar className="text-yellow-500 text-base sm:text-lg" />
                    </div>
                  )}

                  {/* Quick Actions Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 sm:gap-3">
                    <button
                      onClick={() => handleViewProduct(product)}
                      className="p-2 sm:p-3 bg-white/90 rounded-full hover:bg-white transition-colors"
                      title="View Product"
                    >
                      <FaEye className="text-green-600 text-sm sm:text-base" />
                    </button>
                    <button
                      onClick={() => handleEditProduct(product)}
                      className="p-2 sm:p-3 bg-white/90 rounded-full hover:bg-white transition-colors"
                      title="Edit Product"
                    >
                      <FaEdit className="text-blue-600 text-sm sm:text-base" />
                    </button>
                    <button
                      onClick={() => handleDuplicateProduct(product)}
                      className="p-2 sm:p-3 bg-white/90 rounded-full hover:bg-white transition-colors"
                      title="Duplicate Product"
                    >
                      <FaCopy className="text-purple-600 text-sm sm:text-base" />
                    </button>
                    <button
                      onClick={() => handleDeleteProduct(product.id)}
                      className="p-2 sm:p-3 bg-white/90 rounded-full hover:bg-white transition-colors"
                      title="Delete Product"
                    >
                      <FaTrash className="text-red-600 text-sm sm:text-base" />
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4 sm:p-6">
                  <div className="flex items-start justify-between mb-2 sm:mb-3">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-slate-900 text-sm sm:text-lg mb-1 truncate">{product.name}</h3>
                      <p className="text-slate-500 text-xs sm:text-sm">{product.brand} • {product.category}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-2 sm:mb-3">
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-400 text-xs sm:text-sm" />
                      <span className="text-slate-600 text-xs sm:text-sm font-medium">{product.rating}</span>
                    </div>
                    <span className="text-slate-400">•</span>
                    <span className="text-slate-600 text-xs sm:text-sm">{product.reviews} reviews</span>
                  </div>

                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div>
                      <p className="text-lg sm:text-2xl font-black text-blue-600">₹{product.price.toLocaleString()}</p>
                      {product.originalPrice && product.originalPrice > product.price && (
                        <p className="text-xs sm:text-sm text-slate-400 line-through">₹{product.originalPrice.toLocaleString()}</p>
                      )}
                      <p className="text-slate-500 text-xs sm:text-sm">SKU: {product.sku}</p>
                    </div>
                    <div className="text-right">
                      <p className={`text-xs sm:text-sm font-semibold ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        Stock: {product.stock}
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons - Mobile Optimized */}
                  <div className="grid grid-cols-2 sm:flex gap-2">
                    <button
                      onClick={() => handleEditProduct(product)}
                      className="flex-1 bg-blue-50 text-blue-600 py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold hover:bg-blue-100 transition-colors"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleToggleStatus(product.id)}
                      className={`flex-1 py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold transition-colors ${
                        product.status === 'active' 
                          ? 'bg-red-50 text-red-600 hover:bg-red-100' 
                          : 'bg-green-50 text-green-600 hover:bg-green-100'
                      }`}
                    >
                      {product.status === 'active' ? 'Deactivate' : 'Activate'}
                    </button>
                    <button
                      onClick={() => handleToggleFeatured(product.id)}
                      className="sm:w-auto px-3 sm:px-4 py-2 bg-yellow-50 text-yellow-600 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold hover:bg-yellow-100 transition-colors flex items-center justify-center"
                    >
                      <FaStar />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Table View - Mobile Responsive */
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden border border-white/20">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px]">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="text-left py-3 sm:py-4 px-3 sm:px-6 font-semibold text-slate-700 text-sm sm:text-base">Product</th>
                    <th className="text-left py-3 sm:py-4 px-3 sm:px-6 font-semibold text-slate-700 text-sm sm:text-base">Category</th>
                    <th className="text-left py-3 sm:py-4 px-3 sm:px-6 font-semibold text-slate-700 text-sm sm:text-base">Price</th>
                    <th className="text-left py-3 sm:py-4 px-3 sm:px-6 font-semibold text-slate-700 text-sm sm:text-base">Stock</th>
                    <th className="text-left py-3 sm:py-4 px-3 sm:px-6 font-semibold text-slate-700 text-sm sm:text-base">Status</th>
                    <th className="text-left py-3 sm:py-4 px-3 sm:px-6 font-semibold text-slate-700 text-sm sm:text-base">Rating</th>
                    <th className="text-left py-3 sm:py-4 px-3 sm:px-6 font-semibold text-slate-700 text-sm sm:text-base">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {currentProducts.map((product, index) => (
                    <tr key={product.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="py-3 sm:py-4 px-3 sm:px-6">
                        <div className="flex items-center gap-3 sm:gap-4">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-10 sm:w-12 h-10 sm:h-12 object-cover rounded-lg sm:rounded-xl"
                            onError={(e) => { e.target.src = "/default-product.png"; }}
                          />
                          <div>
                            <h4 className="font-semibold text-slate-900 text-sm sm:text-base">{product.name}</h4>
                            <p className="text-slate-500 text-xs sm:text-sm">{product.sku}</p>
                          </div>
                          {product.featured && <FaStar className="text-yellow-500 text-sm" />}
                        </div>
                      </td>
                      <td className="py-3 sm:py-4 px-3 sm:px-6">
                        <div>
                          <p className="font-medium text-slate-900 text-sm sm:text-base">{product.category}</p>
                          <p className="text-slate-500 text-xs sm:text-sm">{product.brand}</p>
                        </div>
                      </td>
                      <td className="py-3 sm:py-4 px-3 sm:px-6">
                        <p className="font-bold text-sm sm:text-lg text-blue-600">₹{product.price.toLocaleString()}</p>
                        {product.originalPrice && product.originalPrice > product.price && (
                          <p className="text-xs text-slate-400 line-through">₹{product.originalPrice.toLocaleString()}</p>
                        )}
                      </td>
                      <td className="py-3 sm:py-4 px-3 sm:px-6">
                        <p className={`font-semibold text-sm sm:text-base ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {product.stock}
                        </p>
                      </td>
                      <td className="py-3 sm:py-4 px-3 sm:px-6">
                        <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(product.status)}`}>
                          {product.status.replace('_', ' ').toUpperCase()}
                        </span>
                      </td>
                      <td className="py-3 sm:py-4 px-3 sm:px-6">
                        <div className="flex items-center gap-1">
                          <FaStar className="text-yellow-400 text-sm" />
                          <span className="font-medium text-sm">{product.rating}</span>
                          <span className="text-slate-500 text-xs">({product.reviews})</span>
                        </div>
                      </td>
                      <td className="py-3 sm:py-4 px-3 sm:px-6">
                        <div className="flex items-center gap-1 sm:gap-2">
                          <button
                            onClick={() => handleViewProduct(product)}
                            className="p-1.5 sm:p-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors"
                            title="View"
                          >
                            <FaEye className="text-xs sm:text-sm" />
                          </button>
                          <button
                            onClick={() => handleEditProduct(product)}
                            className="p-1.5 sm:p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
                            title="Edit"
                          >
                            <FaEdit className="text-xs sm:text-sm" />
                          </button>
                          <button
                            onClick={() => handleDuplicateProduct(product)}
                            className="p-1.5 sm:p-2 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 transition-colors"
                            title="Duplicate"
                          >
                            <FaCopy className="text-xs sm:text-sm" />
                          </button>
                          <button
                            onClick={() => handleDeleteProduct(product.id)}
                            className="p-1.5 sm:p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
                            title="Delete"
                          >
                            <FaTrash className="text-xs sm:text-sm" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Pagination - Mobile Responsive */}
      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row items-center justify-between mt-6 sm:mt-8 gap-4">
          <div className="text-slate-600 text-sm sm:text-base">
            Page {currentPage} of {totalPages}
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 sm:p-3 bg-white shadow-lg rounded-xl hover:bg-slate-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FaChevronLeft className="text-sm" />
            </button>
            
            {/* Page Numbers - Show fewer on mobile */}
            <div className="flex gap-1 sm:gap-2">
              {Array.from({ length: Math.min(totalPages, window.innerWidth < 640 ? 3 : 5) }, (_, i) => {
                let pageNum;
                if (totalPages <= 5 || window.innerWidth < 640 && totalPages <= 3) {
                  pageNum = i + 1;
                } else {
                  const start = Math.max(1, currentPage - Math.floor((window.innerWidth < 640 ? 3 : 5) / 2));
                  pageNum = start + i;
                }
                
                if (pageNum > totalPages) return null;
                
                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`px-3 sm:px-4 py-2 sm:py-3 rounded-xl font-semibold transition-colors text-sm sm:text-base ${
                      currentPage === pageNum
                        ? 'bg-blue-600 text-white'
                        : 'bg-white hover:bg-slate-50 text-slate-700'
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
              className="p-2 sm:p-3 bg-white shadow-lg rounded-xl hover:bg-slate-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FaChevronRight className="text-sm" />
            </button>
          </div>
        </div>
      )}

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg p-8 sm:p-12 text-center border border-white/20">
          <FaBoxOpen className="text-4xl sm:text-6xl text-slate-300 mx-auto mb-4 sm:mb-6" />
          <h3 className="text-xl sm:text-2xl font-bold text-slate-700 mb-3 sm:mb-4">No Products Found</h3>
          <p className="text-slate-500 mb-6 sm:mb-8 text-sm sm:text-base">
            {searchTerm || selectedCategory !== "All Categories" || selectedBrand !== "All Brands" || selectedStatus !== "all"
              ? "Try adjusting your filters or search terms"
              : "Start by adding your first product to the inventory"
            }
          </p>
          <button
            onClick={handleAddProduct}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 sm:px-8 py-3 rounded-xl sm:rounded-2xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
          >
            <FaPlus className="inline mr-2" />
            Add Your First Product
          </button>
        </div>
      )}

      {/* Add/Edit Product Modal */}
      <Modal
        isOpen={showAddModal || showEditModal}
        onClose={() => {
          setShowAddModal(false);
          setShowEditModal(false);
          resetForm();
        }}
        title={showEditModal ? "Edit Product" : "Add New Product"}
        size="max-w-4xl"
      >
        <div className="p-6">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Product Name */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Product Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="Enter product name"
                />
              </div>

              {/* SKU */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">SKU *</label>
                <input
                  type="text"
                  name="sku"
                  value={formData.sku}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="Enter SKU"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Category *</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                >
                  <option value="">Select Category</option>
                  {categories.slice(1).map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Brand */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Brand *</label>
                <select
                  name="brand"
                  value={formData.brand}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                >
                  <option value="">Select Brand</option>
                  {brands.slice(1).map(brand => (
                    <option key={brand} value={brand}>{brand}</option>
                  ))}
                </select>
              </div>

              {/* Price */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Price (₹) *</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  required
                  min="0"
                  step="0.01"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="Enter price"
                />
              </div>

              {/* Original Price */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Original Price (₹)</label>
                <input
                  type="number"
                  name="originalPrice"
                  value={formData.originalPrice}
                  onChange={handleInputChange}
                  min="0"
                  step="0.01"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="Enter original price (optional)"
                />
              </div>

              {/* Stock */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Stock Quantity *</label>
                <input
                  type="number"
                  name="stock"
                  value={formData.stock}
                  onChange={handleInputChange}
                  required
                  min="0"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="Enter stock quantity"
                />
              </div>

              {/* Status */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Status *</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="out_of_stock">Out of Stock</option>
                </select>
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none"
                placeholder="Enter product description"
              />
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Product Image</label>
              <div className="border-2 border-dashed border-slate-200 rounded-2xl p-6 text-center hover:border-blue-400 transition-colors">
                <input
                  type="file"
                  onChange={handleImageUpload}
                  accept="image/*"
                  className="hidden"
                  id="image-upload"
                />
                <label htmlFor="image-upload" className="cursor-pointer">
                  <FaCloudUploadAlt className="text-4xl text-slate-400 mx-auto mb-4" />
                  <p className="text-slate-600 mb-2">Click to upload product image</p>
                  <p className="text-slate-500 text-sm">JPG, PNG or GIF (Max 10MB)</p>
                  {formData.image && (
                    <p className="text-blue-600 font-medium mt-2">
                      Selected: {formData.image.name}
                    </p>
                  )}
                </label>
              </div>
            </div>

            {/* Featured Toggle */}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                name="featured"
                checked={formData.featured}
                onChange={handleInputChange}
                className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                id="featured-toggle"
              />
              <label htmlFor="featured-toggle" className="text-sm font-semibold text-slate-700">
                Mark as Featured Product
              </label>
            </div>

            {/* Form Actions */}
            <div className="flex flex-col sm:flex-row justify-end gap-4 pt-6 border-t border-slate-200">
              <button
                type="button"
                onClick={() => {
                  setShowAddModal(false);
                  setShowEditModal(false);
                  resetForm();
                }}
                className="px-6 py-3 bg-slate-100 text-slate-700 rounded-xl font-semibold hover:bg-slate-200 transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSaveProduct}
                disabled={isLoading}
                className="flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <FaSpinner className="animate-spin" />
                    {showEditModal ? "Updating..." : "Adding..."}
                  </>
                ) : (
                  <>
                    <FaSave />
                    {showEditModal ? "Update Product" : "Add Product"}
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </Modal>

      {/* View Product Modal */}
      <Modal
        isOpen={showViewModal}
        onClose={() => setShowViewModal(false)}
        title="Product Details"
        size="max-w-4xl"
      >
        {selectedProduct && (
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Product Image */}
              <div>
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-64 sm:h-80 object-cover rounded-2xl"
                  onError={(e) => { e.target.src = "/default-product.png"; }}
                />
              </div>

              {/* Product Info */}
              <div className="space-y-4">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">{selectedProduct.name}</h2>
                  <p className="text-slate-600">{selectedProduct.brand} • {selectedProduct.category}</p>
                </div>

                <div className="flex items-center gap-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(selectedProduct.status)}`}>
                    {selectedProduct.status.replace('_', ' ').toUpperCase()}
                  </span>
                  {selectedProduct.featured && (
                    <span className="flex items-center gap-1 text-yellow-600">
                      <FaStar />
                      Featured
                    </span>
                  )}
                </div>

                <div>
                  <p className="text-3xl font-black text-blue-600 mb-1">₹{selectedProduct.price.toLocaleString()}</p>
                  {selectedProduct.originalPrice && selectedProduct.originalPrice > selectedProduct.price && (
                    <p className="text-lg text-slate-400 line-through">₹{selectedProduct.originalPrice.toLocaleString()}</p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-slate-500 text-sm">SKU</p>
                    <p className="font-semibold">{selectedProduct.sku}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm">Stock</p>
                    <p className={`font-semibold ${selectedProduct.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {selectedProduct.stock} units
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm">Rating</p>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-400" />
                      <span className="font-semibold">{selectedProduct.rating}</span>
                      <span className="text-slate-500">({selectedProduct.reviews} reviews)</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm">Last Updated</p>
                    <p className="font-semibold">{selectedProduct.lastUpdated}</p>
                  </div>
                </div>

                {selectedProduct.description && (
                  <div>
                    <p className="text-slate-500 text-sm mb-2">Description</p>
                    <p className="text-slate-700">{selectedProduct.description}</p>
                  </div>
                )}

                <div className="flex gap-4 pt-4">
                  <button
                    onClick={() => {
                      setShowViewModal(false);
                      handleEditProduct(selectedProduct);
                    }}
                    className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Edit Product
                  </button>
                  <button
                    onClick={() => handleDuplicateProduct(selectedProduct)}
                    className="px-6 py-3 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition-colors"
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
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white rounded-2xl p-8 flex items-center gap-4">
            <FaSpinner className="text-2xl text-blue-600 animate-spin" />
            <span className="text-lg font-semibold text-slate-900">Processing...</span>
          </div>
        </div>
      )}
    </div>
  );
}

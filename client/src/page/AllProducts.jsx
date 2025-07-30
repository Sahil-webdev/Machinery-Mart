"use client"

import { useState } from "react"
import {
  Search,
  SlidersHorizontal,
  ArrowLeft,
  Grid3X3,
  List,
  Heart,
  Star,
  ShoppingBag,
  ArrowRight,
  TrendingUp,
} from "lucide-react"
import { Link } from "react-router-dom"

const ProductsPage = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("popular")
  const [showFilters, setShowFilters] = useState(false)

  const categories = [
    {
      id: "all",
      name: "All Products",
      gradient: "from-blue-600 to-indigo-600",
      bg: "bg-blue-50",
      text: "text-blue-700",
      border: "border-blue-200",
    }
  ]

  const sortOptions = [
    { id: "popular", name: "Most Popular" },
    { id: "price-low", name: "Price: Low to High" },
    { id: "price-high", name: "Price: High to Low" },
    { id: "newest", name: "Newest First" },
    { id: "rating", name: "Highest Rated" },
  ]

  const products = [
    {
      id: 1,
      name: "Silver Plate Bowl Disposal",
      category: "men",
      price: 2445,
      originalPrice: 3445,
      rating: 3.5,
      image: "https://tiimg.tistatic.com/fp/1/007/978/light-weight-silver-paper-disposable-dona-134.jpg",
      isNew: true,
      features: ["Premium Quality", "Limited Edition", "Free Shipping"],
    },
    {
      id: 2,
      name: "Disposal square shape dona",
      category: "women",
      price: 1899,
      originalPrice: 2499,
      rating: 4.2,
      image: "https://i0.wp.com/www.apnadukan.net/wp-content/uploads/2021/09/dona.png?fit=500%2C500&ssl=1",
      isNew: false,
      features: ["Handcrafted", "Exclusive"],
    },
    {
      id: 3,
      name: "Natural disposal round bowl dona",
      category: "women",
      price: 1299,
      originalPrice: 1799,
      rating: 4.0,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRacLXg15OLx1T_FZBAAI8VW1T0cvT2OwX-ig&s",
      isNew: false,
      features: ["Vintage Style", "Authentic", "Rare Find"],
    },
    {
      id: 4,
      name: "Natural disposal dona pattal",
      category: "men",
      price: 999,
      originalPrice: 1399,
      rating: 3.8,
      image: "https://5.imimg.com/data5/ANDROID/Default/2022/7/WW/GV/RY/30445300/product-jpeg-500x500.jpg",
      isNew: true,
      features: ["Casual Wear", "Comfortable", "Trendy"],
    },
    {
      id: 5,
      name: "Silver round disposal plate",
      category: "kids",
      price: 799,
      originalPrice: 999,
      rating: 4.1,
      image: "https://rukminim2.flixcart.com/image/612/612/kmz7qfk0/bowl/k/u/h/dona-dona-pattal-silver-plate-rice-plate-diameter-7-inch-size-original-imagfrj3hpv229yn.jpeg?q=70",
      isNew: false,
      features: ["Kids Fashion", "Safe Materials", "Colorful"],
    },
    {
      id: 6,
      name: "Wood leaf biodegradable pattal",
      category: "women",
      price: 599,
      originalPrice: 799,
      rating: 4.3,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/dinner-set/u/g/h/no-50-biodegradable-pattal-dinner-plate-disposable-dinner-plates-original-imaghzzpcrbz2ys3.jpeg?q=70",
      isNew: true,
      features: ["Summer Collection", "Lightweight", "Breathable"],
    },
    {
      id: 7,
      name: "biodegradable leaf pattal plate",
      category: "men",
      price: 1599,
      originalPrice: 1999,
      rating: 4.5,
      image: "https://rukminim2.flixcart.com/image/612/612/kcgk1ow0/plate-tray-dish/w/e/n/biodegradable-leaf-pattal-plates-5-compartment-25-plates-original-imaftkpuuzf4ushf.jpeg?q=70",
      isNew: false,
      features: ["Classic Design", "Formal Wear", "Premium"],
    },
    {
      id: 8,
      name: "Natural palash leaf pattal",
      category: "women",
      price: 2199,
      originalPrice: 2799,
      rating: 4.4,
      image: "https://rukminim2.flixcart.com/image/612/612/l5e81ow0/plate-tray-dish/p/s/m/pattal-30-piece-100-natural-palash-leaves-pattal-disposable-original-imagg2xnubzcfx67.jpeg?q=70",
      isNew: true,
      features: ["Evening Wear", "Elegant", "Sophisticated"],
    }
  ]

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const selectedCategoryData = categories.find((cat) => cat.id === selectedCategory) || categories[0]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 pb-25 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-indigo-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-cyan-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-200/40 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 px-4 py-6 md:px-6 lg:px-8 max-w-7xl mx-auto md:py-6 pb-24">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 md:mb-6">
          <Link to="/" className="flex items-center gap-4 md:gap-3">
            <button className="p-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 md:p-2 md:rounded-xl">
              <ArrowLeft className="text-white md:w-5 md:h-5" size={24} />
            </button>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent md:text-xl">
                Premium Products
              </h1>
            </div>
          </Link>

          <div className="flex items-center gap-3 md:gap-3">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="p-3 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-indigo-500/25 md:p-2 md:rounded-xl"
            >
              <SlidersHorizontal className="text-white md:w-5 md:h-5" size={24} />
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-8 md:mb-6">
          <div className="flex bg-white items-center h-14 pl-5 px-3 py-4 rounded-2xl shadow-lg border border-gray-200 md:py-3 md:rounded-xl md:pl-4 md:px-3 md:h-12 hover:shadow-xl hover:border-blue-300 transition-all duration-300">
            <Search size={24} className="text-blue-500 md:w-5 md:h-5" />
            <input
              className="w-full pl-4 outline-none bg-transparent text-gray-700 placeholder-gray-400 font-medium md:text-sm md:pl-3"
              type="text"
              placeholder="Search premium products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-10 md:mb-8">
          <div className="flex gap-4 mb-6 overflow-x-auto pb-2 md:gap-3 md:mb-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex-shrink-0 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 md:px-5 md:py-3 md:rounded-xl md:text-sm ${selectedCategory === category.id
                  ? `bg-gradient-to-r ${category.gradient} text-white shadow-lg hover:shadow-xl transform scale-105`
                  : `${category.bg} ${category.text} hover:shadow-lg ${category.border} border hover:scale-105 bg-white`
                  }`}
              >
                {category.name} <span className="opacity-70">({category.count})</span>
              </button>
            ))}
          </div>

          {/* Sort Options */}
          {showFilters && (
            <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-200 md:rounded-2xl md:p-4">
              <h3 className="text-gray-800 font-semibold text-lg mb-4 md:text-base md:mb-3">Sort By</h3>
              <div className="flex flex-wrap gap-3 md:gap-2">
                {sortOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setSortBy(option.id)}
                    className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 md:px-3 md:py-2 md:rounded-lg md:text-sm ${sortBy === option.id
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-blue-50"
                      }`}
                  >
                    {option.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Products Count */}
        <div className="flex items-center justify-between mb-8 md:mb-6">
          <div
            className={`${selectedCategoryData.bg} px-6 py-4 rounded-2xl ${selectedCategoryData.border} border shadow-lg md:px-4 md:py-3 md:rounded-xl bg-white`}
          >
            <p className={`${selectedCategoryData.text} text-lg md:text-base font-bold`}>
              Showing <span className="text-2xl md:text-xl text-blue-600">{filteredProducts.length}</span> Premium
              Products
            </p>
          </div>
        </div>

        {/* Products Grid - Better mobile proportions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-15 md:mb-10 px-2 md:px-0">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl md:rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-blue-200"
            >
              {/* Popular Badge */}

              {/* Heart Icon */}
              <button className="absolute top-2 left-2 z-20 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:scale-110 transition-all duration-300 md:top-4 md:left-4 md:p-2 hover:bg-blue-50 border border-gray-200">
                <Heart
                  className="text-gray-400 hover:text-blue-500 transition-colors duration-300 w-3 h-3 md:w-4 md:h-4"
                  size={12}
                />
              </button>

              {/* Product Image - Reduced height for mobile */}
              <div className="relative h-32 md:h-52 overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 opacity-90"></div>

                {/* Price Badge - Smaller for mobile */}
                <div className="absolute bottom-2 right-2 bg-white/95 backdrop-blur-sm rounded-lg px-2 py-1 shadow-lg md:bottom-4 md:right-4 md:px-3 md:py-2 md:rounded-xl border border-white/50">
                  <div className="text-right">
                    <div className="text-sm font-bold text-gray-800 md:text-xl">${product.price}</div>
                    <div className="text-xs text-gray-500 line-through font-medium md:text-sm">
                      ${product.originalPrice}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Content - Reduced padding for mobile */}
              <div className="p-3 md:p-5">
                {/* Product Header */}
                <div className="mb-2 md:mb-3">
                  <h3 className="text-gray-800 font-bold text-sm md:text-xl mb-1 md:mb-2 group-hover:text-blue-600 transition-all duration-300 line-clamp-2">
                    {product.name}
                  </h3>

                  {/* Rating & Reviews - Simplified for mobile */}
                  <div className="flex items-center justify-between mb-2 md:mb-3">
                    <div className="flex items-center gap-1 md:gap-3">
                      <div className="flex items-center bg-yellow-100 px-2 py-1 rounded-full border border-yellow-200 md:px-3 md:py-1.5">
                        <Star size={12} fill="currentColor" className="text-yellow-500 md:w-4 md:h-4" />
                        <span className="text-yellow-700 text-xs md:text-sm ml-1 font-bold">{product.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features - Show only 2 on mobile */}
                <div className="mb-3 md:mb-5">
                  <div className="flex flex-wrap gap-1 md:gap-1.5">
                    {product.features.slice(0, 2).map((feature, index) => (
                      <span
                        key={index}
                        className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full font-medium shadow-sm border border-blue-100 md:text-sm md:px-2 md:py-1"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button - Smaller for mobile */}
                <Link to={`/product/${product.id}`}>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-2 md:p-3 rounded-xl md:rounded-2xl font-bold text-sm md:text-base hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group-hover:scale-105 flex items-center justify-center gap-2 md:gap-2 shadow-lg hover:from-blue-700 hover:to-indigo-700">
                    <span>Add to Cart</span>
                  </button>
                </Link>

                {/* Trending Indicator - Smaller for mobile */}

              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-3xl p-12 md:p-10 shadow-2xl border border-gray-100 md:rounded-2xl">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex p-5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl shadow-lg mb-8 md:p-4 md:rounded-2xl md:mb-6">
              <ShoppingBag className="text-white md:w-8 md:h-8" size={40} />
            </div>
            <h2 className="text-4xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-4">
              Discover More{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Premium Products
              </span>
            </h2>
            <p className="text-gray-600 text-xl md:text-lg mb-10 md:mb-8 leading-relaxed font-medium">
              Explore our complete collection of premium products. From trending styles to exclusive collections, find
              exactly what you're looking for with guaranteed quality.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-12 py-5 md:px-10 md:py-4 rounded-2xl md:rounded-xl font-bold text-xl md:text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-4 md:gap-3 shadow-lg hover:from-blue-700 hover:to-indigo-700">
              Explore All Products
              <ArrowRight className="md:w-6 md:h-6" size={28} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsPage

"use client"

import { useState } from "react"
import {
  Bell,
  ShoppingBasket,
  Search,
  SlidersHorizontal,
  ShoppingBag,
  Heart,
  Star,
  ArrowRight,
  TrendingUp,
} from "lucide-react"
import { Link } from "react-router-dom"
import prfimg from "../assets/user.png"
import cranehook from "../assets/Cranehook.jpg"

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState("men")
  const [activeTab, setActiveTab] = useState("home")

  const handleCategoryClick = (categoryName) => {
    setActiveCategory(categoryName)
    console.log(`Selected category: ${categoryName}`)
  }

  const handleTabClick = (tabName) => {
    setActiveTab(tabName)
    console.log(`Navigating to ${tabName}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 text-gray-800">
      <div className="px-4 py-10 md:px-6 lg:px-8 max-w-7xl mx-auto md:py-8 ">
        {/* Header Section */}
        <div className="flex gap-5 justify-between md:gap-4">
          <div className="flex gap-3 justify-center items-center md:gap-3">
            <div className="relative">
              <img
                src={prfimg}
                className="w-12 h-12 rounded-full border-2 border-cyan-600 shadow-lg md:w-12 md:h-12 md:border-2"
                alt="Profile"
              />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-white md:w-4 md:h-4 md:border-2 md:-bottom-1 md:-right-1"></div>
            </div>
            <div className="space-y-[-1px]">
              <h1 className="font-bold text-gray-800 text-[20px] md:text-xl">Hello Vanish</h1>
              {/* <p className="text-gray-600 text-[12px] md:text-sm">Welcome to AL Official Group</p> */}
            </div>
          </div>

          <div className="flex gap-4 justify-center items-center md:gap-4">
            <button className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl md:p-3 md:rounded-2xl">
              <Bell className="hover:scale-105 text-white md:w-6 md:h-6" size={24} />
            </button>

            <button className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl md:p-3 md:rounded-2xl">
              <Link to="/cart">
                <ShoppingBasket className="hover:scale-105 text-white md:w-6 md:h-6" size={24} />
              </Link>
            </button>
          </div>
        </div>

        {/* Search Bar
        <div className="my-8 md:my-8">
          <div className="flex bg-white/80 backdrop-blur-sm items-center h-13 pl-4 px-2 py-3 rounded-3xl shadow-xl border border-indigo-100 md:py-4 md:rounded-3xl md:pl-5 md:px-3 md:h-16">
            <Search size={24} className="text-indigo-500 md:w-6 md:h-6" />
            <input
              className="w-full pl-3 outline-none bg-transparent text-gray-700 placeholder-indigo-400 font-medium md:text-base md:pl-4"
              type="text"
              placeholder="Search products..."
            />
            <button className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg md:p-3 md:rounded-2xl">
              <SlidersHorizontal size={20} className="text-white md:w-5 md:h-5" />
            </button>
          </div>
        </div> */}

        {/* Hero Section */}
        <div className="my-8 md:my-8">
          <div className="rounded-3xl overflow-hidden relative shadow-2xl md:rounded-3xl">
            <div className="relative bg-[url('https://www.maximcrane.com/wp-content/uploads/2023/07/Red-Crane-Hook-scaled.jpg')] h-100 bg-cover bg-center p-8 md:p-12">
              {/* Greyish Overlay */}
              <div className="absolute inset-0 bg-black/30"></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col justify-center items-center ">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">Quality Machinery for Every Need</h2>
                <p className="text-cyan-100 text-lg mb-6 md:text-xl md:mb-8">Reliable tools and equipment for all industries in India.</p>
                <button className="bg-white text-cyan-700 px-6 py-3 rounded-2xl font-semibold hover:bg-cyan-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 md:px-10 md:py-4 md:rounded-2xl md:text-lg">
                  EXPLORE OUR RANGE
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Category Section */}
        <div className="py-6 bg-gradient-to-br from-white via-indigo-50/50 to-blue-50/50 rounded-3xl shadow-xl border border-white/50 mb-8 md:py-10 md:rounded-3xl md:mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center md:text-4xl md:mb-10">Categories</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-6 md:gap-8 md:px-10">
            {/* Men's Style Category */}
            <button
              className={`flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 rounded-2xl text-lg font-medium text-center md:text-xl md:rounded-3xl
                                transition-all duration-300 ease-in-out transform border-2 md:border-2
                                ${activeCategory === "men"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-xl scale-105 border-transparent"
                  : "bg-white text-gray-700 shadow-lg hover:shadow-xl hover:scale-105 border-indigo-200 hover:border-indigo-400"
                }`}
              onClick={() => handleCategoryClick("men")}
            >
              <img
                src="https://placehold.co/64x64/10B981/FFFFFF?text=Men"
                alt="Men's Style"
                className="h-16 w-16 object-contain mb-3 rounded-full border-2 border-emerald-300 md:h-20 md:w-20 md:mb-4 md:border-2 md:rounded-full"
              />
              Men's Style
            </button>

            {/* Women's Style Category */}
            <button
              className={`flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 rounded-2xl text-lg font-medium text-center md:text-xl md:rounded-3xl
                                transition-all duration-300 ease-in-out transform border-2 md:border-2
                                ${activeCategory === "women"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-xl scale-105 border-transparent"
                  : "bg-white text-gray-700 shadow-lg hover:shadow-xl hover:scale-105 border-indigo-200 hover:border-indigo-400"
                }`}
              onClick={() => handleCategoryClick("women")}
            >
              <img
                src="https://placehold.co/64x64/14B8A6/FFFFFF?text=Women"
                alt="Women's Style"
                className="h-16 w-16 object-contain mb-3 rounded-full border-2 border-teal-300 md:h-20 md:w-20 md:mb-4 md:border-2 md:rounded-full"
              />
              Women's Style
            </button>

            {/* Kid's Style Category */}
            <button
              className={`flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 rounded-2xl text-lg font-medium text-center md:text-xl md:rounded-3xl
                                transition-all duration-300 ease-in-out transform border-2 md:border-2
                                ${activeCategory === "kid"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-xl scale-105 border-transparent"
                  : "bg-white text-gray-700 shadow-lg hover:shadow-xl hover:scale-105 border-indigo-200 hover:border-indigo-400"
                }`}
              onClick={() => handleCategoryClick("kid")}
            >
              <img
                src="https://placehold.co/64x64/84CC16/FFFFFF?text=Kids"
                alt="Kid's Style"
                className="h-16 w-16 object-contain mb-3 rounded-full border-2 border-lime-300 md:h-20 md:w-20 md:mb-4 md:border-2 md:rounded-full"
              />
              Kid's Style
            </button>
          </div>
        </div>

        {/* Popular Products */}
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold mt-6 mb-4 text-gray-800 md:text-2xl md:mt-4 md:mb-2">Popular Products</h1>
          <Link to="/allproducts">
            <button className="leading-5 hover:text-blue-400 cursor-pointer md:text-base">
              <p>View All</p>
              <hr />
            </button>
          </Link>
        </div>
        <section className="mt-4 mb-14 md:mb-9 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 md:mt-6">
          {/* Product Card 1 */}
          <div className="group relative h-79 md:h-110 bg-white rounded-2xl md:rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-blue-200">
            {/* Heart Icon */}
            <button className="absolute top-2 left-2 z-20 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:scale-110 transition-all duration-300 md:top-4 md:left-4 md:p-2 hover:bg-blue-50 border border-gray-200">
              <Heart
                className="text-gray-400 hover:text-emerald-500 transition-colors duration-300 w-3 h-3 md:w-4 md:h-4"
                size={12}
              />
            </button>

            <Link to="/products">
              {/* Product Image */}
              <div className="relative h-32 md:h-52 overflow-hidden">
                <img
                  src="https://tiimg.tistatic.com/fp/1/007/978/light-weight-silver-paper-disposable-dona-134.jpg"
                  alt="Rick Owens"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-90"></div>

              </div>

              {/* Card Content */}
              <div className="p-3 md:px-4 flex flex-col gap-1">
                <div className="mb-2 md:mb-3 flex justify-between">
                  <h3 className="text-gray-800 font-bold text-sm md:text-xl mb-1 md:mb-2 group-hover:text-emerald-600 transition-all duration-300">
                    Rick Owens
                  </h3>

                  {/* Rating & Reviews */}
                  <div className="flex items-center justify-between mb-2 md:mb-1">
                    <div className="flex items-center gap-1 md:gap-3">
                      <div className="flex items-center bg-yellow-100 px-2 py-1 rounded-full border border-yellow-200 md:px-3 md:py-1.5">
                        <Star size={12} fill="currentColor" className="text-yellow-500 md:w-4 md:h-4" />
                        <span className="text-yellow-700 text-xs md:text-sm ml-1 font-bold">3.5</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-3 md:mb-5 flex flex-col gap-3">
                  <div className="flex gap-3 items-center">
                    <div className="text-sm font-bold text-gray-800 md:text-xl">$2445</div>
                    <div className="text-xs text-gray-500 line-through font-medium md:text-sm">$3445</div>
                  </div>

                  <div className="flex flex-wrap gap-1 md:gap-1.5">
                    <span className="text-xs bg-teal-50 text-teal-700 px-2 py-1 rounded-full font-medium shadow-sm border border-teal-100 md:text-sm md:px-2 md:py-1">
                      Designer
                    </span>
                    <span className="text-xs bg-teal-50 text-teal-700 px-2 py-1 rounded-full font-medium shadow-sm border border-teal-100 md:text-sm md:px-2 md:py-1">
                      Exclusive
                    </span>
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full bg-gradient-to-r from-sky-500 to-blue-500 text-white p-2 md:p-3 rounded-xl md:rounded-2xl font-bold text-sm md:text-base hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 group-hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:from-emerald-700 hover:to-teal-700">
                  <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" size={16} />
                  <span>Add to Cart</span>
                </button>

              </div>
            </Link>
          </div>

          {/* Product Card 2 */}
          <div className="group relative h-79 md:h-110 bg-white rounded-2xl md:rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-blue-200">
            {/* Heart Icon */}
            <button className="absolute top-2 left-2 z-20 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:scale-110 transition-all duration-300 md:top-4 md:left-4 md:p-2 hover:bg-blue-50 border border-gray-200">
              <Heart
                className="text-gray-400 hover:text-emerald-500 transition-colors duration-300 w-3 h-3 md:w-4 md:h-4"
                size={12}
              />
            </button>

            <Link to="/products">
              {/* Product Image */}
              <div className="relative h-32 md:h-52 overflow-hidden">
                <img
                  src="https://i0.wp.com/www.apnadukan.net/wp-content/uploads/2021/09/dona.png?fit=500%2C500&ssl=1"
                  alt="Rick Owens"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-90"></div>

              </div>

              {/* Card Content */}
              <div className="p-3 md:px-4 flex flex-col gap-1">
                <div className="mb-2 md:mb-3 flex justify-between">
                  <h3 className="text-gray-800 font-bold text-sm md:text-xl mb-1 md:mb-2 group-hover:text-emerald-600 transition-all duration-300">
                    Rick Owens
                  </h3>

                  {/* Rating & Reviews */}
                  <div className="flex items-center justify-between mb-2 md:mb-1">
                    <div className="flex items-center gap-1 md:gap-3">
                      <div className="flex items-center bg-yellow-100 px-2 py-1 rounded-full border border-yellow-200 md:px-3 md:py-1.5">
                        <Star size={12} fill="currentColor" className="text-yellow-500 md:w-4 md:h-4" />
                        <span className="text-yellow-700 text-xs md:text-sm ml-1 font-bold">3.5</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-3 md:mb-5 flex flex-col gap-3">
                  <div className="flex gap-3 items-center">
                    <div className="text-sm font-bold text-gray-800 md:text-xl">$2445</div>
                    <div className="text-xs text-gray-500 line-through font-medium md:text-sm">$3445</div>
                  </div>

                  <div className="flex flex-wrap gap-1 md:gap-1.5">
                    <span className="text-xs bg-teal-50 text-teal-700 px-2 py-1 rounded-full font-medium shadow-sm border border-teal-100 md:text-sm md:px-2 md:py-1">
                      Designer
                    </span>
                    <span className="text-xs bg-teal-50 text-teal-700 px-2 py-1 rounded-full font-medium shadow-sm border border-teal-100 md:text-sm md:px-2 md:py-1">
                      Exclusive
                    </span>
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full bg-gradient-to-r from-sky-500 to-blue-500 text-white p-2 md:p-3 rounded-xl md:rounded-2xl font-bold text-sm md:text-base hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 group-hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:from-emerald-700 hover:to-teal-700">
                  <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" size={16} />
                  <span>Add to Cart</span>
                </button>

              </div>
            </Link>
          </div>

          {/* Product Card 3 */}
          <div className="group relative h-79 md:h-110 bg-white rounded-2xl md:rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-blue-200">
            {/* Heart Icon */}
            <button className="absolute top-2 left-2 z-20 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:scale-110 transition-all duration-300 md:top-4 md:left-4 md:p-2 hover:bg-blue-50 border border-gray-200">
              <Heart
                className="text-gray-400 hover:text-emerald-500 transition-colors duration-300 w-3 h-3 md:w-4 md:h-4"
                size={12}
              />
            </button>

            <Link to="/products">
              {/* Product Image */}
              <div className="relative h-32 md:h-52 overflow-hidden">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRacLXg15OLx1T_FZBAAI8VW1T0cvT2OwX-ig&s"
                  alt="Rick Owens"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-90"></div>

              </div>

              {/* Card Content */}
              <div className="p-3 md:px-4 flex flex-col gap-1">
                <div className="mb-2 md:mb-3 flex justify-between">
                  <h3 className="text-gray-800 font-bold text-sm md:text-xl mb-1 md:mb-2 group-hover:text-emerald-600 transition-all duration-300">
                    Rick Owens
                  </h3>

                  {/* Rating & Reviews */}
                  <div className="flex items-center justify-between mb-2 md:mb-1">
                    <div className="flex items-center gap-1 md:gap-3">
                      <div className="flex items-center bg-yellow-100 px-2 py-1 rounded-full border border-yellow-200 md:px-3 md:py-1.5">
                        <Star size={12} fill="currentColor" className="text-yellow-500 md:w-4 md:h-4" />
                        <span className="text-yellow-700 text-xs md:text-sm ml-1 font-bold">3.5</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-3 md:mb-5 flex flex-col gap-3">
                  <div className="flex gap-3 items-center">
                    <div className="text-sm font-bold text-gray-800 md:text-xl">$2445</div>
                    <div className="text-xs text-gray-500 line-through font-medium md:text-sm">$3445</div>
                  </div>

                  <div className="flex flex-wrap gap-1 md:gap-1.5">
                    <span className="text-xs bg-teal-50 text-teal-700 px-2 py-1 rounded-full font-medium shadow-sm border border-teal-100 md:text-sm md:px-2 md:py-1">
                      Designer
                    </span>
                    <span className="text-xs bg-teal-50 text-teal-700 px-2 py-1 rounded-full font-medium shadow-sm border border-teal-100 md:text-sm md:px-2 md:py-1">
                      Exclusive
                    </span>
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full bg-gradient-to-r from-sky-500 to-blue-500 text-white p-2 md:p-3 rounded-xl md:rounded-2xl font-bold text-sm md:text-base hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 group-hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:from-emerald-700 hover:to-teal-700">
                  <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" size={16} />
                  <span>Add to Cart</span>
                </button>

              </div>
            </Link>
          </div>

          {/* Product Card 4 */}
          <div className="group relative h-79 md:h-110 bg-white rounded-2xl md:rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-blue-200">
            {/* Heart Icon */}
            <button className="absolute top-2 left-2 z-20 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:scale-110 transition-all duration-300 md:top-4 md:left-4 md:p-2 hover:bg-blue-50 border border-gray-200">
              <Heart
                className="text-gray-400 hover:text-emerald-500 transition-colors duration-300 w-3 h-3 md:w-4 md:h-4"
                size={12}
              />
            </button>

            <Link to="/products">
              {/* Product Image */}
              <div className="relative h-32 md:h-52 overflow-hidden">
                <img
                  src="https://5.imimg.com/data5/ANDROID/Default/2022/7/WW/GV/RY/30445300/product-jpeg-500x500.jpg"
                  alt="Rick Owens"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-90"></div>

              </div>

              {/* Card Content */}
              <div className="p-3 md:px-4 flex flex-col gap-1">
                <div className="mb-2 md:mb-3 flex justify-between">
                  <h3 className="text-gray-800 font-bold text-sm md:text-xl mb-1 md:mb-2 group-hover:text-emerald-600 transition-all duration-300">
                    Rick Owens
                  </h3>

                  {/* Rating & Reviews */}
                  <div className="flex items-center justify-between mb-2 md:mb-1">
                    <div className="flex items-center gap-1 md:gap-3">
                      <div className="flex items-center bg-yellow-100 px-2 py-1 rounded-full border border-yellow-200 md:px-3 md:py-1.5">
                        <Star size={12} fill="currentColor" className="text-yellow-500 md:w-4 md:h-4" />
                        <span className="text-yellow-700 text-xs md:text-sm ml-1 font-bold">3.5</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-3 md:mb-5 flex flex-col gap-3">
                  <div className="flex gap-3 items-center">
                    <div className="text-sm font-bold text-gray-800 md:text-xl">$2445</div>
                    <div className="text-xs text-gray-500 line-through font-medium md:text-sm">$3445</div>
                  </div>

                  <div className="flex flex-wrap gap-1 md:gap-1.5">
                    <span className="text-xs bg-teal-50 text-teal-700 px-2 py-1 rounded-full font-medium shadow-sm border border-teal-100 md:text-sm md:px-2 md:py-1">
                      Designer
                    </span>
                    <span className="text-xs bg-teal-50 text-teal-700 px-2 py-1 rounded-full font-medium shadow-sm border border-teal-100 md:text-sm md:px-2 md:py-1">
                      Exclusive
                    </span>
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full bg-gradient-to-r from-sky-500 to-blue-500 text-white p-2 md:p-3 rounded-xl md:rounded-2xl font-bold text-sm md:text-base hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 group-hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:from-emerald-700 hover:to-teal-700">
                  <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" size={16} />
                  <span>Add to Cart</span>
                </button>

              </div>
            </Link>
          </div>
        </section>

        {/* Popular Services */}
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold mt-6 mb-4 text-gray-800 md:text-2xl md:mt-8 md:mb-2">Popular Services</h1>
          <Link to="/allservices">
            <button className="leading-5 hover:text-blue-400 cursor-pointer md:text-base">
              <p>View All</p>
              <hr />
            </button>
          </Link>
        </div>
        <section className="mt-4 mb-24 md:mb-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 md:mt-6">
          {/* Service Card 1 */}
          <div className="group relative bg-white rounded-2xl md:rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-blue-200">
            <button className="absolute top-2 left-2 z-20 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:scale-110 transition-all duration-300 md:top-4 md:left-4 md:p-2 hover:bg-blue-50 border border-gray-200">
              <Heart
                className="text-gray-400 hover:text-emerald-500 transition-colors duration-300 w-3 h-3 md:w-4 md:h-4"
                size={12}
              />
            </button>

            <Link to="/services">
              <div className="relative h-32 md:h-52 overflow-hidden">
                <img
                  src="https://placehold.co/400x200/10B981/FFFFFF?text=Premium+Service"
                  alt="Premium Service"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-90"></div>

                <div className="absolute bottom-2 right-2 bg-white/95 backdrop-blur-sm rounded-lg px-2 py-1 shadow-lg md:bottom-4 md:right-4 md:px-3 md:py-2 md:rounded-xl border border-white/50">
                  <div className="text-right">
                    <div className="text-sm font-bold text-gray-800 md:text-xl">$199</div>
                    <div className="text-xs text-gray-500 line-through font-medium md:text-sm">$299</div>
                  </div>
                </div>
              </div>

              <div className="p-3 md:p-5">
                <div className="mb-2 md:mb-3">
                  <h3 className="text-gray-800 font-bold text-sm md:text-xl mb-1 md:mb-2 group-hover:text-emerald-600 transition-all duration-300">
                    Premium Service
                  </h3>

                  <div className="flex items-center justify-between mb-2 md:mb-3">
                    <div className="flex items-center gap-1 md:gap-3">
                      <div className="flex items-center bg-yellow-100 px-2 py-1 rounded-full border border-yellow-200 md:px-3 md:py-1.5">
                        <Star size={12} fill="currentColor" className="text-yellow-500 md:w-4 md:h-4" />
                        <span className="text-yellow-700 text-xs md:text-sm ml-1 font-bold">4.5</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-3 md:mb-5">
                  <div className="flex flex-wrap gap-1 md:gap-1.5">
                    <span className="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full font-medium shadow-sm border border-emerald-100 md:text-sm md:px-2 md:py-1">
                      Fast
                    </span>
                    <span className="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full font-medium shadow-sm border border-emerald-100 md:text-sm md:px-2 md:py-1">
                      Quality
                    </span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-2 md:p-3 rounded-xl md:rounded-2xl font-bold text-sm md:text-base hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 group-hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:from-emerald-700 hover:to-teal-700">
                  <span>Get Started</span>
                  <ArrowRight
                    className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300"
                    size={16}
                  />
                </button>

                <div className="flex items-center justify-center mt-2 md:mt-3 bg-emerald-50 rounded-full py-1 px-2 md:py-1.5 md:px-3 border border-emerald-200">
                  <TrendingUp className="text-emerald-600 w-3 h-3 md:w-4 md:h-4 mr-1" size={12} />
                  <span className="text-xs font-medium text-emerald-600">Popular</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Service Card 2 */}
          <div className="group relative bg-white rounded-2xl md:rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-blue-200">
            <button className="absolute top-2 left-2 z-20 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:scale-110 transition-all duration-300 md:top-4 md:left-4 md:p-2 hover:bg-blue-50 border border-gray-200">
              <Heart
                className="text-gray-400 hover:text-teal-500 transition-colors duration-300 w-3 h-3 md:w-4 md:h-4"
                size={12}
              />
            </button>

            <div className="relative h-32 md:h-52 overflow-hidden">
              <img
                src="https://placehold.co/400x200/14B8A6/FFFFFF?text=Express+Service"
                alt="Express Service"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 opacity-90"></div>

              <div className="absolute bottom-2 right-2 bg-white/95 backdrop-blur-sm rounded-lg px-2 py-1 shadow-lg md:bottom-4 md:right-4 md:px-3 md:py-2 md:rounded-xl border border-white/50">
                <div className="text-right">
                  <div className="text-sm font-bold text-gray-800 md:text-xl">$149</div>
                  <div className="text-xs text-gray-500 line-through font-medium md:text-sm">$199</div>
                </div>
              </div>
            </div>

            <div className="p-3 md:p-5">
              <div className="mb-2 md:mb-3">
                <h3 className="text-gray-800 font-bold text-sm md:text-xl mb-1 md:mb-2 group-hover:text-teal-600 transition-all duration-300">
                  Express Service
                </h3>

                <div className="flex items-center justify-between mb-2 md:mb-3">
                  <div className="flex items-center gap-1 md:gap-3">
                    <div className="flex items-center bg-yellow-100 px-2 py-1 rounded-full border border-yellow-200 md:px-3 md:py-1.5">
                      <Star size={12} fill="currentColor" className="text-yellow-500 md:w-4 md:h-4" />
                      <span className="text-yellow-700 text-xs md:text-sm ml-1 font-bold">4.2</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-3 md:mb-5">
                <div className="flex flex-wrap gap-1 md:gap-1.5">
                  <span className="text-xs bg-teal-50 text-teal-700 px-2 py-1 rounded-full font-medium shadow-sm border border-teal-100 md:text-sm md:px-2 md:py-1">
                    Express
                  </span>
                  <span className="text-xs bg-teal-50 text-teal-700 px-2 py-1 rounded-full font-medium shadow-sm border border-teal-100 md:text-sm md:px-2 md:py-1">
                    24/7
                  </span>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white p-2 md:p-3 rounded-xl md:rounded-2xl font-bold text-sm md:text-base hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-300 group-hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:from-teal-700 hover:to-cyan-700">
                <span>Get Started</span>
                <ArrowRight
                  className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300"
                  size={16}
                />
              </button>

              <div className="flex items-center justify-center mt-2 md:mt-3 bg-teal-50 rounded-full py-1 px-2 md:py-1.5 md:px-3 border border-teal-200">
                <TrendingUp className="text-teal-600 w-3 h-3 md:w-4 md:h-4 mr-1" size={12} />
                <span className="text-xs font-medium text-teal-600">Fast</span>
              </div>
            </div>
          </div>
        </section>

        {/* Special Offers Banner */}
        <div className="mb-8 p-6 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl border border-white/50 md:mb-8 md:p-8 md:rounded-3xl">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-1 md:text-xl md:mb-2">🌱 Eco-Friendly Collection</h3>
              <p className="text-gray-600 text-sm md:text-base">Sustainable fashion for a better tomorrow</p>
            </div>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-xl font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 md:px-6 md:py-3 md:text-base md:rounded-xl">
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage

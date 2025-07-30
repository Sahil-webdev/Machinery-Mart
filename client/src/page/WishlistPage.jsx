"use client"

import { useState } from "react"
import { ChevronLeft, ShoppingBasket, Home, ShoppingBag, Heart, User, Star, X } from "lucide-react"
import { Link } from "react-router-dom"

const WishlistPage = () => {
    const [activeTab, setActiveTab] = useState("favorites")

    // Sample wishlist items data
    const [wishlistItems, setWishlistItems] = useState([
        {
            id: 1,
            name: "Rick Owens Jacket",
            price: 2445,
            originalPrice: 3445,
            rating: 4.2,
            image: "https://placehold.co/160x160/10B981/FFFFFF?text=Jacket",
            inStock: true,
        },
        {
            id: 2,
            name: "Premium Denim Jeans",
            price: 1299,
            originalPrice: 1799,
            rating: 3.8,
            image: "https://placehold.co/160x160/14B8A6/FFFFFF?text=Jeans",
            inStock: true,
        },
        {
            id: 3,
            name: "Casual Summer Shirt",
            price: 899,
            originalPrice: 1199,
            rating: 4.5,
            image: "https://placehold.co/160x160/84CC16/FFFFFF?text=Shirt",
            inStock: true,
        },
        {
            id: 4,
            name: "Designer Sneakers",
            price: 1599,
            originalPrice: 2099,
            rating: 4.0,
            image: "https://placehold.co/160x160/059669/FFFFFF?text=Shoes",
            inStock: false,
        },
    ])

    // Handle tab clicks for bottom navigation
    const handleTabClick = (tabName) => {
        setActiveTab(tabName)
        console.log(`Navigating to ${tabName}`)
    }

    // Remove item from wishlist
    const removeFromWishlist = (id) => {
        setWishlistItems(wishlistItems.filter((item) => item.id !== id))
    }

    // Add to cart (just a placeholder function)
    const addToCart = (id) => {
        console.log(`Added item ${id} to cart`)
        // Here you would add the actual cart functionality
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-teal-900 to-green-900 text-white">
            <div className="px-4 py-4 md:px-20">
                {/* Header Section */}
                <div className="flex justify-between items-center py-4">
                    <Link to="/">
                        <button className="p-3 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                            <ChevronLeft size={24} />
                        </button>
                    </Link>
                    <h1 className="text-xl font-semibold bg-gradient-to-r from-emerald-200 to-lime-200 bg-clip-text text-transparent">
                        My Wishlist
                    </h1>
                    <Link to="/cart">
                        <button className="p-3 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                            <ShoppingBasket className="hover:scale-105 text-white" size={24} />
                        </button>
                    </Link>
                </div>

                {/* Wishlist Stats */}
                <div className="bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50 rounded-2xl p-4 shadow-xl border border-white/20 mb-6">
                    <div className="flex justify-between items-center">
                        <div>
                            <h2 className="text-slate-800 font-semibold">Saved Items</h2>
                            <p className="text-emerald-700 text-sm font-medium">{wishlistItems.length} items in your wishlist</p>
                        </div>
                        <div className="bg-gradient-to-r from-emerald-100 to-teal-100 p-3 rounded-xl border border-emerald-200">
                            <Heart size={24} className="text-emerald-600" fill="currentColor" />
                        </div>
                    </div>
                </div>

                {/* Wishlist Items */}
                {wishlistItems.length === 0 ? (
                    <div className="flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50 rounded-2xl p-8 shadow-xl border border-white/20 my-8">
                        <div className="bg-gradient-to-r from-emerald-100 to-teal-100 p-6 rounded-full mb-4">
                            <Heart size={48} className="text-emerald-600" />
                        </div>
                        <h3 className="text-slate-800 text-xl font-semibold mb-2">Your wishlist is empty</h3>
                        <p className="text-slate-600 text-center mb-6">Items added to your wishlist will appear here</p>
                        <button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg">
                            Continue Shopping
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-4 mb-24">
                        {wishlistItems.map((item) => (
                            <div
                                key={item.id}
                                className="bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50 rounded-2xl p-4 shadow-xl border border-white/20 flex items-center gap-4 hover:shadow-2xl transition-all duration-300"
                            >
                                {/* Product Image */}
                                <div className="relative w-24 h-24 rounded-xl overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-xl blur-sm"></div>
                                    <img
                                        src={item.image || "/placeholder.svg"}
                                        alt={item.name}
                                        className="relative w-full h-full object-cover rounded-xl border border-white/30"
                                    />
                                </div>

                                {/* Product Details */}
                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <h3 className="text-slate-800 font-semibold">{item.name}</h3>
                                        <button
                                            onClick={() => removeFromWishlist(item.id)}
                                            className="text-red-500 hover:text-red-600 p-2 rounded-full hover:bg-red-50 transition-all duration-300"
                                        >
                                            <X size={18} />
                                        </button>
                                    </div>

                                    <div className="flex items-center text-amber-500 text-sm mb-1">
                                        <Star size={14} fill="currentColor" className="mr-1" />
                                        <span className="font-medium">{item.rating}</span>
                                    </div>

                                    <div className="flex items-center mb-2">
                                        <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent font-bold">
                                            ${item.price}
                                        </span>
                                        <span className="text-slate-500 line-through ml-2 text-sm">${item.originalPrice}</span>
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <span
                                            className={`text-xs font-medium px-2 py-1 rounded-full ${item.inStock ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
                                                }`}
                                        >
                                            {item.inStock ? "In Stock" : "Low Stock"}
                                        </span>

                                        <button
                                            onClick={() => addToCart(item.id)}
                                            className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-xl font-medium hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-md hover:shadow-lg flex items-center"
                                        >
                                            <ShoppingBag size={16} className="mr-1" />
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Recommendations Section (only show if wishlist has items) */}
                {wishlistItems.length > 0 && (
                    <div className="mb-24">
                        <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-emerald-200 to-lime-200 bg-clip-text text-transparent">
                            You Might Also Like
                        </h2>
                        <div className="grid grid-cols-2 gap-4">
                            {/* Recommendation Item 1 */}
                            <div className="bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-xl hover:scale-105 rounded-2xl relative overflow-visible transition-all duration-300">
                                <button className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:scale-110 transition-all duration-300">
                                    <Heart size={16} className="text-emerald-500" />
                                </button>

                                <div className="flex justify-center items-center h-40 rounded-2xl overflow-hidden p-4">
                                    <img
                                        src="https://placehold.co/120x120/FFFFFF/10B981?text=Watch"
                                        alt="Luxury Watch"
                                        className="h-32 object-contain rounded-xl border border-white/30"
                                    />
                                </div>

                                <div className="flex flex-col gap-2 px-4 py-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-white font-semibold text-sm">Luxury Watch</span>
                                        <span className="flex items-center text-amber-400 text-xs font-medium">
                                            <Star size={12} fill="currentColor" className="mr-1" />
                                            4.8
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span className="text-white font-bold text-base">$1299</span>
                                        <button className="bg-white text-emerald-600 rounded-full p-1.5 flex items-center justify-center hover:bg-emerald-50 transition-all duration-300 shadow-lg">
                                            <ShoppingBag size={14} />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Recommendation Item 2 */}
                            <div className="bg-gradient-to-br from-teal-500 to-emerald-500 text-white shadow-xl hover:scale-105 rounded-2xl relative overflow-visible transition-all duration-300">
                                <button className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:scale-110 transition-all duration-300">
                                    <Heart size={16} className="text-teal-500" />
                                </button>

                                <div className="flex justify-center items-center h-40 rounded-2xl overflow-hidden p-4">
                                    <img
                                        src="https://placehold.co/120x120/FFFFFF/14B8A6?text=Bag"
                                        alt="Designer Bag"
                                        className="h-32 object-contain rounded-xl border border-white/30"
                                    />
                                </div>

                                <div className="flex flex-col gap-2 px-4 py-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-white font-semibold text-sm">Designer Bag</span>
                                        <span className="flex items-center text-amber-400 text-xs font-medium">
                                            <Star size={12} fill="currentColor" className="mr-1" />
                                            4.6
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span className="text-white font-bold text-base">$899</span>
                                        <button className="bg-white text-teal-600 rounded-full p-1.5 flex items-center justify-center hover:bg-teal-50 transition-all duration-300 shadow-lg">
                                            <ShoppingBag size={14} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Bottom Navigation */}
            <nav className="fixed bottom-0 left-0 right-0 p-3 flex justify-center items-center mx-auto z-50">
                <div className="flex justify-around items-center max-w-md bg-gradient-to-r from-slate-50 to-emerald-50 rounded-full gap-3 p-2 shadow-2xl border border-emerald-200 backdrop-blur-sm">
                    <button
                        className={`flex flex-col items-center justify-center p-3 rounded-full transition-all cursor-pointer duration-300
                                    ${activeTab === "home"
                                ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg"
                                : "text-slate-600 hover:bg-emerald-100"
                            }`}
                        onClick={() => handleTabClick("home")}
                    >
                        <Home size={20} strokeWidth={activeTab === "home" ? 2.5 : 1.5} />
                    </button>

                    <button
                        className={`flex flex-col items-center justify-center cursor-pointer p-3 rounded-full transition-all duration-300
                                    ${activeTab === "shop"
                                ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg"
                                : "text-slate-600 hover:bg-emerald-100"
                            }`}
                        onClick={() => handleTabClick("shop")}
                    >
                        <ShoppingBag size={20} strokeWidth={activeTab === "shop" ? 2.5 : 1.5} />
                    </button>

                    <button
                        className={`flex flex-col items-center justify-center cursor-pointer p-3 rounded-full transition-all duration-300
                                    ${activeTab === "favorites"
                                ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg"
                                : "text-slate-600 hover:bg-emerald-100"
                            }`}
                        onClick={() => handleTabClick("favorites")}
                    >
                        <Heart
                            size={20}
                            strokeWidth={activeTab === "favorites" ? 2.5 : 1.5}
                            fill={activeTab === "favorites" ? "currentColor" : "none"}
                        />
                    </button>

                    <button
                        className={`flex flex-col items-center justify-center cursor-pointer p-3 rounded-full transition-all duration-300
                                    ${activeTab === "profile"
                                ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg"
                                : "text-slate-600 hover:bg-emerald-100"
                            }`}
                        onClick={() => handleTabClick("profile")}
                    >
                        <User size={20} strokeWidth={activeTab === "profile" ? 2.5 : 1.5} />
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default WishlistPage

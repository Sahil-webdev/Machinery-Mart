// src/pages/ProductDetails.jsx
import React, { useState } from "react";
import hp from "../assets/hpimg.jpeg"

// Dummy Data (actual data from API ya global state ke through layein)
const productData = {
  id: 1,
  name: "Industrial Hydraulic Pump HP-2500",
  category: "Hydraulic Tools",
  price: 45000,
  originalPrice: 52000,
  discount: 13,
  rating: 4.8,
  reviewCount: 124,
  inStock: true,
  stockCount: 8,
  image: [hp],
  description:
    "Professional grade industrial hydraulic pump designed for heavy-duty applications. Features advanced pressure control systems and durable construction for long-lasting performance in demanding industrial environments.",
  features: [
    "Maximum pressure: 2500 PSI",
    "Flow rate: 15 LPM",
    "Motor power: 3 HP",
    "Operating temperature: -10°C to 60°C",
    "Warranty: 2 years",
    "CE certified"
  ],
  specifications: {
    "Model": "HP-2500",
    "Power": "3 HP / 2.2 kW",
    "Voltage": "230V / 400V",
    "Weight": "45 kg",
    "Dimensions": "650 x 400 x 500 mm",
    "Material": "Cast Iron Body",
    "Connection": "1/2 inch BSP"
  }
};

const relatedProducts = [
  { id: 2, name: "Hydraulic Cylinder", price: 12000, image: "/hydraulic-cylinder.jpg" },
  { id: 3, name: "Pressure Gauge", price: 2500, image: "/pressure-gauge.jpg" },
  { id: 4, name: "Hydraulic Hose", price: 1800, image: "/hydraulic-hose.jpg" },
  { id: 5, name: "Flow Control Valve", price: 8500, image: "/flow-valve.jpg" }
];

const reviews = [
  {
    id: 1,
    user: "Rajesh Kumar",
    rating: 5,
    date: "15 Jul 2025",
    comment:
      "Excellent product! Very reliable and efficient. Using it in our manufacturing unit for 6 months now."
  },
  {
    id: 2,
    user: "Priya Sharma",
    rating: 4,
    date: "08 Jul 2025",
    comment: "Good quality hydraulic pump. Installation was easy and performance is as expected."
  },
  {
    id: 3,
    user: "Manufacturing Co.",
    rating: 5,
    date: "28 Jun 2025",
    comment: "Perfect for our industrial needs. Great build quality and customer service."
  }
];

export default function ProductDetails() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
    alert(`Added ${quantity} x ${productData.name} to cart!`);
  };

  const handleBuyNow = () => {
    alert("Redirecting to checkout...");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* Main Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">

          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-700">
              <div className="aspect-square">
                <img
                  src={productData.image[selectedImage]}
                  alt={productData.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 p-4"
                  onError={e => { e.target.src = "/default-product.png"; }}
                />
              </div>
              {productData.discount > 0 && (
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                  -{productData.discount}%
                </div>
              )}
              <div className="absolute top-4 right-4">
                {productData.inStock ? (
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium animate-bounce">
                    In Stock
                  </span>
                ) : (
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Out of Stock
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">{productData.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}
                      className={`text-lg ${i < Math.floor(productData.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
                      ★
                    </span>
                  ))}
                  <span className="text-gray-600 ml-2">{productData.rating}</span>
                </div>
                <span className="text-gray-500">({productData.reviewCount} reviews)</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-4 mb-2">
                <span className="text-4xl font-bold text-blue-600">₹{productData.price.toLocaleString()}</span>
                {productData.originalPrice > productData.price && (
                  <span className="text-xl text-gray-500 line-through">
                    ₹{productData.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-600">
                Inclusive of all taxes • Free shipping above ₹5000
              </p>
            </div>
            <div>
              {productData.inStock ? (
                <div className="flex items-center gap-2 text-green-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="font-medium">Only {productData.stockCount} left in stock</span>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-red-600">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  <span className="font-medium">Currently out of stock</span>
                </div>
              )}
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Key Features:</h3>
              <ul className="space-y-2">
                {productData.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            {/* Quantity & Actions */}
            <div>
              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-3">
                  <span className="font-medium text-gray-700">Quantity:</span>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                      disabled={quantity <= 1}
                      className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition disabled:cursor-not-allowed"
                    >−</button>
                    <span className="w-12 text-center font-medium">{quantity}</span>
                    <button
                      onClick={() => quantity < productData.stockCount && setQuantity(quantity + 1)}
                      disabled={!productData.inStock || quantity >= productData.stockCount}
                      className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition disabled:cursor-not-allowed"
                    >+</button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleAddToCart}
                  disabled={!productData.inStock}
                  className={`flex-1 py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 transform ${addedToCart
                    ? 'bg-green-500 text-white scale-105'
                    : productData.inStock
                      ? 'bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 shadow-lg hover:shadow-xl'
                      : 'bg-gray-400 text-gray-200 cursor-not-allowed'
                    }`}
                >
                  {addedToCart ? '✓ Added to Cart!' : '🛒 Add to Cart'}
                </button>
                <button
                  onClick={handleBuyNow}
                  disabled={!productData.inStock}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-6 rounded-2xl font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:from-gray-400 disabled:to-gray-400 disabled:cursor-not-allowed"
                >
                  ⚡ Buy Now
                </button>
              </div>
            </div>
            {/* Trust Badges */}
            <div>
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl mb-2">🚚</div>
                  <p className="text-xs text-gray-600">Free Shipping</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">🔒</div>
                  <p className="text-xs text-gray-600">Secure Payment</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">↩️</div>
                  <p className="text-xs text-gray-600">Easy Returns</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="bg-white rounded-2xl shadow-lg mb-16">
          {/* Tab Headers */}
          <div className="border-b border-gray-200">
            <div className="flex space-x-8 px-6">
              {[
                { id: 'description', label: 'Description' },
                { id: 'specifications', label: 'Specifications' },
                { id: 'reviews', label: `Reviews (${productData.reviewCount})` }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 font-medium border-b-2 transition-colors ${activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'description' && (
              <div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {productData.description}
                </p>
                <h4 className="font-bold text-gray-900 mb-3">What's in the box:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>1x Hydraulic Pump Unit</li>
                  <li>1x Power Cable (3m)</li>
                  <li>1x Quick Start Guide</li>
                  <li>1x Warranty Card</li>
                  <li>Standard mounting hardware</li>
                </ul>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(productData.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="font-medium text-gray-900">{key}</span>
                      <span className="text-gray-700">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                {reviews.map(review => (
                  <div key={review.id} className="border-b border-gray-100 pb-6 last:border-b-0">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 font-bold text-sm">
                            {review.user.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{review.user}</p>
                          <p className="text-sm text-gray-500">{review.date}</p>
                        </div>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={`text-sm ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}>
                            ★
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

        {/* Related Products */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((product, index) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                <div className="aspect-square bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    onError={e => { e.target.src = "/default-product.png"; }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 mb-2 truncate">{product.name}</h3>
                  <p className="text-blue-600 font-bold">₹{product.price.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animations for fade-in-up/fade-in */}
      <style>{`
        @keyframes fade-in-up {
          from { opacity:0; transform:translateY(30px);}
          to { opacity:1; transform:translateY(0);}
        }
        @keyframes fade-in {
          from { opacity:0;}
          to { opacity:1;}
        }
        .animate-fade-in-up { animation: fade-in-up 0.6s ease-out forwards; }
        .animate-fade-in { animation: fade-in 0.4s ease-out forwards; }
      `}</style>
    </div>
  );
}

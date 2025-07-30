// src/pages/Cart.jsx
import React, { useState } from "react";
import hp from "../assets/hpimg.jpeg"
import cuttingblade from "../assets/cuttingblade.jpeg"
import weldingtorch from "../assets/weldingtorch.jpeg"
import { Link } from "react-router-dom";

// Sample cart data
const initialCartItems = [
  {
    id: 1,
    name: "Hydraulic Pump",
    category: "Hydraulic Tools",
    price: 4200,
    quantity: 1,
    image: hp,
    inStock: true,
    stockCount: 15
  },
  {
    id: 2,
    name: "Electric Grinder",
    category: "Electrical Parts",
    price: 2100,
    quantity: 2,
    image: weldingtorch,
    inStock: true,
    stockCount: 8
  },
  {
    id: 3,
    name: "Cutting Blade Set",
    category: "Cutting Tools",
    price: 350,
    quantity: 3,
    image: cuttingblade,
    inStock: false,
    stockCount: 0
  }
];

export default function Cart() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  // Update quantity
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Remove item from cart
  const removeItem = (id) => {
    if (window.confirm("Are you sure you want to remove this item?")) {
      setCartItems(items => items.filter(item => item.id !== id));
    }
  };

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 5000 ? 0 : 200; // Free shipping above ₹5000
  const tax = Math.round(subtotal * 0.18); // 18% GST
  const total = subtotal + shipping + tax;

  const handleCheckout = () => {
    alert("Proceeding to checkout...");
  };

  const handleContinueShopping = () => {
    window.location.href = "/products";
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center py-16 bg-white rounded-2xl shadow-lg">
            <span className="text-8xl mb-6 block">🛒</span>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Your Cart is Empty</h2>
            <p className="text-gray-600 mb-8 text-lg">Add some machinery tools and parts to get started!</p>
            <button
              onClick={handleContinueShopping}
              className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition font-semibold text-lg"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">Shopping Cart</h1>
          <p className="text-gray-500 text-md">{cartItems.length} items in your cart</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Cart Items</h2>
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="border border-gray-200 rounded-xl p-4 hover:bg-gray-50 transition">
                    <div className="flex flex-col sm:flex-row gap-4">
                      {/* Product Image */}
                      <div className="w-full sm:w-24 h-24 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                          onError={(e) => { e.target.src = "/default-product.png"; }}
                        />
                      </div>
                      {/* Product Details */}
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                          <div>
                            <h3 className="text-lg font-bold text-gray-800 mb-1">{item.name}</h3>
                            <p className="text-gray-600 text-sm mb-2">{item.category}</p>
                            <p className="text-xl font-bold text-blue-600">₹{item.price.toLocaleString()}</p>
                            {/* Stock Status */}
                            {item.inStock ? (
                              <span className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                                In Stock ({item.stockCount} available)
                              </span>
                            ) : (
                              <span className="inline-block mt-2 px-3 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full">
                                Out of Stock
                              </span>
                            )}
                          </div>
                          {/* Quantity & Actions */}
                          <div className="flex flex-col sm:items-end gap-3">
                            {/* Quantity Controls */}
                            <div className="flex items-center gap-3">
                              <span className="text-sm text-gray-600">Qty:</span>
                              <div className="flex items-center border border-gray-300 rounded-lg">
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition"
                                  disabled={item.quantity <= 1}
                                >
                                  -
                                </button>
                                <span className="w-12 text-center font-medium">{item.quantity}</span>
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition"
                                  disabled={!item.inStock || item.quantity >= item.stockCount}
                                >
                                  +
                                </button>
                              </div>
                            </div>
                            {/* Item Total */}
                            <div className="text-right">
                              <p className="text-lg font-bold text-gray-800">
                                ₹{(item.price * item.quantity).toLocaleString()}
                              </p>
                            </div>
                            {/* Remove Button */}
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-red-600 hover:text-red-700 text-sm font-medium transition"
                            >
                              🗑️ Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Continue Shopping */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <button
                  onClick={handleContinueShopping}
                  className="text-blue-600 hover:text-blue-700 font-medium transition flex items-center gap-2"
                >
                  <span>←</span>
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 sticky top-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal ({cartItems.length} items)</span>
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
                <hr className="border-gray-200" />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-blue-600">₹{total.toLocaleString()}</span>
                </div>
              </div>
              {/* Free Shipping Notice */}
              {shipping > 0 && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-6">
                  <p className="text-blue-700 text-sm">
                    🚚 Add ₹{(5000 - subtotal).toLocaleString()} more for free shipping!
                  </p>
                </div>
              )}
              {/* Checkout Button */}
              <Link to="/checkout">
                <button
                  onClick={handleCheckout}
                  className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-4 px-6 rounded-2xl font-bold text-lg hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 transition shadow-lg hover:shadow-xl transform hover:scale-105 mb-4"
                >
                  Proceed to Checkout
                </button>
              </Link>
              {/* Security Badge */}
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 text-gray-600 text-sm">
                  <span>🔒</span>
                  <span>Secure Checkout</span>
                </div>
              </div>
              {/* Payment Methods */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-3">We Accept:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 rounded text-xs">💳 Cards</span>
                  <span className="px-3 py-1 bg-gray-100 rounded text-xs">📱 UPI</span>
                  <span className="px-3 py-1 bg-gray-100 rounded text-xs">🏦 Net Banking</span>
                  <span className="px-3 py-1 bg-gray-100 rounded text-xs">💰 COD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

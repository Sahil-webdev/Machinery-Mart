// src/pages/MyOrders.jsx
import React, { useState } from "react";

// Sample data - Replace with actual API data
const sampleProductOrders = [
  {
    id: "#ORD001",
    date: "24 Jul 2025",
    items: [
      { name: "Hydraulic Pump", quantity: 1, price: "₹4,200" },
      { name: "Gasket Set", quantity: 2, price: "₹450" }
    ],
    totalAmount: "₹4,650",
    status: "Delivered",
    trackingId: "TRK123456789",
    deliveryDate: "26 Jul 2025"
  },
  {
    id: "#ORD002",
    date: "20 Jul 2025",
    items: [
      { name: "Electric Grinder", quantity: 1, price: "₹2,100" }
    ],
    totalAmount: "₹2,100",
    status: "Shipped",
    trackingId: "TRK987654321",
    estimatedDelivery: "28 Jul 2025"
  },
  {
    id: "#ORD003",
    date: "18 Jul 2025",
    items: [
      { name: "Cutting Blade Set", quantity: 3, price: "₹850" }
    ],
    totalAmount: "₹850",
    status: "Processing",
    trackingId: "TRK456789123",
    estimatedDelivery: "30 Jul 2025"
  }
];

const sampleServiceOrders = [
  {
    id: "#SRV001",
    date: "28 Jul 2025",
    serviceName: "Machine Maintenance",
    serviceType: "Preventive Maintenance",
    scheduledDate: "30 Jul 2025",
    scheduledTime: "10:00 AM - 12:00 PM",
    technician: "Rajesh Kumar",
    amount: "₹1,500",
    status: "Scheduled",
    address: "Factory Unit 3, Industrial Area"
  },
  {
    id: "#SRV002",
    date: "15 Jul 2025",
    serviceName: "Hydraulic Repair",
    serviceType: "Emergency Repair",
    completedDate: "16 Jul 2025",
    technician: "Amit Singh",
    amount: "₹2,800",
    status: "Completed",
    rating: 5,
    address: "Main Production Floor"
  },
  {
    id: "#SRV003",
    date: "10 Jul 2025",
    serviceName: "Installation Service",
    serviceType: "New Equipment Setup",
    completedDate: "12 Jul 2025",
    technician: "Priya Sharma",
    amount: "₹3,200",
    status: "Completed",
    rating: 4,
    address: "Workshop Section A"
  }
];

export default function MyOrders() {
  const [activeTab, setActiveTab] = useState("products");

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "delivered":
      case "completed":
        return "bg-green-100 text-green-700 border-green-200";
      case "shipped":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "scheduled":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "processing":
        return "bg-orange-100 text-orange-700 border-orange-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const ProductOrderCard = ({ order }) => (
    <div className="bg-gray-100 rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 mb-6">
      {/* Order Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 pb-4 border-b border-gray-100">
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-1">{order.id}</h3>
          <p className="text-gray-600">Ordered on {order.date}</p>
        </div>
        <div className="flex flex-col sm:items-end mt-3 sm:mt-0">
          <span className={`px-4 py-2 rounded-full text-sm font-semibold border ${getStatusColor(order.status)}`}>
            {order.status}
          </span>
          <p className="text-lg font-bold text-blue-600 mt-2">{order.totalAmount}</p>
        </div>
      </div>

      {/* Order Items */}
      <div className="mb-4">
        <h4 className="font-semibold text-gray-700 mb-3">Items Ordered:</h4>
        <div className="space-y-2">
          {order.items.map((item, idx) => (
            <div key={idx} className="flex justify-between items-center bg-gray-50 rounded-lg p-3">
              <div>
                <span className="font-medium text-gray-800">{item.name}</span>
                <span className="text-gray-600 ml-2">x{item.quantity}</span>
              </div>
              <span className="font-semibold text-gray-800">{item.price}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tracking Info */}
      <div className="bg-blue-50 rounded-lg p-4 mb-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-blue-600">📦</span>
          <span className="font-medium text-blue-800">Tracking ID: {order.trackingId}</span>
        </div>
        {order.deliveryDate ? (
          <p className="text-sm text-blue-700">Delivered on {order.deliveryDate}</p>
        ) : (
          <p className="text-sm text-blue-700">Estimated delivery: {order.estimatedDelivery}</p>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition font-medium">
          Track Order
        </button>
        <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition font-medium">
          View Invoice
        </button>
        {order.status.toLowerCase() === "delivered" && (
          <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition font-medium">
            Reorder
          </button>
        )}
      </div>
    </div>
  );

  const ServiceOrderCard = ({ order }) => (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 mb-6">
      {/* Service Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 pb-4 border-b border-gray-100">
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-1">{order.id}</h3>
          <p className="text-gray-600">Booked on {order.date}</p>
        </div>
        <div className="flex flex-col sm:items-end mt-3 sm:mt-0">
          <span className={`px-4 py-2 rounded-full text-sm font-semibold border ${getStatusColor(order.status)}`}>
            {order.status}
          </span>
          <p className="text-lg font-bold text-blue-600 mt-2">{order.amount}</p>
        </div>
      </div>

      {/* Service Details */}
      <div className="mb-4">
        <h4 className="font-semibold text-gray-800 text-lg mb-2">{order.serviceName}</h4>
        <p className="text-gray-600 mb-3">{order.serviceType}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-gray-50 rounded-lg p-3">
            <span className="text-sm text-gray-600">Technician:</span>
            <p className="font-medium text-gray-800">{order.technician}</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3">
            <span className="text-sm text-gray-600">Service Location:</span>
            <p className="font-medium text-gray-800">{order.address}</p>
          </div>
        </div>
      </div>

      {/* Schedule/Completion Info */}
      <div className="bg-green-50 rounded-lg p-4 mb-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-green-600">🛠️</span>
          {order.status.toLowerCase() === "completed" ? (
            <span className="font-medium text-green-800">Service Completed on {order.completedDate}</span>
          ) : (
            <span className="font-medium text-green-800">Scheduled for {order.scheduledDate}</span>
          )}
        </div>
        {order.scheduledTime && (
          <p className="text-sm text-green-700">Time: {order.scheduledTime}</p>
        )}
      </div>

      {/* Rating (for completed services) */}
      {order.rating && (
        <div className="bg-yellow-50 rounded-lg p-3 mb-4">
          <span className="text-sm text-yellow-700">Your Rating:</span>
          <div className="flex gap-1 mt-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={`text-lg ${i < order.rating ? "text-yellow-500" : "text-gray-300"}`}>
                ⭐
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        {order.status.toLowerCase() === "scheduled" ? (
          <>
            <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition font-medium">
              Reschedule
            </button>
            <button className="flex-1 border border-red-300 text-red-600 py-2 px-4 rounded-lg hover:bg-red-50 transition font-medium">
              Cancel Service
            </button>
          </>
        ) : (
          <>
            <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition font-medium">
              Book Again
            </button>
            <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition font-medium">
              View Receipt
            </button>
            {!order.rating && (
              <button className="flex-1 bg-yellow-600 text-white py-2 px-4 rounded-lg hover:bg-yellow-700 transition font-medium">
                Rate Service
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 py-8 px-4 pb-20 md:pb-30">
      <div className="max-w-7xl mx-auto">

        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">My Orders</h1>
          <p className="text-gray-600 text-lg">Track your products and services</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-2 flex">
            <button
              onClick={() => setActiveTab("products")}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 ${activeTab === "products"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-gray-600 hover:text-blue-600"
                }`}
            >
              <span className="text-xl">📦</span>
              <span className="hidden sm:inline">Product Orders</span>
              <span className="sm:hidden">Products</span>
              <span className="bg-white/20 text-xs px-2 py-1 rounded-full">{sampleProductOrders.length}</span>
            </button>
            <button
              onClick={() => setActiveTab("services")}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 ${activeTab === "services"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-gray-600 hover:text-blue-600"
                }`}
            >
              <span className="text-xl">🛠️</span>
              <span className="hidden sm:inline">Service Orders</span>
              <span className="sm:hidden">Services</span>
              <span className="bg-white/20 text-xs px-2 py-1 rounded-full">{sampleServiceOrders.length}</span>
            </button>
          </div>
        </div>

        {/* Orders Content */}
        <div className="max-w-4xl mx-auto">
          {activeTab === "products" ? (
            <div>
              {sampleProductOrders.length > 0 ? (
                <div>
                  {sampleProductOrders.map((order) => (
                    <ProductOrderCard key={order.id} order={order} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-white rounded-2xl shadow-lg">
                  <span className="text-6xl mb-4 block">📦</span>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">No Product Orders Yet</h3>
                  <p className="text-gray-600 mb-6">Start shopping for machinery tools and parts!</p>
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium">
                    Browse Products
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div>
              {sampleServiceOrders.length > 0 ? (
                <div>
                  {sampleServiceOrders.map((order) => (
                    <ServiceOrderCard key={order.id} order={order} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-white rounded-2xl shadow-lg">
                  <span className="text-6xl mb-4 block">🛠️</span>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">No Service Orders Yet</h3>
                  <p className="text-gray-600 mb-6">Book maintenance and repair services for your machinery!</p>
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium">
                    Browse Services
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Back to Profile Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => window.history.back()}
            className="bg-gray-600 text-white px-8 py-3 rounded-xl hover:bg-gray-700 transition font-medium flex items-center gap-2 mx-auto"
          >
            <span>←</span>
            Back to Profile
          </button>
        </div>
      </div>
    </div>
  );
}

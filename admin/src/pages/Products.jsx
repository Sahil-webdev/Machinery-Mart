// src/pages/Products.jsx
import React, { useState } from "react";

const sampleProducts = [
  { id: 101, name: "Hydraulic Pump", category: "Hydraulic Tools", price: "₹4,200", stock: 25, status: "Active" },
  { id: 102, name: "Electric Grinder", category: "Electrical Parts", price: "₹2,100", stock: 8, status: "Out of Stock" },
  { id: 103, name: "Cutting Blade", category: "Cutting Tools", price: "₹350", stock: 41, status: "Active" },
  { id: 104, name: "Welding Torch", category: "Safety Equipment", price: "₹1,800", stock: 0, status: "Out of Stock" },
];

// Main Products Page
export default function Products() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="p-4 md:p-8 flex flex-col bg-gray-100 min-h-screen">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold text-blue-900">Products Management</h1>
        <button
          className="bg-blue-700 text-white px-5 py-2 rounded shadow hover:bg-blue-800"
          onClick={() => setShowModal(true)}
        >
          + Add Product
        </button>
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-white rounded-lg shadow p-4 mb-6 flex flex-col md:flex-row gap-4 md:gap-8 items-center">
        <input
          type="text"
          placeholder="Search by name, SKU..."
          className="border px-3 py-2 rounded w-full md:w-64"
        />
        <select className="border px-3 py-2 rounded w-full md:w-56">
          <option>All Categories</option>
          <option>Hydraulic Tools</option>
          <option>Electrical Parts</option>
          <option>Cutting Tools</option>
          <option>Safety Equipment</option>
        </select>
        <select className="border px-3 py-2 rounded w-full md:w-44">
          <option>Status: All</option>
          <option>Active</option>
          <option>Out of Stock</option>
        </select>
      </div>

      {/* Products Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full min-w-[720px]">
          <thead>
            <tr className="text-xs bg-blue-50 text-blue-700 uppercase">
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Product</th>
              <th className="p-3 text-left">Category</th>
              <th className="p-3 text-left">Price</th>
              <th className="p-3 text-left">Stock</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sampleProducts.map((p) => (
              <tr
                key={p.id}
                className="border-b hover:bg-blue-50 transition text-sm"
              >
                <td className="p-3">{p.id}</td>
                <td className="p-3 font-semibold">{p.name}</td>
                <td className="p-3">{p.category}</td>
                <td className="p-3">{p.price}</td>
                <td className="p-3">{p.stock}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded font-medium
                      ${
                        p.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-600"
                      }`}
                  >
                    {p.status}
                  </span>
                </td>
                <td className="p-3 flex justify-center gap-2">
                  <button className="bg-yellow-50 text-yellow-700 px-3 py-1 rounded hover:bg-yellow-100">
                    Edit
                  </button>
                  <button className="bg-red-50 text-red-700 px-3 py-1 rounded hover:bg-red-100">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Product Modal (Demo/UX Only) */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-30 bg-black bg-opacity-40">
          <div className="bg-white rounded-lg p-8 w-full max-w-md shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-blue-700">Add New Product</h2>
            {/* Replace below with your form */}
            <form>
              <input placeholder="Product Name" className="border p-2 rounded w-full mb-3" />
              <select className="border p-2 rounded w-full mb-3">
                <option>Select Category</option>
                {/* ... */}
              </select>
              <input placeholder="Price" className="border p-2 rounded w-full mb-3" />
              <input placeholder="Stock" className="border p-2 rounded w-full mb-3" />
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-gray-100 text-gray-700 px-4 py-2 rounded"
                  type="button"
                >
                  Cancel
                </button>
                <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

"use client"

import { useState, useEffect } from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts"



// Demo Data
const salesData = [
  { month: "Jan", sales: 45000, services: 12000, products: 33000 },
  { month: "Feb", sales: 52000, services: 15000, products: 37000 },
  { month: "Mar", sales: 48000, services: 13000, products: 35000 },
  { month: "Apr", sales: 61000, services: 18000, products: 43000 },
  { month: "May", sales: 55000, services: 16000, products: 39000 },
  { month: "Jun", sales: 67000, services: 20000, products: 47000 },
  { month: "Jul", sales: 72000, services: 22000, products: 50000 },
]

const realtimeData = [
  { time: "09:00", sales: 1200 },
  { time: "10:00", sales: 1800 },
  { time: "11:00", sales: 2400 },
  { time: "12:00", sales: 3200 },
  { time: "13:00", sales: 2800 },
  { time: "14:00", sales: 3600 },
  { time: "15:00", sales: 4200 },
  { time: "16:00", sales: 3800 },
]

const categoryData = [
  { name: "Hydraulic Tools", value: 35, color: "#3B82F6" },
  { name: "Electric Tools", value: 28, color: "#10B981" },
  { name: "Safety Equipment", value: 20, color: "#F59E0B" },
  { name: "Spare Parts", value: 17, color: "#EF4444" },
]

const recentOrders = [
  {
    id: "#ORD-001",
    customer: "Rajesh Kumar",
    product: "Hydraulic Pump",
    amount: "₹4,200",
    status: "Delivered",
    date: "2025-01-24",
  },
  {
    id: "#ORD-002",
    customer: "Priya Sharma",
    product: "Electric Grinder",
    amount: "₹2,100",
    status: "Processing",
    date: "2025-01-24",
  },
  {
    id: "#ORD-003",
    customer: "Amit Singh",
    product: "Welding Torch",
    amount: "₹1,800",
    status: "Shipped",
    date: "2025-01-23",
  },
  {
    id: "#ORD-004",
    customer: "Sunita Devi",
    product: "Safety Helmet",
    amount: "₹850",
    status: "Pending",
    date: "2025-01-23",
  },
  {
    id: "#ORD-005",
    customer: "Vikash Yadav",
    product: "Cutting Blade",
    amount: "₹350",
    status: "Delivered",
    date: "2025-01-22",
  },
]

const recentServices = [
  {
    id: "#SRV-001",
    customer: "Industrial Corp",
    service: "Machine Maintenance",
    amount: "₹8,500",
    status: "Completed",
    date: "2025-01-24",
  },
  {
    id: "#SRV-002",
    customer: "Tech Solutions",
    service: "Repair Service",
    amount: "₹3,200",
    status: "In Progress",
    date: "2025-01-24",
  },
  {
    id: "#SRV-003",
    customer: "Manufacturing Ltd",
    service: "Installation",
    amount: "₹12,000",
    status: "Scheduled",
    date: "2025-01-25",
  },
]

export default function AdminDashboard() {
  
  const [activeTab, setActiveTab] = useState("dashboard")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const stats = [
    {
      title: "Total Revenue",
      value: "₹2,45,680",
      change: "+12.5%",
      icon: "💰",
      gradient: "bg-gradient-to-r from-blue-500 to-blue-600",
      changeColor: "text-green-500",
    },
    {
      title: "Product Sales",
      value: "1,847",
      change: "+8.2%",
      icon: "📦",
      gradient: "bg-gradient-to-r from-green-500 to-green-600",
      changeColor: "text-green-500",
    },
    {
      title: "Services Booked",
      value: "432",
      change: "+15.3%",
      icon: "🛠️",
      gradient: "bg-gradient-to-r from-purple-500 to-purple-600",
      changeColor: "text-green-500",
    },
    {
      title: "Active Users",
      value: "3,249",
      change: "+5.7%",
      icon: "👥",
      gradient: "bg-gradient-to-r from-orange-500 to-orange-600",
      changeColor: "text-green-500",
    },
  ]

 

  return (
    <div className="flex min-h-screen bg-gray-50">
    

      {/* Main Content */}
      <div className="flex-1 lg:ml-0">
        {/* Header */}
        

        {/* Dashboard Content */}
        <main className="p-6">
          {activeTab === "dashboard" && (
            <div className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={stat.title}
                    className={`${stat.gradient} rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white/80 text-sm font-medium">{stat.title}</p>
                        <p className="text-3xl font-bold mt-2">{stat.value}</p>
                        <p className={`text-sm mt-2 ${stat.changeColor}`}>{stat.change} from last month</p>
                      </div>
                      <div className="text-4xl opacity-80">{stat.icon}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Charts Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Sales Overview */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-900">Sales Overview</h3>
                    <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Last 7 months</option>
                      <option>Last 3 months</option>
                      <option>Last year</option>
                    </select>
                  </div>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={salesData}>
                      <defs>
                        <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="month" stroke="#6B7280" />
                      <YAxis stroke="#6B7280" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "white",
                          border: "none",
                          borderRadius: "12px",
                          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                        }}
                      />
                      <Area
                        type="monotone"
                        dataKey="sales"
                        stroke="#3B82F6"
                        strokeWidth={3}
                        fill="url(#salesGradient)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                {/* Real-time Sales */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-900">Real-time Sales</h3>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-2"></div>
                      <span className="text-sm text-green-600 font-medium">Live</span>
                    </div>
                  </div>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={realtimeData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="time" stroke="#6B7280" />
                      <YAxis stroke="#6B7280" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "white",
                          border: "none",
                          borderRadius: "12px",
                          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                        }}
                      />
                      <Line
                        type="monotone"
                        dataKey="sales"
                        stroke="#10B981"
                        strokeWidth={3}
                        dot={{ fill: "#10B981", strokeWidth: 2, r: 6 }}
                        activeDot={{ r: 8, stroke: "#10B981", strokeWidth: 2 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Products vs Services & Category Distribution */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Products vs Services */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Products vs Services</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={salesData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="month" stroke="#6B7280" />
                      <YAxis stroke="#6B7280" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "white",
                          border: "none",
                          borderRadius: "12px",
                          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                        }}
                      />
                      <Bar dataKey="products" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="services" fill="#10B981" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                {/* Category Distribution */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Category Distribution</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={categoryData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={120}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {categoryData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "white",
                          border: "none",
                          borderRadius: "12px",
                          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    {categoryData.map((item, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
                        <span className="text-sm text-gray-600">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Recent Orders & Services */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Orders */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-900">Recent Orders</h3>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">View All</button>
                  </div>
                  <div className="space-y-4">
                    {recentOrders.slice(0, 5).map((order) => (
                      <div
                        key={order.id}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200"
                      >
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <p className="font-semibold text-gray-900">{order.id}</p>
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-medium ${
                                order.status === "Delivered"
                                  ? "bg-green-100 text-green-800"
                                  : order.status === "Processing"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : order.status === "Shipped"
                                      ? "bg-blue-100 text-blue-800"
                                      : "bg-gray-100 text-gray-800"
                              }`}
                            >
                              {order.status}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{order.customer}</p>
                          <p className="text-sm text-gray-500">{order.product}</p>
                        </div>
                        <div className="text-right ml-4">
                          <p className="font-bold text-gray-900">{order.amount}</p>
                          <p className="text-xs text-gray-500">{order.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Services */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-900">Recent Services</h3>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">View All</button>
                  </div>
                  <div className="space-y-4">
                    {recentServices.map((service) => (
                      <div
                        key={service.id}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200"
                      >
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <p className="font-semibold text-gray-900">{service.id}</p>
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-medium ${
                                service.status === "Completed"
                                  ? "bg-green-100 text-green-800"
                                  : service.status === "In Progress"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-blue-100 text-blue-800"
                              }`}
                            >
                              {service.status}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{service.customer}</p>
                          <p className="text-sm text-gray-500">{service.service}</p>
                        </div>
                        <div className="text-right ml-4">
                          <p className="font-bold text-gray-900">{service.amount}</p>
                          <p className="text-xs text-gray-500">{service.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Other tabs content can be added here */}
          {activeTab !== "dashboard" && (
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="text-6xl mb-4">🚧</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Coming Soon</h2>
              <p className="text-gray-600">The {activeTab} section is under development.</p>
            </div>
          )}
        </main>
      </div>

      
    </div>
  )
}

"use client"

import { useState } from "react"
import { Home, Package, User, Wrench } from "lucide-react"
import { Link } from "react-router-dom"

const Footer = () => {
  const [activeTab, setActiveTab] = useState("home")

  const handleTabClick = (tabName) => {
    setActiveTab(tabName)
    console.log(`Navigating to ${tabName}`)
  }

  const navItems = [
    { id: "home", icon: Home, label: "Home", path: "/" },
    { id: "product", icon: Package, label: "Product", path: "/allproducts" },
    { id: "services", icon: Wrench, label: "Services", path: "/allservices" },
    { id: "profile", icon: User, label: "Profile", path: "/profile" },
  ]

  return (
    <div>
      <nav className="fixed bottom-0 left-0 right-0 p-3 flex justify-center items-center mx-auto z-50 shadow-2xl md:p-4 lg:p-6">
        {/* Mobile Design - Compact circular navbar */}
        <div className="md:hidden flex justify-around items-center max-w-md bg-gradient-to-r from-slate-50 to-emerald-50 rounded-full gap-3 p-2 shadow-xl/35 border border-emerald-200 backdrop-blur-sm">
          {navItems.map((item) => {
            const IconComponent = item.icon
            const isActive = activeTab === item.id

            return (
              <Link key={item.id} to={item.path}>
                <button
                  className={`flex flex-col items-center justify-center p-3 rounded-full transition-all cursor-pointer duration-300
                                        ${
                                          isActive
                                            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                                            : "text-slate-600 hover:bg-emerald-100"
                                        }`}
                  onClick={() => handleTabClick(item.id)}
                >
                  <IconComponent size={20} strokeWidth={isActive ? 2.5 : 1.5} />
                </button>
              </Link>
            )
          })}
        </div>

        {/* Desktop Design - Compact full width with labels */}
        <div className="hidden md:flex justify-center items-center w-full max-w-xl lg:max-w-2xl bg-gradient-to-r from-slate-50 to-emerald-50 rounded-xl gap-0.5 p-1.5 shadow-xl/35 border border-emerald-200 backdrop-blur-sm lg:gap-1">
          {navItems.map((item) => {
            const IconComponent = item.icon
            const isActive = activeTab === item.id

            return (
              <Link key={item.id} to={item.path} className="flex-1">
                <button
                  className={`flex flex-col items-center justify-center w-full  rounded-lg transition-all cursor-pointer duration-300 lg:p-2
                                    ${
                                      isActive
                                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105"
                                        : "text-slate-600 hover:bg-emerald-100 hover:scale-102"
                                    }`}
                  onClick={() => handleTabClick(item.id)}
                >
                  <IconComponent
                    size={20}
                    strokeWidth={isActive ? 2.5 : 1.5}
                    className="mb-1 lg:mb-1.5 md:w-5 md:h-5 lg:w-6 lg:h-6"
                  />
                  <span className={`text-xs font-medium lg:text-sm ${isActive ? "font-semibold" : ""}`}>
                    {item.label}
                  </span>
                </button>
              </Link>
            )
          })}
        </div>
      </nav>
    </div>
  )
}

export default Footer

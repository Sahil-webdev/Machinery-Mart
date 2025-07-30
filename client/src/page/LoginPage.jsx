"use client"

import { useState, useEffect } from "react"
import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

// Custom Icons
const EyeIcon = ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
    </svg>
)

const EyeOffIcon = ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
        />
    </svg>
)

const UserIcon = ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
    </svg>
)

const MailIcon = ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
    </svg>
)

const LockIcon = ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
    </svg>
)

const PhoneIcon = ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
    </svg>
)

const GoogleIcon = ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24">
        <path
            fill="#4285F4"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        />
        <path
            fill="#34A853"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        />
        <path
            fill="#FBBC05"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        />
        <path
            fill="#EA4335"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        />
    </svg>
)

const FacebookIcon = ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="#1877F2" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
)

const ArrowRightIcon = ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
)

export default function AuthPage() {
    const [isLogin, setIsLogin] = useState(true)
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    // Form States
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: "",
        rememberMe: false,
    })

    const [signupForm, setSignupForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        agreeTerms: false,
    })

    const [errors, setErrors] = useState({})

    useEffect(() => {
        setIsVisible(true)
    }, [])

    // Validation Functions
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }

    const validatePassword = (password) => {
        return password.length >= 8
    }

    const validatePhone = (phone) => {
        const phoneRegex = /^[6-9]\d{9}$/
        return phoneRegex.test(phone)
    }

    // Handle Login
    const handleLogin = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setErrors({})

        const newErrors = {}

        if (!loginForm.email) {
            newErrors.email = "Email is required"
        } else if (!validateEmail(loginForm.email)) {
            newErrors.email = "Please enter a valid email"
        }

        if (!loginForm.password) {
            newErrors.password = "Password is required"
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            setIsLoading(false)
            return
        }

        // Simulate API call
        setTimeout(() => {
            console.log("Login successful:", loginForm)
            setIsLoading(false)
            // Redirect to dashboard
        }, 2000)
    }

    // Handle Signup
    const handleSignup = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setErrors({})

        const newErrors = {}

        if (!signupForm.firstName) {
            newErrors.firstName = "First name is required"
        }

        if (!signupForm.lastName) {
            newErrors.lastName = "Last name is required"
        }

        if (!signupForm.email) {
            newErrors.email = "Email is required"
        } else if (!validateEmail(signupForm.email)) {
            newErrors.email = "Please enter a valid email"
        }

        if (!signupForm.phone) {
            newErrors.phone = "Phone number is required"
        } else if (!validatePhone(signupForm.phone)) {
            newErrors.phone = "Please enter a valid 10-digit phone number"
        }

        if (!signupForm.password) {
            newErrors.password = "Password is required"
        } else if (!validatePassword(signupForm.password)) {
            newErrors.password = "Password must be at least 8 characters long"
        }

        if (!signupForm.confirmPassword) {
            newErrors.confirmPassword = "Please confirm your password"
        } else if (signupForm.password !== signupForm.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match"
        }

        if (!signupForm.agreeTerms) {
            newErrors.terms = "Please agree to the terms and conditions"
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            setIsLoading(false)
            return
        }

        // Simulate API call
        setTimeout(() => {
            console.log("Signup successful:", signupForm)
            setIsLoading(false)
            // Redirect to verification page
        }, 2000)
    }

    // Social Login Handlers
    const handleGoogleLogin = () => {
        console.log("Google login clicked")
    }

    const handleFacebookLogin = () => {
        console.log("Facebook login clicked")
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
            <div className="flex min-h-screen">
                {/* Left Side - Branding */}
                <div className="hidden lg:!flex lg:w-1/2 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden ">
                    <div className="absolute top-4 left-4 ">
                        <Link to="/" className="flex items-center gap-4 md:gap-3">
                            <button className="hover:!cursor-pointer p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-indigo-200 md:p-2 md:rounded-xl">
                                <ArrowLeft className="text-white md:w-5 md:h-5" size={24} />
                            </button>
                        </Link>
                    </div>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
                        <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
                        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/10 rounded-full blur-lg"></div>
                    </div>

                    <div className="relative z-10 flex flex-col justify-center px-12 py-16 text-white">
                        {/* Logo */}
                        <div className="mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30">
                                    <span className="text-white font-bold text-xl">M</span>
                                </div>
                                <h1 className="text-2xl font-bold">MachineryMart</h1>
                            </div>
                            <div className="w-16 h-1 bg-white/30 rounded-full"></div>
                        </div>

                        {/* Main Content */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-4xl font-bold mb-4 leading-tight">
                                    India's Leading
                                    <br />
                                    <span className="text-blue-200">Machinery Platform</span>
                                </h2>
                                <p className="text-xl text-blue-100 leading-relaxed">
                                    Join thousands of businesses who trust us for genuine machinery parts and professional services.
                                </p>
                            </div>

                            {/* Features */}
                            <div className="space-y-6">
                                {[
                                    { icon: "🔧", title: "Genuine Parts", desc: "100% authentic machinery parts with warranty" },
                                    { icon: "⚡", title: "Fast Delivery", desc: "Quick delivery across India within 24-48 hours" },
                                    { icon: "🛠️", title: "Expert Support", desc: "24/7 technical support from certified engineers" },
                                ].map((feature, index) => (
                                    <div
                                        key={feature.title}
                                        className={`flex items-center gap-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                                            }`}
                                        style={{ transitionDelay: `${index * 200}ms` }}
                                    >
                                        <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20">
                                            <span className="text-2xl">{feature.icon}</span>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg">{feature.title}</h3>
                                            <p className="text-blue-200 text-sm">{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
                                {[
                                    { number: "500+", label: "Happy Factories" },
                                    { number: "10K+", label: "Tools Sold" },
                                    { number: "24/7", label: "Support" },
                                ].map((stat, index) => (
                                    <div key={stat.label} className="text-center">
                                        <div className="text-2xl font-bold">{stat.number}</div>
                                        <div className="text-blue-200 text-sm">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Auth Form */}
                <div className="w-full lg:w-1/2 flex items-center justify-center p-4 lg:p-8 pb-30 md:!pb-34">
                    <div className="w-full max-w-md">
                        {/* Mobile Logo */}
                        <div className="lg:hidden text-center mb-8">
                            <div className="inline-flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">M</span>
                                </div>
                                <h1 className="text-2xl font-bold text-gray-900">MachineryMart</h1>
                            </div>
                        </div>

                        {/* Form Container */}
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-100">
                            {/* Form Header */}
                            <div className="p-6 lg:p-8">
                                <div className="text-center mb-8">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                                        {isLogin ? "Welcome Back" : "Create Account"}
                                    </h2>
                                    <p className="text-gray-600">
                                        {isLogin ? "Sign in to access your dashboard" : "Join MachineryMart today"}
                                    </p>
                                </div>

                                {/* Tab Switcher */}
                                <div className="flex bg-gray-100 rounded-xl p-1 mb-8">
                                    <button
                                        onClick={() => {
                                            setIsLogin(true)
                                            setErrors({})
                                        }}
                                        className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${isLogin ? "bg-white text-blue-600 shadow-sm" : "text-gray-600 hover:text-gray-900"
                                            }`}
                                    >
                                        Sign In
                                    </button>
                                    <button
                                        onClick={() => {
                                            setIsLogin(false)
                                            setErrors({})
                                        }}
                                        className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${!isLogin ? "bg-white text-blue-600 shadow-sm" : "text-gray-600 hover:text-gray-900"
                                            }`}
                                    >
                                        Sign Up
                                    </button>
                                </div>

                                {/* Forms */}
                                {isLogin ? (
                                    /* Login Form */
                                    <form onSubmit={handleLogin} className="space-y-6">
                                        {/* Email */}
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                                            <div className="relative">
                                                <MailIcon className=" absolute h-6 px-2 top-6 transform -translate-y-1/2 text-gray-400" />
                                                <input
                                                    type="email"
                                                    required
                                                    className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${errors.email
                                                        ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                                                        : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"
                                                        }`}
                                                    placeholder="Enter your email"
                                                    value={loginForm.email}
                                                    onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                                                />
                                            </div>
                                            {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
                                        </div>

                                        {/* Password */}
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                                            <div className="relative">
                                                <LockIcon className="absolute h-6 px-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                                <input
                                                    type={showPassword ? "text" : "password"}
                                                    required
                                                    className={`w-full pl-12 pr-12 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${errors.password
                                                        ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                                                        : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"
                                                        }`}
                                                    placeholder="Enter your password"
                                                    value={loginForm.password}
                                                    onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                                >
                                                    {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                                                </button>
                                            </div>
                                            {errors.password && <p className="mt-2 text-sm text-red-600">{errors.password}</p>}
                                        </div>

                                        {/* Remember Me & Forgot Password */}
                                        <div className="flex items-center justify-between">
                                            <label className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    checked={loginForm.rememberMe}
                                                    onChange={(e) => setLoginForm({ ...loginForm, rememberMe: e.target.checked })}
                                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                                                />
                                                <span className="ml-2 text-sm text-gray-600">Remember me</span>
                                            </label>
                                            <button type="button" className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                                                Forgot Password?
                                            </button>
                                        </div>

                                        {/* Login Button */}
                                        <button
                                            type="submit"
                                            disabled={isLoading}
                                            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 px-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                        >
                                            {isLoading ? (
                                                <>
                                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                                    Signing In...
                                                </>
                                            ) : (
                                                <>
                                                    Sign In
                                                    <ArrowRightIcon className="w-4 h-4" />
                                                </>
                                            )}
                                        </button>
                                    </form>
                                ) : (
                                    /* Signup Form */
                                    <form onSubmit={handleSignup} className="space-y-5">
                                        {/* Name Fields */}
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                                                <div className="relative">
                                                    <UserIcon className="absolute h-6 left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                                    <input
                                                        type="text"
                                                        required
                                                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${errors.firstName
                                                            ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                                                            : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"
                                                            }`}
                                                        placeholder="First name"
                                                        value={signupForm.firstName}
                                                        onChange={(e) => setSignupForm({ ...signupForm, firstName: e.target.value })}
                                                    />
                                                </div>
                                                {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
                                            </div>

                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                                                <div className="relative">
                                                    <UserIcon className="absolute h-6 left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                                    <input
                                                        type="text"
                                                        required
                                                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${errors.lastName
                                                            ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                                                            : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"
                                                            }`}
                                                        placeholder="Last name"
                                                        value={signupForm.lastName}
                                                        onChange={(e) => setSignupForm({ ...signupForm, lastName: e.target.value })}
                                                    />
                                                </div>
                                                {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
                                            </div>
                                        </div>

                                        {/* Email */}
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                                            <div className="relative">
                                                <MailIcon className="absolute h-6 left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                                <input
                                                    type="email"
                                                    required
                                                    className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${errors.email
                                                        ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                                                        : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"
                                                        }`}
                                                    placeholder="Enter your email"
                                                    value={signupForm.email}
                                                    onChange={(e) => setSignupForm({ ...signupForm, email: e.target.value })}
                                                />
                                            </div>
                                            {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
                                        </div>

                                        {/* Phone */}
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                                            <div className="relative">
                                                <PhoneIcon className="absolute h-6 left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                                <input
                                                    type="tel"
                                                    required
                                                    className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${errors.phone
                                                        ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                                                        : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"
                                                        }`}
                                                    placeholder="10-digit phone number"
                                                    value={signupForm.phone}
                                                    onChange={(e) => setSignupForm({ ...signupForm, phone: e.target.value })}
                                                />
                                            </div>
                                            {errors.phone && <p className="mt-2 text-sm text-red-600">{errors.phone}</p>}
                                        </div>

                                        {/* Password Fields */}
                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                                                <div className="relative">
                                                    <LockIcon className="absolute h-6 left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                                    <input
                                                        type={showPassword ? "text" : "password"}
                                                        required
                                                        className={`w-full pl-10 pr-12 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${errors.password
                                                            ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                                                            : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"
                                                            }`}
                                                        placeholder="Create password"
                                                        value={signupForm.password}
                                                        onChange={(e) => setSignupForm({ ...signupForm, password: e.target.value })}
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() => setShowPassword(!showPassword)}
                                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                                    >
                                                        {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                                                    </button>
                                                </div>
                                                {errors.password && <p className="mt-2 text-sm text-red-600">{errors.password}</p>}
                                            </div>

                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-2">Confirm Password</label>
                                                <div className="relative">
                                                    <LockIcon className="absolute h-6 left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                                    <input
                                                        type={showConfirmPassword ? "text" : "password"}
                                                        required
                                                        className={`w-full pl-10 pr-12 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${errors.confirmPassword
                                                            ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                                                            : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"
                                                            }`}
                                                        placeholder="Confirm password"
                                                        value={signupForm.confirmPassword}
                                                        onChange={(e) => setSignupForm({ ...signupForm, confirmPassword: e.target.value })}
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                                    >
                                                        {showConfirmPassword ? <EyeOffIcon /> : <EyeIcon />}
                                                    </button>
                                                </div>
                                                {errors.confirmPassword && (
                                                    <p className="mt-2 text-sm text-red-600">{errors.confirmPassword}</p>
                                                )}
                                            </div>
                                        </div>

                                        {/* Terms & Conditions */}
                                        <div>
                                            <label className="flex items-start gap-3">
                                                <input
                                                    type="checkbox"
                                                    checked={signupForm.agreeTerms}
                                                    onChange={(e) => setSignupForm({ ...signupForm, agreeTerms: e.target.checked })}
                                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 mt-0.5"
                                                />
                                                <span className="text-sm text-gray-600">
                                                    I agree to the{" "}
                                                    <button type="button" className="text-blue-600 hover:text-blue-800 font-medium">
                                                        Terms & Conditions
                                                    </button>{" "}
                                                    and{" "}
                                                    <button type="button" className="text-blue-600 hover:text-blue-800 font-medium">
                                                        Privacy Policy
                                                    </button>
                                                </span>
                                            </label>
                                            {errors.terms && <p className="mt-2 text-sm text-red-600">{errors.terms}</p>}
                                        </div>

                                        {/* Signup Button */}
                                        <button
                                            type="submit"
                                            disabled={isLoading}
                                            className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white py-3 px-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                        >
                                            {isLoading ? (
                                                <>
                                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                                    Creating Account...
                                                </>
                                            ) : (
                                                <>
                                                    Create Account
                                                    <ArrowRightIcon className="w-4 h-4" />
                                                </>
                                            )}
                                        </button>
                                    </form>
                                )}

                                {/* Social Login Divider */}
                                <div className="my-6">
                                    <div className="relative">
                                        <div className="absolute inset-0 flex items-center">
                                            <div className="w-full border-t border-gray-300"></div>
                                        </div>
                                        <div className="relative flex justify-center text-sm">
                                            <span className="px-4 bg-white text-gray-500">Or continue with</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Social Login Buttons */}
                                <div className="grid grid-cols-2 gap-4">
                                    <button
                                        type="button"
                                        onClick={handleGoogleLogin}
                                        className="flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 font-medium text-gray-700"
                                    >
                                        <GoogleIcon className="w-5 h-5" />
                                        Google
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleFacebookLogin}
                                        className="flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 font-medium text-gray-700"
                                    >
                                        <FacebookIcon className="w-5 h-5" />
                                        Facebook
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Footer Text */}
                        <div className="text-center mt-6">
                            <p className="text-sm text-gray-500">© 2025 MachineryMart. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

import { Calendar, Home, LogOut, User, Menu, X, Users, MessageCircle, UserCheck } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className="bg-gray-50">
      <header className="bg-white shadow-sm border-b border-gray-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-green-500">GreenLeaf</h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
              <Link to="/" className="flex items-center px-2 py-1 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-50 transition-colors">
                <Home className="w-4 h-4 mr-1" />
                <span className="hidden xl:inline">Home</span>
              </Link>
              <Link to="/event" className="flex items-center px-2 py-1 rounded-md text-green-600 hover:text-green-700 hover:bg-green-50 transition-colors">
                <Calendar className="w-4 h-4 mr-1" />
                <span className="hidden xl:inline">Events</span>
              </Link>
              <Link to="/feed" className="flex items-center px-2 py-1 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-50 transition-colors">
                <Users className="w-4 h-4 mr-1" />
                <span className="hidden xl:inline">Feed</span>
              </Link>
              <Link href="/" className="flex items-center px-2 py-1 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-50 transition-colors">
                <MessageCircle className="w-4 h-4 mr-1" />
                <span className="hidden xl:inline">Message</span>
              </Link>
              <Link to="/profile" className="flex items-center px-2 py-1 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-50 transition-colors">
                <User className="w-4 h-4 mr-1" />
                <span className="hidden xl:inline">Profile</span>
              </Link>
              <Link to="/signup" className="flex items-center px-3 py-2 rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors font-medium">
                <UserCheck className="w-4 h-4 mr-1" />
                <span className="hidden xl:inline">Sign Up</span>
              </Link>
            </nav>

            {/* Tablet Navigation (md to lg) */}
            <nav className="hidden md:flex lg:hidden items-center space-x-3">
              <a href="#" className="flex items-center p-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-50 transition-colors" title="Home">
                <Home className="w-5 h-5" />
              </a>
              <a href="#" className="flex items-center p-2 rounded-md text-green-600 hover:text-green-700 hover:bg-green-50 transition-colors" title="Events">
                <Calendar className="w-5 h-5" />
              </a>
              <a href="#" className="flex items-center p-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-50 transition-colors" title="Network">
                <Users className="w-5 h-5" />
              </a>
              <a href="#" className="flex items-center p-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-50 transition-colors" title="Messages">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="flex items-center p-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-50 transition-colors" title="Profile">
                <User className="w-5 h-5" />
              </a>
              <a href="#" className="flex items-center p-2 rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors" title="Sign Up">
                <UserCheck className="w-5 h-5" />
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu}
              className="md:hidden lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50 bg-white">
            {/* Header with close button */}
            <div className="flex justify-between items-center h-16 px-4 border-b border-gray-200">
              <h1 className="text-2xl font-bold text-green-500">GreenLeaf</h1>
              <button 
                onClick={closeMenu}
                className="p-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-100"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* Navigation Links */}
            <nav className="flex flex-col p-4 space-y-4">
              <Link 
                to="/" 
                onClick={closeMenu}
                className="flex items-center text-xl text-gray-600 hover:text-gray-800 py-4 px-2 rounded-lg hover:bg-gray-50"
              >
                <Home className="w-6 h-6 mr-3" />
                Home
              </Link>
              <Link 
                to="/event" 
                onClick={closeMenu}
                className="flex items-center text-xl text-green-600 hover:text-green-700 py-4 px-2 rounded-lg hover:bg-gray-50"
              >
                <Calendar className="w-6 h-6 mr-3" />
                Events
              </Link>
              <Link 
                href="/feed" 
                onClick={closeMenu}
                className="flex items-center text-xl text-gray-600 hover:text-gray-800 py-4 px-2 rounded-lg hover:bg-gray-50"
              >
                <Users className="w-6 h-6 mr-3" />
                Feed
              </Link>
              <Link 
                href="#" 
                onClick={closeMenu}
                className="flex items-center text-xl text-gray-600 hover:text-gray-800 py-4 px-2 rounded-lg hover:bg-gray-50"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                Message
              </Link>
               <Link
                to="/profile" 
                onClick={closeMenu}
                className="flex items-center text-xl text-gray-600 hover:text-gray-800 py-4 px-2 rounded-lg hover:bg-gray-50"
              >
                <User className="w-6 h-6 mr-3" />
                Profile
              </Link>
              
               <Link 
                to="/signup" 
                onClick={closeMenu}
                className="flex items-center text-xl text-gray-600 hover:text-gray-800 py-4 px-2 rounded-lg hover:bg-gray-50"
              >
                <UserCheck className="w-6 h-6 mr-3" />
                SignUp
              </Link>
            </nav>
          </div>
        )}
      </header>
    </div>
  )
}

export default Header
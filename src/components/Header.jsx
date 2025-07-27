// Header component with dark theme navigation and auth buttons
import React, { useState } from 'react'
import { supabase, isConfigured } from '../lib/supabase'
import { useAuth } from '../hooks/useAuth'
import { LogOut, User } from 'lucide-react'

export default function Header({ onAuthClick, onCourseClick }) {
  const { user } = useAuth()
  const [showUserMenu, setShowUserMenu] = useState(false)

  // Handle user logout
  const handleLogout = async () => {
    if (supabase && isConfigured) {
      await supabase.auth.signOut()
    }
    setShowUserMenu(false)
  }

  return (
    <header className="glass-effect sticky top-0 z-40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Vibe Coding
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={onCourseClick}
              className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
            >
              Course
            </button>
            <a href="#about" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
              About
            </a>
            <a href="#contact" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
              Contact
            </a>
          </nav>

          {/* Auth section */}
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-2 text-gray-300 hover:text-primary-400 transition-colors duration-300"
                >
                  <User size={20} />
                  <span className="hidden sm:block">{user.email}</span>
                </button>
                
                {/* User dropdown menu */}
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 glass-effect rounded-lg shadow-xl border border-white/20">
                    <button
                      onClick={handleLogout}
                      className="flex items-center space-x-2 w-full px-4 py-2 text-left text-gray-300 hover:bg-white/10 rounded-lg transition-colors duration-300"
                    >
                      <LogOut size={16} />
                      <span>Sign Out</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={onAuthClick}
                className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-2 rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-300 transform hover:scale-105 glow-effect"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

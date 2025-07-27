// Main App component with dark blue theme
import React, { useState } from 'react'
import { useAuth } from './hooks/useAuth'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import AuthModal from './components/AuthModal'
import CourseModal from './components/CourseModal'

export default function App() {
  const { user, loading } = useAuth()
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [showCourseModal, setShowCourseModal] = useState(false)

  // Handle course access - require authentication
  const handleCourseClick = () => {
    if (user) {
      setShowCourseModal(true)
    } else {
      setShowAuthModal(true)
    }
  }

  // Handle authentication modal
  const handleAuthClick = () => {
    setShowAuthModal(true)
  }

  // Show loading state while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="relative">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          <div className="absolute inset-0 animate-ping rounded-full h-12 w-12 border border-blue-400 opacity-20"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header with navigation */}
      <Header 
        onAuthClick={handleAuthClick}
        onCourseClick={handleCourseClick}
      />

      {/* Main content */}
      <main className="flex-grow">
        <Hero 
          onCourseClick={handleCourseClick}
          onAuthClick={handleAuthClick}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <AuthModal 
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />
      
      <CourseModal 
        isOpen={showCourseModal}
        onClose={() => setShowCourseModal(false)}
      />
    </div>
  )
}

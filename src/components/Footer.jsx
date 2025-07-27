// Dark themed footer component
import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-900/50 border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400">
            © 2025{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">
              21stCenturyExpert.com
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}

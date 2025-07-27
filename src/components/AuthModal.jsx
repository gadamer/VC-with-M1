// Dark blue themed authentication modal
import React, { useState } from 'react'
import { supabase, isConfigured } from '../lib/supabase'
import Modal from './Modal'

export default function AuthModal({ isOpen, onClose }) {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // Handle form submission for both login and signup
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!isConfigured || !supabase) {
      setError('Authentication is not configured. Please connect to Supabase first.')
      return
    }

    setLoading(true)
    setError('')

    try {
      if (isLogin) {
        // Sign in existing user
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        })
        if (error) throw error
      } else {
        // Sign up new user
        const { error } = await supabase.auth.signUp({
          email,
          password,
        })
        if (error) throw error
      }
      
      // Close modal on success
      onClose()
      setEmail('')
      setPassword('')
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  // Reset form when switching between login/signup
  const toggleMode = () => {
    setIsLogin(!isLogin)
    setError('')
    setEmail('')
    setPassword('')
  }

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      title={
        <span className="gradient-text">
          {isLogin ? 'Welcome Back' : 'Create Account'}
        </span>
      }
    >
      {!isConfigured && (
        <div className="mb-4 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
          <p className="text-yellow-300 text-sm">
            <strong>Setup Required:</strong> Please connect to Supabase in the chat box to enable authentication.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email input */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={!isConfigured}
            className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-800 disabled:cursor-not-allowed text-white placeholder-gray-400 transition-all duration-300"
            placeholder="Enter your email"
          />
        </div>

        {/* Password input */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
            disabled={!isConfigured}
            className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-800 disabled:cursor-not-allowed text-white placeholder-gray-400 transition-all duration-300"
            placeholder="Enter your password"
          />
        </div>

        {/* Error message */}
        {error && (
          <div className="text-red-300 text-sm bg-red-500/10 p-3 rounded-lg border border-red-500/30">
            {error}
          </div>
        )}

        {/* Submit button */}
        <button
          type="submit"
          disabled={loading || !isConfigured}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
        >
          {loading ? 'Loading...' : (isLogin ? 'Sign In' : 'Sign Up')}
        </button>

        {/* Toggle between login/signup */}
        <div className="text-center">
          <button
            type="button"
            onClick={toggleMode}
            disabled={!isConfigured}
            className="text-blue-400 hover:text-blue-300 text-sm disabled:text-gray-500 disabled:cursor-not-allowed transition-colors duration-300"
          >
            {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
          </button>
        </div>
      </form>
    </Modal>
  )
}

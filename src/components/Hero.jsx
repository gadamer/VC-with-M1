// Hero section with dark blue theme and woman coding image
import React from 'react'
import { Play, Code, Zap, User, Sparkles } from 'lucide-react'

export default function Hero({ onCourseClick, onAuthClick }) {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 hero-glow"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 glass-effect px-4 py-2 rounded-full mb-8">
              <Sparkles className="text-blue-400" size={16} />
              <span className="text-sm text-gray-300">Transform Your Future</span>
            </div>

            {/* Main headline with gradient */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">Vibe Coding with </span>
              <span className="gradient-text animate-glow">
                Milo
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-2xl leading-relaxed">
              Confidently Transform Your{' '}
              <span className="text-blue-400 font-semibold">Creativity</span> into{' '}
              <span className="text-purple-400 font-semibold">Code</span> and{' '}
              <span className="text-yellow-400 font-semibold">Profit</span> from Your Passion.
            </p>

            {/* Call-to-action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-16">
              <button
                onClick={onCourseClick}
                className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl glow-effect"
              >
                <Play size={20} />
                <span className="font-semibold">Start Learning</span>
              </button>
              
              <button
                onClick={onAuthClick}
                className="flex items-center space-x-2 glass-effect text-white px-8 py-4 rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <User size={20} />
                <span className="font-semibold">Join Community</span>
              </button>
            </div>

            {/* Feature highlights */}
            <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto lg:mx-0 mb-3 border border-blue-500/30">
                  <Code className="text-blue-400" size={20} />
                </div>
                <h3 className="font-semibold text-white mb-2 text-sm">Learn by Doing</h3>
                <p className="text-gray-400 text-xs">Build real projects</p>
              </div>
              
              <div className="text-center lg:text-left">
                <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto lg:mx-0 mb-3 border border-purple-500/30">
                  <Zap className="text-purple-400" size={20} />
                </div>
                <h3 className="font-semibold text-white mb-2 text-sm">Fast Track</h3>
                <p className="text-gray-400 text-xs">Skip theory overload</p>
              </div>
              
              <div className="text-center lg:text-left">
                <div className="bg-gradient-to-br from-blue-400/20 to-purple-500/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto lg:mx-0 mb-3 border border-blue-400/30">
                  <Sparkles className="text-blue-300" size={20} />
                </div>
                <h3 className="font-semibold text-white mb-2 text-sm">Profit Ready</h3>
                <p className="text-gray-400 text-xs">Income-focused skills</p>
              </div>
            </div>
          </div>

          {/* Right side - Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main image container with glow effect */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Young woman smiling while coding on laptop"
                  className="w-full h-[500px] object-cover"
                  onError={(e) => {
                    // Fallback image if the first one fails
                    e.target.src = "https://images.unsplash.com/photo-1494790108755-2616c9c0e8e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  }}
                />
                
                {/* Floating code elements */}
                <div className="absolute top-4 right-4 glass-effect px-3 py-2 rounded-lg animate-float">
                  <code className="text-blue-400 text-sm">{'<Hello />'}</code>
                </div>
                <div className="absolute bottom-4 left-4 glass-effect px-3 py-2 rounded-lg animate-float" style={{animationDelay: '1s'}}>
                  <code className="text-purple-400 text-sm">console.log('✨')</code>
                </div>
                <div className="absolute top-1/2 left-4 glass-effect px-3 py-2 rounded-lg animate-float" style={{animationDelay: '0.5s'}}>
                  <code className="text-blue-300 text-sm">{'{ coding: true }'}</code>
                </div>
              </div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-xl opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full blur-xl opacity-40 animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

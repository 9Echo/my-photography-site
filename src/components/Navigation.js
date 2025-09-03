// src/components/Navigation.js
'use client'
import { useState } from 'react'

export default function Navigation() {
  const [activeTab, setActiveTab] = useState('home')

  const handleTabClick = (tab) => {
    setActiveTab(tab)
    // Future: Add routing here
  }

  return (
    <nav className="py-6 px-8">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-light tracking-wide">
          A Room of My Own
        </h1>
        
        {/* Navigation Links */}
        <div className="flex space-x-8 text-lg">
          <button 
            onClick={() => handleTabClick('home')}
            className={`hover:text-gray-900 transition-colors duration-300 ${
              activeTab === 'home' ? 'border-b-2 border-gray-800' : ''
            }`}
          >
            home
          </button>
          <button 
            onClick={() => handleTabClick('portfolio')}
            className={`hover:text-gray-900 transition-colors duration-300 ${
              activeTab === 'portfolio' ? 'border-b-2 border-gray-800' : ''
            }`}
          >
            portfolio
          </button>
          <button 
            onClick={() => handleTabClick('contact')}
            className={`hover:text-gray-900 transition-colors duration-300 ${
              activeTab === 'contact' ? 'border-b-2 border-gray-800' : ''
            }`}
          >
            contact
          </button>
        </div>
      </div>
    </nav>
  )
}
// src/components/Navigation.js - Fixed version
'use client'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname() // Get current URL path
  const [currentLanguage, setCurrentLanguage] = useState('en')

  // Determine active tab based on current URL
  const getActiveTab = () => {
    if (pathname === '/') return 'home'
    if (pathname === '/portfolio') return 'portfolio'
    if (pathname === '/contact') return 'contact'
    return 'home'
  }

  const [activeTab, setActiveTab] = useState(getActiveTab())

  // Update active tab when URL changes
  useEffect(() => {
    setActiveTab(getActiveTab())
  }, [pathname])

  // Language content
  const content = {
    en: {
      title: "A Room of My Own",
      nav: {
        home: "home",
        portfolio: "portfolio", 
        contact: "contact"
      }
    },
    zh: {
      title: "我的一方天地",
      nav: {
        home: "首页",
        portfolio: "作品集",
        contact: "联系"
      }
    },
    ja: {
      title: "私の居場所",
      nav: {
        home: "ホーム",
        portfolio: "ポートフォリオ",
        contact: "連絡"
      }
    }
  }

  const languages = [
    { code: 'en', label: 'EN', name: 'English' },
    { code: 'zh', label: '中', name: '中文' },
    { code: 'ja', label: '日', name: '日本語' }
  ]

  const handleTabClick = (tab) => {
    setActiveTab(tab)
    // Navigate to the correct page
    if (tab === 'portfolio') {
      window.location.href = '/portfolio'
    } else if (tab === 'contact') {
      window.location.href = '/contact'
    } else if (tab === 'home') {
      window.location.href = '/'
    }
  }

  const handleLanguageChange = (langCode) => {
    setCurrentLanguage(langCode)
    localStorage.setItem('language', langCode)
  }

  // Load saved language on mount
  useEffect(() => {
    const savedLang = localStorage.getItem('language')
    if (savedLang && ['en', 'zh', 'ja'].includes(savedLang)) {
      setCurrentLanguage(savedLang)
    }
  }, [])

  const currentContent = content[currentLanguage]
  const fontFamily = currentLanguage === 'zh' ? 'SimSun, 宋体, serif' : 
                    currentLanguage === 'ja' ? 'Hiragino Sans, sans-serif' : 
                    'Georgia, serif'

  return (
    <nav className="py-6 px-8 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        {/* Title */}
        <h1 
          className="text-3xl md:text-4xl font-light tracking-wide cursor-pointer"
          style={{ fontFamily }}
          onClick={() => handleTabClick('home')}
        >
          {currentContent.title}
        </h1>
        
        <div className="flex items-center gap-8">
          {/* Navigation Links */}
          <div className="flex space-x-6 text-lg">
            {Object.entries(currentContent.nav).map(([key, label]) => (
              <button 
                key={key}
                onClick={() => handleTabClick(key)}
                className={`hover:text-gray-900 transition-colors duration-300 ${
                  activeTab === key ? 'border-b-2 border-gray-800 font-medium' : ''
                }`}
                style={{ fontFamily }}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Language Selector */}
          <div className="relative group">
            <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors">
              <span className="font-medium">{languages.find(l => l.code === currentLanguage)?.label}</span>
              <svg className="w-4 h-4 transform group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Language Dropdown */}
            <div className="absolute right-0 top-full mt-2 bg-white border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg ${
                    currentLanguage === lang.code ? 'bg-gray-100 font-medium' : ''
                  }`}
                >
                  <span className="font-medium">{lang.label}</span>
                  <span className="ml-2 text-gray-500">{lang.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>
    </nav>
  )
}
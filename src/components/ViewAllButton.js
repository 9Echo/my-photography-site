// src/components/ViewAllButton.js - Create this new file
'use client'

export default function ViewAllButton() {
  return (
    <button 
      className="px-8 py-3 rounded-lg transition-all duration-300 text-lg hover:transform hover:-translate-y-1 hover:shadow-lg"
      style={{
        fontFamily: 'Georgia, serif',
        fontWeight: '400',
        letterSpacing: '0.5px',
        backgroundColor: '#d1d5db',
        color: '#374151',
        border: '1px solid #9ca3af',
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = '#9ca3af'
        e.target.style.color = '#1f2937'
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = '#d1d5db'
        e.target.style.color = '#374151'
      }}
      onClick={() => {
        // Future: Navigate to full portfolio
        window.location.href = '/portfolio'
      }}
    >
      View All Photography
    </button>
  )
}
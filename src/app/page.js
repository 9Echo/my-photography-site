// src/app/page.js
import Navigation from '@/components/Navigation'
import PersonalProfile from '@/components/PersonalProfile'
import FeaturedPhoto from '@/components/FeaturedPhoto'
import LatestPhotos from '@/components/LatestPhotos'

export default function Home() {
  return (
    <div className="bg-gray-200 min-h-screen font-sans text-gray-700">
      
      {/* Navigation */}
      <Navigation />

      <div className="max-w-6xl mx-auto px-8">
        
        {/* Personal Profile Section */}
        <section className="mt-24 mb-20">
          <p className="text-xl md:text-2xl leading-relaxed max-w-4xl" 
             style={{ 
               fontFamily: 'Playfair Display, Georgia, serif',
               lineHeight: '1.8',
               fontWeight: '400',
               letterSpacing: '0.5px'
             }}>
            my personal profile: from China, based in KunMing, a normal human being, a traveler, a wanderer, 
            a onzen lover, hiker, an interester of the world.
          </p>
        </section>

        {/* Featured Photo Section */}
        <FeaturedPhoto />

        {/* Latest Photos Section */}
        <LatestPhotos />

        {/* View More Button */}
        <section className="text-center mb-16">
          <button 
            className="px-8 py-3 rounded-lg transition-all duration-300 text-lg"
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: '500',
              letterSpacing: '0.5px',
              backgroundColor: '#d1d5db', // Closer to background
              color: '#374151',
              border: '1px solid #9ca3af',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#9ca3af'
              e.target.style.color = '#1f2937'
              e.target.style.transform = 'translateY(-1px)'
              e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)'
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#d1d5db'
              e.target.style.color = '#374151'
              e.target.style.transform = 'translateY(0)'
              e.target.style.boxShadow = 'none'
            }}
          >
            View All Photography
          </button>
        </section>

      </div>

      {/* Simple Footer */}
      <footer className="text-center py-8 text-sm text-gray-500">
        <p>© 2024 A Room of My Own • Photography Portfolio</p>
      </footer>

    </div>
  )
}
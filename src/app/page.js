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
        <PersonalProfile />

        {/* Featured Photo Section */}
        <FeaturedPhoto />

        {/* Latest Photos Section */}
        <LatestPhotos />

        {/* View More Button */}
        <section className="text-center mb-16">
          <button className="bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-900 transition-colors duration-300 text-lg font-light">
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
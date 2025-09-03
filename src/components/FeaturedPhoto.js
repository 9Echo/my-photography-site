// src/components/FeaturedPhoto.js
'use client'

export default function FeaturedPhoto() {
  // Sample featured photo - replace with your own
  const featuredPhoto = {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop",
    alt: "Featured Photography"
  }

  const handlePhotoClick = () => {
    // Future: Open photo in lightbox
    console.log('Featured photo clicked - lightbox coming soon!')
  }

  return (
    <section className="mb-16">
      <div 
        className="relative group cursor-pointer"
        onClick={handlePhotoClick}
      >
        {/* Large Featured Photo */}
        <div className="w-full h-96 md:h-[500px] lg:h-[600px] bg-purple-100 rounded-lg overflow-hidden shadow-lg">
          <img 
            src={featuredPhoto.src}
            alt={featuredPhoto.alt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        </div>
        
        {/* Simple hover effect without text */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-500 rounded-lg">
        </div>
      </div>
    </section>
  )
}
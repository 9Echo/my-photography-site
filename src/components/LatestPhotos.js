// src/components/LatestPhotos.js
'use client'

export default function LatestPhotos() {
  // Sample latest photos - replace with your own
  const latestPhotos = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=500&fit=crop",
      alt: "Latest Photo 1"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=500&fit=crop",
      alt: "Latest Photo 2"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=500&fit=crop",
      alt: "Latest Photo 3"
    }
  ]

  const handlePhotoClick = (photoId) => {
    // Future: Open photo in lightbox
    console.log(`Latest photo ${photoId} clicked - lightbox coming soon!`)
  }

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-light mb-8 tracking-wide">Latest</h2>
      
      {/* Latest Photos Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {latestPhotos.map((photo) => (
          <div 
            key={photo.id}
            className="group cursor-pointer"
            onClick={() => handlePhotoClick(photo.id)}
          >
            <div className="bg-purple-100 h-64 md:h-80 rounded-lg overflow-hidden shadow-md">
              <img 
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
// src/components/ArticleCard.js
'use client'

export default function ArticleCard({ article }) {
  const handleReadMore = () => {
    window.location.href = `/articles/${article.slug}`
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row">
      
      {/* Cover Image */}
      <div className="md:w-1/3">
        <div className="relative group cursor-pointer h-48 md:h-full" onClick={handleReadMore}>
          <img 
            src={article.coverImage || "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"}
            alt={article.title || 'Article image'}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Article Content */}
      <div className="md:w-2/3 p-6">
        <h2 
          className="text-xl font-light mb-3 cursor-pointer hover:text-gray-900 transition-colors"
          onClick={handleReadMore}
        >
          {article.title || 'Untitled'}
        </h2>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {article.excerpt || 'No excerpt available...'}
        </p>

        {article.tags && (
          <div className="flex flex-wrap gap-2 mb-4">
            {article.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                #{tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-4">
            <span>{article.date ? formatDate(article.date) : 'No date'}</span>
            {article.readTime && (
              <>
                <span>•</span>
                <span>{article.readTime} min read</span>
              </>
            )}
          </div>
          
          <button 
            onClick={handleReadMore}
            className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
          >
            Read More →
          </button>
        </div>
      </div>
    </article>
  )
}
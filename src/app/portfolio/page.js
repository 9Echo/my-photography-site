// src/app/articles/page.js
import { getAllPosts } from '@/lib/blog'
import Navigation from '@/components/Navigation'
import ArticleCard from '@/components/ArticleCard'

export default function Articles() {
  const posts = getAllPosts()

  return (
    <div className="bg-gray-200 min-h-screen text-gray-700">
      <Navigation />

      <div className="max-w-6xl mx-auto px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light tracking-wide mb-4">Articles</h1>
          <p className="text-lg text-gray-600 font-light">
            Latest thoughts on photography and travel
          </p>
        </div>

        <div className="space-y-8">
          {posts.map((post) => (
            <ArticleCard key={post.slug} article={post} />
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500">
              No articles found. Add some .md files to /content/articles/
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
// BlogDetail.jsx
import { useParams, Link, useNavigate } from 'react-router-dom'; // assuming you're using react-router
import { ArrowLeftIcon, ShareIcon } from '@heroicons/react/24/outline';

const BlogDetail = () => {
  const { id } = useParams(); // e.g. /blog/3
  const navigate = useNavigate();

  // In real app → fetch from API / database by id
  // For demo → using your static array
  const blogPosts = [
    {
      id: 1,
      title: "Why React Server Components Will Change Frontend Forever",
      excerpt: "The biggest shift in React since hooks — and most developers still don't understand it properly.",
      category: "Technology",
      date: "Mar 8, 2026",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1600&auto=format&fit=crop",
      content: `
        <p>React Server Components (RSC) represent one of the most significant architectural shifts in React's history. Introduced by the React team in 2023 and now maturing in 2026, they fundamentally change how we think about data fetching, rendering, and bundle size.</p>
        
        <p>Unlike traditional client components, Server Components execute only on the server, never reach the client, and can directly access backend resources without API endpoints. This eliminates the traditional "waterfall" problem and dramatically reduces JavaScript shipped to the browser.</p>
        
        <h2>Key Benefits in 2026</h2>
        <ul>
          <li>Zero client-side JavaScript for static parts</li>
          <li>Direct database & file system access from components</li>
          <li>Streaming rendering out-of-the-box</li>
          <li>Automatic code-splitting at component boundaries</li>
          <li>Better SEO and initial paint performance</li>
        </ul>
        
        <p>Most teams still misuse them by treating everything as client components — that's the biggest mistake in 2026. The real power comes when you compose Server → Client boundaries thoughtfully.</p>
        
        <blockquote>
          "If you're still building full-page client-side apps in 2026, you're probably shipping 5–10× more JavaScript than necessary."
        </blockquote>
        
        <p>Next.js 15+ with the App Router makes RSC feel almost magical once you get the mental model right. Highly recommend migrating incrementally — start with data-heavy pages.</p>
      `,
      author: "Aditya Sharma",
      authorRole: "Full-Stack Developer & Blogger",
      authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop",
    },
    // ... you can add others, but showing one for demo
    {
      id: 3,
      title: "Best Indian Street Food Cities in 2026 – Ranked",
      excerpt: "From Indore's poha to Kolkata's kathi rolls — real ranking after eating 400+ dishes.",
      category: "Food",
      date: "Mar 1, 2026",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=1600&auto=format&fit=crop",
      content: `<p>After traveling across India and trying hundreds of dishes in 2026, here is my honest ranking...</p>`,
      author: "Aditya Sharma",
      authorRole: "Food Enthusiast",
    },
    // Add more if needed
  ];

  const post = blogPosts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Article not found</h2>
          <Link to="/blog" className="text-indigo-600 hover:underline">
            ← Back to all articles
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <article className="min-h-screen bg-gray-50 pt-8 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Navigation */}
        <div className="mb-10">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Back to articles
          </button>
        </div>

        {/* Hero Image + Metadata */}
        <div className="relative rounded-2xl overflow-hidden mb-10 shadow-xl">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 sm:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
            <span className="inline-block bg-indigo-600 text-white text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              {post.title}
            </h1>
            <div className="mt-4 flex items-center text-white/90 text-sm sm:text-base">
              <span>{post.date}</span>
              <span className="mx-3">•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        {/* Author */}
        <div className="flex items-center mb-12">
          <img
            src={post.authorImage}
            alt={post.author}
            className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-indigo-100"
          />
          <div>
            <p className="font-semibold text-gray-900">{post.author}</p>
            <p className="text-sm text-gray-600">{post.authorRole}</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg prose-indigo max-w-none mb-16">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        {/* Share Buttons */}
        <div className="flex items-center justify-center sm:justify-start gap-4 mb-16">
          <span className="text-gray-600 font-medium">Share this article:</span>
          <button className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
            <ShareIcon className="w-5 h-5 text-gray-700" />
          </button>
          {/* You can add Twitter, LinkedIn, WhatsApp icons here */}
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <div className="border-t border-gray-200 pt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              You may also like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <Link
                  key={related.id}
                  to={`/blog/${related.id}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="aspect-[16/9] relative">
                    <img
                      src={related.image}
                      alt={related.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-3 left-3 bg-indigo-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                      {related.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 line-clamp-2 group-hover:text-indigo-700 transition-colors">
                      {related.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                      {related.date} • {related.readTime}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="text-center mt-20">
          <Link
            to="/blog"
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-full hover:bg-indigo-700 transition-colors"
          >
            ← View all articles
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogDetail;
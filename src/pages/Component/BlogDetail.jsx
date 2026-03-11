// // BlogDetail.jsx
// import { useParams, Link, useNavigate } from 'react-router-dom'; // assuming you're using react-router
// import { ArrowLeftIcon, ShareIcon } from '@heroicons/react/24/outline';

// const BlogDetail = () => {
//   const { id } = useParams(); // e.g. /blog/3
//   const navigate = useNavigate();

//   // In real app → fetch from API / database by id
//   // For demo → using your static array
//   const blogPosts = [
//     {
//       id: 1,
//       title: "Why React Server Components Will Change Frontend Forever",
//       excerpt: "The biggest shift in React since hooks — and most developers still don't understand it properly.",
//       category: "Technology",
//       date: "Mar 8, 2026",
//       readTime: "8 min read",
//       image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1600&auto=format&fit=crop",
//       content: `
//         <p>React Server Components (RSC) represent one of the most significant architectural shifts in React's history. Introduced by the React team in 2023 and now maturing in 2026, they fundamentally change how we think about data fetching, rendering, and bundle size.</p>
        
//         <p>Unlike traditional client components, Server Components execute only on the server, never reach the client, and can directly access backend resources without API endpoints. This eliminates the traditional "waterfall" problem and dramatically reduces JavaScript shipped to the browser.</p>
        
//         <h2>Key Benefits in 2026</h2>
//         <ul>
//           <li>Zero client-side JavaScript for static parts</li>
//           <li>Direct database & file system access from components</li>
//           <li>Streaming rendering out-of-the-box</li>
//           <li>Automatic code-splitting at component boundaries</li>
//           <li>Better SEO and initial paint performance</li>
//         </ul>
        
//         <p>Most teams still misuse them by treating everything as client components — that's the biggest mistake in 2026. The real power comes when you compose Server → Client boundaries thoughtfully.</p>
        
//         <blockquote>
//           "If you're still building full-page client-side apps in 2026, you're probably shipping 5–10× more JavaScript than necessary."
//         </blockquote>
        
//         <p>Next.js 15+ with the App Router makes RSC feel almost magical once you get the mental model right. Highly recommend migrating incrementally — start with data-heavy pages.</p>
//       `,
//       author: "Aditya Sharma",
//       authorRole: "Full-Stack Developer & Blogger",
//       authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop",
//     },
//     // ... you can add others, but showing one for demo
//     {
//       id: 3,
//       title: "Best Indian Street Food Cities in 2026 – Ranked",
//       excerpt: "From Indore's poha to Kolkata's kathi rolls — real ranking after eating 400+ dishes.",
//       category: "Food",
//       date: "Mar 1, 2026",
//       readTime: "12 min read",
//       image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=1600&auto=format&fit=crop",
//       content: `<p>After traveling across India and trying hundreds of dishes in 2026, here is my honest ranking...</p>`,
//       author: "Aditya Sharma",
//       authorRole: "Food Enthusiast",
//     },
//     // Add more if needed
//   ];

//   const post = blogPosts.find((p) => p.id === Number(id));

//   if (!post) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="text-center">
//           <h2 className="text-3xl font-bold text-gray-800 mb-4">Article not found</h2>
//           <Link to="/blog" className="text-indigo-600 hover:underline">
//             ← Back to all articles
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   const relatedPosts = blogPosts
//     .filter((p) => p.id !== post.id && p.category === post.category)
//     .slice(0, 3);

//   return (
//     <article className="min-h-screen bg-gray-50 pt-8 pb-20">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Back Navigation */}
//         <div className="mb-10">
//           <button
//             onClick={() => navigate(-1)}
//             className="inline-flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
//           >
//             <ArrowLeftIcon className="w-5 h-5 mr-2" />
//             Back to articles
//           </button>
//         </div>

//         {/* Hero Image + Metadata */}
//         <div className="relative rounded-2xl overflow-hidden mb-10 shadow-xl">
//           <img
//             src={post.image}
//             alt={post.title}
//             className="w-full h-64 sm:h-96 object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
//           <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
//             <span className="inline-block bg-indigo-600 text-white text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full mb-4">
//               {post.category}
//             </span>
//             <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
//               {post.title}
//             </h1>
//             <div className="mt-4 flex items-center text-white/90 text-sm sm:text-base">
//               <span>{post.date}</span>
//               <span className="mx-3">•</span>
//               <span>{post.readTime}</span>
//             </div>
//           </div>
//         </div>

//         {/* Author */}
//         <div className="flex items-center mb-12">
//           <img
//             src={post.authorImage}
//             alt={post.author}
//             className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-indigo-100"
//           />
//           <div>
//             <p className="font-semibold text-gray-900">{post.author}</p>
//             <p className="text-sm text-gray-600">{post.authorRole}</p>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="prose prose-lg prose-indigo max-w-none mb-16">
//           <div dangerouslySetInnerHTML={{ __html: post.content }} />
//         </div>

//         {/* Share Buttons */}
//         <div className="flex items-center justify-center sm:justify-start gap-4 mb-16">
//           <span className="text-gray-600 font-medium">Share this article:</span>
//           <button className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
//             <ShareIcon className="w-5 h-5 text-gray-700" />
//           </button>
//           {/* You can add Twitter, LinkedIn, WhatsApp icons here */}
//         </div>

//         {/* Related Articles */}
//         {relatedPosts.length > 0 && (
//           <div className="border-t border-gray-200 pt-16">
//             <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
//               You may also like
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {relatedPosts.map((related) => (
//                 <Link
//                   key={related.id}
//                   to={`/blog/${related.id}`}
//                   className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
//                 >
//                   <div className="aspect-[16/9] relative">
//                     <img
//                       src={related.image}
//                       alt={related.title}
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                     />
//                     <span className="absolute top-3 left-3 bg-indigo-600 text-white text-xs font-medium px-3 py-1 rounded-full">
//                       {related.category}
//                     </span>
//                   </div>
//                   <div className="p-5">
//                     <h3 className="text-lg font-bold text-gray-900 line-clamp-2 group-hover:text-indigo-700 transition-colors">
//                       {related.title}
//                     </h3>
//                     <p className="mt-2 text-sm text-gray-500">
//                       {related.date} • {related.readTime}
//                     </p>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         )}

//         <div className="text-center mt-20">
//           <Link
//             to="/blog"
//             className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-full hover:bg-indigo-700 transition-colors"
//           >
//             ← View all articles
//           </Link>
//         </div>
//       </div>
//     </article>
//   );
// };

// export default BlogDetail;

// BlogDetail.jsx
import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeftIcon, ShareIcon } from '@heroicons/react/24/outline';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);

        // ✅ Fetch single product by id
        const res = await fetch(`http://localhost:8000/api/product/${id}`);
        if (!res.ok) throw new Error(`HTTP ${res.status} – ${res.statusText}`);

        const json = await res.json();
        console.log('BlogDetail raw response:', json);

        // ✅ Unwrap { success, data } envelope
        const productData = json?.data ?? json;
        if (!productData) throw new Error('Product not found');

        setPost(productData);

        // ✅ Fetch related posts (same category)
        const allRes = await fetch('http://localhost:8000/api/product');
        if (allRes.ok) {
          const allJson = await allRes.json();
          const allProducts = Array.isArray(allJson)
            ? allJson
            : Array.isArray(allJson?.data)
            ? allJson.data
            : [];

          const related = allProducts
            .filter(
              (p) =>
                (p._id || p.id) !== id &&
                p?.category?.name === productData?.category?.name
            )
            .slice(0, 3);

          setRelatedPosts(related);
        }
      } catch (err) {
        console.error('BlogDetail fetch failed:', err);
        setError(err.message || 'Failed to load article');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  // ─── Loading ───────────────────────────────────────────────
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-xl font-medium text-gray-600 animate-pulse">Loading...</div>
      </div>
    );
  }

  // ─── Error / Not Found ─────────────────────────────────────
  if (error || !post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {error || 'Article not found'}
          </h2>
          <Link to="/blog" className="text-indigo-600 hover:underline">
            ← Back to all articles
          </Link>
        </div>
      </div>
    );
  }

  // ─── Helpers ───────────────────────────────────────────────
  const formatDate = (iso) =>
    iso
      ? new Date(iso).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })
      : '';

  const categoryName = post?.category?.name ?? 'Uncategorised';
  const heroImage = post?.images?.[0] ?? null;
  const postDate = formatDate(post?.createdAt);

  // ─── Render ────────────────────────────────────────────────
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
          {heroImage ? (
            <img
              src={heroImage}
              alt={post.name}
              className="w-full h-64 sm:h-96 object-cover"
            />
          ) : (
            <div className="w-full h-64 sm:h-96 bg-indigo-100 flex items-center justify-center">
              <span className="text-indigo-300 text-lg font-medium">No image</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
            <span className="inline-block bg-indigo-600 text-white text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full mb-4">
              {categoryName}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              {post.name}
            </h1>
            {postDate && (
              <div className="mt-4 flex items-center text-white/90 text-sm sm:text-base">
                <span>{postDate}</span>
              </div>
            )}
          </div>
        </div>

        {/* Author */}
        {post.author && (
          <div className="flex items-center mb-12">
            <div className="w-14 h-14 rounded-full bg-indigo-200 flex items-center justify-center mr-4 border-2 border-indigo-100 text-indigo-700 font-bold text-xl uppercase">
              {post.author.charAt(0)}
            </div>
            <div>
              <p className="font-semibold text-gray-900">{post.author}</p>
            </div>
          </div>
        )}

        {/* Main Content */}
        {post.description && (
          <div className="prose prose-lg prose-indigo max-w-none mb-16">
            <div dangerouslySetInnerHTML={{ __html: post.description }} />
          </div>
        )}

        {/* Video (if present) */}
        {post.videoUrl && (
          <div className="mb-16 rounded-2xl overflow-hidden shadow-xl">
            <video controls className="w-full" src={post.videoUrl} />
          </div>
        )}

        {/* Share Buttons */}
        <div className="flex items-center justify-center sm:justify-start gap-4 mb-16">
          <span className="text-gray-600 font-medium">Share this article:</span>
          <button
            onClick={() => navigator.clipboard.writeText(window.location.href)}
            className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            title="Copy link"
          >
            <ShareIcon className="w-5 h-5 text-gray-700" />
          </button>
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
                  key={related._id || related.id}
                  to={`/blog/${related._id || related.id}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="aspect-[16/9] relative bg-indigo-50">
                    {related.images?.[0] ? (
                      <img
                        src={related.images[0]}
                        alt={related.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-indigo-200 text-sm">
                        No image
                      </div>
                    )}
                    <span className="absolute top-3 left-3 bg-indigo-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                      {related?.category?.name ?? 'Uncategorised'}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 line-clamp-2 group-hover:text-indigo-700 transition-colors">
                      {related.name}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                      {formatDate(related.createdAt)}
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
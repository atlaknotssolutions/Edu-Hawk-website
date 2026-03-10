
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Technology', 'Lifestyle', 'Travel', 'Food', 'Finance'];

  const blogPosts = [
    {
      id: 1,
      title: "Why React Server Components Will Change Frontend Forever",
      excerpt: "The biggest shift in React since hooks — and most developers still don't understand it properly.",
      category: "Technology",
      date: "Mar 8, 2026",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "10 Hidden Beaches in Goa You Won't Find on Instagram",
      excerpt: "Less crowded, more peaceful — these secret spots are still untouched in 2026.",
      category: "Travel",
      date: "Feb 28, 2026",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1512343879784-d9610d7d3f93?w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Best Indian Street Food Cities in 2026 – Ranked",
      excerpt: "From Indore's poha to Kolkata's kathi rolls — real ranking after eating 400+ dishes.",
      category: "Food",
      date: "Mar 1, 2026",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "How I Built ₹12 Lakh Passive Income with Mutual Funds",
      excerpt: "Real numbers, real strategy — no fluff, no get-rich-quick nonsense.",
      category: "Finance",
      date: "Feb 15, 2026",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1556155099-490a1ba16284?w=800&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "Morning Routine That Changed My Life in 30 Days",
      excerpt: "No 5 AM club nonsense — realistic routine for Indians who wake up at 7.",
      category: "Lifestyle",
      date: "Mar 5, 2026",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1506784365847-bbad939e0659?w=800&auto=format&fit=crop",
    },
    {
      id: 6,
      title: "Tailwind CSS vs Chakra UI in 2026 – Honest Comparison",
      excerpt: "After building 8 production apps — which one should you choose today?",
      category: "Technology",
      date: "Feb 20, 2026",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop",
    },
  ];

  const filteredPosts =
    activeCategory === 'All'
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  const faqs = [
    {
      question: "How often do you publish new articles?",
      answer: "2–3 high-quality articles every week. We focus on depth instead of daily posting.",
    },
    {
      question: "Can I write for this blog?",
      answer: "Yes! We accept guest posts if the topic matches our categories and quality standards.",
    },
    {
      question: "Is the content free to read?",
      answer: "All articles are 100% free. No paywall, no subscription needed.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Latest Articles
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Handpicked stories about tech, travel, food, money and better living
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200
                ${
                  activeCategory === category
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
              >
                <div className="aspect-[16/9] relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-indigo-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto">
                   

                    <Link
  to={`/blog/${post.id}`}
  className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
>
  Read full article →
</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500">
            No articles found in this category yet.
          </div>
        )}

        {/* FAQ Section */}
        <div className="mt-24 pt-16 border-t border-gray-200">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h3>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-white rounded-xl shadow-sm group"
              >
                <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-medium text-gray-900 hover:text-indigo-700 transition-colors">
                  {faq.question}
                  <span className="ml-4 text-indigo-600 group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-2 text-gray-600">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
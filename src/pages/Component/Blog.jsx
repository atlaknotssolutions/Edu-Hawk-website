

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [categories, setCategories] = useState(['All']);
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const res = await fetch('http://localhost:8000/api/product');
        if (!res.ok) throw new Error(`HTTP ${res.status} – ${res.statusText}`);

        const json = await res.json();
        console.log('Products raw response:', json);

        // ✅ API returns { success: true, data: [...] }
        const productArray = Array.isArray(json)
          ? json
          : Array.isArray(json?.data)
          ? json.data
          : json?.products ?? json?.results ?? [];

        setProducts(productArray);

        // ✅ Derive unique category names from the nested category objects
        const uniqueCategories = [
          'All',
          ...new Set(
            productArray
              .map((p) => p?.category?.name ?? null)
              .filter(Boolean)
          ),
        ];
        setCategories(uniqueCategories);
      } catch (err) {
        console.error('Products fetch failed:', err);
        setError(err.message || 'Failed to load products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // ✅ Filter by nested category.name
  const filteredProducts =
    activeCategory === 'All'
      ? products
      : products.filter(
          (product) => product?.category?.name === activeCategory
        );

  // ─────────────────────────────────────────────────────────────
  //  Render
  // ─────────────────────────────────────────────────────────────

  if (loading) {
    return (
      <section className="min-h-screen bg-gray-50 flex items-center justify-center py-16 md:py-24">
        <div className="text-xl md:text-2xl font-medium text-gray-600 animate-pulse">
          Loading...
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="min-h-screen bg-gray-50 flex items-center justify-center py-16 md:py-24">
        <div className="text-xl md:text-2xl text-red-600 font-medium text-center px-4">
          {error}
          <br />
          <button
            onClick={() => window.location.reload()}
            className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Retry
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-50 min-h-screen py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Latest Products / Articles
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our latest collection – filter by category
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 md:mb-14">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-medium
                transition-all duration-300 ease-in-out transform hover:scale-105
                ${
                  activeCategory === category
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-300/50'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {filteredProducts.map((product) => (
              <article
                key={product._id || product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col h-full group"
              >
                {/* Thumbnail */}
                {product.images?.[0] && (
                  <div className="overflow-hidden h-52">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                {/* Body */}
                <div className="p-5 flex flex-col flex-1">
                  {/* Category badge */}
                  {product.category?.name && (
                    <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wide mb-2">
                      {product.category.name}
                    </span>
                  )}

                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    {product.name}
                  </h3>

                  {product.author && (
                    <p className="text-sm text-gray-500 mb-3">
                      By <span className="font-medium">{product.author}</span>
                    </p>
                  )}

                  {product.description && (
                    <div
                      className="text-sm text-gray-600 line-clamp-3 mb-4 flex-1"
                      dangerouslySetInnerHTML={{ __html: product.description }}
                    />
                  )}

                  <Link
                    to={`/blog/${product._id || product.id}`}
                    className="mt-auto inline-block text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition"
                  >
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 sm:py-20 md:py-24 text-gray-500 text-lg sm:text-xl">
            No items found{activeCategory !== 'All' ? ` in "${activeCategory}"` : ''}.
          </div>
        )}


        
         {/* FAQ Section (optional – comment out if not needed) */}
        {/* Uncomment and define faqs array if you want to keep it */}
         
      
   
     </div>
      
    </section>
  );
};

export default Blog;
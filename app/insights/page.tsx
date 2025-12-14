'use client';

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-gray-600 text-sm mb-8">Insights</p>
          <h1 className="text-gray-900 text-6xl md:text-7xl lg:text-8xl font-serif leading-[0.95] tracking-tight mb-12">
            Thoughts & Ideas
          </h1>
          <p className="text-gray-600 text-xl max-w-2xl mb-16">
            Explore our latest insights on innovation, strategy, and digital transformation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <article key={i} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg aspect-video mb-6 bg-gray-200">
                  <img
                    src={`https://images.pexels.com/photos/${3567390 + i}/pexels-photo-${3567390 + i}.jpeg?auto=compress&cs=tinysrgb&w=600`}
                    alt="Insight"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-serif mb-2 group-hover:opacity-70 transition-opacity">
                  Insight {i}: The Future of Digital
                </h3>
                <p className="text-gray-600 text-sm">By Evolotek team • 5 min read</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

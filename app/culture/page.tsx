'use client';

export default function CulturePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-gray-600 text-sm mb-8">Culture</p>
          <h1 className="text-gray-900 text-6xl md:text-7xl lg:text-8xl font-serif leading-[0.95] tracking-tight mb-12">
            Define Your Edge With Us
          </h1>
          <p className="text-gray-600 text-xl max-w-2xl mb-16">
            Join a team of world-class experts dedicated to advancing people and planet through innovation and creativity.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-serif mb-4">Our Values</h3>
              <ul className="space-y-4">
                {[
                  'Human-centered design',
                  'Creative excellence',
                  'Sustainable impact',
                  'Bold innovation',
                  'Collaborative spirit',
                  'Continuous learning',
                ].map((value) => (
                  <li key={value} className="text-gray-600 flex items-center gap-3">
                    <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></span>
                    {value}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative overflow-hidden rounded-lg aspect-video">
              <img
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

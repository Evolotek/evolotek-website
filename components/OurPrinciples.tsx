import { motion } from 'framer-motion';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface Principle {
  title: string;
  description: string;
}

const principles: Principle[] = [
  {
    title: 'AI + Product Engineering',
    description:
      'Build, launch, and scale smarter — combining AI, product strategy, and engineering to reduce time-to-market and drive measurable outcomes.',
  },
  {
    title: 'Digital Transformation',
    description:
      'Reinvent workflows and customer experiences with data-driven design and modern platforms that unlock operational and customer value.',
  },
  {
    title: 'Fintech Expertise',
    description:
      'Design compliant, scalable payments and financial products that power the future of digital finance and trusted transactions.',
  },
  {
    title: 'Global Team, Real Speed',
    description:
      'Cross-border teams (India ↔ USA) collaborating in real time to deliver results quickly and with cultural fluency.',
  },
];

export default function OurPrinciples() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="relative bg-black text-white py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-serif mb-16"
        >
          Transforming Ideas into Impact — Fast.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-gray-400 max-w-3xl mb-12"
        >
          We help ambitious teams turn ideas into powerful products. From AI-driven
          innovation to scalable engineering, we make your vision real — faster
          than you thought possible.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-4">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border-t border-gray-700 pt-6"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full flex items-start justify-between text-left group"
                >
                  <h3 className="text-xl md:text-2xl font-medium pr-4 group-hover:text-gray-300 transition-colors">
                    {principle.title}
                  </h3>
                  <span className="flex-shrink-0 mt-1">
                    {openIndex === index ? (
                      <Minus className="w-6 h-6" />
                    ) : (
                      <Plus className="w-6 h-6" />
                    )}
                  </span>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-400 mt-4 text-base md:text-lg leading-relaxed pr-8">
                    {principle.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative lg:sticky lg:top-24 h-full"
          >
            <div className="h-full rounded-sm overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1600"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';

export default function LetsWorkTogether() {
  return (
    <section className="relative bg-black text-white py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">
              Let's work together
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Reach out to our global team to imagine, make and scale new
              products, services, experiences, business models, ventures
              and ways of working.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-start lg:justify-end"
          >
            <a
              href="/contact"
              className="inline-block border-2 border-white px-12 py-4 text-lg font-medium hover:bg-white hover:text-black transition-all duration-300"
            >
              Get in touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

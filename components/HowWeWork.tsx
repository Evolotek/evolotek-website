import { motion } from 'framer-motion';

export default function HowWeWork() {
  return (
    <section className="relative bg-gradient-to-br from-cyan-100 via-blue-50 to-slate-200 py-24 md:py-32 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <h3 className="text-sm uppercase tracking-widest text-gray-600 font-medium">
              How we work
            </h3>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-tight text-gray-900">
              Advancing people and planet
            </h2>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl">
              The disruptive forces of emerging technologies and
              sustainable objectives present a reinvention imperative for
              businesses—and the potential to create entirely new
              dimensions of value. Navigate the dual transition of the eco-digital
              era with innovative solutions to today's biggest
              challenges.
            </p>

            <motion.a
              href="/services"
              whileHover={{ scale: 1.02 }}
              className="inline-block border-2 border-black px-10 py-3 text-base font-medium hover:bg-black hover:text-white transition-all duration-300"
            >
              Explore our services
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/8297452/pexels-photo-8297452.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Innovation and technology"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

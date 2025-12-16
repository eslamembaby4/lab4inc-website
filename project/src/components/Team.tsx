import { motion } from 'framer-motion';

export default function Team() {
  return (
    <section id="team" className="py-32 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-medium text-emerald-900 tracking-widest uppercase mb-4">Our Team</p>
          <h2 className="text-4xl md:text-5xl font-light text-emerald-950 mb-4">
            Leadership
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ y: -5 }}
          className="relative bg-gradient-to-br from-slate-50 to-white p-12 border-2 border-slate-200 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-2xl"
        >
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-emerald-600 to-teal-600"></div>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0"
            >
              <img
                src="/assets/nifemi.png"
                alt="Nifemi Oguntuase"
                className="w-40 h-40 rounded-full border-4 border-white shadow-xl object-cover"
              />
            </motion.div>
            <div className="flex-1 text-center md:text-left">
              <motion.h3
                whileHover={{ x: 5 }}
                className="text-2xl font-medium text-emerald-950 mb-2"
              >
                Founder
              </motion.h3>
              <p className="text-sm text-emerald-900/60 mb-6 font-medium uppercase tracking-wide">
                Nifemi Oguntuase
              </p>
              <p className="text-slate-700 leading-relaxed text-lg">
                Nifemi has extensive experience in critical minerals, battery materials, and process development, working across pilot plants, technology developers, and investors.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

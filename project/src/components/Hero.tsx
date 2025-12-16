import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -right-48 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -left-48 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-6 px-6 py-3 bg-emerald-900/5 backdrop-blur-sm rounded-full border border-emerald-900/10"
        >
          <p className="text-sm font-medium text-emerald-900 tracking-wide">
            CRITICAL MINERALS CONSULTING
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-6xl md:text-7xl lg:text-8xl font-light text-emerald-950 mb-8 tracking-tight"
        >
          Lab 4 Inc.
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-32 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mb-12"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xl md:text-2xl text-slate-700 mb-16 max-w-4xl mx-auto leading-relaxed"
        >
          We advise investors, operators, and technology developers on scalable,
          low-impact critical mineral and battery materials projects.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center justify-center px-10 py-5 bg-emerald-900 text-white overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl"
          >
            <span className="relative z-10 text-lg font-medium">Book a Consultation</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-emerald-800 to-teal-800"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          <motion.a
            href="#services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-10 py-5 border-2 border-emerald-900 text-emerald-900 hover:bg-emerald-900 hover:text-white transition-all duration-300 text-lg font-medium"
          >
            Explore Services
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-24"
        >
          <motion.a
            href="#services"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex flex-col items-center text-emerald-900/60 hover:text-emerald-900 transition-colors"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <ChevronDown size={24} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

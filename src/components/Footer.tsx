import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center border-t border-white/10 pt-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <p className="text-2xl font-light mb-2">
              Lab 4 Inc.
            </p>
            <p className="text-white/60 text-sm tracking-wide">
              Consulting in Critical Minerals and Clean Processing
            </p>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/50 text-sm"
          >
            © 2025 Lab 4 Inc. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}

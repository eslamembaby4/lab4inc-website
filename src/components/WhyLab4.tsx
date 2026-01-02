import { motion } from 'framer-motion';
import { Award, Target, TrendingUp } from 'lucide-react';

const reasons = [
  {
    number: '01',
    icon: Award,
    title: 'Technical Expertise',
    description: 'Deep technical knowledge of critical minerals and battery materials with practical experience at pilot and demo scale.'
  },
  {
    number: '02',
    icon: Target,
    title: 'Practical Implementation',
    description: 'We bridge the gap between laboratory concepts and commercial implementation, focusing on what can actually be built, operated, and financed.'
  },
  {
    number: '03',
    icon: TrendingUp,
    title: 'Clear Guidance',
    description: 'Our role is to give clients a clear, technically grounded view of risk, opportunity, and execution pathways.'
  }
];

export default function WhyLab4() {
  return (
    <section className="relative py-32 px-4 bg-emerald-900 text-white overflow-hidden">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.1, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
      />

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-white/70 tracking-widest uppercase mb-4">Our Approach</p>
          <h2 className="text-4xl md:text-5xl font-light mb-4">
            Why Work With Lab 4
          </h2>
          <div className="w-16 h-1 bg-white/40 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 bg-white/10 flex items-center justify-center mb-4"
                >
                  <Icon size={28} />
                </motion.div>
                <div className="text-4xl font-light text-white/30 mb-4">{reason.number}</div>
                <h3 className="text-xl font-medium mb-4">{reason.title}</h3>
                <p className="text-white/80 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
